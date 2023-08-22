---
title: WindowBase64.btoa()
slug: Web/API/btoa
---

{{APIRef("HTML DOM")}}

Создаёт ASCII строку закодированную в base-64 из "строки" бинарных данных.

Будьте внимательней этот способ не подходит для [Unicode](http://www.unicode.org/standard/WhatIsUnicode.html) строк! Описание работы с Unicode в секции ниже.

## Синтаксис

```
var encodedData = window.btoa(stringToEncode);
```

## Пример

```js
var encodedData = window.btoa("Hello, world"); // encode a string
var decodedData = window.atob(encodedData); // decode the string
```

## Замечания

Вы можете воспользоваться этим способом, чтобы избежать проблем при передаче данных через сетевое соединение. Для этого нужно перекодировать данные в base64 и отправить их, и на другой стороне с помощью метода `{{domxref("WindowBase64.atob","window.atob()")}}` декодировать полученные данные в исходный вид. Например, вы можете перекодировать управляющие символы ASCII с 0 до 31.

`btoa()` также доступна для XPCOM компонентов реализованных в JavaScript, даже если [`window`](/ru/docs/DOM/window) не является глобальным объектом в компонентах.

## Строки Юникод

В большинстве браузеров, вызов `window.btoa()` на Unicode строке выбросит исключение Character Out Of Range (Символ вне допустимого диапазона).

Чтобы избежать этого, воспользуйтесь паттерном, предложенным [Johan Sundström](http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html):

```js
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

// Usage:
utf8_to_b64("✓ à la mode"); // JTI1dTI3MTMlMjUyMCUyNUUwJTI1MjBsYSUyNTIwbW9kZQ==
b64_to_utf8("JTI1dTI3MTMlMjUyMCUyNUUwJTI1MjBsYSUyNTIwbW9kZQ=="); // "✓ à la mode"

utf8_to_b64("I \u2661 Unicode!"); // SSUyNTIwJTI1dTI2NjElMjUyMFVuaWNvZGUlMjUyMQ==
b64_to_utf8("SSUyNTIwJTI1dTI2NjElMjUyMFVuaWNvZGUlMjUyMQ=="); // "I ♡ Unicode!"
```

Более правильный и производительный способ - это конвертировать [`DOMString`](/ru/docs/Web/API/DOMString) в UTF-8 строку передав [typed arrays](/ru/docs/Web/JavaScript/Typed_arrays). Как это сделать узнать можно здесь **[в этом параграфе](</ru/docs/Web/JavaScript/Base64_encoding_and_decoding#Solution_.232_.E2.80.93_rewriting_atob()_and_btoa()_using_TypedArrays_and_UTF-8>)**.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Base64 encoding and decoding](/ru/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)
- [`data` URIs](/ru/docs/data_URIs)
- {{domxref("WindowBase64.atob","window.atob()")}}
- [Components.utils.importGlobalProperties](/ru/docs/Components.utils.importGlobalProperties)
