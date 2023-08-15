---
title: AnimationEvent.initAnimationEvent()
slug: conflicting/Web/API/AnimationEvent/AnimationEvent
---

{{non-standard_header}}{{ apiref("Web Animations API") }}

## Sumário

O **`AnimationEvent.initAnimationEvent()`** é um método iniciado com o evento da animção criando um depreciativo {{domxref("Document.createEvent()", "Document.createEvent(\"AnimationEvent\")")}} método.

`AnimationEvent` criado desse modo não é confiável.

> **Nota:** Durante o processo de padronização, esse método foi removido das especificações. É que ele foi depreciado e esse processo foi removido da maioria das implementações . **Não use este método**; ao invés, use o construtor padrão, {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}, para criar um sintético {{domxref("AnimationEvent")}}.

## Syntax

```
animationEvent.initAnimationEvent(typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);
```

### Parâmetros

- `typeArg`

  - : Um {{domxref("DOMString")}} identificado com um tipo específico de evento animação que ocorreu. Os seguintes valores são aceitados:

    | Valor                | Significado                       |
    | -------------------- | --------------------------------- |
    | `animationstart`     | A animação começou.               |
    | `animationend`       | A animação terminou.              |
    | `animationiteration` | A iteração corrente se completou. |

- `canBubbleArg`
  - : Uma {{domxref("Boolean")}} bandeira indicando se o evento pode ser bolha (`true`) ou não (`false)`.
- `cancelableArg`
  - : Uma {{domxref("Boolean")}} bandeira indicando se o evento associado pode ser evitado (`true`) ou não (`false)`.
- `animationNameArg`
  - : Um {{domxref("DOMString")}} contendo o valor do{{cssxref("animation-name")}} propriedade CSS associada com a transição.
- `elapsedTimeArg`
  - : Um ponto flutuante indicando a quantidade de tempo que a animação esteve rodando, em segundos, com o tempo do evento terminar, excluirá-se o tempo em que a animação esteve em pausa.Para um `"animationstart"` evento, `elapsedTime` é `0.0` a não ser que haja um valor negativo para [`animation-delay`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/animation-delay "The animation-delay CSS property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element."), nesse caso o evento irá terminar com `elapsedTime` contendo `(-1 * delay)`.

## Especificações

_Esse método é não-padrão e não é parte de qualquer especificação, no entanto ele esteve presente nos primeiros rascunhos de {{SpecName("CSS3 Animations")}}._

## Compatibilidade com navegadores

{{Compat()}}

## See also

- [Using CSS animations](/pt-BR/docs/CSS/Using_CSS_animations)
- Animation-related CSS properties and at-rules: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
- The {{domxref("AnimationEvent")}} interface it belongs to.
