---
title: Отправка и получение бинарных данных
slug: Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data
---

## Получение бинарных данных используя JavaScript arrays

Свойство responseType объекта XMLHttpRequest можно задать для изменения ожидаемого типа ответа с сервера. Возможные значения: пустая строка (по умолчанию), "arraybuffer", "blob", "document", "json" и "text". Свойство response будет содержать тело сущности в соответствии с типом ответа, как ArrayBuffer, Blob, Document, JSON или string. Это значение равно null, если запрос не завершён или не был успешным.

В этом примере изображение считывается как двоичный файл и создаётся 8-разрядный массив целых чисел без знака из необработанных байтов. Обратите внимание, что это не будет декодировать изображение и читать пиксели. Для этого вам понадобится [библиотека декодирования png](https://github.com/devongovett/png.js/).

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "arraybuffer";

oReq.onload = function (oEvent) {
  var arrayBuffer = oReq.response; // Note: not oReq.responseText
  if (arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteArray.byteLength; i++) {
      // do something with each byte in the array
    }
  }
};

oReq.send(null);
```

Альтернатива вышеуказанному методу использует интерфейс {{domxref("Blob")}} для непосредственного построения Blob с данными arraybuffer.

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "arraybuffer";

oReq.onload = function (oEvent) {
  var blob = new Blob([oReq.response], { type: "image/png" });
  // ...
};

oReq.send();
```

Также вы можете прочитать двоичный файл как {{domxref ("Blob")}}, установив строку" blob " в свойство responseType.

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "blob";

oReq.onload = function (oEvent) {
  var blob = oReq.response;
  // ...
};

oReq.send();
```

## Получение бинарных данных в старых браузерах

Функция load_binary_resource(), показанная ниже, загружает двоичные данные из указанного URL, возвращая их вызывающему объекту.

```js
function load_binary_resource(url) {
  var req = new XMLHttpRequest();
  req.open("GET", url, false);
  //XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
  req.overrideMimeType("text/plain; charset=x-user-defined");
  req.send(null);
  if (req.status != 200) return "";
  return req.responseText;
}
```

Магия происходит в строке 5, которая переопределяет тип MIME, заставляя браузер рассматривать его как обычный текст, используя пользовательский набор символов. Это говорит браузеру не анализировать его и пропускать байты через необработанные.

```js
var filestream = load_binary_resource(url);
var abyte = filestream.charCodeAt(x) & 0xff; // throw away high-order byte (f7)
```

The example above fetches the byte at offset `x` within the loaded binary data. The valid range for `x` is from 0 to `filestream.length-1`.

See [downloading binary streams with XMLHttpRequest](http://web.archive.org/web/20071103070418/http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html) for a detailed explanation. See also [downloading files](/ru/docs/Code_snippets/Downloading_Files).

## Получение бинарных данных из различных источников

Библиотека [jBinary](https://github.com/jDataView/jBinary) для работы с бинарными данными в JavaScript позволяет загрузить данные из любого источника, автоматически определяя лучший способ для этого в текущем браузере или Node.js:

```js
jBinary.load(url).then(function (binary) {
  // здесь аргумент `binary` может использовться для обработки данных
  // в любом формате (строка, массив байтов, структура данных и т. д.)
});
```

## Отправка бинарных данных

Метод `send` объекта XMLHttpRequest был расширен, чтобы обеспечить лёгкую передачу бинарных данных - теперь он принимает объекты [`ArrayBuffer`](/ru/docs/JavaScript_typed_arrays/ArrayBuffer), {{domxref("Blob")}}, или {{domxref("File")}}.

В примере ниже на лету создаётся текстовый файл и отправляется методом `POST` на сервер. Здесь используется обычный текст, но нетрудно представить себе пример с бинарным файлом.

```js
var oReq = new XMLHttpRequest();
oReq.open("POST", url, true);
oReq.onload = function (oEvent) {
  // Uploaded.
};

var blob = new Blob(["abc123"], { type: "text/plain" });

oReq.send(blob);
```

## Отправка типизированных массивов как бинарных данных

Точно так же можно отправлять типизированные массивы JavaScript.

```js
var myArray = new ArrayBuffer(512);
var longInt8View = new Uint8Array(myArray);

for (var i = 0; i < longInt8View.length; i++) {
  longInt8View[i] = i % 255;
}

var xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.send(myArray);
```

Здесь создаётся и отправляется 512-ти байтовый массив из 8-битных целых чисел, н, разумеется, можно использовать любые двоичные данные.

> **Примечание:** Поддержка передачи объектов [`ArrayBuffer`](/ru/docs/JavaScript_typed_arrays/ArrayBuffer) с помощью XMLHttpRequest появилась в Gecko 9.0. **Add information about other browsers' support here.**

## Отправка форм и загрузка файлов

См. [этот параграф](/ru/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files).

## Примеры для Firefox

В этом примере двоичные данные передаются асинхронно методом `POST` и нестандартным методом Firefox's `sendAsBinary()`.

```js
var req = new XMLHttpRequest();
req.open("POST", url, true);
// установите заголовок и тип данных
req.setRequestHeader("Content-Length", 741);
req.sendAsBinary(aBody);
```

В строке 4 заголовок Content-Length устанавливается в 741, что означает, что размер данных 741 байт. Разумеется, это значение должно соответствовать реальному размеру данных.

В строке 5 метод `sendAsBinary()` начинает запрос.

> **Примечание:** Нестандартный метод `sendAsBinary` начиная с Gecko 31 считается устаревшим и скоро будет удалён. Вместо него, как показывалось выше, можно использовать стандартный метод `send(Blob data)`.

Кроме того, чтобы отправить бинарные данные можно передать экземпляр `nsIFileInputStream` в метод [`send()`](</ru/docs/DOM/XMLHttpRequest#send()> "XMLHttpRequest#send()"). В этом случае заголовок `Content-Length` заполнять явно необязательно, поскольку информация получается из потока автоматически:

```js
// Создание потока из файла.
var stream = Components.classes[
  "@mozilla.org/network/file-input-stream;1"
].createInstance(Components.interfaces.nsIFileInputStream);
stream.init(file, 0x04 | 0x08, 0644, 0x04); // file is an nsIFile instance

// Попытка опредедения типа MIME для файла
var mimeType = "text/plain";
try {
  var mimeService = Components.classes["@mozilla.org/mime;1"].getService(
    Components.interfaces.nsIMIMEService,
  );
  mimeType = mimeService.getTypeFromFile(file); // file is an nsIFile instance
} catch (oEvent) {
  /* в случае ошибки просто использовать text/plain */
}

// Отправка
var req = Components.classes[
  "@mozilla.org/xmlextras/xmlhttprequest;1"
].createInstance(Components.interfaces.nsIXMLHttpRequest);
req.open("PUT", url, false); /* синхронный вызов! */
req.setRequestHeader("Content-Type", mimeType);
req.send(stream);
```
