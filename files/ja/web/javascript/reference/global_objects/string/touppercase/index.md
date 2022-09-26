---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
---

{{JSRef}}

**`toUpperCase()`** メソッドは、呼び出す文字列の値を（文字列でない場合、文字列に変換して）大文字に変換して返します。

{{EmbedInteractiveExample("pages/js/string-touppercase.html","shorter")}}

## 構文

```
str.toUpperCase()
```

### 戻り値

呼び出す文字列の値を大文字に変換した新しい文字列です。

### 例外

- {{jsxref("TypeError")}}
  - : {{jsxref("null")}} か {{jsxref("undefined")}} で呼ばれた場合（例えば、`String.prototype.toUpperCase.call(undefined)`）。

## 詳細

`toUpperCase()` メソッドは、大文字に変換された文字列の値を返します。このメソッドは、文字列自身の値に影響を与えません（JavaScript の文字列は不変です）。

## 例

### 基本的な使用

```js
console.log('alphabet'.toUpperCase()); // 'ALPHABET'
```

### 文字列でない `this` 値を文字列に変換する

このメソッドは `this` に文字列でない値を設定した場合、文字列に変換します。:

```js
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return 'abcdef';
  }
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.touppercase', 'String.prototype.toUpperCase')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.toUpperCase")}}

## 関連情報

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
