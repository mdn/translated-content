---
title: animateTransform
slug: Web/SVG/Element/animateTransform
---

{{SVGRef}}

O elemento `animateTransform` anima a transformação de um atributo em um elemento alvo, permitindo assim as animações controlarem a movimentação, escala, rotação e/ou inclinação.

## Contexto de uso

{{svginfo}}

## Exemplo

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="https://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="https://www.w3.org/1999/xlink">
  <polygon points="60,30 90,90 30,90">
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      from="0 60 70"
      to="360 60 70"
      dur="10s"
      repeatCount="indefinite" />
  </polygon>
</svg>
```

**Resultado**

{{ EmbedLiveSample('Exemplo','120','120') }}

## Atributos

### Atributos globais

- [Atributos de processamento condicional](/pt-BR/docs/Web/SVG/Attribute#Atributos_de_processamento_condicional) »
- [Atributos principais](</pt-BR/docs/Web/SVG/Attribute#Atributos principais>) »
- [Atributos de eventos da animação](/pt-BR/docs/Web/SVG/Attribute#Atributos_de_eventos_da_animação) »
- [Atributos XLink](/pt-BR/docs/Web/SVG/Attribute#Atributos_XLink) »
- [Atributos de destino do atributo da animação](/pt-BR/docs/Web/SVG/Attribute#Atributos_de_destino_do_atributo_da_animação) »
- [Atributos de cronometragem da animação](/pt-BR/docs/Web/SVG/Attribute#Atributos_de_cronometragem_da_animação) »
- [Atributos de valor de animação](/pt-BR/docs/Web/SVG/Attribute#Atributos_de_valor_de_animação) »
- [Atributos de animação adicionais](/pt-BR/docs/Web/SVG/Attribute#Atributos_de_animação_adicionais) »
- {{ SVGAttr("externalResourcesRequired") }}

### Atributos específicos

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## Interface DOM

Este elemento implementa a interface do [`SVGAnimateTransformElement`](/pt-BR/docs/DOM/SVGAnimateTransformElement).
