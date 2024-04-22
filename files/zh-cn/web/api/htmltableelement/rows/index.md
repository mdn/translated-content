---
title: HTMLTableElement.rows
slug: Web/API/HTMLTableElement/rows
---

{{APIRef("HTML DOM")}}表中所有行的

**`HTMLTableElement.rows`** 只读属性返回表中所有行的一个活的 {{domxref("HTMLCollection")}}。**`HTMLTableElement.rows`** 包括与之相关的{{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} 和 {{HTMLElement("tbody")}} 元素。

Although the property is read-only, the returned object is live and allows the modification of its content.

## Syntax

```plain
HTMLCollectionObject = table.rows
```

## Example

```js
myrows = mytable.rows;
firstRow = mytable.rows[0];
lastRow = mytable.rows[mytable.rows.length - 1];
```

## Specification

- [rows](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-6156016)
- [HTMLcollection](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506)
