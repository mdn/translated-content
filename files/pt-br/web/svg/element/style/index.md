---
title: style
slug: Web/SVG/Element/style
---

{{SVGRef}}

O elemento de estilo possibilita que folhas de estilos sejam incorporadas diretamente ao conteúdo do SVG. O elemento `style` do SVG possui os mesmos atributos que o elemento correspondente no HTML (veja o elemento no HTML {{ HTMLElement("style") }}).

## Contexto de uso

{{svginfo}}

## Exemplo

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 100 100"
  xmlns="https://www.w3.org/2000/svg">
  <style>
    /* <![CDATA[ */
    circle {
      fill: orange;
      stroke: black;
      stroke-width: 10px; // Note que este valor depende do valor do pixel definido no viewBox
    }
    /* ]]> */
  </style>

  <circle cx="50" cy="50" r="40" />
</svg>
```

Resultado:

{{EmbedLiveSample("Exemplo",150,165)}}

## Atributos

### Atributos globais

- [Atributos centrais](/pt-BR/SVG/Attribute#Core) »

### Atributos específicos

- {{ SVGAttr("type") }}
- {{ SVGAttr("media") }}
- {{ SVGAttr("title") }}

## Interface DOM

O elemento implementa a interface do [`SVGStyleElement`](/pt-BR/DOM/SVGStyleElement).

## Compatibilidade com navegadores

{{Compat("svg.elements.style")}}

## Veja também

- [Elemento \<style> no HTML](/pt-BR/HTML/Element/style)
