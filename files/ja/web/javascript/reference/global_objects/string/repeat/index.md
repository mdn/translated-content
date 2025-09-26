---
title: String.prototype.repeat()
short-title: repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`repeat()`** は {{jsxref("String")}} 値のメソッドで、呼び出し元の文字列を指定した数だけコピーして結合した新しい文字列を構築して返します。

{{InteractiveExample("JavaScript デモ: String.prototype.repeat()", "shorter")}}

```js interactive-example
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);
// 予想される結果: "I feel Happy! Happy! Happy! "
```

## 構文

```js-nolint
repeat(count)
```

### 引数

- `count`
  - : `0` から {{jsxref("Number/POSITIVE_INFINITY", "Infinity")}} までの間の整数で、文字列を繰り返す数を示します。

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
"abc".repeat(3.5); // 'abcabcabc' （小数点以下は切り捨てられます）
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
- [es-shims による `String.prototype.repeat` のポリフィル](https://www.npmjs.com/package/string.prototype.repeat)
- {{jsxref("String.prototype.concat()")}}
