---
title: File API
slug: Web/API/File_API
page-type: web-api-overview
spec-urls: https://w3c.github.io/FileAPI/
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

## Концепции и использование

File API позволяет веб-приложениям получать доступ к файлам и их содержимому.

Веб-приложения могут получать доступ к файлам, когда пользователь делает их доступными — либо с помощью [элемента `<input>` для выбора файла](/ru/docs/Web/HTML/Reference/Elements/input/file), либо [через перетаскивание (drag and drop)](/ru/docs/Web/API/DataTransfer/files).

Наборы файлов, предоставленные таким образом, представлены объектами {{domxref("FileList")}}, которые позволяют веб-приложению получать отдельные объекты {{domxref("File")}}. В свою очередь, объекты {{domxref("File")}} дают доступ к метаданным, таким как имя файла, размер, тип и дата последнего изменения.

Объекты {{domxref("File")}} можно передавать объектам {{domxref("FileReader")}}, чтобы получить доступ к содержимому файла. Интерфейс {{domxref("FileReader")}} асинхронный, но существует и синхронная версия, доступная только в [веб-воркерах](/ru/docs/Web/API/Web_Workers_API), которую предоставляет интерфейс {{domxref("FileReaderSync")}}.

## Связь с другими API для работы с файлами

Существуют ещё два крупных API, которые также работают с файлами: [File and Directory Entries API](/ru/docs/Web/API/File_and_Directory_Entries_API) и [File System API](/ru/docs/Web/API/File_System_API).

File API — самый базовый из них. Он поддерживает чтение и обработку данных файлов, явно предоставленных пользователем через поле формы или операцию перетаскивания. Кроме того, он позволяет работать с бинарными данными с помощью объектов blob.

File and Directory Entries API, как и File API, тоже работает с файлами, предоставленными пользователем через поля форм или операции перетаскивания. Однако вместо одного файла элемент ввода теперь позволяет выбрать каталог или несколько файлов. После этого API предоставляет способ обработки каталога или файлов. Это по большей части собственная разработка Chrome — все её расширения других интерфейсов имеют префикс `webkit`. Более подробный рассказ о реализации и стандартизации приведён в статье [File and Directory Entries API](/ru/docs/Web/API/File_and_Directory_Entries_API#history). Изначально этот API задумывался для поддержки полноценной виртуальной файловой системы, но сейчас поддерживает только операции чтения данных, предоставленных пользователем.

File System API предоставляет веб-приложениям виртуальную файловую систему, позволяя им постоянно хранить данные в виртуальной системе, приватной для источника (origin) документа (это называется [приватной файловой системой источника (OPFS)](/ru/docs/Web/API/File_System_API/Origin_private_file_system)). File System Access API дополнительно расширяет File System API, позволяя сайтам читать и записывать файлы пользователя с его согласия. В отличие от File API и File and Directory Entries API, File System API реализован исключительно на JavaScript и не работает с полями форм.

## Интерфейсы

- {{domxref("Blob")}}
  - : Представляет «большой двоичный объект» (Binary Large Object) — то есть похожий на файл объект неизменяемых необработанных данных; {{domxref("Blob")}} можно прочитать как текст или бинарные данные либо преобразовать в {{domxref("ReadableStream")}}, чтобы использовать его методы для обработки данных.
- {{domxref("File")}}
  - : Предоставляет информацию о файле и позволяет JavaScript на веб-странице получать доступ к его содержимому.
- {{domxref("FileList")}}
  - : Возвращается свойством `files` HTML-элемента {{HTMLElement("input")}}; позволяет получить доступ к списку файлов, выбранных с помощью элемента `<input type="file">`. Также используется для списка файлов, перетащенных в веб-содержимое с помощью API перетаскивания; подробнее об этом см. объект {{domxref("DataTransfer")}}.
- {{domxref("FileReader")}}
  - : Позволяет веб-приложениям асинхронно читать содержимое файлов (или буферов необработанных данных), хранящихся на компьютере пользователя, используя объекты {{domxref("File")}} или {{domxref("Blob")}} для указания читаемого файла или данных.
- {{domxref("FileReaderSync")}}
  - : Позволяет веб-приложениям синхронно читать содержимое файлов (или буферов необработанных данных), хранящихся на компьютере пользователя, используя объекты {{domxref("File")}} или {{domxref("Blob")}} для указания читаемого файла или данных.

### Расширения других интерфейсов

- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
  - : Создаёт URL, который можно использовать для получения объекта {{domxref("File")}} или {{domxref("Blob")}}.
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
  - : Освобождает существующий объектный URL, ранее созданный вызовом {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}.

## Примеры

### Чтение файла

В этом примере используется [элемент `<input>` для выбора файла](/ru/docs/Web/HTML/Reference/Elements/input/file): когда пользователь выбирает файл, содержимое первого выбранного файла считывается как текст и отображается в элементе {{HTMLElement("div")}}.

#### HTML

```html
<input type="file" />
<div class="output"></div>
```

#### CSS

```css
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    output.innerText = await file.text();
  }
});
```

### Результат

{{EmbedLiveSample("Чтение файла", "", "300")}}

## Спецификации

{{Specifications}}

## Смотрите также

- [`<input type="file">`](/ru/docs/Web/HTML/Reference/Elements/input/file): элемент ввода файла
- {{domxref("Blob.text()")}}
- Интерфейс {{domxref("DataTransfer")}}
