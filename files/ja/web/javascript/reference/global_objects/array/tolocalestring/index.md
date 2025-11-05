---
title: Array.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toLocaleString()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列の要素を表す文字列を返します。配列の要素は、それぞれの `toLocaleString` メソッドを使い、ロケール固有の文字列に変換されます（例えばカンマ "," など）。

{{InteractiveExample("JavaScript デモ: Array.prototype.toLocaleString()", "shorter")}}

```js interactive-example
const array = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
// 予想される結果: "1,a,12/21/1997, 2:12:00 PM",
// "en" ロケールおよび UTC タイムゾーンを想定したもの。結果は異なることがある
```

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
  - : 設定プロパティのオブジェクトです。ここで渡すことができるものは、変換される要素によって異なります。例えば、数値の場合は {{jsxref("Number.prototype.toLocaleString()")}} を参照してください。

### 返値

配列の要素を表す文字列です。

## 解説

`Array.prototype.toLocaleString` メソッドは、その内容を走査し、すべての要素に対して `toLocaleString` メソッドを、引数 `locales` と `options` を指定して呼び出し、実装で定義された区切り文字（例えばカンマ ","）でその結果を連結したものを返します。

> [!NOTE]
> `locales` または `options` 引数は、配列要素間の区切り文字を制御するものではありません。これらは、それぞれの要素の `toLocaleString()` メソッドに渡されるだけです。実際の区切り文字（通常はカンマ）は、ホストの現在のロケールにのみ依存します。ローカライズされたリストの書式化が必要な場合は、代わりに {{jsxref("Intl.ListFormat")}} を使用することを検討してください。

要素が `undefined`、`null` の場合、文字列 `"null"` または `"undefined"` の代わりに空文字列に変換されます。

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#祖配列)で使用する場合、`toLocaleString()` メソッドは空のスロットを `undefined` という値があるかのように反復処理します。

`toLocaleString()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### locales と options の使用

配列の要素は、その `toLocaleString` メソッドを使用して文字列に変換されます。例えば、このスニペットは、`prices` 配列の文字列および数値の通貨を表示するために、{{jsxref("Number.prototype.toLocaleString()")}} メソッドを暗黙的に呼び出します。

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

### リストの区切り文字

リストの区切り文字は、`locales` 引数の影響を受けません。これを設定するには、代わりに {{jsxref("Intl.ListFormat")}} を使用してください。

```js
const nums = [8888, 9999];
console.log(nums.toLocaleString("zh")); // "8,888,9,999"

const formatter = new Intl.ListFormat("zh", {
  type: "conjunction",
  style: "narrow",
});
console.log(formatter.format(nums.map((x) => x.toLocaleString("zh"))));
// "8,888、9,999"
```

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
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
