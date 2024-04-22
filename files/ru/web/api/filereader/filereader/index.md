---
title: FileReader()
slug: Web/API/FileReader/FileReader
---

Конструктор **`FileReader()`** создаёт новый FileReader.

Дополнительные сведения об использовании `FileReader`, смотрите в разделе [Использование файлов из веб-приложений](/ru/docs/Web/API/File/Using_files_from_web_applications).

## Синтаксис

```js
var reader = new FileReader();
```

### Параметры

Отсутствуют.

## Пример

Следующий объект кода показывает объект [`FileReader`](/ru/docs/Web/API/FileReader) использующий конструктор `FileReader()` и последующее использование объекта:

```js
function printFile(file) {
  var reader = new FileReader();
  reader.onload = function (evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
```

## Спецификации

{{Specifications}}

## Смотреть также

- [Использование файлов из веб-приложений](/ru/docs/Web/API/File/Using_files_from_web_applications)
