---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`forEach()`** メソッドは、与えられた関数を、配列の各要素に対して一度ずつ実行します。

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## 構文

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数。返値は破棄されます。この関数は以下の引数で呼び出されます。
    - `element`
      - : 現在処理中の配列の要素です。
    - `index`
      - : 現在処理中の配列の要素のインデックスです。
    - `array`
      - : `forEach()` が呼び出されている配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使用する値です。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

なし ({{jsxref("undefined")}})。

## 解説

`forEach()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。指定された関数 `callbackFn` を配列に含まれる各要素に対して一度ずつ、昇順で呼び出します。 {{jsxref("Array/map", "map()")}} と異なり、 `forEach()` は常に {{jsxref("undefined")}} を返し、連鎖させることはできません。典型的な使用する用途は、チェーンの終わりで副次効果を実行することです。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節をご覧下さい。

`callbackFn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)で空のスロットに対しては呼び出されません。

`forEach()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

例外を発生する以外の方法で、 `forEach()` ループを止めたり脱出したりする方法はありません。そのような動作を行う場合、 `forEach()` メソッドは適切な方法ではありません。

早期終了は [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of), [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) のようなループ文で行うことができます。また、{{jsxref("Array/every", "every()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}} のような配列メソッドも、それ以上の反復処理が不要な場合は、直ちに反復処理を停止します。

`forEach()` は同期関数を期待します。プロミスを待ちません。`forEach` のコールバックとしてプロミス（または非同期関数）を使用する場合は、その意味合いを理解しておくようにしてください。

```js
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// 本来期待される出力: 14
// 実際の出力: 0
```

一連の非同期処理を順次または並列に実行するには、[プロミスの合成](/ja/docs/Web/JavaScript/Guide/Using_promises#合成)を参照してください。

## 例

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

> [!NOTE]
> 配列の内容をコンソールに表示するために、配列の整形済みのバージョンを表示する {{domxref("console/table_static", "console.table()")}} を使用することができます。
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
    // Only function expressions have their own this bindings.
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

> [!NOTE]
> コールバック関数の受け渡しに[アロー関数式](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使用した場合、`thisArg` 引数は、アロー関数が文法的に {{jsxref("Operators/this", "this")}} の値に結び付けられているため省略可能です。

### オブジェクトをコピーする関数

次のコードは与えられたオブジェクトのコピーを生成します。

オブジェクトのコピーを作成するには様々な方法があります。
以下のものは一つの方法で、`Array.prototype.forEach()` が `Object.*` ユーティリティ関数を使用して、どのように動作するかを説明しています。

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

### 配列の平坦化

次の例は学習目的だけのものです。組み込みメソッドを使用して配列を平坦化したい場合は、{{jsxref("Array.prototype.flat()")}} を使用することができます。

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

### callbackFn の第 3 引数の使用

`array` 引数は、配列の別の要素にアクセスしたい場合、特に配列を参照する既存の変数を保有していない場合に便利です。次の例では、最初の `filter()` を使用して正の値を抽出し、次に `forEach()` を使用してその付近をログに記録します。

```js
const numbers = [3, -1, 1, 4, 1, 5];
numbers
  .filter((num) => num > 0)
  .forEach((num, idx, arr) => {
    // arr 引数がない場合、変数に保存せずに中間配列に
    // 簡単にアクセスする方法はない
    console.log(arr[idx - 1], num, arr[idx + 1]);
  });
// undefined 3 1
// 3 1 4
// 1 4 1
// 4 1 5
// 1 5 undefined
```

### 疎配列に対する forEach() の使用

```js-nolint
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

### 配列以外のオブジェクトに対する forEach() の呼び出し

`forEach()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // length が 3 であるため forEach() からは無視される
};
Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
// 2
// 3
// 4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.forEach` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
