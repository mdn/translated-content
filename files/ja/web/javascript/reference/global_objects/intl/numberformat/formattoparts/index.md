---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
---

{{JSRef}}

**`Intl.Numberformat.prototype.formatToParts()`** メソッドは `NumberFormat` フォーマッターによって生成された文字列のロケールに応じた書式設定を可能にします。

## 構文

```
Intl.NumberFormat.prototype.formatToParts(number)
```

### 引数

- `number` {{optional_inline}}
  - : 書式化する {{jsxref("Number")}} または {{jsxref("BigInt")}}。

### 返値

書式化された数値を含む要素のオブジェクトの {{jsxref("Array")}}。

## 解説

`formatToParts()` メソッドは、数値文字列のカスタム書式設定を行うときに便利です。ロケール固有のトークンを含むオブジェクトの {{jsxref("Array")}} を返します。その `formatToParts()` メソッドが返す構造体は、次のようになります。

```js
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
];
```

可能なタイプは以下のとおりです。

- currency
  - : 通貨の文字列です。 "$" や "€" のような記号または "Dollar", "Euro" の文字列です。これらの文字列は `currencyDisplay` の特定方法に依存します。
- decimal
  - : 小数点区切り文字 (".")。
- fraction
  - : 小数点以下の数値。
- group
  - : グループ区切り文字 (",")。
- infinity
  - : {{jsxref("Infinity")}} 文字列 ("∞")。
- integer
  - : 整数。
- literal
  - : 書式設定された数字のリテラル文字列または空白。
- minusSign
  - : マイナス記号の文字列 ("-")。
- nan
  - : {{jsxref("NaN")}} の文字列 ("NaN")。
- plusSign
  - : プラス記号の文字列 ("+")。

<!---->

- percentSign
  - : パーセント文字列 ("%")。
- unit
  - : 単位の文字列、例えば "l" または "litres" で、 `unitDisplay` がどのように指定されているかに依存します。

## 例

### format と formatToParts の比較

`NumberFormat` はローカライズされた、直接操作できない文字列を出力します。

```js
var number = 3500;

var formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

しかし、多くのユーザーインターフェースでは、この文字列の書式形式をカスタマイズしたいと要望があります。 `formatToParts` メソッドは `NumberFormat` フォーマッターによって生成された文字列を要素ごとの文字列として提供することでロケールに応じた書式設定を可能にします。

```js
formatter.formatToParts(number);

// 返値:
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
  { type: "decimal", value: "," },
  { type: "fraction", value: "00" },
  { type: "literal", value: " " },
  { type: "currency", value: "€" },
];
```

これで情報は個別に利用可能となり、カスタマイズされた方法でフォーマットして連結することができます。例えば {{jsxref("Array.prototype.map()")}}, [アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [switch 文](/ja/docs/Web/JavaScript/Reference/Statements/switch), [テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals), {{jsxref("Array.prototype.reduce()")}} を使います。

```js
var numberString = formatter
  .formatToParts(number)
  .map(({ type, value }) => {
    switch (type) {
      case "currency":
        return `<strong>${value}</strong>`;
      default:
        return value;
    }
  })
  .reduce((string, part) => string + part);
```

上記は`formatToParts()`メソッドを使い、通貨を太字にします。

```js
console.log(numberString);
// "3.500,00 <strong>€</strong>"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Intl.NumberFormat.formatToParts")}}

## 関連情報

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("NumberFormat.format", "Intl.NumberFormat.prototype.format")}}
- 日付の書式化: {{jsxref("DateTimeFormat.formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
