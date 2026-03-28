// ============================================
// PROYECTO SEMANA 05: Clasificador
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

const elementName = "Servicio de análisis de suelo";
const elementStatus = "active";
const elementValue = 60;
const elementType = "analisis";
const elementInfo = { detail: "Revisión del cultivo", location: "Finca" };


// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;

if (elementValue >= 80) {
  classification = "Alta";
} else if (elementValue >= 50) {
  classification = "Media";
} else {
  classification = "Baja";
}


// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";


// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "analisis":
    typeLabel = "Análisis";
    break;
  case "cultivo":
    typeLabel = "Cultivo";
    break;
  default:
    typeLabel = "Desconocido";
}


// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información";


// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.location ?? "No especificado";


// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);

console.log("=".repeat(40));