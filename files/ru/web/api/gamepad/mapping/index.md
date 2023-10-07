---
title: Gamepad.mapping
slug: Web/API/Gamepad/mapping
---

{{APIRef("Gamepad API")}}

Свойство **`Gamepad.mapping`** интерфейса {{domxref("Gamepad")}} возвращает строковый индикатор, указывающий, изменил ли браузер элементы управления на уже известный шаблон

На данный момент существует один поддерживаемый шаблон - [standard gamepad](https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html#remapping). Если браузер позволяет поменять элементы управления в данном шаблоне, свойство `mapping` будет установлено строка `"standard"`.

## Синтаксис

```
readonly    attribute DOMString           mapping;
```

## Пример

```js
var gp = navigator.getGamepads()[0];
console.log(gp.mapping);
```

## Значение

A {{domxref("string")}}.

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
