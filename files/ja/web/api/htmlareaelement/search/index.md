---
title: HTMLAreaElement.search
slug: Web/API/HTMLAreaElement/search
original_slug: Web/API/HTMLHyperlinkElementUtils/search
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.search`** プロパティは、*クエリー文字列*とも呼ばれる検索文字列、つまり `'?'` とその後に続く URL の引数の入った文字列です。

最新のブラウザーでは、[`URLSearchParams`](/ja/docs/Web/API/URLSearchParams/get#examples) と [`URL.searchParams`](/ja/docs/Web/API/URL/searchParams#examples) を提供して、クエリー文字列から引数を簡単に解析できるようにしています。

## 値

文字列です。

## 例

### エリアのリンクから検索文字列を取得

```js
// <area id="myArea" href="/en-US/docs/HTMLAreaElement?q=123"> 要素が文書内にあったとします
const area = document.getElementById("myArea");
area.search; // '?q=123' を返す
```

### URLSearchParams を使用した高度な解釈

他にも、 [`URLSearchParams`](/ja/docs/Web/API/URLSearchParams/get#examples) が使われる場面があります。

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // 数値 123 を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
