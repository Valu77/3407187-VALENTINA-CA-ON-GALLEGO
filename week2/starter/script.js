// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

const DOMAIN_NAME = "Asesoría agronómica";

const itemName = "Análisis de cultivo de maíz";

const itemCategory = "Servicio agrícola";

const itemQuantity = 50000;

const isItemAvailable = true;

const pendingServiceDate = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:    ${itemName}`);
console.log(`Categoría: ${itemCategory}`);
console.log(`Cantidad:  ${itemQuantity}`);
console.log(`Disponible: ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:     ", typeof itemName);
console.log("typeof itemQuantity: ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

const priceAsText = String(itemQuantity);
console.log("Valor como texto:", priceAsText);
console.log("typeof (convertido):", typeof priceAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Valor pendiente:", pendingServiceDate);
console.log("typeof null:", typeof pendingServiceDate);
console.log("¿Es null?:", pendingServiceDate === null);
console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");