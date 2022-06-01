---
title: Intl.NumberFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
tags:
  - 国際化
  - Intl
  - JavaScript
  - ローカライゼーション
  - メソッド
  - NumberFormat
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.NumberFormat.format
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
---
{{JSRef}}

**`Intl.NumberFormat.prototype.format()`** メソッドは、この {{jsxref("Intl.NumberFormat")}} オブジェクトのロケールと整形オプションに従って数値を整形します。

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-format.html", "taller")}}

<!-- このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 https://github.com/mdn/interactive-examples をクローンしてプルリクエストを送信してください。 -->

## 構文

```js
format(number)
```

### 引数

- `number`
  - : 整形する {{jsxref("Number")}} または {{jsxref("BigInt")}} です。

## 解説

`format` ゲッター関数は、この {{jsxref("NumberFormat")}} オブジェクトのロケールと整形オプションに従って数値を整形し、文字列に格納します。

## 例

### `format` の使用

`format` ゲッター関数を使用して単一の通貨値を整形しましょう。こちらはロシアの例です。

```js
var options = { style: 'currency', currency: 'RUB' };
var numberFormat = new Intl.NumberFormat('ru-RU', options);
console.log(numberFormat.format(654321.987));
// → "654 321,99 руб."
```

### `format` と `map` の使用

`format` ゲッター関数を使用して、配列内のすべての数値を整形することができます。
なお、この関数は供給元である {{jsxref("Intl.NumberFormat")}} に結び付けられているので、直接 {{jsxref("Array.prototype.map")}} に渡すことができます。これは、新しい機能に従わない習慣の一部として、歴史的な人工物と考えられていますが、既存のプログラムとの互換性のために保守されています。

```js
var a = [123456.789, 987654.321, 456789.123];
var numberFormat = new Intl.NumberFormat('es-ES');
var formatted = a.map(n => numberFormat.format(n));
console.log(formatted.join('; '));
// → "123.456,789; 987.654,321; 456.789,123"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
