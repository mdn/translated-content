---
title: "URL: password プロパティ"
short-title: password
slug: Web/API/URL/password
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("URL API")}}

**`password`** は {{domxref("URL")}} インターフェイスのプロパティで、ドメイン名の前に指定されたパスワードの入った文字列です。

先に {{domxref("URL.username", "username")}} プロパティを設定せずに設定しようとすると、暗黙の裡に失敗します。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/ja/docs/Web/API/URL/password",
);
console.log(url.password); // "flabada" とログ出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
