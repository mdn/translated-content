---
title: NodeList.length
slug: Web/API/NodeList/length
---

{{APIRef("DOM")}}

## 概要

`length` は `NodeList` 内の item の数を返します。

## 構文

```js
numItems = nodeList.length
```

- `numItems` は `NodeList` 内の item 数に相当する整数値 (integer) です。

## 例

```js
// 文書内のすべての段落
var items = document.getElementsByTagName("p");
// リスト中のすべてのアイテムに対して実行し、
// HTML の文字列として要素全体を追加
var gross = "";
for (var i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}
// gross には HTML のすべての段落が入ります
```

## メモ

参照内のこのページの場所に関わらず、 `length` は [Element](/ja/docs/Web/API/element) ではなく、 `NodeList` のプロパティです。 NodeList オブジェクトは [document.getElementsByTagName](/ja/docs/Web/API/document/getElementsByTagName) を始めとして、いくつもの DOM メソッドから返されます。

`length` は DOM プログラミングでとても有名なプロパティです。リストの長さを検査したり (存在するかどうかを確認)、上記の例に見られるように、ループの反復子して使用するのが普通です。

## 仕様書

[length](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-203510337)

## ブラウザーの対応

{{Compat("api.NodeList.length")}}
