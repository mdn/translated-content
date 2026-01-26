---
title: String.prototype.toLowerCase()
short-title: toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toLowerCase()`** は {{jsxref("String")}} 値のメソッドで、呼び出す文字列の値を小文字に変換して返します。

{{InteractiveExample("JavaScript デモ: String.prototype.toLowerCase()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toLowerCase());
// 予想される結果: "the quick brown fox jumps over the lazy dog."
```

## 構文

```js-nolint
toLowerCase()
```

### 引数

なし。

### 返値

呼び出す文字列の値を小文字に変換した新しい文字列です。

## 解説

`toLowerCase()` メソッドは、小文字に変換された文字列の値を返します。`toLowerCase()` メソッドは、文字列 `str` 自身の値には影響を与えません。

## 例

### `toLowerCase()` メソッドの使用

```js
console.log("ALPHABET".toLowerCase()); // 'alphabet'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
