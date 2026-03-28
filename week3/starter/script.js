// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const SERVICE_PRICE = 50_000;
const SERVICES_DONE = 3;
const MAX_FARMS = 10;


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

const totalIncome = SERVICE_PRICE * SERVICES_DONE;
console.log("Ingreso total:", totalIncome);

const remainingFarms = MAX_FARMS - SERVICES_DONE;
console.log("Fincas disponibles:", remainingFarms);

const averageService = totalIncome / SERVICES_DONE;
console.log("Promedio por servicio:", averageService);

const squaredValue = SERVICE_PRICE ** 2;
console.log("Valor elevado:", squaredValue);

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

let accumulated = 0;
accumulated += 50_000;
console.log("Después del primer servicio:", accumulated);

accumulated += 30_000;
console.log("Después del segundo servicio:", accumulated);

accumulated *= 0.9;
console.log("Con descuento:", accumulated);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

const isFull = SERVICES_DONE === MAX_FARMS;
console.log("¿Está lleno?", isFull);

const hasSpace = SERVICES_DONE < MAX_FARMS;
console.log("¿Hay cupos?", hasSpace);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const isAvailable = true;
const hasDiscount = isAvailable && totalIncome >= 100_000;
console.log("¿Aplica descuento?", hasDiscount);

const canAttend = isAvailable || remainingFarms > 0;
console.log("¿Se puede atender?", canAttend);

const notAvailable = !isAvailable;
console.log("¿No disponible?", notAvailable);

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Ingreso total:", totalIncome);
console.log("Fincas disponibles:", remainingFarms);
console.log("Disponible:", isAvailable);

console.log("");