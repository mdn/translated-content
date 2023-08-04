---
title: Node.nodeName
slug: Web/API/Node/nodeName
---

{{APIRef("DOM")}}

Свойство **`Node.nodeName`** только для чтения, возвращающие имя текущего узла в виде строки.

Возвращаемое значение для различных типов узлов:

| Интерфейс                            | значение nodeName                                    |
| ------------------------------------ | ---------------------------------------------------- |
| {{domxref("Attr")}}                  | Значение {{domxref("Attr.name")}}                    |
| {{domxref("CDATASection")}}          | `"#cdata-section"`                                   |
| {{domxref("Comment")}}               | `"#comment"`                                         |
| {{domxref("Document")}}              | `"#document"`                                        |
| {{domxref("DocumentFragment")}}      | `"#document-fragment"`                               |
| {{domxref("DocumentType")}}          | Значение {{domxref("DocumentType.name")}}            |
| {{domxref("Element")}}               | Значение {{domxref("Element.tagName")}}              |
| {{domxref("Entity")}}                | имя сущности                                         |
| {{domxref("EntityReference")}}       | Имя сущности ссылки                                  |
| {{domxref("Notation")}}              | Название обозначения                                 |
| {{domxref("ProcessingInstruction")}} | Значение {{domxref("ProcessingInstruction.target")}} |
| {{domxref("Text")}}                  | `"#text"`                                            |

## Синтаксис

```
var str = node.nodeName;
```

## Пример

Учитывая следующую разметку:

```html
<div id="d1">hello world</div>
<input type="text" id="t" />
```

и следующий скрипт:

```js
var div1 = document.getElementById("d1");
var text_field = document.getElementById("t");

text_field.value = div1.nodeName;
```

В XHTML (или любых других форматов XML), значение `text_field` будет прочитано как "div". Тем не менее, в HTML, значение `text_field` будет прочитано как "DIV", потому что `nodeName` и `tagName` возвращают в верхнем регистре элементы HTML в DOM помеченном как HTML документ. Узнайте больше [деталей о чувствительности регистра nodeName в различных браузерах.](http://ejohn.org/blog/nodename-case-sensitivity/)

Обратите внимание, что свойство [`tagName`](/ru/docs/DOM/element.tagName) можно было бы использовать вместо него, поскольку `nodeName` имеет тоже значение что и `tagName` для элемента. Однако имейте в виду, что `nodeName` будет возвращать `#text` для текстово узла, в то время как `tagName` будет возвращать `undefined`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
