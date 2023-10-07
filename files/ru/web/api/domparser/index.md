---
title: DOMParser
slug: Web/API/DOMParser
---

{{APIRef("DOM")}}

`DOMParser` может парсить XML или HTML источник содержащийся в строке в DOM [Document](/ru/docs/DOM/document). Спецификация `DOMParser находится в` [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/).

Заметьте, что [XMLHttpRequest](/ru/docs/DOM/XMLHttpRequest) поддерживает парсинг XML и HTML из интернет ресурсов (по ссылке)

## Создание DOMParser

Для того чтобы создать `DOMParser` просто используйте `new DOMParser()`.

Для большей информации о создании `DOMParser` в расширениях Firefox, пожалуйста прочитайте документацию : [`nsIDOMParser`](/ru/docs/nsIDOMParser).

## Парсинг XML

Как только вы создали объект парсера, вы можете парсить XML из строки, используя метод `parseFromString`:

```js
var parser = new DOMParser();
var doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
```

### Обработка ошибок

Заметьте, если процесс парсинга не удастся , `DOMParser` теперь не выдаёт исключение, но вместо этого выдаёт документ ошибки (see {{Bug(45566)}}):

```xml
<parsererror xmlns="http://www.mozilla.org/newlayout/xml/parsererror.xml">
(Описание ошибки)
<sourcetext>(отрывок XML документа)</sourcetext>
</parsererror>
```

Ошибки синтаксического анализа также сообщаются в [консоль ошибок](/ru/docs/Error_Console), с идентификатором URI документа (см. Ниже) в качестве источника ошибки.

## Разбор SVG или HTML

`DOMParser` так же может быть использован для разбора SVG документа Gecko 10.0 или HTML документа Gecko 12.0. На выходе возможны 3 варианта, в зависимости от переданного MIME типа. Если MIME тип передан как `text/xml`, результирующий объект будет типа `XMLDocument`, если `image/svg+xml`, соответственно `SVGDocument`, а для MIME типа `text/html` - `HTMLDocument`.

```js
var parser = new DOMParser();
var doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
// возвращает Document, но не SVGDocument или HTMLDocument

parser = new DOMParser();
doc = parser.parseFromString(stringContainingXMLSource, "image/svg+xml");
// возвращает SVGDocument, который так же является экземпляром класса Document.

parser = new DOMParser();
doc = parser.parseFromString(stringContainingHTMLSource, "text/html");
// возвращает  HTMLDocument, который так же является экземпляром класса Document.
```

### DOMParser HTML для устаревших браузеров

```js
/*
 * DOMParser HTML extension
 * 2012-09-04
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * КОД РАСПРОСТРАНЯЕТСЯ БЕЗ КАКИХ ЛИБО ГАРАНТИЙ. ИСПОЛЬЗУЙТЕ НА СВОЙ СТРАХ И РИСК.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function (DOMParser) {
  "use strict";

  var proto = DOMParser.prototype,
    nativeParse = proto.parseFromString;
  // Firefox/Opera/IE throw errors on unsupported types
  try {
    // WebKit returns null on unsupported types
    if (new DOMParser().parseFromString("", "text/html")) {
      // text/html parsing is natively supported
      return;
    }
  } catch (ex) {}

  proto.parseFromString = function (markup, type) {
    if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
      var doc = document.implementation.createHTMLDocument("");
      if (markup.toLowerCase().indexOf("<!doctype") > -1) {
        doc.documentElement.innerHTML = markup;
      } else {
        doc.body.innerHTML = markup;
      }
      return doc;
    } else {
      return nativeParse.apply(this, arguments);
    }
  };
})(DOMParser);
```

### DOMParser from Chrome/JSM/XPCOM/Privileged Scope

Смотрите статью по ссылке: [nsIDOMParser](/ru/docs/nsIDOMParser)

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Анализ и сериализация XML](/ru/docs/Parsing_and_serializing_XML)
- [XMLHttpRequest](/ru/docs/DOM/XMLHttpRequest)
- [XMLSerializer](/ru/docs/XMLSerializer)
- [Parsing HTML to DOM](/en-US/Add-ons/Code_snippets/HTML_to_DOM)
