---
title: animateTransform
slug: Web/SVG/Element/animateTransform
tags:
  - Animação
  - Elemento
  - SVG
translation_of: Web/SVG/Element/animateTransform
---
{{SVGRef}}

O elemento `animateTransform` anima a transformação de um atributo em um elemento alvo, permitindo assim as animações controlarem a movimentação, escala, rotação e/ou inclinação.

## Contexto de uso

{{svginfo}}

## Exemplo

```html
<?xml version="1.0"?>
<svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     xmlns:xlink="http://www.w3.org/1999/xlink" >

    <polygon points="60,30 90,90 30,90">
        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 70"
                          to="360 60 70"
                          dur="10s"
                          repeatCount="indefinite"/>
    </polygon>
</svg>
```

**Resultado**

{{ EmbedLiveSample('Exemplo','120','120') }}

## Atributos

### Atributos globais

- [Atributos de processamento condicional](</pt-BR/docs/Web/SVG/Attribute#Atributos de processamento condicional> "en-US/docs/Web/SVG/Attribute#Atributos de processamento condicional") »
- [Atributos principais](</pt-BR/docs/Web/SVG/Attribute#Atributos principais> "en-US/docs/Web/SVG/Attribute#Atributos principais") »
- [Atributos de eventos da animação](</pt-BR/docs/Web/SVG/Attribute#Atributos de eventos da animação> "en-US/docs/Web/SVG/Attribute#Atributos de eventos da animação") »
- [Atributos XLink](</pt-BR/docs/Web/SVG/Attribute#Atributos XLink> "en-US/docs/Web/SVG/Attribute#Atributos XLink") »
- [Atributos de destino do atributo da animação](</pt-BR/docs/Web/SVG/Attribute#Atributos de destino do atributo da animação> "en-US/docs/Web/SVG/Attribute#Atributos de destino do atributo da animação") »
- [Atributos de cronometragem da animação](</pt-BR/docs/Web/SVG/Attribute#Atributos de cronometragem da animação> "en-US/docs/Web/SVG/Attribute#Atributos de cronometragem da animação") »
- [Atributos de valor de animação](</pt-BR/docs/Web/SVG/Attribute#Atributos de valor de animação> "en-US/docs/Web/SVG/Attribute#Atributos de valor de animação") »
- [Atributos de animação adicionais](</pt-BR/docs/Web/SVG/Attribute#Atributos de animação adicionais> "en-US/docs/Web/SVG/Attribute#Atributos de animação adicionais") »
- {{ SVGAttr("externalResourcesRequired") }}

### Atributos específicos

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## Interface DOM

Este elemento implementa a interface do [`SVGAnimateTransformElement`](/pt-BR/docs/DOM/SVGAnimateTransformElement "en/DOM/SVGAnimateTransformElement").
