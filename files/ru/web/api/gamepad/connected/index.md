---
title: Gamepad.connected
slug: Web/API/Gamepad/connected
---

{{APIRef("Gamepad API")}}

Свойство **`Gamepad.connected`** интерфейса {{domxref("Gamepad") }} возвращает логическое значение того, подключён ли всё ещё геймпад к системе.

Если геймпад подключён - значение равно `true`; если нет - `false`.

## Синтаксис

```
 readonly    attribute boolean             connected;
```

## Пример

```js
var gp = navigator.getGamepads()[0];
console.log(gp.connected);
```

## Значение

{{jsxref("Boolean")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
