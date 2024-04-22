---
title: "HTMLCollection: length プロパティ"
short-title: length
slug: Web/API/HTMLCollection/length
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

**`HTMLCollection.length`** プロパティは、{{domxref("HTMLCollection")}} の中にあるアイテム数を返します。

## 値

整数の値で、`HTMLCollection` の中にあるアイテムの数を表します。

## 例

`length` プロパティは DOM プログラミングで有益なことが多いです。リストがすべて存在するかどうかを確認するために、リストの長さをテストするために良く使用されます。また、この例のように `for` ループのイテレーターとしてもよく使用されます。

```js
// 文書内でクラス ".test" を持つすべての要素
const items = document.getElementsByClassName("test");

// リスト内の各テスト項目について、要素全体をHTMLの文字列として追加します。
let gross = "";
for (let i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross は test 要素の HTML になります。
```

## 仕様書s

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
