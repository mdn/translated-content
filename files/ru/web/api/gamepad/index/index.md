---
title: Gamepad.index
slug: Web/API/Gamepad/index
---

{{APIRef("Gamepad API")}}

Свойство **`Gamepad.index`** интерфейса {{domxref("Gamepad") }} возвращает целое автоинкрементируемое значение, уникальное для каждого устройства, подключённого к системе.

Это может быть полезно для распознавания нескольких контроллеров; отключённый, и подключённый заново геймпад, будет иметь тот же индекс.

## Синтаксис

```
readonly    attribute long                index;
```

## Пример

```js
window.addEventListener("gamepadconnected", function () {
  var gp = navigator.getGamepads()[0];
  gamepadInfo.innerHTML =
    "Gamepad connected at index " + gp.index + ": " + gp.id + ".";
});
```

### Значение

{{jsxref("Number") }}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
