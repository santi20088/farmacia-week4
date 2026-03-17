// ============================================
// SECCIÓN 1: Datos del dominio (Farmacia y Salud)
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "Farmacia y Salud";

// Producto farmacéutico (con espacios para probar trim)
const rawEntityName = "   Acetaminofén 500mg   ";

// Categoría del producto
const entityCategory = "Analgésicos";

// Código identificador
const entityCode = "FAR-2026-DS";

// Descripción
const entityDescription = "Medicamento utilizado para aliviar el dolor y reducir la fiebre en pacientes.";

// Dato numérico
const mainValue = 15;

// Estado
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

const entityName = rawEntityName.trim();
const entityNameUpper = entityName.toUpperCase();
const entityNameLower = entityName.toLowerCase();
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

const hasValidPrefix = entityCode.startsWith(codePrefix);
const descriptionIsRelevant = entityDescription.includes("pacientes");
const hasValidSuffix = entityCode.endsWith("DS");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(50);
const subSeparator = "-".repeat(50);

const mainCard = `
${separator}
    ${DOMAIN_NAME.toUpperCase()} — CONTROL DE PRODUCTOS
${separator}
Producto:    ${entityNameUpper}
Categoría:   ${entityCategory}
Identificador: ${entityCode}
Ref. Interna: ${codePrefix}
Días Uso:    ${mainValue}
Estado:      ${isActive ? "DISPONIBLE ✅" : "AGOTADO ❌"}

${subSeparator}
DESCRIPCIÓN:
${entityDescription}
Responsable: Daniel Santiago Rodríguez
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones en Consola
// ============================================

console.log("--- Reporte de Integridad de Datos ---");
console.log(`¿El prefijo '${codePrefix}' es correcto?: ${hasValidPrefix}`);
console.log(`¿El producto es relevante?: ${descriptionIsRelevant}`);
console.log(`¿Contiene el sufijo 'DS'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación
// ============================================

console.log("--- Notificación de Sistema ---");

const notification = `📢 Notificación: El producto "${entityName}" (${entityCode}) ha sido registrado exitosamente.`;
console.log(notification);
console.log("");