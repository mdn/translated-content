---
title: "NodeList: length プロパティ"
short-title: length
slug: Web/API/NodeList/length
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`NodeList.length`** プロパティは、{{domxref("NodeList")}} のアイテムの数を返します。

## 値

整数値で、`NodeList` 内のアイテムの数を表します。

## 例

`length` プロパティは DOM プログラミングでしばしば有益です。リストがすべて存在するかどうかを確認するために、リストの長さを検査するために使用することが多いからです。また、この例のように `for` ループのイテレーターとしてもよく使用されます。

```js
// 文書内のすべての段落
const items = document.getElementsByTagName("p");

// リスト中のすべてのアイテムに対して実行し、
// HTML の文字列として要素全体を追加
let gross = "";
for (let i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross には HTML のすべての段落が入ります
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
