---
title: Document.createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
---

{{ApiRef("DOM")}}

建立新的 {{domxref("DocumentFragment")}}.

## 語法

```plain
var fragment = document.createDocumentFragment();
```

`fragment` 是 {{domxref("DocumentFragment")}} 的一個參考物件。

## 描述

`DocumentFragment`s 是 DOM 節點(Nodes)。他們不會成為 DOM 主幹的一部份。最常見的作法是先建立文本片段 (document fragment)，然後將元素 (element) 加入文本片段中，最後再將文本片段加入 DOM 樹中。在 DOM 樹中，文本片段將會被他所有的子元素取代。

正因為文本片段是存在**記憶體**中，並且不是 DOM 主幹的一部分，增加子元素並不會導致網頁[重刷](https://developers.google.com/speed/docs/insights/browser-reflow)（重新計算元素的位置和幾何）。因此採用文本片段通常會有[比較好的效能表現](https://johnresig.com/blog/dom-documentfragments/)。

## 舉例

這個例子中用清單來呈現主流瀏覽器。

### HTML

```html
<ul id="ul"></ul>
```

### JavaScript

```js
var element = document.getElementById("ul"); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ["Firefox", "Chrome", "Opera", "Safari", "Internet Explorer"];

browsers.forEach(function (browser) {
  var li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

### 結果

在 [jsfiddle](https://jsfiddle.net/a0nn690f/) 上看範例結果。

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 更多參考

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}
