---
title: Node.contains()
slug: Web/API/Node/contains
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.contains
translation_of: Web/API/Node/contains
---
{{APIRef("DOM")}}

**`contains()`** は {{domxref("Node")}} インターフェイスのメソッドで、あるノードが指定されたノードの子孫であるか、すなわち、このノード自体であるか、直接の子ノード ({{domxref("Node.childNodes", "childNodes")}}) の何れかであるか、直接の子ノードの子ノードの何れかであるか（以下同様）を示す論理値を返します。

> **Note:** ノードは自分自身に**含まれます**。

## 構文

```js
contains(otherNode);
```

### 引数

- `otherNode`
  - : 検査する {{domxref("Node")}} です。
    > **Note:** `otherNode` は省略できませんが、 `null` に設定することはできます。

### 返値

論理値で、 `true` は `otherNode` がそのノードに含まれていることを表します。
そうでなければ `false` になります。

`otherNode` 引数が `null` であれば、 `contains()` は常に `false` になります。

## 例

この関数は、ある要素がそのページの body 要素に含まれるかどうかを検査するものです。 `contains` は包括的かつ決定的であるため、 body がそれ自身を含むかどうかは `isInPage` の意図するところではないため、明示的に `false` を返します。

```js
function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.hasChildNodes")}}
