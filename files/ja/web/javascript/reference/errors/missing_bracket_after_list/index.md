---
title: "SyntaxError: missing ] after element list"
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "missing ] after element list" は、配列の初期化構文のどこかにエラーがあった場合に発生します。閉じ括弧 (`]`) やカンマ (`,`) が抜けている可能性があります。

## エラーメッセージ

```plain
SyntaxError: missing ] after element list (Firefox)
SyntaxError: Unexpected token ';'. Expected either a closing ']' or a ',' following an array element. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}。

## エラーの原因

どこかに配列初期化構文のエラーがあります。閉じ括弧 (`]`) かカンマ (`,`) が不足している可能性があります。

## 例

### 不完全な配列の初期化

```js-nolint example-bad
const list = [1, 2,

const instruments = [
  "Ukulele",
  "Guitar",
  "Piano",
};

const data = [{ foo: "bar" } { bar: "foo" }];
```

修正すると次のようになります。

```js example-good
const list = [1, 2];

const instruments = ["Ukulele", "Guitar", "Piano"];

const data = [{ foo: "bar" }, { bar: "foo" }];
```

## 関連情報

- {{jsxref("Array")}}
