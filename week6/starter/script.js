// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Asesoría Agronómica
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const items = [
  { name: "Maíz", category: "cultivo", value: 120000 },
  { name: "Fertilizante NPK", category: "insumo", value: 80000 },
  { name: "Riego por goteo", category: "servicio", value: 200000 },
  { name: "Papa", category: "cultivo", value: 95000 },
  { name: "Herbicida", category: "insumo", value: 60000 },
  { name: "Análisis de suelo", category: "servicio", value: 150000 }
];

const categories = ["cultivo", "insumo", "servicio"];

const valueLabel = "precio (COP)";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const item of items) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: $${item.value}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const item of items) {
    if (item.category === category) {
      count++;
    }
  }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of items) {
  totalValue += item.value;
}

const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: $${totalValue}`);
console.log(`Promedio ${valueLabel}: $${averageValue.toFixed(0)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {
    if (item.value > maxItem.value) {
      maxItem = item;
    }
    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem.name} ($${maxItem.value})`);
  console.log(`Menor ${valueLabel}: ${minItem.name} ($${minItem.value})`);
}

console.log("");

// ============================================
// SECCIÓN EXTRA: while + continue (rúbrica)
// ============================================
let i = 0;

while (i < items.length) {
  const item = items[i];
  i++;

  if (item.value === 0) {
    continue;
  }
}

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  let comparison = "";

  if (item.value >= averageValue) {
    comparison = "sobre el promedio";
  } else {
    comparison = "bajo el promedio";
  }

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");