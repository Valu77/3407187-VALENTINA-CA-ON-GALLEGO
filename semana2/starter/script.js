// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================

// SECCIÓN 1: DATOS PRINCIPALES

const DOMAIN_NAME = "Página web de asesoría agronómica";

const itemName = "Asesoría para Cultivo de Café";

const itemCategory = "Producción agrícola";

const itemQuantity = 50_000;

const isItemAvailable = true;

const pendingValue = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================

console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:     ${itemName}`);
console.log(`Categoría:  ${itemCategory}`);
console.log(`Precio:     $${itemQuantity}`);
console.log(`Disponible: ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS
// ============================================

console.log("--- Tipos de datos ---");

console.log("typeof itemName:     ", typeof itemName);
console.log("typeof itemQuantity: ", typeof itemQuantity);
console.log("typeof isItemAvailable:", typeof isItemAvailable);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES
// ============================================

console.log("--- Conversiones ---");

const priceAsText = String(itemQuantity);

console.log("Precio como texto:", priceAsText);
console.log("typeof convertido:", typeof priceAsText);
console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================

console.log("--- Valor nulo ---");

console.log("Valor pendiente:", pendingValue);
console.log("typeof null:", typeof pendingValue);
console.log("¿Es null?:", pendingValue === null);
console.log("");


// ============================================
// CIERRE
// ============================================

console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");