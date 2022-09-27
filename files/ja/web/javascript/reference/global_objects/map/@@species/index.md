---
title: get Map[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
---

{{JSRef}}

**`Map[@@species]`** アクセサープロパティは、 `Map` コンストラクターを返します。

## 解説

species アクセサープロパティは `Map` オブジェクトのデフォルトコンストラクターを返します。サブクラスのコンストラクターは、コンストラクターに代入して変更することによりオーバーライドすることができます。

## 例

### 通常のオブジェクトの species

species プロパティはデフォルトコンストラクター関数を返しますので、 `Map` オブジェクトには `Map` コンストラクターを返します。

```js
Map[Symbol.species]; // function Map()
```

### 派生オブジェクトの species

派生したコレクションオブジェクトの中では (例えばカスタムマップである `MyMap`)、 `MyMap` の species は `MyMap` コンストラクターになっています。しかし、これをオーバーライドして、派生クラスのメソッド内で親の `Map` オブジェクトを返したい場合があります。

```js
class MyMap extends Map {
  // Overwrite MyMap species to the parent Map constructor
  static get [Symbol.species]() { return Map; }
}
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-map-@@species', 'get Map [ @@species ]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.@@species")}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
