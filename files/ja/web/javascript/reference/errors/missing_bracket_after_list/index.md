---
title: "SyntaxError: missing ] after element list"
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
---

{{jsSidebar("Errors")}}

JavaScript の例外 "missing ] after element list" は、配列の初期化構文のどこかにエラーがあった場合に発生します。閉じ括弧 ("`]`") やカンマ ("`,`") が抜けている可能性があります。

## メッセージ

```js
SyntaxError: missing ] after element list
```

## エラーの種類

{{jsxref("SyntaxError")}}。

## エラーの原因

どこかに配列初期化構文のエラーがあります。閉じ括弧 ("`]`") かカンマ ("`,`") が不足している可能性があります。

## 例

### 不完全な配列の初期化

```js example-bad
var list = [1, 2,

var instruments = [
  'Ukulele',
  'Guitar',
  'Piano'
};

var data = [{foo: 'bar'} {bar: 'foo'}];
```

修正すると次のようになります。

```js example-good
var list = [1, 2];

var instruments = ["Ukulele", "Guitar", "Piano"];

var data = [{ foo: "bar" }, { bar: "foo" }];
```

## 関連情報

- {{jsxref("Array")}}
