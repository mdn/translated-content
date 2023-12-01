---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
---

{{jsSidebar("Errors")}}

JavaScript の例外 "redeclaration of formal parameter" は、関数の引数名としてある変数名が発生した後、関数本体内の {{jsxref("Statements/let", "let")}} 代入文を使用して同じ変数名を再度宣言すると発生します。

## エラーメッセージ

```js
SyntaxError: Let/Const redeclaration (Edge)
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

関数の引数と同名の変数があり、関数内で再度 {{jsxref("Statements/let", "let")}} 代入文を使用して再宣言しています。 JavaScript では、同じ関数内やブロックスコープ内で `let` を使用して同じ変数を再宣言できません。

## 例

### 再宣言した引数

この場合、変数 "arg" は、引数を再宣言しています。

```js example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

関数の本体内で "arg" の値を変更したい場合、これを行うことはできますが、再び同じ変数を宣言する必要はありません。言い換えれば、 `let` キーワードを省略することができます。新しい変数を生成する場合は、既存の関数の引数と競合するので、変数名を変更する必要があります。

```js example-good
function f(arg) {
  arg = "foo";
}

function f(arg) {
  let bar = "foo";
}
```

## 関連情報

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/var", "var")}}
- [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide) 内の [宣言](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
