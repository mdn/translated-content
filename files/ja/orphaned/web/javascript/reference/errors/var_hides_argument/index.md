---
title: 'TypeError: variable "x" redeclares argument'
slug: orphaned/Web/JavaScript/Reference/Errors/Var_hides_argument
---

{{jsSidebar("Errors")}}

JavaScript の [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)固有の例外 "variable redeclares argument" は、関数の引数で使用された名前が、関数の本体で [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) の代入を使用して再宣言された場合に発生します。

## エラーメッセージ

```js
TypeError: variable "x" redeclares argument (Firefox)
```

## エラーの種類

{{jsxref("TypeError")}} の警告は [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生します。

## エラーの原因

関数の引数として使用されたものと同じ変数名が、関数の本体で [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) の代入を使用して再宣言されています。これは命名が競合する可能性があるため、 JavaScript が警告を発します。

このエラーは、 [strict モードのコード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生します。 strict モード以外では、再宣言は暗黙裡に無視されます。</p>

## 例

### 無効な場合

このケースでは、変数 "arg" 引数を再宣言しています。

```js example-bad
'use strict';

function f(arg) {
  var arg = 'foo';
}
```

### 有効な場合

[`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) 文を省略するだけで、この警告を修正できます。なぜなら、変数はすでに存在しているからです。そのほかの方法として、関数の引数または変数名の名前を変更することでも対応できます。

```js example-good
'use strict';

function f(arg) {
  arg = 'foo';
}
```

## 関連情報

- [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
