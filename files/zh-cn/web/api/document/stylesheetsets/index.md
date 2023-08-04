---
title: Document.styleSheetSets
slug: Web/API/Document/styleSheetSets
---

{{APIRef("DOM")}}

返回一个所有当前可用样式表集的实时列表。

## Syntax

```plain
sets = document.styleSheetSets
```

在返回时，sets 是一个可用的样式表集的列表。

## Example

Given an {{HTMLElement("ul")}} (list) element with the ID "sheetList", you can populate it with the names of all the available style sheet sets with code like this:

```js
var list = document.getElementById("sheetList");
var sheets = document.styleSheetSets;

list.innerHTML = "";

for (var i = 0; i < sheets.length; i++) {
  var item = document.createElement("li");

  item.innerHTML = sheets[i];
  list.appendChild(item);
}
```

## Notes

The list of available style sheet sets is constructed by enumerating all the style sheets available for the document, in the order in which they're listed in the {{domxref("document.styleSheets")}} attribute, adding the `title` of each style sheet that has a title to the list. Duplicates are dropped from the list (using a case-sensitive comparison).

## Specifications

- [HTML5: Alternate Style Sheets](http://www.whatwg.org/specs/web-apps/current-work/#alternate-style-sheets)

## See also

- {{domxref("Stylesheet")}}
- {{domxref("document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
