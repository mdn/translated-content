---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`TypedArray.from()`** メソッドは、配列風オブジェクトや反復可能オブジェクトから新しい[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)を生成します。このメソッドは {{jsxref("Array.from()")}} とほぼ同じです。

{{EmbedInteractiveExample("pages/js/typedarray-from.html","shorter")}}

## 構文

```js-nolint
// アロー関数
TypedArray.from(arrayLike, (element) => { /* ... */ } )
TypedArray.from(arrayLike, (element, index) => { /* ... */ } )

// マッピング関数
TypedArray.from(arrayLike, mapFn)
TypedArray.from(arrayLike, mapFn, thisArg)

// インラインマッピング関数
TypedArray.from(arrayLike, function mapFn(element) { /* ... */ })
TypedArray.from(arrayLike, function mapFn(element, index) { /* ... */ })
TypedArray.from(arrayLike, function mapFn(element) { /* ... */ }, thisArg)
TypedArray.from(arrayLike, function mapFn(element, index) { /* ... */ }, thisArg)
```

ここで `TypedArray` は次のいずれかです。

- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### 引数

- `arrayLike`
  - : 型付き配列に変換する配列風オブジェクトまたは反復可能オブジェクトです。
- `mapFn` {{optional_inline}}
  - : 型付き配列のすべての要素に適用されるマッピング関数。
- `thisArg` {{optional_inline}}
  - : `mapFn` を実行するときに `this` として使う値。

### 返値

新しい {{jsxref("TypedArray")}} インスタンス。

## 解説

`TypedArray.from()` によって下記から型付き配列を生成できます:

- 配列風オブジェクト (`length` プロパティと、番号の振られた要素をもつオブジェクト)
- [反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols) ({{jsxref("Map")}} や {{jsxref("Set")}} のように要素が取得できるオブジェクト)

`TypedArray.from()` は省略可能な引数 `mapFn` を持ち、これは生成中の型付き配列 (またはサブクラスのオブジェクト) のそれぞれの要素に対して {{jsxref("Array.prototype.map", "map()")}} 関数を実行することができます。すなわち、以下のものと同等です。

- `TypedArray.from(obj, mapFn, thisArg)`
- `TypedArray.from(Array.prototype.map.call(obj, mapFn, thisArg))`.

`from()` メソッドの `length` プロパティは `1` です。

### Array.from() との違い

{{jsxref("Array.from()")}} と `TypedArray.from()` の間には、いくつかの微妙な違いがあります。

- `TypedArray.from()` に渡された `thisArg` の値がコンストラクターではなかった場合、 `TypedArray.from()` で {{jsxref("TypeError")}} が発生します。これは `Array.from()` が既定で新しい {{jsxref("Array")}} を生成するためです。
- `TypedArray.from()` は `[[Set]]` を使用します。 `Array.from()` は `[[DefineOwnProperty]]` を使用します。 従って {{jsxref("Proxy")}} オブジェクトを使っている場合は、新しい要素を追加するときに [`handler.set()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) が [`handler.defineProperty()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) の代わりに呼び出されます。
- `arrayLike` 引数がイテレーターであった場合、 `TypedArray.from()` は最初にイテレーターからすべての値を集め、その数の大きさを持つ `thisArg` のインスタンスを生成し、そのインスタンスに値を設定します。 `Array.from()` はイテレーターから取得して各値を設定し、最後に `length` を設定します。
- `Array.from()` がイテレーターではない配列風オブジェクトを受け取ったときは、穴をそのまま残します。 `TypedArray.from()` は必ず密配列 (dense array) を生成します。

## 例

### 反復可能オブジェクトから (Set)

```js
const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
```

### 文字列から

```js
Int16Array.from("123");
// Int16Array [ 1, 2, 3 ]
```

### アロー関数と map の使用

アロー関数をマップ関数として使用して要素を操作します。

```js
Float32Array.from([1, 2, 3], (x) => x + x);
// Float32Array [ 2, 4, 6 ]
```

### 数列を生成する

```js
Uint8Array.from({ length: 5 }, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.from` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Array.prototype.map()")}}
