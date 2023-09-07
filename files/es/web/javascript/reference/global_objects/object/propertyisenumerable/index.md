---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
---

{{JSRef}}

El método **`propertyIsEnumerable()`** regresa un Boleano indicando si la propiedad especificada es enumerable.

## Sintaxis

```
obj.propertyIsEnumerable(prop)
```

### Parametros

- `prop`
  - : Nombre de la propiedad a probar.

## Descripción

Todos los objetos tienen un método `propertyIsEnumerable`. Este método puede determinar si la propiedad especificada en el objeto puede ser enumerada por un ciclo {{jsxref("Statements/for...in", "for...in")}}, con la excepción de propiedades heredadas a través de prototype. Si el objeto no tiene la propiedad especificada, este método regresa un valor `false`.

## Ejemplo

### Uso básico de `propertyIsEnumerable`

El siguiente ejemplo muestra el uso de `propertyIsEnumerable` en objetos y arrays:

```js
var o = {};
var a = [];
o.prop = "es enumerable";
a[0] = "es enumerable";

o.propertyIsEnumerable("prop"); // regresa true
a.propertyIsEnumerable(0); // regresa true
```

### Definidas por usuario vs predefinidas

El siguiente ejemplo demuestra la enumerabilidad de las propiedades definidas por el usuario contra las predefinidas:

```js
var a = ["es enumerable"];

a.propertyIsEnumerable(0); // regresa true
a.propertyIsEnumerable("length"); // regresa false

Math.propertyIsEnumerable("random"); // regresa false
this.propertyIsEnumerable("Math"); // regresa false
```

### Directa vs heredadas

```js
var a = [];
a.propertyIsEnumerable("constructor"); // regresa false

function primerConstructor() {
  this.propiedad = "no es enumerable";
}

primerConstructor.prototype.primerMetodo = function () {};

function segundoConstructor() {
  this.metodo = function () {
    return "es enumerable";
  };
}

secondConstructor.prototype = new primerConstructor();
secondConstructor.prototype.constructor = segundoConstructor;

var o = new segundoConstructor();
o.propiedadArbitraria = "is enumerable";

o.propertyIsEnumerable("propiedadArbitraria "); // regresa true
o.propertyIsEnumerable("metodo"); // regresa true
o.propertyIsEnumerable("propiedad"); // regresa false

o.propiedad = "es enumerable";

o.propertyIsEnumerable("propiedad"); // regresa true

// Regresan false por estar en el prototipo el cual no es
// considerado por propertyIsEnumerable (a pesar de que las dos ultimas son
// iterables con un for-in)
o.propertyIsEnumerable("prototype"); // regresa false (como en JS 1.8.1/FF3.6)
o.propertyIsEnumerable("constructor"); // regresa false
o.propertyIsEnumerable("firstMethod"); // regresa false
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Notas específicas para Gecko

Al inicio de JavaScript 1.8.1 (in Firefox 3.6), `propertyIsEnumerable('prototype')` regresa `false` en lugar de `true`; esto hace que el resultado cumpla con la especificación de ECMAScript 5.

## Véase también

- [Enumerability and ownership of properties](/es/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
