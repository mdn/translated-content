---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
---

{{JSRef}}

El método **`trimEnd()`** elimina los espacios en blanco al final de una cadena de carácteres. `trimRight()` es el alias de este método.

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## Sintaxis

```
str.trimEnd();
str.trimRight();
```

### Valor de retorno

Una nueva cadena de texto que representa la cadena de texto llamada sin espacios en blanco de su extremo (derecho).

## Descripción

`trimEnd()` / `trimRight()` Los metodos devuelven una cadena de texto sin espacios en blanco desde su extremo derecho. `trimEnd()` ó `trimRight()` no afectan el valor de la cadena de texto en sí.

### Superposición

Por coherencia de funciones como {{jsxref("String.prototype.padEnd")}} el nombre del método estandar es `trimEnd`. Sin embargo por compatibilidad web, `trimRight` permanece como un alias para `trimEnd`. En algunos motores esto significa:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Ejemplo

### Usando `trimEnd()`

El siguiente ejemplo muestra la cadena de texto en minusculas `' foo'`:

```js
var str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
