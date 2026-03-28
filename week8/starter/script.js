// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================

const DOMAIN_NAME = "Inventario Agronómico";
const VALUE_LABEL = "productos";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Maíz", category: "cultivo", price: 120000, stock: 50, active: true },
  { id: 2, name: "Fertilizante NPK", category: "insumo", price: 80000, stock: 30, active: true },
  { id: 3, name: "Riego por goteo", category: "servicio", price: 200000, stock: 10, active: false },
  { id: 4, name: "Papa", category: "cultivo", price: 95000, stock: 40, active: true },
  { id: 5, name: "Herbicida", category: "insumo", price: 60000, stock: 25, active: true }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  if (removed.length > 0) {
    console.log(`Eliminado por índice: ${removed[0].name}`);
  }
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — $${item.price} — stock: ${item.stock}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// push
addItem({ id: 6, name: "Abono orgánico", category: "insumo", price: 70000, stock: 20, active: true });

// unshift
addPriorityItem({ id: 0, name: "Semillas mejoradas", category: "cultivo", price: 50000, stock: 60, active: true });

// splice
removeByIndex(2);

// pop
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// find
const found = findByName("Maíz");
console.log("Búsqueda:", found ? formatItem(found) : "No encontrado");

// filter
const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);

// spread
const snapshot = [...items, { id: 99, name: "Extra", category: "servicio", price: 100000, stock: 5, active: true }];
console.log("Snapshot creado (sin modificar original)");

// ============================================
// MAP
// ============================================

console.log("\n--- Transformación con map ---\n");

// nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// precios con descuento
const discounted = items.map(item => item.price * 0.9);
console.log("Precios con descuento:", discounted);

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("Reporte completado");
console.log(`${"=".repeat(50)}\n`);