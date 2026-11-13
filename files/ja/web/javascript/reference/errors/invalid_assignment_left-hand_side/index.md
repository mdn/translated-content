---
title: "SyntaxError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "invalid assignment left-hand side" は、どこかで予想外の代入が行われたときに発生します。例えば、単一の `=` の記号が `==` や `===` の代わりに使用された場合です。

## エラーメッセージ

```plain
SyntaxError: Invalid left-hand side in assignment (V8-based)
SyntaxError: invalid assignment left-hand side (Firefox)
SyntaxError: Left side of assignment is not a reference. (Safari)

ReferenceError: Invalid left-hand side in assignment (V8-based)
ReferenceError: cannot assign to function call (Firefox)
ReferenceError: Left side of assignment is not a reference. (Safari)
```

## エラー型

構文によって、{{jsxref("SyntaxError")}} または {{jsxref("ReferenceError")}} になります。

## エラーの原因

どこかに予想外の代入があります。たとえば、[代入演算子](/ja/docs/Web/JavaScript/Reference/Operators#代入演算子)と[等値演算子](/ja/docs/Web/JavaScript/Reference/Operators#等値演算子)が合っていないからかもしれません。 `=` 記号が 1 つの場合は変数に値を代入する一方、`==` か `===` 演算子は値を比較します。

## 例

### よくある無効な代入

```js-nolint example-bad
if (Math.PI + 1 = 3 || Math.PI + 1 = 4) {
  console.log("no way!");
}
// SyntaxError: invalid assignment left-hand side

const str = "Hello, "
+= "is it me "
+= "you're looking for?";
// SyntaxError: invalid assignment left-hand side
```

`if` 文では、等価演算子 (`===`) が必要ですし、文字連結にはプラス (`+`) 演算子が必要です。

```js-nolint example-good
if (Math.PI + 1 === 3 || Math.PI + 1 === 4) {
  console.log("no way!");
}

const str = "Hello, "
  + "from the "
  + "other side!";
```

### ReferenceError が発生する代入

不正な代入が常に構文エラーを引き起こすとは限りません。構文がほぼ正しい場合でも、実行時に左辺の式が参照ではなく値として評価されてしまうため、代入が無効となる場合があります。このようなエラーは、文が実際に実行される段階になって初めて発生します。

```js-nolint example-bad
function foo() {
  return { a: 1 };
}
foo() = 1; // ReferenceError: invalid assignment left-hand side
```

関数呼び出し、[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) の呼び出し、[`super()`](/ja/docs/Web/JavaScript/Reference/Operators/super)、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) は、どれも参照ではなく値です。これらを左辺で使用したい場合は、代入先の対象を、それらが生成する値のプロパティにする必要があります。

```js example-good
function foo() {
  return { a: 1 };
}
foo().a = 1;
```

> [!NOTE]
> Firefox と Safari では、最初の例は厳格モード以外では `ReferenceError` が、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) では `SyntaxError` が発生します。Chrome では、厳格モードであるかを問わず、実行時に `ReferenceError` が発生します。

### 代入先としてオプションチェーンを使用する

[オプションチェーン](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)は、代入の有効な対象ではありません。

```js-nolint example-bad
obj?.foo = 1; // SyntaxError: invalid assignment left-hand side
```

その代わりに、まず null 値の場合への対処が必要です。

```js example-good
if (obj) {
  obj.foo = 1;
}
```

## 関連情報

- [代入演算子](/ja/docs/Web/JavaScript/Reference/Operators#代入演算子)
- [等値演算子](/ja/docs/Web/JavaScript/Reference/Operators#等値演算子)
