---
title: Animation
slug: Web/API/Animation
---

{{ APIRef("Web Animations API") }}{{SeeCompatTable}}

A interface **`Animation`** da [Web Animations API](/pt-BR/docs/Web/API/Web_Animations_API) representa um único player de animação e fornece controles e uma linha do tempo (timeline) para um nó de animação ou recurso.

## Construtor

- {{domxref("Animation.Animation()", "Animation()")}}
  - : Cria uma nova instância do objeto `Animation`.

## Propriedades

- {{domxref("Animation.currentTime")}}
  - : O valor do tempo atual da animação, em milissegundos, esteja ela executando ou pausada. Se a animação não tem uma {{domxref("AnimationTimeline", "timeline")}}, está inativa ou ainda não foi executada, este valor é `null`.
- {{domxref("Animation.effect")}}
  - : Obtém e define o {{domxref("KeyframeEffect")}} associado a essa animação.
- {{domxref("Animation.finished")}} {{readOnlyInline}}
  - : Retorna a `Primise` de finalização atual para essa animação.
- {{domxref("Animation.id")}}
  - : Obtém e define a `String` usada para identificar a animação.
- {{domxref("Animation.oncancel")}}
  - : Obtém e define o manipulador para o evento `cancel`.
- {{domxref("Animation.onfinish")}}
  - : Obtém e define o manipulador para o evento `finish`.
- {{domxref("Animation.playState")}} {{readOnlyInline}}
  - : Retorna um valor enumerado descrevendo o estado de execução de uma animação.
- {{domxref("Animation.playbackRate")}}
  - : Obtém ou define a taxa de execução da animação.
- {{domxref("Animation.ready")}} {{readOnlyInline}}
  - : Retorna a promessa atual para quando essa animação estiver pronta.
- {{domxref("Animation.startTime")}}
  - : Obtém ou define o tempo agendado quando a execução de uma animação deve começar.
- {{domxref("Animation.timeline")}}
  - : Obtém ou define a {{domxref("AnimationTimeline", "timeline")}} associada a essa animação.

## Métodos

- {{domxref("Animation.cancel()")}}
  - : Limpa todos os {{domxref("KeyframeEffect", "keyframeEffects")}} causados por essa animação e aborta sua execução.
- {{domxref("Animation.finish()")}}
  - : Vai até um dos extremos dessa animação, dependendo se ela está executando ou retornando.
- {{domxref("Animation.pause()")}}
  - : Suspende a execução de uma animação.
- {{domxref("Animation.play()")}}
  - : Inicia ou continua a execução de uma animação ou a recomeça se ela tiver terminado anteriormente.
- {{domxref("Animation.reverse()")}}
  - : Move a animação ao contrário, parando no início da animação.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
