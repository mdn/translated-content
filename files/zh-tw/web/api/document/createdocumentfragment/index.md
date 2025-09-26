---
title: Document：createDocumentFragment() 方法
slug: Web/API/Document/createDocumentFragment
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("DOM WHATWG")}}

建立一個新的空的 {{domxref("DocumentFragment")}}，可以將 DOM 節點新增到其中以建立畫面外 DOM 樹。

## 語法

```js-nolint
createDocumentFragment()
```

### 參數

無。

### 回傳值

一個新建立的、空的 {{domxref("DocumentFragment")}} 物件，準備好可以插入節點。

## 使用說明

`DocumentFragment` 是一種 DOM {{domxref("Node")}} 物件，永遠不會成為主要 DOM 樹的一部分。一般的使用場景是先建立文件片段，將元素附加到文件片段中，然後再將文件片段附加到 DOM 樹。在 DOM 樹中，文件片段會被其所有子元素取代。

由於文件片段*在記憶體中*且不屬於主 DOM 樹的一部分，在某些舊版引擎中使用文件片段可能會帶來[更好的效能](https://johnresig.com/blog/dom-documentfragments/)。

你也可以使用 `DocumentFragment` 建構子來建立新的片段：

```js
const fragment = new DocumentFragment();
```

## 範例

此範例在一個 `DocumentFragment` 中建立主要 Web 瀏覽器的清單，然後將新的 DOM 子樹新增到文件中以顯示。

### HTML

```html
<ul id="ul"></ul>
```

### JavaScript

```js
const element = document.getElementById("ul"); // 假設 ul 存在
const fragment = document.createDocumentFragment();
const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

browsers.forEach((browser) => {
  const li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

### 結果

{{EmbedLiveSample("範例", 600, 140)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}
