---
title: BigInt.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
tags:
  - BigInt
  - 国際化
  - Intl
  - JavaScript
  - メソッド
  - プロトタイプ
browser-compat: javascript.builtins.BigInt.toLocaleString
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
---
{{JSRef}}

**`toLocaleString()`** メソッドは、この BigInt 値の言語に合わせた表現の文字列を返します。 

{{EmbedInteractiveExample("pages/js/bigint-tolocalestring.html")}}

## 構文

```js
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 引数

`locales` および `options` の引数は、この関数の動作をカスタマイズするためのもので、アプリケーションは整形の慣例を使用する言語を指定することができます。 `locales` や `options` の引数を無視する実装では、使用するロケールや返す文字列の形式はすべて実装に依存します。

これらの引数や使用方法について、詳しくは [`Intl.NumberFormat()`
コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) を参照してください。

### 返値

指定された BigInt の言語に合わせた表現の文字列です。

## 性能

大量の数値を整形する場合は、 {{jsxref("Intl.NumberFormat")}} オブジェクトを生成して {{jsxref("Intl/NumberFormat/format", "NumberFormat.format")}} プロパティで提供される関数を使用したほうが有利です。

## 例

### `toLocaleString` の使用

ロケールを使用しない基本的な使用では、既定のロケールと既定のオプションで成形された文字列が返されます。

```js
var bigint = 3500n;

bigint.toLocaleString();
// "3,500" と表示 (U.S. English ロケールの場合)
```

### `locales` の使用

この例ではローカライズされた数値書式の変化形の一部を示しています。アプリケーションのユーザーインターフェイスで使用されている言語の書式を取得するには、必ず `locale` 引きお数でその言語を (場合によっては予備の言語も) 指定してください。

```js
var bigint = 123456789123456789n;

// ドイツ語では千の位の区切りにピリオドを使用
console.log(bigint.toLocaleString('de-DE'));
// → 123.456.789.123.456.789

// 多くのアラビア語を話す国ではアラビア語で東アラビア数字を使用
console.log(bigint.toLocaleString('ar-EG'));
// → ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// インドでは千/十万/千万の区切りを使用
console.log(bigint.toLocaleString('en-IN'));
// → 1,23,45,67,89,12,34,56,789

// nu 拡張キーは数値体系を要求。例えば中国語の数字の場合
console.log(bigint.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六,七八九,一二三,四五六,七八九

// 要求した言語に対応していない場合、例えばバリ語の場合、
// 予備の言語、この場合はインドネシア語を使用
console.log(bigint.toLocaleString(['ban', 'id']));
// → 123.456.789.123.456.789
```

### `options` の使用

`toLocaleString` で提供される結果は `options` 引数でカスタマイズできます。

```js
var bigint = 123456789123456789n;

// 通貨書式を要求
console.log(bigint.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456.789.123.456.789,00 €

// 日本円には下位の単位がない
console.log(bigint.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,456,789,123,456,789

// 有効数字を 3 桁に限定
console.log(bigint.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,00,00,00,00,00,00,000
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("BigInt.toString()")}}
