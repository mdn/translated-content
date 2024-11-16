---
title: "Animation: метод cancel()"
slug: Web/API/Animation/cancel
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Метод **`cancel()`** Web Animation API интерфейса {{domxref("Animation")}} очищает все {{domxref("KeyframeEffect")}}, вызванные этой анимацией и прекращает воспроизведение.

> [!NOTE]
> Когда анимация отменена, её {{domxref("Animation.startTime", "startTime")}} и {{domxref("Animation.currentTime", "currentTime")}} устанавливаются в `null`.

## Синтаксис

```js-nolint
cancel()
```

### Параметры

Нет.

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

### Исключения

Этот метод напрямую не выбрасывает исключения, однако, если {{domxref("Animation.playState", "playState")}} анимации во время отмены является `"idle"`, то {{domxref("Animation.finished", "промис завершения текущей анимации", "", 1)}} отклоняется с {{domxref("DOMException")}} и именем `AbortError`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Web Animations API](/ru/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}}
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
- {{domxref("Animation.finished")}} возвращает промис, который отменит это действие, если `playState` анимации не `"idle"`.
