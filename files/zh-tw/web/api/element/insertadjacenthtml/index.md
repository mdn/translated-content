---
title: Element.insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
---

{{APIRef("DOM")}}

`insertAdjacentHTML()` 把傳入的字串解析成 HTML 或 XML，並把該節點插入到 DOM 樹指定的位置。它不會重新解析被使用的元素，因此他不會破壞該元素裡面原有的元素。這避免了序列化的複雜步驟，使得它比直接操作 `innerHTML` 快上許多。

## Syntax

```js
element.insertAdjacentHTML(position, text);
```

### Parameters

- position
  - : A {{domxref("DOMString")}} representing the position relative to the `element`; must be one of the following strings: `'beforebegin'`: 在 `element` 之前。
    - `'afterbegin'`: 在 `element` 裡面，第一個子元素之前。
    - `'beforeend'`: 在 `element` 裡面，最後一個子元素之後。
    - `'afterend'`: 在 `element` 之後。
- text
  - : `text` 是即將被解析並插入到 DOM 樹裡的字串。

### Visualization of position names

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> **備註：** `beforebegin` 和 `afterend` 只在該節點位於 DOM 樹內、並且有母元素時有效。

## Example

```js
// <div id="one">one</div>
var d1 = document.getElementById("one");
d1.insertAdjacentHTML("afterend", '<div id="two">two</div>');

// At this point, the new structure is:
// <div id="one">one</div><div id="two">two</div>
```

## Notes

### Security Considerations

When inserting HTML into a page by using `insertAdjacentHTML` be careful not to use user input that hasn't been escaped.

It is not recommended you use `insertAdjacentHTML` when inserting plain text; instead, use the [`Node.textContent`](/zh-TW/docs/Web/API/Node/textContent) property or [`Element.insertAdjacentText()`](/zh-TW/docs/Web/API/Element/insertAdjacentText) method. This doesn't interpret the passed content as HTML, but instead inserts it as raw text.

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("XMLSerializer")}}: Construct a DOM representation of XML text
- [hacks.mozilla.org guest post](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) by Henri Sivonen including benchmark showing that insertAdjacentHTML can be way faster in some cases.
