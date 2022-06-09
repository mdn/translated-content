---
title: Storage.key()
slug: Web/API/Storage/key
tags:
  - API
  - Method
  - Reference
  - Storage
  - Web Storage
browser-compat: api.Storage.key
---
{{APIRef("Web Storage API")}}

Метод **`key()`** интерфейса {{domxref("Storage")}} получает числовое значение n и возвращает имя n-ого ключа из данного объекта `Storage`. Порядок ключей зависит от реализации браузера, поэтому лучше не полагаться на него.

## Syntax

```js
var aKeyName = storage.key(index);
```

### Параметры

- `index`
  - : Целочисленное значение, представляющее номер ключа, имя которого нужно получить. Индексация начинается с нуля.

### Возвращаемое значение

{{domxref("DOMString")}} с именем ключа. Если этот индекс не найден, вернётся `null`.

## Примеры

Следующая функция перебирает все ключи из локального хранилища:

```js
function forEachKey(callback) {
  for (var i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}
```

Следующая функция перебирает все ключи из локального хранилища и получает значение по каждому из них:

```js
for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
```

> **Примечание:** более реалистичный пример использования функции показан на странице [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Использование Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
