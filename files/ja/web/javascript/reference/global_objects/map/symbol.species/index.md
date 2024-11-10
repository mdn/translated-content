---
title: Map[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Map[Symbol.species]`** は静的アクセサープロパティで、 `Map` オブジェクトをコピーする方法を示す未使用のアクセサープロパティです。

## 構文

```js-nolint
Map[Symbol.species]
```

### 返値

`get [Symbol.species]` が呼び出されたコンストラクター (`this`) の値です。返される値は、`Map` インスタンスのコピーを構築するために使用されます。

## 解説

species アクセサープロパティは `Map` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターは、コンストラクターに代入して変更することによりオーバーライドすることができます。

> [!NOTE]
> このプロパティは現在、どの `Map` のメソッドからも使われていません。

## 例

### 通常のオブジェクトの species

species プロパティは既定のコンストラクター関数を返しますので、`Map` オブジェクトには `Map` コンストラクターを返します。

```js
Map[Symbol.species]; // function Map()
```

### 派生オブジェクトの species

`Map` の独自サブクラスのインスタンス、例えば `MyMap` では、`MyMap` の species は `MyMap` コンストラクターになっています。しかし、これをオーバーライドして、派生クラスのメソッド内で親の `Map` オブジェクトを返したい場合があります。

```js
class MyMap extends Map {
  // MyMap の species を親の Map コンストラクターで上書き
  static get [Symbol.species]() {
    return Map;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
