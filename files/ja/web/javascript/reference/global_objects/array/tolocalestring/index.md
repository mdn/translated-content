---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: 9b38f886d21c5d0a428f58acb20c4d0fc6c2e098
---

{{JSRef}}

**`toLocaleString()`** メソッドは、配列の要素を表す文字列を返します。配列の要素は、それぞれの `toLocaleString` メソッドを使い、ロケール固有の文字列に変換されます（例えばカンマ "," など）。

{{EmbedInteractiveExample("pages/js/array-tolocalestring.html","shorter")}}

## 構文

```js
toLocaleString();
toLocaleString(locales);
toLocaleString(locales, options);
```

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグの文字列か、その配列です。`locales` 引数の一般的な形式と解釈については、[ロケールの識別とネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)を参照してください。
- `options` {{optional_inline}}
  - : 設定プロパティのオブジェクトです。数値に関しては {{jsxref("Number.prototype.toLocaleString()")}} を、日付に関しては {{jsxref("Date.prototype.toLocaleString()")}} を見てください。

### 返値

配列の要素を表す文字列です。

## 解説

`Array.prototype.toLocaleString` メソッドは、その内容を走査し、すべての要素に対s知恵 `toLocaleString` メソッドを、引数 `locales` と `options` を指定して呼び出し、実装で定義された区切り文字 (",") でその結果を連結したものを返します。このメソッド自身は、この 2 つの引数を使用せず、各要素に対する `toLocaleString()` の呼び出しで渡すだけであることに注意してください。区切り文字列の選択はホストの現在のロケールに依存し、 `locales` 引数は使用しません。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
