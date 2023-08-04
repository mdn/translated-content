---
title: HTMLCollection
slug: Web/API/HTMLCollection
---

{{APIRef("HTML DOM")}}

**`HTMLCollection`** 介面表示了一種成員為 {{domxref("Element")}} 物件的通用集合（如 [arguments](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments) 一般的類陣列，成員順序同元素在文件中的順序），並提供了可用來選取集合成員的方法與屬性。

> **備註：** This interface is called `HTMLCollection` for historical reasons (before DOM4, collections implementing this interface could only have HTML elements as their items).

`HTMLCollection` 物件對 HTML DOM 而言具有即時性（live），如果底層的文件（`document` 物件）發生改變，`HTMLCollection` 物件會自動更新至最新的狀態。

## 屬性

- {{domxref("HTMLCollection.length")}} {{readonlyInline}}
  - : Returns the number of items in the collection.

## 方法

- {{domxref("HTMLCollection.item()")}}
  - : Returns the specific node at the given zero-based `index` into the list. Returns `null` if the `index` is out of range.
- {{domxref("HTMLCollection.namedItem()")}}
  - : Returns the specific node whose ID or, as a fallback, name matches the string specified by `name`. Matching by name is only done as a last resort, only in HTML, and only if the referenced element supports the `name` attribute. Returns `null` if no node exists by the given name.

## Usage in JavaScript

`HTMLCollection also` exposes its members directly as properties by both name and index. HTML IDs may contain : and . as valid characters, which would necessitate using bracket notation for property access. Currently HTMLCollections does not recognize purely numeric IDs, which would cause conflict with the array-style access, though HTML5 does permit these.

For example, assuming there is one `<form>` element in the document and its `id` is `"myForm"`:

```js
var elem1, elem2;

// document.forms is an HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // shows: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // shows: "true"

elem1 = document.forms["named.item.with.periods"];
```

## 瀏覽器相容性

Different browsers behave differently when there are more than one elements matching the string used as an index (or `namedItem`'s argument). Firefox 8 behaves as specified in DOM 2 and DOM4, returning the first matching element. WebKit browsers and Internet Explorer in this case return another `HTMLCollection` and Opera returns a {{domxref("NodeList")}} of all matching elements.

## 規範

{{Specifications}}

## 參見

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}
