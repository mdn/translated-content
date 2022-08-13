---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
tags:
  - Error
  - JavaScript
  - Propiedad
  - Prototipo
translation_of: Web/JavaScript/Reference/Global_Objects/Error/name
original_slug: Web/JavaScript/Referencia/Objetos_globales/Error/name
---
{{JSRef}}

La propiedad **`name`** representa un nombre para el tipo de error. El valor inicial es "Error".

## Descripción

De forma predeterminada, las instancias {{JSxRef("Error")}} reciben el nombre "Error". La propiedad `name`, además de la propiedad {{JSxRef("Error.prototype.message", "message")}}, la utiliza el método {{JSxRef("Error.prototype.toString()")}} para crear una representación de cadena del error.

## Ejemplos

### Lanzar un error personalizado

```js
var e = new Error('Entrada mal formada'); // e.name es 'Error'

e.name = 'ParseError';
throw e;
// e.toString() devolverá 'ParseError: Entrada mal formada'
```

## Especificaciones

| Especificación                                                                                       |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-error.prototype.name', 'Error.prototype.name')}} |

## Compatibilidad del navegador

{{Compat("javascript.builtins.Error.name")}}

## Ve también

- {{JSxRef("Error.prototype.message")}}
- {{JSxRef("Error.prototype.toString()")}}
