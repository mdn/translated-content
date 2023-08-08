---
title: File
slug: Web/API/File
---

{{APIRef}}

Интерфейс **`File`** представляет информацию о файлах и предоставляет JavaScript в веб странице доступ к их контенту.

`Объекты File` как правило извлекаются из объекта {{domxref("FileList")}}, который возвращён как результат пользовательского выбора файлов с помощью {{HTMLElement("input")}} элемента, из drag and drop операций {{domxref("DataTransfer")}} объекта, или из `mozGetAsFile()` API на {{domxref("HTMLCanvasElement")}}. В Gecko, привилегированный код может создать файл представляющий любой локальный файл без пользовательского взаимодействия (см. [Gecko notes](#gecko_notes) для получения большей информации).

Объект `File` - особый вид {{domxref("Blob")}}, и может быть использован в любом контексте так же, как и Blob. В частности, {{domxref("FileReader")}}, {{domxref("URL.createObjectURL()")}}, {{domxref("ImageBitmapFactories.createImageBitmap()", "createImageBitmap()")}}, и {{domxref("XMLHttpRequest", "", "send()")}} допускают и `Blob,` и `File`.

Смотри [Использование файлов в веб приложениях](/ru/docs/Using_files_from_web_applications) для получения более подробной информации и примеров.

## Свойства

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
  - : Возвращает [MIME](/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) тип файла.

## Методы

Интерфейс не определяет никаких методов, но наследует методы из интерфейса _{{domxref("Blob")}}:_

{{Page("/en-US/docs/Web/API/Blob", "Methods")}}

## Спецификация

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Реализационные заметки

- В Gecko, вы можете использовать этот API изнутри chrome code. Смотрите [Использование DOM File API в chrome code](/ru/docs/Extensions/Using_the_DOM_File_API_in_chrome_code), чтобы узнать больше. Чтобы использовать API в chrome code, JSM и Bootstrap, вы должны импортировать его используя `Cu.importGlobalProperties(['File']);`
- Начиная с Gecko 6.0, привелигированный код (такой как расширение) может передавать объект `nsIFile` в DOM `File` конструктор для указания файла в справку.
- Начиная с Gecko 8.0, вы можете использовать `new File` чтобы создать `объект File` из XPCOM компонентного кода вместо создания экземпляра `nsIDOMFile` объекта напрямую. Конструктор принимает {{domxref("Blob")}}, второй аргумент - имя файла. Имя файла может быть любой строкой.

  ```
  File File(
    Array parts,
    String filename,
    BlobPropertyBag properties
  );
  ```

- Следующие нестандартные методы и свойства были убраны в Gecko 7: {{domxref("File.fileName")}}, {{domxref("File.fileSize")}}, {{domxref("File.getAsBinary()")}}, {{domxref("File.getAsDataURL()")}}, {{domxref("File.getAsText()","File.getAsText(string encoding)")}} ({{bug("661876")}}). Стандартные свойства {{domxref("File.name")}}, {{domxref("Blob.size")}}, и методы {{domxref("FileReader")}} должны быть использованы вместо них.

## Смотрите также

- [Использование файлов из веб-приложений](/ru/docs/Using_files_from_web_applications)
- {{domxref("FileReader")}}
- [Использование DOM File API в chrome code](/ru/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) (для привелигированного кода, запускаемого в Gecko, такого как Firefox дополнения)
