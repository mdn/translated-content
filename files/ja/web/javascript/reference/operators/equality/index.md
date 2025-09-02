---
title: 等価演算子 (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**等価演算子 (`==`)** は、 2 つのオペランドが等しいことを検査し、論理値で結果を返します。
[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)演算子とは異なり、オペランドの型が異なる場合には型の変換を試みてから比較を行います。

{{InteractiveExample("JavaScript デモ: 式 - 等価演算子")}}

```js interactive-example
console.log(1 == 1);
// 予想される結果: true

console.log("hello" == "hello");
// 予想される結果: true

console.log("1" == 1);
// 予想される結果: true

console.log(0 == false);
// 予想される結果: true
```

## 構文

```js-nolint
x == y
```

## 解説

等価演算子 (`==` および `!=`) は、[IsLooselyEqual](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#による緩い等価性) の意味を提供します。これは、およそ次のようにまとめることができます。

1. オペランドが同じ型である場合、以下のように比較されます。
   - オブジェクト: 両方のオペランドが同じオブジェクトを参照している場合に限り `true` を返します。
   - 文字列: 両方のオペランドに同じ文字が同じ順番で入っている場合のみ `true` を返します。
   - 数値: 両方のオペランドが同じ値である場合のみ `true` を返します。`+0` と `-0` は同じ値として扱われます。どちらかのオペランドが `NaN` である場合は `false` を返します。従って、`NaN` は `NaN` とは等しくなりません。
   - 論理値: 両方が `true` または両方が `false` の場合のみ `true` を返します。
   - 長整数: 両方のオペランドが同じ値である場合のみ `true` を返します。
   - シンボル: 両方のオペランドが同じシンボルを参照している場合のみ `true` を返します。
2. オペランドの一方が `null` または `undefined` である場合、もう一方も `null` または `undefined` であれば `true` を返します。それ以外の場合は `false` を返します。
3. オペランドの一方がオブジェクトで、もう一方がプリミティブである場合、[オブジェクトをプリミティブに変換します](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)。
4. この段階で、両方のオペランドはプリミティブ（文字列、数値、論理値、シンボル、長整数のいずれか）に変換されます。残りの変換は、ケースバイケースで行われます。
   - 両方が同じ型であれば、手順 1 を使用して比較します。
   - 一方のオペランドがシンボルで、もう一方がそうでない場合は、`false` を返します。
   - 一方のオペランドが論理型で、もう一方がそうでない場合は、[論理値から数値への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)が行われます。`true` は 1 に変換され、`false` は 0 に変換されます。それから 2 つのオペランドを緩い等価性で比較します。
   - 数値から文字列へ: [文字列から数値へ変換します](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)。変換に失敗すると `NaN` となり、等価性が `false` となることが保証されています。
   - 数値から長整数へ: 数学的な値で比較します。数値が ±Infinity または `NaN` であれば、`false` を返します。
   - 文字列から長整数へ: 文字列を [`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) コンストラクターと同じアルゴリズムを使用して長整数へと変換します。変換に失敗した場合は、 `false` を返します。

緩い等価性は対称的です。 `A == B` は、`A` と `B` がいかなる値であっても（変換の適用順序を除いて）、常に `B == A` と同一の意味を持ちます。

[厳密な等価性](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)演算子（`===`）との最も顕著な違いは、厳密等価演算子が型変換を一切試みない点です。代わりに、厳密等価演算子はオペランドの型が異なると、常に異なるものと見なします。厳密等価演算子は基本的に段階 1 のみを実行し、それ以外の場合はすべて `false` を返します。

上記のアルゴリズムには「意図的な違反」があります。オペランドの一方が [`document.all`](/ja/docs/Web/API/Document/all) の場合、 `undefined` として扱われます。つまり、 `document.all == null` は `true` ですが、 `document.all === undefined && document.all === null` は `false` となります。

## 例

### 型変換がない場合の比較

```js
1 == 1; // true
"hello" == "hello"; // true
```

### 型変換がある場合の比較

```js
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true (論理 NOT 演算子を参照)
0 == !!undefined; // true (論理 NOT 演算子を参照)
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false
```

### オブジェクトの比較

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false
console.log(object1 == object1); // true
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
const d = new Date("1995-12-17T03:24:00");
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s); // true
```

### 配列と文字列の比較

```js
const a = [1, 2, 3];
const b = "1,2,3";
a == b; // true。 `a` を文字列に変換

const c = [true, 0.5, "hey"];
const d = c.toString(); // "true,0.5,hey"
c == d; // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [不等価演算子 (`!=`)](/ja/docs/Web/JavaScript/Reference/Operators/Inequality)
- [厳密等価演算子 (`===`)](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [厳密不等価演算子 (`!==`)](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
