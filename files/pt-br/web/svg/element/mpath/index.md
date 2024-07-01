---
title: mpath
slug: Web/SVG/Element/mpath
---

{{SVGRef}}

O sub elemento `mpath` do elemento {{ SVGElement("animateMotion") }} fornece a habilidade de referenciar um elemento externo {{ SVGElement("path") }} como uma definição de um caminho de movimento.

## Contexto de uso

{{svginfo}}

## Exemplo

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 500 300"
  xmlns="https://www.w3.org/2000/svg"
  xmlns:xlink="https://www.w3.org/1999/xlink">
  <rect
    x="1"
    y="1"
    width="498"
    height="298"
    fill="none"
    stroke="blue"
    stroke-width="2" />

  <!-- Desenha o contorno da trajetória de movimento em azul, ao longo, com três pequenos círculos: inicio, meio e fim. -->
  <path
    id="path1"
    d="M100,250 C 100,50 400,50 400,250"
    fill="none"
    stroke="blue"
    stroke-width="7.06" />
  <circle cx="100" cy="250" r="17.64" fill="blue" />
  <circle cx="250" cy="100" r="17.64" fill="blue" />
  <circle cx="400" cy="250" r="17.64" fill="blue" />

  <!-- Aqui temos um triângulo que andará sobre o caminho do movimento.
       Define-se com uma orientação vertical com base no triângulo horizontalmente centralizado logo acima da origem. -->
  <path
    d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
    fill="yellow"
    stroke="red"
    stroke-width="7.06">
    <!-- Define o caminho de movimento da animação -->
    <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
      <mpath xlink:href="#path1" />
    </animateMotion>
  </path>
</svg>
```

Resultado:

{{EmbedLiveSample("Example",250,165)}}

## Atributos

### Atributos globais

- [Atributos principais](/pt-BR/SVG/Attribute#Core) »
- [Atributos XLink](/pt-BR/SVG/Attribute#XLink) »
- {{ SVGAttr("externalResourcesRequired") }}

### Atributos específicos

- {{ SVGAttr("xlink:href") }}

## Interface DOM

Este elemento implementa a interface do [`SVGMPathElement`](/pt-BR/DOM/SVGMPathElement).

## Relacionado

- {{ SVGElement("animateMotion") }}
