---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
tags:
  - 国際化
  - JavaScript
  - メソッド
  - Number
  - プロトタイプ
browser-compat: javascript.builtins.Number.toLocaleString
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
---
{{JSRef}}

**`toLocaleString()`** メソッドは、この数値を表す言語依存の文字列を返します。

{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}

## 構文

```js
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 引数

`locales` と `options` 引数で機能の動作をカスタマイズすることができ、アプリケーションが書式化の習慣を用いる言語を指定することができます。`locales` と `options` の引数を無視する実装では、使用されるロケールや返される文字列の形式は、完全に実装依存になります。

引数と使い方について詳しくは、[`Intl.NumberFormat()`
コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)を参照してください。

### 返値

指定された数値の言語依存の表現による文字列です。

## 性能

たくさんの数を整形する場合は、{{jsxref("Intl.NumberFormat")}} オブジェクトを生成して {{jsxref("Intl/NumberFormat/format", "format")}} プロパティで提供される関数を使用することをお勧めします。

## 例

### `toLocaleString` を使う

ロケールを指定しない基本的な使用です。既定のロケールと既定のオプションの整形された文字列が返されます。

```js
var number = 3500;

console.log(number.toLocaleString()); // アメリカ英語のロケールでは "3,500" を表示
```

### `locales` 引数と `options` 引数に対応しているかどうかを調べる

`locales` 引数と `options` 引数はまだすべてのブラウザーで対応しているわけではありません。不正な言語タグが {{jsxref("Global_Objects/RangeError", "RangeError")}} 例外で拒否されるという要件を利用することで、実装がすでに対応しているかどうかを調べられます。

```js
function toLocaleStringSupportsLocales() {
  var number = 0;
  try {
    number.toLocaleString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

ES5.1 以前の実装では、引数を使って `toLocaleString` を呼んだ場合に {{jsxref("RangeError")}} 例外を throw する必要はありませんでした。

5.1 以前の ECMAScript をサポートしているものも含めたすべてのホストで動くチェックは、直接 `Number.prototype.toLocaleString` の地域オプションのサポートに必要な ECMA-402 で指定された機能をテストすることで行えます。

```js
function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}
```

上記のコードは、グローバル `Intl` オブジェクトが `null` でないことと、`Intl` オブジェクトが `NumberFormat` プロパティを持ち、それが関数であることをテストします。

### `locales` を使う

この例ではローカライズされた数値変換のバリエーションのいくつかを示します。アプリケーションのユーザーインターフェイスで使われる言語の形式を得るために、`locales` 引数を用いている言語（そしておそらくいくつかのフォールバック言語）を明示することを確かめてください。

```js
var number = 123456.789;

// ドイツ語では小数点にカンマを用い、千の桁区切りにピリオドを用いる
console.log(number.toLocaleString('de-DE'));
// → 123.456,789

// 多くのアラビア語圏の国のアラビア語では、東アラビア数字を用いる
console.log(number.toLocaleString('ar-EG'));
// → ١٢٣٤٥٦٫٧٨٩

// インド語では thousands/lakh/crore の区切りを用いる
console.log(number.toLocaleString('en-IN'));
// → 1,23,456.789

// nu 拡張キーでは、中国の数字などの計数法をリクエストする
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六.七八九

// バリ語など対応していない可能性のある言語をリクエストする場合は、
// 予備の言語 (この場合はインドネシア語) を含める
console.log(number.toLocaleString(['ban', 'id']));
// → 123.456,789
```

### `options` を使う

`toLocaleString` によって得られる結果は `options` 引数を使用してカスタマイズできます。

```js
var number = 123456.789;

// 通貨形式をリクエスト
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// 日本円には副単位がない
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// 有効桁数を 3 桁に制限
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000

// 数値の書式化にホストの既定の言語とオプションを使用する
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// → "30,000.65" where English is the default language, or
// → "30.000,65" where German is the default language, or
// → "30 000,65" where French is the default language
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toString()")}}
