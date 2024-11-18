---
title: FileReader
slug: Web/API/FileReader
---

{{ APIRef("File API") }}

## Общая информация

Объект `FileReader` позволяет веб-приложениям асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя, используя объекты {{domxref("File")}} или {{domxref("Blob")}}, с помощью которых задаётся файл или данные для чтения.

Объекты `File` можно получить через объект {{domxref("FileList")}}, который возвращается как результат при выборе файлов пользователем с помощью элемента {{HTMLElement("input")}}, через drag and drop из объекта {{domxref("DataTransfer")}}, или с помощью `mozGetAsFile()`, метода доступного в API элемента {{domxref("HTMLCanvasElement")}}.

> **Предупреждение:** `FileReader` используется только для безопасным образом чтения содержимого файла из пользовательской (удалённой) системы. Его нельзя использовать для простого чтения файла по пути из файловой системы. Для чтения файла по пути в JavaScript следует использовать стандартное решение Ajax для чтения файла на стороне сервера с разрешение CORS при кроссдоменном чтении.

{{AvailableInWorkers}}

## Конструктор

```
FileReader FileReader();
```

Более детально, с примерами см. [использование файлов в веб-приложениях](/ru/Using_files_from_web_applications).

## Свойства

- {{domxref("FileReader.error")}} {{readonlyinline}}
  - : {{domxref("DOMError")}} представляет собой ошибку, происходящую при чтении файла.
- {{domxref("FileReader.readyState")}} {{readonlyinline}}
  - : Число обозначающее состояние объекта `FileReader`. Принимает одно из значений [State constants](#state_constants).
- {{domxref("FileReader.result")}} {{readonlyinline}}
  - : Данные из файла. Значение свойства действительно только когда завершится операция чтения, причём формат данных зависит от способа, с помощью которого процесс был вызван.

### Обработка событий

- {{domxref("FileReader.onabort")}}
  - : Обработчик события [`abort`](/ru/docs/Web/Events/abort). Это событие возникает каждый раз, когда прерывается операция чтения.
- {{domxref("FileReader.onerror")}}
  - : Обработчик события [`error`](/ru/docs/Web/API/HTMLElement/error_event). Это событие возникает каждый раз, когда при чтении возникает ошибка.
- {{domxref("FileReader.onload")}}
  - : Обработчик события [`load`](/ru/docs/Web/API/Window/load_event). Это событие возникает при каждом успешном завершении операции чтения.
- {{domxref("FileReader.onloadstart")}}
  - : Обработчик события [`loadstart`](/ru/docs/Web/API/XMLHttpRequest/loadstart_event). Это событие возникает каждый раз, при запуске процесса чтения.
- {{domxref("FileReader.onloadend")}}
  - : Обработчик события [`loadend`](/ru/docs/Web/Events/loadend). Это событие возникает каждый раз по окончании процесса чтения (не важно, успешном или нет).
- {{domxref("FileReader.onprogress")}}
  - : Обработчик события [`progress`](/ru/docs/Web/Events/progress). Это событие возникает во время чтения данных из {{domxref("Blob")}}.

> [!NOTE]
> Т.к. `FileReader` унаследован от {{domxref("EventTarget")}}, на все перечисленные события можно подписаться, используя метод {{domxref("EventTarget.addEventListener()","addEventListener")}}.

### Константы состояния

- `EMPTY`: `0` : Данные ещё не были загружены.
- `LOADING` : `1` : Данные в данный момент загружаются.
- `DONE`: `2` : Операция чтения была завершена.

## Методы

- {{domxref("FileReader.abort()")}}
  - : Отмена операции чтения. После вызова, значение `readyState` станет равным `DONE`.
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : Запускает процесс чтения данных указанного {{ domxref("Blob") }}, по завершении, атрибут `result` будет содержать данные файла в виде {{domxref("ArrayBuffer")}}.
- {{domxref("FileReader.readAsBinaryString()")}}
  - : Запускает процесс чтения данных указанного {{ domxref("Blob") }}, по завершении, атрибут `result` будет содержать бинарные данные файла в виде строки.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Запускает процесс чтения данных указанного {{ domxref("Blob") }}, по завершении, атрибут `result` будет содержать данные файла в виде `data:` URL.
- {{domxref("FileReader.readAsText()")}}
  - : Запускает процесс чтения данных указанного {{ domxref("Blob") }}, по завершении, атрибут `result` будет содержать данные файла в виде текста.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

### Примечания по реализации

- Для IE9 есть [File API Lab](http://html5labs.interoperabilitybridges.com/prototypes/fileapi/fileapi/info).
- Opera предоставляет [частичную поддержку](http://www.opera.com/docs/specs/presto28/file/) в версии 11.1.

#### Относительно движка Gecko

- В версиях Gecko ниже 2.0 beta 7 (Firefox 4.0 beta 7), все параметры {{ domxref("Blob") }} были параметрами {{ domxref("File") }}; в последствии это было изменено, для соответствия спецификации.
- В версиях Gecko ниже 13.0 свойство `FileReader.error` возвращало объект {{ domxref("FileError") }}. Этот интерфейс был упразднён и теперь свойство `FileReader.error` возвращает объект {{ domxref("DOMError") }}, что соответствует определению FileAPI последней спецификации.

## Смотрите также

- [Использование файлов в веб-приложениях](/ru/Using_files_from_web_applications)
- {{ domxref("File") }}
- {{ domxref("Blob") }}
- [nsIDOMFileReader](/ru/docs/nsIDOMFileReader) - For addons/privileged scope
