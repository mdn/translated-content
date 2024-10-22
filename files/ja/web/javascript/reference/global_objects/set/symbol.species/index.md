---
title: Set[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Set[Symbol.species]`** 静的アクセサープロパティは、`Set` オブジェクトのコピー方法を指定する未使用のアクセサープロパティです。

## 構文

```js-nolint
Set[Symbol.species]
```

### 返値

`get [Symbol.species]` が呼び出されたコンストラクター (`this`) の値です。この返値は、コピーされた `Set` インスタンスを生成するために使用されます。

## 解説

`[Symbol.species]` アクセサープロパティは、 `Set` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドすることができます。

> [!NOTE]
> このプロパティは現在、 `Set` のどのメソッドでも使用されていません。

## 例

### 通常のオブジェクトの species

`[Symbol.species]` プロパティは、既定のコンストラクター関数、すなわち `Set` の `Set` コンストラクターを返します。

```js
Set[Symbol.species]; // Set() 関数
```

### 派生オブジェクトの species

独自の `Set` のサブクラス、例えば `MySet` のインスタンス内では、 `MySet` の species は `MySet` コンストラクターです。しかし、派生クラスのメソッドで、親である `Set` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

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
