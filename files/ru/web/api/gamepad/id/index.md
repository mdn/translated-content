---
title: Gamepad.id
slug: Web/API/Gamepad/id
---

{{APIRef("Gamepad API")}}

Свойство **`Gamepad.id`** интерфейса {{domxref("Gamepad") }} возвращает строку, содержащую некоторую информацию о контроллере.

Существующий синтаксис не стандартизирован, но в Firefox эта строка представляет собой три значения, разделённые тире (`-`):

- Две четырёхзначных шестнадцатеричных строки, содержащих USB vendor id (`VID`) и product id (`PID`) контроллера
- Имя контроллера, предоставленное драйвером.

Например, PS2 контроллер вернёт **`810-3-USB Gamepad`**.

Эта информация позволяет вам найти соответствие для элементов управления контроллера, а также, отобразить полезную информацию для пользователя.

## Синтаксис

```
readonly    attribute DOMString           id;
```

## Пример

```js
window.addEventListener("gamepadconnected", function () {
  var gp = navigator.getGamepads()[0];
  gamepadInfo.innerHTML =
    "Gamepad connected at index " + gp.index + ": " + gp.id + ".";
});
```

## Значение

{{jsxref("String")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
