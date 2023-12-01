---
title: textPath
slug: Web/SVG/Element/textPath
---

{{SVGRef}}

Assim como o texto escrito em uma linha reta, o SVG também inclui a capacidade de colocar um texto ao longo de uma forma de um elemento {{ SVGElement("path") }}. Para especificar que um bloco de texto é renderizado ao longo da forma de um {{ SVGElement("path") }}, inclua o texto em um elemento `textPath` o qual inclui um atributo `xlink:href` com uma referência a um elemento {{ SVGElement("path") }}.

## Contexto de uso

{{svginfo}}

## Exemplo

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 1000 300"
  xmlns="https://www.w3.org/2000/svg"
  xmlns:xlink="https://www.w3.org/1999/xlink">
  <defs>
    <path
      id="MyPath"
      d="M 100 200
             C 200 100 300   0 400 100
             C 500 200 600 300 700 200
             C 800 100 900 100 900 100" />
  </defs>

  <use xlink:href="#MyPath" fill="none" stroke="red" />

  <text font-family="Verdana" font-size="42.5">
    <textPath xlink:href="#MyPath">
      Nós vamos para cima, para baixo, para cima
    </textPath>
  </text>

  <!-- Show outline of the viewport using 'rect' element -->
  <rect
    x="1"
    y="1"
    width="998"
    height="298"
    fill="none"
    stroke="black"
    stroke-width="2" />
</svg>
```

Resultado:

{{EmbedLiveSample("Exemplo",500,175)}}

## Atributos

### Atributos globais

- [Atributos de processamento condicional](/pt-BR/SVG/Attribute#ConditionalProccessing) »
- [Atributos principais](/pt-BR/SVG/Attribute#Core) »
- [Atributos de eventos gráficos](/pt-BR/SVG/Attribute#GraphicalEvent) »
- [Atributos de apresentação](/pt-BR/SVG/Attribute#Presentation) »
- [Atributos XLink](/pt-BR/SVG/Attribute#XLink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### Atributos específicos

- {{ SVGAttr("startOffset") }}
- {{ SVGAttr("method") }}
- {{ SVGAttr("spacing") }}
- {{ SVGAttr("xlink:href") }}

## Interface DOM

Este elemento implementa a interface do [`SVGTextPathElement`](/pt-BR/DOM/SVGTextPathElement).
