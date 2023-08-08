---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
---

{{JSRef("Objetos_globales", "Number")}}

## Resumen

Devuelve una cadena que representa al objeto _Number_ especificado

## Sintaxis

`number .toString( [base ] )`

### Parámetro

- base
  - : Un entero entre 2 y 36 especificando la base a usar para representar los valores numéricos.

### Devuelve

Una cadena que representa al objeto.

## Descripción

El objeto `Number` sobreescribe el método `toString` y no lo hereda del objeto {{jsxref("Object")}}; por tanto no hereda {{jsxref("Object.prototype.toString()")}}. Para objetos `Number`, el método `toString` devuelve una cadena que representa al objeto en la base especificada.

El método toString comprueba su primer argumento, e intenta devolver una cadena de representación en la base especificada. Para bases superiores a 10, las letras del alfabeto indican numerales mayores de 9. Por ejemplo, para números hexadecimales (base 16), se utiliza de A hasta F.

Si no se da a toString una base entre 2 y 36, se lanza una excepción.

Si no se especifica la base, JavaScript asume la base predefinida, que es 10.

## Ejemplos

```js
var howMany = 10;

alert("howMany.toString() is " + howMany.toString()); // displays "10"

alert("45 .toString() is " + (45).toString()); //displays "45"

var x = 7;
alert(x.toString(2)); // Displays "111"
```

## Vea También

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
