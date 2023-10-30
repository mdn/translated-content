---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
---

{{JSRef}}

**`call()`** メソッドは、 `this` の値と、独立して提供された引数によって関数を呼び出します。

{{EmbedInteractiveExample("pages/js/function-call.html")}}

## 構文

```
func.call([thisArg[, arg1, arg2, ...argN]])
```

### 引数

- `thisArg` {{optional_inline}}

  - : `func` が呼び出されたときに `this` として使用される値です。

    > **メモ:** 特定の場面では、 `thisArg` はメソッドから見える実際の値でない場合があります。
    >
    > もし、そのメソッドが{{jsxref("Strict_mode", "厳格モード", "", 1)}}の関数ではなかった場合、 {{jsxref("Global_Objects/null", "null")}} と {{jsxref("Global_Objects/undefined", "undefined")}} はグローバルオブジェクトで置き換えられ、プリミティブ値はオブジェクトに変換されます。

- `arg1, arg2, ...argN` {{optional_inline}}
  - : 呼び出し先の関数に渡される引数です。

### 返値

**`this`** の値と引数を指定して関数を呼び出した結果です。

## 解説

`call()` はあるオブジェクトに所属する関数やメソッドを、別なオブジェクトに割り当てて呼び出すことができます。

`call()` は関数やメソッドに `this` の新しい値を提供します。 `call()` によって、いったんメソッドを書いてから、新しいオブジェクトへメソッドを書き直さずに他のオブジェクトへと継承することができます。

> **メモ:** このメソッドの構文は {{jsxref("Function.prototype.apply", "apply()")}} とほぼ同じですが、基本的な違いは `call()` が**引数リスト**を受け取るのに対して、 `apply()` は**引数の単一の配列**を受け取る点です。

## 例

### call メソッドを使用してオブジェクトのコンストラクターを連鎖させる

`call` を使用して (Java と同様に) オブジェクトのコンストラクターを連鎖させることができます。

下記の例では、 `Product` オブジェクトのコンストラクターは `name` と `price` の二つの引数で定義されています。

他の `Food` と `Toy` の二つの関数は、 `Product` を呼び出して `this` と `name` と `price` を渡します。 `Product` は `name` と `price` プロパティを初期化し、どちらも特化した関数が `category` を定義します。

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

const cheese = new Food("feta", 5);
const fun = new Toy("robot", 40);
```

### call メソッドを使用した無名関数の呼び出し

次の例では、無名関数を作成して `call` を使用して配列内の各オブジェクトに対して呼び出しを行います。

ここでの無名関数の主な目的は、 print 関数をすべてのオブジェクトに追加することで、配列内のオブジェクトの正しいインデックスを表示できるようにします。実際には `this` の値としてオブジェクトを渡す必要ありませんが、例示の目的で使用しています。

> **メモ:** オブジェクトを `this` の値として渡すことは厳密には必要ではありませんが、説明のために使用しました。

```js
const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Fail" },
];

for (let i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
  }).call(animals[i], i);
}
```

### call を使用した関数を呼び出しと 'this' のコンテキストの指定

次の例では、`greet` メソッドを呼ぶとき、`this` の値を `obj` オブジェクトにバインドしています。

```js
function greet() {
  const reply = [
    this.animal,
    "typically sleep between",
    this.sleepDuration,
  ].join(" ");
  console.log(reply);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```

### `call` を使用した最初の引数を指定しない関数の呼び出し

下記の例では、 `display` 関数を、最初の引数を渡さずに呼び出しています。最初の引数が渡されないと、 `this` の値はグローバルオブジェクトに結び付けられます。

```js
var sData = "Wisen";

function display() {
  console.log("sData value is %s ", this.sData);
}

display.call(); // sData value is Wisen
```

> **メモ:** 厳格モードでは `this` の値は `undefined` になります。以下を参照してください。

```js
"use strict";

var sData = "Wisen";

function display() {
  console.log("sData value is %s ", this.sData);
}

display.call(); // undefined の 'sData' のプロパティは読めない
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Function.call")}}

## 関連情報

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- [オブジェクト指向 JavaScript 入門](/ja/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
