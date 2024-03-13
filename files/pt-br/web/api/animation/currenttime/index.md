---
title: Animation.currentTime
slug: Web/API/Animation/currentTime
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

A propriedade **`Animation.currentTime`** da [Web Animations API](/pt-BR/docs/Web/API/Web_Animations_API) retorna e altera o tempo atual da animação em milésimos de segundos, seja estando em execução ou pausada.

Se a animação não tem uma {{domxref("AnimationTimeline", "timeline")}}, está inativa, ou ainda não foi colocada em execução, o valor de retorno do `currentTime` será `null`.

## Sintaxe

```
vartempoAtual = Animation.currentTime;
Animation.currentTime = novoTempo;
```

### Valor

Um número que representará no tempo atual da animação em milésimos de segundos, ou `null` para desativar a animação.

## Examples

No [jogo Drink Me/Eat Me](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010), O tamanho da Alice é animado e pode crescer ou diminuir. No início do jogo, o tamanho dela foi colocado entre os dois extremos do animation's `currentTime` no meio do [`KeyframeEffect`'s duration](/pt-BR/docs/Web/API/Web_Animations_API/Animation_timing_options), desta maneira:

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

Outra forma mais genérica para encontrar o marco de 50% da animação pode ser feito da seguinte forma:

```js
animation.currentTime =
  animation.effect.getComputedTiming().delay +
  animation.effect.getComputedTiming().activeDuration / 2;
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Animation")}} para outros métodos e propriedades que você pode usar para controlar a animação da página web.
- {{domxref("Animation.startTime")}} para o tempo que a animação está programada começar.
- [Web Animations API](/pt-BR/docs/Web/API/Web_Animations_API)
