---
title: get Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`Array[@@species]`** アクセサープロパティは、配列のメソッドからの返値を構築するのに使われたコンストラクターを返します。

## 構文

```js
Array[Symbol.species];
```

### 返値

`get @@species` が呼び出されたコンストラクター (`this`) の値です。この返値は、新しい配列を作成する配列メソッドの返値を作成するために使用されます。

## 解説

`@@species` アクセサープロパティは、 `Array` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドすることができます。既定の実装は基本的に次の通りです。

```js
// 説明のための仮説的な実装
class Array {
  static get [Symbol.species]() {
    return this;
  }
}
```

この多相的な実装のために、派生したサブクラスの `@@species` も既定値でコンストラクター自身を返すことになります。

```js
class SubArray extends Array {}
SubArray[Symbol.species] === SubArray; // true
```

既存の配列を変更せずに新しい配列インスタンスを返す配列メソッド（例えば `filter` や `map` ）を呼び出す場合、配列の `constructor[@@species]` にアクセスすることになります。返されたコンストラクターは、配列メソッドの返値を作成するために使用されます。これにより、配列メソッドが配列とは無関係のオブジェクトを返すようにすることが技術的に可能になります。

```js
class NotAnArray {
  constructor(length) {
    this.length = length;
  }
}

const arr = [0, 1, 2];
arr.constructor = { [Symbol.species]: NotAnArray };
arr.map((i) => i); // NotAnArray { '0': 0, '1': 1, '2': 2, length: 3 }
arr.filter((i) => i); // NotAnArray { '0': 1, '1': 2, length: 0 }
arr.concat([1, 2]); // NotAnArray { '0': 0, '1': 1, '2': 2, '3': 1, '4': 2, length: 5 }
```

## 例

### 通常のオブジェクトの spicies

`@@species` プロパティは、`Array` オブジェクトの既定のコンストラクター関数である `Array` コンストラクターを返します。

```js
Array[Symbol.species]; // [Function: Array]
```

### 派生オブジェクトの spicies

派生コレクションオブジェクト（たとえば、独自の配列である `MyArray`）では、`MyArray` の species は `MyArray` コンストラクターです。しかし、派生クラスのメソッドで、親である `Array` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

```js
class MyArray extends Array {
  // MyArray species を親である ArrayBuffer コンストラクタにオーバーライド。
  static get [Symbol.species]() {
    return Array;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array[Symbol.species]` と影響を受けるすべての `Array` メソッドで `Symbol.species` に対応するポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
