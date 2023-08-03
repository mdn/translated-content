---
title: XMLHttpRequest.getResponseHeader()
slug: Web/API/XMLHttpRequest/getResponseHeader
---

{{APIRef('XMLHttpRequest')}}

Метод **XMLHttpRequest.getResponseHeader()** возвращает строку, содержащую текст определённого хэдера (header). Если в наличии несколько хэдеров с одинаковыми именами, то они возвращаются в виде одной строки, где значения отделены друг от друга парой "запятая + пробел". Метод `getResponseHeader()` возвращает значение в кодировке UTF.

## Синтаксис

```
var myHeader = getResponseHeader(name);
```

### Параметры

- name
  - : Строка {{domxref("ByteString")}}, представляющая имя хэдера, значение которого необходимо возвратить в виде текста.

### Возвращаемое значение

Строка {{domxref("ByteString")}}, представляющее текстовое значение хэдера или null, если ответ ещё не был получен или хэдер с именем name отсутствует в ответе.

## Пример

```js
var client = new XMLHttpRequest();
client.open("GET", "unicorns-are-teh-awesome.txt", true);
client.send();
client.onreadystatechange = function () {
  if (this.readyState == this.HEADERS_RECEIVED) {
    console.log(client.getResponseHeader("Content-Type"));
  }
};
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- [Использование XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
