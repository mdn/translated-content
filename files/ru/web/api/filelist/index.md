---
title: FileList
slug: Web/API/FileList
---

{{APIRef("File API")}}

Объект этого типа возвращается свойством {{HTMLElement("input")}} элемента, что позволяет получить список выбранных файлов из `<input type="file">`. Также используется для получения списка файлов, брошенных в область веб-контента (**Web content**) по средствам drag and drop API. Смотрите [DataTransfer](/ru/docs/DragDrop/DataTransfer) для детального понимания как это использовать.

> **Примечание:** До версии Gecko 1.9.2, input элемент поддерживает только один выбранный файл, это значит что FileList содержит только один файл. Начиная с Gecko 1.9.2, если input содержит атрибут multiple=true, то FileList может содержать несколько файлов.

## Использование FileList

Все `<input>` элементы имеют файловые массивы которые позволяют получить доступ к файлам. Пример файлового тега:

```
<input id="fileItem" type="file">
```

`Этот код извлекает первый File` object из списка:

```js
var file = document.getElementById("fileItem").files[0];
```

## Обзор методов

| `File item(index);` |
| ------------------- |

## Свойства

| Атрибут  | Тип       | Описание                                                           |
| -------- | --------- | ------------------------------------------------------------------ |
| `length` | `integer` | Количество файлов в списке, свойство только для чтения (read-only) |

## Методы

### item()

Возвращает [`File`](/ru/docs/DOM/File) объект по его индексу в списке.

```
 File item(
   index
 );
```

###### Параметр

- `index`
  - : Отсчитываемый от нуля индекс файла для извлечения из списка.

###### Возвращаемое значение

`Тип File, соотвествует запрашиваемому файлу.`

## Примеры

Этот пример выполняет перебор всех файлов, выбранных пользователем, используя элемент Input:

```js
// fileInput это HTML input элемент: <input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files это FileList объект (похож на NodeList)
var files = fileInput.files;
var file;

// обходит файлы используя цикл
for (var i = 0; i < files.length; i++) {
  // получаем сам файл
  file = files.item(i);
  // или можно так
  file = files[i];

  alert(file.name);
}
```

Здесь пример посложнее.

```html
<!doctype html>
<html>
  <head> </head>
  <body>
    <!--атрибут multiple позволяет выбрать сразу несколько файлов-->

    <input id="myfiles" multiple type="file" />
  </body>

  <script>
    var pullfiles = function () {
      // выбираем файловые инпуты на странице
      var fileInput = document.querySelector("#myfiles");
      var files = fileInput.files;
      // кешируем files.length
      var fl = files.length;
      var i = 0;

      while (i < fl) {
        // локализуем файловую переменную в цикле
        var file = files[i];
        alert(file.name);
        i++;
      }
    };

    // привязываем событие изменения input
    document.querySelector("#myfiles").onchange = pullfiles;

    //a.t
  </script>
</html>
```

## Спецификация

- [File upload state](http://www.whatwg.org/specs/web-apps/current-work/multipage/number-state.html#concept-input-type-file-selected) (HTML5 working draft)

## Смотрите также

- [Using files from web applications](/ru/docs/Using_files_from_web_applications)
- [`File`](/ru/docs/DOM/File)
- [`FileReader`](/ru/docs/DOM/FileReader)
