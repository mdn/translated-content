---
title: XMLHttpRequest.response
slug: Web/API/XMLHttpRequest/response
tags:
  - AJAX
  - Response
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest/response
---
{{APIRef('XMLHttpRequest')}}Свойство `XMLHttpRequest `**`response`** возвращает содержимое тела ответа в виде `ArrayBuffer`, `Blob`, `Document`, `JavaScript Object` или `DOMString `в зависимости от значения свойства `responseType`.

## Синтаксис

```
var body = XMLHttpRequest.response;
```

### Value

Соответствующий объект, основанный на значении `responseType`. Вы можете попытаться запросить данные в определённом формате, установив значение `responseType` после вызова `open()` для инициализации запроса, но перед вызовом `send()` для отправки запроса на сервер.

Значение равно `null`, если запрос ещё не завершён или был неудачным, за исключением того, что при чтении текстовых данных с использованием `responseType "text"` или пустой строки (`""`), ответ может содержать ответ до тех пор, пока запрос все ещё находится в состоянии `LOADING readyState (3)`.

Типы ответов описаны ниже.

| Значение                    | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `""`                        | Пустая строка `responseType` обрабатывается так же, как `"text"`, тип по умолчанию (следовательно, как [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.").)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `"arraybuffer"`             | [`response`](/ru/docs/Web/API/XMLHttpRequest/response "The XMLHttpRequest response property returns the response's body content as an ArrayBuffer, Blob, Document, JavaScript Object, or DOMString, depending on the value of the request's responseType property.") в JavaScript [`ArrayBuffer`](/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.") содержит двоичные данные.                                                                                                                                                                                                                                                                                                                                                                                                |
| `"blob"`                    | `response` в [`Blob`](/ru/docs/Web/API/Blob "A Blob object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system.") object содержит двоичные данные.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `"document"`                | `response` является [HTML](/ru/docs/Glossary/HTML "HTML: HTML (HyperText Markup Language) is a descriptive language that specifies webpage structure.") [`Document`](/ru/docs/Web/API/Document "The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.HTMLElement") или [XML](/ru/docs/Glossary/XML "XML: eXtensible Markup Language (XML) is a generic markup language specified by the W3C. The information technology (IT) industry uses many languages based on XML as data-description languages.") [`XMLDocument`](/ru/docs/Web/API/XMLDocument "The XMLDocument interface represent an XML document. It inherits from the generic Document and does not add any specific methods or properties to it: nevertheless, several algorithms behave differently with the two types of documents."), в зависимости от ситуации, основанный на MIME-типе полученных данных. См. [HTML in XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) , чтобы узнать больше об использовании XHR для извлечения содержимого HTML. |
| `"json"`                    | `response` является JavaScript object, созданный путём анализа содержимого полученных данных как [JSON](/ru/docs/Glossary/JSON "JSON: JavaScript Object Notation (JSON) is a data-interchange format.  Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, JSON is especially useful for JavaScript-based apps, including websites and browser extensions.").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `"text"`                    | `response` является текстом в [`DOMString`](/ru/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `"moz-chunked-arraybuffer"` | Похож на `"arraybuffer"`, но данные принимаются в потоке. При использовании этого типа ответа значение в `response` доступно только в обработчике для события [`progress`](https://developer.mozilla.org/en-US/docs/Web/Events/progress "/en-US/docs/Web/Events/progress") и содержит только данные, полученные с момента последнего события `progress`, а не совокупные данные, полученные с момента отправки запроса.Доступ к `response` во время события `progress` возвращает полученные данные. За пределами обработчика событий `progress` значение `response` всегда равно `null`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `"ms-stream"`               | `response` является частью потоковой загрузки; этот тип ответа разрешён только для запросов на загрузку и поддерживается только Internet Explorer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Пример

В этом примере представлена функция `load()`, которая загружает и обрабатывает страницу с сервера. Он работает путём создания объекта [`XMLHttpRequest`](/ru/docs/Web/API/XMLHttpRequest "Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.") и создания обработчика события с событием `readystatechange`, чтобы при изменении `readyState `на `DONE (4)` `response` получался и передавался в колбэк-функцию, предоставляемую `load()`.

Содержимое обрабатывается как необработанные текстовые данные (поскольку здесь ничто не переопределяет [`responseType`](/ru/docs/Web/API/XMLHttpRequest/responseType "The XMLHttpRequest property responseType is an enumerated string value specifying the type of data contained in the response.") по умолчанию).

```js
var url = 'somePage.html'; //A local page

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
```

## Спецификации

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- [Using XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- Getting text and HTML/XML data: {{domxref("XMLHttpRequest.responseText")}} and {{domxref("XMLHttpRequest.responseXML")}}
