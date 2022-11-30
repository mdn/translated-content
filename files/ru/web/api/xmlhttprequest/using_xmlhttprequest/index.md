---
title: Использование XMLHttpRequest
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
translation_of: Web/API/XMLHttpRequest/Using_XMLHttpRequest
---
Это инструкция по использованию [`XMLHttpRequest`](/en-US/docs/DOM/XMLHttpRequest), для взаимодействия через HTTP-протокол.

Для отправки HTTP-запроса нужно создать XMLHttpRequest-объект, открыть URL и отправить запрос. После выполнения запроса можно получить и обработать тело и статус ответа.

```js
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "yourFile.txt", true);
oReq.send();
```

## Типы запросов

Запрос, сделанный посредством `XMLHttpRequest`, может загружать данные синхронно или асинхронно. Это определяется третьим аргументом метода [open()](</ru/docs/DOM/XMLHttpRequest#open()> "DOM/XMLHttpRequest#open()") объекта XMLHttpRequest: если он равен true или не определён, запрос выполнится асинхронно, в противном случае — синхронно. Детальное обсуждение и демонстрации обоих типов запросов могут быть найдены на странице [synchronous and asynchronous requests](/ru/docs/DOM/XMLHttpRequest/Synchronous_and_Asynchronous_Requests). Использовать синхронные запросы приходится очень редко.

> **Примечание:** Начиная с Gecko 30.0 {{ geckoRelease("30.0") }} не рекомендуется использовать синхронные запросы, так как они отрицательно влияют на пользовательский опыт.

## Обработка запросов

Есть несколько типов [атрибутов ответа](http://www.w3.org/TR/XMLHttpRequest2/#response), определённых спецификацией W3C XMLHttpRequest. Они сообщают запрашивающему важную информацию о статусе ответа. В некоторых случаях обработка нетекстовых типов ответа может потребовать дополнительных действий и анализа; эти случаи описаны ниже.

### Анализ и использование свойства `responseXML`

Если скачать XML документ с помощью `XMLHttpRequest`, в свойстве `responseXML` будет объект DOM, содержащим распарсенный XML документ. Напрямую работать с ним будет сложно. Есть четыре основных способа анализа этого документа:

1. Использовать [XPath](/ru/docs/XPath), чтобы указывать на его части.
2. Использовать [JSON](/ru/docs/JXON), чтобы превратить его в дерево объектов JavaScript.
3. Вручную [парсить и превращать XML](/ru/docs/Parsing_and_serializing_XML) в строки или объекты.
4. Использовать [XMLSerializer](/ru/docs/XMLSerializer), чтобы превращать деревья DOM в строки или файлы.
5. Можно использовать [регулярные выражения](/ru/docs/JavaScript/Reference/Global_Objects/RegExp), если вы заранее знаете содержимое документа. Возможно, стоит удалить переносы строк, если вы используете регулярные выражения с оглядкой на переносы. Однако этот метод стоит использовать только в крайнем случае, ведь если XML изменится, хотя бы чуть-чуть, то регулярное выражение, скорее всего, не справится.

### Анализ и использование свойства `responseText,` содержащего `HTML` документ

> **Примечание:** Спецификация W3C [XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) позволяет парсить HTML через свойство `XMLHttpRequest.responseXML`. Подробнее об этом написано в статье [HTML в XMLHttpRequest](/ru/docs/HTML_in_XMLHttpRequest).

Если получить содержимое HTML страницы с помощью `XMLHttpRequest`, свойство `responseText` будет строкой, содержащей "кашу" изо всех HTML тэгов, с которой будет очень сложно работать. Есть три основных способа анализа этой HTML строки:

1. Использовать свойство `XMLHttpRequest.responseXML.`
2. Вставить содержимое в тело [фрагмента документа](/ru/docs/Web/API/DocumentFragment) с помощью `fragment.body.innerHTML` и работать уже с этим фрагментом.
3. Можно использовать [регулярные выражения](/ru/docs/JavaScript/Reference/Global_Objects/RegExp), если вы заранее знаете содержимое документа.

## Работа с двоичными данными

Хотя обычно `XMLHttpRequest` используется, чтобы получать и загружать текст, с его помощью можно обмениваться и двоичными данными. Есть несколько проверенных способов заставить `XMLHttpRequest` посылать двоичные данные. Они используют метод `XMLHttpRequest`.overrideMimeType().

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
// получаем необработанные данные в виде двоичной строки
oReq.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
```

Спецификация XMLHttpRequest Level 2 добавляет новые атрибуты [responseType](http://www.w3.org/TR/XMLHttpRequest2/#the-responsetype-attribute), значительно облегчающие работу с двоичными данными:

```js
var oReq = new XMLHttpRequest();

oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";
oReq.onload = function(e) {
  var arraybuffer = oReq.response; // not responseText
  /* ... */
}
oReq.send();
```

Больше примеров можно найти на странице [Отправка и получение двоичных данных](/ru/docs/DOM/XMLHttpRequest/Sending_and_Receiving_Binary_Data).

## Отслеживание процесса загрузки

`XMLHttpRequest` позволяет подписываться на различные события, которые могут произойти в процессе обработки запроса. Сюда входят периодические уведомления о состоянии запроса, сообщения об ошибках и так далее.

Отслеживание событий процесса загрузки следует спецификации Web API [progress events](http://dev.w3.org/2006/webapi/progress/Progress.html): эти события реализуют интерфейс {{domxref("ProgressEvent")}}.

```js
var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress, false);
oReq.addEventListener("load", transferComplete, false);
oReq.addEventListener("error", transferFailed, false);
oReq.addEventListener("abort", transferCanceled, false);

oReq.open();

// ...

// состояние передачи от сервера к клиенту (загрузка)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total;
    // ...
  } else {
    // Невозможно вычислить состояние загрузки, так как размер неизвестен
  }
}

function transferComplete(evt) {
  alert("Загрузка завершена.");
}

function transferFailed(evt) {
  alert("При загрузке файла произошла ошибка.");
}

function transferCanceled(evt) {
  alert("Пользователь отменил загрузку.");
}
```

На строчках 3-6 добавляются обработчики для различных событий, происходящих при передаче данных с помощью `XMLHttpRequest`.

> **Примечание:** Обработчики нужно добавлять до того, как вызвать `open(). В противном случае события не будут обработаны.`

Обработчик события `progress`, представленный функцией `updateProgress()` в этом примере, получает количество байт, которое должно быть передано, и количество уже переданных байт в полях `total` и `loaded.` Но если поле `lengthComputable` равняется `false`, значит, длина сообщения неизвестна и будет отображаться как ноль.

События `progress` есть и у входящих, и у исходящих передач. События входящих передач создаются для объекта `XMLHttpRequest`, как показано в примере выше; исходящих —для `XMLHttpRequest.upload:`

```js
var oReq = new XMLHttpRequest();

oReq.upload.addEventListener("progress", updateProgress, false);
oReq.upload.addEventListener("load", transferComplete, false);
oReq.upload.addEventListener("error", transferFailed, false);
oReq.upload.addEventListener("abort", transferCanceled, false);

oReq.open();
```

> **Примечание:** события progress недоступны для протокола `file: .`

> **Примечание:** На данный момент в событиях progress есть открытые ошибки, которые влияют на Firefox 25 для [OS X](https://bugzilla.mozilla.org/show_bug.cgi?id=908375) и [Linux](https://bugzilla.mozilla.org/show_bug.cgi?id=786953).

> **Примечание:** Начиная с {{Gecko("9.0")}}, можно быть уверенным, что события progress будут приходить для каждого пакета данных, включая последний пакет в случаях, когда он получен, и соединение закрыто прежде, чем будет создано событие progress. В этом случае, событие progress автоматическисоздастся, когда будет получено событие load для этого пакета. Это позволяет следить за процессом загрузки с помощью только событий progress.

> **Примечание:** В {{Gecko("12.0")}}, если событие progress вызвано с `responseType` "moz-blob", значение ответа будет {{domxref("Blob")}}, содержащим все данные, полученные на текущий момент.

Также возможно засечь все три события, завершающие загрузку (`abort`, `load`, or `error`) через событие `loadend`:

```js
req.addEventListener("loadend", loadEnd, false);

function loadEnd(e) {
  alert("Передача данных завершена (но мы не знаем, успешно ли).");
}
```

Заметьте, что событие loadend никак не сообщает, что вызвало конец передачи. Впрочем, это никак не мешает использовать его, если нужно сделать что-то вне зависимости от причины.

## Отправка форм и загрузка файлов

Есть два способа передать данные форм с помощью экземпляра `XMLHttpRequest`:

- используя только AJAX
- используя API [`FormData`](/ru/docs/DOM/XMLHttpRequest/FormData)

**Второй путь** — самый простой и быстрый, но данные, полученные с его помощью, нельзя превратить в строки с помощью [JSON.stringify](/ru/docs/JavaScript/Reference/Global_Objects/JSON/stringify). **Первый путь**, наоборот, самый сложный, но зато самый гибкий и мощный.

### Используя только `XMLHttpRequest`

Отправка форм без [`FormData`](/ru/docs/DOM/XMLHttpRequest/FormData) не требует других API, кроме `FileReader` для загрузки файлов.

#### Краткое введение в методы отправки

Есть четыре способа послать HTML {{ HTMLElement("form") }}:

- использовать метод `POST` и установить атрибут `enctype` = `application/x-www-form-urlencoded` (он установлен по умолчанию);
- использовать метод `POST` и установить атрибут `enctype` = `text/plain`;
- использовать метод `POST` и установить атрибут `enctype` = `multipart/form-data`;
- использовать метод `GET` (в этом случае атрибут `enctype` будет проигнорирован).

Рассмотрим отправку формы с двумя полями, `foo` и `baz`. Если использовать метод `POST`, сервер получит строку, похожую на одну из показанных ниже, в зависимости от типа кодирования, который вы используете:

- Метод: `POST`; тип кодирования: `application/x-www-form-urlencoded` (по умолчанию):

  ```
  Content-Type: application/x-www-form-urlencoded

  foo=bar&baz=The+first+line.&#37;0D%0AThe+second+line.%0D%0A
  ```

- Метод: `POST`; тип кодирования: `text/plain`:

  ```
  Content-Type: text/plain

  foo=bar
  baz=The first line.
  The second line.
  ```

- Метод: `POST`; тип кодирования: `multipart/form-data`:

  ```
  Content-Type: multipart/form-data; boundary=---------------------------314911788813839

  -----------------------------314911788813839
  Content-Disposition: form-data; name="foo"

  bar
  -----------------------------314911788813839
  Content-Disposition: form-data; name="baz"

  The first line.
  The second line.

  -----------------------------314911788813839--
  ```

Instead, if you are using the `GET` method, a string like the following will be simply added to the URL:

```
?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
```

#### Небольшой классический фреймворк

Все данные эффекты достигаются с помощью веб браузера, когда вы отправляете {{ HTMLElement("form") }}. Но если вам требуется выполнить все операции с помощью лишь JavaScript, то вам придётся проинструктировать интерпретатор обо _всех_ выполняемых операциях. Для, того чтобы отправлять формы с помощью _чистого_ AJAX, потребуется слишком комплексное описание, чтобы тут рассуждать о нем во всех подробностях. В связи с этим, мы опубликовали здесь **полный(но все ещё дидактический) фреймворк,** который всё же способен использовать все четыре способа отправки и, так же поддерживает **файловую загрузку.**

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Sending forms with pure AJAX &ndash; MDN</title>
<script type="text/javascript">

"use strict";

/*\
|*|
|*|  :: XMLHttpRequest.prototype.sendAsBinary() Polyfill ::
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#sendAsBinary()
\*/

if (!XMLHttpRequest.prototype.sendAsBinary) {
  XMLHttpRequest.prototype.sendAsBinary = function(sData) {
    var nBytes = sData.length, ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
    }
    /* send as ArrayBufferView...: */
    this.send(ui8Data);
    /* ...or as ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
  };
}

/*\
|*|
|*|  :: AJAX Form Submit Framework ::
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntax:
|*|
|*|   AJAXSubmit(HTMLFormElement);
\*/

var AJAXSubmit = (function () {

  function ajaxSuccess () {
    /* console.log("AJAXSubmit - Success!"); */
    alert(this.responseText);
    /* you can get the serialized data through the "submittedData" custom property: */
    /* alert(JSON.stringify(this.submittedData)); */
  }

  function submitData (oData) {
    /* the AJAX request... */
    var oAjaxReq = new XMLHttpRequest();
    oAjaxReq.submittedData = oData;
    oAjaxReq.onload = ajaxSuccess;
    if (oData.technique === 0) {
      /* method is GET */
      oAjaxReq.open("get", oData.receiver.replace(/(?:\?.*)?$/, oData.segments.length > 0 ? "?" + oData.segments.join("&") : ""), true);
      oAjaxReq.send(null);
    } else {
      /* method is POST */
      oAjaxReq.open("post", oData.receiver, true);
      if (oData.technique === 3) {
        /* enctype is multipart/form-data */
        var sBoundary = "---------------------------" + Date.now().toString(16);
        oAjaxReq.setRequestHeader("Content-Type", "multipart\/form-data; boundary=" + sBoundary);
        oAjaxReq.sendAsBinary("--" + sBoundary + "\r\n" + oData.segments.join("--" + sBoundary + "\r\n") + "--" + sBoundary + "--\r\n");
      } else {
        /* enctype is application/x-www-form-urlencoded or text/plain */
        oAjaxReq.setRequestHeader("Content-Type", oData.contentType);
        oAjaxReq.send(oData.segments.join(oData.technique === 2 ? "\r\n" : "&"));
      }
    }
  }

  function processStatus (oData) {
    if (oData.status > 0) { return; }
    /* the form is now totally serialized! do something before sending it to the server... */
    /* doSomething(oData); */
    /* console.log("AJAXSubmit - The form is now serialized. Submitting..."); */
    submitData (oData);
  }

  function pushSegment (oFREvt) {
    this.owner.segments[this.segmentIdx] += oFREvt.target.result + "\r\n";
    this.owner.status--;
    processStatus(this.owner);
  }

  function plainEscape (sText) {
    /* how should I treat a text/plain form encoding? what characters are not allowed? this is what I suppose...: */
    /* "4\3\7 - Einstein said E=mc2" ----> "4\\3\\7\ -\ Einstein\ said\ E\=mc2" */
    return sText.replace(/[\s\=\\]/g, "\\$&");
  }

  function SubmitRequest (oTarget) {
    var nFile, sFieldType, oField, oSegmReq, oFile, bIsPost = oTarget.method.toLowerCase() === "post";
    /* console.log("AJAXSubmit - Serializing form..."); */
    this.contentType = bIsPost && oTarget.enctype ? oTarget.enctype : "application\/x-www-form-urlencoded";
    this.technique = bIsPost ? this.contentType === "multipart\/form-data" ? 3 : this.contentType === "text\/plain" ? 2 : 1 : 0;
    this.receiver = oTarget.action;
    this.status = 0;
    this.segments = [];
    var fFilter = this.technique === 2 ? plainEscape : escape;
    for (var nItem = 0; nItem < oTarget.elements.length; nItem++) {
      oField = oTarget.elements[nItem];
      if (!oField.hasAttribute("name")) { continue; }
      sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
      if (sFieldType === "FILE" && oField.files.length > 0) {
        if (this.technique === 3) {
          /* enctype is multipart/form-data */
          for (nFile = 0; nFile < oField.files.length; nFile++) {
            oFile = oField.files[nFile];
            oSegmReq = new FileReader();
            /* (custom properties:) */
            oSegmReq.segmentIdx = this.segments.length;
            oSegmReq.owner = this;
            /* (end of custom properties) */
            oSegmReq.onload = pushSegment;
            this.segments.push("Content-Disposition: form-data; name=\"" + oField.name + "\"; filename=\""+ oFile.name + "\"\r\nContent-Type: " + oFile.type + "\r\n\r\n");
            this.status++;
            oSegmReq.readAsBinaryString(oFile);
          }
        } else {
          /* enctype is application/x-www-form-urlencoded or text/plain or method is GET: files will not be sent! */
          for (nFile = 0; nFile < oField.files.length; this.segments.push(fFilter(oField.name) + "=" + fFilter(oField.files[nFile++].name)));
        }
      } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
        /* field type is not FILE or is FILE but is empty */
        this.segments.push(
          this.technique === 3 ? /* enctype is multipart/form-data */
            "Content-Disposition: form-data; name=\"" + oField.name + "\"\r\n\r\n" + oField.value + "\r\n"
          : /* enctype is application/x-www-form-urlencoded or text/plain or method is GET */
            fFilter(oField.name) + "=" + fFilter(oField.value)
        );
      }
    }
    processStatus(this);
  }

  return function (oFormElement) {
    if (!oFormElement.action) { return; }
    new SubmitRequest(oFormElement);
  };

})();

</script>
</head>
<body>

<h1>Sending forms with pure AJAX</h1>

<h2>Using the GET method</h2>

<form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h2>Using the POST method</h2>
<h3>Enctype: application/x-www-form-urlencoded (default)</h3>

<form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: text/plain</h3>

<form action="register.php" method="post" enctype="text/plain" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      Your name: <input type="text" name="user" />
    </p>
    <p>
      Your message:<br />
      <textarea name="message" cols="40" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: multipart/form-data</h3>

<form action="register.php" method="post" enctype="multipart/form-data" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Upload example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" /><br />
      Sex:
      <input id="sex_male" type="radio" name="sex" value="male" /> <label for="sex_male">Male</label>
      <input id="sex_female" type="radio" name="sex" value="female" /> <label for="sex_female">Female</label><br />
      Password: <input type="password" name="secret" /><br />
      What do you prefer:
      <select name="image_type">
        <option>Books</option>
        <option>Cinema</option>
        <option>TV</option>
      </select>
    </p>
    <p>
      Post your photos:
      <input type="file" multiple name="photos[]">
    </p>
    <p>
      <input id="vehicle_bike" type="checkbox" name="vehicle[]" value="Bike" /> <label for="vehicle_bike">I have a bike</label><br />
      <input id="vehicle_car" type="checkbox" name="vehicle[]" value="Car" /> <label for="vehicle_car">I have a car</label>
    </p>
    <p>
      Describe yourself:<br />
      <textarea name="description" cols="50" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

</body>
</html>
```

Для того, чтобы произвести его тест, создайте страницу с названием **register.php** (и укажите атрибут `action` одной из данных форм) и добавьте данный _минимальный_ контент

```php
<?php
/* register.php */

header("Content-type: text/plain");

/*
NOTE: You should never use `print_r()` in production scripts, or
otherwise output client-submitted data without sanitizing it first.
Failing to sanitize can lead to cross-site scripting vulnerabilities.
*/

echo ":: data received via GET ::\n\n";
print_r($_GET);

echo "\n\n:: Data received via POST ::\n\n";
print_r($_POST);

echo "\n\n:: Data received as \"raw\" (text/plain encoding) ::\n\n";
if (isset($HTTP_RAW_POST_DATA)) { echo $HTTP_RAW_POST_DATA; }

echo "\n\n:: Files received ::\n\n";
print_r($_FILES);
```

Синтаксис данного скрипта представлен ниже:

```
AJAXSubmit(myForm);
```

> **Примечание:** Данный фреймворк использует [`FileReader`](/ru/docs/DOM/FileReader) API для передачи загрузочных файлов. Это новый API и его невозможно использовать IE9 и ниже. В связи с этим, загрузки только с использованием AJAX воспринимаются, лишь как **экспериментальные**. Если вам не требуется загружать бинарные файлы, то данный фреймворк работает в большинстве современных браузерах.

> **Примечание:** The best way to send binary content is via [ArrayBuffers](/ru/docs/JavaScript/Typed_arrays/ArrayBuffer) or [Blobs](/ru/docs/DOM/Blob) in conjuncton with the [`send()`](/ru/docs/DOM/XMLHttpRequest#send%28%29) method and possibly the [`readAsArrayBuffer()`](</ru/docs/DOM/FileReader#readAsArrayBuffer()>) method of the [`FileReader`](/ru/docs/DOM/FileReader) API. But, since the aim of this script is to work with a [stringifiable](/ru/docs/JavaScript/Reference/Global_Objects/JSON/stringify) raw data, we used the [`sendAsBinary()`](/ru/docs/DOM/XMLHttpRequest#sendAsBinary%28%29) method in conjunction with the [`readAsBinaryString()`](/ru/docs/DOM/FileReader#readAsBinaryString%28%29) method of the [`FileReader`](/ru/docs/DOM/FileReader) API. As such, the above script makes sense only when you are dealing with small files. If you do not intend to upload binary content, consider instead using the [`FormData`](/ru/docs/DOM/XMLHttpRequest/FormData) API.

> **Примечание:** The non-standard `sendAsBinary` method is considered deprecated as of Gecko 31 {{ geckoRelease(31) }} and will be removed soon. The standard `send(Blob data)` method can be used instead.

### Используя объекты FormData

The [`FormData`](/ru/docs/DOM/XMLHttpRequest/FormData) constructor lets you compile a set of key/value pairs to send using `XMLHttpRequest`. Its primarily intended for use in sending form data, but can be used independently from forms in order to transmit keyed data. The transmitted data is in the same format that the form's `submit()` method would use to send the data if the form's encoding type were set to "multipart/form-data". FormData objects can be utilized in a number of ways with an XMLHttpRequest. For examples and explanations of how one can utilize FormData with XMLHttpRequests see the [Using FormData Objects](/ru/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects) page. For didactic purpose only we post here **a _translation_ of [the previous example](#A_little_vanilla_framework) transformed so as to make use of the `FormData` API**. Note the brevity of the code:

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Sending forms with FormData &ndash; MDN</title>
<script type="text/javascript">
"use strict";

function ajaxSuccess () {
  alert(this.responseText);
}

function AJAXSubmit (oFormElement) {
  if (!oFormElement.action) { return; }
  var oReq = new XMLHttpRequest();
  oReq.onload = ajaxSuccess;
  if (oFormElement.method.toLowerCase() === "post") {
    oReq.open("post", oFormElement.action, true);
    oReq.send(new FormData(oFormElement));
  } else {
    var oField, sFieldType, nFile, sSearch = "";
    for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
      oField = oFormElement.elements[nItem];
      if (!oField.hasAttribute("name")) { continue; }
      sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
      if (sFieldType === "FILE") {
        for (nFile = 0; nFile < oField.files.length; sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
      } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
        sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
      }
    }
    oReq.open("get", oFormElement.action.replace(/(?:\?.*)?$/, sSearch.replace(/^&/, "?")), true);
    oReq.send(null);
  }
}
</script>
</head>
<body>

<h1>Sending forms with FormData</h1>

<h2>Using the GET method</h2>

<form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h2>Using the POST method</h2>
<h3>Enctype: application/x-www-form-urlencoded (default)</h3>

<form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: text/plain</h3>

<p>The text/plain encoding is not supported by the FormData API.</p>

<h3>Enctype: multipart/form-data</h3>

<form action="register.php" method="post" enctype="multipart/form-data" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Upload example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" /><br />
      Sex:
      <input id="sex_male" type="radio" name="sex" value="male" /> <label for="sex_male">Male</label>
      <input id="sex_female" type="radio" name="sex" value="female" /> <label for="sex_female">Female</label><br />
      Password: <input type="password" name="secret" /><br />
      What do you prefer:
      <select name="image_type">
        <option>Books</option>
        <option>Cinema</option>
        <option>TV</option>
      </select>
    </p>
    <p>
      Post your photos:
      <input type="file" multiple name="photos[]">
    </p>
    <p>
      <input id="vehicle_bike" type="checkbox" name="vehicle[]" value="Bike" /> <label for="vehicle_bike">I have a bike</label><br />
      <input id="vehicle_car" type="checkbox" name="vehicle[]" value="Car" /> <label for="vehicle_car">I have a car</label>
    </p>
    <p>
      Describe yourself:<br />
      <textarea name="description" cols="50" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

</body>
</html>
```

> **Примечание:** As we said, **{{domxref("FormData")}} objects are not [stringifiable](/ru/docs/JavaScript/Reference/Global_Objects/JSON/stringify)objects**. If you want to stringify a submitted data, use [the previous _pure_-AJAX example](#A_little_vanilla_framework). Note also that, although in this example there are some `file` {{ HTMLElement("input") }} fields, **when you submit a form through the `FormData` API you do not need to use the [`FileReader`](/ru/docs/DOM/FileReader) API also**: files are automatically loaded and uploaded.

## Получить дату последнего изменения

```js
function getHeaderTime () {
  alert(this.getResponseHeader("Last-Modified"));  /* A valid GMTString date or null */
}

var oReq = new XMLHttpRequest();
oReq.open("HEAD" /* use HEAD if you only need the headers! */, "yourpage.html", true);
oReq.onload = getHeaderTime;
oReq.send();
```

### Do something when last modified date changes

Let's create these two functions:

```js
function getHeaderTime () {

  var
    nLastVisit = parseFloat(window.localStorage.getItem('lm_' + this.filepath)),
    nLastModif = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
    window.localStorage.setItem('lm_' + this.filepath, Date.now());
    isFinite(nLastVisit) && this.callback(nLastModif, nLastVisit);
  }

}

function ifHasChanged(sURL, fCallback) {
  var oReq = new XMLHttpRequest();
  oReq.open("HEAD" /* use HEAD - we only need the headers! */, sURL, true);
  oReq.callback = fCallback;
  oReq.filepath = sURL;
  oReq.onload = getHeaderTime;
  oReq.send();
}
```

Test:

```js
/* Let's test the file "yourpage.html"... */

ifHasChanged("yourpage.html", function (nModif, nVisit) {
  alert("The page '" + this.filepath + "' has been changed on " + (new Date(nModif)).toLocaleString() + "!");
});
```

If you want to know **whether _the current page_ has changed**, please read the article about [`document.lastModified`](/ru/docs/Web/API/document.lastModified).

## Межсайтовые XMLHttpRequest

Современные браузеры поддерживают межсайтовые запросы по стандарту [Access Control for Cross-Site Requests](/ru/docs/HTTP_access_control). Для этого, серверу необходимо дополнительно указывать заголовок `origin`. В противном случае, выбрасывается исключение `INVALID_ACCESS_ERR`.

## Обход кеширования

Для кросс-браузерного обхода кеширования в конец URL-запроса достаточно добавить случайную строку в GET-параметры, то есть сразу после «?», например:

```
http://foo.com/bar.html -> http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345
```

Таким образом, каждый новый запрос будет происходить по новому URL и кеширование страницы не будет производиться.

Автоматизировать этот подход можно следующим сниппетом:

```js
var oReq = new XMLHttpRequest();

oReq.open("GET", url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime(), true);
oReq.send(null);
```

## Безопасность

{{fx_minversion_note(3, "Versions of Firefox prior to Firefox 3 allowed you to set the preference `capability.policy.<policyname>.XMLHttpRequest.open</policyname>` to `allAccess` to give specific sites cross-site access. This is no longer supported.")}}

{{fx_minversion_note(5, "Versions of Firefox prior to Firefox 5 could use `netscape.security.PrivilegeManager.enablePrivilege(\"UniversalBrowserRead\");` to request cross-site access. This is no longer supported, even though it produces no warning and permission dialog is still presented.")}}

The recommended way to enable cross-site scripting is to use the `Access-Control-Allow-Origin` HTTP header in the response to the XMLHttpRequest.

### XMLHttpRequests being stopped

If you end up with an XMLHttpRequest having `status=0` and `statusText=null`, it means that the request was not allowed to be performed. It was [`UNSENT`](http://www.w3.org/TR/XMLHttpRequest/#dom-xmlhttprequest-unsent). A likely cause for this is when the [`XMLHttpRequest` origin](http://www.w3.org/TR/XMLHttpRequest/#xmlhttprequest-origin) (at the creation of the XMLHttpRequest) has changed when the XMLHttpRequest is then `open()`. This case can happen for example when one has an XMLHttpRequest that gets fired on an onunload event for a window: the XMLHttpRequest gets in fact created when the window to be closed is still there, and then the request is sent (ie `open()`) when this window has lost its focus and potentially different window has gained focus. The way to avoid this problem is to set a listener on the new window "activate" event that gets set when the old window has its "unload" event fired.

## Using XMLHttpRequest from JavaScript modules / XPCOM components

Instantiating `XMLHttpRequest` from a [JavaScript module](/ru/docs/JavaScript_code_modules/Using) or an XPCOM component works a little differently; it can't be instantiated using the `XMLHttpRequest()` constructor. The constructor is not defined inside components and the code results in an error. The best way to work around this is to use the XPCOM component constructor.

```js
const XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1", "nsIXMLHttpRequest");
```

Unfortunately in versions of Gecko prior to Gecko 16 there is a bug which can cause requests created this way to be cancelled for no reason. If you need your code to work on Gecko 15 or earlier, you can get the XMLHttpRequest constructor from the hidden DOM window like so.

```js
const { XMLHttpRequest } = Components.classes["@mozilla.org/appshell/appShellService;1"]
                                     .getService(Components.interfaces.nsIAppShellService)
                                     .hiddenDOMWindow;
var oReq = new XMLHttpRequest();
```

## Дополнительные ссылки

1. [MDN AJAX introduction](/ru/docs/AJAX/Getting_Started)
2. [HTTP access control](/ru/docs/HTTP_access_control)
3. [How to check the security state of an XMLHTTPRequest over SSL](/ru/docs/How_to_check_the_security_state_of_an_XMLHTTPRequest_over_SSL)
4. [XMLHttpRequest - REST and the Rich User Experience](http://www.peej.co.uk/articles/rich-user-experience.html)
5. [Microsoft documentation](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmobjxmlhttprequest.asp)
6. [Apple developers' reference](http://developer.apple.com/internet/webcontent/xmlhttpreq.html)
7. ["Using the XMLHttpRequest Object" (jibbering.com)](http://jibbering.com/2002/4/httprequest.html)
8. [The XMLHttpRequest Object: W3C Specification](http://www.w3.org/TR/XMLHttpRequest/)
9. [Web Progress Events specification](http://dev.w3.org/2006/webapi/progress/Progress.html)
