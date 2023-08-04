---
title: WindowOrWorkerGlobalScope.atob()
slug: Web/API/atob
---

{{APIRef("HTML DOM")}}

Функция **`WindowOrWorkerGlobalScope.atob()`** декодирует строку данных, которая была закодирована с использованием base-64. Вы можете использовать метод {{domxref("WindowOrWorkerGlobalScope.btoa","btoa()")}}, чтобы закодировать и передать данные, которые в исходном виде могут вызвать проблемы передачи, затем отправить их и использовать метод `atob()`, чтобы декодировать данные снова. Например, вы можете закодировать, передать и декодировать управляющие символы, такие как ASCII-значения от 0 до 31.

В случаях использования с Unicode или UTF-8 строками, смотрите [this note at Base64 encoding and decoding](/ru/docs/Web/JavaScript/Base64_encoding_and_decoding#The_.22Unicode_Problem.22) и [this note at `btoa()`](/ru/docs/Web/API/window.btoa#Unicode_Strings).

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

- [Base64 encoding and decoding](/ru/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)
- [`data` URIs](/ru/docs/data_URIs)
- {{domxref("WindowOrWorkerGlobalScope.btoa","window.btoa()")}}
- [Components.utils.importGlobalProperties](/ru/docs/Components.utils.importGlobalProperties)
