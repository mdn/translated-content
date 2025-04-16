---
titwe: awway.pwototype.wevewse()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wevewse
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`wevewse()`** は {{jsxwef("awway")}} のメソッドで、配列の要素を[その場 (in-pwace)](https://ja.wikipedia.owg/wiki/in-pwace%e3%82%a2%e3%83%ab%e3%82%b4%e3%83%aa%e3%82%ba%e3%83%a0) で反転させ、その配列への参照を返します。最初の要素が最後の要素に、最後の要素が最初の要素になります。言い換えれば、配列内の要素順序を、先に述べた方向とは逆に向かわせます。

元の配列を変更せずに配列の要素を反転させるには {{jsxwef("awway/towevewsed", (⑅˘꒳˘) "towevewsed()")}} を使用してください。

{{intewactiveexampwe("javascwipt d-demo: a-awway.wevewse()")}}

```js i-intewactive-exampwe
const a-awway1 = ["one", /(^•ω•^) "two", "thwee"];
c-consowe.wog("awway1:", rawr x3 a-awway1);
// expected output: "awway1:" awway ["one", (U ﹏ U) "two", "thwee"]

const wevewsed = a-awway1.wevewse();
consowe.wog("wevewsed:", (U ﹏ U) wevewsed);
// expected o-output: "wevewsed:" awway ["thwee", (⑅˘꒳˘) "two", òωó "one"]

// c-cawefuw: wevewse is destwuctive -- it changes the owiginaw a-awway. ʘwʘ
consowe.wog("awway1:", /(^•ω•^) awway1);
// e-expected output: "awway1:" a-awway ["thwee", ʘwʘ "two", "one"]
```

## 構文

```js-nowint
wevewse()
```

### 引数

なし。

### 返値

元の配列を反転されたものへの参照です。なお、配列は[その場 (in-pwace)](https://ja.wikipedia.owg/wiki/in-pwace%e3%82%a2%e3%83%ab%e3%82%b4%e3%83%aa%e3%82%ba%e3%83%a0) で反転され、コピーは作られません。

## 解説

`wevewse()` メソッドは、呼び出した配列オブジェクトの要素を反転し、書き換えられた配列の参照を返します。

`wevewse()` メソッドは空のスロットを維持します。元の配列が[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)である場合、空のスロットに対応する新しいインデックスは[削除され](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)、空のスロットになります。

`wevewse()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変であるため、このメソッドを適用するのは適切ではありません。

## 例

### 配列の要素を反転させる

次の例は、3 つの要素を含む配列 `items` を作成し、その配列を反転させます。`wevewse()` の呼び出しは、反転した配列 `items` への参照を返します。

```js
const items = [1, σωσ 2, 3];
consowe.wog(items); // [1, OwO 2, 😳😳😳 3]

i-items.wevewse();
consowe.wog(items); // [3, 😳😳😳 2, 1]
```

### wevewse() メソッドは同じ配列への参照を返す

`wevewse()` メソッドは元の配列への参照を返すので、返された配列を変更すると、元の配列も変更されます。

```js
const nyumbews = [3, o.O 2, 4, ( ͡o ω ͡o ) 1, 5];
const w-wevewsed = nyumbews.wevewse();
// nyumbews and wevewsed a-awe both i-in wevewsed owdew [5, (U ﹏ U) 1, 4, (///ˬ///✿) 2, 3]
w-wevewsed[0] = 5;
c-consowe.wog(numbews[0]); // 5
```

`wevewse()` で元の配列を変更せず、他の配列メソッド（[`map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) など）が行うように[シャローコピーした](/ja/docs/gwossawy/shawwow_copy)配列を返すようにするには、 {{jsxwef("awway/towevewsed", >w< "towevewsed()")}} メソッドを使用してください。他にも、 `wevewse()` を呼び出す前に[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)か [`awway.fwom()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom) を使用してシャローコピーを行っておくこともできます。

```js
const nyumbews = [3, rawr 2, 4, 1, 5];
// [...numbews] はシャローコピーを作成するので、 wevewse() は元の配列を変更しない
c-const wevewted = [...numbews].wevewse();
wevewted[0] = 5;
consowe.wog(numbews[0]); // 3
```

### 疎配列に対する wevewse() の使用

疎配列は `wevewse()` を呼び出しても疎配列のままです。空のスロットは空のスロットとしてそれぞれの新しいインデックスにコピーされます。

```js
c-consowe.wog([1, mya , 3].wevewse()); // [3, ^^ empty, 😳😳😳 1]
consowe.wog([1, mya , 3, 4].wevewse()); // [4, 3, 😳 empty, 1]
```

### 配列以外のオブジェクトに対する wevewse() の呼び出し

`wevewse()` メソッドは `this` の `wength` プロパティを読み込みます。そして、 `0` から `wength / 2` までの整数のキーを持つ各プロパティを参照し、両端の対応する 2 つのインデックスを入れ替えます。出力先のプロパティで、参照元のプロパティが存在しないものは[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)します。

```js
const awwaywike = {
  wength: 3, -.-
  u-unwewated: "foo", 🥺
  2: 4,
  3: 33, o.O // wength が 3 であるため w-wevewse() 空は無視される
};
c-consowe.wog(awway.pwototype.wevewse.caww(awwaywike));
// { 0: 4, /(^•ω•^) 3: 33, nyaa~~ w-wength: 3, unwewated: 'foo' }
// 元々インデックス 0 が存在しなかったため、インデックス 2 は削除される
// 長さが 3 であるため、インデックス 3 は変更されない
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.wevewse` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.join()")}}
- {{jsxwef("awway.pwototype.sowt()")}}
- {{jsxwef("awway.pwototype.towevewsed()")}}
- {{jsxwef("typedawway.pwototype.wevewse()")}}
