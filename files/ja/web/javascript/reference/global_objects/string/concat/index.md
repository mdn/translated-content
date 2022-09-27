---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
---

{{JSRef}}

**`concat()`** メソッドは、文字列引数を呼び出し文字列に連結して、新しい文字列を返します。

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## 構文

```
str.concat(str2 [, ...strN])
```

### 引数

- `str2 [, ...strN]`
  - : `str` に連結する文字列。

### 返値

提供された文字列を結合したテキストを含む新しい文字列。

## 解説

`concat()` 関数は、文字列引数を呼び出し文字列に連結し、新しい文字列を返します。元の文字列または返された文字列の変更は、他の文字列には影響しません。

引数が文字列型でない場合は、連結前に文字列値に変換されます。

## 性能

`concat()` メソッドの代わりに {{jsxref("Operators/Assignment_Operators", "代入演算子", "", 1)}} (`+` または `+=`) を使用する事を強くお勧めします。
この[性能試験](https://jsperf.com/concat-vs-plus-vs-join)によれば、{{jsxref("Operators/Assignment_Operators", "代入演算子", "", 1)}}のほうが数倍高速です。

## 例

### concat() の使用

複数の文字列を連結してコンソールに表示する例を以下に示します。

```js
let hello = 'こんにちは、'
console.log(hello.concat('鈴木さん', '。よい1日を。'))
/* こんにちは、鈴木さん。よい1日を。*/

let greetList = ['こんにちは', ' ', '佐藤さん', '!']
"".concat(...greetList)  // "こんにちは 佐藤さん!"

"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.concat', 'String.prototype.concat')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.concat")}}

## 関連情報

- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Operators/Assignment_Operators", "Assignment operators", "", 1)}}
