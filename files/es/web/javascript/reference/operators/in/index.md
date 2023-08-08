---
title: in
slug: Web/JavaScript/Reference/Operators/in
---

{{jsSidebar("Operators")}}El **operador `in`** devuelve `true` si la propiedad especificada está en el objeto especificado o su prototipo.

## Sintaxis

```
prop in object
```

### Parámetros

- `prop`

  - : Una cadena o expresión númerica que representa el nombre de una propiedad o el índice de un array (lo que no sea un símbolo se forzará a string).

- `object`
  - : El objeto (o su cadena de prototipo) sobre el que comprobar si contiene la propiedad con el nombre especificado.

## Descripción

Los siguientes ejemplos muestran algunos de los usos del operador `in`.

```js
// Arrays
var arboles = new Array("secoya", "pino", "cedro", "roble", "arce");
0 in arboles; // devuelve true
3 in arboles; // devuelve true
6 in arboles; // devuelve false
"pino" in arboles; // devuelve false (debe especificar el número de índice,
// no el valor del índice)
"length" in arboles; // devuelve true (length es una propiedad de Array)

// Objetos predefinidos
"PI" in Math; // devuelve true

// Objetos personalizados
var micoche = { marca: "Honda", modelo: "Accord", año: 1998 };
"marca" in micoche; // devuelve true
"modelo" in micoche; // devuelve true
```

Debe especificar un objeto en el lado derecho del operador `in`. Por ejemplo, puede especificar una cadena creada con el constructor `String` , pero no puede especificar una cadena literal.

```js
var color1 = new String("verde");
"length" in color1; // devuelve true

var color2 = "coral";
"length" in color2; // genera un error (color2 no es un objeto String)
```

### Usando `in` con propiedades eliminadas o no definidas

Si se elimina una propiedad con el operador {{jsxref("Operadores/delete", "delete")}}, el operador `in` devuelve `false` para esa propiedad.

```js
var micoche = { marca: "Honda", modelo: "Accord", año: 1998 };
delete micoche.marca;
"marca" in micoche; // devuelve false

var arboles = new Array("secoya", "pino", "cedro", "roble", "arce");
delete arboles[3];
3 in arboles; // devuelve false
```

Si se cambia una propiedad a {{jsxref("Objetos_globales/undefined", "undefined")}} pero no se elimina, el operador `in` devuelve true para esa propiedad.

```js
var micoche = { marca: "Honda", modelo: "Accord", año: 1998 };
micoche.marca = undefined;
"marca" in micoche; // devuelve true
```

```js
var arboles = new Array("secayo", "pino", "cedro", "roble", "arce");
arboles[3] = undefined;
3 in arboles; // devuelve true
```

### Propiedades heredadas

El operador `in` devuelve `true` para propiedades en la cadena del prototipo.

```js
"toString" in {}; // devuelve true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [`for...in`](/es-ES/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/es-ES/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Reflect.has()")}}
- [Enumerability and ownership of properties](/es/docs/Enumerability_and_ownership_of_properties)
