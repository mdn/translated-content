---
title: 等価 (==)
slug: Web/JavaScript/Reference/Operators/Equality
tags:
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.equality
translation_of: Web/JavaScript/Reference/Operators/Equality
---
{{jsSidebar("Operators")}}

等価演算子 (`==`) は、二つのオペランドが等しいことを検査し、論理値で結果を返します。[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)演算子とは異なり、オペランドの型が異なる場合には型の変換を試みてから比較を行います。

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## 構文

```js
x == y
```

## 解説

等価演算子 (`==` および `!=`) は、[抽象等価比較アルゴリズム](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)を使用して 2 つのオペランドを比較します。これは、およそ次のようにまとめることができます。

- 両方のオペランドがオブジェクトである場合、同じオブジェクトを指している場合に限り `true` を返します。
- 一方のオペランドが `null` で、もう一方が `undefined` であった場合は `true` を返します。
- オペランドの型が異なる場合は、比較前に同じ型に変換を試みます。

  - 数値と文字列を比較する場合、文字列を数値に変換しようとします。
  - 一方のオペランドが論理値である場合、その論理値のオペランドが `true` である場合は 1 に、 `false` である場合は +0 に変換します。
  - オペランドのうちの一方がオブジェクトで、もう一方が数値または文字列である場合は、そのオブジェクトの `valueOf()` および `toString()` メソッドを使用してプリミティブに変換を試みます。

- オペランドが同じ型である場合は、次のよう比較します。

  - 文字列型: 両方のオペランドが同じ文字を同じ順序で持っている場合のみ、 `true` を返します。
  - 数値型: 両方のオペランドが同じ値を持っている場合のみ、 `true` を返します。 `+0` と `-0` は同じ値と見なされます。一方のオペランドが `NaN` である場合は `false` を返します。
  - 論理型: 両方のオペランドが共に `true` であるか、共に `false` である場合のみ `true` になります。

この演算子と[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) 演算子の最も顕著な違いは、厳密等価演算子が型変換を試みない点です。厳密等価演算は、オペランドの型が異なる場合は常に異なるものと見なします。

## 例

### 型変換がない場合の比較

```js
1 == 1;              // true
"hello" == "hello";  // true
```

### 型変換がある場合の比較

```js
"1" ==  1;            // true
1 == "1";             // true
0 == false;           // true
0 == null;            // false
0 == undefined;       // false
0 == !!null;          // true (論理 NOT 演算子を参照)
0 == !!undefined;     // true (論理 NOT 演算子を参照)
null == undefined;    // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;         // true
number1 == number2;   // false
```

### オブジェクトの比較

```js
const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 == object2 // false
object2 == object2 // true
```

### 文字列と String オブジェクトの比較

`new String()` を使用して構築された文字列はオブジェクトであることに注意してください。文字列リテラルとの比較を行うと、 `String` オブジェクトは文字列リテラルに変換され、その中身が比較されます。ただし、両方のオペランドが `String` オブジェクトであった場合は、オブジェクトとして比較され、同じオブジェクトを参照している場合だけ比較に成功します。

```js
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
```

### Date と文字列の比較

```js
const d = new Date('December 17, 1995 03:24:00');
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s);    //true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [不等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Inequality)
- [厳密等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [厳密不等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
