---
title: FileReader.readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
---

{{APIRef("File API")}}

Метод **`readAsArrayBuffer`** используется для чтения содержимого файла, представленного как {{domxref("Blob")}} или {{domxref("File")}}. Когда операция чтения завершается, {{domxref("FileReader.readyState","readyState")}} принимает значение `DONE`, и наступает событие {{event("loadend")}}. В то же время в {{domxref("FileReader.result","result")}} помещается информация о файле в виде {{domxref("ArrayBuffer")}}.

## Синтаксис

```
instanceOfFileReader.readAsArrayBuffer(blob);
```

### Параметры

- `blob`
  - : {{domxref("Blob")}} или {{domxref("File")}}, информацию из которого необходимо прочитать.

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("FileReader")}}
