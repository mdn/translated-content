---
title: stop
slug: Web/SVG/Element/stop
---

{{SVGRef}}

A rampa de cores para utilizar em um gradiente é definido pelo elemento `stop` que é elemento filho do elemento {{SVGElement("linearGradient")}} ou do elemento {{SVGElement("radialGradient")}}.

## Contexto de uso

{{svginfo}}

## Exemplo

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 80 40"
  xmlns="https://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="MyGradient">
      <stop offset="5%" stop-color="#F60" />
      <stop offset="95%" stop-color="#FF6" />
    </linearGradient>
  </defs>

  <!-- Outline the drawing area in black -->
  <rect fill="none" stroke="black" x="0.5" y="0.5" width="79" height="39" />

  <!-- The rectangle is filled using a linear gradient -->
  <rect
    fill="url(#MyGradient)"
    stroke="black"
    stroke-width="1"
    x="10"
    y="10"
    width="60"
    height="20" />
</svg>
```

Resultado:

{{EmbedLiveSample("Exemplo",160,95)}}

## Atributos

### Atributos globais

- [Atributos principais](/pt-BR/docs/Web/SVG/Attribute#Core) »
- [Atributos de apresentação](/pt-BR/docs/Web/SVG/Attribute#Presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Atributos específicos

- {{SVGAttr("offset")}}
- {{SVGAttr("stop-color")}}
- {{SVGAttr("stop-opacity")}}

## Interface DOM

Este elemento implementa a interface do [`SVGStopElement`](/pt-BR/docs/Web/API/SVGStopElement).

## Compatibilidade com navegadores

{{Compat("svg.elements.stop")}}

## Veja também

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}
