---
title: Elementos en línea
slug: orphaned/Web/HTML/Inline_elements
original_slug: Web/HTML/Inline_elements
---

Los elementos en HTML (lenguaje de marcas de hipertexto - **Hypertext Markup Language**) usualmente son elementos "en línea" o [elementos "en bloque"](/es/docs/Glossary/Block-level_content). Un elemento en línea ocupa sólo el espacio delimitado por las etiquetas que definen el elemento en línea. El siguiente ejemplo demuestra la influencia de los elementos en línea:

## Ejemplo en línea

HTML

```html
<p>Este <span>span</span> es un elemento en línea; este fondo se ha coloreado para mostrar el principio y fin de la influencia del elemento en línea</p>
```

CSS

```css
span { background-color: #8ABB55; }
```

{{ EmbedLiveSample('Inline_example') }}

## Elmentos en línea vs. en bloque

- Formateo
  - : De forma predeterminada, los elementos en línea no comienzan con la nueva línea.
- Modelo de contenido
  - : En general, los elementos en línea pueden contener únicamente los datos y otros elementos en línea.

## Elementos

Los siguientes elementos son "en línea":

- [b](/es/docs/Web/HTML/Element/b), [big](/es/docs/Web/HTML/Element/big), [i](/es/docs/Web/HTML/Element/i), [small](/es/docs/Web/HTML/Element/small), [tt](/es/docs/Web/HTML/Element/tt)
- [abbr](/es/docs/Web/HTML/Element/abbr), [acronym](/es/docs/Web/HTML/Element/acronym), [cite](/es/docs/Web/HTML/Element/cite), [code](/es/docs/Web/HTML/Element/code), [dfn](/es/docs/Web/HTML/Element/dfn), [em](/es/docs/Web/HTML/Element/em), [kbd](/es/docs/Web/HTML/Element/kbd), [strong](/es/docs/Web/HTML/Element/strong), [samp](/es/docs/Web/HTML/Element/samp), [time](/es/docs/Web/HTML/Element/time), [var](/es/docs/Web/HTML/Element/var)
- [a](/es/docs/Web/HTML/Element/a), [bdo](/es/docs/Web/HTML/Element/bdo), [br](/es/docs/Web/HTML/Element/br), [img](/es/docs/Web/HTML/Element/img), [map](/es/docs/Web/HTML/Element/map), [object](/es/docs/Web/HTML/Element/object), [q](/es/docs/Web/HTML/Element/q), [script](/es/docs/Web/SVG/Element/script), [span](/es/docs/Web/HTML/Element/span), [sub](/es/docs/Web/HTML/Element/sub), [sup](/es/docs/Web/HTML/Element/sup)
- [button](/es/docs/Web/HTML/Element/button), [input](/es/docs/Web/HTML/Element/input), [label](/es/docs/Web/HTML/Element/label), [select](/es/docs/Web/HTML/Element/select), [textarea](/es/docs/Web/HTML/Element/textarea)

### Ver también

- [Elementos en bloque](/es/docs/Glossary/Block-level_content)
