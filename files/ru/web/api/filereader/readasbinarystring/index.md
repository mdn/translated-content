---
title: FileReader.readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
---

{{APIRef("File API")}} {{non-standard_header}}

Метод `readAsBinaryString` используется для начала считывания содержимого определённого как {{domxref("Blob")}} или {{domxref("File")}}. Когда операция чтения завершится {{domxref("FileReader.readyState","readyState")}} становится `DONE`, и срабатывает {{event("loadend")}} . В это время атрибут {{domxref("FileReader.result","result")}} содержит сырые бинарные данные из файла.

Заметьте, что этот метод устарел (12 July 2012 Working Draft from the W3C.)

## Синтаксис

```
instanceOfFileReader.readAsBinaryString(blob);
```

### Параметры

- `blob`
  - : The {{domxref("Blob")}} or {{domxref("File")}} from which to read.

## Пример

```js
var canvas = document.createElement("canvas");
var height = 200;
var width = 200;

canvas.width = width;
canvas.height = height;

var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#090";
ctx.beginPath();
ctx.arc(width / 2, height / 2, width / 2 - width / 10, 0, Math.PI * 2);
ctx.stroke();

canvas.toBlob(function (blob) {
  var reader = new FileReader();

  reader.onloadend = function () {
    console.log(reader.result);
  };

  reader.readAsBinaryString(blob);
});
```

## Спецификации

Этот метод был удалён из стандарта FileAPI. Вместо него следует использовать {{domxref("FileReader.readAsArrayBuffer()")}}.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("FileReader")}}
