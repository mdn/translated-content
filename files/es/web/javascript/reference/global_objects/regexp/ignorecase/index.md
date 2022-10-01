---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
original_slug: Web/JavaScript/Referencia/Objetos_globales/RegExp/ignoreCase
---
{{JSRef}}

La propiedad **`ignoreCase`** indica si la expresión regular está usando la bandera "i". `ignoreCase` es una propiedad de _sólo lectura_ de una instancia de expresión regular.

{{js_property_attributes(0, 0, 1)}}

## Descripción

El valor de `ignoreCase` es un {{jsxref("Boolean")}} y `true` si la bandera "i" fue usada. De otra manera es false. La bandera "i" indica que el se debe ignorar la capitalización al tratar de encontrar los equivalentes en un texto.

No se puede cambiar esta propiedad directamente.

## Ejemplos

### Usando `ignoreCase`

```js
var regex = new RegExp('foo', 'i');

console.log(regex.ignoreCase); // true
```

## Especificaciones

| Especificación                                                                                                               | Estatus                      | Comentario                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                     | {{Spec2('ES3')}}         | Definición inicial. Implementado en JavaScript 1.2. JavaScript 1.5: `ignoreCase` es una propiedad de la instancia {{jsxref("RegExp")}}, y no del objecto {{jsxref("RegExp")}}. |
| {{SpecName('ES5.1', '#sec-15.10.7.3', 'RegExp.prototype.ignoreCase')}}                                 | {{Spec2('ES5.1')}}     |                                                                                                                                                                                                |
| {{SpecName('ES6', '#sec-get-regexp.prototype.ignorecase', 'RegExp.prototype.ignoreCase')}}     | {{Spec2('ES6')}}         | `ignoreCase` es ahora una propiedad accesora del prototipo en lugar de una propiedad de dato de una instancia.                                                                                 |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.ignorecase', 'RegExp.prototype.ignoreCase')}} | {{Spec2('ESDraft')}} |                                                                                                                                                                                                |

## Compatibilidad de navegadores

{{Compat("javascript.builtins.RegExp.ignoreCase")}}

## Ver también

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
