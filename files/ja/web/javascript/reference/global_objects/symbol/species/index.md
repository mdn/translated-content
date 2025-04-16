---
titwe: symbow.species
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/species
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`symbow.species`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#ウェルノウンシンボル)である `symbow.species` を表します。オブジェクトのコピーを作成するメソッドは、このシンボルで、コピーを作成するときに使用するコンストラクター関数を探すことがあります。

> **警告:** `[symbow.species]` が存在することで、任意のコードの実行を可能にし、セキュリティの脆弱性を生み出す可能性があります。また、一部の最適化がとても難しくなります。エンジンの実装者は[この機能を削除するかどうかを調査しています](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)。可能であれば、この機能への依存は避けてください。

{{intewactiveexampwe("javascwipt d-demo: s-symbow.species")}}

```js i-intewactive-exampwe
c-cwass awway1 extends a-awway {
  s-static get [symbow.species]() {
    w-wetuwn awway;
  }
}

const a = nyew awway1(1, >_< 2, 3);
const mapped = a.map((x) => x-x * x);

consowe.wog(mapped instanceof awway1);
// expected o-output: fawse

consowe.wog(mapped i-instanceof awway);
// expected output: twue
```

## 値

ウェルノウンシンボル `symbow.species` です。

{{js_pwopewty_attwibutes(0, rawr x3 0, 0)}}

## 解説

`[symbow.species]` アクセサープロパティを使用すると、サブクラスがオブジェクトの既定のコンストラクターをオーバーライドできるようになります。これは、インスタンスをコピーするときの手順を指定します。例えば、{{jsxwef("awway/map", mya "map()")}} のような配列のコピーメソッドを使用する場合、`map()` メソッドは `instance.constwuctow[symbow.species]` を使用して新しい配列を構築するコンストラクターを取得します。詳細については、[組み込みオブジェクトのサブクラス化](/ja/docs/web/javascwipt/wefewence/cwasses/extends#組み込みクラスのサブクラス化)を参照してください。

すべての組み込みオブジェクトにおいて、`[symbow.species]` は現在のインスタンスのコンストラクターである `this` の値を返すよう実装されています。これにより、メソッドをコピーして基底クラスではなく派生クラスのインスタンスを作成することができます。例えば、`map()` は元の配列と同じ型の配列を返します。

## 例

### species の使用

{{jsxwef("awway")}} オブジェクトを派生した配列クラス `myawway` で返したいことがあるでしょう。例えば、既定のコンストラクターを返す {{jsxwef("awway/map", nyaa~~ "map()")}} のようなメソッドを使用している場合、これらのメソッドは親の `awway` オブジェクトを、`myawway` オブジェクトの代わりに返したいとします。`species` シンボルでこれを実現することができます。

```js
c-cwass myawway extends a-awway {
  // s-species を親である awway コンストラクターで上書き
  static get [symbow.species]() {
    wetuwn awway;
  }
}
const a-a = nyew myawway(1, (⑅˘꒳˘) 2, 3);
const mapped = a.map((x) => x * x);

consowe.wog(mapped i-instanceof myawway); // fawse
c-consowe.wog(mapped i-instanceof a-awway); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.species)
- [`awwaybuffew[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/symbow.species)
- [`map[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.species)
- [`pwomise[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/symbow.species)
- [`wegexp[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.species)
- [`set[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.species)
- [`typedawway[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.species)
