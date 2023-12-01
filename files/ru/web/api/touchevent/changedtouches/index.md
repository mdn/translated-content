---
title: TouchEvent.changedTouches
slug: Web/API/TouchEvent/changedTouches
---

{{ APIRef("Touch Events") }}

## Сводка

{{ domxref("TouchList") }} список точек касания (объекта {{domxref("Touch")}}), смысл которых зависит от типа события:

- Для события `touchstart`, это список точек касания, в которых появилось взаимодействие с поверхностью экрана.
- Для события `touchmove`, это список точек касания, которые изменились с момента последнего события.
- Для события `touchend`, это список точек касания, на которых прекратилось взаимодействие с поверхностью экрана (т. е. набор точек, где прервалось касание пальцами).

Это свойство предназначено {{readonlyInline}}.

## Синтаксис

```
var changes = touchEvent.changedTouches;
```

### Возвращаемое значение

- `changes`
  - : Список {{ domxref("TouchList") }} объекта {{ domxref("Touch") }} в котором содержатся все точки касания для данного события.

## Пример

Этот пример демонстрирует свойство {{domxref("TouchEvent.changedTouches")}} объекта {{domxref("TouchEvent")}}. Свойство {{domxref("TouchEvent.changedTouches")}} это — объект {{domxref("TouchList")}}, который содержит объект {{domxref("Touch")}} для каждой точки, где произошло событие.

В этом фрагменте кода обработчик события {{event("touchmove")}} выполняет перебор списка `changedTouches` и выводит в консоль идентификатор каждой точки касания, где произошло изменение с последнего события.

```js
someElement.addEventListener(
  "touchmove",
  function (e) {
    // Iterate through the list of touch points that changed
    // since the last event and print each touch point's identifier.
    for (var i = 0; i < e.changedTouches.length; i++) {
      console.log(
        "changedTouches[" +
          i +
          "].identifier = " +
          e.changedTouches[i].identifier,
      );
    }
  },
  false,
);
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
