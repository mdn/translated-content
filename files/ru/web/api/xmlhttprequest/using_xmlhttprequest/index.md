---
title: Использование XMLHttpRequest
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
---

{{APIRef("XMLHttpRequest")}}

Это инструкция по использованию {{domxref("XMLHttpRequest")}} для обмена информацией между сайтом и сервером по [HTTP-протоколу](/ru/docs/Web/HTTP).

Мы разберём как частые примеры использования `XMLHttpRequest`, так и более редкие.

Для отправки HTTP-запроса нужно создать `XMLHttpRequest`-объект, указать URL и отправить запрос. В результате запроса мы получим от сервера объект с подробной информацией, вроде тела ответа и [HTTP-статуса](/ru/docs/Web/HTTP/Status).

```js
function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();
```

## Типы запросов

Запрос, сделанный посредством `XMLHttpRequest`, может загружать данные синхронно или асинхронно. Тип запроса определяется опциональным `async` аргументом (третий по счёту) метода {{domxref("XMLHttpRequest.open()")}}. Если он равен `true` или не задан, запрос выполнится асинхронно, в противном случае — синхронно.

В чем разница между двумя типами запросов, а так же примеры использования, вы можете найти [в статье с подробным описанием синхронных и асинхронных запросов](/ru/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests). По возможности избегайте синхронных запросов, они блокируют взаимодействие пользователя с сайтом.

> **Обратите внимание:** Название `XMLHttpRequest` не означает, что вы можете передавать только XML документы. **"XML"** в названии остался из времён, когда основным форматом для обмена информацией был XML.

## Обработка запросов

Конструктором {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}} определены несколько [типов ответа](https://xhr.spec.whatwg.org/). В ответе содержится важная информация о статусе запроса. При указании некоторых типов ответа могут потребоваться дополнительные действия для обработки и получения результата, рассмотрим эти случаи.

### Обработка и получение результата из responseXML

Если с помощью `XMLHttpRequest` загрузить XML-документ, в свойстве {{domxref("XMLHttpRequest.responseXML", "responseXML")}} будет DOM-объект, содержащий распарсенный XML-документ, работать напрямую с которым будет сложно. Есть четыре основных способа анализа этого документа:

1. Использовать [XPath](/ru/docs/Web/XPath) для обращения (или указания на) к части XML-документа.
2. Вручную [конвертировать XML](/ru/docs/Web/Guide/Parsing_and_serializing_XML) в строку или объект.
3. Использовать {{domxref("XMLSerializer")}} для сериализации **DOM-дерева в строку**.
4. Использовать {{jsxref("RegExp")}}, если вам заранее известна структура документа. Возможно, потребуется удалить переносы строк из документа или учитывать их в `RegExp`. Однако, этот способ стоит использовать только в крайнем случае, ведь если XML-документ изменится хотя бы чуть-чуть, то регулярное выражение, скорее всего, уже не подойдёт.

> **Обратите внимание:** Теперь с помощью {{domxref("XMLHttpRequest.responseXML", "responseXML")}} можно парсить HTML. Подробнее читайте в статье [HTML в XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest).

### Получение HTML из responseText

Если вы используете `XMLHttpRequest` для получения содержимого HTML-страницы, в свойстве {{domxref("XMLHttpRequest.responseText", "responseText")}} будет "сырой" HTML, работать с которым неудобно. Есть три способа упростить работу с этим "сырым" HTML:

1. Использовать свойство `XMLHttpRequest.responseXML`, как показано в статье [HTML в XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest).
2. Вставить содержимое в [фрагмент](/ru/docs/Web/API/DocumentFragment) с помощью `fragment.body.innerHTML` и работать уже с содержимым фрагмента как с DOM-деревом.
3. Использовать {{jsxref("RegExp")}}, если вам заранее известна структура HTML. Возможно, потребуется удалить переносы строк из содержимого или учитывать их в `RegExp`. Однако, этот способ стоит использовать только в крайнем случае, ведь если HTML изменится хотя бы чуть-чуть, то регулярное выражение, скорее всего, уже не подойдёт.

## Работа с двоичными данными

Хотя обычно {{domxref("XMLHttpRequest")}} используется для отправки и получения текстового содержимого, с его помощью можно обмениваться и двоичными данными. Есть несколько проверенных способов заставить `XMLHttpRequest` посылать двоичные данные. Они заключаются в использовании метода {{domxref("XMLHttpRequest.overrideMimeType", "overrideMimeType()")}}.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// просим извлечь данные в виде двоичной строки без обработки
req.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
```

Однако, существуют и более современные способы, так как атрибут {{domxref("XMLHttpRequest.responseType", "responseType")}} теперь поддерживает ряд дополнительных типов содержимого, что существенно упрощает отправку и получение двоичных данных.

Для примера рассмотрим фрагмент, где используется "`arraybuffer`" как значение `responseType` для загрузки содержимого как объекта {{jsxref("ArrayBuffer")}}, в котором хранятся сырые двоичные данные.

```js
const req = new XMLHttpRequest();

req.onload = (e) => {
  const arraybuffer = req.response; // именно response, не responseText
  /* ... */
};
req.open("GET", url);
req.responseType = "arraybuffer";
req.send();
```

Больше примеров в статье [Отправка и получение бинарных данных](/ru/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data).

## Отслеживание прогресса загрузки

`XMLHttpRequest` позволяет подписываться на различные события, которые могут произойти в процессе обработки запроса: периодические уведомления о состоянии запроса, сообщения об ошибках и так далее.

Следуя [спецификации](https://xhr.spec.whatwg.org/#interface-progressevent) `XMLHttpRequest` поддерживает событие {{domxref("XMLHttpRequest/progress_event", "progress")}} и реализует интерфейс {{domxref("ProgressEvent")}}. Для получения информации о прогрессе загрузки используйте события:

- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : Наступает каждый раз при изменении объёма переданных данных.
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : Наступает по завершению передачи, когда все данные доступны в `response`.

```js
const req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress);
req.addEventListener("load", transferComplete);
req.addEventListener("error", transferFailed);
req.addEventListener("abort", transferCanceled);

req.open();

// ...

// отслеживание прогресса передачи от сервера к клиенту (загрузка)
function updateProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    // ...
  } else {
    // невозможно вычислить состояние загрузки, так как размер неизвестен
  }
}

function transferComplete(evt) {
  console.log("Загрузка завершена.");
}

function transferFailed(evt) {
  console.log("При загрузке произошла ошибка.");
}

function transferCanceled(evt) {
  console.log("Пользователь отменил загрузку.");
}
```

В 3-6 строках добавляются обработчики для различных событий, происходящих при передаче данных с помощью `XMLHttpRequest`.

> **Важно:** Обработчики нужно добавлять до вызова метода `open()`. В противном случае `progress`-события не будут обработаны.

Обработчик события `progress`, представленный функцией `updateProgress()` в этом примере, получает количество байт, которое должно быть передано, и количество уже переданных байт в полях `total` и `loaded.` Но если длина сообщения неизвестна, поле `lengthComputable` будет равно `false`.

События о ходе выполнения есть как у входящих, так и у исходящих передач. Обработчики событий входящих передач задаются для объекта `XMLHttpRequest`, как в примере выше, а для исходящих — на `XMLHttpRequest.upload`:

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

req.open();
```

> **Обратите внимание:** отслеживание прогресса недоступно для протокола `file:`.

События о ходе выполнения наступают для каждого полученного пакета данных, включая последний, поэтому в случае, когда последний пакет получен и соединение закрыто, событие `progress` всё равно наступит. Это позволяет нам отслеживать прогресс, добавляя обработчик только для `progress`-события.

Также можно обработать все три события, завершающие загрузку (`abort`, `load`, or `error`) через событие `loadend`:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log("Передача данных завершена (но мы не знаем, успешно ли).");
}
```

Заметьте, что событие `loadend` никак не сообщает, что вызвало конец передачи. Впрочем, это никак не мешает использовать его, если нужно сделать что-то вне зависимости от причины.

## Отправка форм и загрузка файлов

Есть два способа передать данные форм с помощью `XMLHttpRequest`:

- без помощи других API, используя только XHR;
- с помощью {{domxref("FormData")}} API.

FormData API – самый простой и быстрый способ, но данные, полученные с его помощью, нельзя превратить в строку с помощью [JSON.stringify](/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). Использование только XHR сложнее, но этот способ самый гибкий и мощный.

### Используя только `XMLHttpRequest`

Отправка формы без FormData API в большинстве случаев не требует других API. Единственное исключение, _если вам нужно отправить один или несколько файлов_, тогда придётся использовать {{domxref("FileReader")}} API.

#### Краткое введение в методы отправки

HTML-форму {{ HTMLElement("form") }} можно отправить четырьмя способами:

- использовать метод `POST` и установить атрибут `enctype` в значении `application/x-www-form-urlencoded` (способ по умолчанию);
- использовать метод `POST` и установить атрибут `enctype` в значении `text/plain`;
- использовать метод `POST` и установить атрибут `enctype` в значении `multipart/form-data`;
- использовать метод `GET` (в этом случае атрибут `enctype` будет проигнорирован).

Рассмотрим отправку формы с двумя полями: `foo` и `baz`. Если использовать метод `POST`, сервер получит строку, похожую на одну из показанных ниже, в зависимости от типа кодирования, который вы используете:

- Метод: `POST`; тип кодирования: `application/x-www-form-urlencoded` (по умолчанию):

  ```plain
  Content-Type: application/x-www-form-urlencoded

  foo=bar&baz=The+first+line.%0D%0AThe+second+line.%0D%0A
  ```

- Метод: `POST`; тип кодирования: `text/plain`:

  ```plain
  Content-Type: text/plain

  foo=bar
  baz=The first line.
  The second line.
  ```

- Метод: `POST`; тип кодирования: [`multipart/form-data`](/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data):

  ```plain
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

А если вы решите использовать метод `GET`, к адресу формы будет добавлена строка вида:

```plain
?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
```

#### Небольшой классический фреймворк

Всё это возможно благодаря браузеру и тегу {{HTMLElement("form")}}. Но если вам требуется выполнить все операции только с помощью JavaScript, вам придётся проинструктировать интерпретатор обо _всех_ выполняемых операциях. Отправка формы с помощью _чистого_ XHR слишком сложна, чтобы рассказать вам о ней во всех деталях. Поэтому мы решили опубликовать здесь **целый (пусть и учебный) фреймворк**, который поддерживает все четыре способа отправки и даже **загрузку файлов**:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Sending forms with pure AJAX &ndash; MDN</title>
    <script>
      "use strict";

      // :: XHR Form Submit Framework ::
      //
      // https://developer.mozilla.org/ru/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
      //
      // This framework is released under the GNU Public License, version 3 or later.
      // https://www.gnu.org/licenses/gpl-3.0-standalone.html
      //
      // Syntax:
      //
      // XHRSubmit(HTMLFormElement);
      const XHRSubmit = (function () {
        function xhrSuccess() {
          console.log(this.responseText);
          // you can get the serialized data through the "submittedData" custom property:
          // console.log(JSON.stringify(this.submittedData));
        }

        function submitData(data) {
          const req = new XMLHttpRequest();
          req.submittedData = data;
          req.onload = xhrSuccess;
          if (data.technique === 0) {
            // method is GET
            req.open(
              "get",
              data.receiver.replace(
                /(?:\?.*)?$/,
                data.segments.length > 0 ? `?${data.segments.join("&")}` : "",
              ),
              true,
            );
            req.send(null);
          } else {
            // method is POST
            req.open("post", data.receiver, true);
            if (data.technique === 3) {
              // enctype is multipart/form-data
              const boundary =
                "---------------------------" + Date.now().toString(16);
              req.setRequestHeader(
                "Content-Type",
                `multipart\/form-data; boundary=${boundary}`,
              );
              req.sendAsBinary(
                `--${boundary}\r\n` +
                  data.segments.join(`--${boundary}\r\n`) +
                  `--${boundary}--\r\n`,
              );
            } else {
              // enctype is application/x-www-form-urlencoded or text/plain
              req.setRequestHeader("Content-Type", data.contentType);
              req.send(data.segments.join(data.technique === 2 ? "\r\n" : "&"));
            }
          }
        }

        function processStatus(data) {
          if (data.status > 0) {
            return;
          }
          // the form is now totally serialized! do something before sending it to the server…
          // doSomething(data);
          // console.log("XHRSubmit - The form is now serialized. Submitting...");
          submitData(data);
        }

        function pushSegment(segment) {
          this.owner.segments[this.segmentIdx] +=
            segment.target.result + "\r\n";
          this.owner.status--;
          processStatus(this.owner);
        }

        function plainEscape(text) {
          // How should I treat a text/plain form encoding?
          // What characters are not allowed? this is what I suppose…:
          // "4\3\7 - Einstein said E=mc2" ----> "4\\3\\7\ -\ Einstein\ said\ E\=mc2"
          return text.replace(/[\s\=\\]/g, "\\$&");
        }

        function SubmitRequest(target) {
          const isPost = target.method.toLowerCase() === "post";
          this.contentType =
            isPost && target.enctype
              ? target.enctype
              : "application\/x-www-form-urlencoded";
          this.technique = isPost
            ? this.contentType === "multipart\/form-data"
              ? 3
              : this.contentType === "text\/plain"
              ? 2
              : 1
            : 0;
          this.receiver = target.action;
          this.status = 0;
          this.segments = [];
          const filter = this.technique === 2 ? plainEscape : escape;
          for (const field of target.elements) {
            if (!field.hasAttribute("name")) {
              continue;
            }
            const fieldType =
              field.nodeName.toUpperCase() === "INPUT" &&
              field.hasAttribute("type")
                ? field.getAttribute("type").toUpperCase()
                : "TEXT";
            if (fieldType === "FILE" && field.files.length > 0) {
              if (this.technique === 3) {
                // enctype is multipart/form-data
                for (const file of field.files) {
                  const segmReq = new FileReader();

                  // Custom properties:
                  segmReq.segmentIdx = this.segments.length;
                  segmReq.owner = this;

                  segmReq.onload = pushSegment;
                  this.segments.push(
                    'Content-Disposition: form-data; name="' +
                      field.name +
                      '"; filename="' +
                      file.name +
                      '"\r\nContent-Type: ' +
                      file.type +
                      "\r\n\r\n",
                  );
                  this.status++;
                  segmReq.readAsBinaryString(file);
                }
              } else {
                // enctype is application/x-www-form-urlencoded or text/plain or
                // method is GET: files will not be sent!
                for (const file of field.files) {
                  this.segments.push(
                    `${filter(field.name)}=${filter(file.name)}`,
                  );
                }
              }
            } else if (
              (fieldType !== "RADIO" && fieldType !== "CHECKBOX") ||
              field.checked
            ) {
              // NOTE: this will submit _all_ submit buttons. Detecting the correct one is non-trivial.
              // field type is not FILE or is FILE but is empty.
              if (this.technique === 3) {
                // enctype is multipart/form-data
                this.segments.push(
                  `Content-Disposition: form-data; name="${field.name}"\r\n\r\n${field.value}\r\n`,
                );
              } else {
                // enctype is application/x-www-form-urlencoded or text/plain or method is GET
                this.segments.push(
                  `${filter(field.name)}=${filter(field.value)}`,
                );
              }
            }
          }
          processStatus(this);
        }

        return (formElement) => {
          if (!formeElement.action) {
            return;
          }
          new SubmitRequest(formElement);
        };
      })();
    </script>
  </head>
  <body>
    <h1>Sending forms with XHR</h1>

    <h2>Using the GET method</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          <label>First name: <input type="text" name="firstname" /></label
          ><br />
          <label>Last name: <input type="text" name="lastname" /></label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h2>Using the POST method</h2>
    <h3>Enctype: application/x-www-form-urlencoded (default)</h3>

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          <label>First name: <input type="text" name="firstname" /></label>
          <br />
          <label>Last name: <input type="text" name="lastname" /></label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: text/plain</h3>

    <form
      action="register.php"
      method="post"
      enctype="text/plain"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          <label
            >Your name:
            <input type="text" name="user" />
          </label>
        </p>
        <p>
          <label
            >Your message:<br />
            <textarea name="message" cols="40" rows="8"></textarea>
          </label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: multipart/form-data</h3>

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Upload example</legend>
        <p>
          <label>First name: <input type="text" name="firstname" /></label
          ><br />
          <label>Last name: <input type="text" name="lastname" /></label><br />
          Sex:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Male</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Female</label><br />
          Password: <input type="password" name="secret" /><br />
          <label
            >What do you prefer:
            <select name="image_type">
              <option>Books</option>
              <option>Cinema</option>
              <option>TV</option>
            </select>
          </label>
        </p>
        <p>
          <label
            >Post your photos:
            <input type="file" multiple name="photos[]" />
          </label>
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">I have a bike</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">I have a car</label>
        </p>
        <p>
          <label
            >Describe yourself:<br />
            <textarea name="description" cols="50" rows="8"></textarea>
          </label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

Чтобы воспользоваться фреймворком, создайте страницу с названием **register.php** (и укажите его в атрибуте `action` одной из форм в примере) с _минимальным_ содержимым:

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
>
```

Для активации выполните код:

```js
XHRSubmit(myForm);
```

> **Важно:** Наш фреймворк использует {{domxref("FileReader")}} API для передачи файлов. Это новый API и его невозможно использовать в IE9 и ниже. В связи с этим, загрузки только с использованием AJAX воспринимаются лишь как **экспериментальные**. Если вам не требуется загружать бинарные файлы, то данный фреймворк работает в большинстве современных браузеров.

> **Обратите внимание:** Лучший способ отправить бинарные данные – использовать {{jsxref("ArrayBuffer", "ArrayBuffers")}} или {{domxref("Blob", "Blobs")}} в связке с методом {{domxref("XMLHttpRequest.send()", "send()")}} и методом {{domxref("FileReader.readAsArrayBuffer()", "readAsArrayBuffer()")}} из `FileReader` API. Но так как цель нашего примера – поддержка возможности представить сырые данные [в виде строки](/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), мы использовали метод {{domxref("XMLHttpRequest.sendAsBinary()", "sendAsBinary()")}} в связке с {{domxref("FileReader.readAsBinaryString()", "readAsBinaryString()")}} из `FileReader` API. Таким образом, приведенный выше код имеет смысл использовать только в том случае, если вы имеете дело с небольшими файлами. Если вы не планируете загружать двоичное содержимое, вместо этого воспользуйтесь `FormData` API.

### Используя FormData

The {{domxref("FormData")}} constructor lets you compile a
set of key/value pairs to send using `XMLHttpRequest`. Its primary use is in
sending form data, but can also be used independently from a form in order to transmit
user keyed data. The transmitted data is in the same format the form's
`submit()` method uses to send data, if the form's encoding type were set to
"multipart/form-data". FormData objects can be utilized in a number of ways with an
`XMLHttpRequest`. For examples, and explanations of how one can utilize
FormData with XMLHttpRequests, see the [Using FormData Objects](/ru/docs/Web/API/FormData/Using_FormData_Objects) page. For didactic purposes here is **a _translation_ of [the previous example](#a_little_vanilla_framework) transformed to use the
`FormData` API**. Note the brevity of the code:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Sending forms with FormData &ndash; MDN</title>
    <script>
      "use strict";

      function xhrSuccess () {
        console.log(this.responseText);
      }

      function XHRSubmit (formElement) {
        if (!formElement.action) { return; }
        const req = new XMLHttpRequest();
        req.onload = xhrSuccess;
        if (fFormElement.method.toLowerCase() === "post") {
          req.open("post", formElement.action);
          req.send(new FormData(formElement));
        } else {
          let search = "";
          for (const field of formElement.elements) {
            if (!field.hasAttribute("name")) { continue; }
            const fieldType = field.nodeName.toUpperCase() === "INPUT" && oField.hasAttribute("type")
              ? field.getAttribute("type").toUpperCase()
              : "TEXT";
            if (fieldType === "FILE") {
              for (const file of field.files) {
                search += `&${escape(field.name)}=${escape(file.name)}`;
            } else if ((fieldType !== "RADIO" && fieldType !== "CHECKBOX") || field.checked) {
              search += `&${escape(field.name)}=${escape(field.value)}`;
            }
          }
          req.open("get", formElement.action.replace(/(?:\?.*)?$/, search.replace(/^&/, "?")), true);
          req.send(null);
        }
      }
    </script>
  </head>
  <body>
    <h1>Sending forms with FormData</h1>

    <h2>Using the GET method</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
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

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
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

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Upload example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" /><br />
          Sex:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Male</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Female</label><br />
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
          <input type="file" multiple name="photos[]" />
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">I have a bike</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">I have a car</label>
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

> **Note:** As we said, **{{domxref("FormData")}}
> objects are not [stringifiable](/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) objects**. If you want to stringify a submitted data, use [the previous _pure_-AJAX example](#a_little_vanilla_framework). Note
> also that, although in this example there are some `file` {{ HTMLElement("input") }} fields, **when you submit a form through the
> `FormData` API you do not need to use the {{domxref("FileReader")}} API
> also**: files are automatically loaded and uploaded.

## Получаем дату последнего изменения

```js
function getHeaderTime() {
  console.log(this.getResponseHeader("Last-Modified")); // Дата вида GMTString или null
}

const req = new XMLHttpRequest();
req.open(
  "HEAD", // используется HEAD только если сервер требует заголовки
  "yourpage.html",
);
req.onload = getHeaderTime;
req.send();
```

### Do something when last modified date changes

Let's create two functions:

```js
function getHeaderTime() {
  const lastVisit = parseFloat(
    window.localStorage.getItem(`lm_${this.filepath}`),
  );
  const lastModified = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(lastVisit) || lastModified > lastVisit) {
    window.localStorage.setItem(`lm_${this.filepath}`, Date.now());
    isFinite(lastVisit) && this.callback(lastModified, lastVisit);
  }
}

function ifHasChanged(URL, callback) {
  const req = new XMLHttpRequest();
  req.open("HEAD" /* use HEAD - we only need the headers! */, URL);
  req.callback = callback;
  req.filepath = URL;
  req.onload = getHeaderTime;
  req.send();
}
```

And to test:

```js
// Let's test the file "yourpage.html"
ifHasChanged("yourpage.html", function (modified, visit) {
  console.log(
    `The page '${this.filepath}' has been changed on ${new Date(
      nModified,
    ).toLocaleString()}!`,
  );
});
```

If you want to know if the current page has changed, refer to the article about {{domxref("document.lastModified")}}.

## Межсайтовые XMLHttpRequest

Современные браузеры поддерживают межсайтовые запросы по стандарту [Cross-Origin Resource Sharing](/ru/docs/Web/HTTP/CORS) (CORS). Для этого серверу необходимо дополнительно указывать заголовок `origin`. В противном случае, выбрасывается исключение `INVALID_ACCESS_ERR`.

## Обход кеширования

Для межсайтового обхода кеширования в конец URL-запроса достаточно добавить случайную строку в GET-параметры, то есть сразу после «?», например:

```plain
http://foo.com/bar.html -> http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345
```

Таким образом, каждый новый запрос будет происходить по новому URL, не браться из кэша.

Автоматизировать этот подход можно следующим образом:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Безопасность

Рекомендуемый способ разрешить межсайтовые запросы - использовать HTTP-заголовок `Access-Control-Allow-Origin` в ответе на XMLHttpRequest.

### XMLHttpRequests был остановлен

Если в завершение XMLHttpRequest вы получаете `status=0` и `statusText=null` – это означает, что запрос не был разрешен к выполнению. Его статус остался [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Частая причина, что указанный [`XMLHttpRequest` origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-origin) (во время создания XMLHttpRequest) был изменён в следствии вызова `open()`. Такое может произойти, например, когда есть XMLHttpRequest, который запускается при событии onunload окна. XMLHttpRequest создается, когда окно, которое должно быть закрыто, всё ещё существует, но отправка запроса (другими словами, вызов `open()`) происходит, когда это окно уже потеряло свой фокус, а другое – получило. Наиболее эффективный способ избежать этой проблемы - установить слушателя на событие нового окна {{domxref("Element/DOMActivate_event", "DOMActivate")}}, которое устанавливается, как только у закрытого окна срабатывает событие {{domxref("Window/unload_event", "unload")}}.

## Воркеры

Установка `overrideMimeType` не работает с {{domxref("Worker")}}. Это баг – {{bug(678057)}}. В разных браузерах поведение может отличаться.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [AJAX. С чего начать](/ru/docs/Web/Guide/AJAX/Getting_Started)
- [HTML in XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
- [HTTP access control](/ru/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST and the Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- ["Using the XMLHttpRequest Object" (jibbering.com)](https://jibbering.com/2002/4/httprequest.html)
- [Объект `XMLHttpRequest`: спецификация WHATWG](https://xhr.spec.whatwg.org/)
