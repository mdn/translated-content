---
title: "Node: contains() メソッド"
slug: Web/API/Node/contains
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`contains()`** は {{domxref("Node")}} インターフェイスのメソッドで、あるノードが指定されたノードの子孫であるか、すなわち、このノード自体であるか、直接の子ノード ({{domxref("Node.childNodes", "childNodes")}}) の何れかであるか、直接の子ノードの子ノードの何れかであるか（以下同様）を示す論理値を返します。

> [!NOTE]
> ノードは自分自身に**含まれます**。

## 構文

```js-nolint
contains(otherNode)
```

### 引数

- `otherNode`
  - : 検査する {{domxref("Node")}} です。
    > [!NOTE]
    > `otherNode` は省略できませんが、 `null` に設定することはできます。

### 返値

論理値で、 `true` は `otherNode` がそのノードに含まれていることを表します。
そうでなければ `false` になります。

`otherNode` 引数が `null` であれば、 `contains()` は常に `false` になります。

## 例

この関数は、ある要素がそのページの body 要素に含まれるかどうかを検査するものです。 `contains` は包括的かつ決定的であるため、 body がそれ自身を含むかどうかは `isInPage` の意図するところではないため、明示的に `false` を返します。

```js
function isInPage(node) {
  return node === document.body ? false : document.body.contains(node);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.hasChildNodes")}}
