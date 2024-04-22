---
title: Animation.cancel()
slug: Web/API/Animation/cancel
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

Метод **`cancel()`** API Web Animation интерфейса {{domxref("Animation")}} очищает все {{domxref("KeyframeEffect")}} вызванной этой анимацией и прекращает его воспроизведение.

> **Примечание:** Когда анимация отменена, её {{domxref("Animation.startTime", "startTime")}} и {{domxref("Animation.currentTime", "currentTime")}} устанавливаются в `null`.

## Syntax

```
Animation.cancel();
```

### Parameters

None.

### Return value

None.

### Exceptions

Этот метод не выбрасывает напрямую исключения; однако, если {{domxref("Animation.playState", "playState")}} анимации во время отмены ничего кроме `"idle"`, {{domxref("Animation.finished", "current finished promise", "", 1)}} отклоняется с помощью {{domxref("DOMException")}} названным `AbortError`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- [Web Animations API](/ru/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}}
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
- {{domxref("Animation.finished")}} returns the promise this action will reject if the animation's `playState` is not `"idle"`.
