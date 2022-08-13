---
title: ':root'
slug: Web/CSS/:root
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: Web/CSS/:root
---
{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:root`** de [CSS](/es/docs/Web/CSS) selecciona el elemento raíz de un árbol que representa el documento. En HTML, `:root` representa el elemento {{HTMLElement("html")}} y es idéntico al selector `html`, excepto que su [especificidad](/es/docs/Web/CSS/Specificity) es mayor.

```css
/* Selecciona el elemento raíz del documento:
   <html> en el caso de HTML */
:root {
  background: yellow;
}
```

## Sintaxis

{{csssyntax}}

## Ejemplo

`:root` puede ser útil para declarar [variables CSS](/es/docs/Web/CSS/Using_CSS_variables) globales:

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Especificaciones

| Especificación                                                           | Estado                               | Comentarios         |
| ------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('CSS4 Selectors', '#root-pseudo', ':root')}} | {{Spec2('CSS4 Selectors')}} | Ningún cambio.      |
| {{SpecName('CSS3 Selectors', '#root-pseudo', ':root')}} | {{Spec2('CSS3 Selectors')}} | Definición Inicial. |

## Compatibilidad con navegadores

{{Compat("css.selectors.root")}}
