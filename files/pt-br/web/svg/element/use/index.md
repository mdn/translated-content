---
title: use
slug: Web/SVG/Element/use
---

{{SVGRef}}

O elemento `use` cria instâncias dentro de um documento SVG e os duplica em outro local. O efeito é o mesmo se as instâncias forem profundamente clonadas em um DOM não exposto, e então coladas onde o elemento `use` está (muito parecido com [elementos de template](/pt-BR/docs/Web/HTML/Element/template) clonados no HTML5). Como as instâncias clonadas não são expostas, é preciso ter cuidado ao utilizar [CSS](/pt-BR/docs/Web/CSS) para estilizar o elemento `use` e seus descendentes ocultos. Não há garantia de que atributos CSS sejam herdados pelo DOM oculto e clonado, a menos que você os solicite explicitamente usando [herança CSS](/pt-BR/docs/CSS/inheritance).

Por motivos de segurança alguns navegadores poderão aplicar uma política de "mesma origem" com elementos `use`, bem como poderão recusar o carregamento de uma URI de múltiplas origens no atributo `xlink:href`.

## Contexto de uso

{{svginfo}}

## Exemplo

```xml
<svg width="100%" height="100%" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
  <style>
    .classA { fill:red }
  </style>
  <defs>
    <g id="Port">
      <circle style="fill:inherit" r="10"/>
    </g>
  </defs>

  <text y="15">black</text>
  <use x="50" y="10" xlink:href="#Port" />
  <text y="35">red</text>
  <use x="50" y="30" xlink:href="#Port" class="classA"/>
  <text y="55">blue</text>
  <use x="50" y="50" xlink:href="#Port" style="fill:blue"/>
 </svg>
```

## Atributos

### Atributos globais

- [Atributos de processamento condicional](/pt-BR/docs/Web/SVG/Attribute#conditionalproccessing) »
- [Atributos principais](/pt-BR/docs/Web/SVG/Attribute#core) »
- [Atributos de eventos gráficos](/pt-BR/docs/Web/SVG/Attribute#graphicalevent) »
- [Atributos de apresentação](/pt-BR/docs/Web/SVG/Attribute#presentation) »
- [Atributos XLink](/pt-BR/docs/Web/SVG/Attribute#xlink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Atributos específicos

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("xlink:href") }}

## Interface DOM

Este elemento implementa a interface do [`SVGUseElement`](/pt-BR/docs/DOM/SVGUseElement).

## Compatibilidade dos navegadores

{{Compat}}
