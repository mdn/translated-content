---
title: 'ReferenceError: assignment to undeclared variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
l10n:
  sourceCommit: 6190afbbd086e1db1158730d10a4c7896fc8f0c2
---

JavaScript の[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)独自の例外 "Assignment to undeclared variable" は、値が宣言されていない変数に代入されたときに発生します。

## エラーメッセージ

```plain
ReferenceError: x is not defined (V8-based)
ReferenceError: assignment to undeclared variable x (Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## エラー型

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) でのみ、{{jsxref("ReferenceError")}} の警告が出ます。

## エラーの原因

`x = ...` という形式の代入文がありますが、`x` は `var`、`let`、または `const` キーワードを使って事前に宣言されていません。
このエラーは、[厳格モードのコード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生します。
厳格モード以外のコードでは、宣言されていない変数への代入を行うと、グローバルスコープ上に暗黙的にプロパティが生成されます。

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

"bar" を宣言済みの変数にするために、その前に [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let), [`const`](/ja/docs/Web/JavaScript/Reference/Statements/var), [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) のいずれかのキーワードを追加します。

```js example-good
function foo() {
  "use strict";
  const bar = true;
}
foo();
```

## 関連情報

- [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
- [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var)
- [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)
