// ============================================
// SECCIÓN 1: Datos del dominio (Farmacia y Salud)
// ============================================

// Constantes base del sistema
const MULTA_POR_DIA = 1_200;           // Valor por retraso en devolución de equipos médicos
const DIAS_PRESTAMO_ESTANDAR = 8;      // Días de préstamo para equipos
const CAPACIDAD_SALA_INTERNET = 12;    // Cupos en área digital de atención
const VALOR_IMPRESION_BN = 500;        // Costo por impresión de fórmulas médicas

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Gestión de Servicios de Farmacia y Salud ===");

const diasDeMora = 3;
const totalSancion = MULTA_POR_DIA * diasDeMora;
console.log("Multa por devolución tardía:", totalSancion);

const hojasImpresas = 15;
const subtotalImpresion = hojasImpresas * VALOR_IMPRESION_BN;
console.log("Costo total de impresión de fórmulas:", subtotalImpresion);

// Cálculo de disponibilidad de módulos de atención
const equiposOcupados = 7;
const equiposLibres = CAPACIDAD_SALA_INTERNET - equiposOcupados;
console.log("Módulos de atención disponibles:", equiposLibres);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Actualización de Inventario de Medicamentos ===");

let medicamentosDisponibles = 120;
console.log("Medicamentos al inicio:", medicamentosDisponibles);

// Llega nuevo stock
medicamentosDisponibles += 25; 
console.log("Medicamentos tras recibir proveedor:", medicamentosDisponibles);

// Salida por ventas o vencimiento
medicamentosDisponibles -= 5;
console.log("Inventario final:", medicamentosDisponibles);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones de Paciente ===");

const tipoUsuario = "Afiliado";
const esAfiliado = tipoUsuario === "Afiliado";
console.log("¿El paciente está afiliado al sistema?:", esAfiliado);

const serviciosActivos = 3;
const alcanzoLimite = serviciosActivos === 5;
console.log("¿El paciente alcanzó el límite de servicios?:", alcanzoLimite);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Lógica de Atención ===");

const tieneSeguroActivo = true;
const tieneDeudas = false;

// Atención si tiene seguro y no tiene deudas
const autorizarAtencion = tieneSeguroActivo && !tieneDeudas;
console.log("¿Se autoriza la atención médica?:", autorizarAtencion);

const solicitaServicioDigital = true;
const hayDisponibilidad = equiposLibres > 0;

// Atención digital
const asignarTurno = solicitaServicioDigital && hayDisponibilidad;
console.log("¿Se asigna turno digital?:", asignarTurno);

console.log("");

// ============================================
// SECCIÓN 6: Resumen Final
// ============================================
console.log("=== Resumen de Turno: Farmacia y Salud ===");
console.log("Responsable: Daniel Santiago Rodríguez");
console.log(`Inventario de medicamentos: ${medicamentosDisponibles} unidades`);
console.log(`Estado atención digital: ${equiposOcupados}/${CAPACIDAD_SALA_INTERNET} ocupados`);
console.log(`Recaudo por sanciones: $${totalSancion}`);
console.log("");