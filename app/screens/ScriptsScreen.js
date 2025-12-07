// scripts/update-changelog.js
// Script para actualizar el CHANGELOG al estilo "Keep a Changelog" automáticamente

const fs = require("fs");

const changelogPath = "./CHANGELOG.md";
const version = process.argv[2]; // El usuario pasa la versión: 0.1.4
const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

if (!version) {
  console.error("❌ Debes especificar una versión. Ej: node scripts/update-changelog.js 0.1.4");
  process.exit(1);
}

let changelog = fs.readFileSync(changelogPath, "utf8");

// Busca la sección [Unreleased]
const unreleasedRegex = /## \[Unreleased\][\s\S]*?(?=## \[|$)/;
const match = unreleasedRegex.exec(changelog);

if (!match) {
  console.log("⚠️ No se encontró la sección [Unreleased].");
  process.exit(0);
}

const unreleasedBlock = match[0];

// Verifica si hay algo para mover
if (!unreleasedBlock.includes("###")) {
  console.log("⚠️ No hay cambios en 'Unreleased' para mover.");
  process.exit(0);
}

// Construye la nueva versión
const newVersionBlock =
  `## [${version}] – ${date}\n` +
  unreleasedBlock
    .replace("## [Unreleased]", "")
    .trim() +
  "\n\n## [Unreleased]\n";

// Reemplaza en todo el changelog
const updatedChangelog = changelog.replace(unreleasedRegex, newVersionBlock);

// Guarda cambios
fs.writeFileSync(changelogPath, updatedChangelog, "utf8");

console.log(`✅ CHANGELOG actualizado -> versión ${version}`);
