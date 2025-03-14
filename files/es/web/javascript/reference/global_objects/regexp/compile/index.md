---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
---

{{JSRef}} {{deprecated_header}}

El método obsoleto **`compile()`** es usado para (re-)compilar una expresión regular durante la ejecución del script. Es básicamente lo mismo que el constructor `RegExp`.

## Sintaxis

```
regexObj.compile(patrón, flags)
```

### Parámetros

- `patrón`
  - : El texto de la expresión regular.
- `flags`
  - : Si es especificado, las flags pueden tener cualquier combinación de los siguientes valores:
    - `g`
      - : búsqueda global (global match)
    - `i`
      - : ignorar mayúsculas o minúsculas
    - `m`
      - : Tratar caracteres de inicio y fin (^ y $) como multiples líneas de texto(por ejemplo: encontrar el inicio o fin de cada línea delimitada por \n o \r, no sólo al inicio o fin de toda la entrada de texto)
    - `y`
      - : sticky; busca solamente desde el índice indicado por la propiedad `lastIndex` de esta expresión regular en la cadena objetivo (y no intenta buscar desde ningún índice posterior).

## Descripción

El método `compile` es obsoleto. Puedes simplemente utilizar el constructor `RegExp` para lograr el mismo efecto.

## Ejemplos

### Usando `compile()`

El siguiente ejemplo muestra como recompilar una expresión regultar con un nuevo patrón y nuevas flags.

```js
var regexObj = new RegExp("foo", "gi");
regexObj.compile("new foo", "g");
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("RegExp")}}
