---
title: Node.hasChildNodes()
slug: Web/API/Node/hasChildNodes
tags:
  - メソッド

  - リファレンス
browser-compat: api.Node.hasChildNodes
translation_of: Web/API/Node/hasChildNodes
---
{{APIRef("DOM")}}

**`hasChildNodes()`** は {{domxref("Node")}} インターフェイスのメソッドで、この {{domxref("Node")}} に[子ノード](/ja/docs/Web/API/Node/childNodes)があるかどうかを示す論理値を返します。

## 構文

```js
hasChildNodes();
```

### 引数

なし。

### 返値

論理値で、このノードに子ノードがあれば `true` を、そうでなければ `false` を返します。

## 例

```js
let foo = document.getElementById('foo');

if (foo.hasChildNodes()) {
  // 'foo.childNodes' で何かを行う
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.childNodes")}}
