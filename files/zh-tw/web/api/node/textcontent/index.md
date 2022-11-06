---
title: Node.textContent
slug: Web/API/Node/textContent
---

{{APIRef("DOM")}}

**`Node.textContent`** 屬性表示了節點或其後代的文字內容。

## 語法

```plain
var text = element.textContent;
element.textContent = "this is some sample text";
```

## 描述

- `textContent` returns `null` if the element is a [document](/zh-TW/docs/DOM/document), a document type, or a notation. To grab all of the text and CDATA data for the whole document, one could use `document.documentElement.textContent`.
- If the node is a CDATA section, a comment, a processing instruction, or a text node, `textContent` returns the text inside this node (the [nodeValue](/zh-TW/docs/DOM/Node.nodeValue)).
- For other node types, `textContent` returns the concatenation of the `textContent` attribute value of every child node, excluding comments and processing instruction nodes. This is an empty string if the node has no children.
- Setting this property on a node removes all of its children and replaces them with a single text node with the given value.

### 與 `innerText` 的差異

Internet Explorer introduced `element.innerText`. The intention is similar but with the following differences:

- While `textContent` gets the content of all elements, including {{HTMLElement("script")}} and {{HTMLElement("style")}} elements, the IE-specific property `innerText` does not.
- `innerText` is aware of style and will not return the text of hidden elements, whereas textContent will.
- As `innerText` is aware of CSS styling, it will trigger a reflow, whereas `textContent` will not.
- Unlike `textContent`, altering `innerText` in Internet Explorer (up to version 11 inclusive) not just removes child nodes from the element, but also _permanently destroys_ all descendant text nodes (so it is impossible to insert the nodes again into any other element or into the same element anymore).

### 與 `innerHTML` 的差異

`innerHTML` returns the HTML as its name indicates. Quite often, in order to retrieve or write text within an element, people use `innerHTML`. `textContent` should be used instead. Because the text is not parsed as HTML, it's likely to have better performance. Moreover, this avoids an XSS attack vector.

## 範例

```js
// Given the following HTML fragment:
//   <div id="divA">This is <span>some</span> text</div>

// Get the text content:
var text = document.getElementById("divA").textContent;
// |text| is set to "This is some text".

// Set the text content:
document.getElementById("divA").textContent = "This is some text";
// The HTML for divA is now:
//   <div id="divA">This is some text</div>
```

## Polyfill for IE8

```js
if (Object.defineProperty
  && Object.getOwnPropertyDescriptor
  && Object.getOwnPropertyDescriptor(Element.prototype, "textContent")
  && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) {
  (function() {
    var innerText = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
    Object.defineProperty(Element.prototype, "textContent",
     {
       get: function() {
         return innerText.get.call(this);
       },
       set: function(s) {
         return innerText.set.call(this, s);
       }
     }
   );
  })();
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [More on differences between `innerText` and `textContent`](http://perfectionkills.com/the-poor-misunderstood-innerText/) (blog post)
