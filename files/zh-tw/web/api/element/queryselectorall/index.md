---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
---

{{APIRef("DOM")}}

## 總覽

Returns a non-live [`NodeList`](/zh-TW/docs/DOM/NodeList) of all elements descended from the element on which it is invoked that matches the specified group of CSS selectors. (The base element itself is not included, even if it matches.)

## 表達式

```plain
elementList = baseElement.querySelectorAll(selectors);
```

- `elementList`
  - : is a non-live node list `NodeList[elements]` of [element](/zh-TW/docs/DOM/element) objects.
- `baseElement`
  - : is an [element](/zh-TW/docs/DOM/element) object.
- `selectors`
  - : is a group of [selectors](/zh-TW/docs/Web/Guide/CSS/Getting_Started/Selectors) to match on or elements of the DOM.

## 範例

下例是從整個網頁的 body 中，取得所有 `p` 元素：

```js
let matches = document.body.querySelectorAll("p");
```

This example returns a list of `p` children elements under a container, whose parent is a `div` that has the class 'highlighted':

```js
let el = document.querySelector("#test"); //return an element with id='test'
let matches = el.querySelectorAll("div.highlighted > p"); // return a NodeList of p wrapped in a div with attribute class "highlighted"
```

下例是取得所有有 attribute `data-src` 的 `iframe` 元素：

```js
let matches = el.querySelectorAll("iframe[data-src]");
```

## 註

If the specified “selectors” are not found inside the DOM of the page, the method `queryselectorAll` returns an empty NodeList as specified below:

```js
> let x = document.body.querySelectorAll('.highlighted'); //case: if the class highlighted doesn't exist in any attribute "class" of the DOM the result is
> [] //empty NodeList
```

`querySelectorAll()` was introduced in the WebApps API.

The string argument pass to `querySelectorAll` must follow the CSS syntax. See {{domxref("document.querySelector")}} for a concrete example.

We could access a single item inside the NodeList in the following way:

```js
let x = document.body.querySelectorAll(".highlighted");
x.length; //return the size of x
x[i_item]; //where i_item has a value between 0 and x.length-1. The operator "[]" return as in an array the element at index "i_item"
```

We could iterate inside a NodeList with the construct `for(....) {...}` as in the following code:

```js
let x = document.body.querySelectorAll(".highlighted");
let index = 0;
for (index = 0; index < x.length; index++) {
  console.log(x[index]);
}
```

So in the above way, it is possible to manage and modify the behaviour of the page.

## Quirks

`querySelectorAll()` behaves differently than most common JavaScript DOM libraries, which might lead to unexpected results:

```html
<div class="outer">
  <div class="select">
    <div class="inner"></div>
  </div>
</div>
```

```js
let select = document.querySelector(".select");
let inner = select.querySelectorAll(".outer .inner");
inner.length; // 1, not 0!
```

In this example, when selecting `.outer .inner` in the context of `.select`, .`inner` is still found, even though `.outer` is not a descendant of the baseElement (`.select`).
`querySelectorAll()` only verifies that the last element in the selector is within the baseElement.

The [`:scope`](/zh-TW/docs/Web/CSS/:scope) pseudo-class restores the expected behavior, only matching selectors on descendants of the baseElement:

```js
let select = document.querySelector(".select");
let inner = select.querySelectorAll(":scope .outer .inner");
inner.length; // 0
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

\[1] Supported in Opera 15+ by enabling the "**Enable \<style scoped>**" or "**Enable experimental Web Platform features**" flag in `chrome://flags`.

## 參見

- [`document.querySelectorAll`](/zh-TW/docs/DOM/Document.querySelectorAll)
- [`document.querySelector`](/zh-TW/docs/DOM/Document.querySelector)
- [Code snippets for `querySelector`](/zh-TW/docs/Code_snippets/QuerySelector)
