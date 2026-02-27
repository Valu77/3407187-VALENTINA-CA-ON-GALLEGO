# 🌱 Proyecto Semana 02 – Sistema de Asesoría Agronómica

## 📌 Descripción del Proyecto

Este proyecto corresponde a la Semana 02 del Bootcamp JavaScript ES2023.

El dominio asignado fue **Página web de asesoría agronómica**, por lo tanto el sistema está orientado a la gestión de servicios agrícolas como asesorías de cultivo, análisis de suelo y planes de riego.

En esta semana se trabajó principalmente Programación Orientada a Objetos (POO), aplicando clases, encapsulamiento, herencia y validaciones.

---

## 🎯 Objetivo

Desarrollar la estructura base del sistema utilizando clases en JavaScript, aplicando:

- Encapsulamiento con campos privados (#)
- Herencia entre clases
- Getters y setters
- Validaciones
- Uso de métodos personalizados
- Organización del código por responsabilidades

---

## 🏗️ Arquitectura del Sistema

El sistema está compuesto por:

### 🔹 Clase Base: `Service`

Representa un servicio general dentro del sistema.

Contiene:
- ID único generado automáticamente
- Nombre del servicio
- Ubicación
- Estado (activo/inactivo)
- Fecha de creación

Incluye métodos para:
- Activar y desactivar el servicio
- Obtener información
- Validar datos

---

### 🔹 Clases Derivadas

Se implementaron clases que heredan de `Service`:

#### 🌽 CropAdvisory
Representa asesorías de cultivo.
Incluye tipo de cultivo y temporada.

#### 🌱 SoilAnalysis
Representa análisis de suelo.
Incluye nivel de pH y nutrientes.

#### 💧 IrrigationPlan
Representa planes de riego.
Incluye fuente de agua y área cubierta.

---

### 👤 Clase Base: `User`

Representa un usuario del sistema.

Incluye:
- ID único
- Nombre
- Email (con validación)
- Fecha de registro

---

### 👨‍🌾 Clases Derivadas de Usuario

#### Agronomist
Especialista agrícola con una especialidad.

#### Client
Cliente con tamaño de finca.

---

### 🖥️ Clase Principal: `AdvisorySystem`

Es la clase que administra:

- Lista de servicios
- Lista de usuarios
- Estadísticas del sistema

Incluye métodos para:
- Agregar servicios
- Obtener todos los servicios
- Calcular estadísticas (total, activos e inactivos)
- Agregar usuarios

También se utilizó un **static block** para definir información del sistema como versión y nombre.

---

## 📊 Funcionalidades Implementadas

✔ Registro de nuevos servicios  
✔ Activación y desactivación de servicios  
✔ Cálculo automático de estadísticas  
✔ Validación de datos en campos sensibles  
✔ Encapsulamiento usando campos privados (#)  
✔ Uso de herencia para reutilizar código  

---

## 💡 Conceptos Aplicados

- Programación Orientada a Objetos
- Encapsulamiento
- Herencia
- Polimorfismo
- Validación de datos
- Buenas prácticas de organización de clases

---

## 🧪 Pruebas Realizadas

Se realizaron pruebas creando instancias de cada tipo de servicio:

- Asesoría de Maíz
- Análisis de suelo
- Plan de riego

Posteriormente se verificó:

- Que se agregaran correctamente al sistema
- Que las estadísticas se calcularan bien
- Que el estado activo/inactivo funcionara

---

## 🚀 Conclusión

En esta semana comprendí mejor cómo estructurar un sistema usando clases y herencia en JavaScript. 

Aprendí la importancia del encapsulamiento para proteger datos internos y cómo organizar correctamente un proyecto orientado a objetos.

Este proyecto sirve como base para continuar ampliando el sistema en las siguientes semanas.

---

## 👩‍💻 Autor

Valentina  
Bootcamp JavaScript ES2023  
Semana 02 
