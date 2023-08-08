---
title: path
slug: Web/SVG/Element/path
---

{{SVGRef}}**[Primeiros passos](/pt-BR/docs/SVG/Tutorial/Paths)**
Este tutorial irá te ajudar a utilizar caminhos no SVG.

## Resumo

O elemento `path` é um elemento genérico para definir uma forma. Todas as formas básicas poderão ser criadas com elemento de caminho.

## Contexto de uso

{{svginfo}}

## Exemplo

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 400 400"
  xmlns="https://www.w3.org/2000/svg">
  <path
    d="M 100 100 L 300 100 L 200 300 z"
    fill="orange"
    stroke="black"
    stroke-width="3" />
</svg>
```

Resultado:

{{EmbedLiveSample("Exemplo",200,215)}}

## Atributos

### Atributos globais

- [Atributos de processamento condicional](/pt-BR/docs/SVG/Attribute#ConditionalProccessing) »
- [Atributos centraiss](/pt-BR/docs/SVG/Attribute#Core) »
- [Atributos de evento gráfico](/pt-BR/docs/SVG/Attribute#GraphicalEvent) »
- [Atributos de apresentação](/pt-BR/docs/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Atributos específicos

- {{ SVGAttr("d") }}
- {{ SVGAttr("pathLength") }}

## Interface DOM

Este elemento implementa a interace do [`SVGPathElement`](/pt-BR/docs/DOM/SVGPathElement).

## Compatibilidade dos navegadores

{{Compat("svg.elements.path")}}

## Veja também

- {{ SVGElement("circle") }}
- {{ SVGElement("ellipse") }}
- {{ SVGElement("line") }}
- {{ SVGElement("polygon") }}
- {{ SVGElement("polyline") }}
- {{ SVGElement("rect") }}
- [O tutorial sobre SVG "Primeiros passos" na MDN: Path](/pt-BR/docs/SVG/Tutorial/Paths)
