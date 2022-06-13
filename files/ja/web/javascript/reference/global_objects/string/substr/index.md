---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.substr
translation_of: Web/JavaScript/Reference/Global_Objects/String/substr
---
{{JSRef}} {{deprecated_header}}

**`substr()`** メソッドは、文字列の一部を、指定した位置から後方向に指定した文字数だけ返します。

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## 構文

```js
substr(start)
substr(start, length)
```

### 引数

- `start`
  - : 返却する部分文字列に含まれる最初の文字の位置です。
- `length`
  - : オプションです。取り出す文字の数です。

### 返値

指定された文字列の指定された部分が入った新しい文字列です。

## 解説

`substr()` は、 `str` のうち `start` の位置から `length` 文字分を数えて抽出します。

- `start` が正の数である場合、文字列の先頭から数えた位置になります。この値は `str.length - 1` が上限になります。
- `start` が負の数である場合、文字列の末尾から数えた位置になります。この値は `-str.length` が下限になります。
- メモ: Microsoft の JScript では、 `start` の引数が負の数であっても文字列の末尾からの位置にはなりません。
- `length` が省略された場合、 `substr()` は文字列の末尾までの文字を抽出します。
- `length` が {{jsxref("undefined")}} である場合、 `substr()` は文字列の末尾までの文字を抽出します。
- `length` が負の数である場合、 `0` として扱われます。
- `start` および `length` において、 {{jsxref("NaN")}} は `0` として扱われます。

## ポリフィル

Microsoft の JScript は start の位置として負の数に対応していません。この機能を JScript で使用する場合は、以下のコードを使用することができます。

```js
// only run when the substr() function is broken
if ('ab'.substr(-1) != 'b') {
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = function(substr) {
    return function(start, length) {
      // call the original method
      return substr.call(this,
        // did we get a negative start, calculate how much it is from the beginning of the string
        // adjust the start parameter for negative value
        start < 0 ? this.length + start : start,
        length)
    }
  }(String.prototype.substr);
}
```

## 例

### substr() の使用

```js
const aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`core-js` による `String.prototype.substr` のポリフィル](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
