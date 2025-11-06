---
title: RegExp.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
l10n:
  sourceCommit: 939067a53bb5bb3787f2d536b83df2252d4e838e
---

**`toString()`** は {{jsxref("RegExp")}} インスタンスのメソッドで、は正規表現を表す文字列を返します。

{{InteractiveExample("JavaScript デモ: RegExp.prototype.toString()", "taller")}}

```js interactive-example
console.log(new RegExp("a+b+c"));
// 予想される結果: /a+b+c/

console.log(new RegExp("a+b+c").toString());
// 予想される結果: "/a+b+c/"

console.log(new RegExp("bar", "g").toString());
// 予想される結果: "/bar/g"

console.log(new RegExp("\n", "g").toString());
// 予想される結果: "/\n/g"

console.log(new RegExp("\\n", "g").toString());
// 予想される結果: "/\n/g"
```

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

呼び出し元のオブジェクトを表す文字列です。

## 解説

{{jsxref("RegExp")}} オブジェクトの `toString()` メソッドは、 {{jsxref("Object")}} オブジェクトのものを上書きします。つまり {{jsxref("Object.prototype.toString()")}} を継承しません。 {{jsxref("RegExp")}} オブジェクトにおける `toString()` メソッドは、その正規表現オブジェクトを表す文字列を返します。

実際には、正規表現の [`source`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) と [`flags`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) プロパティを読み、 `/source/flags` 形式の文字列を返します。 `toString()` の返値は解釈可能な正規表現リテラルであることが保証されますが、元々正規表現に指定されていたものと全く同じテキストではない可能性があります (例えば、フラグの並び順が変更されている可能性があります)。

## 例

### toString() の使用

以下の例は {{jsxref("RegExp")}} オブジェクトの文字列の値を表示します。

```js
const myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // '/a+b+c/'

const foo = new RegExp("bar", "g");
console.log(foo.toString()); // '/bar/g'
```

### 空の正規表現とエスケープ

`toString()` は [`source`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) プロパティにアクセスするので、空の正規表現は `"/(?:)/"` という文字列を返し、 `\n` のような改行文字はエスケープされます。これにより、返値は常に有効な正規表現リテラルになります。

```js
new RegExp().toString(); // "/(?:)/"

new RegExp("\n").toString() === "/\\n/"; // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
