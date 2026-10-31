---
title: Intl.getCanonicalLocales()
short-title: getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
l10n:
  sourceCommit: 6356aa3911fe6cf953e0b04c3b285fe95e4b5355
---

**`Intl.getCanonicalLocales()`** メソッドは、正規のロケール名を含む配列を返します。重複は省略され、要素は構造的に有効な言語タグとして検証されます。

{{InteractiveExample("JavaScript デモ: Intl.getCanonicalLocales()")}}

```js interactive-example
console.log(Intl.getCanonicalLocales("EN-US"));
// 期待される結果: Array ["en-US"]

console.log(Intl.getCanonicalLocales(["EN-US", "Fr"]));
// 期待される結果: Array ["en-US", "fr"]

try {
  Intl.getCanonicalLocales("EN_US");
} catch (err) {
  console.log(err.toString());
  // 期待される結果: RangeError: invalid language tag: "EN_US"
}
```

## 構文

```js-nolint
Intl.getCanonicalLocales(locales)
```

### 引数

- `locales`
  - : 正規のロケール名を取得するための文字列値のリストです。

### 返値

正規のロケール名を含む配列です。

## 例

### getCanonicalLocales の使用

```js
Intl.getCanonicalLocales("EN-US"); // ["en-US"]
Intl.getCanonicalLocales(["EN-US", "Fr"]); // ["en-US", "fr"]

Intl.getCanonicalLocales("EN_US");
// RangeError: invalid language tag: "EN_US"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.getCanonicalLocales` のポリフィル (FormatJS)](https://formatjs.github.io/docs/polyfills/intl-getcanonicallocales/)
- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
