---
title: DocumentFragment.querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
tags:
  - API
  - DOM
  - DocumentFragment
  - メソッド
browser-compat: api.DocumentFragment.querySelectorAll
translation_of: Web/API/DocumentFragment/querySelectorAll
---
{{ApiRef("DOM")}}

**`DocumentFragment.querySelectorAll()`** メソッドは {{domxref("NodeList")}} で、 {{domxref("DocumentFragment")}} の中で指定されたセレクター群に一致する要素の一覧を（文書ノードの深さ優先前順走査 (depth-first pre-order traversal) を使用して）返します。

引数で指定されたセレクターが無効であった場合、 {{domxref("DOMException")}} が `SYNTAX_ERR` の値で発生します。

## 構文

```js
elementList = documentfragment.querySelectorAll(selectors);
```

### 引数

- _selectors_
  - : {{domxref("DOMString")}} で、1 つ以上の CSS セレクターをカンマで区切って指定します。

## 例

この例は、 `DocumentFragment` の中にあるすべての `div` 要素のうち、 "`note`" または "`alert`" クラスのついたものすべてのリストを返します。

```js
var matches = documentfrag.querySelectorAll("div.note, div.alert");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("DocumentFragment")}} インターフェイス
