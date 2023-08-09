---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
---

{{JSRef("Objetos_globales", "String")}}

> **Advertencia:** Advertencia: Aunque `String.prototype.substr(…)` no está estrictamente obsoleto (como en "eliminado de los estándares web"), se define en el anexo B de la norma ECMA-262, cuya introducción establece:
>
> > ... Todas las características y comportamientos del lenguaje especificados en este anexo tienen una o más características indeseables y, en ausencia de uso heredado, se eliminarían de esta especificación. ... ... Los programadores no deben usar ni asumir la existencia de estas características y comportamientos al escribir un nuevo código ECMAScript.

## Resumen

El método **`substr()`** devuelve los caracteres de una cadena que comienzan en una localización especificada y de acuerdo al número de caracteres que se especifiquen.

## Sintaxis

```
cadena.substr(inicio[, longitud])
```

### Parámetros

- `inicio`

  - : Localización en la cual se empiezan a extraer caracteres. Si se da un número negativo, se trata como `longCad + inicio` donde `longCad` es la longitud de la cadena (por ejemplo, si `inicio` es -3 se trata como `longCad - 3`).

- `longitud`
  - : Opcional. El número de caracteres a extraer. Si este argumento es {{jsxref("undefined")}}, todos los caracteres desde `inicio` hasta el final de la cadena serán extraidos.

### Valor retornado

Una nueva cadena que contiende la sección extraída de la cadena dada. Sí la longitud es 0 o un número negativo, retorna la cadena vacía.

## Descripción

`inicio` es el índice de un carácter. El índice del primer carácter es 0, y el índice del último carácter es la longitud de la cadena menos 1. `substr` comienza extrayendo caracteres a partir de `inicio` y recolecta `longitud` caracteres (a menos que se alcance primero el final de la cadena, en cuyo caso devuelve menos).

Si `inicio` es positivo y es mayor o igual que la longitud de la cadena, `substr()` devuelve una cadena vacía.

Si `inicio` es negativo, `substr()` lo usa como un índice de carácter desde el final de la cadena. Si `inicio` es negativo y `abs(inicio)` es mayor que la longitud de la cadena, `substr` usa 0 como índice inical. Nota: el uso descrito de valores negativos del argumento `inicio` no es soportado por Microsoft JScript.

Si `longitud` es 0 o negativa, `substr` devuelve una cadena vacía. Si se omite `longitud`, `inicio` extrae caracteres hasta el final de la cadena.

## Ejemplos

### Ejemplo: Uso de `substr()`

```js
var cadena = "abcdefghij";

console.log("(1,2): " + cadena.substr(1, 2)); // '(1, 2): bc'
console.log("(-3,2): " + cadena.substr(-3, 2)); // '(-3, 2): hi'
console.log("(-3): " + cadena.substr(-3)); // '(-3): hij'
console.log("(1): " + cadena.substr(1)); // '(1): bcdefghij'
console.log("(-20, 2): " + cadena.substr(-20, 2)); // '(-20, 2): ab'
console.log("(20, 2): " + cadena.substr(20, 2)); // '(20, 2): '
```

Este script muestra:

```
(1,2): bc
(-3,2): hi
(-3): hij
(1): bcdefghij
(-20, 2): ab
(20, 2):
```

## Vea También

- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
