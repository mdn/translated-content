---
title: user-select
slug: Web/CSS/user-select
---

La propiedad [CSS](/es/docs/Web/CSS) **`user-select`** controla si el usuario puede seleccionar el texto. Esto no tiene ningún efecto en el contenido cargado bajo {{Glossary("Chrome", "chrome")}}, excepto en cuadros de texto.

```css
/* Valores de palabras clave */
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;

/* Varoles globales */
user-select: inherit;
user-select: initial;
user-select: unset;

/* Valores Mozilla-specific */
-moz-user-select: none;
-moz-user-select: text;
-moz-user-select: all;

/* Valores WebKit-specific */
-webkit-user-select: none;
-webkit-user-select: text;
-webkit-user-select: all; /* No funciona el Safari; solo usa
                             "none" or "text", o si no hará
                             permitir escribir en el contenedor <html> */

/* Valores Microsoft-specific */
-ms-user-select: none;
-ms-user-select: text;
-ms-user-select: element;
```

{{cssinfo}}

## Syntaxis

- `none`
  - : El texto y sus sub elementos no son seleccionables. Tenga en cuenta que el objeto {{domxref("Selection")}} puede contener estos elementos.
- `auto`
  - : El valor calculado auto se determina de la siguiente manera: En los pseudo elementos `::before` y `::after`, el valor calculado es `none`
    - Si el elemento es un elemento editable, el valor calculado es `contain`
    - De lo contrario, si el valor calculador de `user-select` en la matriz de este elemento es `all`, el valor calculado es `all`
    - De lo contrario, si el valor calulado de `user-select` en la matriz de este elemento es `none`, el valor calculado es `none`
    - De lo contrario, el valor calculado es `text`

- `text`
  - : El texto puede ser seleccionado por el usuario.
- `all`
  - : En el editor HTML, si se realiza doble-click o click-contextual en el subelemento, se seleccionará el antecesor más alto de el valor.
- `contain`
  - : Permite que la selección comience dentro del elemento; sin embargo, la selección estará contenida por los límites de ese elemento.
- `element`{{non-standard_inline}} (IE-specific alias)
  - : Igual que `contain`. Solo lo soportado en Internet Explorer.

> [!NOTE]
> CSS UI 4 [renombra user-select: a contain](https://github.com/w3c/csswg-drafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05).

### Formal syntax

{{csssyntax}}

## Ejemplos

### HTML

```html
<p>Debería poder seleccionar este texto.</p>
<p class="unselectable">No puedes seleccionar este texto</p>
<p class="all">Al hacer clic una vez se seleccionará todo este texto.</p>
```

### CSS

```css
.unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.all {
  -moz-user-select: all;
  -webkit-user-select: all;
  -ms-user-select: all;
  user-select: all;
}
```

### Resultado

{{EmbedLiveSample("Examples")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{Cssxref("::selection")}}
- The JavaScript {{domxref("Selection")}} object.
- [user-select](https://www.w3.org/TR/css-ui-4/#propdef-user-select) in [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/css-ui-4/).
