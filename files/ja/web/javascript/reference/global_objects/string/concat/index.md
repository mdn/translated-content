---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`concat()`** メソッドは、文字列引数を呼び出し文字列に連結して、新しい文字列を返します。

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## 構文

```js-nolint
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)
```

### 引数

- `strN`
  - : `str` に連結する 1 つ以上の文字列です。

### 返値

提供された文字列を結合したテキストの入った新しい文字列です。

## 解説

`concat()` 関数は、文字列引数を呼び出し文字列に連結し、新しい文字列を返します。元の文字列または返された文字列を変更しても、他の文字列には影響しません。

引数が文字列型でない場合は、連結前に文字列値に変換されます。

`concat()` メソッドは[加算/文字列結合演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`) にとても似ていますが、`concat()` は[引数を直接文字列に変換する](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)のに対し、加算演算子はオペランドをまずプリミティブに変換します。詳しくは、 [`+` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)のリファレンスページを参照してください。

## 例

### concat() の使用

複数の文字列を連結してコンソールに表示する例を以下に示します。

```js
const hello = "こんにちは、";
console.log(hello.concat("鈴木さん", "。良い日を。"));
// Hello, Kevin. Have a nice day.

const greetList = ["こんにちは", " ", "佐藤さん", "!"];
"".concat(...greetList); // "こんにちは 佐藤さん!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.concat()")}}
- [加算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
