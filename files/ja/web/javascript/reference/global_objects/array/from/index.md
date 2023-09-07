---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`Array.from()`** メソッドは、反復可能オブジェクトや配列風オブジェクトからシャローコピーされた、新しい `Array` インスタンスを生成します。

{{EmbedInteractiveExample("pages/js/array-from.html","shorter")}}

## 構文

```js
// アロー関数
Array.from(arrayLike, (element) => {
  /* … */
});
Array.from(arrayLike, (element, index) => {
  /* … */
});

// マッピング関数
Array.from(arrayLike, mapFn);
Array.from(arrayLike, mapFn, thisArg);

// インラインマッピング関数
Array.from(arrayLike, function mapFn(element) {
  /* … */
});
Array.from(arrayLike, function mapFn(element, index) {
  /* … */
});
Array.from(
  arrayLike,
  function mapFn(element) {
    /* … */
  },
  thisArg,
);
Array.from(
  arrayLike,
  function mapFn(element, index) {
    /* … */
  },
  thisArg,
);
```

### 引数

- `arrayLike`
  - : 配列に変換する反復可能オブジェクトまたは配列風オブジェクト。
- `mapFn` {{Optional_inline}}
  - : 配列のすべての要素に対して呼び出される マッピング関数。
- `thisArg` {{Optional_inline}}
  - : `mapFn` を実行する時に `this` として使用する値。

### 返値

新しい {{jsxref("Array")}} インスタンス。

## 解説

`Array.from()` は、以下のものから `Array` を生成します。

- [反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)（{{jsxref("Map")}} や {{jsxref("Set")}} のような要素を取得するオブジェクト）
- オブジェクトが反復可能でない場合は、配列風オブジェクト（`length` プロパティおよび添字の付いた要素を持つオブジェクト）

`Array.from()` にはオプションの引数 `mapFn` があります。これにより作成中の配列のすべての要素に対して {{jsxref("Array.prototype.map()", "map()")}} 関数を実行することができます。

より明確に言うと、中間配列を生成しないことを除いて、`Array.from(obj, mapFn, thisArg)` は `Array.from(obj).map(mapFn, thisArg)` と同じ結果です。 _mapFn_ は配列全体ではなく 2 つの引数 (_element_, _index_) のみを取るため、配列は構築途中になります。

> **メモ:** これは、[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)のような特定の配列のサブクラスでは特に重要です。なぜなら、中間配列の値は適切な型に収まるように切り捨てられている必要があるからです。

`from()` メソッドの `length` プロパティは 1 です。

ES2015 では、 [class](/ja/docs/Web/JavaScript/Reference/Classes) 構文により定義済みクラスとユーザー定義クラスの両方をサブクラス化することができます。結果として、`Array.from` のような静的メソッドは `Array` のサブクラスに「継承」され、`Array` ではなくサブクラスのインスタンスを生成します。 `Array.from()` メソッドも汎用的に定義されており、単一の数値の引数を受け入れる任意のコンストラクターに定義することができます。

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
const images = document.getElementsByTagName("img");
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

//  1..10 の範囲の数値を 2 ごとに生成
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Array.from を使用して順番通りになるようアルファベットを生成
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.from` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
