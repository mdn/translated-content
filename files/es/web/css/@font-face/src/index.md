---
title: src
slug: Web/CSS/@font-face/src
---

{{CSSRef}}

El descriptor CSS **`src`** de la regla {{cssxref("@font-face")}} especifica el recurso que contiene a la fuente. Es requerido para que la regla `@font-face` sea válida.

Su valor es una lista de referencias externas o nombres de fuentes instaladas, separadas por coma según su prioridad. Cuando se necesita una fuente, el agente usuario itera sobre el conjunto de referencias, usando la primera que pueda ser activada exitosamente. Fuentes que contienen datos inválidos o fuentes locales que no se encuentren son ignoradas, y el agente usuario cargará la siguiente en la lista.

Al igual que con otras URLs en CSS, la URL puede ser relativa, en cuyo caso se resuelve relativamente a la ubicación de la hoja de estilos que contenga la regla `@font-face`. En caso de fuentes SVG, la URL apunta a un elemento dentro de un documento que contenga definiciones de fuentes SVG. Si se omite la referencia al elemento, se deduce que se usará la referencia a la primera fuente definida. De forma similar, formatos contenedores de fuentes que puedan contener más de una, cargarán solo una de las fuentes para una regla `@font-face`. Los identificadores de fragmentos son usados para indicar cuál fuente se cargará. Si un formato contenedor no tiene un esquema de identificadores de fragmento definido, se usará un esquema de indexado simple, con base en 1 (por ejemplo, "font-collection#1" para la primera fuente, "font-collection#2" para la segunda fuente).

{{cssinfo}}

## Sintaxis

```css
/* <url> values */
src: url(https://somewebsite.com/path/to/font.woff); /* absolute URL */
src: url(path/to/font.woff); /* relative URL */
src: url(path/to/font.woff) format("woff"); /* explicit format */
src: url("path/to/font.woff"); /* quoted URL */
src: url(path/to/svgfont.svg#example); /* fragment identifying font */

/* <font-face-name> values */
src: local(font); /* unquoted name */
src: local(some font); /* name containing space */
src: local("font"); /* quoted name */

/* Multiple items */
src:
  local(font),
  url(path/to/font.svg) format("svg"),
  url(path/to/font.woff) format("woff"),
  url(path/to/font.ttf) format("opentype");
```

### Valores

- `<url> [ format( <string># ) ]?`
  - : Especifica una referencia externa que consiste en una URL seguida por un indicador opcional que describe el formato del recurso referenciado por esa URL. El indicador de formato contiene una lista de textos de formato, separados por coma, que denota formatos de fuente conocidos. Si un agente usuario no soporta los formatos especificados, omitirá descargar el recurso. Si no se especifican los indicadores de formato, el recurso siempre es descargado.
- `<font-face-name>`
  - : Especifica el nombre de una fuente instalada localmente, usando la función `local()`, que identifica de forma única a una fuente dentro de una familia larga. El nombre puede ser opcionalmente encerrado en comillas.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
@font-face {
  font-family: examplefont;
  src:
    local(Example Font),
    url("examplefont.woff") format("woff"),
    url("examplefont.woff") format("opentype");
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
