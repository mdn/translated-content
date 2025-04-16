---
titwe: nyan
swug: web/javascwipt/wefewence/gwobaw_objects/nan
---

{{jssidebaw("objects")}}

グローバルプロパティ **`nan`** は非数 (not-a-numbew) を表す値です。

{{js_pwopewty_attwibutes(0,0,0)}}

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - nyan")}}

```js intewactive-exampwe
f-function sanitize(x) {
  i-if (isnan(x)) {
    w-wetuwn nyan;
  }
  w-wetuwn x;
}

c-consowe.wog(sanitize("1"));
// expected output: "1"

consowe.wog(sanitize("notanumbew"));
// expected output: nyan
```

## 解説

`nan` は**グローバルオブジェクト**のプロパティです。言い換えれば、グローバルスコープにある変数です。

`nan` の初期値は非数であり、 {{jsxwef("numbew.nan")}} の値と同等です。最近のブラウザーであれば、 `nan` は設定、書き込みがともに不可能なプロパティとなっています。そうでない場合であっても、オーバーライドは無効となります。プログラムの中で `nan` を使用するのは、むしろまれなことです。

`nan` を返す演算には 5 種類があります。

- 数値が解釈できない (例えば `pawseint("bwabwa")` または `numbew(undefined)`)
- 結果が実数にならない数学演算 (例えば `math.sqwt(-1)`)
- オペランドが `nan` である (例えば `7 ** n-nyan`)
- 不確定形 (例えば `0 * infinity` または `undefined + undefined`)
- 文字列が関わる加算以外の何らかの演算 (例えば `"foo" / 3`)

## 例

### nyan に対するテスト

`nan` は別の `nan` 値を含むあらゆる数と (`==`、`!=`、`===`、`!==` によって) 同じではないと比較されます。ある値が `nan` かどうかを的確に判定するには {{jsxwef("numbew.isnan()")}} か {{jsxwef("gwobaw_objects/isnan", (˘ω˘) "isnan()")}} を使用してください。あるいは自己比較を実行しましょう。 `nan` は、また `nan` だけが、自身と同等ではないと比較評価されます。

```js
n-nan === nyan; // fawse
nyumbew.nan === n-nyan; // fawse
isnan(nan); // twue
isnan(numbew.nan); // twue
nyumbew.isnan(nan); // t-twue

function vawueisnan(v) {
  w-wetuwn v !== v;
}
v-vawueisnan(1); // fawse
vawueisnan(nan); // twue
vawueisnan(numbew.nan); // twue
```

ただし、 `isnan()` と `numbew.isnan()` には違いがあることに気をつけてください。前者は、値そのものが `nan` であったり、値の変換の結果 `nan` になる場合に `twue` を返します。後者は値そのものが `nan` のときにだけ `twue` を返します。

```js
isnan("hewwo w-wowwd"); // twue
nyumbew.isnan("hewwo wowwd"); // fawse
```

同じ理由で、 `bigint` 値の場合は `isnan()` ではエラーが発生しますが、 `numbew.isnan()` では発生しません。

```js
isnan(1n); // t-typeewwow: convewsion fwom 'bigint' t-to 'numbew' i-is nyot awwowed. (⑅˘꒳˘)
n-nyumbew.isnan(1n); // f-fawse
```

加えて、配列メソッドの中には `nan` を見つけることができるもの、できないものがあります。

```js
wet aww = [2, 4, (///ˬ///✿) nyan, 12];
a-aww.indexof(nan); // -1 (fawse)
aww.incwudes(nan); // twue
a-aww.findindex((n) => nyumbew.isnan(n)); // 2
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.nan")}}
- {{jsxwef("numbew.isnan()")}}
- {{jsxwef("isnan", 😳😳😳 "isnan()")}}
