---
title: get SharedArrayBuffer[@@species]
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species
original_slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/@@species
l10n:
  sourceCommit: 0f248adcab759bdad247a5dbfb7da12dc32bce59
---

{{JSRef}}

**`SharedArrayBuffer[@@species]`** アクセサープロパティは、`SharedArrayBuffer` の各メソッドから返される値を作成するために使用されるコンストラクター（種）を返します。

> **警告:** `@@species` が存在すると、任意のコードの実行が可能になり、セキュリティ上の脆弱性が生じる可能性があります。また、ある種の最適化も非常に難しくなります。エンジンの実装者たちは、[この機能を削除するかどうか調査しています](https://github.com/tc39/proposal-rm-builtin-subclassing)。可能であれば、この機能に頼ることは避けてください。

## 構文

```js-nolint
SharedArrayBuffer[Symbol.species]
```

### 返値

`get @@species` が呼び出されたコンストラクター (`this`) の値です。この返値は、新しい配列バッファーを作成するための配列バッファーのメソッドから返される値を構成するために使用されます。

## 解説

`@@species` アクセサープロパティは `SharedArrayBuffer` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターはこれを上書きして、コンストラクターの割り当てを変更することができます。既定の実装では、基本的に次のようになります。

```js
// 説明のための仮想的な基礎実装
class SharedArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

この多態的な実装のため、派生したサブクラスの `@@species` も既定でコンストラクター自身を返すことになります。

```js
class SubArrayBuffer extends SharedArrayBuffer {}
SubArrayBuffer[Symbol.species] === SharedArrayBuffer; // true
```

既存の配列を変更せず、新しい配列バッファーのインスタンスを返す配列バッファーのメソッド（例えば [`slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice)）を呼び出すと、その配列の `constructor[@@species]` にアクセスすることになります。返されたコンストラクターは配列バッファーメソッドの返値を構築するために使用されます。

## 例

### 通常のオブジェクトにおける種

`@@species` プロパティは、既定のコンストラクター関数、つまり `SharedArrayBuffer` であれば `SharedArrayBuffer` コンストラクターが返されます。

```js
SharedArrayBuffer[Symbol.species]; // function SharedArrayBuffer()
```

### 派生オブジェクトにおける種

独自の `SharedArrayBuffer` サブクラスのインスタンス、例えば `MySharedArrayBuffer` では、その `MySharedArrayBuffer` の種は `MySharedArrayBuffer` コンストラクターになります。しかし、派生クラスのメソッドで親の `SharedArrayBuffer` オブジェクトを返すために、これを上書きしたいと思うかもしれません。

```js
class MySharedArrayBuffer extends SharedArrayBuffer {
  // 種を MySharedArrayBuffer から親である SharedArrayBuffer コンストラクターで上書きする。
  static get [Symbol.species]() {
    return SharedArrayBuffer;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Symbol.species")}}
