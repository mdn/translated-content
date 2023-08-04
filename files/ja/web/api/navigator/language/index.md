---
title: Navigator.language
slug: Web/API/Navigator/language
---

{{APIRef("HTML DOM")}}

**`Navigator.language`** は読み取り専用プロパティで、ユーザーの言語を表す文字列を返します。普通、ブラウザー UI の言語が返されます。

## 構文

```js
const lang = navigator.language
```

### 値

{{domxref("DOMString")}} です。`lang` は、[BCP 47](https://tools.ietf.org/rfc/bcp/bcp47.txt) で定義された言語バージョンを表す文字列が格納されます。例えば、"en"、"en-US"、"fr"、"fr-FR"、"es-ES" などが含まれます。

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
