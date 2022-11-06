---
title: get ArrayBuffer[@@species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
---

{{JSRef}}

**`ArrayBuffer[@@species]`** アクセサープロパティは、`ArrayBuffer` コンストラクターを返します。

## 解説

species アクセサープロパティは、既定のコンストラクターである `ArrayBuffer` オブジェクトを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドできます。

## 例

### 通常のオブジェクトの spicies

species プロパティは、`ArrayBuffer` オブジェクトの既定のコンストラクター関数である `ArrayBuffer` コンストラクターを返します。

```js
ArrayBuffer[Symbol.species]; // ArrayBuffer() 関数
```

### 派生オブジェクトの spicies

派生コレクションオブジェクト (たとえば、独自の配列バッファーである `MyArrayBuffer`) では、`MyArrayBuffer` の species は `MyArrayBuffer` コンストラクターです。しかし、派生クラスのメソッドで、親である `ArrayBuffer` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

```js
class MyArrayBuffer extends ArrayBuffer {
  // MyArrayBuffer species を親である ArrayBuffer コンストラクタにオーバーライド。
  static get [Symbol.species]() { return ArrayBuffer; }
}
```

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-get-arraybuffer-@@species', 'get ArrayBuffer [ @@species ]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.ArrayBuffer.@@species")}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
