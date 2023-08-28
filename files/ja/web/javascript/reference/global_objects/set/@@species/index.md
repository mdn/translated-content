---
title: get Set[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Set/@@species
---

{{JSRef}}

**`Set[@@species]`** アクセサープロパティは、`Set` オブジェクトのコピー方法を指定する未使用のアクセッサープロパティです。

## 構文

```js-nolint
Set[Symbol.species]
```

### 返値

`get @@species` が呼び出されたコンストラクタ (`this`) の値です。この返値は、コピーされた `Set` インスタンスを生成するために使用されます。

## 解説

`@@species` アクセサープロパティは、 `Set` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドすることができます。

> **Note:** このプロパティは現在、いずれの `Set` のメソッドでも使用されていません。

## 例

### 通常のオブジェクトの spicies

`@@species` プロパティは、`Set` オブジェクトの既定のコンストラクター関数である `Set` コンストラクターを返します。

```js
Set[Symbol.species]; // Set() 関数
```

### 派生オブジェクトの spicies

派生コレクションオブジェクト（たとえば、独自の集合である `MySet`）では、`MySet` の species は `MySet` コンストラクターです。しかし、派生クラスのメソッドで、親である `Set` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

```js
class MySet extends Set {
  // MySet species を親である Set コンストラクターにオーバーライド。
  static get [Symbol.species]() {
    return Set;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Symbol.species")}}
