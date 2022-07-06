---
title: スプレッド構文
slug: Web/JavaScript/Reference/Operators/Spread_syntax
tags:
  - ECMAScript 2015
  - イテレーター
  - JavaScript
  - 言語機能
  - Reference
browser-compat: javascript.operators.spread
translation_of: Web/JavaScript/Reference/Operators/Spread_syntax
---
{{jsSidebar("Operators")}}

**スプレッド構文** (`...`) を使うと、配列式や文字列などの反復可能オブジェクトを、0 個以上の引数 (関数呼び出しの場合) や要素 (配列リテラルの場合) を期待された場所で展開したり、オブジェクト式を、0 個以上のキーと値の組 (オブジェクトリテラルの場合) を期待された場所で展開したりすることができます。

{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## 解説

スプレッド構文は、オブジェクトや配列のすべての要素を何らかのリストに入れる必要がある場合に使用することができます。

上記の例では、定義された関数は、引数として `x`、`y`、`z` を受け取り、これらの値の合計を返します。配列の値も定義されています。

この関数を呼び出す際には、スプレッド構文と配列名 — `...numbers` を使って、配列内のすべての値を渡します。

配列に 3 つ以上の数値が含まれていた場合 (`[1, 2, 3, 4]` など)、4 つすべてが渡されることを除けば、それでも問題なく動作しますが、次のように関数にさらに引数を追加しない限り、最初の 3 つだけが使用されます。

```js
function sum(x, y, z, n) {
  return x + y + z + n;
}
```

上記の例はやや柔軟性に欠けます。スプレッド構文の真価は、オブジェクトや配列などに含まれる要素の数に関係なく、同じ値で動作することにあります。

一般的には、ローカルデータストアに新しいアイテムを追加したり、保存されているすべてのアイテムに新しく追加されたアイテムを加えて表示したりする場合に使用されます。この種の操作を非常にシンプルに表すと、次のようになります。

```js
let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
```

上記の例では、最後の行を何度でも再実行して、配列の最後に 12 を追加し続けることができます。

## 構文

関数呼び出しの場合:

```js
myFunction(...iterableObj); // iterableObj のすべての要素を関数 myFunction の引数として渡す
```

配列リテラルや文字列の場合:

```js
[...iterableObj, '4', 'five', 6]; // iterableObj のすべての要素を挿入することで、2 つの配列を組み合わせる
```

オブジェクトリテラルの場合 (ECMAScript 2018 の新機能)

```js
let objClone = { ...obj }; // オブジェクトのすべてのキーと値の組を渡す
```

## 残余構文 (引数)

残余構文はスプレッド構文と外見がよく似ていますが、こちらはスプレッド構文とは逆の働きといえます。スプレッド構文が要素を展開するのに対して、残余構文は複数の要素を集約して 1 つのオブジェクトに「濃縮」します。{{jsxref("Functions/rest_parameters", "残余引数", "", 1)}}を参照してください。

## 例

### 関数呼び出しでの展開

#### apply() を置き換える

配列の要素を引数にして関数を呼び出すには {{jsxref("Function.prototype.apply()")}} を使うのが一般的です。

```js
function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction.apply(null, args);
```

スプレッド構文を使うと、上のコードは次のように書くことができます。

```js
function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);
```

スプレッド構文は、引数リストのどの引数でも使用でき、またスプレッド構文は複数回使用することもできます。

```js
function myFunction(v, w, x, y, z) { }
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### new 演算子の適用

{{jsxref("Operators/new", "new")}} によってコンストラクターを呼び出すとき、配列と `apply()` を**直接**使用することはできません (`apply()` は `[[Call]]` を実行するのであり `[[Construct]]` ではない)。ただし、配列はスプレッド構文のおかげで簡単に `new` を使用することができます。

```js
let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);
```

スプレッド構文を使わずに同じ結果を得るには、専用の関数を使う**間接的**な手段を取らざるをえません。

```js
function applyAndNew(constructor, args) {
   function partial () {
      return constructor.apply(this, args);
   };
   if (typeof constructor.prototype === "object") {
      partial.prototype = Object.create(constructor.prototype);
   }
   return partial;
}

function myConstructor () {
   console.log("arguments.length: " + arguments.length);
   console.log(arguments);
   this.prop1="val1";
   this.prop2="val2";
};

let myArguments = ["hi", "how", "are", "you", "mr", null];
let myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
//  (internal log of myConstructor):           arguments.length: 6
//  (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
//  (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}
```

### 配列リテラルでのスプレッド構文

#### より強力な配列リテラル

スプレッド構文を使用しない場合、既存の配列を一部として使用して新しい配列を作成するには、配列リテラル構文は十分ではなく、{{jsxref("Array.prototype.push", "push()")}}, {{jsxref("Array.prototype.splice", "splice()")}}, {{jsxref("Array.prototype.concat", "concat()")}} などを組み合わせて使う高圧的なコードを使用しなければなりません。

```js
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]
```

関数の引数と同様に、`...` は配列リテラルのどこでも、何回でも使えます。

#### 配列を複製する

```js
let arr = [1, 2, 3];
let arr2 = [...arr]; // arr.slice() のような動きです

arr2.push(4);
//  arr2 は [1, 2, 3, 4] になります
//  arr は変更されません
```

> **Note:** コピーは 1 段階の深さで行われます。そのため、次の例のような多次元配列のようなオブジェクトをコピーする場合には適さないでしょう。({{jsxref("Object.assign()")}} についても同じことが言えます。)
>
> ```js example-bad
> let a = [[1], [2], [3]];
> let b = [...a];
>
> b.shift().shift();
> //  1
>
> //  しまった。 'a' も影響を受けてしまった。
> a
> //  [[], [2], [3]]
> ```

#### 配列を連結するより良い方法

ある配列を既存の配列の末尾に連結するには、{{jsxref("Array.prototype.concat()")}} がよく使われます。スプレッド構文を使用しないと、これは次のように行われます。

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

// arr2 のすべての要素を arr1 に追加する
arr1 = arr1.concat(arr2);
```

スプレッド構文を使うと、次のように書けます。

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
//  arr1 は [0, 1, 2, 3, 4, 5] となる
// 注: これ以外に const を使用すると、TypeError (invalid assignment) が発生します
```

{{jsxref("Array.prototype.unshift()")}} は、値の配列を既存の配列の先頭に挿入するためによく使われます。スプレッド構文を使用しないと、これは次のように行われます。

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  arr2 のすべての要素を arr1 へ移植します
Array.prototype.unshift.apply(arr1, arr2)

//  arr1 is now [3, 4, 5, 0, 1, 2]</pre>
```

スプレッド構文を使うと、次のようになります。

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2]
```

> **Note:** `unshift()` とは異なり、これは新しい `arr1` を生成しており、その場では元の `arr1` を変更しません。

### オブジェクトリテラルでのスプレッド構文

[Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) proposal (ES2018) では、{{jsxref("Operators/Object_initializer", "オブジェクトリテラル", 1)}}でのスプレッド構文が追加されています。スプレッド構文の対象となるオブジェクトの列挙可能なプロパティを、新しいオブジェクトにコピーします。

浅いコピー (プロトタイプを除く) の作成や、マージしたオブジェクトの作成が {{jsxref("Object.assign()")}} を使うよりも短いコードで書けます。

```js
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

{{jsxref("Object.assign()")}} は{{jsxref("Functions/set", "セッター")}}を起動しますが、スプレッド構文は起動しないことに注意してください。

スプレッド構文は {{jsxref("Object.assign()")}} 関数を置き換えたり模倣することはできないことに注意してください。

```js
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

let mergedObj1 = merge (obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge ({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

上記の例では、スプレッド構文は期待通りに動作しません。残りの引数があるため、引数の*配列*がオブジェクトリテラルにとして展開されます。

### 反復可能オブジェクトにのみ利用可能

オブジェクト自体は反復可能ではありませんが、配列の中で使用したり、`map()`, `reduce()`, `assign()` などの反復関数と共に使用したりすることで反復可能になります。2 つのオブジェクトをスプレッド演算子で結合する場合は、結合時に別の反復処理関数を使用することを前提としています。

スプレッド構文 (スプレッドプロパティの場合を除く) は、[反復可能](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)オブジェクトにのみ適用できます。

```js
let obj = {'key1': 'value1'};
let array = [...obj]; // TypeError: obj is not iterable
```

### 大量の値を展開する場合

JavaScript エンジンには、引数の個数に上限があります。関数呼び出しでのスプレッド構文では、引数の個数がその上限を超えてしまう可能性に留意してください。詳細は {{jsxref("Function.prototype.apply", "apply()")}} のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Functions/rest_parameters", "残余引数", "", 1)}} (こちらも ‘`...`’)
- {{jsxref("Function.prototype.apply()")}} (こちらも ‘`...`’)
