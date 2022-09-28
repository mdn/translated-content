---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/Trim
translation_of: Web/JavaScript/Reference/Global_Objects/String/Trim
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/Trim
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
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// Otro ejemplo de .trim() eliminando el espacio en blanco sólo de un lado.

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```

## Polyfill

Ejecutar el siguiente código antes de cualquier otro código creará un trim ( ) si este no está disponible de manera nativa.

```js
if (!String.prototype.trim) {
  (function() {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function() {
      return this.replace(rtrim, '');
    };
  })();
}
```

## Especificaciones

| Especificación                                                                                       | Estatus                  | Comentario                                            |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.5.4.20', 'String.prototype.trim')}}                 | {{Spec2('ES5.1')}} | Definición inicial. Implementado en JavaScript 1.8.1. |
| {{SpecName('ES6', '#sec-string.prototype.trim', 'String.prototype.trim')}} | {{Spec2('ES6')}}     |                                                       |

## Compatibilidad en Navegadores

{{Compat("javascript.builtins.String.trim")}}

## Ver también

- {{jsxref("String.prototype.trimLeft()")}} {{non-standard_inline}}
- {{jsxref("String.prototype.trimRight()")}} {{non-standard_inline}}
