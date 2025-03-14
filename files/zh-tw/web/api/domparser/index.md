---
title: DOMParser
slug: Web/API/DOMParser
---

{{APIRef("DOM")}}{{SeeCompatTable}}

`DOMParser` 可以將XML或是HTML格式的字串轉成 DOM [文件](/zh-TW/docs/Web/API/Document)。`DOMParser`的規格請參閱 [DOM 解譯與串流化](https://w3c.github.io/DOM-Parsing/)。

請注意[XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest)解譯的是 URL 連結內容裡的 XML 與 HTML 文件。

## 產生一個 DOMParser

「`new DOMParser()`」可產生 DOMParser。

關於如何在 Firefox 外掛程式中產生 DOMParser，請參考 `nsIDOMParser` 文件

## 解譯 XML

產生解譯物件後，請呼叫`parseFromString方法函式來將XML字串轉換成DOM物件`:

```js
var parser = new DOMParser();
var doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
```

### 錯誤處理

請注意如果解譯過程出錯,目前的 `DOMParser` 不會丟出異常物件（exception），但是會回傳一個錯誤文件（請看 [Firefox bug 45566](https://bugzil.la/45566)）：

```xml
<parsererror xmlns="http://www.mozilla.org/newlayout/xml/parsererror.xml">
(error description)
<sourcetext>(a snippet of the source XML)</sourcetext>
</parsererror>
```

解譯錯誤也會記錄在錯誤終端機中（[Error Console](/zh-TW/docs/Error_Console)）, 紀錄裡頭的文件 URI (如下) 則為錯誤來源.

## 解譯 SVG 或 HTML 文件

`DOMParser` 也可以用來解譯 SVG 文件或是 HTML 文件。可以依 MIME 格式，輸出三種不同格式. 如果 MIME 格式是 `text/xml`,輸出的格式為 `XMLDocument`, 如果 MIME 格式是 `image/svg+xml`, 輸出格式為 `SVGDocument,` 如果 MIME 格式是 `text/html`, 輸出格式則為 `HTMLDocument`.

```js
var parser = new DOMParser();
var doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
// returns a Document, but not a SVGDocument nor a HTMLDocument

parser = new DOMParser();
doc = parser.parseFromString(stringContainingXMLSource, "image/svg+xml");
// returns a SVGDocument, which also is a Document.

parser = new DOMParser();
doc = parser.parseFromString(stringContainingHTMLSource, "text/html");
// returns a HTMLDocument, which also is a Document.
```

### 其他瀏覽器可用的 DOMParser HTML 外掛程式

```js
/*
 * DOMParser HTML extension
 * 2012-09-04
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
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

See article here: [nsIDOMParser](/zh-TW/docs/nsIDOMParser)

## 瀏覽器相容性

{{Compat}}

## 參考資料

- [Parsing and serializing XML](/zh-TW/docs/Web/XML/Parsing_and_serializing_XML)
- [XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest)
- [XMLSerializer](/zh-TW/docs/Web/API/XMLSerializer)
- [Parsing HTML to DOM](/zh-TW/docs/Mozilla/Add-ons/Code_snippets/HTML_to_DOM)
