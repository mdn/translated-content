---
title: Gamepad.axes
slug: Web/API/Gamepad/axes
---

{{APIRef("Gamepad API")}}

Свойство **`Gamepad.axes`** интерфейса {{domxref("Gamepad") }} возвращает массив, показывающий состояние элементов управления, имеющих оси направления, такие как джойстики на геймпаде.

Каждый элемент массива - дробное число в диапазоне от -1.0 до 1.0, показывающий состояние от самого маленького значения (-1.0) до самого высокого (1.0).

## Синтаксис

```
readonly    attribute double[]            axes;
```

## Пример

```js
function gameLoop() {
  if (navigator.webkitGetGamepads) {
    var gp = navigator.webkitGetGamepads()[0];
  } else {
    var gp = navigator.getGamepads()[0];
  }

  if (gp.axes[0] != 0) {
    b -= gp.axes[0];
  } else if (gp.axes[1] != 0) {
    a += gp.axes[1];
  } else if (gp.axes[2] != 0) {
    b += gp.axes[2];
  } else if (gp.axes[3] != 0) {
    a -= gp.axes[3];
  }

  ball.style.left = a * 2 + "px";
  ball.style.top = b * 2 + "px";

  var start = rAF(gameLoop);
}
```

## Значение

Массив значений {{domxref("double") }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
