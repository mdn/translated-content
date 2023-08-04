---
title: "URL: href プロパティ"
short-title: href
slug: Web/API/URL/href
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("URL API")}}

**`href`** は {{domxref("URL")}} インターフェイスのプロパティで、URL 全体の入った文字列です。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
const url = new URL(
  "https://developer.mozilla.org/ja/docs/Web/API/URL/href",
);
console.log(url.href); // 'https://developer.mozilla.org/ja/docs/Web/API/URL/href' とログ出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
