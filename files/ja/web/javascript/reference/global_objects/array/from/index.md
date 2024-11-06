---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Array.from()`** 静的メソッドは、[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)や[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)からシャローコピーされた、新しい `Array` インスタンスを生成します。

{{EmbedInteractiveExample("pages/js/array-from.html", "shorter")}}

## 構文

```js-nolint
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

### 引数

- `arrayLike`
  - : 配列に変換する反復可能オブジェクトまたは配列風オブジェクト。
- `mapFn` {{optional_inline}}
  - : 配列の各要素に対して呼び出す関数です。指定された場合、配列に追加されるすべての値は最初にこの関数に渡され、代わりに `mapFn` の返値が配列に追加されます。この関数は以下の引数で呼び出されます。
    - `element`
      - : 配列内で現在処理中の要素です。
    - `index`
      - : 配列内で現在処理中の要素のインデックスです。
- `thisArg` {{optional_inline}}
  - : `mapFn` を実行する時に `this` として使用する値です。

### 返値

新しい {{jsxref("Array")}} インスタンス。

## 解説

`Array.from()` は、以下のものから `Array` を生成します。

- [反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)（{{jsxref("Map")}} や {{jsxref("Set")}} のような要素を取得するオブジェクト）
- オブジェクトが反復可能でない場合は、配列風オブジェクト（`length` プロパティおよび添字の付いた要素を持つオブジェクト）

反復可能オブジェクトでも配列風でもない普通のオブジェクトを配列に変換するには（プロパティのキー、値、またはその両方を列挙して） {{jsxref("Object.keys()")}}、{{jsxref("Object.values()")}}、{{jsxref("Object.entries()")}} のいずれかを使用してください。[非同期反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)を配列に変換するには、{{jsxref("Array.fromAsync()")}}を使用します。

`Array.from()` は疎配列を作成しません。 `arrayLike` オブジェクトのインデックスプロパティが欠けている場合、新しい配列では `undefined` になります。

`Array.from()` にはオプションで `mapFn` という引数があり、 {{jsxref("Array/map", "map()")}} と同様に、作成する配列のそれぞれの要素に対して関数を実行することができます。より明確には、`Array.from(obj, mapFn, thisArg)` は `Array.from(obj).map(mapFn, thisArg)` と同じ結果を保有します。ただし、`Array.from(obj).map(mapFn, thisArg)` は中間配列を作成せず、`mapFn` は配列全体を持たずに 2 つの引数 (`element`, `index`) を受け取るだけです。

> [!NOTE]
> この動作は[型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)にとってより重要です。なぜなら、中間の配列は適切な型を入力するために必然的に値が切り捨てられるからです。 `Array.from()` は {{jsxref("TypedArray.from()")}} と同じシグネチャを持つために実装します。

`Array.from()` メソッドは汎用ファクトリーメソッドです。例えば、 `Array` のサブクラスが `from()` メソッドを継承した場合、継承した `from()` メソッドは `Array` インスタンスではなく、サブクラスの新しいインスタンスを返します。実際には、新しい配列の長さを表す単一の引数を受け入れるコンストラクター関数を `this` 値として指定することができます。反復可能オブジェクトが `arrayLike` として渡された場合、コンストラクターは引数なしで呼び出されます。配列風のオブジェクトが渡された場合、コンストラクターは配列風オブジェクトの[正規化された長さ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#length_プロパティの正規化)で呼び出されます。最終的な `length` は反復処理が完了したときに再び設定されます。もし `this` の値がコンストラクター関数でない場合、代わりにプレーンな `Array` コンストラクターが使用されます。

## 例

### 文字列からの配列の生成

```js
Array.from("foo");
// [ "f", "o", "o" ]
```

### Set からの配列の生成

```js
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### Map からの配列の生成

```js
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### NodeList からの配列の生成

```js
// DOM 要素のプロパティに基づく配列を作成します。
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));
```

### 配列風オブジェクト（引数）からの配列の生成

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### アロー関数と Array.from の使用

```js
// 要素を操作するためのマップ関数として
// アロー関数を使用
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// 連番の生成
// 配列はそれぞれの場所が `undefined` で初期化されるため、
// 以下の `v` の値は `undefined` になる
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### 連番の生成（範囲指定）

```js
// 連番の生成関数（Clojure や PHP などでよく "range" と呼ばれる）
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// 0..4 の範囲の数値を生成
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// 1..10 の範囲の数値を 2 ごとに生成
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Array.from を使用して順番通りになるようアルファベットを生成
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

### 配列でないコンストラクターにおける from() の呼び出し

`from()` メソッドは、新しい配列の長さを表す単一の引数を受け入れるコンストラクター関数で呼び出すことができます。

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

// 反復可能
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// NotArray を length が undefined のままで呼び出し
// NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }

// 配列風
console.log(Array.from.call(NotArray, { length: 1, 0: "foo" }));
// NotArray called with length 1
// NotArray { '0': 'foo', length: 1 }
```

`this` の値がコンストラクターでない場合は、プレーンな `Array` オブジェクトを返します。

```js
console.log(Array.from.call({}, { length: 1, 0: "foo" })); // [ 'foo' ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.from` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.fromAsync()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
