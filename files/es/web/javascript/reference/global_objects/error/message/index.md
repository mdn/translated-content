---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
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

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
