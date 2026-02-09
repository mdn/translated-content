---
title: Iterator.concat()
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/concat
l10n:
  sourceCommit: dc02b8a490ea0ff4ac1236546f32270ca0cc0aa5
---

**`Iterator.concat()`** は静的メソッドで、新しい {{jsxref("Iterator")}} オブジェクトを反復可能オブジェクトのリストから作成します。新しいイテレーターは、入力した反復可能オブジェクトそれぞれの値を順番に返します。

## 構文

```js-nolint
Iterator.concat(it)
Iterator.concat(it1, it2)
Iterator.concat(it1, it2, /* …, */ itN)
```

### 引数

- `it1`, `it2`, …, `itN`
  - : [反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反覆可能プロトコル)プロトコルを実装するオブジェクト。[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)で反復可能オブジェクトでないものは、このメソッドに直接渡すことはできません。まず {{jsxref("Iterator.from()")}} を使用してラップしなければなりません。

### 返値

新しい {{jsxref("Iterator")}} オブジェクトで、入力したそれぞれの反復可能オブジェクトから順番に値を返します。

## 解説

`Iterator.concat()` メソッドは、概念的には `Array` の [`concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) メソッドと似ていますが、あらゆる種類の反復可能オブジェクトに対して動作し、配列ではなくイテレーターを返します。これは、反復可能オブジェクトが遅延評価で反復処理されるため、不要なメモリー割り当てや計算を避けることができるということです。また技術的には、[無限反復可能オブジェクトの連結](#無限反復可能オブジェクトの連結)も可能ですが、最初の無限反復可能オブジェクト以降の反復可能オブジェクトからの結果には決して到達しないことになります。

それぞれの反復可能オブジェクトは無限でも構いませんが、反復可能オブジェクトのリスト自体は有限である必要があります。さらに、エンジンが関数の引数数に非常に低い制限を設けているため、その数はかなり制限されます。大量の反復可能オブジェクトを連結する必要がある場合（無限個であっても）、代わりに {{jsxref("Iterator.prototype.flatMap()")}} を使用してください。

```js
function* infiniteIterables() {
  for (let i = 1; ; i++) {
    yield Array(i).fill(i);
  }
}

// 誤:
// Iterator.concat(...infiniteIterables());
// スプレッド演算子は決して完了しない

// 正:
const it = infiniteIterables().flatMap((x) => x);
// 無限の数の並び: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...
```

`Iterator.concat()` メソッドは、次の関数と機能が類似しています。この関数は [`yield*`](/ja/docs/Web/JavaScript/Reference/Operators/yield*) 演算子を使用し、入力されたそれぞれの反復可能オブジェクトから順番に値を生成します。

```js
function* concat(...iterables) {
  for (const iterable of iterables) {
    yield* iterable;
  }
}
```

`yield*` と同様に、`Iterator.concat()` は反復可能オブジェクトでない引数（つまり `[Symbol.iterator]()` メソッドを持たないもの）に対応していません。これは、`Iterator.concat()` が常にそのイテレーターに対する所有権を取り、メソッド終了時に開いているイテレーターを[閉じる](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#返値)ためです。反復可能オブジェクトの場合、`Iterator.concat()` はイテレーターを 1 つずつ取得し、反復が停止した時点で現在のイテレーターを閉じるだけです。イテレーター引数の場合、呼び出し側と `Iterator.concat()` のどちらがイテレーター（特に `Iterator.concat()` が到達していないもの）を閉じる責任を負うべきかが不明確であるため、このメソッドは単純に非反復可能オブジェクトを許可しません。

## 例

### マップの結合

この例では、3 つのマップの和集合となる新しい {{jsxref("Map")}} を作成します。 {{jsxref("Map/Map", "Map()")}} コンストラクターはキーと値の組の反復可能オブジェクトを受け入れます。一方、[Map イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)はマップからキーと値の組を生成します。したがって、マップに対して `Iterator.concat()` を適用するだけで新しいマップを生成できます。

```js
const map1 = new Map([
  ["a", 1],
  ["b", 2],
]);
const map2 = new Map([
  ["c", 3],
  ["d", 4],
]);
const map3 = new Map([
  ["a", 5],
  ["e", 6],
]);

const map = new Map(Iterator.concat(map1, map2, map3));
console.log(map);
// Map(5) {'a' => 5, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 6}
```

結果のマップにおけるキー `"a"` の値は `5` であることに注意してください。これは、`Map` コンストラクターがそれぞれのキーに対して最後の値を使用するためです。

### 無限反復可能オブジェクトの連結

入力された反復可能オブジェクトのいずれかが無限の場合、結果のイテレーターも同時に無限になります。イテレーターは遅延評価で処理され、いつでも閉じられた状態になることができるため、これは直ちに問題にはなりません。ただし、最初の無限イテレーター以降の反復可能オブジェクトには到達することはありません。

```js
function* it1() {
  yield 1;
  yield 2;
}

function* it2() {
  let i = 3;
  while (true) {
    yield i++;
  }
}

function* it3() {
  yield "done";
}

const it = Iterator.concat(it1(), it2(), it3());
for (const value of it.take(10)) {
  console.log(value); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
// "done" には達しない
```

### 異なる種類の反復可能オブジェクトの連結

異なる型の反復可能オブジェクトを連結できます。

```js
const array = [1, 2, 3];
const set = new Set([4, 5, 6]);
function* gen() {
  yield 7;
  yield 8;
  yield 9;
}

const it = Iterator.concat(array, set, gen());
console.log([...it]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

それぞれの反復可能オブジェクトの要素は、配列と同様に異なる型であっても構いません。

```js
const array = [1, "two", 3];
const set = new Set([true, {}]);

const it = Iterator.concat(array, set);
console.log([...it]); // [1, "two", 3, true, {}]
```

### 反復可能でないオブジェクトの連結

反復可能でないオブジェクトは、`[Symbol.iterator]()` メソッドを持たないため、`Iterator.concat()` に渡されると `TypeError` が発生します。

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = Iterator.concat(nonIterable); // TypeError: object is not iterable
```

すべての組み込みイテレーターは {{jsxref("Iterator")}} クラスを継承しているため、すべて反復可能オブジェクトであり、`Iterator.concat()` に渡すことができます。

```js
const arrayIterator = [1, 2, 3][Symbol.iterator]();

const it = Iterator.concat(arrayIterator); // No error
```

反復可能でないイテレーターを渡すには、{{jsxref("Iterator.from()")}} を使用してラップできます。

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = Iterator.concat(Iterator.from(nonIterable)); // No error
```

別の選択肢として、代わりに {{jsxref("Iterator.prototype.flatMap()")}} を使用する方法があります。これは自動的に `Iterator.from()` を呼び出します。ただし注意が必要です。`flatMap()` は配列ではなくイテレーターに対して呼び出す必要があります。{{jsxref("Array.prototype.flatMap()")}} は配列の返値のみに対応しているからです。

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = [nonIterable].values().flatMap((x) => x); // No error
```

独自のイテレーターを実装する際は、[`Iterator` をサブクラス化](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Iterator#subclassing_iterator)するか、`this` を返す `[Symbol.iterator]()` メソッドを追加して、反復可能オブジェクトにすることを検討してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.concat` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-sequencing)
- [es-shims による `Iterator.concat` のポリフィル](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Array.prototype.concat()")}}
