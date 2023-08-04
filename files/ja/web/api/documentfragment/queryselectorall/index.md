---
title: "DocumentFragment: querySelectorAll() メソッド"
short-title: querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}

**`DocumentFragment.querySelectorAll()`** メソッドは {{domxref("NodeList")}} で、 {{domxref("DocumentFragment")}} の中で指定されたセレクター群に一致する要素の一覧を（文書ノードの深さ優先前順走査 (depth-first pre-order traversal) を使用して）返します。

引数で指定されたセレクターが無効であった場合、 {{domxref("DOMException")}} が `SYNTAX_ERR` の値で発生します。

## 構文

```js-nolint
querySelectorAll(selectors)
```

### 引数

- `selectors`
  - : 文字列で、1 つ以上の CSS セレクターをカンマで区切って指定します。

### 返値

生きていない {{domxref("NodeList")}} です。これには、指定されたセレクター群の少なくとも 1 つに一致する要素ごとに 1 つの {{domxref("Element")}} オブジェクトが格納されます。一致するものがなかった場合は空の {{domxref("NodeList")}} となります。

## 例

この例は、 `DocumentFragment` の中にあるすべての `div` 要素のうち、 "`note`" または "`alert`" クラスのついたものすべてのリストを返します。

```js
const matches = documentfrag.querySelectorAll("div.note, div.alert");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("DocumentFragment")}} インターフェイス
