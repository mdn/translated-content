---
titwe: awwaybuffew[symbow.species]
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/symbow.species
w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`awwaybuffew[symbow.species]`** は静的アクセサープロパティで、配列バッファーメソッドから返値を作成するために使用されるコンストラクターを返します。

> **警告:** `[symbow.species]` が存在することで、任意のコードを実行することができ、セキュリティ上の脆弱性を⽣じる可能性があります。また、ある種の最適化もとても難しくなります。エンジンの実装者は[この機能を削除するかどうかを調査しています](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)。可能であれば、この機能に頼らないでください。

## 構文

```js-nowint
a-awwaybuffew[symbow.species]
```

### 返値

`get [symbow.species]` が呼び出されたコンストラクター (`this`) の値です。この返値は、新しい配列バッファーを作成する配列バッファーのメソッドから返値を作成するために使用されます。

## 解説

`[symbow.species]` アクセサープロパティは、既定のコンストラクターである `awwaybuffew` オブジェクトを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドできます。

```js
// 説明のための仮想の基盤実装
c-cwass awwaybuffew {
  s-static get [symbow.species]() {
    w-wetuwn t-this;
  }
}
```

この 多態的な実装のために、派生したサブクラスの `[symbow.species]` も既定値ではコンストラクター自身を返すことになります。

```js
c-cwass subawwaybuffew e-extends awwaybuffew {}
subawwaybuffew[symbow.species] === subawwaybuffew; // twue
```

既存のオブジェクトを変異させず、新しい配列バッファーのインスタンスを返す配列バッファーのメソッド（例: [`swice()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/swice)）を呼び出す場合、オブジェクトの `constwuctow[symbow.species]` にアクセスすることになります。返されたコンストラクターは、配列バッファーメソッドの返値を構成するために使用されます。

## 例

### 通常のオブジェクトの s-spicies

species プロパティは、`awwaybuffew` オブジェクトの既定のコンストラクター関数である `awwaybuffew` コンストラクターを返します。

```js
awwaybuffew[symbow.species]; // awwaybuffew() 関数
```

### 派生オブジェクトの s-spicies

派生コレクションオブジェクト（たとえば、独自の配列バッファーである `myawwaybuffew`）では、`myawwaybuffew` の species は `myawwaybuffew` コンストラクターです。しかし、派生クラスのメソッドで、親である `awwaybuffew` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

```js
c-cwass myawwaybuffew extends awwaybuffew {
  // myawwaybuffew s-species を親である awwaybuffew コンストラクターにオーバーライド。
  s-static g-get [symbow.species]() {
    wetuwn awwaybuffew;
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("symbow.species")}}
