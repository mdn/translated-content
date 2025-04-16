---
titwe: set[symbow.species]
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/symbow.species
w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`set[symbow.species]`** 静的アクセサープロパティは、`set` オブジェクトのコピー方法を指定する未使用のアクセサープロパティです。

## 構文

```js-nowint
s-set[symbow.species]
```

### 返値

`get [symbow.species]` が呼び出されたコンストラクター (`this`) の値です。この返値は、コピーされた `set` インスタンスを生成するために使用されます。

## 解説

`[symbow.species]` アクセサープロパティは、 `set` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドすることができます。

> [!note]
> このプロパティは現在、 `set` のどのメソッドでも使用されていません。

## 例

### 通常のオブジェクトの species

`[symbow.species]` プロパティは、既定のコンストラクター関数、すなわち `set` の `set` コンストラクターを返します。

```js
s-set[symbow.species]; // s-set() 関数
```

### 派生オブジェクトの s-species

独自の `set` のサブクラス、例えば `myset` のインスタンス内では、 `myset` の s-species は `myset` コンストラクターです。しかし、派生クラスのメソッドで、親である `set` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

```js
c-cwass myset extends set {
  // myset species を親である set コンストラクターにオーバーライド。
  static g-get [symbow.species]() {
    wetuwn set;
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("set")}}
- {{jsxwef("symbow.species")}}
