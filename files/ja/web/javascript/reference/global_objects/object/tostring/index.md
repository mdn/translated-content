---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
---

{{JSRef}}

**`toString()`** メソッドは、オブジェクトを表す文字列を返します。

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## 構文

```
obj.toString()
```

### 返値

オブジェクトを表す文字列です。

## 解説

すべてのオブジェクトは `toString` メソッドを持ち、オブジェクトが文字列値として表される場面や、文字列が期待される構文で参照されたときに自動的に呼び出されます。既定で、 `toString()` メソッドは `Object` の子孫にあたるあらゆるオブジェクトに継承されています。このメソッドがカスタムオブジェクト中で上書きされていない場合、 `toString()` は "`[object type]`" という文字列を返します (`type` は そのオブジェクトの型)。以下のコードがこれを例示しています。

```js
const o = new Object();
o.toString(); // [object Object] を返す
```

> **メモ:** JavaScript 1.8.5 から、 `toString()` を {{jsxref("null")}} に対して呼び出した場合には `[object Null]` を、 {{jsxref("undefined")}} に対して呼び出した場合には `[object Undefined]` を返すようになり、これは ECMAScript 5th Edition とその後のエラッタによって定義されました。
>
> [toString() を使用したオブジェクトクラスの検出](#Using_toString_to_detect_object_class)を参照してください。

## 引数

Number と BigInt の `toString()` は、オプションの引数 `radix` で基数の値を取り、最小値は 2 で最大値は 36 です。

`radix` を使用すると、十進数 (1,2,3,4,5,.........) を他の基数の数字に変換することができます。以下の例では十進数を二進数 (バイナリ) に変換しています。

```
let baseTenInt = 10;
console.log(baseTenInt.toString(2));
// 期待される結果は "1010"
```

BigInt についても同じです。

```js
let bigNum = BigInt(20);
console.log(bigNum.toString(2));
// 期待される結果は "10100"
```

よくある基数としては次のものがあります。

- 2 は[二進数](https://ja.wikipedia.org/wiki/%E4%BA%8C%E9%80%B2%E6%B3%95)になります。
- 8 は[八進数](https://ja.wikipedia.org/wiki/%E5%85%AB%E9%80%B2%E6%B3%95)になります。
- 10 は [十進数](https://ja.wikipedia.org/wiki/%E5%8D%81%E9%80%B2%E6%B3%95)になります。
- 16 は [十六進数](https://ja.wikipedia.org/wiki/%E5%8D%81%E5%85%AD%E9%80%B2%E6%B3%95)になります。

## 例

### 既定の toString メソッドの上書き

既定の `toString()` メソッドに代わって呼び出される関数を作ることができます。 `toString()` メソッドは引数を取らず、文字列を返す必要があります。 `toString()` メソッドを作成した場合は好きな文字列を返すことができますが、オブジェクトに関する情報を伝えるのが一番役に立つでしょう。

以下のコードは `Dog` オブジェクト型を定義し、 `Dog` 型のオブジェクト `theDog` を生成しています。

```js
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog("Gabby", "Lab", "chocolate", "female");
```

このカスタムオブジェクト上で `toString()` メソッドを呼び出した場合、メソッドは {{jsxref("Object")}} から継承された既定値を返します。

```js
theDog.toString(); // [object Object] を返す
```

以下のコードでは、 `dogToString()` を生成および割り当てし、既定の `toString()` メソッドを上書きします。この関数はオブジェクトの `name`, `breed`, `color`, `sex` を "`property = value;`" の形で含む文字列を生成します。

```js
Dog.prototype.toString = function dogToString() {
  const ret =
    "Dog " +
    this.name +
    " is a " +
    this.sex +
    " " +
    this.color +
    " " +
    this.breed;
  return ret;
};
```

または、 ES6 の {{jsxref("Template_literals", "テンプレート文字列", "", 1)}}を使用した例です。

```js
Dog.prototype.toString = function dogToString() {
  return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
};
```

前者のコードの中で、 `theDog` が文字列の文脈で使用されるたびに、 JavaScript は自動的に `dogToString()` 関数を呼び出し、以下の文字列を返します。

```js
"Dog Gabby is a female chocolate Lab";
```

### toString() を使用したオブジェクトクラスの判別

`toString()` はすべてのオブジェクトに対し、(既定では) そのクラスを得るために使用することができます。

すべてのオブジェクトで `Object.prototype.toString()` を使うためには、 {{jsxref("Function.prototype.call()")}} または {{jsxref("Function.prototype.apply()")}} を、第 1 引数 (`thisArg`) に調べたいオブジェクトを渡して呼び出す必要があります。

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
toString.call(Math); // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

このような `toString()` の使用は信頼できません。オブジェクトは `Object.prototype.toString()` の動作を {{jsxref("Symbol.toStringTag")}} プロパティを定義することで変更でき、それによって次のように予想外の動作になります。

```js
const myDate = new Date();
Object.prototype.toString.call(myDate); // [object Date]

myDate[Symbol.toStringTag] = "myDate";
Object.prototype.toString.call(myDate); // [object myDate]

Date.prototype[Symbol.toStringTag] = "prototype polluted";
Object.prototype.toString.call(new Date()); // [object prototype polluted]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.toString")}}

## 関連情報

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
