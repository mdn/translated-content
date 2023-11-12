---
title: get Map[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
l10n:
  sourceCommit: 8183cfa3a25c440ca4ff0f39fe941871ed495a7b
---

{{JSRef}}

**`Map[@@species]`** は静的アクセサープロパティで、 `Map` オブジェクトをコピーする方法を示す未使用のアクセサープロパティです。

## 構文

```js-nolint
Map[Symbol.species]
```

### 返値

`get @@species` が呼び出されたコンストラクター (`this`) の値です。返さる値は、 `Map` インスタンスのコピーを構築するために使用されます。

## 解説

species アクセサープロパティは `Map` オブジェクトのデフォルトコンストラクターを返します。サブクラスのコンストラクターは、コンストラクターに代入して変更することによりオーバーライドすることができます。

> **メモ:** このプロパティは現在、どの `Map` のメソッドからも使われていません。

## 例

### 通常のオブジェクトの species

species プロパティはデフォルトコンストラクター関数を返しますので、 `Map` オブジェクトには `Map` コンストラクターを返します。

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
