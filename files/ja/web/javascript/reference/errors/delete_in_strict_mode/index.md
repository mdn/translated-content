---
title: "SyntaxError: applying the 'delete' operator to an unqualified name is deprecated"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生する例外 "applying the 'delete' operator to an unqualified name is deprecated" は、[`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子で変数を削除しようとしたときに発生します。

## エラーメッセージ

```plain
SyntaxError: Delete of an unqualified identifier in strict mode. (V8-based)
SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Cannot delete unqualified property 'a' in strict mode. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}} です。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生します。

## エラーの原因

JavaScript では、通常の変数を [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子で削除できません。厳格モードでは変数を削除しようとするとエラーが発生し、削除は許可されません。

`delete` 演算子はオブジェクトのプロパティのみ削除できます。オブジェクトのプロパティは、構成可能な場合に「修飾された」と見なされます。

一般に考えられていることとは異なり、`delete` 演算子はメモリーを直接解放することとは**関係ありません**。メモリー管理は参照を断つことで間接的に行われます。詳しくは[メモリー管理](/ja/docs/Web/JavaScript/Guide/Memory_management)のページと [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子のページを参照してください。

このエラーは[厳格モードのコード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生します。厳格モードでないコードでは、この操作は `false` を返すだけです。

## 例

### 変数の内容の解放

JavaScript では通常の変数を削除しようとしても機能せず、厳格モードではエラーが発生します。

```js-nolint example-bad
"use strict";

var x;

// …

delete x;

// SyntaxError: applying the 'delete' operator to an unqualified name
// is deprecated
```

変数の内容を解放するには、[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を変数に代入します。

```js example-good
"use strict";

var x;

// …

x = null;

// x はガベージコレクションで回収可能
```

## 関連情報

- [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete)
- [メモリー管理](/ja/docs/Web/JavaScript/Guide/Memory_management)
- [TypeError: property "x" is non-configurable and can't be deleted](/ja/docs/Web/JavaScript/Reference/Errors/Cant_delete)
