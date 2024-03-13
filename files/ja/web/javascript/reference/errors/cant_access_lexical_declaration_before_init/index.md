---
title: "ReferenceError: can't access lexical declaration`X' before initialization"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
---

{{jsSidebar("Errors")}}

JavaScript の例外 "can't access lexical declaration \`_variable_' before
initialization" は、語彙変数が初期化前にアクセスされたときに発生します。これはブロック文内で、 [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) または [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) 宣言が定義される前にアクセスされたときに発生します。

## エラーメッセージ

```js
ReferenceError: Use before delaration (Edge)
ReferenceError: can't access lexical declaration `X' before initialization (Firefox)
ReferenceError: 'x' is not defined (Chrome)
```

## エラーの種類

{{jsxref("ReferenceError")}}

## エラーの原因

初期化前に語彙変数にアクセスしました。これはブロックステートメント内で、定義される前に[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) か [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) 宣言にアクセスすると発生します。

## 例

### 不正な場合

この場合、変数 "foo" はブロックステートメント内で `let` を使用して再宣言されています。

```js example-bad
function test() {
  let foo = 33;
  if (true) {
    let foo = foo + 55;
    // ReferenceError: can't access lexical
    // declaration `foo' before initialization
  }
}
test();
```

### 有効な場合

"foo" を if ステートメント内に変更するには、再宣言の原因となる `let` を取り除きます。

```js example-good
function test() {
  let foo = 33;
  if (true) {
    foo = foo + 55;
  }
}
test();
```

## 関連情報

- [let における一時的なデッドゾーンとエラー](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)
