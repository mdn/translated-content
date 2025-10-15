---
title: String.prototype.toUpperCase()
short-title: toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toUpperCase()`** は {{jsxref("String")}} 値のメソッドで、呼び出す文字列の値を（文字列でない場合、文字列に変換して）大文字に変換して返します。

{{InteractiveExample("JavaScript デモ: String.prototype.toUpperCase()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase());
// 予想される結果: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

## 構文

```js-nolint
toUpperCase()
```

### 引数

なし。

### 返値

呼び出す文字列の値を大文字に変換した新しい文字列です。

## 解説

`toUpperCase()` メソッドは、大文字に変換された文字列の値を返します。このメソッドは、文字列自身の値に影響を与えません（JavaScript の文字列は不変です）。

## 例

### 基本的な使用

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### 文字列でない `this` 値を文字列に変換する

このメソッドは `this` に文字列でない値を設定した場合、文字列に変換します。

```js
const a = String.prototype.toUpperCase.call({
  toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

// 'ABCDEF TRUE' と表示
console.log(a, b);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
