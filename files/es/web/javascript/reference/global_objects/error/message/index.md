---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
translation_of: Web/JavaScript/Reference/Global_Objects/Error/message
original_slug: Web/JavaScript/Referencia/Objetos_globales/Error/message
---
{{JSRef}}

La propiedad **`message`** es una descripción legible del error.

## Descripción

Esta propiedad contiene una breve descripción del error, si está disponible o ha sido fijado. [SpiderMonkey](/es/docs/Mozilla/Projects/SpiderMonkey) hace un amplio uso de esta propiedad para las excepciones. Esta porpiedad combinada con la propiedad {{jsxref("Error.prototype.name", "name")}} es usada por el método {{jsxref("Error.prototype.toString()")}} para crear una cadena de texto del objeto Error.

Por defecto, la propiedad `message` es una cadena vacía, pero se puede especificar un mensaje a través del primer parámetro del {{jsxref("Error", "constructor Error")}}.

## Ejemplo

### Lanzar un error personalizado

```js
var e = new Error('No se pudo analizar la entrada');
// e.message es 'No se pudo analizar la entrada'
throw e;
```

## Especificaciones

| Especificación                                                                                               | Estado                       | Comentario          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Definición inicial. |
| {{SpecName('ES5.1', '#sec-15.11.4.3', 'Error.prototype.message')}}                     | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES6', '#sec-error.prototype.message', 'Error.prototype.message')}}     | {{Spec2('ES6')}}         |                     |
| {{SpecName('ESDraft', '#sec-error.prototype.message', 'Error.prototype.message')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Error.message")}}

## Ver también

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
