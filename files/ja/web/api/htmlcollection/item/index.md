---
title: "HTMLCollection: item() メソッド"
short-title: item()
slug: Web/API/HTMLCollection/item
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLCollection")}} の `item()` メソッドは、この集合の中で指定された位置にあるノードを返します。

> **メモ:** `HTMLCollection` の中身はライブであるため、その背景にある DOM が変化すると、子の集合内にある個々のノードの位置は変化する可能性があり、インデックス値が指定されたノードを差し続けなくなる可能性があります。

## 構文

```js-nolint
item(index)
```

### 引数

- `index`
  - : 返す {{domxref("Node")}} の位置。要素は `HTMLCollection` 内で、文書内のソースに現れる順序と同じ順序で現れます。

### 返値

指定したインデックスにある {{domxref("Node")}}、または `index` が 0 より小さいか length プロパティ以上の場合は `null` です。

## 使用上の注意

`item()` メソッドは `HTMLCollection` から番号付けされた要素を返します。JavaScript で `HTMLCollection` を配列として扱い、配列記法を使用してインデックスを作成する方が簡単です。下記の[例](#例)を参照してください。

## 例

```js
const images = document.images; // これは HTMLCollection
const img0 = images.item(0); // このように item() メソッドを使うことができる
const img1 = images[1]; // ただし、この記述方がより易しく一般的
```

## ブラウザーの互換性

{{Compat}}

## See also

- {{domxref("NodeList.item()")}}
