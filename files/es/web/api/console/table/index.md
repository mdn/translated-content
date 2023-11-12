---
title: Console.table()
slug: Web/API/console/table
---

{{APIRef("Console API")}}

Muestra datos tabulares como una tabla.

Esta función toma un argumento obligatorio: `data`, que debe ser un array o un objeto, y un parámetro adicional: `columns`.

Muestra `data` como una tabla en la consola. Cada elemento en el array (o propiedad enumerable si `data` es un objeto) será una fila en la tabla.

La primera columna de la tabla se identificará como `(index)`. Si `data` es un array, sus valores serán los índices del array. Si `data` es un objeto, entonces sus valores serán los nombres de las propiedades. Tenga en cuenta que (en Firefox) `console.table` está limitado a mostrar 1000 filas (la primera columna es la llamada `index`).

{{AvailableInWorkers}}

### Colecciones de tipos primitivos

El argumento `data` puede ser un array o un objeto.

```js
// un array de strings

console.table(["apples", "oranges", "bananas"]);
```

| (index) | Values    |
| ------- | --------- |
| 0       | 'apples'  |
| 1       | 'oranges' |
| 2       | 'bananas' |

```js
// un objeto cuyas propiedades son strings

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("Tyrone", "Jones");

console.table(me);
```

| (index)   | Values   |
| --------- | -------- |
| firstName | 'Tyrone' |
| lastName  | 'Jones'  |

### Colecciones de tipos compuestos

Si los elementos en el array, o propiedades en el objeto, son también arrays u objetos, sus elementos o propiedades serán enumeradas en la fila, una por columna:

```js
// un array de arrays

const people = [
  ["Tyrone", "Jones"],
  ["Janet", "Smith"],
  ["Maria", "Cruz"],
];
console.table(people);
```

| (index) | 0        | 1       |
| ------- | -------- | ------- |
| 0       | 'Tyrone' | 'Jones' |
| 1       | 'Janet'  | 'Smith' |
| 2       | 'Maria'  | 'Cruz'  |

```js
// un array de objetos

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria]);
```

Tenga en cuenta que si el array contiene objetos, las columnas se etiquetarán con el nombre de la propiedad.

| (index) | firstName | lastName |
| ------- | --------- | -------- |
| 0       | 'Tyrone'  | 'Jones'  |
| 1       | 'Janet'   | 'Smith'  |
| 2       | 'Maria'   | 'Cruz'   |

```js
// un objeto cuyas propiedades son objetos

const family = {};

family.mother = new Person("Janet", "Jones");
family.father = new Person("Tyrone", "Jones");
family.daughter = new Person("Maria", "Jones");

console.table(family);
```

| (index)  | firstName | lastName |
| -------- | --------- | -------- |
| daughter | 'Maria'   | 'Jones'  |
| father   | 'Tyrone'  | 'Jones'  |
| mother   | 'Janet'   | 'Jones'  |

### Restringiendo las columnas mostradas

Por defecto, `console.table()` muestra todos los elementos de cada fila. Puedes emplear el parámetro opcional `columns` para seleccionar un subconjunto de columnas que mostrar:

```js
// an array of objects, logging only firstName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");
console.table([tyrone, janet, maria], ["firstName"]);
```

| (index) | firstName |
| ------- | --------- |
| 0       | 'Tyrone'  |
| 1       | 'Janet'   |
| 2       | 'Maria'   |

### Ordenando columnas

Se puede ordenar la tabla por una columna en particular pulsando en la etiqueta de dicha columna.

## Sintaxis

```
console.table(data [, columns]);
```

### Parámetros

- `data`
  - : La información a mostrar. Puede ser tanto un array como un objeto.
- `columns`
  - : Un array que contenga los nombres de las columnas a incluir.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
