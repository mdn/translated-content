---
title: Blob()
slug: Web/API/Blob/Blob
---

{{APIRef("File API")}}

`Конструктор Blob()` возвращает новый объект {{domxref("Blob")}}. Содержимое blob состоит из объединённых значений, переданных в параметре _array_.

## Синтаксис

```
var aBlob = new Blob( array, options );
```

### Параметры

- _array_ - массив {{jsxref("Array")}} из объектов {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}}, или смесь любых из подобных объектов, которая может быть размещена внутри {{domxref("Blob")}}. DOMStrings представлены в кодировке UTF-8.
- _options_ is an optional `BlobPropertyBag` dictionary which may specify the following two attributes:

  - `type`, with a default value of `""`, that represents the MIME type of the content of the array that will be put in the blob.
  - `endings`, with a default value of `"transparent"`, that specifies how strings containing the line ending character `\n` are to be written out. It is one of the two values: `"native"`, meaning that line ending characters are changed to match host OS filesystem convention, or `"transparent"`, meaning that endings are stored in the blob without change. {{non-standard_inline}}

## Пример

```js
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // an array consisting of a single DOMString
var oMyBlob = new Blob(aFileParts, { type: "text/html" }); // the blob
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- The deprecated {{domxref("BlobBuilder")}} which this constructor replaces.
