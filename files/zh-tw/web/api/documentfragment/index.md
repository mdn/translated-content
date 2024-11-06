---
title: DocumentFragment
slug: Web/API/DocumentFragment
---

{{ ApiRef("DOM") }}

**`DocumentFragment`** 介面表示了一個沒有父節點的最小化文件物件。`DocumentFragment` 被當作一種輕量化的 {{domxref("Document")}}，用如同標準文件一般的方式保存片段的文件結構（由節點組成）。關鍵的區別在於文件片段不是真實的 DOM 結構，文件片段的變動並不會影響目前的網頁文件，也不會導致回流（{{Glossary("reflow")}}）或引起任何影響效能的情況發生。

一般的用法是建立一個 `DocumentFragment` 物件，在此物件中組織一個 DOM 的子樹。再使用 {{domxref("Node")}} 介面定義的方法，如 {{domxref("Node.appendChild", "appendChild()")}} 或 {{domxref("Node.insertBefore", "insertBefore()")}} 將這個文件片段加入或插入目前頁面的 DOM 當中。執行這個將文件片段中的節點置入 DOM 的動作之後，會留下一個空的 `DocumentFragment` 物件（只會插入物件中的節點，`DocumentFragment` 物件本身不會被插入）。由於文件片段中的所有節點是一次性的被插入目前頁面文件當中，故回流及頁面渲染只會被觸發一次，所以可用插入 `DocumentFragment` 物件的方式取代傳統分別插入多個節點至 DOM（將節點一個一個分次進行插入）的操作方式。

此介面也適合與 Web components 搭配使用：{{HTMLElement("template")}} 元素在其 {{domxref("HTMLTemplateElement.content")}} 屬性中便包含了一個 `DocumentFragment` 物件。

可使用 {{domxref("document.createDocumentFragment()")}} 方法或 `DocumentFragment` 的建構式來建立一個空的 `DocumentFragment` 物件。

## 屬性

_This interface has no specific properties, but inherits those of its parent,_ _{{domxref("Node")}}, and implements those of the {{domxref("ParentNode")}} interface._

- {{ domxref("ParentNode.children") }} {{readonlyInline}}{{experimental_inline}}
  - : Returns a live {{domxref("HTMLCollection")}} containing all objects of type {{domxref("Element")}} that are children of the `DocumentFragment` object.
- {{ domxref("ParentNode.firstElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Returns the {{domxref("Element")}} that is the first child of the `DocumentFragment` object, or `null` if there is none.
- {{ domxref("ParentNode.lastElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Returns the {{domxref("Element")}} that is the last child of the `DocumentFragment` object, or `null` if there is none.
- {{ domxref("ParentNode.childElementCount") }} {{readonlyInline}}{{experimental_inline}}
  - : Returns an `unsigned long` giving the amount of children that the `DocumentFragment` has.

## 建構式

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }} {{experimental_inline}}
  - : Returns an empty `DocumentFragment` object.

## 方法

_This interface inherits the methods of its parent, {{domxref("Node")}}, and implements those of the {{domxref("ParentNode")}} interface._

- {{domxref("DocumentFragment.find()")}} {{experimental_inline}}
  - : Returns the first matching {{domxref("Element")}} in the tree of the `DocumentFragment`.
- {{domxref("DocumentFragment.findAll()")}} {{experimental_inline}}
  - : Returns a {{domxref("NodeList")}} of matching {{domxref("Element")}} in the tree of the `DocumentFragment`.
- {{domxref("DocumentFragment.querySelector()")}}
  - : Returns the first {{domxref("Element")}} node within the `DocumentFragment`, in document order, that matches the specified selectors.
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : Returns a {{domxref("NodeList")}} of all the {{domxref("Element")}} nodes within the `DocumentFragment` that match the specified selectors.
- {{domxref("DocumentFragment.getElementById()")}}
  - : Returns the first {{domxref("Element")}} node within the `DocumentFragment`, in document order, that matches the specified ID.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [The DOM interfaces index.](/docs/DOM/DOM_Reference)
