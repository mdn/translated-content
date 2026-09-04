---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "is not a function" は、値を関数として呼び出そうとしたが、その値が実際には関数ではなかった場合に発生します。

## エラーメッセージ

```plain
TypeError: "x" is not a function. (V8-based & Firefox & Safari)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

関数でないものを、関数呼び出ししようとした際に発生するエラーです。また適切な関数が定義されていることを期待されているが、定義されていない場合も発生します。

関数名にタイプミスがないでしょうか？あるいは、メソッドを呼び出そうとしているオブジェクトが、その関数を持っていないのではないでしょうか？　例えば、JavaScript の `Object` オブジェクトには `map` 関数はありませんが、`Array` オブジェクトにはあります。

多くの組み込み関数はコールバック関数を必要とします。これらのメソッドを正しく呼び出すためには、関数を引数に指定する必要があります。

- {{jsxref("Array")}} もしくは {{jsxref("TypedArray")}} オブジェクトを操作する場合:
  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- {{jsxref("Map")}} もしくは {{jsxref("Set")}} を操作する場合:
  - {{jsxref("Map.prototype.forEach()")}}, {{jsxref("Set.prototype.forEach()")}}

## 例

### 関数名のタイプミス

次のように関数名を間違えている場合に発生します。なおこのミスは非常に多く発生します。

```js example-bad
const x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
```

正しい関数名は `getElementById` です。

```js example-good
const x = document.getElementById("foo");
```

### 間違ったオブジェクトに対する関数呼び出し

いくつかのメソッドは、引数に関数が指定されていることを期待していて、しかも特定のオブジェクトの上でのみ正しく動作するものがあります。この典型例が {{jsxref("Array.prototype.map()")}} で、これは {{jsxref("Array")}} オブジェクトでのみ正しく動作します。

```js example-bad
const obj = { a: 13, b: 37, c: 42 };

obj.map((num) => num * 2);

// TypeError: obj.map is not a function
```

オブジェクトではなく、配列を利用しましょう。

```js example-good
const numbers = [1, 4, 9];

numbers.map((num) => num * 2); // [2, 8, 18]
```

### すでに存在するプロパティと名前を共有する関数

クラスを作るとき、プロパティと関数が同じ名前になることがあります。関数を呼び出すと、コンパイラーは関数が存在するのをやめたように考えます。

```js example-bad
function Dog() {
  this.age = 11;
  this.color = "black";
  this.name = "Ralph";
  return this;
}

Dog.prototype.name = function (name) {
  this.name = name;
  return this;
};

const myNewDog = new Dog();
myNewDog.name("Cassidy"); // TypeError: myNewDog.name is not a function
```

代わりに異なるプロパティ名を使ってください。

```js example-good
function Dog() {
  this.age = 11;
  this.color = "black";
  this.dogName = "Ralph"; // this.dogName を .name の代わりに使用
  return this;
}

Dog.prototype.name = function (name) {
  this.dogName = name;
  return this;
};

const myNewDog = new Dog();
myNewDog.name("Cassidy"); // Dog { age: 11, color: 'black', dogName: 'Cassidy' }
```

### 乗算での括弧の使用

数学では、 2 × (3 + 5) を 2\*(3 + 5) または単に 2(3 + 5) と書くことができます。

後者を使用するとエラーが発生します。

```js example-bad
const sixteen = 2(3 + 5);
console.log(`2 x (3 + 5) is ${sixteen}`);
// Uncaught TypeError: 2 is not a function
```

このコードは `*` 演算子を追加すると修正できます。

```js example-good
const sixteen = 2 * (3 + 5);
console.log(`2 x (3 + 5) is ${sixteen}`);
// 2 x (3 + 5) is 16
```

### 正しくエクスポートされたモジュールをインポートする

正しくモジュールをインポートしていることを確認してください。

helpers ライブラリーの例 (`helpers.js`)

```js
function helpers() {}

helpers.groupBy = function (objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    acc[key] ??= [];
    acc[key].push(obj);
    return acc;
  }, {});
};

export default helpers;
```

正しい import の使い方 (`App.js`):

```js
import helpers from "./helpers";
```

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
