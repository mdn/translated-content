---
title: "Node: getRootNode() メソッド"
slug: Web/API/Node/getRootNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`getRootNode()`** は {{domxref("Node")}} インターフェイスのメソッドで、そのコンテキストのオブジェクトのルート、利用できる場合はオプションでシャドウルートを含んだものを返します。

## 構文

```js-nolint
getRootNode()
getRootNode(options)
```

### 引数

- `options` {{optional_inline}}

  - : ルートノードを取得するためのオプションを設定するオブジェクトです。利用可能なオプションは次の通りです。

    - `composed`: 論理値で、シャドウルートを返すか (`false`、既定値)、またはシャドウルートを越えたルートノードを返すか (`true`) を示します。

### 返値

{{domxref('Node')}} を継承したオブジェクトです。これはどこで `getRootNode()` を呼び出したかによって異なる形になります。例えば、

- 標準のウェブページ内の要素に対して呼び出した場合は、ページ全体を表す {{domxref("HTMLDocument")}} オブジェクトを返します。
- シャドウ DOM の中の要素に対して呼び出した場合は、関連する {{domxref("ShadowRoot")}} オブジェクトを返します。

## 例

### 例 1

最初に、 HTML/document ノードの参照を返す単純な例です。

```js
const rootNode = node.getRootNode();
```

### 例 2

この例はもっと複雑で、通常のルートを返す場合と、シャドウルートを含むルートの違いを示します。

```html
<div class="parent">
  <div class="child"></div>
</div>
<div class="shadowHost">shadowHost</div>
<pre id="output">Output: </pre>
```

```js
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const shadowHost = document.querySelector(".shadowHost");
const output = document.getElementById("output");

output.textContent += `\nparent's root: ${parent.getRootNode().nodeName} \n`; // #document
output.textContent += `child's  root: ${child.getRootNode().nodeName} \n\n`; // #document

// ShadowRoot の生成
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
shadowRoot.innerHTML =
  '<style>div{background:#2bb8aa;}</style><div class="shadowChild">shadowChild</div>';
const shadowChild = shadowRoot.querySelector(".shadowChild");

// 合成の既定値は false
output.textContent += `shadowChild.getRootNode() === shadowRoot : ${
  shadowChild.getRootNode() === shadowRoot
} \n`; // true
output.textContent += `shadowChild.getRootNode({composed:false}) === shadowRoot : ${
  shadowChild.getRootNode({ composed: false }) === shadowRoot
} \n`; // true
output.textContent += `shadowChild.getRootNode({composed:true}).nodeName : ${
  shadowChild.getRootNode({ composed: true }).nodeName
} \n`; // #document
```

{{ EmbedLiveSample('Example 2', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
