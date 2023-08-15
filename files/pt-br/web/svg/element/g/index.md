---
title: g
slug: Web/SVG/Element/g
---

{{SVGRef}}

O elemento `g` é um recipiente utilizado para agrupar objetos. Transformações aplicadas no elemento `g` são repassadas para todos os seus elementos filhos. Atributos também são herdados por elementos filhos. Além disso, pode ser utilizado para definir objetos complexos que poderão ser referenciados mais tarde pelo elemento {{SVGElement("use")}}.

## Contexto de uso

{{svginfo}}

## Exemplo

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 95 50"
  xmlns="https://www.w3.org/2000/svg">
  <g stroke="green" fill="white" stroke-width="5">
    <circle cx="25" cy="25" r="15" />
    <circle cx="40" cy="25" r="15" />
    <circle cx="55" cy="25" r="15" />
    <circle cx="70" cy="25" r="15" />
  </g>
</svg>
```

{{EmbedLiveSample("Exemplo",220,130)}}

## Atributos

### Atributos globais

- [Atributos de processamento condicional](/pt-BR/docs/SVG/Attribute#ConditionalProccessing) »
- [Atributos principais](/pt-BR/docs/SVG/Attribute#Core) »
- [Atributos de eventos gráficos](/pt-BR/docs/SVG/Attribute#GraphicalEvent) »
- [Atributos de apresentação](/pt-BR/docs/SVG/Attribute#Presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Atributos específicos

_There is no specific attributes_

## Interface DOM

Este elemento implementa a interface do [`SVGGElement`](/pt-BR/docs/DOM/SVGGElement).

## Compatibilidade com navegadores

{{Compat("svg.elements.g")}}
