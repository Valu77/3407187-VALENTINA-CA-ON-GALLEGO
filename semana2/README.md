# Semana 2 – Gestión de Fichas Agronómicas

## Descripción del Proyecto

En esta semana desarrollé una aplicación llamada **Gestión de Fichas Agronómicas**, que permite registrar y administrar fichas técnicas de cultivos.

El sistema permite:

- Crear nuevas fichas de cultivo
- Asignar nivel de atención
- Registrar observaciones técnicas
- Filtrar por estado
- Buscar por nombre o descripción
- Ver estadísticas generales

Todo fue desarrollado usando los conceptos modernos de JavaScript vistos en la Semana 2.

##  Objetivo de la Semana

Aplicar operadores y métodos modernos de arrays en un proyecto funcional, utilizando:

- Spread operator (...)
- Rest parameters
- Default parameters
- map()
- filter()
- reduce()
- Encadenamiento de métodos
- Object enhancements
- Métodos ES2022 como at() y Object.hasOwn()

## ¿Qué hace mi aplicación?

La página permite registrar fichas técnicas agrícolas con la siguiente información:

- Nombre del cultivo
- Observaciones técnicas
- Tipo de cultivo
- Nivel de atención
- Área en hectáreas
- Fecha de evaluación

Además, muestra estadísticas dinámicas como:

- Total de fichas
- Fichas en monitoreo
- Fichas finalizadas

También incluye filtros por estado y tipo, además de un buscador dinámico.


## Conceptos Aplicados

### Spread Operator

Lo utilicé para:

- Crear copias del array de fichas sin modificar el original
- Agregar nuevas fichas manteniendo la inmutabilidad
- Actualizar estados sin alterar directamente el array principal

Ejemplo aplicado:
Cuando agrego una nueva ficha, uso spread para crear un nuevo array actualizado.


###  Métodos de Arrays

#### map()

Lo utilicé para:

- Renderizar dinámicamente las fichas en pantalla
- Transformar datos antes de mostrarlos en el DOM

#### filter()

Se usa para:

- Filtrar fichas por estado (Todas, En monitoreo, Finalizadas)
- Filtrar por tipo de cultivo
- Buscar coincidencias en el texto del cultivo u observaciones

#### reduce()

Se usa para:

- Calcular estadísticas generales
- Contar cuántas fichas hay por estado
- Obtener el total de registros

### Encadenamiento de métodos

Para aplicar múltiples filtros al mismo tiempo:

```js
fichas
  .filter(...)
  .filter(...)
  .map(...)