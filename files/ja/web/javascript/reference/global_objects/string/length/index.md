---
title: String length
slug: Web/JavaScript/Reference/Global_Objects/String/length
---

{{JSRef}}

**`length`** プロパティは {{jsxref("String")}} オブジェクトの文字列長を UTF-16 コードユニットの数で表します。 `length` は、 string インスタンスの読み取り専用データプロパティです。

{{EmbedInteractiveExample("pages/js/string-length.html", "shorter")}}

## 解説

このプロパティは、文字列内のコード単位の数を返します。 JavaScript で使用される文字列書式である [UTF-16](https://ja.wikipedia.org/wiki/UTF-16) は、ほとんどの一般の文字は単一の 16 ビットコードユニットで表しますが、あまり使われない文字に対しては 2 つのコードユニットを使用する必要があり、 `length` で返される値が文字列の実際の文字数と一致しなくなる可能性があります。

ECMAScript 2016 (ed. 7) では最大長が `2^53 - 1` 要素と制定されました。それ以前は最大長は定まっていませんでした。 Firefox 内にある文字列の最大長は `2**30 - 2` (\~1GB) です。Firefox 65 以前での最大長は `2**28 - 1` (\~256MB) でした。

空の文字列の場合、`length` は 0 になります。

静的プロパティの `String.length` は文字列の長さとは関係なく、 `String` 関数のアリティ (ゆるく言えば、それが持つ形式的な引数の数) であり、 1 です。

## Unicode

\`length\` は文字数ではなくコードユニットの数を数えるため、文字数を知りたい場合はこのようなことをする必要があります。

```js
function getCharacterLength (str) {
  // The string iterator that is used here iterates over characters,
  //  not mere code units
  return [...str].length;
}

console.log(getCharacterLength('A\uD87E\uDC04Z')); // 3

// While not recommended, you could add this to each string as follows:

Object.defineProperty(String.prototype, 'charLength', {
  get () {
    return getCharacterLength(this);
  }
});

console.log('A\uD87E\uDC04Z'.charLength); // 3
```

## 例

### 基本的な使い方

```js
let x = 'Mozilla';
let empty = '';

console.log(x + ' の文字数：' + x.length + ' 文字(コード個数)' );
/* "Mozilla の文字数：7 文字(コード個数)" */

console.log('空文字の文字数：' + empty.length + ' 文字' );
/* "空文字の文字数：0 文字" */
```

### length プロパティへの代入

```js
let myString = "bluebells";

// Attempting to assign a value to a string's .length property has no observable effect.
myString.length = 4;
console.log(myString);
// expected output: "bluebells"
console.log(myString.length);
// expected output: 9
```

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-properties-of-string-instances-length')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.length")}}

## 関連情報

- [JavaScript `String.length` and Internationalizing Web Applications](https://downloads.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications)
