---
title: VRDisplayEvent
slug: Web/API/VRDisplayEvent
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Интерфейс VRDisplayEvent API WebVR представляет объект событий, связанных с WebVR (Подробнее - см. Список расширений окна WebVR)

## Constructor

- {{domxref("VRDisplayEvent.VRDisplayEvent()")}}
  - : Создаёт экземпляр объекта VRDisplayEvent.

## Properties

_`VRDisplayEvent` также наследует свойства от своего родительского объекта, {{domxref("Event")}}._

- {{domxref("VRDisplayEvent.display")}} {{readonlyInline}}
  - : {{domxref("VRDisplay")}} связанный с этим событием.
- {{domxref("VRDisplayEvent.reason")}} {{readonlyInline}}
  - : Определяемая человеческим фактором причина, по которой произошло событие.

## Examples

```js
window.addEventListener("vrdisplaypresentchange", function (e) {
  console.log(
    "Display " +
      e.display.displayId +
      " presentation has changed. Reason given: " +
      e.reason +
      ".",
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebVR API](/ru/docs/Web/API/WebVR_API)
