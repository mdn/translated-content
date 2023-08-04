---
title: Navigator.getGamepads()
slug: Web/API/Navigator/getGamepads
---

{{APIRef("Gamepad API")}}{{SeeCompatTable}}

**`Navigator.getGamepads()`** метод, возвращающий массив {{ domxref("Gamepad") }} объектов, по одному для каждого геймпада, подключённому к устройству.

## Синтаксис

```
 var arrayGP = navigator.getGamepads();
```

## Пример

```js
window.addEventListener("gamepadconnected", function (e) {
  var gp = navigator.getGamepads()[0];
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    gp.index,
    gp.id,
    gp.buttons.length,
    gp.axes.length,
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## See also

- [Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
