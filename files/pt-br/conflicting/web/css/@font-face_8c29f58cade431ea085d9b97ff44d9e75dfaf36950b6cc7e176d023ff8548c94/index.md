---
title: tref
slug: conflicting/Web/CSS/@font-face_8c29f58cade431ea085d9b97ff44d9e75dfaf36950b6cc7e176d023ff8548c94
original_slug: Web/SVG/Element/tref
---

{{SVGRef}}

O conteúdo textual para o {{ SVGElement("text") }} podem ser dados de caracteres diretamente embedados com o elemento {{ SVGElement("text") }} ou o conteúdo de dados de caracteres de um elemento referenciado, onde a referência é especificada com um elemento `tref`.

## Contexto de uso

{{svginfo}}

## Exemplo

```xml
<svg width="100%" height="100%" viewBox="0 0 1000 300"
     xmlns="https://www.w3.org/2000/svg"
     xmlns:xlink="https://www.w3.org/1999/xlink">
  <defs>
    <text id="ReferencedText">
      Referenced character data
    </text>
  </defs>

  <text x="100" y="100" font-size="45" >
    Inline character data
  </text>

  <text x="100" y="200" font-size="45" fill="red" >
    <tref xlink:href="#ReferencedText"/>
  </text>

  <!-- Show outline of canvas using 'rect' element -->
  <rect x="1" y="1" width="998" height="298"
        fill="none" stroke-width="2" />
</svg>
```

## Atributos

### Atributos globais

- [Atributos de processamento condicional](/pt-BR/docs/SVG/Attribute#conditionalproccessing) »
- [Atributos principais](/pt-BR/docs/SVG/Attribute#core) »
- [Atributos de eventos gráficos](/pt-BR/docs/SVG/Attribute#graphicalevent) »
- [Atributos de apresentação](/pt-BR/docs/SVG/Attribute#presentation) »
- [Atributos XLink](/pt-BR/docs/SVG/Attribute#xlink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### Atributos específicos

- {{ SVGAttr("xlink:href") }}

## Interface DOM

Este elemento implementa a interface do [`SVGTRefElement`](/pt-BR/docs/DOM/SVGTRefElement).

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{ SVGElement("text") }}
