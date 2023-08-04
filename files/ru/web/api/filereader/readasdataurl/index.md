---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
---

{{APIRef("File API")}}

Метод `readAsDataURL` используется для чтения содержимого указанного {{domxref("Blob")}} или {{domxref("File")}}.Когда операция закончится, {{domxref("FileReader.readyState","readyState")}} примет значение `DONE`, и будет вызвано событие {{event("loadend")}}. В то же время, атрибут {{domxref("FileReader.result","result")}} будет содержать данные как URL, представляющий файл, кодированый в `base64` строку.

## Синтаксис

```
instanceOfFileReader.readAsDataURL(blob);
```

### Параметры

- `blob`
  - : {{domxref("Blob")}} или{{domxref("File")}} которые следует прочитать.

## Пример

### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<img src="" height="200" alt="Image preview..." />
```

### JavaScript

```js
function previewFile() {
  var preview = document.querySelector("img");
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
```

### Результат

{{EmbedLiveSample("Пример", "100%", 240)}}

> **Примечание:** [`FileReader()`](/ru/docs/Web/API/FileReader) конструктор не поддерживается Internet Explorer до 10 версии. Для полностью совместимого решения прочтите [crossbrowser possible solution for image preview](https://mdn.mozillademos.org/files/3699/crossbrowser_image_preview.html). Смотрите также [this more powerful example](https://mdn.mozillademos.org/files/3698/image_upload_preview.html).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("FileReader")}}
