---
title: "Node: hasChildNodes() メソッド"
slug: Web/API/Node/hasChildNodes
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`hasChildNodes()`** は {{domxref("Node")}} インターフェイスのメソッドで、この {{domxref("Node")}} に[子ノード](/ja/docs/Web/API/Node/childNodes)があるかどうかを示す論理値を返します。

## 構文

```js-nolint
hasChildNodes()
```

### 引数

なし。

### 返値

論理値で、このノードに子ノードがあれば `true` を、そうでなければ `false` を返します。

## 例

```js
let foo = document.getElementById("foo");

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
