---
title: Node.isSameNode()
slug: Web/API/Node/isSameNode
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.isSameNode
translation_of: Web/API/Node/isSameNode
---
{{APIRef("DOM")}}

**`isSameNode()`** は {{domxref("Node")}} インターフェイスのメソッドで、 [`===` 厳密等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)の古い別名です。
すなわち、 2 つのノードが全く同じであるかどうか（言い換えれば、同じオブジェクトを指しているかどうか）を検査します。

> **Note:** `isSameNode()` を使用する必要はありません。 `===` 厳密等価演算子を使用してください。

## 構文

```js
isSameNode(otherNode);
```

### 引数

- `otherNode`
  - : 検査対象となる {{domxref("Node")}} です。
    > **Note:** この引数は省略可能ではありませんが、 `null` に設定することはできます。

### 返値

論理値で、両ノードが厳密に等しい場合は `true`、そうでなければ `false` です。

## 例

この例では、 3 つの {{HTMLElement("div")}} ブロックを作成しています。 1 つ目と 3 つ目は内容と属性が同じであり、 2 つ目は異なっています。このとき、`isSameNode()` を使って JavaScript でノードを比較した結果は以下のようになります。

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

output.innerHTML += "div 0 と div 0 は同じか: " + divList[0].isSameNode(divList[0]) + "<br/>";
output.innerHTML += "div 0 と div 1 は同じか: " + divList[0].isSameNode(divList[1]) + "<br/>";
output.innerHTML += "div 0 と div 2 は同じか: " + divList[0].isSameNode(divList[2]) + "<br/>";
```

### 結果

{{ EmbedLiveSample('Example', "100%", "205") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.isEqualNode()")}}
