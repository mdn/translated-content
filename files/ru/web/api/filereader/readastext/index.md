---
title: FileReader.readAsText()
slug: Web/API/FileReader/readAsText
---

{{APIRef("File API")}}

Метод **`readAsText()`** используется для чтения содержимого указанного {{domxref("Blob")}} или {{domxref("File")}}. Когда операция закончится, {{domxref("FileReader.readyState","readyState")}} примет значение `DONE` и будет вызвано событие [`loadend`](/ru/docs/Web/Events/loadend). В то же время, атрибут {{domxref("FileReader.result","result")}} будет содержать данные файла как строку.

## Syntax

```
instanceOfFileReader.readAsText(blob[, encoding]);
```

### Parameters

- `blob`
  - : {{domxref("Blob")}} или {{domxref("File")}} которые следует прочитать.
- `encoding` {{optional_inline}}
  - : Строка, обозначающая кодировку используемую для возвращаемых данных. По умолчанию используется UTF-8, если параметр не указан.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("FileReader")}}
