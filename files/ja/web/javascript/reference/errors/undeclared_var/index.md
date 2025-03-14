---
title: 'ReferenceError: assignment to undeclared variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
---

{{jsSidebar("Errors")}}

JavaScript の [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)独自の例外 "Assignment to undeclated variable" は、値が宣言されていない変数に代入されたときに発生します。

## エラーメッセージ

```js
ReferenceError: assignment to undeclared variable "x" (Firefox)
ReferenceError: "x" is not defined (Chrome)
ReferenceError: Variable undefined in strict mode (Edge)
```

## エラーの種類

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) でのみ、{{jsxref("ReferenceError")}} の警告が出ます。

## エラーの原因

宣言していない変数に値を代入しています。つまり、 `var` キーワードを使用せずに代入をしています。宣言した変数と宣言していない変数の間には、予想外の結果を招くいくつかの違いがあります。それが、 strict モードで JavaScript がエラーを発生させる理由です。

宣言した変数と宣言していない変数について、3 つの注意点があります。

- 宣言した変数は、それが宣言された実行コンテキストに制限されます。宣言していない変数は常にグローバルです。
- 宣言した変数は、コードが実行される前に生成されます。宣言していない変数は、それに割り当てるコードが実行されるまで存在しません。
- 宣言した変数は、その実行コンテキスト (関数かグローバル) で設定不可能なプロパティです。 宣言していない変数は、設定可能です (たとえば、削除できます)。

詳細や具体例は、[`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) 参照ページを見てください。

[strict モードのコード](/ja/docs/Web/JavaScript/Reference/Strict_mode) でのみ、宣言していない変数割り当てエラーが発生します。非 strict コードでは、それらは暗黙裡に無視されます。

## 例

### 無効なケース

このケースでは、変数 "bar" は宣言していない変数です。

```js example-bad
function foo() {
  "use strict";
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
```

### 有効な場合

"bar" を宣言済みの変数にするために、その前に [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) キーワードを追加します。

```js example-good
function foo() {
  "use strict";
  var bar = true;
}
foo();
```

## 関連情報

- [Strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
