---
title: File.getAsDataURL()
slug: orphaned/Web/API/File/getAsDataURL
---

{{APIRef("File API") }} {{non-standard_header}} {{deprecated_header(7.0)}}

## Описание

Метод getAsDataURL возвращает содержимое файла закодированное в формате [`data:`](/ru/docs/data_URIs) URL

> **Примечание:** Этот метод является устаревшим; предпочтительнее использовать {{domxref ("FileReader")}} Метод {{domxref ("FileReader.readAsDataURL", "readAsDataURL ()")}} вместо этого.

## Синтаксис

```
var url = instanceOfFile.getAsDataURL();
```

### Возвращает

Строку в формате [`data:`](/ru/docs/data_URIs) URL

## Пример

```js
// fileInput is a HTMLInputElement: <input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files is a FileList object (similar to NodeList)
var files = fileInput.files;

// array with acceptable file types
var accept = ["image/png"];

// img is a HTMLImgElement: <img id="myimg">
var img = document.getElementById("myimg");

// if we accept the first selected file type
if (accept.indexOf(files[0].mediaType) > -1) {
  // display the image
  // same as <img src="data:image/png,<imagedata>">
  img.src = files[0].getAsDataURL();
}
```

## Спецификация

Не является частью какой-либо спецификации

## Смотрите также

- {{domxref("File")}}
- {{domxref("FileReader")}}
