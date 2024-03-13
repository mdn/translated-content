---
title: "Error: message"
slug: Web/JavaScript/Reference/Global_Objects/Error/message
l10n:
  sourceCommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{JSRef}}

Los datos de la propiedad **`message`** de una instancia de {{jsxref("Error")}} es una descripción legible del error.

## Valor

Una cadena de texto correspondiente al valor pasado como primer parámetro del constructor [`Error()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Error/Error).

{{js_property_attributes(1, 0, 1)}}

## Descripción

Esta propiedad contiene una breve descripción del error, si está disponible o ha sido establecido. Esta porpiedad combinada con la propiedad {{jsxref("Error.prototype.name", "name")}} es usada por el método {{jsxref("Error.prototype.toString()")}} para crear una cadena de texto del objeto Error.

Por defecto, la propiedad `message` es una cadena vacía, pero se puede especificar un mensaje a través del primer parámetro del constructor {{jsxref("Error/Error", "Error")}}.

## Ejemplos

### Lanzar un error personalizado

```js
var e = new Error("No se pudo analizar la entrada");
// e.message es 'No se pudo analizar la entrada'
throw e;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
