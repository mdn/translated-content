---
title: "URL: search プロパティ"
short-title: search
slug: Web/API/URL/search
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("URL API")}}

**`search`** は {{domxref("URL")}} インターフェイスのプロパティで、*クエリー文字列*とも呼ばれる検索文字列、つまり `'?'` とその後に続く URL の引数をの入った文字列です。

最新のブラウザーでは {{domxref("URL.searchParams")}} プロパティを提供して、クエリー文字列から引数を簡単に解析できるようにしています。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
const url = new URL(
  "https://developer.mozilla.org/ja/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // "?q=123" とログ出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
