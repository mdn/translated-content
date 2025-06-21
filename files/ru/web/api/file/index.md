---
title: File
slug: Web/API/File
---

{{APIRef}}

Интерфейс **`File`** представляет информацию о файлах и предоставляет JavaScript в веб странице доступ к их контенту.

`Объекты File` как правило извлекаются из объекта {{domxref("FileList")}}, который возвращён как результат пользовательского выбора файлов с помощью {{HTMLElement("input")}} элемента, из drag and drop операций {{domxref("DataTransfer")}} объекта, или из `mozGetAsFile()` API на {{domxref("HTMLCanvasElement")}}. В Gecko, привилегированный код может создать файл представляющий любой локальный файл без пользовательского взаимодействия (см. [Gecko notes](#gecko_notes) для получения большей информации).

Объект `File` - особый вид {{domxref("Blob")}}, и может быть использован в любом контексте так же, как и Blob. В частности, {{domxref("FileReader")}}, {{domxref("URL.createObjectURL()")}}, {{domxref("ImageBitmapFactories.createImageBitmap()", "createImageBitmap()")}}, и {{domxref("XMLHttpRequest", "", "send()")}} допускают и `Blob,` и `File`.

Смотри [Использование файлов в веб приложениях](/ru/docs/Web/API/File_API/Using_files_from_web_applications) для получения более подробной информации и примеров.

## Свойства экземпляра

_Интерфейс `File` также наследует свойства от {{domxref("Blob")}} интерфейса:_

- {{domxref("File.lastModified")}} {{readonlyinline}}
  - : Возвращает время последнего изменения файла в миллисекунде с эпохи UNIX (1 января 1970 года в 00:00:00 в часовом поясе UTC).
- {{domxref("File.lastModifiedDate")}} {{readonlyinline}}
  - : Возвращает [дату](/ru/docs/Web/JavaScript/Reference/Global_Objects/Date) последнего изменения файла, на который ссылается объект File.
- {{domxref("File.name")}} {{readonlyinline}}
  - : Возвращает имя файла, на который ссылается объект File.
- {{domxref("File.size")}} {{readonlyinline}}
  - : Возвращает размер файла.
- {{domxref("File.webkitRelativePath")}} {{readonlyinline}} {{non-standard_inline}}
  - : Возвращает URL адрес, где расположен {{domxref("File")}}.
- {{domxref("File.type")}} {{readonlyinline}}
  - : Возвращает [MIME](/ru/docs/Web/HTTP/Guides/MIME_types) тип файла.

## Методы экземпляра

_Интерфейс `File` не определяет собственных методов, но наследует методы интерфейса {{DOMxRef("Blob")}}._

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование файлов из веб-приложений](/ru/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("FileReader")}}
