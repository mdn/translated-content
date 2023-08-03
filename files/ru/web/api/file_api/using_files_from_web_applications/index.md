---
title: Использование файлов в веб приложениях
slug: Web/API/File_API/Using_files_from_web_applications
---

Используя File API, добавленный к DOM в HTML5, в веб-приложениях теперь можно запрашивать пользователя выбрать локальные файлы и затем читать содержимое этих файлов. Выбор файлов может осуществляться с помощью элемента {{ HTMLElement("input") }} или drag and drop.

Если вы хотите использовать DOM File API в расширениях или коде Chrome, используйте. На самом деле, в таком случае вам необходимо ознакомиться с дополнительными нюансами. См. статью [Using the DOM File API in chrome code](/en/Extensions/Using_the_DOM_File_API_in_chrome_code) для подробностей.

## Доступ к выбранным файлам

Рассмотрим следующий код:

```html
<input type="file" id="input" multiple />
```

File API делает возможным доступ к {{ domxref("FileList") }}, который содержит объекты {{ domxref("File") }}, которым соответствуют файлы, выбранные пользователем.

Атрибут `multiple` элемента `input` позволяет пользователю выбрать несколько файлов.

Обращение к одному выбранному файлу с использованием классической DOM-модели:

```js
const selectedFile = document.getElementById("input").files[0];
```

Обращение к одному выбранному файлу через [jQuery](http://jquery.com/):

```js
var selectedFile = $("#input").get(0).files[0];

var selectedFile = $("#input")[0].files[0];
```

> **Примечание:** Ошибка "files is undefined" означает что был выбран не один HTML-элемент, а список элементов, возвращаемый jQuery. Необходимо уточнить, у какого именно элемента требуется вызвать метод "files"

### Доступ к выбранным файлам через событие change

Также возможно (но не обязательно) получить доступ к {{DOMxRef("FileList")}} через событие `change`. Нужно использовать {{DOMxRef("EventTarget.addEventListener()")}} чтобы добавить обработчик события `change`, как показано здесь:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

Обработчик события `change` можно назначить атрибутом элемента:

```html
<input type="file" id="input" onchange="handleFiles(this.files)" />
```

Когда пользователь выбирает файл, функция handleFiles() будет вызвана с объектом {{ domxref("FileList") }}, который состоит из объектов {{ domxref("File") }}, представляющих файлы, выбранные пользователем.

## Получение информации о выделенных файлах

Объект {{ domxref("FileList") }} предоставляемый классическим DOM содержит все файлы выбранные пользователем, каждый из которых представляет собой объект {{ domxref("File") }}. Вы можете определить сколько файлов выбрал пользователь проверяя значение атрибута длины (`length`) списка файлов:

```js
var numFiles = files.length;
```

Конкретные объекты {{ domxref("File") }} могут быть получены обращением к списку файлов как к массиву:

```js
for (var i = 0, numFiles = files.length; i < numFiles; i++) {
  var file = files[i];
  ..
}
```

Этот цикл проходит по всем файлам в списке файлов.

Всего существует три атрибута, предоставляемых объектом {{ domxref("File") }}, которые содержат полезную информацию о файле.

- `name`
  - : Имя файла как строка доступная только для чтения. Это просто имя файла и оно не включает в себя информацию о пути.
- `size`
  - : Размер файла в байтах, как 64-битное целое число (возможно только чтение).
- `type`
  - : MIME тип файла, как строка доступная только для чтения, или пустая строка (`""`) если тип файла не может быть определён.

### Пример: Отображение размера файла(ов)

Следующий пример показывает возможное использование свойства `size`:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>File(s) size</title>
    <script>
      function updateSize() {
        var nBytes = 0,
          oFiles = document.getElementById("uploadInput").files,
          nFiles = oFiles.length;
        for (var nFileId = 0; nFileId < nFiles; nFileId++) {
          nBytes += oFiles[nFileId].size;
        }
        var sOutput = nBytes + " bytes";
        // optional code for multiples approximation
        for (
          var aMultiples = [
              "KiB",
              "MiB",
              "GiB",
              "TiB",
              "PiB",
              "EiB",
              "ZiB",
              "YiB",
            ],
            nMultiple = 0,
            nApprox = nBytes / 1024;
          nApprox > 1;
          nApprox /= 1024, nMultiple++
        ) {
          sOutput =
            nApprox.toFixed(3) +
            " " +
            aMultiples[nMultiple] +
            " (" +
            nBytes +
            " bytes)";
        }
        // end of optional code
        document.getElementById("fileNum").innerHTML = nFiles;
        document.getElementById("fileSize").innerHTML = sOutput;
      }
    </script>
  </head>

  <body onload="updateSize();">
    <form name="uploadForm">
      <p>
        <input
          id="uploadInput"
          type="file"
          name="myFiles"
          onchange="updateSize();"
          multiple />
        selected files: <span id="fileNum">0</span>; total size:
        <span id="fileSize">0</span>
      </p>
      <p><input type="submit" value="Send file" /></p>
    </form>
  </body>
</html>
```

## Использование метода click() скрытых элементов выбора файла

Начиная с Gecko 2.0, вы можете скрыть непривлекательный элемент {{ HTMLElement("input") }} и предоставить свой собственный интерфейс для открытия диалогового окна выбора и отображения файла или файлов, выбранных пользователем. Вы можете сделать это, присвоив свойству display элемента input значение none (display:none) и вызывая метод {{ domxref("element.click","click()") }} скрытого элемента {{ HTMLElement("input") }}.

Рассмотрим следующую разметку HTML:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none"
  onchange="handleFiles(this.files)" />
<a href="#" id="fileSelect">Select some files</a>
```

Код, обрабатывающий событие click, может выглядеть следующим образом:

```js
var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener(
  "click",
  function (e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // предотвращает перемещение к "#"
  },
  false,
);
```

Таким образом, вы можете стилизовать новую кнопку открытия диалога выбора файла так, как пожелаете.

## Использование элемента label скрытого элемента input

Для того, чтобы открыть диалог выбора файла без использования JavaScript (метода click()), можно воспользоваться элементом {{ HTMLElement("label") }}.

Рассмотрим следующую разметку HTML:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none"
  onchange="handleFiles(this.files)" />
<label for="fileElem">Select some files</label>
```

В данном случае нет необходимости добавлять код JavaScript для того, чтобы вызвать `fileElem.click()`. Также в данном случае вы можете стилизовать элемент label так, как пожелаете.

## Выбор файлов с использованием технологии drag and drop

Также вы можете предоставить пользователю возможность непосредственно перетаскивать файлы в ваше веб-приложение.

На первом шаге необходимо определить зону, в которую будут перетаскиваться файлы. В каждом конкретном случае часть содержимого вашей страницы, ответственная за приёмку перетаскиваемых файлов, может варьироваться в зависимости от дизайна приложения, тем не менее, заставить элемент воспринимать события перетаскивания достаточно просто:

```js
var dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

В данном примере мы превращаем элемент с ID, равным `dropbox`, в нашу зону перетаскивания при помощи добавления обработчиков для событий `dragenter`, `dragover` и `drop`.

В нашем случае нет необходимости делать что-то особенное при обработке событий `dragenter` и `dragover`, таким образом, обе функции, ответственные за обработку данных событий, довольно просты. Они останавливают распространение события и предотвращают возникновение действия по умолчанию:

```js
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
```

Вся настоящая магия происходит в функции `drop()`:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
```

Здесь мы извлекаем из события поле `dataTransfer`, затем вытаскиваем из него список файлов и передаём этот список в `handleFiles()`. После этого процесс обработки файлов одинаков вне зависимости от того, использовал ли пользователь для их выбора элемент `input` или технологию drag and drop.

## Пример: Отображение эскизов изображений, выбранных пользователем

Представим, что вы разрабатываете очередной веб-сайт для обмена фотографиями и вы хотите использовать возможности HTML5 для предварительного просмотра изображений перед тем, как пользователь загрузит их. Вы можете создать `input` элемент или зону перетаскивания, как обсуждалось ранее, и вызвать такую функцию, как `handleFiles()` ниже.

```js
function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    if (!file.type.startsWith("image/")) {
      continue;
    }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // Предполагается, что "preview" это div, в котором будет отображаться содержимое.

    var reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
}
```

Здесь наш цикл обрабатывает выбранные пользователем файлы, проверяя атрибут `type` у каждого файла, чтобы определить является ли файл изображением (выполняется регулярное выражение в строке "`image.*`"). Для каждого файла, который является изображением, мы создаём новый `img` элемент. Можно использовать CSS для установки красивых рамок, теней, и указания размеров изображения, но здесь нет нужды делать этого.

Каждое изображение имеет CSS класс `obj` добавленный к нему для упрощения его поиска в DOM дереве. Мы также добавили атрибут `file` к каждому изображению, указав {{ domxref("File") }} ; это позволит нам получить изображения для фактической загрузки позже. Наконец, мы используем {{ domxref("Node.appendChild()") }} для того, чтобы добавить новый эскиз в область предпросмотра нашего документа.

Затем мы устанавливаем {{ domxref("FileReader") }} для обработки асинхронной загрузки изображения и прикрепления его к `img` элементу. После создания нового объекта `FileReader`, мы настраиваем его функцию `onload`, затем вызываем `readAsDataURL()` для запуска операции чтения в фоновом режиме. Когда всё содержимое файла изображения загружено, они преобразуют его в `data:` URL, который передаётся в колбэк `onload` . Наша реализация этой процедуры просто устанавливает атрибут `src` у элемента `img` загруженного изображения, в результате чего миниатюра изображения появляется на экране пользователя.

## Использование URLs объектов

Gecko 2.0 представляет поддержку для методов DOM {{ domxref("window.URL.createObjectURL()") }} и {{ domxref("window.URL.revokeObjectURL()") }}. Они позволяют создавать простые строки URL, которые могут быть использованы для обращения к любым данным, на которые можно ссылаться, используя объект DOM {{ domxref("File") }}, включая локальные файлы на компьютере пользователя.

Когда у вас есть объект {{ domxref("File") }}, на который вы хотите ссылаться по URL из HTML, вы можете создать для этого объект URL, такой как этот:

```js
var objectURL = window.URL.createObjectURL(fileObj);
```

URL объекта – это строка, идентифицирующая объект файла {{ domxref("File") }}. Каждый раз при вызове {{ domxref("window.URL.createObjectURL()") }}, создаётся новый уникальный объект URL, даже если вы уже создали объект URL для этого файла. Каждый из них должен быть освобождён. В то время как они освобождаются автоматически когда документ выгружается, если ваша страница использует их динамически, вы должны освободить их явно вызовом {{ domxref("window.URL.revokeObjectURL()") }}:

```js
window.URL.revokeObjectURL(objectURL);
```

## Пример: Использование URL объектов для отображения изображений

Этот пример использует URL объектов для отображения эскизов изображений. Кроме этого, оно показывает другую информацию о файлах, включая их имена и размеры. Вы можете [посмотреть работающий пример](/samples/domref/file-click-demo.html).

HTML, который представляет интерфейс, выглядит так:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none"
  onchange="handleFiles(this.files)" />
<a href="#" id="fileSelect">Select some files</a>
<div id="fileList">
  <p>No files selected!</p>
</div>
```

Здесь определяется элемент файла {{ HTMLElement("input") }}, а также ссылка, которая вызывает окно выбора файла, т.к. мы сделали элемент ввода файла скрытым, чтобы этот не слишком привлекательный элемент интерфейса не отображался. Об этом рассказывается в разделе [Использование метода click() скрытых элементов выбора файла](#использование_метода_click_скрытых_элементов_выбора_файла), как о методе вызова окна выбора файла.

Метод `handleFiles()` может быть реализован таким образом:

```js
window.URL = window.URL || window.webkitURL;

var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener(
  "click",
  function (e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false,
);

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    var list = document.createElement("ul");
    for (var i = 0; i < files.length; i++) {
      var li = document.createElement("li");
      list.appendChild(li);

      var img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function () {
        window.URL.revokeObjectURL(this.src);
      };
      li.appendChild(img);
      var info = document.createElement("span");
      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}
```

Он начинается с получения элемента {{ HTMLElement("div") }} с ID `fileList`. Это блок, в который мы вставим наш список файлов, включая эскизы..

Если объект {{ domxref("FileList") }}, передаваемый в `handleFiles()` является `null`, то мы просто устанавливаем внутренний HTML блока в отображение текста "No files selected!". Иначе мы начинаем строить список файлов таким образом:

1. Создаётся новый элемент - неупорядоченный список ({{ HTMLElement("ul") }}).
2. Этот новый элемент вставляется в блок {{ HTMLElement("div") }} с помощью вызова его метода {{ domxref("element.appendChild()") }}.
3. Для каждого {{ domxref("File") }} в {{ domxref("FileList") }}, представляемого `files`:

   1. Создаём новый элемент пункта списка ({{ HTMLElement("li") }}) и вставляем его в список.
   2. Создаём новый элемент изображения ({{ HTMLElement("img") }}).
   3. Устанавливаем источник изображения в новый URL объекта, представляющий файл, используя {{ domxref("window.URL.createObjectURL()") }} для создания URL на двоичный объект.
   4. Устанавливаем высоту изображения в 60 пикселей.
   5. Устанавливаем обработчик события загрузки изображения для освобождения URL объекта, т.к. после загрузки изображения он больше не нужен. Это делается вызовом метода {{ domxref("window.URL.revokeObjectURL()") }}, передавая в него строку URL объекта, которая указана в `img.src`.
   6. Добавляем новый элемент в список.

## Пример: Загрузка файла, выбранного пользователем

Ещё одна вещь, которую вы можете захотеть сделать – это позволить пользователю загрузить выбранный файл или файлы (такие, как изображения из предыдущего примера) на сервер. Это можно сделать асинхронно довольно просто.

### Создание заданий на загрузку

Продолжая пример с кодом, который строил эскизы в предыдущем примере, напомним, что каждому изображению эскиза присвоен класс CSS class `obj`, с соответствующим {{ domxref("File") }}, прикреплённым в атрибут `file`. Это позволяет нам очень просто выбрать все изображения, которые пользователь выбрал для загрузки используя {{ domxref("Document.querySelectorAll()") }}, как показано здесь:

```js
function sendFiles() {
  var imgs = document.querySelectorAll(".obj");

  for (var i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

Строка 2 получает {{ domxref("NodeList") }} в переменную `imgs` со всеми элементами документа, имеющих класс CSS `obj`. В нашем случае все они будут эскизами изображений. Как только мы получим этот список, можно просто пройти по нему, создавая для каждого элемента новый экземпляр `FileUpload`. Каждый из них отвечает за загрузку соответствующего файла.

### Управление процессом загрузки файла

Функция `FileUpload` принимает на вход 2 параметра: элемент изображения и файл, из которого нужно читать данные изображения.

```js
function FileUpload(img, file) {
  const reader = new FileReader();
  this.ctrl = createThrobber(img);
  const xhr = new XMLHttpRequest();
  this.xhr = xhr;

  const self = this;
  this.xhr.upload.addEventListener(
    "progress",
    function (e) {
      if (e.lengthComputable) {
        const percentage = Math.round((e.loaded * 100) / e.total);
        self.ctrl.update(percentage);
      }
    },
    false,
  );

  xhr.upload.addEventListener(
    "load",
    function (e) {
      self.ctrl.update(100);
      const canvas = self.ctrl.ctx.canvas;
      canvas.parentNode.removeChild(canvas);
    },
    false,
  );
  xhr.open(
    "POST",
    "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php",
  );
  xhr.overrideMimeType("text/plain; charset=x-user-defined-binary");
  reader.onload = function (evt) {
    xhr.send(evt.target.result);
  };
  reader.readAsBinaryString(file);
}
```

Функция `FileUpload()`, показанная выше, создаёт объект Throbber, который используется для отображения хода загрузки, а затем создаёт {{ domxref("XMLHttpRequest") }} для управления загрузкой данных.

Перед началом загрузки данных выполняются несколько шагов для подготовки:

1. На `XMLHttpRequest` устанавливается обработчик события `progress` для обновления индикатора хода загрузки новыми значениями процента выполнения, так что по мере хода загрузки, индикатор будет обновляться, отображая последнюю информацию.
2. На `XMLHttpRequest`'s устанавливается обработчик события `load` для установки индикатора загрузки в значение 100%, чтобы убедиться, что индикатор действительно установлен в 100% (в случае проблем детализации в ходе процесса). Затем обработчик удаляет индикатор загрузки, т.к. он более не нужен. Поэтому индикатор исчезает как только загрузка завершена.
3. Запрос на загрузку файла изображения открывается вызовом метода `XMLHttpRequest`'s `open()` для начала создания POST-запроса.
4. Тип MIME для загрузки устанавливается вызовом функции `XMLHttpRequest` `overrideMimeType()`. В этом случае мы используем общий тип MIME type; вам может быть нужно или не нужно вообще устанавливать тип MIME в зависимости от вашего случая.
5. Объект `FileReader` используется для преобразования файла в двоичную строку.
6. И в завершение, когда содержимое загружено, вызывается функция `XMLHttpRequest` `send()` для отправки содержимого файла.

### Асинхронная обработка процесса загрузки

```js
<?php
if (isset($_FILES['myFile'])) {
    // Example:
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?><!DOCTYPE html>
<html>
<head>
    <title>dnd binary upload</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript">
        function sendFile(file) {
            var uri = "/index.php";
            var xhr = new XMLHttpRequest();
            var fd = new FormData();

            xhr.open("POST", uri, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Handle response.
                    alert(xhr.responseText); // handle response.
                }
            };
            fd.append('myFile', file);
            // Initiate a multipart/form-data upload
            xhr.send(fd);
        }

        window.onload = function() {
            var dropzone = document.getElementById("dropzone");
            dropzone.ondragover = dropzone.ondragenter = function(event) {
                event.stopPropagation();
                event.preventDefault();
            }

            dropzone.ondrop = function(event) {
                event.stopPropagation();
                event.preventDefault();

                var filesArray = event.dataTransfer.files;
                for (var i=0; i<filesArray.length; i++) {
                    sendFile(filesArray[i]);
                }
            }
        }
    </script>
</head>
<body>
    <div>
        <div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;">Drag & drop your file here...</div>
    </div>
</body>
</html>
```

## Пример: Использование URL объектов для отображения PDF

URL объектов могут быть использованы не только для изображений! Также этот приём можно использовать и для других ресурсов, которые могут отображаться браузером, например, файлы PDF.

В Firefox, для того чтобы файл PDF появился в iframe и не предлагался для загрузки, нужно установить `pdfjs.disabled` в значение `false` {{non-standard_inline()}}.

```html
<iframe id="viewer"></iframe>
```

А здесь изменение атрибута `src`:

```js
var obj_url = window.URL.createObjectURL(blob);
var iframe = document.getElementById("viewer");
iframe.setAttribute("src", obj_url);
window.URL.revokeObjectURL(obj_url);
```

## Пример: Использование URL объектов с другими типами файлов

Вы можете таким же образом работать с файлами в других форматах. Ниже приведён пример как загружается видео:

```js
var video = document.getElementById("video");
var obj_url = window.URL.createObjectURL(blob);
video.src = obj_url;
video.play();
window.URL.revokeObjectURL(obj_url);
```

## Спецификации

- [File upload state](http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#file-upload-state-%28type=file%29) (Рабочие материалы HTML 5)
- [File API](http://www.w3.org/TR/FileAPI/)

## Дополнительные ссылки

- {{ domxref("File") }}
- {{ domxref("FileList") }}
- {{ domxref("FileReader") }}
- {{DOMxRef("URL")}}
- {{DOMxRef("XMLHttpRequest")}}
- [Using XMLHttpRequest](/en/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using the DOM File API in chrome code](/en/Extensions/Using_the_DOM_File_API_in_chrome_code)
- [jQuery](http://www.jquery.com/) JavaScript library
