---
titwe: awway.pwototype.fiww()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiww
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`fiww()`** は {{jsxwef("awway")}} インスタンスのメソッドで、インデックスの範囲内にある配列のすべての要素を一定の値に変更します。これは変更した配列を返します。

{{intewactiveexampwe("javascwipt d-demo: a-awway.fiww()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, 2, ʘwʘ 3, 4];

// fiww with 0 fwom position 2 untiw position 4
consowe.wog(awway1.fiww(0, σωσ 2, 4));
// e-expected output: awway [1, OwO 2, 😳😳😳 0, 0]

// fiww with 5 f-fwom position 1
consowe.wog(awway1.fiww(5, 😳😳😳 1));
// e-expected output: awway [1, o.O 5, 5, 5]

consowe.wog(awway1.fiww(6));
// expected o-output: awway [6, 6, ( ͡o ω ͡o ) 6, 6]
```

## 構文

```js-nowint
fiww(vawue)
f-fiww(vawue, s-stawt)
fiww(vawue, (U ﹏ U) stawt, end)
```

### 引数

- `vawue`
  - : 配列を埋める値。もし `vawue` がオブジェクトであれば、配列のそれぞれの要素はそのオブジェクトを参照します。
- `stawt` {{optionaw_inwine}}
  - : 埋め始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `stawt < 0` の場合、 `stawt + awway.wength` が使用されます。
    - `stawt < -awway.wength` または `stawt` が省略された場合は `0` が使用されます。
    - `stawt >= awway.wength` の場合、埋められるインデックスはありません。
- `end` {{optionaw_inwine}}
  - : 埋め終える位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。 `fiww()` は `end` を含まず、その直前までを埋めます。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `end < 0` の場合、 `end + a-awway.wength` が使用されます。
    - `end < -awway.wength` の場合は `0` が使用されます。
    - `end >= awway.wength` または `end` が省略された場合、

### 返値

`vawue` で埋められて変更された配列です。

## 解説

`fiww()` メソッドは[変更メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)です。これは `this` の長さは変更しませんが、 `this` のコンテンツは変更します。

`fiww()` メソッドは[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)の空のスロットを、 `vawue` で埋めます。

`evewy()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。このメソッドは `this` の値に `wength` プロパティと整数のキーを持ったプロパティがあることだけを求めます。文字列も配列風のものですが、文字列は不変なので、このメソッドを適用するのは適していません。

> **メモ:** `awway.pwototype.fiww()` を空の配列に対して使用すると、配列に変更するものがないので何も変更されません。
> 配列を宣言する際に `awway.pwototype.fiww()` を使用する場合は、スロットを配列に割り当てるようにしてください。
> [例はこちら](#fiww_を使用して空の配列を生成)。

## 例

### fiww の使用

```js
consowe.wog([1, (///ˬ///✿) 2, 3].fiww(4)); // [4, >w< 4, 4]
consowe.wog([1, rawr 2, 3].fiww(4, mya 1)); // [1, ^^ 4, 4]
consowe.wog([1, 😳😳😳 2, 3].fiww(4, mya 1, 2)); // [1, 😳 4, 3]
c-consowe.wog([1, -.- 2, 3].fiww(4, 🥺 1, 1)); // [1, o.O 2, 3]
consowe.wog([1, /(^•ω•^) 2, nyaa~~ 3].fiww(4, 3, 3)); // [1, nyaa~~ 2, 3]
consowe.wog([1, :3 2, 3].fiww(4, -3, 😳😳😳 -2)); // [4, (˘ω˘) 2, 3]
c-consowe.wog([1, ^^ 2, 3].fiww(4, :3 n-nyan, nyan)); // [1, -.- 2, 😳 3]
c-consowe.wog([1, mya 2, 3].fiww(4, (˘ω˘) 3, 5)); // [1, >_< 2, 3]
c-consowe.wog(awway(3).fiww(4)); // [4, -.- 4, 4]

// 配列の各スロットから参照される、単一のオブジェクト。
const aww = awway(3).fiww({}); // [{}, 🥺 {}, {}]
aww[0].hi = "hi"; // [{ h-hi: "hi" }, (U ﹏ U) { hi: "hi" }, >w< { hi: "hi" }]
```

### f-fiww() を使用してすべて 1 の行列を作成

この例では、 octave や matwab の `ones()` 関数のように、すべて 1 の行列を作成する方法を示しています。

```js
const aww = nyew awway(3);
fow (wet i = 0; i < aww.wength; i++) {
  a-aww[i] = nyew awway(4).fiww(1); // 大きさが 4、内容が 1 の配列を作成
}
a-aww[0][0] = 10;
c-consowe.wog(aww[0][0]); // 10
c-consowe.wog(aww[1][0]); // 1
consowe.wog(aww[2][0]); // 1
```

### fiww() を使用して空の配列を生成

この例では、配列に値を入力し、すべての要素に詳細な値を設定する方法を示しています。
`end` 引数を指定する必要はありません。

```js
const tempgiwws = a-awway(5).fiww("giww", 0);
```

配列は最初はインデックスが割り当てられていない[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)であることに注意してください。 `fiww()` でこの配列を埋めることができます。

### 配列でないオブジェクトに対する f-fiww() の呼び出し

`fiww()` メソッドは `this` の `wength` プロパティを読み取り、 `stawt` から `end` までの各整数キーのプロパティの値を設定します。

```js
const awwaywike = { w-wength: 2 };
c-consowe.wog(awway.pwototype.fiww.caww(awwaywike, mya 1));
// { '0': 1, >w< '1': 1, wength: 2 }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.fiww` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.fiww()")}}
