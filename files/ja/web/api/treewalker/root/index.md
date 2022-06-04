---
title: TreeWalker.root
slug: Web/API/TreeWalker/root
tags:
  - API
  - DOM
  - Property
  - TreeWalker
translation_of: Web/API/TreeWalker/root
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>TreeWalker.root</code></strong> は読み取り専用のプロパティで、 <code>TreeWalker</code> を作成したときに指定したルートノードを返します。</p>

<h2 id="Value" name="Value">値</h2>

{{domxref("Node")}} オブジェクトです。

<h2 id="Example" name="Example">例</h2>

```js
var treeWalker = document.createTreeWalker(
    document.body, // root として document.body を指定している
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
root = treeWalker.root; // document.body が返却される
```

<h2 id="Specifications" name="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat}}

<h2 id="See_also" name="See_also">関連情報</h2>

- {{domxref("TreeWalker")}}
