---
title: "URL: username プロパティ"
short-title: username
slug: Web/API/URL/username
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

**`username`** は {{domxref("URL")}} インターフェイスのプロパティで、ドメイン名の前に指定されたユーザー名をの入った文字列です。

## 値

文字列です。

## 例

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/ja/docs/Web/API/URL/username",
);
console.log(url.username); // "anonymous" とログ出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
