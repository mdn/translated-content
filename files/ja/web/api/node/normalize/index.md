---
title: Node.normalize()
slug: Web/API/Node/normalize
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.normalize
translation_of: Web/API/Node/normalize
---
{{APIRef("DOM")}}

**`normalize()`** は {{domxref("Node")}} インターフェイスのメソッドで、指定されたノードとその下のツリーを*正規化された*形にします。
正規化されたサブツリーでは、サブツリー内に空のテキストノードがなくなり、隣り合うテキストノードがなくなります。

## 構文

```js
normalize();
```

### 引数

なし。

### 返値

なし。

## 例

```html
<output id="result"></output>
```

```js
let wrapper = document.createElement("div");

wrapper.appendChild( document.createTextNode("Part 1 ") );
wrapper.appendChild( document.createTextNode("Part 2 ") );

let node = wrapper.firstChild;
let result = "正規化前:<br/>";
while (node) {
  result += " " + node.nodeName + ": " + node.nodeValue + "<br/>";
  node = node.nextSibling;
}

wrapper.normalize();

node = wrapper.firstChild;
result += "<br/><br/>正規化後:<br/>";
while (node) {
  result += " " + node.nodeName + ": " + node.nodeValue + "<br/>";
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerHTML = result;
```

{{ EmbedLiveSample("Example", "100%", "170")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 逆の操作である {{domxref("Text.splitText()")}}
