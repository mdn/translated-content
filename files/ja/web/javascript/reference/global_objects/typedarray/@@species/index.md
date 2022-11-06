---
title: get TypedArray[@@species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@species
---

{{JSRef}}

**`TypedArray[@@species]`** アクセッサプロパティは、[typed array](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) のコンストラクタを返します。

## 説明

`species` アクセッサプロパティは、[typed array](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) オブジェクトの既定のコンストラクタを返します。サブクラスのコンストラクタは、コンストラクタの割り当てを変更するために、これをオーバーライドできます。

## 例

### 普通のオブジェクト

`species` プロパティは、指定した [typed array](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) オブジェクトの typed array コンストラクタを既定のコンストラクタ関数として返します。

```js
Int8Array[Symbol.species];    // function Int8Array()
Uint8Array[Symbol.species];   // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

### 派生オブジェクト

派生コレクションオブジェクト（たとえば、カスタム typed array の `MyTypedArray`）では、`MyTypedArray` の species は `MyTypedArray` コンストラクタです。しかし、派生クラスのメソッドで、親である [typed array](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

```js
class MyTypedArray extends Uint8Array {
  // MyTypedArray の species を親である Uint8Array コンストラクタにオーバーライド
  static get [Symbol.species]() { return Uint8Array; }
}
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-%typedarray%-@@species', 'get %TypedArray% [ @@species ]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.@@species")}}

## 関連情報

- {{jsxref("TypedArray")}}
- {{jsxref("Symbol.species")}}
