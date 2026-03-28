// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Asesoría Agronómica
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Asesoría Agronómica";
const VALUE_LABEL = "precio (COP)";
const CURRENCY = "$";

const items = [
  { id: 1, name: "Maíz", category: "cultivo", value: 120000, active: true },
  { id: 2, name: "Fertilizante NPK", category: "insumo", value: 80000, active: true },
  { id: 3, name: "Riego por goteo", category: "servicio", value: 200000, active: false },
  { id: 4, name: "Papa", category: "cultivo", value: 95000, active: true },
  { id: 5, name: "Herbicida", category: "insumo", value: 60000, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato (arrow)
// ============================================

const formatItem = (item) => {
  return `🌱 ${item.name} [${item.category}] — ${CURRENCY}${item.value}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

const calculateValue = (baseValue, factor = 1) => {
  return baseValue * factor;
};

// ============================================
// SECCIÓN 4: Función de validación (arrow)
// ============================================

const isValid = (item) => {
  return item.active === true;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) => {
  return `${label}: ${currency}${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\nNo hay datos.");
} else {

  // --- Listado ---
  console.log("\nListado:");
  let lineNumber = 1;

  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;

  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }

  console.log(`\nElementos activos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;

  for (const item of items) {
    totalValue += calculateValue(item.value);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);