---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
l10n:
  sourceCommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{JSRef}}

**`repeat()`** メソッドは、呼び出し元の文字列を指定した数だけコピーして結合した新しい文字列を構築して返します。

{{EmbedInteractiveExample("pages/js/string-repeat.html","shorter")}}

## 構文

```js-nolint
repeat(count)
```

### 引数

- `count`
  - : `0` から{{jsxref("Global_Objects/Number/POSITIVE_INFINITY", "正の無限大")}}までの間の整数で、文字列を繰り返す数を示します。

### 返値

与えられた文字列の指定した回数分のコピーを含む新しい文字列です。

### 例外

- {{jsxref("RangeError")}}
  - : `count` が負の数であるか、 `count` が文字列の最大長を超えた場合に発生します。

## 例

### repeat() の使用

```js
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' （小数は丸められ、整数の結果が返されます）
"abc".repeat(1 / 0); // RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' （repeat() は汎用メソッドです）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.repeat` のポリフィル )(`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.concat()")}}
