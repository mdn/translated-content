---
title: location.search
slug: Web/API/Location/search
tags:
  - API
  - Location
  - プロパティ
browser-compat: api.Location.search
translation_of: Web/API/Location/search
---
{{ApiRef("Location")}}

**`search`** は {{domxref("Location")}} インターフェイスのプロパティで、*クエリー文字列*とも呼ばれる検索文字列です。つまり、 `'?'` の後の URL 引数を含む {{domxref("USVString")}} を指定します。

最近のブラウザーでは、クエリー文字列から引数を簡単に解析するために、 [`URLSearchParams`](/ja/docs/Web/API/URLSearchParams/get#examples) と [`URL.searchParams`](/ja/docs/Web/API/URL/searchParams#examples) が提供されています。

## 構文

```js
string = object.search;
object.search = string;
```

## 例

```js
// Let an <a id="myAnchor" href="/ja/docs/Location.search?q=123"> element be in the document
var anchor = document.getElementById("myAnchor");
var queryString = anchor.search; // Returns:'?q=123'

// Further parsing:
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // is the number 123
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
