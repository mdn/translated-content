---
title: GamepadButton
slug: Web/API/GamepadButton
---

{{APIRef("Gamepad API")}}Интерфейс **`GamepadButton`** определяет отдельную кнопку геймпада или другого контроллера, позволяя получить доступ к текущему состоянию различных типов кнопок, доступных на устройстве

Объект **`GamepadButton`** возвращается путём получения любого элемента в массиве `buttons`, который является свойством интерфейса {{domxref("Gamepad")}}.

> **Примечание:** Это работает только в Firefox Gecko 28 и выше; Chrome и более ранние версии Firefox по-прежнему возвращают массив чисел с плавающей точкой

## Свойства

- {{domxref("GamepadButton.value")}} {{readonlyInline}}
  - : Значение с плавающей точкой, указывающее на текущее состояние аналоговых кнопок, таких как триггеры на многих современных геймпадах. Значение нормализованное к диапазону 0.0-1.0, где 0.0 означает, что клавиша не нажата совсем, 1.0 - нажата полностью.
- {{domxref("GamepadButton.pressed")}} {{readonlyInline}}
  - : Значение {{domxref("Boolean")}} указывает, нажата ли кнопка (`true`) или не нажата (`false`).

## Пример

Приведённый код взят из моего _(автора статьи)_ демо Gamepad API button (вы можете [Посмотреть демо](http://chrisdavidmills.github.io/gamepad-buttons/), и [посмотреть исходники на GitHub](https://github.com/chrisdavidmills/gamepad-buttons/tree/master)). Важно — в Chrome {{domxref("Navigator.getGamepads")}} необходимо установить префикс `webkit`, и значения кнопки будут представлять из себя массив дробных чисел, тогда как в Firefox {{domxref("Navigator.getGamepads")}} нет необходимости устанавливать префикс, и значения будут представлять собой массив объектов {{domxref("GamepadButton")}}; Свойство {{domxref("GamepadButton.value")}} или {{domxref("GamepadButton.pressed")}} необходимо для получения состояния кнопки, в зависимости от от типа кнопки. В данном простом примере обрабатывается оба вида кнопок.

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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
