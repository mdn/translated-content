---
title: Node.isEqualNode()
slug: Web/API/Node/isEqualNode
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.isEqualNode
translation_of: Web/API/Node/isEqualNode
---
{{APIRef("DOM")}}

**`isEqualNode()`** は {{domxref("Node")}} インターフェイスのメソッドで、 2 つのノードが等しいかどうかを検査します。
2 つのノードは、同じ型、定義特性（要素の場合、 ID や子ノードの数など）、その属性が一致している場合、等しいといえます。データで一致が求められる具体的な点は、ノードの型によって異なります。

## 構文

```js
isEqualNode(otherNode);
```

### 引数

- `otherNode`
  - : 比較対象となる {{domxref("Node")}} です。
    > **Note:** この引数は省略可能ではありませんが、 `null` に設定することはできます。

### 返値

論理値で、 2 つのノードが等しければ `true`、そうでなければ `false` です。
`otherNode` が `null` であった場合、 `isEqualNode()` は常に false を返します。

## 例

この例では、 3 つの {{HTMLElement("div")}} ブロックを作成しています。 1 つ目と 3 つ目は内容と属性が同じであり、 2 つ目は異なっています。このとき、`isEqualNode()` を使って JavaScript でノードを比較した結果は以下のようになります。

### HTML

```html
<div>最初の要素です。</div>
<div>2 番目の要素です。</div>
<div>最初の要素です。</div>

<p id="output"></p>
```

```css hidden
#output {
  width: 440px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  display: block;
}
```

### JavaScript

```js
let output = document.getElementById("output");
let divList  = document.getElementsByTagName("div");

output.innerHTML += "div 0 と div 0 は同じか: " + divList[0].isEqualNode(divList[0]) + "<br/>";
output.innerHTML += "div 0 と div 1 は同じか: " + divList[0].isEqualNode(divList[1]) + "<br/>";
output.innerHTML += "div 0 と div 2 は同じか: " + divList[0].isEqualNode(divList[2]) + "<br/>";
```

### 結果

{{ EmbedLiveSample('Example', "100%", "210") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.isSameNode()")}}
