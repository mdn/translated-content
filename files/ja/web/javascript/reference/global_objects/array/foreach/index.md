---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - メソッド
  - Prototype
  - リファレンス
translation_of: Web/JavaScript/Reference/Global_Objects/Array/forEach
---
{{JSRef}}

**`forEach()`** メソッドは、与えられた関数を、配列の各要素に対して一度ずつ実行します。

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## 構文

```js
// アロー関数
forEach((element) => { /* ... */ })
forEach((element, index) => { /* ... */ })
forEach((element, index, array) => { /* ... */ })

// コールバック関数
forEach(callbackFn)
forEach(callbackFn, thisArg)

// インラインコールバック関数
forEach(function(element) { /* ... */ })
forEach(function(element, index) { /* ... */ })
forEach(function(element, index, array){ /* ... */ })
forEach(function(element, index, array) { /* ... */ }, thisArg)
```

<h3 id="Parameters" name="Parameters">引数</h3>

- `callbackFn`

  - : 各要素に対して実行するコールバック関数で、1 つから 3 つの引数を受け付けます。

    - `element`
      - : 現在処理されている配列の要素です。
    - `index` {{optional_inline}}
      - : 配列内の `currentValue` の添字です。
    - `array` {{optional_inline}}
      - : `forEach()` が呼び出されている配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` 内で `this` として使用する値です。

### 返値

`undefined` です。

## 解説

`forEach()` は、与えられた関数 `callbackFn` を配列に含まれる各要素に対して一度ずつ、昇順で呼び出します。インデックスプロパティが削除されていたり、初期化されていなかったりした場合は呼び出されません。（疎らな配列については、[下記の例を参照](#初期化されていない値については何もしない（疎らな配列）)。）

`callbackFn` は次の 3 つの引数で呼び出されます。

1. 要素の値
2. 要素のインデックス
3. 走査されている配列

`thisArg` 引数が `forEach()` に与えられると、それがコールバックの `this` 値になります。
最終的に `callbackFn` から見える `thisArg` の値は、[関数が見る `this` を決める通常のルール](/ja/docs/Web/JavaScript/Reference/Operators/this) に従って決定されます。

`forEach()` によって処理される配列要素の範囲は、`callbackFn` が最初に呼び出される前に設定されます。訪問済みの添字、または範囲を外れた添字に割り当てられている要素については `callbackFn` が実行されません。既存の配列要素が変更または削除された場合、`callbackFn` に渡される値は `forEach()` がそれらを参照した時点での値になります。削除された配列要素を参照することはありません。既に参照された配列要素が反復処理の間に（例えば {{jsxref("Array.prototype.shift()", "shift()")}} を使用して）削除された場合、後の要素は飛ばされます。([下記の例を参照してください](#反復処理中の配列の変更)。)

> **Warning:** 前項で説明したような同時進行の変更は、理解しにくいコードになることが多いので、（特殊な場合を除き）一般に避けるべきです。

`forEach()` は配列の各要素に対して `callbackFn` 関数を一度ずつ実行します。{{jsxref("Array.prototype.map()", "map()")}} や {{jsxref("Array.prototype.reduce()", "reduce()")}} と異なり、返値は常に {{jsxref("undefined")}} であり、チェーンできません。チェーンの最後に副作用を生じさせるのが典型的な使用法です。

`forEach()` は呼び出された配列を変化させません。(ただし `callbackFn` が変化させる可能性があります)

> **Note:** 例外を発生する以外の方法で、`forEach()` ループを止めることはできません。ループ中に中断する必要がある場合、`forEach()` メソッドは適切な方法ではありません。
>
> 早期終了を行うには下記のような手段が適しています。
>
> - 単純な [for](/ja/docs/Web/JavaScript/Reference/Statements/for) ループ
> - [for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of)
>   / [for...in](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループ
> - {{jsxref("Array.prototype.every()")}}
> - {{jsxref("Array.prototype.some()")}}
> - {{jsxref("Array.prototype.find()")}}
> - {{jsxref("Array.prototype.findIndex()")}}
>
> 他の Array のメソッドである {{jsxref("Array.prototype.every()", "every()")}}, {{jsxref("Array.prototype.some()", "some()")}}, {{jsxref("Array.prototype.find()", "find()")}}, {{jsxref("Array.prototype.findIndex()", "findIndex()")}} は、配列の要素を検査する際、truthy の値を返すことで以降の繰り返しが必要であるかどうかを決めます。

> **Note:** forEach は同期関数を期待します。
>
> `forEach` はプロミスを待ちません。`forEach` のコールバックとしてプロミス (または非同期関数) を使用する場合は、その意味合いを理解しておくようにしてください。
>
> ```js
> const ratings = [5, 4, 5];
> let sum = 0;
>
> const sumFunction = async (a, b) => a + b;
>
> ratings.forEach(async (rating) => {
>   sum = await sumFunction(sum, rating);
> });
>
> console.log(sum);
> // 本来期待される出力: 14
> // 実際の出力: 0
> ```

## 例

### 初期化されていない値については何もしない（疎らな配列）

```js
const arraySparse = [1, 3,, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// 1
// 3
// 7
// numCallbackRuns: 3
// 備考: 見ての通り、存在しない 3 から 7 までの値では、コールバック関数が呼び出されません。
```

### for ループから forEach への変換

```js
const items = ['item1', 'item2', 'item3'];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});
```

### 配列の内容の出力

> **Note:** 配列の内容をコンソールに表示するために、配列の整形済みのバージョンを表示する {{domxref("Console/table", "console.table()")}} を使用することができます。
>
>以下の例では同じことを `forEach()` を使用して行う他の方法を説明しています。

次のコードは配列の要素ごとに、コンソールに 1 行ずつ要素の内容を出力します。

```js
const logArrayElements = (element, index, array) => {
  console.log('a[' + index + '] = ' + element);
};

// 配列の 2 の位置には項目が存在しないため、
// スキップされることに注意してください
[2, 5,, 9].forEach(logArrayElements);
// 出力結果:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### thisArg の使用

以下の（不自然な）例は、配列の中の各項目からオブジェクトのプロパティを更新します。

```js
function Counter() {
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function(array) {
  array.forEach(function countEntry(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
};

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
```

`thisArg` 引数 (`this`) が `forEach()` に提供されているため、`callbackFn` の呼び出しのたびにこれが渡されます。コールバックはこれを `this` の値として使用します。

> **Note:** コールバック関数の受け渡しに[アロー関数式](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使用した場合、`thisArg` 引数は、アロー関数が文法的に {{jsxref("Operators/this", "this")}} の値に結び付けられているため省略可能です。

### オブジェクトをコピーする関数

次のコードは与えられたオブジェクトのコピーを生成します。

オブジェクトのコピーを生成するには他にもいくつか方法があります。次のものは一つの方法であり、`Array.prototype.forEach()` が ECMAScript 5 の `Object.*` メタプロパティ関数を使用することでどのように動作するかを説明するために示しているものです。

```js
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 looks like obj1 now
```

### 反復処理中の配列の変更

次の例では `one`, `two`, `four` をログ出力します。

値 `two` を持つ項目に達した時、配列全体の最初の項目はシフトして外れ、すべての残りの項目が 1 つ上の位置に繰り上がります。`four` が配列の以前の位置に来るため、`three` が飛ばされます。

`forEach()` は繰り返しの前に配列のコピーを生成しません。

```js
const words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
  console.log(word);
  if (word === 'two') {
    words.shift(); // 'one' が配列から削除される
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']
```

### 配列の平板化

次の例は学習目的だけのものです。内蔵メソッドを使用して配列を平板化したい場合は、{{jsxref("Array.prototype.flat()")}} を使用することができます (ES2019 の一部となる予定で、一部のブラウザーではすでに実装済み)。

```js
const flatten = (arr) => {
  const result = [];
  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });
  return result;
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`core-js` にある `Array.prototype.forEach` のポリフィル](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
