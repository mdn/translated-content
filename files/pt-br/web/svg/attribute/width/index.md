---
title: Width
slug: Web/SVG/Attribute/width
---

« [SVG Attribute reference home](/pt-BR/SVG/Attribute)

Esse atributo indica um compromimento horizontal no sistema de coordenadas do usuário. O efeito exato dessa coordenada, depende de cada elemento. Na maioria das vezes, representa a largura da região retangular do elemento de referência.

Esse atributo precisa ser especificado, exceto para o elemento {{ SVGElement("svg") }} onde o valor padrão é **100%** (com exceção do elemento root {{ SVGElement("svg") }} que contém pais HTML). e o {{ SVGElement("filter") }} e {{ SVGElement("mask") }}, elementos que o valor padrão é **120%.**

## Contexto de Uso

| Categories         | None                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Value              | [\<length>](/pt-BR/SVG/Content_type#Length)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Animatable         | Yes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Normative document | [SVG 1.1 (2nd Edition): foreignObject element](https://www.w3.org/TR/SVG/extend.html#ForeignObjectElementWidthAttribute) [SVG 1.1 (2nd Edition): image element](https://www.w3.org/TR/SVG/struct.html#ImageElementWidthAttribute) [SVG 1.1 (2nd Edition): pattern element](https://www.w3.org/TR/SVG/pservers.html#PatternElementWidthAttribute) [SVG 1.1 (2nd Edition): rect element](https://www.w3.org/TR/SVG/shapes.html#RectElementWidthAttribute) [SVG 1.1 (2nd Edition): svg element](https://www.w3.org/TR/SVG/struct.html#SVGElementWidthAttribute) [SVG 1.1 (2nd Edition): use element](https://www.w3.org/TR/SVG/struct.html#UseElementWidthAttribute) [SVG 1.1 (2nd Edition): Filter primitive](https://www.w3.org/TR/SVG/filters.html#FilterPrimitiveWidthAttribute) [SVG 1.1 (2nd Edition): mask element](https://www.w3.org/TR/SVG/masking.html#MaskElementWidthAttribute) |

{{ page("/en/SVG/Content_type","Length") }}

## Exemplo

```xml
<?xml version="1.0"?>
<svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="https://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100"/>
</svg>
```

## Elementos

Os seguintes elementos podem user o atributo witdh

- [Filter primitive elements](/pt-BR/SVG/Element#FilterPrimitive) »
- {{ SVGElement("filter") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("image") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("rect") }}
- {{ SVGElement("svg") }}
- {{ SVGElement("use") }}
- {{ SVGElement("mask") }}
