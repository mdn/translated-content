---
title: "SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead"
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
---

{{jsSidebar("Errors")}}

## Mensaje

```
Advertencia: Error de Sintaxis al utilizar //@ para indicar el código fuente de la URL esta obsoleto. En su lugar use //#.

Advertencia: Error de Sintaxis: al utilizar //@ para indicar el mapeo de programas del código fuente de la URL esta obsoleto. En su lugar use //#.
```

## Tipo de error

Una advertencia ocurrida como esta {{jsxref("SyntaxError")}}. JavaScript no se detendrá.

## Descripción del error

Esta es una sintaxis obsoleta del codigo fuente de mapa en JavaScript.

Las sintaxis de código fuente de mapa en JavaScript se suelen combinar y minificar para hacer que la entrega desde el servidor sea más eficiente. Con los códigos de origen de mapas, el depurador puede asignar el código que se está ejecutando a los archivos de origen.

La especificación de mapa de código fuente cambió la sintaxis debido a un conflicto con IE con la versión windows 8.x siempre que se encontró en la página. Despues `//@cc_on` fue interpretado para activar la compilación condicional en el motor IE JScript. [El comentario de compilación condicional](https://docs.microsoft.com/en-us/scripting/javascript/reference/at-cc-on-statement-javascript) en IE es una característica poco conocida, pero rompió mapas de fuente de origen con [jQuery](https://bugs.jquery.com/ticket/13274) y otras bibliotecas.

## Ejemplos

### Sintaxis obsoleta

Sintaxis con el signo obsoleto "@".

```js example-bad
//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

### Sintaxis estándar

En su lugar use el signo "#".

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

O, alternativamente, puede establecer un encabezado en su archivo JavaScript para evitar tener un comentario de error de sintaxis:

```js example-good
X-SourceMap: /path/to/file.js.map
```

## Vea También

- [Como utilizar un mapa de Fuentes - Documentación de Herramientas de Firefox](/es/docs/Tools/Debugger/How_to/Use_a_source_map)
- [Introducción a las fuentes – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
