---
title: AnimationEvent.elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
---

{{SeeCompatTable}}{{ apiref("Web Animations API") }}

## Sumário

O **`AnimationEvent.elapsedTime`** é uma propriedade só de leitura com um ponto flutuante dando a quantidade de tempo que animação esteve rodando, em segundos, quando o evento termina, excluirá o tempo em que ela esteve em pausa. Para um evento `"animationstart"`, `elapsedTime` é `0.0` a não ser que tenha um valor negativo para {{cssxref("animation-delay")}}, nesse caso o evento irá terminar com `elapsedTime` contendo `(-1 * delay)`.

## Síntaxe

```
time = AnimationEvent.elapsedTime
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando animações CSS.](/pt-BR/docs/CSS/Using_CSS_animations)
- Animation-related CSS properties and at-rules: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
- The {{domxref("AnimationEvent")}} interface it belongs to.
