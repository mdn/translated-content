---
title: "URL: hostname プロパティ"
short-title: hostname
slug: Web/API/URL/hostname
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("URL API")}}

**`hostname`** は {{domxref("URL")}} インターフェイスのプロパティで、URL の{{glossary("domain name", "ドメイン名")}}の入った文字列です。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
const url = new URL(
  "https://developer.mozilla.org/ja/docs/Web/API/URL/hostname",
);
console.log(url.hostname); // 'developer.mozilla.org' をログ出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
