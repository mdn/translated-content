---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`toLocaleString()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列の要素を表す文字列を返します。配列の要素は、それぞれの `toLocaleString` メソッドを使い、ロケール固有の文字列に変換されます（例えばカンマ "," など）。

{{EmbedInteractiveExample("pages/js/array-tolocalestring.html", "shorter")}}

## 構文

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグの文字列か、その配列です。`locales` 引数の一般的な形式と解釈については、[`Intl` メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options` {{optional_inline}}
  - : 設定プロパティのオブジェクトです。数値に関しては {{jsxref("Number.prototype.toLocaleString()")}} を、日付に関しては {{jsxref("Date.prototype.toLocaleString()")}} を見てください。

### 返値

配列の要素を表す文字列です。

## 解説

`Array.prototype.toLocaleString` メソッドは、その内容を走査し、すべての要素に対して `toLocaleString` メソッドを、引数 `locales` と `options` を指定して呼び出し、実装で定義された区切り文字 (",") でその結果を連結したものを返します。このメソッド自身は、この 2 つの引数を使用せず、各要素に対する `toLocaleString()` の呼び出しで渡すだけであることに注意してください。区切り文字列の選択はホストの現在のロケールに依存し、 `locales` 引数は使用しません。

要素が `undefined`、`null` の場合、文字列 `"null"` または `"undefined"` の代わりに空文字列に変換されます。

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#祖配列)で使用する場合、`toLocaleString()` メソッドは空のスロットを `undefined` という値があるかのように反復処理します。

`toLocaleString()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### locales と options の使用

配列の要素は、その `toLocaleString` メソッドを使用して文字列に変換されます。

- `Object`: {{jsxref("Object.prototype.toLocaleString()")}}
- `Number`: {{jsxref("Number.prototype.toLocaleString()")}}
- `Date`: {{jsxref("Date.prototype.toLocaleString()")}}

`prices` 配列内の文字列と数値の通貨を常に表示します。

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

それ以外の例については、 [`Intl.NumberFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) や [`Intl.DateTimeFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) のページを参照してください。

### 疎配列に対する toLocaleString() の使用

`toLocaleString()` は空のスロットを `undefined` と同じように扱い、区切り文字を追加します。

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### 配列以外のオブジェクトに対する toLocaleString() の呼び出し

`toLocaleString()` メソッドは `this` の `length` プロパティを読み込み、そのキーが `length` よりも小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // length が 3 であるため toLocaleString() からは無視される
};
console.log(Array.prototype.toLocaleString.call(arrayLike));
// 1,2,3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
