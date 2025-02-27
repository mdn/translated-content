---
title: File.name
slug: Web/API/File/name
---

{{APIRef("File API")}}

Возвращает имя файла представленного объектом типа {{domxref("File")}}. По соображениям безопасности не содержит пути к файлу.

## Синтаксис

```
var name = file.name;
```

## Значение

Строка, содержащая имя файла без пути, например, "My Resume.rtf".

## Пример

```html
<input type="file" multiple onchange="processSelectedFiles(this)" />
```

```js
function processSelectedFiles(fileInput) {
  var files = fileInput.files;

  for (var i = 0; i < files.length; i++) {
    alert("Filename " + files[i].name);
  }
}
```

Проверьте результаты ниже:

{{ EmbedLiveSample('Пример', 300, 50) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование файлов в веб приложениях](/ru/docs/Web/API/File_API/Using_files_from_web_applications)
