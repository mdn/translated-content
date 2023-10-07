---
title: "<big>: Elemento para deixar o texto maio"
slug: Web/HTML/Element/big
---

The obsolete **HTML Big Element** (**`<big>`**) renders the enclosed text at a font size one level larger than the surrounding text (`medium` becomes `large`, for example). The size is capped at the browser's maximum permitted font size.

> **Note:** **Usage note:** As it was purely presentational, this element has been removed in [HTML5](/pt-BR/docs/Web/Guide/HTML/HTML5) and shouldn't be used anymore. Instead web developers should use the CSS {{cssxref("font-size")}} property to adjust the font size.

## Atributos

This element has no other attributes than the [global attributes](/pt-BR/docs/HTML/global_attributes), common to all elements.

## Examples

Here we see examples showing the use of `<big>` followed by an example showing how to accomplish the same results using modern CSS syntax instead.

### Usando `<big>`

Este elemento usa o comando `<big>` para aumentar o tamanho do texto. O elemento é obsoleto, porém aceitável em todos os navegadores.

#### HTML

```html
<p>
  Este é o primeiro texto.
  <big>Este texto usa big para ficar com a aparência maior.</big>
</p>
```

#### Resultado

{{EmbedLiveSample("Using_big", 640, 60)}}

### Using CSS `font-size`

This example uses the CSS {{cssxref("font-size")}} property to increase the font size by one level.

#### CSS

```css
.bigger {
  font-size: larger;
}
```

#### HTML

```html
<p>
  This is the first sentence.
  <span class="bigger">This whole sentence is in bigger letters.</span>
</p>
```

#### Result

{{EmbedLiveSample("Using_CSS_font-size", 640, 60)}}

## DOM interface

This element implements the {{domxref('HTMLElement')}} interface.

> **Note:** **Implementation note:** Up to Gecko 1.9.2 inclusive, Firefox implements the {{domxref('HTMLSpanElement')}} interface for this element.

## Compatibilidade com navegadores

{{Compat("html.elements.big")}}

## See also

- CSS: {{cssxref("font-size")}}, {{cssxref("font")}}
- HTML: {{htmlelement("small")}}, {{htmlelement("font")}}, {{htmlelement("style")}}
- HTML 4.01 Specification: [Font Styles](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)

{{HTMLSidebar}}
