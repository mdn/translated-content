---
title: Animation.cancel()
slug: Web/API/Animation/cancel
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

O método **`Animation.cancel()`** da interface {{domxref("Animation")}} , limpa todas as {{domxref("KeyframeEffect", "keyframeEffects")}} geradas pela animação e aborta esta execução.

> **Nota:** Quando uma animação é cancelada, os valores de {{domxref("Animation.startTime", "startTime")}} e {{domxref("Animation.currentTime", "currentTime")}} são definidos como `null`.

## Sintaxe

```js
// cancela animação
animation.cancel();
```

### Parametros

Nenhum.

### Valor de retorno

Nenhum.

### Exceptions

Se o método {{domxref("Animation.playState")}} da animação estiver executando quando a operação for cancelada, esta ação vai rejeitar a {{domxref("Animation.finished", "current finished promise")}} com a {{domxref("DOMException")}} nomeada `AbortError`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Web Animations API](/pt-BR/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}}
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
- {{domxref("Animation.finished")}} returns the promise this action will reject if the animation's `playState` is not `idle`.
