---
title: Gamepad.timestamp
slug: Web/API/Gamepad/timestamp
---

{{APIRef("Gamepad API")}}

Свойство **`Gamepad.timestamp`** интерфейса {{domxref("Gamepad")}} возвращает {{domxref("DOMHighResTimeStamp")}}, представляющий собой время последнего обновления геймпада.

Идея состоит в том, чтобы позволить разработчику определить, были ли изменены данные для `axes` и `button` на аппаратном обеспечении. Значение должно быть установлено относительно атрибута `navigationStart` интерфейса `{{domxref("PerformanceTiming")}}`. Значения монотонно увеличиваются, поэтому их можно сравнивать, чтобы определить порядок изменений, т.к. новые значения всегда будут больше или равны старым.

> **Примечание:** В данный момент, это свойство нигде не поддерживается.

## Синтаксис

```
readonly    attribute DOMHighResTimeStamp timestamp;
```

## Пример

```js
var gp = navigator.getGamepads()[0];
console.log(gp.timestamp);
```

## Значение

{{domxref("DOMHighResTimeStamp")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
