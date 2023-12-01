---
title: FileReader.error
slug: Web/API/FileReader/error
---

{{APIRef("File API")}}

## Сводка

Возвращает ошибку, произошедшую во время чтения файла.

## Синтаксис

```
var error = instanceOfFileReader.error
```

## Значение

{{domxref("DOMError")}} содержит соответствующую ошибку. В Chrome 48+/Firefox 58+ значение возвращает {{domxref("DOMException")}} так как `DOMError` был удалён из DOM-стандарта.

## Спецификации

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- {{domxref("FileReader")}}
