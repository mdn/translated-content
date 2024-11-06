---
title: Error.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Error/toString
original_slug: Web/JavaScript/Reference/Global_Objects/Error/toSource
---

{{JSRef}} {{non-standard_header}}

El método **`toSource()`** devuelve código que podría evaluar el mismo error.

## Sintaxis

```js
e.toSource()
```

### Valor de retorno

Una cadena que contiene el código fuente del error.

## Ejemplos

### Usar toSource

Llamar al método `toSource` de una instancia {{JSxRef("Error")}} (incluido {{JSxRef("Global_Objects/Error", "NativeErrors", "#Error_types")}}) devolverá una cadena que contiene el código fuente del error. Esta cadena se puede evaluar para crear un objeto (aproximadamente) igual. Naturalmente, la cadena que contiene la fuente sigue la estructura del constructor {{JSxRef("Error")}}. Por ejemplo:

```js
(newname(message ,fileName,lineNumber))
```

donde estos atributos corresponden a las propiedades respectivas de la instancia de `error`.

> [!NOTE]
> Ten en cuenta que las propiedades utilizadas por el método `toSource` en la creación de esta cadena son mutables y es posible que no reflejen con precisión la función utilizada para crear una instancia de `error` o el nombre de archivo o número de línea donde ocurrió un error real.

## Ve también

- {{JSxRef("Error.prototype.fileName")}}
- {{JSxRef("Error.prototype.lineNumber")}}
- {{JSxRef("Error.prototype.message")}}
- {{JSxRef("Error.prototype.name")}}
- {{jsxref("Object.prototype.toSource()")}}
