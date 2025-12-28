---
title: ArrayBuffer[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`ArrayBuffer[Symbol.species]`** は静的アクセサープロパティで、配列バッファーメソッドから返値を作成するために使用されるコンストラクターを返します。

> [!WARNING]
> `[Symbol.species]` が存在することで、任意のコードを実行することができ、セキュリティ上の脆弱性を⽣じる可能性があります。また、ある種の最適化もとても難しくなります。エンジンの実装者は[この機能を削除するかどうかを調査しています](https://github.com/tc39/proposal-rm-builtin-subclassing)。可能であれば、この機能に頼らないでください。

## 構文

```js-nolint
ArrayBuffer[Symbol.species]
```

### 返値

`get [Symbol.species]` が呼び出されたコンストラクター (`this`) の値です。この返値は、新しい配列バッファーを作成する配列バッファーのメソッドから返値を作成するために使用されます。

## 解説

`[Symbol.species]` アクセサープロパティは、既定のコンストラクターである `ArrayBuffer` オブジェクトを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドできます。

```js
// 説明のための仮想の基盤実装
class ArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

この 多態的な実装のために、派生したサブクラスの `[Symbol.species]` も既定値ではコンストラクター自身を返すことになります。

```js
class SubArrayBuffer extends ArrayBuffer {}
SubArrayBuffer[Symbol.species] === SubArrayBuffer; // true
```

既存のオブジェクトを変異させず、新しい配列バッファーのインスタンスを返す配列バッファーのメソッド（例: [`slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)）を呼び出す場合、オブジェクトの `constructor[Symbol.species]` にアクセスすることになります。返されたコンストラクターは、配列バッファーメソッドの返値を構成するために使用されます。

## 例

### 通常のオブジェクトの spicies

species プロパティは、`ArrayBuffer` オブジェクトの既定のコンストラクター関数である `ArrayBuffer` コンストラクターを返します。

```js
ArrayBuffer[Symbol.species]; // ArrayBuffer() 関数
```

### 派生オブジェクトの spicies

派生コレクションオブジェクト（たとえば、独自の配列バッファーである `MyArrayBuffer`）では、`MyArrayBuffer` の species は `MyArrayBuffer` コンストラクターです。しかし、派生クラスのメソッドで、親である `ArrayBuffer` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

```js
class MyArrayBuffer extends ArrayBuffer {
  // MyArrayBuffer species を親である ArrayBuffer コンストラクターにオーバーライド。
  static get [Symbol.species]() {
    return ArrayBuffer;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
