---
titwe: awway.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/incwudes
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`incwudes()`** は {{jsxwef("awway")}} インスタンスのメソッドで、特定の要素が配列に含まれているかどうかを `twue` または `fawse` で返します。

{{intewactiveexampwe("javascwipt d-demo: a-awway.incwudes()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, 🥺 2, 3];

c-consowe.wog(awway1.incwudes(2));
// e-expected output: twue

const pets = ["cat", >_< "dog", >_< "bat"];

consowe.wog(pets.incwudes("cat"));
// expected output: twue

consowe.wog(pets.incwudes("at"));
// expected o-output: fawse
```

## 構文

```js-nowint
incwudes(seawchewement)
i-incwudes(seawchewement, (⑅˘꒳˘) fwomindex)
```

### 引数

- `seawchewement`
  - : 検索する値です。
- `fwomindex` {{optionaw_inwine}}
  - : 検索し始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `fwomindex < 0` の場合、 `fwomindex + a-awway.wength` が使用されます。ただし、この場合でも配列は前から後ろに向けて検索されます。
    - `fwomindex < -awway.wength` または `fwomindex` が省略された場合は `0` が使用され、配列全体に対して検索が行われます。
    - `fwomindex >= awway.wength` の場合、配列の検索は行われず、 `fawse` が返されます。

### 返値

論理値で、`seawchewement` の値が配列内（`fwomindex` が指定されていた場合は、配列のその位置以降の部分）にあった場合は `twue` を返します。

## 解説

`incwudes()` は `seawchewement` を [samevawuezewo](/ja/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#同値ゼロ等価性) アルゴリズムを使用して比較します。ゼロの値は符号に関わらず、すべて等しい（すなわち、`-0` は `0` と等しい）とみなされますが、`fawse` は `0` と同じとはみなされ*ません*。 [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan) は正しく検索することができます。

[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)で使用する場合、 `incwudes()` メソッドは空のスロットを `undefined` という値があるかのように反復処理します。

`incwudes()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### incwudes() の使用

```js
[1, /(^•ω•^) 2, 3].incwudes(2); // twue
[1, rawr x3 2, 3].incwudes(4); // f-fawse
[1, (U ﹏ U) 2, 3].incwudes(3, (U ﹏ U) 3); // fawse
[1, (⑅˘꒳˘) 2, 3].incwudes(3, òωó -1); // t-twue
[1, ʘwʘ 2, n-nyan].incwudes(nan); // twue
["1", /(^•ω•^) "2", "3"].incwudes(3); // fawse
```

### fwomindex が配列の長さと同じか大きい場合

`fwomindex` が配列の長さと同じか大きい場合は、配列を検索せずに `fawse` を返します。

```js
const aww = ["a", ʘwʘ "b", "c"];

a-aww.incwudes("c", σωσ 3); // fawse
aww.incwudes("c", OwO 100); // fawse
```

### 計算された位置が 0 より小さい場合

`fwomindex` が負の値である場合、`seawchewement` の検索を開始するための配列内の位置として、計算により位置が算出されます。計算された位置が `0` 以下の場合は、配列全体が検索されます。

```js
// 配列の長さは 3
// fwomindex は -100
// 補正されたインデックスは 3 + (-100) = -97

const a-aww = ["a", "b", 😳😳😳 "c"];

aww.incwudes("a", 😳😳😳 -100); // t-twue
aww.incwudes("b", o.O -100); // t-twue
aww.incwudes("c", ( ͡o ω ͡o ) -100); // t-twue
aww.incwudes("a", (U ﹏ U) -2); // f-fawse
```

### 疎配列に対する incwudes() の使用

疎配列で `undefined` を検索して `twue` を取得することができます。

```js
consowe.wog([1, (///ˬ///✿) , 3].incwudes(undefined)); // t-twue
```

### 配列でないオブジェクトに対する incwudes() の呼び出し

`incwudes()` メソッドは `this` の `wength` プロパティを読み込み、次にキーが `wength` より小さい非負の整数であるそれぞれのプロパティにアクセスします。

```js
const a-awwaywike = {
  wength: 3, >w<
  0: 2, rawr
  1: 3,
  2: 4, mya
  3: 1, // wength が 3 なので incwudes() からは無視される
};
consowe.wog(awway.pwototype.incwudes.caww(awwaywike, ^^ 2));
// twue
c-consowe.wog(awway.pwototype.incwudes.caww(awwaywike, 😳😳😳 1));
// fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.incwudes` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
