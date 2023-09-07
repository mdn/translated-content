---
title: "SyntaxError: applying the 'delete' operator to an unqualified name is deprecated"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
---

{{jsSidebar("Errors")}}

JavaScript の [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)専用の例外 "applying the 'delete' operator to an unqualified name is deprecated" は、 [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子を用いて変数を削除しようとしたときに発生します。

## エラーメッセージ

```js
SyntaxError: Calling delete on expression not allowed in strict mode (Edge)
SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Delete of an unqualified identifier in strict mode. (Chrome)
```

## エラータイプ

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) でのみ {{jsxref("SyntaxError")}}。

## 何がうまくいかなかったのか？

JavaScript では、通常の変数を [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子で削除できません。strict モードで、変数を削除しようとするとエラーが発生し、削除できません。

`delete` 演算子は、オブジェクトのプロパティのみ削除できます。オブジェクトプロパティは、設定可能な場合は "修飾" されます。

よくある予想とは異なり、 `delete` 演算子は直接的なメモリーの解放とは**関係ありません**。メモリー管理は、参照の解放によって間接的に行われます。[メモリー管理](/ja/docs/Web/JavaScript/Memory_Management)ページと [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子ページで詳細を確認してください。

このエラーは、[strict mode モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生します。非 strict モードでは、演算子はただ `false` を返します。

## 例

### 変数の内容の解放

JavaScript ではプレーンな変数を削除しようとすると動作せず、 strict モードだとエラーをスローします。

```js example-bad
"use strict";

var x;

// ...

delete x;

// SyntaxError: applying the 'delete' operator to an unqualified name
// is deprecated
```

変数のコンテンツを解放するには、{{jsxref("null")}} を設定してください。

```js example-good
"use strict";

var x;

// ...

x = null;

// x can be garbage collected
```

## 関連項目

- [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete)
- [メモリー管理](/ja/docs/Web/JavaScript/Memory_Management)
- [TypeError: property "x" is non-configurable and can't be deleted](/ja/docs/Web/JavaScript/Reference/Errors/Cant_delete)
