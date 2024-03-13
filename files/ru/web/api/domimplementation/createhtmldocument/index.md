---
title: DOMImplementation.createHTMLDocument()
slug: Web/API/DOMImplementation/createHTMLDocument
---

{{ApiRef("DOM")}}

Метод **`DOMImplementation.createHTMLDocument()`** создаёт новый HTML {{ domxref("Document") }}.

## Синтаксис

```
const newDoc = document.implementation.createHTMLDocument(title)
```

### Параметры

- `title` {{optional_inline}} (except in IE)
  - : {{domxref("DOMString")}}, содержащий заголовок для создания нового HTML-документа.

## Пример

В этом примере создаётся новый HTML-документ и вставляется в {{HTMLElement("iframe")}} текущего документа.

Вот HTML для этого примера:

```html
<body>
  <p>
    Click <a href="javascript:makeDocument()">here</a> to create a new document
    and insert it below.
  </p>
  <iframe id="theFrame" src="about:blank" />
</body>
```

Реализация JavaScript `makeDocument()` выглядит следующим образом:

```js
function makeDocument() {
  let frame = document.getElementById("theFrame");

  let doc = document.implementation.createHTMLDocument("New Document");
  let p = doc.createElement("p");
  p.innerHTML = "This is a new paragraph.";

  try {
    doc.body.appendChild(p);
  } catch (e) {
    console.log(e);
  }

  // Copy the new HTML document into the frame

  let destDocument = frame.contentDocument;
  let srcNode = doc.documentElement;
  let newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}
```

Код в строках 4-12 обрабатывает создание нового HTML-документа и вставку в него некоторого содержимого. Строка 4 использует `createHTMLDocument()` для создания нового HTML-документа, чей {{ HTMLElement("title") }} это `"New Document"`. Строки 5 и 6 создают новый элемент абзаца с некоторым простым содержимым, а затем строки 8-12 обрабатывают вставку нового абзаца в новый документ.

Строка 16 вытягивает `contentDocument` фрейма; это документ, в который мы будем вводить новое содержимое. Следующие две строки обрабатывают импорт содержимого нашего нового документа в контекст нового документа. Наконец, строка 20 фактически заменяет содержимое фрейма содержимым нового документа.

[Смотреть Видео Примеры](/samples/domref/createHTMLDocument.html)

Возвращаемый документ предварительно сконструирован со следующим HTML-кодом:

```html
<!doctype html>
<html>
  <head>
    <title>title</title>
  </head>
  <body></body>
</html>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("DOMImplementation")}}, к которому он принадлежит.
