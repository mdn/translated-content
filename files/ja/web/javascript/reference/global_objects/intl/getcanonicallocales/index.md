---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
---

{{JSRef}}

**`Intl.getCanonicalLocales()`** メソッドは、正規のロケール名を含む配列を返します。重複は省略され、要素は構造的に有効な言語タグとして検証されます。

{{InteractiveExample("JavaScript Demo: Intl.GetCanonicalLocales")}}

```js interactive-example
console.log(Intl.getCanonicalLocales("EN-US"));
// Expected output: Array ["en-US"]

console.log(Intl.getCanonicalLocales(["EN-US", "Fr"]));
// Expected output: Array ["en-US", "fr"]

try {
  Intl.getCanonicalLocales("EN_US");
} catch (err) {
  console.log(err.toString());
  // Expected output (Firefox/Safari): RangeError: invalid language tag: "EN_US"
  // Expected output (Chrome): RangeError: Incorrect locale information provided
}
```

## 構文

```
Intl.getCanonicalLocales(locales)
```

### 引数

- `locales`
  - : 標準ロケール名を取得するための {{jsxref("String")}} 値リスト。

### 返値

正規のロケール名を含む配列です。

## 例

### getCanonicalLocales の使用

```js
Intl.getCanonicalLocales("EN-US"); // ["en-US"]
Intl.getCanonicalLocales(["EN-US", "Fr"]); // ["en-US", "fr"]

Intl.getCanonicalLocales("EN_US");
// RangeError:'EN_US' is not a structurally valid language tag
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- {{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- {{jsxref("Collator.supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
