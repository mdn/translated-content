---
title: "Navigator: language プロパティ"
short-title: language
slug: Web/API/Navigator/language
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

**`Navigator.language`** は読み取り専用プロパティで、ユーザーの言語を表す文字列を返します。普通、ブラウザー UI の言語が返されます。

## 値

文字列で、 {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} で定義された言語バージョンを表します。例えば、"en"、"en-US"、"fr"、"fr-FR"、"es-ES" などが含まれます。

iOS 10.2 以前の Safari では、国コードは "en-us"、"fr-fr" のように小文字で返されます。

## 例

```js
if (/^en\b/.test(navigator.language)) {
  doLangSelect(window.navigator.language);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
