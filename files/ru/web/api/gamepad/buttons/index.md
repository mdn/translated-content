---
title: Gamepad.buttons
slug: Web/API/Gamepad/buttons
---

{{APIRef("Gamepad API")}}

Свойство **`Gamepad.buttons`** интерфейса {{domxref("Gamepad") }} возвращает массив, состоящий из объектов {{domxref("gamepadButton")}}, представляющие кнопки, представленные на устройстве (геймпаде).

Каждый элемент в массиве равен 0 если кнопка не нажата, и не-нуль (обычно 1.0) если нажата. Каждый объект {{domxref("gamepadButton")}} содержит два параметра: `pressed` и `value`:

- Свойство `pressed` - boolean индикатор, показывающий, нажата ли кнопка (`true`) или нет (`false`).
- Свойство `value` - число с плавающей точкой, показывающая степень нажатия на аналоговую кнопку (как триггеры на многих современных геймпадах). Значение нормализованное в диапазоне 0.0 – 1.0, где 0.0 указывает, что кнопка не нажата, а 1.0 - что нажата полностью.

## Синтаксис

```
readonly    attribute GamepadButton[]     buttons;
```

## Пример

Приведённый код взят из моего _(автора статьи)_ демо Gamepad API button (вы можете [Посмотреть демо](http://chrisdavidmills.github.io/gamepad-buttons/), и [посмотреть исходники на GitHub](https://github.com/chrisdavidmills/gamepad-buttons/tree/master)). Важно — в Chrome [`Navigator.getGamepads`](/ru/docs/Web/API/Navigator/getGamepads) необходимо установить префикс `webkit`, и значения кнопки будут представлять из себя массив дробных чисел, тогда как в Firefox [`Navigator.getGamepads`](/ru/docs/Web/API/Navigator/getGamepads) нет необходимости устанавливать префикс, и значения будут представлять собой массив объектов [`GamepadButton`](/ru/docs/Web/API/GamepadButton); Свойство [`GamepadButton.value`](/ru/docs/Web/API/GamepadButton/value) или [`GamepadButton.pressed`](/ru/docs/Web/API/GamepadButton/pressed) необходимо для получения состояния кнопки, в зависимости от от типа кнопки. В данном простом примере обрабатывается оба вида кнопок.

```js
function gameLoop() {
  if (navigator.webkitGetGamepads) {
    var gp = navigator.webkitGetGamepads()[0];

    if (gp.buttons[0] == 1) {
      b--;
    } else if (gp.buttons[1] == 1) {
      a++;
    } else if (gp.buttons[2] == 1) {
      b++;
    } else if (gp.buttons[3] == 1) {
      a--;
    }
  } else {
    var gp = navigator.getGamepads()[0];

    if (gp.buttons[0].value > 0 || gp.buttons[0].pressed == true) {
      b--;
    } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed == true) {
      a++;
    } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed == true) {
      b++;
    } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed == true) {
      a--;
    }
  }

  ball.style.left = a * 2 + "px";
  ball.style.top = b * 2 + "px";

  var start = window.requestAnimationFrame(gameLoop);
}
```

## Значение

Массив из объектов {{domxref("gamepadButton")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
