---
title: "SyntaxError: missing = in const declaration"
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
---

{{jsSidebar("Errors")}}

JavaScript の例外 "missing = in const declaration" は、 const 宣言が同じ文内で値を与えられなかった場合 (`const RED_FLAG;` など) に発生します。値を設定する必要があります (`const RED_FLAG = '#ff0'`)。

## エラーメッセージ

```js
SyntaxError: Const must be initialized (Edge)
SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Missing initializer in const declaration (Chrome)
```

## エラータイプ

{{jsxref("SyntaxError")}}

## 何がうまくいかなかったのか？

定数は、通常の実行中にプログラムによって変更できない値です。これは、再代入で変更できず、再宣言もできません。 JavaScript では、定数は [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) キーワードで宣言します。定数の初期化子が必要です。つまり、宣言と同じ文で値を指定する必要があります (後で変更できないため、これには意味があります)。

## 例

### 定数の初期化子忘れ

`var` や `let` と異なり、`const` 宣言では値を指定する必要があります。エラーが発生する例です。

```js example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### エラーの修正

このエラーを修正するには、複数の方法があります。定数で何をしようとしていたかを確認してください。

#### 定数値を追加する

宣言と同じ文で定数の値を指定します。

```js example-good
const COLUMNS = 80;
```

#### `const` か `let` か `var` か

定数を宣言したいわけではない場合、`const` を使用しないでください。ブロックスコープの変数を [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) で宣言したいか、グローバル変数を [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) で宣言したいのかもしれません。双方ともに、初期値を必要としません。

```js example-good
let columns;
```

## 関連項目

- [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var)
