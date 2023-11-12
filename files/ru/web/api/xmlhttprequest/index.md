---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
---

{{APIRef("XMLHttpRequest")}}

`XMLHttpRequest` это API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером. Данный API предоставляет простой способ получения данных по ссылке без перезагрузки страницы. Это позволяет обновлять только часть веб-страницы не прерывая пользователя. `XMLHttpRequest используется в AJAX запросах и особенно в single-page приложениях.`

XMLHttpRequest изначально был разработан Microsoft и позже заимствован Mozilla, Apple, и Google. Сейчас он [стандартизирован WHATWG](https://xhr.spec.whatwg.org/). Несмотря на своё название, `XMLHttpRequest` может быть использован для получения любых типов данных, не только XML, и поддерживает протоколы помимо [HTTP](/ru/docs/Web/HTTP) (включая `file` и [ftp](/ru/docs/Glossary/FTP)).

Чтобы начать работать с `XMLHttpRequest`, выполните этот код:

```
var myRequest = new XMLHttpRequest();
```

более детальное описание создание объекта, можно увидеть в разделе [Using XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest).

## Список методов объекта

| `XMLHttpRequest(JSObject objParameters);`                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `void abort();`                                                                                                                                                 |
| `DOMString getAllResponseHeaders();`                                                                                                                            |
| `DOMString? getResponseHeader(DOMString header);`                                                                                                               |
| `void open(DOMString method, DOMString url, optional boolean async, optional DOMString? user, optional DOMString? password);`                                   |
| `void overrideMimeType(DOMString mime);`                                                                                                                        |
| `void send();` `void send(ArrayBufferView data);` `void send(Blob data);` `void send(Document data);` `void send(DOMString? data);` `void send(FormData data);` |
| `void setRequestHeader(DOMString header, DOMString value);`                                                                                                     |
| Нестандартные методы                                                                                                                                            |
| `[noscript] void init(in nsIPrincipal principal, in nsIScriptContext scriptContext, in nsPIDOMWindow ownerWindow);`                                             |
| `[noscript] void openRequest(in AUTF8String method, in AUTF8String url, in boolean async, in AString user, in AString password);`                               |
| `void sendAsBinary(in DOMString body);` {{ deprecated_inline(31) }}                                                                                             |

## Поля объекта

<table class="standard-table">
  <tbody>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr id="onreadystatechange">
      <td>
        <p><code>onreadystatechange</code></p>
      </td>
      <td><code>Function?</code></td>
      <td>
        <p>
          Callback - функция, которая вызывается всякий раз, когда поле
          <code>readyState меняет своё значение</code>. Callback выполняется в
          потоке работы приложения.
        </p>
        <div class="warning">
          <strong>Внимание:</strong> Он не должен использоваться в синхронных
          запросах, и не должен выполняться из нативного кода (? must not be
          used from native code).
        </div>
      </td>
    </tr>
    <tr id="readyState">
      <td><code>readyState</code></td>
      <td><code>unsigned short</code></td>
      <td>
        <p>Состояние запроса:</p>
        <table class="standard-table">
          <tbody>
            <tr>
              <td class="header">Значение</td>
              <td class="header">Состояние</td>
              <td class="header">Описание</td>
            </tr>
            <tr>
              <td><code>0</code></td>
              <td><code>UNSENT</code></td>
              <td>Клиент создан. Метод <code>open()</code> ещё не вызван.</td>
            </tr>
            <tr>
              <td><code>1</code></td>
              <td><code>OPENED</code></td>
              <td>
                Вызван метод open<code>()</code>. В этом состоянии можно
                добавить заголовки через метод <code>setRequestHeader()</code>;
                вызов метода <code>send()</code> отправит запрос.
              </td>
            </tr>
            <tr>
              <td><code>2</code></td>
              <td><code>HEADERS_RECEIVED</code></td>
              <td>
                Вызван метод <code>send()</code>, получены заголовки и код
                ответа (200, 404, 501 и проч.).
              </td>
            </tr>
            <tr>
              <td><code>3</code></td>
              <td><code>LOADING</code></td>
              <td>
                Загрузка; если значение <code>responseType</code> равно "text"
                или пустой строке, то <code>responseText</code> содержит
                частичные данные.
              </td>
            </tr>
            <tr>
              <td><code>4</code></td>
              <td><code>DONE</code></td>
              <td>Операция завершена. Все данные получены.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr id="response">
      <td><code>response</code></td>
      <td>varies</td>
      <td>
        <p>
          Тело сущности запроса. Согласно полю
          <code><a href="#responseType">responseType</a></code
          >, может быть
          <a
            href="/en/JavaScript_typed_arrays/ArrayBuffer"
            title="en/JavaScript typed arrays/ArrayBuffer"
            ><code>ArrayBuffer</code></a
          >, <a href="/en/DOM/Blob" title="en/DOM/Blob"><code>Blob</code></a
          >, {{ domxref("Document") }}, JavaScript объектом (для "json"),
          или строкой. Равно <code>null</code> если запрос не завершён или
          окончен с ошибкой.
        </p>
      </td>
    </tr>
    <tr id="responseText">
      <td><code>responseText</code> {{ReadOnlyInline()}}</td>
      <td><code>DOMString</code></td>
      <td>
        Ответ на запрос в виде строки или <code>null</code> в случае если запрос
        не успешен или ответ ещё не получен.
      </td>
    </tr>
    <tr id="responseType">
      <td><code>responseType</code></td>
      <td><code>XMLHttpRequestResponseType</code></td>
      <td>
        <p>Может использоваться для определения типа ответа.</p>
        <table class="standard-table" style="width: auto">
          <tbody>
            <tr>
              <td class="header">Value</td>
              <td class="header">
                Data type of <code>response</code> property
              </td>
            </tr>
            <tr>
              <td><code>""</code> (пустая строка)</td>
              <td>String (строка, дефолтное значение)</td>
            </tr>
            <tr>
              <td><code>"arraybuffer"</code></td>
              <td>
                <a
                  href="/en/JavaScript_typed_arrays/ArrayBuffer"
                  title="en/JavaScript typed arrays/ArrayBuffer"
                  ><code>ArrayBuffer</code></a
                >
              </td>
            </tr>
            <tr>
              <td><code>"blob"</code></td>
              <td>{{ domxref("Blob") }}</td>
            </tr>
            <tr>
              <td><code>"document"</code></td>
              <td>{{ domxref("Document") }}</td>
            </tr>
            <tr>
              <td><code>"json"</code></td>
              <td>
                JavaScript объект, полученный путём парсинга JSON строки,
                полученной с сервера.
              </td>
            </tr>
            <tr>
              <td><code>"text"</code></td>
              <td>String (строка)</td>
            </tr>
            <tr>
              <td><code>"moz-blob"</code></td>
              <td>
                Firefox - велосипед, который позволяет работать с
                частично-полученными данными {{ domxref("Blob") }} при
                помощи событий прогресса (progressing events). Эта штука
                позволяет работать с ответом от сервера, до того как он получен
                полностью.
              </td>
            </tr>
            <tr>
              <td><code>"moz-chunked-text"</code></td>
              <td>
                <p>
                  Похоже на поле <code>"text"</code>, но только находится в
                  потоке(streaming). Это значит, что значение доступно только в
                  промежуток времени между событиями прогресса (<code
                    >"progress"</code
                  >
                  event), и содержит данные которые пришли из последнего события
                  прогресса.
                </p>
                <p>
                  Поле содержит строку, пока выполняются события прогресса.
                  После того как ответ получен полностью, значение поля меняется
                  на <code>null</code>.
                </p>
                <p>Работает только в Firefox.</p>
              </td>
            </tr>
            <tr>
              <td><code>"moz-chunked-arraybuffer"</code></td>
              <td>
                <p>
                  Похоже на поле <code>"arraybuffer"</code>, но только находится
                  в потоке(streaming). Это значит, что значение доступно только
                  в промежуток времени между событиями прогресса (<code
                    >"progress"</code
                  >
                  event), и содержит данные которые пришли из последнего события
                  прогресса.
                </p>
                <p>
                  Поле содержит строку, пока выполняются события прогресса.
                  После того как ответ получен полностью, значение поля меняется
                  на <code>null</code>.
                </p>
                <p>Работает только в Firefox.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="note">
          <strong>Note:</strong> Starting with Gecko 11.0
         , as well as WebKit build 528,
          these browsers no longer let you use the
          <code>responseType</code> attribute when performing synchronous
          requests. Attempting to do so throws an
          <code>NS_ERROR_DOM_INVALID_ACCESS_ERR</code> exception. This change
          has been proposed to the W3C for standardization.
        </div>
      </td>
    </tr>
    <tr id="responseXML">
      <td><code>responseXML</code> {{ReadOnlyInline()}}</td>
      <td><code>Document?</code></td>
      <td>
        <p>
          Ответ является объектом DOM
          <code
            ><a class="internal" href="/en/DOM/document" title="En/DOM/Document"
              >Document</a
            ></code
          >, или
          <code
            >null в случае если запрос окончился ошибкой, или ответ не получен
            полностью, или если ответ невозможно распарсить как </code
          >XML или HTML. Ответ парсится как если бы это был
          <code>text/xml</code> stream. Когда значение
          <code>responseType</code> равно <code>"document"</code> и запрос
          выполнен асинхронно, ответ парсится как <code>text/html</code> stream.
        </p>
        <div class="note">
          <strong>Примечание:</strong> Если сервер не работает с заголовком (не
          присылает в ответе) "Content-type: <code>text/xml"</code>, то можно
          использовать метод
          <code
            >overrideMimeType() для того чтобы парсить получаемый ответ как </code
          >XML.
        </div>
      </td>
    </tr>
    <tr id="status">
      <td><code>status</code> {{ReadOnlyInline()}}</td>
      <td><code>unsigned short</code></td>
      <td>
        Статус ответа на запрос. Равен кодам HTTP (200 - успешно, 404 не
        найдено, 301 - перенесено навсегда).
      </td>
    </tr>
    <tr id="statusText">
      <td><code>statusText</code> {{ReadOnlyInline()}}</td>
      <td><code>DOMString</code></td>
      <td>
        Строка статуса ответа. В отличи от поля <code>status</code>, эта строка
        включает в себя текст - ("<code>200 OK</code>", например).
      </td>
    </tr>
    <tr id="timeout">
      <td><code>timeout</code></td>
      <td><code>unsigned long</code></td>
      <td>
        <p>
          Время в миллисекундах, после которого запрос будет отменён. Значение 0
          (по умолчанию) значит что таймаута не будет. Никогда.
        </p>
        <div class="note">
          <strong>Примечание:</strong> Вы можете не использовать поле timeout
          для синхронных запросов из owning window.
        </div>
      </td>
    </tr>
    <tr id="ontimeout">
      <td><code>ontimeout</code></td>
      <td><code>Function</code></td>
      <td><p>Колбэк-функция которая будет вызвана в случае таймаута.</p></td>
    </tr>
    <tr id="upload">
      <td><code>upload</code></td>
      <td><code>XMLHttpRequestUpload</code></td>
      <td>
        Загрузка (upload process) может отслеживаться обработчиком события.
      </td>
    </tr>
    <tr id="withCredentials">
      <td><code>withCredentials</code></td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Определяет что cross-site запрос, согласно
          <code>Access-Control</code> должен использовать авторизацию (креды для
          логина и пароля) через куки, или заголовок с авторизационными данными.
          По умолчанию false.
        </p>
        <div class="note">
          <strong>Примечание:</strong> Не влияет на same-site запросы.
        </div>
        <div class="note">
          <strong>Примечание:</strong> Начиная с Gecko 11.0
         , Gecko больше не позволяет
          использовать поле <code>withCredentials</code> при выполнении
          синхронных запросов. Попытка выполнить это выбрасывает
          <code>NS_ERROR_DOM_INVALID_ACCESS_ERR</code> исключение.
        </div>
      </td>
    </tr>
  </tbody>
</table>

### Нестандартные свойства

<table class="standard-table">
  <tbody>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr id="channel">
      <td><code>channel</code> {{ReadOnlyInline()}}</td>
      <td><code>nsIChannel</code></td>
      <td>
        The channel used by the object when performing the request. This is
        <code>null</code> if the channel hasn't been created yet. In the case of
        a multi-part request, this is the initial channel, not the different
        parts in the multi-part request.
        <strong>Requires elevated privileges to access.</strong>
      </td>
    </tr>
    <tr id="mozAnon">
      <td><code>mozAnon</code> {{ReadOnlyInline()}}</td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Если значение равно true, запрос отправляется без куки и заголовков
          авторизации.
        </p>
      </td>
    </tr>
    <tr id="mozSystem">
      <td><code>mozSystem</code> {{ReadOnlyInline()}}</td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Если значение равно true, same origin policy не будут использоваться в
          запросе (кроссдоменный запрос не сработает).
        </p>
      </td>
    </tr>
    <tr id="mozBackgroundRequest">
      <td><code>mozBackgroundRequest</code></td>
      <td><code>boolean</code></td>
      <td>
        <div class="note">
          <p>
            Этот метод не может быть вызван из контекста страницы. Для того
            чтобы воспользоваться им нужны повышенные привелегии (elevated
            privileges).
          </p>
        </div>
        <p>
          Флаг, означающий что запрос от пользователя надо скрыть. Для
          пользователя не появится никаких сообщений и/или оповещений что запрос
          вообще был.
        </p>
        <p>
          В случае, если для продолжения запроса нужна какая-то аутентификация,
          и в других случаях было бы отображено оповещение, этот запрос просто
          не сработает.
        </p>
        <div class="note">
          <strong
            >Note: Этот флаг должен быть выставлен до вызова метода </strong
          ><code>open()</code>.
        </div>
      </td>
    </tr>
    <tr id="mozResponseArrayBuffer">
      <td>
        <code>mozResponseArrayBuffer</code>
        {{ReadOnlyInline()}}
      </td>
      <td>
        <a
          href="/en/JavaScript_typed_arrays/ArrayBuffer"
          title="en/JavaScript typed arrays/ArrayBuffer"
          ><code>ArrayBuffer</code></a
        >
      </td>
      <td>
        Массив, в который ляжет ответ от сервера, если ответ приходит в виде
        Javascript массива ([]). В случае, если запрос не удалось завершить, или
        если запрос не был отправлен, то это поле будет null.
      </td>
    </tr>
    <tr id="multipart">
      <td><code>multipart</code></td>
      <td><code>boolean</code></td>
      <td>
        <p>
          <strong
            >This Gecko-only feature was removed in Firefox/Gecko 22.</strong
          >
          Please use
          <a
            href="/ru/docs/Server-sent_events"
            title="/ru/docs/Server-sent_events"
            >Server-Sent Events</a
          >,
          <a href="/ru/docs/WebSockets" title="/ru/docs/WebSockets"
            >Web Sockets</a
          >, or <code>responseText</code> from progress events instead.
        </p>
        <p>
          Indicates whether or not the response is expected to be a stream of
          possibly multiple XML documents. If set to <code>true</code>, the
          content type of the initial response must be
          <code>multipart/x-mixed-replace</code> or an error will occur. All
          requests must be asynchronous.
        </p>
        <p>
          This enables support for server push; for each XML document that's
          written to this request, a new XML DOM document is created and the
          <code>onload</code> handler is called between documents.
        </p>
        <div class="note">
          <strong>Note:</strong> When this is set, the
          <code>onload</code> handler and other event handlers are not reset
          after the first XMLdocument is loaded, and the
          <code>onload</code> handler is called after each part of the response
          is received.
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Конструктор

### XMLHttpRequest()

Конструктор создаёт объект XMLHttpRequest. Он должен быть вызван перед обращением к любому методу класса.

Gecko/Firefox 16 добавляет нестандартные параметры в конструктор, для лучшего взаимодействия с режимом инкогнито, (смотри [Bug 692677](https://bugzilla.mozilla.org/show_bug.cgi?id=692677)). Установка флага `mozAnon` в значение `true` создаёт сущность [`AnonXMLHttpRequest()`](http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest) описанную в XMLHttpRequest спецификации, но не реализованную не в одном из браузеров (информация сентября 2012).

```
XMLHttpRequest (
  JSObject objParameters
);
```

##### Параметры (нестандартные)

- `objParameters`

  - : Вы можете использовать два флага:

    - `mozAnon`
      - : Boolean: Использование этого флага уберёт из запроса заголовки origin, и [user credentials](http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials). Кроме этого, куки не будут отправлены в запросе, если только они не будут добавлены к запросу специально, через метод setRequestHeader.
    - `mozSystem`
      - : Boolean: Если выставить этот флаг в значение `true` то это позволит делать cross-доменные запросы без необходимости получения специальных заголовков со стороны сервера (CORS). Для использования этого флага необходимо использовать дополнительный флаг* `mozAnon: true`, поскольку для отправки запроса на другой домен, нельзя использовать куки и креды пользователя. Этот флаг [работает только с привилегированными (одобренными) приложениями](https://bugzilla.mozilla.org/show_bug.cgi?id=692677#c68); он не сработает с произвольно загруженными страницами.*

## Методы

### abort()

Отменяет запрос, если он был отправлен.

### getAllResponseHeaders()

```
DOMString getAllResponseHeaders();
```

Возвращает все заголовки ответа как строку, или `null` если ответ не был получен. Для multypart запросов возвращает заголовки текущей части запроса, а не всего канала.

### getResponseHeader()

```
DOMString? getResponseHeader(DOMString header);
```

Возвращает значение указанного заголовка из полученного ответа, или `null` в случает если ответ не получен, или такого заголовка в ответе нет. Возвращаемая строка имеет кодировку UTF.

> **Примечание:** `Примечание: Если в ответе есть заголовки с одни названием, то значения этих заголовков будут объеденены в одну строку, разделённую запятой и пробелом.`

### open()

Инициализирует запрос. Этот метод может (и должен) быть вызван из JavaScript-кода; если необходимо вызвать запрос из нативного кода, то нужно использовать метод [`openRequest()`](</en/nsIXMLHttpRequest#openRequest()> "/en/XMLHttpRequest#openRequest()").

> **Примечание:** Вызов этого метода из активного запроса (если метод `open() или` `openRequest() уже были вызваны`) эквивалентно вызову метода `abort()`.

```
void open(
   DOMString method,
   DOMString url,
   optional boolean async,
   optional DOMString user,
   optional DOMString password
);
```

###### Параметры

- `method`
  - : HTTP метод отправки сообщения - "GET", "POST", "PUT", "DELETE", и проч.. Ignored for non-HTTP(S) URLs.
- `url`
  - : URL адрес, на который будет отправлено сообщение.
- `async`

  - : Необязательный boolean параметр, по умолчанию равный `true`. Определяет, будет ли запрос отправлен асинхронно. Если значение равно `false`, метод `send()` вернёт ответ в общем потоке работы приложения (иначе говоря, приложение зависнет на некоторое время), в противном случае, ответ может быть получен только при помощи определённых обработчиков событий. В случае, если используется отправка `multipart` запроса, то этот атрибут **должен** быть `true`, или будет выброшено исключение.

    > **Примечание:** Начиная с Gecko 30.0, синхронные запросы объявлены как deprecated, в силу того что все пользователи недовольны тем, что приложение "зависает".

- `user`
  - : Необязательный параметр, используется для аутентификации пользователя. По умолчанию, пустая строка.
- `password`
  - : Необязательный параметр, используется для аутентификации пользователя. По умолчанию пустая строка.

### overrideMimeType()

Переопределяет MIME тип, получаемый от сервера. Это может быть использовано, например, для того чтобы получить и распарсить данные в формате text/xml, даже, если сервер сообщает что это не так. Этот метод должен быть вызван перед вызовом метода `send()`.

```
void overrideMimeType(DOMString mimetype);
```

### send()

Отправляет запрос. Если запрос асинхронный (а по умолчанию это так), этот метод вернёт значение сразу после того как метод вызван.

> **Примечание:** в этом случае, в ответе не будет содержаться информации, которая пришла с сервера, поскольку она ещё не пришла. Для того чтобы получить эту информацию, нужно слушать события загрузки, или использовать promise.

Если запрос синхронный, то метод вернёт значение только после того, как придёт запрос от сервера.

> **Примечание:** все необходимые обработчики событий должны быть установлены перед вызовом `send()`.

> **Примечание:** Лучше не использовать параметр ArrayBuffer. Сейчас он не входит в спецификацию `XMLHttpRequest`. Вместо него можно использовать ArrayBufferView (смотри таблицу совместимости для различных версий).

```
void send();
void send(ArrayBuffer data);
void send(ArrayBufferView data);
void send(Blob data);
void send(Document data);
void send(DOMString? data);
void send(FormData data);
```

###### Примечания

Если тип _data_ - `Document`, то он будет сериализован перед отправкой. Firefox до версии 3 всегда отправляет такой запрос в кодировке UTF-8; [Firefox 3](/en/Firefox_3) отправляет данные в той кодировке, которая указаны в `body.xmlEncoding`, или UTF-8 если такой информации нет.

If it's an `nsIInputStream`, it must be compatible with `nsIUploadChannel`'s `setUploadStream()` method. In that case, a Content-Length header is added to the request, with its value obtained using `nsIInputStream`'s `available()` method. Any headers included at the top of the stream are treated as part of the message body. The stream's MIMEtype should be specified by setting the Content-Type header using the [`setRequestHeader()`](<#setRequestHeader()> "/en/XMLHttpRequest#setRequestHeader()") method prior to calling `send()`.

The best way to send binary content (like in files upload) is using an [ArrayBufferView](/ru/docs/JavaScript/Typed_arrays/ArrayBufferView) or [Blobs](/ru/docs/DOM/Blob) in conjuncton with the `send()` method. However, if you want to send a [stringifiable](/ru/docs/JavaScript/Reference/Global_Objects/JSON/stringify) raw data, use the [`sendAsBinary()`](</ru/docs/DOM/XMLHttpRequest#sendAsBinary()>) method instead, or the [`StringView`](/ru/docs/Web/JavaScript/Typed_arrays/StringView) Non native typed arrays superclass.

### setRequestHeader()

Устанавливает значение заголовка HTTP-запроса. Вы должны вызвать `setRequestHeader()` после [`open()`](#open), но перед `send()`. Если данный метод вызывается несколько раз с одним и тем же заголовком, все значения объединяются в один заголовок запроса.

```
void setRequestHeader(
   DOMString header,
   DOMString value
);
```

###### Параметры

- `header`
  - : Имя заголовка, значение которого будет установлено.
- `value`
  - : Значение, заданное как тело заголовка.

### Нестандартные методы

#### init()

Инициализирует объект для использования с C++ кодом.

> **Предупреждение:** **Внимание:** Этот метод **_нельзя_** вызывать из JavaScript.

```
[noscript] void init(
   in nsIPrincipal principal,
   in nsIScriptContext scriptContext,
   in nsPIDOMWindow ownerWindow
);
```

##### Параметры

- `principal`
  - : Принцип, используемый для запроса; не должен быть `null`.
- `scriptContext`
  - : Контекст скрипта, используемого для запроса; не должен быть `null`.
- `ownerWindow`
  - : Окно, связанное с запросом; может быть `null`.

#### openRequest()

Инициализирует запрос. Этот метод должен использоваться из собственного кода; для инициализации запроса из кода JavaScript вместо этого используйте используйте [`open()`](</en/nsIXMLHttpRequest#open()> "/en/XMLHttpRequest#open()") метод. Смотрите документацию для [`open()`](</en/nsIXMLHttpRequest#open()> "/en/XMLHttpRequest#open()").

#### sendAsBinary() {{ deprecated_inline(31) }}

Вариант метода `send()` который посылает бинарные данные.

> **Примечание:** Этот нестандартный метод считается устарелым по состоянию на Gecko 31, и со временем будет удалён. Взамен может использоваться стандарт метода `send(Blob data).`

```
void sendAsBinary(
   in DOMString body
);
```

Данный метод используется в сочетании с методом `readAsBinaryString,` который присутствует в [`FileReader`](/ru/docs/DOM/FileReader) API, и позволяет [прочитать и **загрузить** файл любого типа](/ru/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files) и превратить необработанные данные в [JSON-строку](/ru/docs/JavaScript/Reference/Global_Objects/JSON/stringify).

##### Параметры

- `body`
  - : Тело запроса в виде [DOMstring](/ru/docs/Web/API/DOMString). Эти данные конвертированы в строку с однобайтовыми символами с помощью усечения (удаления байта с высоким порядком в каждом символе).

##### `sendAsBinary()` polyfill

Since `sendAsBinary()` is an experimental feature, here is **a polyfill** for browsers that _don't_ support the `sendAsBinary()` method but support [typed arrays](/ru/docs/JavaScript/Typed_arrays).

```js
/*\
|*|
|*|  :: XMLHttpRequest.prototype.sendAsBinary() Polyfill ::
|*|
|*|  https://developer.mozilla.org/ru/docs/DOM/XMLHttpRequest#sendAsBinary()
|*|
\*/

if (!XMLHttpRequest.prototype.sendAsBinary) {
  XMLHttpRequest.prototype.sendAsBinary = function (sData) {
    var nBytes = sData.length,
      ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
    }
    /* send as ArrayBufferView...: */
    this.send(ui8Data);
    /* ...or as ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
  };
}
```

> **Примечание:** It's possible to build this polyfill putting two types of data as argument for `send()`: an [`ArrayBuffer`](/ru/docs/JavaScript/Typed_arrays/ArrayBuffer) (`ui8Data.buffer` – the commented code) or an [`ArrayBufferView`](/ru/docs/JavaScript/Typed_arrays/ArrayBufferView) (`ui8Data`, which is a [typed array of 8-bit unsigned integers](/ru/docs/JavaScript/Typed_arrays/Uint8Array) – uncommented code). However, on Google Chrome, when you try to send an `ArrayBuffer`, the following warning message will appear: `ArrayBuffer is deprecated in XMLHttpRequest.send(). Use ArrayBufferView instead.` Another possible approach to send binary data is the [`StringView`](/ru/docs/Web/JavaScript/Typed_arrays/StringView) Non native typed arrays superclass in conjunction with the [`send()`](<#send()>) method.

## Notes

- By default, Firefox 3 limits the number of `XMLHttpRequest` connections per server to 6 (previous versions limit this to 2 per server). Some interactive web sites may keep an `XMLHttpRequest` connection open, so opening multiple sessions to such sites may result in the browser hanging in such a way that the window no longer repaints and controls don't respond. This value can be changed by editing the `network.http.max-persistent-connections-per-server` preference in [`about:config`](/about:config).
- From Gecko 7.0 headers set by [setRequestHeader](#setrequestheader) are sent with the request when following a redirect. Previously these headers would not be sent.
- `XMLHttpRequest` is implemented in Gecko using the `nsIXMLHttpRequest`, `nsIXMLHttpRequestEventTarget`, and `nsIJSXMLHttpRequest` interfaces.
- When a request reaches its timeout value, a "timeout" event is raised.

#### Events

`onreadystatechange` as a property of the `XMLHttpRequest` instance is supported in all browsers.

Since then, a number of additional event handlers were implemented in various browsers (`onload`, `onerror`, `onprogress`, etc.). These are supported in Firefox. In particular, see `nsIXMLHttpRequestEventTarget` and [Using XMLHttpRequest](/en/DOM/XMLHttpRequest/Using_XMLHttpRequest).

More recent browsers, including Firefox, also support listening to the `XMLHttpRequest` events via standard [`addEventListener`](/en/DOM/element.addEventListener) APIs in addition to setting `on*` properties to a handler function.

## Permissions

When using System XHR via the `mozSystem` property, for example for Firefox OS apps, you need to be sure to add the `systemXHR` permission into your manifest file. System XHR can be used in privileged or certified apps.

```js
"permissions": {
    "systemXHR":{}
}
```

## Совместимость с браузерами

{{Compat}}

## See also

- MDN articles about XMLHttpRequest:

  - [AJAX - Getting Started](/en/AJAX/Getting_Started)
  - [Using XMLHttpRequest](/en/DOM/XMLHttpRequest/Using_XMLHttpRequest)
  - [HTML in XMLHttpRequest](/en/HTML_in_XMLHttpRequest)
  - [`FormData`](/en/DOM/XMLHttpRequest/FormData)

- XMLHttpRequest references from W3C and browser vendors:

  - [W3C: XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest1/) (base features)
  - [W3C: XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) (latest editor's draft with extensions to the base functionality, formerly XMLHttpRequest Level 2
  - [Microsoft documentation](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmobjxmlhttprequest.asp)
  - [Apple developers' reference](https://developer.apple.com/library/safari/#documentation/AppleApplications/Conceptual/SafariJSProgTopics/Articles/XHR.html)

- ["Using the XMLHttpRequest Object" (jibbering.com)](http://jibbering.com/2002/4/httprequest.html)
- [XMLHttpRequest - REST and the Rich User Experience](http://www.peej.co.uk/articles/rich-user-experience.html)
- [HTML5 Rocks - New Tricks in XMLHttpRequest2](http://www.html5rocks.com/en/tutorials/file/xhr2/)
- [Thread on the naming convention of `XMLHttpRequest`](http://programmers.stackexchange.com/questions/157375/why-does-xmlhttprequest-not-seem-to-follow-a-naming-convention)
- `Chrome scope availability` - how to access from JSM modules etc which do not have access to DOM

  - [Components.utils.importGlobalProperties](/ru/docs/Components.utils.importGlobalProperties)
  - [nsIXMLHttpRequest \[en-US\]](/ru/docs/nsIXMLHttpRequest)
