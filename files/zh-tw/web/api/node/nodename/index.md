---
title: Node.nodeName
slug: Web/API/Node/nodeName
---

{{APIRef("DOM")}}

**`Node.nodeName`** 唯讀屬性會回傳目前節點名稱的字串。

不同類型節點之回傳值：

| 介面                                             | nodeName 值                                                           |
| ------------------------------------------------ | --------------------------------------------------------------------- |
| {{domxref("Attr")}}                         | The value of {{domxref("Attr.name")}}                         |
| {{domxref("CDATASection")}}             | `"#cdata-section"`                                                    |
| {{domxref("Comment")}}                     | `"#comment"`                                                          |
| {{domxref("Document")}}                 | `"#document"`                                                         |
| {{domxref("DocumentFragment")}}         | `"#document-fragment"`                                                |
| {{domxref("DocumentType")}}             | The value of {{domxref("DocumentType.name")}}             |
| {{domxref("Element")}}                     | The value of {{domxref("Element.tagName")}}                 |
| {{domxref("Entity")}}                     | The entity name                                                       |
| {{domxref("EntityReference")}}         | The name of entity reference                                          |
| {{domxref("Notation")}}                 | The notation name                                                     |
| {{domxref("ProcessingInstruction")}} | The value of {{domxref("ProcessingInstruction.target")}} |
| {{domxref("Text")}}                         | `"#text"`                                                             |

## 語法

```plain
var str = node.nodeName;
```

## 範例

Given the following markup:

```html
<div id="d1">hello world</div>
<input type="text" id="t"/>
```

and the following script:

```js
var div1 = document.getElementById("d1");
var text_field = document.getElementById("t");

text_field.value = div1.nodeName;
```

In XHTML (or any other XML format), `text_field`'s value would read "div". However, in HTML, `text_field`'s value would read "DIV", because `nodeName` and `tagName` return in upper case on HTML elements in DOMs flagged as HTML documents. Read more [details on nodeName case sensitivity in different browsers](http://ejohn.org/blog/nodename-case-sensitivity/).

Note that [`tagName`](/zh-TW/docs/DOM/element.tagName) property could have been used instead, since `nodeName` has the same value as `tagName` for an element. Bear in mind, however, that `nodeName` will return `#text` for text nodes while `tagName` will return `undefined`.

## 規範

{{Specifications}}
