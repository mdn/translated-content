---
title: symbol
slug: Web/SVG/Element/symbol
---

{{SVGRef}}

O elemento `symbol` é usado para definir um template que pode ser inicializado por um elemento {{ SVGElement("use") }}. A utilização de elementos `symbol` para gráficos que são usados várias vezes no mesmo documento acrescenta estrutura e semântica. Documentos que são ricos em estrutura podem ser renderizados graficamente, através da fala, ou do braille, e assim promover a acessibilidade. Note que o elemento `symbol` em si não é renderizado. Somente instâncias de um elemento `symbol` (por exemplo, uma referência à um elemento `symbol` feita por um elemento {{ SVGElement("use") }}) são renderizadas.

## Contexto de uso

{{svginfo}}

## Exemplo

```html
<svg>
  <!-- definição de symbol NUNCA é renderizada -->
  <symbol id="sym01" viewBox="0 0 150 110">
    <circle cx="50" cy="50" r="40" stroke-width="8" stroke="red" fill="red" />
    <circle
      cx="90"
      cy="60"
      r="40"
      stroke-width="8"
      stroke="green"
      fill="white" />
  </symbol>

  <!-- renderização por elementos "use" -->
  <use xlink:href="#sym01" x="0" y="0" width="100" height="50" />
  <use xlink:href="#sym01" x="0" y="50" width="75" height="38" />
  <use xlink:href="#sym01" x="0" y="100" width="50" height="25" />
</svg>
```

{{EmbedLiveSample("Exemplo",150,110)}}

## Atributos

### Atributos globais

- [Atributos principais](/pt-BR/SVG/Attribute#Core) »
- [Atributos de eventos gráficos](/pt-BR/SVG/Attribute#GraphicalEvent) »
- [Atributos de apresentação](/pt-BR/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### Atributos específicos

- {{ SVGAttr("preserveAspectRatio") }}
- {{ SVGAttr("viewBox") }}

## Interface DOM

Esse elemento implementa a interface do [`SVGSymbolElement`](/pt-BR/DOM/SVGSymbolElement).

## Compatibilidade

{{Compat("svg.elements.symbol")}}

## Veja também

- {{ SVGElement("marker") }}
- {{ SVGElement("pattern") }}
