# 🏥 Semana 04: Strings — Texto y Template Literals (Farmacia y Salud)

> **Etapa 0 — Fundamentos de Programación** | Semana 4 de 10

---

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana serás capaz de:

- Trabajar con strings en el contexto de farmacia (nombres de medicamentos, descripciones)
- Usar template literals para mostrar información dinámica de productos de salud
- Manejar secuencias de escape en textos (recetas, instrucciones)
- Aplicar métodos de búsqueda, transformación y extracción en datos de medicamentos
- Reemplazar concatenaciones con `+` por template literals modernos

---

## 📚 Requisitos previos

- Semana 01: `console.log()`, tipos primitivos  
- Semana 02: `const`/`let`, tipos y conversiones  
- Semana 03: operadores y expresiones  

---

## 🗂️ Estructura de la semana

---

## 📝 Contenidos Aplicados al Dominio

### 🧠 Teoría

- **Propiedades de strings:**  
  Longitud del nombre de medicamentos (`.length`)

- **Métodos de transformación:**  
  Convertir nombres a mayúsculas o minúsculas  
  Ej: `medicamento.toUpperCase()`

- **Métodos de búsqueda y extracción:**  
  Buscar palabras en descripciones  
  Ej: `descripcion.includes("mg")`

- **Template literals:**  
  Mostrar información completa del medicamento  
  Ej:
  ```js
  `El medicamento ${nombre} cuesta ${precio}`