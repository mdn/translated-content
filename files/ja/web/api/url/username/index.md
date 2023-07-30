---
title: "URL: username プロパティ"
short-title: username
slug: Web/API/URL/username
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("URL API")}}

**`username`** は {{domxref("URL")}} インターフェイスのプロパティで、ドメイン名の前に指定されたユーザー名をの入った文字列です。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/ja/docs/Web/API/URL/username",
);
console.log(url.username); // "anonymous" とログ出力
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
