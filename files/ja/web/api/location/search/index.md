---
title: "location: search プロパティ"
slug: Web/API/Location/search
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ApiRef("Location")}}

**`search`** は {{domxref("Location")}} インターフェイスのプロパティで、*クエリー文字列*とも呼ばれる検索文字列です。つまり、 `'?'` の後の URL 引数を含む文字列を指定します。

最近のブラウザーでは、クエリー文字列から引数を簡単に解析するために、 [`URLSearchParams`](/ja/docs/Web/API/URLSearchParams/get#examples) と [`URL.searchParams`](/ja/docs/Web/API/URL/searchParams#examples) が提供されています。

## 値

文字列です。

## 例

```js
// 文書内に <a id="myAnchor" href="/ja/docs/Location.search?q=123"> 要素があるとする
const anchor = document.getElementById("myAnchor");
const queryString = anchor.search; // Returns:'?q=123'

// さらに解釈する
const params = new URLSearchParams(queryString);
const q = parseInt(params.get("q")); // 数値 123
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
