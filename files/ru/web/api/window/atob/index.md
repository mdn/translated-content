---
title: Глобальная функция atob()
slug: Web/API/Window/atob
---

{{APIRef("HTML DOM")}}

Функция **`atob()`** декодирует строку данных, которая была закодирована с использованием base-64. Вы можете использовать метод {{domxref("btoa","btoa()")}}, чтобы закодировать и передать данные, которые в исходном виде могут вызвать проблемы передачи, затем отправить их и использовать метод `atob()`, чтобы декодировать данные снова. Например, вы можете закодировать, передать и декодировать управляющие символы, такие как ASCII-значения от 0 до 31.

В случаях использования с Unicode или UTF-8 строками, смотрите [this note at Base64 encoding and decoding](/ru/docs/Glossary/Base64#the_.22unicode_problem.22) и [this note at `btoa()`](/ru/docs/Web/API/Window/btoa#unicode_strings).

## Синтаксис

```
var decodedData = scope.atob(encodedData);
```

### Throws

Выбрасывает {{jsxref("DOMException")}}, если длина переданной строки не кратна 4.

## Пример

```js
var encodedData = window.btoa("Hello, world"); // кодирует строку
var decodedData = window.atob(encodedData); // декодирует строку
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Base64 encoding and decoding](/ru/docs/Glossary/Base64)
- [`data` URIs](/ru/docs/Web/URI/Reference/Schemes/data)
- {{domxref("btoa", "btoa()")}}
- [Components.utils.importGlobalProperties](/ru/docs/Components.utils.importGlobalProperties)
