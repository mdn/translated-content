---
title: XMLHttpRequest.response
slug: Web/API/XMLHttpRequest/response
---

{{APIRef('XMLHttpRequest')}}

Свойство `XMLHttpRequest` **`response`** возвращает содержимое тела ответа в виде `ArrayBuffer`, `Blob`, `Document`, `JavaScript Object` или `DOMString` в зависимости от значения свойства `responseType`.

## Синтаксис

```
var body = XMLHttpRequest.response;
```

### Value

Соответствующий объект, основанный на значении `responseType`. Вы можете попытаться запросить данные в определённом формате, установив значение `responseType` после вызова `open()` для инициализации запроса, но перед вызовом `send()` для отправки запроса на сервер.

Значение равно `null`, если запрос ещё не завершён или был неудачным, за исключением того, что при чтении текстовых данных с использованием `responseType "text"` или пустой строки (`""`), ответ может содержать ответ до тех пор, пока запрос все ещё находится в состоянии `LOADING readyState (3)`.

Типы ответов описаны ниже.

| Значение                    | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `""`                        | Пустая строка `responseType` обрабатывается так же, как `"text"`, тип по умолчанию (следовательно, как [`DOMString`](/ru/docs/Web/API/DOMString).)                                                                                                                                                                                                                                                                                                                                                                      |
| `"arraybuffer"`             | [`response`](/ru/docs/Web/API/XMLHttpRequest/response) в JavaScript [`ArrayBuffer`](/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) содержит двоичные данные.                                                                                                                                                                                                                                                                                                                                             |
| `"blob"`                    | `response` в [`Blob`](/ru/docs/Web/API/Blob) object содержит двоичные данные.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"document"`                | `response` является [HTML](/ru/docs/Glossary/HTML) [`Document`](/ru/docs/Web/API/Document) или [XML](/ru/docs/Glossary/XML) [`XMLDocument`](/ru/docs/Web/API/XMLDocument), в зависимости от ситуации, основанный на MIME-типе полученных данных. См. [HTML in XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) , чтобы узнать больше об использовании XHR для извлечения содержимого HTML.                                                                                                       |
| `"json"`                    | `response` является JavaScript object, созданный путём анализа содержимого полученных данных как [JSON](/ru/docs/Glossary/JSON).                                                                                                                                                                                                                                                                                                                                                                                        |
| `"text"`                    | `response` является текстом в [`DOMString`](/ru/docs/Web/API/DOMString) object.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `"moz-chunked-arraybuffer"` | Похож на `"arraybuffer"`, но данные принимаются в потоке. При использовании этого типа ответа значение в `response` доступно только в обработчике для события [`progress`](/ru/docs/Web/Events/progress) и содержит только данные, полученные с момента последнего события `progress`, а не совокупные данные, полученные с момента отправки запроса.Доступ к `response` во время события `progress` возвращает полученные данные. За пределами обработчика событий `progress` значение `response` всегда равно `null`. |
| `"ms-stream"`               | `response` является частью потоковой загрузки; этот тип ответа разрешён только для запросов на загрузку и поддерживается только Internet Explorer.                                                                                                                                                                                                                                                                                                                                                                      |

## Пример

В этом примере представлена функция `load()`, которая загружает и обрабатывает страницу с сервера. Он работает путём создания объекта [`XMLHttpRequest`](/ru/docs/Web/API/XMLHttpRequest) и создания обработчика события с событием `readystatechange`, чтобы при изменении `readyState` на `DONE (4)` `response` получался и передавался в колбэк-функцию, предоставляемую `load()`.

Содержимое обрабатывается как необработанные текстовые данные (поскольку здесь ничто не переопределяет [`responseType`](/ru/docs/Web/API/XMLHttpRequest/responseType) по умолчанию).

```js
var url = "somePage.html"; //A local page

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  };

  xhr.open("GET", url, true);
  xhr.send("");
}
```

## Спецификации

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- [Using XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- Getting text and HTML/XML data: {{domxref("XMLHttpRequest.responseText")}} and {{domxref("XMLHttpRequest.responseXML")}}
