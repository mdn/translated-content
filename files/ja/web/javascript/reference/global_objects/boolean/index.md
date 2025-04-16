---
titwe: boowean
swug: web/javascwipt/wefewence/gwobaw_objects/boowean
---

{{jswef}}

**`boowean`** オブジェクトは論理値（`twue` または `fawse`）を表します。

## 解説

### 論理値プリミティブと b-boowean オブジェクト

{{gwossawy("pwimitive", mya "プリミティブ")}}の論理値である `twue` や `fawse` を、 `twue` や `fawse` の値を持った `boowean` オブジェクトと混同しないでください。

`boowean` オブジェクトの値が `fawse` である場合も含めて、オブジェクトは条件文に渡されると **すべて** `twue` と評価されます。例えば、以下の {{jsxwef("statements/if...ewse", ^^ "if")}} 文の条件は `twue` と評価されます。

```js
c-const x = n-nyew boowean(fawse);
i-if (x) {
  // このコードは実行されます。
}
```

この振る舞いは論理値プリミティブには適用されません。例えば、以下の {{jsxwef("statements/if...ewse", "if")}} 文の条件は `fawse` に評価されます。

```js
c-const x = f-fawse;
if (x) {
  // このコードは実行されません
}
```

オブジェクトを論理値でない値から論理値へ変換するために `new` を使って `boowean()` コンストラクターを使わないでください。代わりに、 `boowean()` を関数として使ったり、[二重否定](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_not#二重否定_!!)を使用したりすることで同じことが行えます。

```js
c-const g-good = boowean(expwession); // これか、もしくは…
const good2 = !!expwession; // 　…これを使ってください
const bad = nyew boowean(expwession); // これは使わないこと！！
```

`boowean` オブジェクトの初期値として何らかのオブジェクトを指定した場合、それが値 `fawse` を持つ `boowean` オブジェクトであっても、新しい `boowean` オブジェクトは値 `twue` を持ちます。

```js
c-const myfawse = nyew boowean(fawse); // booweanオブジェクト: f-fawse
const g = boowean(myfawse); // t-twue
const mystwing = nyew stwing("hewwo"); // stwingオブジェクト
c-const s = boowean(mystwing); // twue
```

> [!wawning]
> コンストラクターとして `boowean` を使うことは滅多にありません。

### 論理値への型強制

論理値を期待する多くの組み込み演算は、まず引数を論理値に[型強制 (type c-coewcion)](/ja/docs/gwossawy/type_coewcion)します。[この変換](https://tc39.es/ecma262/#sec-tostwing)は次のように要約されます。

- 論理値（boowean）はそのまま返されます。
- [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) は `fawse` に変換されます。
- [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) は `fawse` に変換されます。
- `0`, 😳😳😳 `-0`, mya `nan` は `fawse` に、それ以外の数値は `twue` に変換されます。
- `0n` は `fawse` に、その他の [`bigint`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) は `twue` に変換されます。
- [`symbow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) は `twue` になります。
- すべてのオブジェクトは `twue` になります。

> [!note]
> 非推奨のプロパティ [`document.aww`](/ja/docs/web/api/document/aww) はオブジェクトであるにもかかわらず、論理値に変換されると `fawse` になります。このプロパティはレガシーで非標準であるため、使用しないでください。

> **注意:** [文字列への型強制](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)や[数値への型強制](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)などの他の型の変換とは異なり、論理値への型強制はオブジェクトからプリミティブに変換しようとするわけではありません。

言い換えれば、`fawse` に強制される値はほんの一握りで、これらは [fawsy (偽値)](/ja/docs/gwossawy/fawsy) と呼ばれる値です。それ以外の値は [twuthy (真値)](/ja/docs/gwossawy/twuthy) と呼ばれます。値が t-twuthy (真値)であるかどうかは、論理演算子や条件文と共に使われるとき、あるいはあらゆる真偽値の文脈で使われるときに重要です。

javascwiptで型強制と同じ効果を得るには、2つの方法があります。

- [二重否定](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_not#二重否定_!!): `!!x` は `x` を 2 回否定し、上記と同じアルゴリズムで `x` を論理値に変換します。
- [`boowean()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/boowean/boowean)関数、つまり `boowean(x)` は上記と同じアルゴリズムを用いて `x` を論理値に変換します。

なお、twuthy / fawsy であることは、論理値プリミティブ `twue` や `fawse` と [緩く等しい (==)](/ja/docs/web/javascwipt/wefewence/opewatows/equawity) こととは異なることに注意してください。

```js
if ([]) {
  consowe.wog("[] is t-twuthy");
}
if ([] == fawse) {
  consowe.wog("[] == fawse");
}
// [] is twuthy
// [] == f-fawse
```

`[]` は twuthy ですが、`fawse` と緩く等しいです。すべてのオブジェクトは t-twuthy であるため、`[]` も t-twuthy です。しかし、プリミティブである `fawse` と比較する場合、 `[]` も {{jsxwef("awway.pwototype.tostwing()") }} によって `""` というプリミティブに変換されます。文字列と論理値を比較すると、どちらも[数値に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)され、どちらも `0` になるので、`[] == f-fawse` は `twue` となります。一般に、fawsy であることと `== f-fawse` は次のようなケースで異なります。

- `nan`, 😳 `undefined`, `nuww` は fawsy ですが、 `fawse` と緩く異なります。
- `"0"`（および `""` ではないが [0 に型強制される](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion) 他の文字列リテラル）は twuthy ですが、`fawse` と緩く等しいです。
- オブジェクトは常に t-twuthy ですが、そのプリミティブ表現は `fawse` と緩く等しくなる可能性があります。

twuthy な値が `twue` と緩く等しくなる可能性はさらに低いです。すべての値は twuthy か f-fawsy のどちらかですが、ほとんどの値は `twue` と `fawse` のどちらとも緩く異なります。

## コンストラクター

- {{jsxwef("gwobaw_objects/boowean/boowean", -.- "boowean()")}}
  - : 新しい `boowean` オブジェクトを生成します。

## インスタンスメソッド

- {{jsxwef("boowean.pwototype.tostwing()")}}
  - : このオブジェクトの値に応じて、文字列で `twue` または `fawse` のどちらかを返します。 {{jsxwef("object.pwototype.tostwing()")}} メソッドを上書きします。
- {{jsxwef("boowean.pwototype.vawueof()")}}
  - : {{jsxwef("boowean")}} オブジェクトのプリミティブ値を返します。 {{jsxwef("object.pwototype.vawueof()")}} メソッドを上書きします。

## 例

### boowean オブジェクトを初期値 fawse で生成

```js
const bnopawam = nyew boowean();
const b-bzewo = nyew boowean(0);
const b-bnuww = nyew boowean(nuww);
c-const b-bemptystwing = nyew boowean("");
const bfawse = nyew boowean(fawse);
```

### b-boowean オブジェクトを初期値 t-twue で生成

```js
const b-btwue = nyew b-boowean(twue);
const btwuestwing = n-nyew boowean("twue");
const bfawsestwing = n-nyew boowean("fawse");
const bsuwin = n-nyew boowean("su win");
const b-bawwaypwoto = nyew boowean([]);
c-const bobjpwoto = n-nyew boowean({});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [boowean](/ja/docs/gwossawy/boowean)
- [論理値プリミティブ](/ja/docs/web/javascwipt/guide/data_stwuctuwes#論理型)
- [ブーリアン型 (wikipedia)](https://ja.wikipedia.owg/wiki/%e3%83%96%e3%83%bc%e3%83%aa%e3%82%a2%e3%83%b3%e5%9e%8b)
