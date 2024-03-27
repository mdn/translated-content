---
title: "SyntaxError: for-in loop head declarations may not have initializers"
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
---

{{jsSidebar("Errors")}}

JavaScript の [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)専用の例外である "for-in loop head declarations may not have initializers" は、 [for...in](/ja/docs/Web/JavaScript/Reference/Statements/for...in) の先頭に初期化構文が含まれていた場合、例えば |`for (var i = 0 in obj)`| のような場合に発生します。これは strict モードの for-in ループでは許可されていません。

## エラーメッセージ

```js
SyntaxError: for-in loop head declarations cannot have an initializer (Edge)
SyntaxError: for-in loop head declarations may not have initializers (Firefox)
SyntaxError: for-in loop variable declaration may not have an initializer. (Chrome)
```

## エラータイプ

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ、{{jsxref("SyntaxError")}}。

## 何がうまくいかなかったのか？

[for...in](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループの先頭に初期化式が含まれています。つまり、 |`for (var i = 0 in obj)`| のように変数を宣言して値を代入しています。 strict モードでない場合は、このヘッダー宣言は暗黙に無視され、`|for (var i in obj)|` のように動作します。しかし、[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では `SyntaxError` が発生します。

## 例

この例では `SyntaxError` が発生します。

```js example-bad
"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
```

### 有効な for-in ループ

for-in ループのヘッダーから初期化子 (`i = 0`) を削除してください。

```js example-good
"use strict";

var obj = { a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
```

### Array の反復処理

for...in ループは [Array の反復処理で使用すべきではありません](/ja/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in)。 {{jsxref("Array")}} を反復するのに、 [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) ループを `for-in` ループの代わりに使うつもりだったのでしょうか。 `for` ループならば、初期化子を設定することができます。

```js example-good
var arr = ["a", "b", "c"];

for (var i = 2; i < arr.length; i++) {
  console.log(arr[i]);
}

// "c"
```

## 関連項目

- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) – こちらも strict モードであろうとなかろうと初期化子が使用できない。
- [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) – 配列の反復処理に向いており、初期化子を定義できる。
