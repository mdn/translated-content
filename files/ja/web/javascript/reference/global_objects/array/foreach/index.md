---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
l10n:
  sourceCommit: 9b38f886d21c5d0a428f58acb20c4d0fc6c2e098
---

{{JSRef}}

**`forEach()`** メソッドは、与えられた関数を、配列の各要素に対して一度ずつ実行します。

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## 構文

```js
// アロー関数
forEach((element) => {
  /* … */
});
forEach((element, index) => {
  /* … */
});
forEach((element, index, array) => {
  /* … */
});

// コールバック関数
forEach(callbackFn);
forEach(callbackFn, thisArg);

// インラインコールバック関数
forEach(function (element) {
  /* … */
});
forEach(function (element, index) {
  /* … */
});
forEach(function (element, index, array) {
  /* … */
});
forEach(function (element, index, array) {
  /* … */
}, thisArg);
```

### 引数

- `callbackFn`

  - : 各要素に対して実行されるコールバック関数です。

    この関数は、以下の引数と共に呼び出されます。

    - `element`
      - : 現在処理されている配列の要素です。
    - `index`
      - : 配列内の `element` の添字です。
    - `array`
      - : `forEach()` が呼び出されている配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` 内で `this` として使用する値です。

### 返値

`undefined` です。

## 解説

`forEach()` は、与えられた関数 `callbackFn` を配列に含まれる各要素に対して一度ずつ、昇順で呼び出します。インデックスプロパティが削除されていたり、初期化されていなかったりした場合は呼び出されません。（不連続な配列については、[下記の例を参照](#初期化されていない値については何もしない（不連続な配列）)。）

`callbackFn` は次の 3 つの引数で呼び出されます。

1. 要素の値
2. 要素のインデックス
3. 走査されている配列

`thisArg` 引数が `forEach()` に与えられると、それがコールバックの `this` 値になります。
最終的に `callbackFn` から見える `thisArg` の値は、[関数が見る `this` を決める通常のルール](/ja/docs/Web/JavaScript/Reference/Operators/this) に従って決定されます。

`forEach()` によって処理される配列要素の範囲は、`callbackFn` が最初に呼び出される前に設定されます。訪問済みの添字、または範囲を外れた添字に割り当てられている要素については `callbackFn` が実行されません。既存の配列要素が変更または削除された場合、`callbackFn` に渡される値は `forEach()` がそれらを参照した時点での値になります。削除された配列要素を参照することはありません。既に参照された配列要素が反復処理の間に（例えば {{jsxref("Array.prototype.shift()", "shift()")}} を使用して）削除された場合、後の要素は飛ばされます。([下記の例を参照してください](#反復処理中の配列の変更)。)

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

`forEach()` は配列の各要素に対して `callbackFn` 関数を一度ずつ実行します。{{jsxref("Array.prototype.map()", "map()")}} や {{jsxref("Array.prototype.reduce()", "reduce()")}} と異なり、返値は常に {{jsxref("undefined")}} であり、チェーンできません。チェーンの最後に副作用を生じさせるのが典型的な使用法です。

`forEach()` は呼び出された配列を変化させません。(ただし `callbackFn` が変化させる可能性があります)

> **メモ:** 例外を発生する以外の方法で、`forEach()` ループを止めることはできません。ループ中に中断する必要がある場合、`forEach()` メソッドは適切な方法ではありません。
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

> **メモ:** forEach は同期関数を期待します。
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

### 初期化されていない値については何もしない（不連続な配列）

```js
const arraySparse = [1, 3, /* 空 */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }
```

3 と 7 の間の値がないところで、コールバック関数が呼び出されなかったことが分かります。

### for ループから forEach への変換

```js
const items = ["item1", "item2", "item3"];
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

> **メモ:** 配列の内容をコンソールに表示するために、配列の整形済みのバージョンを表示する {{domxref("Console/table", "console.table()")}} を使用することができます。
>
> 以下の例では同じことを `forEach()` を使用して行う他の方法を説明しています。

次のコードは配列の要素ごとに、コンソールに 1 行ずつ要素の内容を出力します。

```js
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// 配列の 2 の位置には項目が存在しないため、
// スキップされることに注意してください
[2, 5, , 9].forEach(logArrayElements);
// 出力結果:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### thisArg の使用

以下の（不自然な）例は、配列の中の各項目からオブジェクトのプロパティを更新します。

```js
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // Only function expressions will have its own this binding
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
```

`thisArg` 引数 (`this`) が `forEach()` に提供されているため、`callbackFn` の呼び出しのたびにこれが渡されます。コールバックはこれを `this` の値として使用します。

> **メモ:** コールバック関数の受け渡しに[アロー関数式](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使用した場合、`thisArg` 引数は、アロー関数が文法的に {{jsxref("Operators/this", "this")}} の値に結び付けられているため省略可能です。

### オブジェクトをコピーする関数

次のコードは与えられたオブジェクトのコピーを生成します。

オブジェクトのコピーを作成するには様々な方法があります。以下のものは一つの方法で、`Array.prototype.forEach()` が `Object.*` ユーティリティ関数を使用して、どのように動作するかを説明しています。

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

値 `two` を含む項目に到達すると、配列全体の最初の項目が取り出され、残りのすべての項目が 1 つずつ繰り上がります。
要素 `four` は配列の前の方の位置にあるので、 `three` は飛ばされます。

`forEach()` は反復処理の前に配列のコピーを生成しません。

```js
const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); // 'one' が配列から削除される
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']
```

### 配列の平板化

次の例は学習目的だけのものです。組み込みメソッドを使用して配列を平板化したい場合は、{{jsxref("Array.prototype.flat()")}} を使用することができます。

```js
const flatten = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

// 使用方法
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.forEach` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
