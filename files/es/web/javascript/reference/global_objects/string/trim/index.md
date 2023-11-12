---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
---

{{JSRef("Global_Objects", "String")}}

## Resumen

El método **trim( )** elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.).

## Sintaxis

```
str.trim()
```

Una nueva cadena que representa la cadena de llamada sin espacios en blanco de ambos extremos.

## Descripción

El método **trim( )** devuelve la cadena de texto despojada de los espacios en blanco en ambos extremos. El método no afecta al valor de la cadena de texto.

## Ejemplos

### Ejemplo: Uso de `trim()`

El siguiente ejemplo muestra la cadena de texto en minúsculas 'foo':

```js
var orig = "   foo  ";
console.log(orig.trim()); // 'foo'

// Otro ejemplo de .trim() eliminando el espacio en blanco sólo de un lado.

var orig = "foo    ";
console.log(orig.trim()); // 'foo'
```

## Polyfill

Ejecutar el siguiente código antes de cualquier otro código creará un trim ( ) si este no está disponible de manera nativa.

```js
if (!String.prototype.trim) {
  (function () {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function () {
      return this.replace(rtrim, "");
    };
  })();
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("String.prototype.trimLeft()")}} {{non-standard_inline}}
- {{jsxref("String.prototype.trimRight()")}} {{non-standard_inline}}
