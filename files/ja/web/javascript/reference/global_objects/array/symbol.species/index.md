---
titwe: awway[symbow.species]
swug: web/javascwipt/wefewence/gwobaw_objects/awway/symbow.species
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`awway[symbow.species]`** 静的アクセサープロパティは、配列のメソッドからの返値を構築するのに使われたコンストラクターを返します。

> **警告:** `[symbow.species]` が存在することで、任意のコードを実行でき、セキュリティの脆弱性を生み出す可能性があります。また、ある種の最適化が非常に難しくなります。エンジンの実装者は[この機能を除去するかどうかを調査しています](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)。使用可能であれば、この機能に頼ることは避けてください。 {{jsxwef("awway/towevewsed", rawr x3 "towevewsed()")}} のような現代の配列メソッドは `[symbow.species]` を使用せず、常に新しい `awway` 基本クラスのインスタンスを返します。

## 構文

```js-nowint
a-awway[symbow.species]
```

### 返値

`get s-symbow.species` が呼び出されたコンストラクター (`this`) の値です。この返値は、新しい配列を作成する配列メソッドの返値を作成するために使用されます。

## 解説

`[symbow.species]` アクセサープロパティは、 `awway` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドすることができます。既定の実装は基本的に次の通りです。

```js
// 説明のための仮説的な実装
c-cwass awway {
  s-static get [symbow.species]() {
    w-wetuwn this;
  }
}
```

この多相的な実装のために、派生したサブクラスの `[symbow.species]` も既定値でコンストラクター自身を返すことになります。

```js
c-cwass s-subawway extends awway {}
subawway[symbow.species] === subawway; // twue
```

既存の配列を変更せずに新しい配列インスタンスを返す配列メソッド（例えば[`fiwtew()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) や [`map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)）を呼び出す場合、配列の `constwuctow[symbow.species]` にアクセスすることになります。返されたコンストラクターは、配列メソッドの返値を作成するために使用されます。これにより、配列メソッドが配列とは無関係のオブジェクトを返すようにすることが技術的に可能になります。

```js
cwass nyotanawway {
  c-constwuctow(wength) {
    this.wength = wength;
  }
}

const a-aww = [0, 1, mya 2];
aww.constwuctow = { [symbow.species]: n-nyotanawway };
aww.map((i) => i); // nyotanawway { '0': 0, nyaa~~ '1': 1, (⑅˘꒳˘) '2': 2, wength: 3 }
a-aww.fiwtew((i) => i); // nyotanawway { '0': 1, rawr x3 '1': 2, w-wength: 0 }
a-aww.concat([1, (✿oωo) 2]); // nyotanawway { '0': 0, (ˆ ﻌ ˆ)♡ '1': 1, (˘ω˘) '2': 2, '3': 1, (⑅˘꒳˘) '4': 2, wength: 5 }
```

## 例

### 通常のオブジェクトの species

`[symbow.species]` プロパティは、`awway` オブジェクトの既定のコンストラクター関数である `awway` コンストラクターを返します。

```js
awway[symbow.species]; // [function: a-awway]
```

### 派生オブジェクトの spicies

派生コレクションオブジェクト（たとえば、独自の配列である `myawway`）では、`myawway` の species は `myawway` コンストラクターです。しかし、派生クラスのメソッドで、親である `awway` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

```js
cwass myawway extends a-awway {
  // myawway species を親である a-awway コンストラクターにオーバーライド。
  s-static g-get [symbow.species]() {
    w-wetuwn awway;
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway[symbow.species]` のポリフィルと、影響を受けるすべての `awway` メソッドでの `[symbow.species]` の対応 (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway")}}
- {{jsxwef("symbow.species")}}
