---
title: em
slug: Web/HTML/Reference/Elements/em
original_slug: Web/HTML/Element/em
---

{{HTMLSidebar}}

El **elemento HTML `<em>`** es el apropiado para marcar con énfasis las partes importantes de un texto. El elemento `<em>` puede ser anidado, con cada nivel de anidamiento indicando un mayor grado de énfasis.

{{InteractiveExample("HTML Demo: &lt;em&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Get out of bed <em>now</em>!</p>

<p>We <em>had</em> to do something about it.</p>

<p>This is <em>not</em> a drill!</p>
```

```css interactive-example
/* stylelint-disable-next-line block-no-empty */
em {
}
```

| [Categorías de contenido](/es/docs/Web/HTML/Guides/Content_categories) | [Contenido dinámico](/es/docs/Web/HTML/Guides/Content_categories#contenido_dinámico), [contenido textual o estático](/es/docs/Web/HTML/Guides/Content_categories#contenido_textual_o_estático), contenido palpable |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Contenido permitido                                                    | [Contenido textual o estático](/es/docs/Web/HTML/Guides/Content_categories#contenido_textual_o_estático).                                                                                                          |
| Tag omission                                                           | Ninguna, tanto la etiqueta inicial como la final son obligatorias.                                                                                                                                                 |
| Permitted parents                                                      | Any element that accepts [phrasing content](/es/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                                                                                         |
| Permitted ARIA roles                                                   | Any                                                                                                                                                                                                                |
| DOM interface                                                          | {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the {{domxref("HTMLSpanElement")}} interface for this element.                                                              |

### Atributos

Este elemento solo incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

### Ejemplos

```html
<p>
  <em>El dinero</em> es importante pero <strong>la salud</strong> lo es más.
</p>
```

### Comentarios

[em](/es/docs/Web/HTML/Reference/Elements/em) tiene un hermano mayor: [strong](/es/docs/Web/HTML/Reference/Elements/strong). [em](/es/docs/Web/HTML/Reference/Elements/em) sirve para dar énfasis y [strong](/es/docs/Web/HTML/Reference/Elements/strong) para dar mucho énfasis
