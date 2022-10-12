---
title: defs
slug: Web/SVG/Element/defs
tags:
  - Element
  - Elemento
  - SVG
  - SVG Container
  - tag
translation_of: Web/SVG/Element/defs
---
{{SVGRef}}

A especificação do SVG permite que objetos gráficos sejam definidos para reuso posteriormente. Recomenda-se que, sempre que possível, os elementos referenciados sejam definidos dentro da tag `defs`. A definição destes elementos dentro de uma tag `defs` promove o entendimento do conteúdo do SVG e, consequentemente, promove a acessibilidade. Elementos gráficos definidos dentro da tag `defs` não serão diretamente renderizados. Você pode utilizar a tag {{ SVGElement("use") }} para renderizar tais elementos na janela de visualização.

## Contexto de uso

{{svginfo}}

## Exemplo

```xml
<svg width="80px" height="30px" viewBox="0 0 80 30"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="Gradient01">
      <stop offset="20%" stop-color="#39F" />
      <stop offset="90%" stop-color="#F3F" />
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="60" height="10"
        fill="url(#Gradient01)"  />
</svg>
```

## Atributos

### Atributos globais

- [Atributos de processamento condicional](/en/SVG/Attribute#ConditionalProccessing) »
- [Atributos centrais](/en/SVG/Attribute#Core) »
- [Atributos de eventos gráficos](/en/SVG/Attribute#GraphicalEvent) »
- [Atributos de apresentação](/en/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Atributos específicos

_Não existem atributos específicos_

## DOM Interface

Este elemento implementa a interface [`SVGDefsElement`](/en/DOM/SVGDefsElement).

## Compatibilidade com navegadores

{{Compat("svg.elements.defs")}}

## Veja também

- {{ SVGElement("use") }}
