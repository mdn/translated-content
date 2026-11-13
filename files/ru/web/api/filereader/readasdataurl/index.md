---
title: "FileReader: readAsDataURL() method"
slug: Web/API/FileReader/readAsDataURL
l10n:
  sourceCommit: 497d322c61511b11e4877a77660f8d7b394a8277
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Метод `readAsDataURL()` интерфейса {{domxref("FileReader")}} используется для чтения содержимого {{domxref("Blob")}} или {{domxref("File")}}. После завершения операции свойство {{domxref("FileReader.readyState", "readyState")}} принимает значение `DONE` и возникает событие {{domxref("FileReader/loadend_event", "loadend")}}. В то же время атрибут {{domxref("FileReader.result", "result")}} будет содержать данные файла, закодированные в `base64`-строку в виде [Data URL](/ru/docs/Web/URI/Reference/Schemes/data).

> [!NOTE]
> Атрибут {{domxref("FileReader.result","result")}} не может быть напрямую декодирован как Base64 без предварительного удаления объявления `Data URL`, которое предшествует данным в кодировке `base64`. Чтобы получить только строку в кодировке `base64`, необходимо удалить `data:*/*;base64,` из результата.

## Синтаксис

```js-nolint
readAsDataURL(blob)
```

### Параметры

- `blob`
  - : {{domxref("Blob")}} или {{domxref("File")}} для чтения.

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

## Примеры

### Чтение одного файла

#### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<img src="" height="200" alt="Предварительный просмотр изображения" />
```

#### JavaScript

```js
function previewFile() {
  const preview = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // Конвертация изображения в base64-строку
      preview.src = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

#### Результат

{{EmbedLiveSample("Чтение одного файла", "100%", 240)}}

### Чтение нескольких файлов

#### HTML

```html
<input id="browse" type="file" multiple />
<div id="preview"></div>
```

#### JavaScript

```js
function previewFiles() {
  const preview = document.querySelector("#preview");
  const files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // Проверяем, что `file.name` соответствует необходимым расширениям
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = reader.result;
          preview.appendChild(image);
        },
        false,
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

const picker = document.querySelector("#browse");
picker.addEventListener("change", previewFiles);
```

#### Результат

{{EmbedLiveSample("Чтение нескольких файлов", "100%", 240)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
