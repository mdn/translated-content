---
title: get Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/@@species
---
{{JSRef}}

**`Array[@@species]`** アクセサープロパティは、`Array` コンストラクターを返します。

## 構文

```
Array[Symbol.species]
```

### 返値

{{jsxref("Array")}} コンストラクターです。

## 解説

`species` アクセサープロパティは、 `Array` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドすることができます。

## 例

### 通常のオブジェクトの spicies

`species` プロパティは、`Array` オブジェクトの既定のコンストラクター関数である `Array` コンストラクターを返します。

```js
Array[Symbol.species]; // Array() 関数
```

### 派生オブジェクトの spicies

派生コレクションオブジェクト (たとえば、独自の配列である `MyArray`) では、`MyArray` の species は `MyArray` コンストラクターです。しかし、派生クラスのメソッドで、親である `Array` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

```js
class MyArrayBuffer extends ArrayBuffer {
  // MyArray species を親である ArrayBuffer コンストラクタにオーバーライド。
  static get [Symbol.species]() { return ArrayBuffer; }
}
```

## 仕様書

| 仕様書                                                                                                   |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-array-@@species', 'get Array [ @@species ]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.@@species")}}

## 関連情報

- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
