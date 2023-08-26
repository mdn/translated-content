---
title: AnimationEvent.pseudoElement
slug: Web/API/AnimationEvent/pseudoElement
---

{{SeeCompatTable}}{{ apiref("Web Animations API") }}

## Sumário

O **`AnimationEvent.pseudoElement`** é uma propriedade só de leitura do {{domxref("DOMString")}}, começando com `'::'`, contendo o nome do [pseudo-element](/pt-BR/docs/Web/CSS/Pseudo-elements) em que a animação roda. Se a animação não roda em um pseudo-elemento mas em um elemento, então temos uma _string_ vazia : `''`.

## Síntaxe

```
name = AnimationEvent.pseudoElement
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Using CSS animations](/pt-BR/docs/CSS/Using_CSS_animations)
- {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
- The {{domxref("AnimationEvent")}} interface it belongs to.
