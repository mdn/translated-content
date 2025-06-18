---
title: TypedArray[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`TypedArray[Symbol.species]`** は静的アクセサープロパティで、型付き配列のメソッドの返値を構築するのに使われるコンストラクターを返します。

> **警告:** `[Symbol.species]` が存在すると、任意のコードの実行が可能になり、セキュリティ上の脆弱性を生み出す可能性があります。また、特定の最適化も非常に難しくなります。エンジンの実装者は[この機能を削除するかどうか調査](https://github.com/tc39/proposal-rm-builtin-subclassing)しています。可能であれば、この機能に頼ることは避けてください。

## 構文

```js-nolint
TypedArray[Symbol.species]
```

### 返値

`get [Symbol.species]` が呼び出されたコンストラクター (`this`) の値です。この返値は、新しい型付き配列を生成する型付き配列のメソッドで、返値を構築するために使用されます。

## 解説

`[Symbol.species]` アクセサープロパティは、[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターは、コンストラクターの割り当てを変更するために、これをオーバーライドできます。

```js
// 説明のための仮の基盤実装
class TypedArray {
  static get [Symbol.species]() {
    return this;
  }
}
```

この多態的な実装のために、派生したサブクラスの `[Symbol.species]` も、既定ではコンストラクターそのものを返すことになります。

```js
class SubTypedArray extends Int8Array {}
SubTypedArray[Symbol.species] === SubTypedArray; // true
```

既存の配列を変更せず、新しい配列のインスタンスを返す型付き配列のメソッド（例えば、 [`filter()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter) や [`map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)）を呼び出した場合、配列の `constructor[Symbol.species]` にアクセスすることになります。返されたコンストラクターは、配列の型付き配列メソッドの返値を構築するために使用されます。

しかし、[`Array[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) とは異なり、`[Symbol.species]` を使って型付き配列を新しく作成する場合、言語が新しく作成する配列が正しい型付き配列であり、元の配列と同じ種類の内容を持つことを確認するようになっています。例えば、{{jsxref("BigInt64Array")}} から {{jsxref("Float64Array")}} を作成したり、BigInt の配列から BigInt ではない配列を作成することはできません。この場合、{{jsxref("TypeError")}} が発生します。

```js
class BadArray extends Int8Array {
  static get [Symbol.species]() {
    return Array;
  }
}
new BadArray(1).map(() => 0); // TypeError: Method %TypedArray%.prototype.map called on incompatible receiver [object Array]

class BadArray2 extends Int8Array {
  static get [Symbol.species]() {
    return BigInt64Array;
  }
}
new BadArray2(1).map(() => 0n); // TypeError: TypedArray.prototype.map constructed typed array of different content type from |this|
```

> **メモ:** [SpiderMonkey](https://bugzil.la/1640194) と V8 の両方にバグがあり、内容物の型が一致するかどうかが調べられません。2 つ目の例では Safari のみで {{jsxref("TypeError")}} が発生します。

## 例

### 普通のオブジェクト

`species` プロパティは、指定した[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)オブジェクトの型付き配列のコンストラクターを、既定のコンストラクター関数として返します。

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

### 派生オブジェクトの species

独自の `TypedArray` のサブクラス（例えば `MyTypedArray`）のインスタンスでは、`MyTypedArray` の species は `MyTypedArray` コンストラクターとなります。しかし、派生クラスのメソッドで親の[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)オブジェクトを返すために、これを上書きしたい場合があります。

```js
class MyTypedArray extends Uint8Array {
  // MyTypedArray の species を親である Uint8Array コンストラクターに上書き
  static get [Symbol.species]() {
    return Uint8Array;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("TypedArray")}}
- {{jsxref("Symbol.species")}}
