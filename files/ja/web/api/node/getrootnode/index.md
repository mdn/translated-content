---
title: Node.getRootNode()
slug: Web/API/Node/getRootNode
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.getRootNode
translation_of: Web/API/Node/getRootNode
---
{{APIRef("DOM")}}

**`getRootNode()`** は {{domxref("Node")}} インターフェイスのメソッドで、そのコンテキストのオブジェクトのルート、利用できる場合はオプションでシャドウルートを含んだものを返します。

## 構文

```js
getRootNode();
getRootNode(options);
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

最初に、 HTML/document ノードの参照を返す単純な例です。

```js
rootNode = node.getRootNode();
```

この例はもっと複雑で、通常のルートを返す場合と、シャドウルートを含むルートの違いを示します。 ([ソースコード全体](https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html)を見てください。)

```html
<!-- source: https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html -->
<div class="js-parent">
  <div class="js-child"></div>
</div>
<div class="js-shadowHost"></div>
<script>
  // Chrome 54 以降, Opera 41 以降で動作

  const parent = document.querySelector('.js-parent'),
      child = document.querySelector('.js-child'),
      shadowHost = document.querySelector('.js-shadowHost');

  console.log(parent.getRootNode().nodeName); // #document
  console.log(child.getRootNode().nodeName); // #document

  // ShadowRoot の生成
  const shadowRoot = shadowHost.attachShadow({mode:'open'});
  shadowRoot.innerHTML = '<style>div{background:#2bb8aa;}</style>'
      + '<div class="js-shadowChild">content</div>';
  const shadowChild = shadowRoot.querySelector('.js-shadowChild');

  // 合成の既定値は false
  console.log(shadowChild.getRootNode() === shadowRoot); // true
  console.log(shadowChild.getRootNode({composed:false}) === shadowRoot); // true
  console.log(shadowChild.getRootNode({composed:true}).nodeName); // #document
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
