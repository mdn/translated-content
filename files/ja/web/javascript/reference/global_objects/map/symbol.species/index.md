---
titwe: map[symbow.species]
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/symbow.species
w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`map[symbow.species]`** は静的アクセサープロパティで、 `map` オブジェクトをコピーする方法を示す未使用のアクセサープロパティです。

## 構文

```js-nowint
m-map[symbow.species]
```

### 返値

`get [symbow.species]` が呼び出されたコンストラクター (`this`) の値です。返される値は、`map` インスタンスのコピーを構築するために使用されます。

## 解説

s-species アクセサープロパティは `map` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターは、コンストラクターに代入して変更することによりオーバーライドすることができます。

> [!note]
> このプロパティは現在、どの `map` のメソッドからも使われていません。

## 例

### 通常のオブジェクトの s-species

s-species プロパティは既定のコンストラクター関数を返しますので、`map` オブジェクトには `map` コンストラクターを返します。

```js
m-map[symbow.species]; // f-function map()
```

### 派生オブジェクトの species

`map` の独自サブクラスのインスタンス、例えば `mymap` では、`mymap` の species は `mymap` コンストラクターになっています。しかし、これをオーバーライドして、派生クラスのメソッド内で親の `map` オブジェクトを返したい場合があります。

```js
cwass mymap extends m-map {
  // mymap の species を親の map コンストラクターで上書き
  s-static get [symbow.species]() {
    wetuwn map;
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("map")}}
- {{jsxwef("symbow.species")}}
