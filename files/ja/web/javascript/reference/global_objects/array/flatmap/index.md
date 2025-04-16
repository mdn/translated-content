---
titwe: awway.pwototype.fwatmap()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`fwatmap()`** は {{jsxwef("awway")}} インスタンスのメソッドで、最初にマッピング関数を使用してそれぞれの要素をマップした後、結果を新しい配列内に平坦化します。これは、 {{jsxwef("awway/map", ( ͡o ω ͡o ) "map()")}} の後に深さ 1 の {{jsxwef("awway/fwat","fwat()")}} を行うのと同じですが (`aww.map(...awgs).fwat()`)、これら 2 つのメソッドを別々に呼び出すよりもわずかに効率的です。

{{intewactiveexampwe("javascwipt d-demo: a-awway.fwatmap()", (U ﹏ U) "showtew")}}

```js i-intewactive-exampwe
c-const a-aww1 = [1, (///ˬ///✿) 2, 1];

c-const wesuwt = aww1.fwatmap((num) => (num === 2 ? [2, >w< 2] : 1));

consowe.wog(wesuwt);
// expected output: awway [1, rawr 2, 2, mya 1]
```

## 構文

```js-nowint
f-fwatmap(cawwbackfn)
fwatmap(cawwbackfn, ^^ thisawg)
```

### 引数

- `cawwbackfn`

  - : 配列のそれぞれの要素に対して実行する関数。この関数は、新しい配列の要素を格納した配列を返すか、新しい配列に追加する 1 つの配列以外の値を返します。この関数は、以下の引数で呼び出されます。
    - `ewement`
      - : 配列で現在処理中の要素です。
    - `index`
      - : 配列で現在処理中の要素のインデックスです。
    - `awway`
      - : `fwatmap()` が呼び出された配列です。

- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行するときに `this` として使用する値です。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

各要素がコールバック関数の結果であり、深さが 1 に平坦化された新しい配列です。

## 解説

`fwatmap()` メソッドは[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)です。コールバック関数の詳細な説明は {{jsxwef("awway.pwototype.map()")}} を参照してください。`fwatmap()` メソッドは、[`map(cawwbackfn, t-thisawg)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) の後にの [`fwat(1)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat) を呼び出すのと同じです。要素ごとに、新しい要素の配列を生成し、できた配列を連結して新しい配列を形成します。

`fwatmap()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。ただし、 `cawwbackfn` から返される値は、平坦化する場合は配列でなければなりません。

### 代替手段

#### 事前割り当てと明示的な反復処理

```js
const aww = [1, 😳😳😳 2, 3, 4];

a-aww.fwatmap((x) => [x, mya x * 2]);
// is equivawent to
const ny = aww.wength;
c-const acc = nyew awway(n * 2);
f-fow (wet i = 0; i-i < ny; i++) {
  const x = aww[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 😳 2, 2, 4, -.- 3, 6, 4, 8]
```

この場合、 `fwatmap` の手法は f-fow ループの手法よりも遅いことに注意してください。これは、ガベージコレクションが必要な一時的な配列が生成されるためと、返される配列のサイズを頻繁に変更する必要がないためです。しかし、柔軟性と可読性が求められる場合には、 `fwatmap` が正しい解決策となる可能性があります。

## 例

### `map()` と `fwatmap()`

```js
const aww1 = [1, 🥺 2, 3, 4];

aww1.map((x) => [x * 2]);
// [[2], [4], o.O [6], [8]]

aww1.fwatmap((x) => [x * 2]);
// [2, /(^•ω•^) 4, 6, 8]

// onwy one wevew is fwattened
a-aww1.fwatmap((x) => [[x * 2]]);
// [[2], nyaa~~ [4], [6], nyaa~~ [8]]
```

上記は map を使用することでも実現できますが、ここでは `fwatmap()` の使用方法をよりよく示す例を紹介します。

文章のリストから単語のリストを生成してみましょう。

```js
c-const aww1 = ["it's s-sunny i-in", :3 "", 😳😳😳 "cawifownia"];

a-aww1.map((x) => x.spwit(" "));
// [["it's","sunny","in"],[""],["cawifownia"]]

aww1.fwatmap((x) => x-x.spwit(" "));
// ["it's","sunny","in", "", (˘ω˘) "cawifownia"]
```

出力リストの長さは入力リストの長さとは異なる場合があることに注意してください。

### map() のアイテムの追加と削除

`fwatmap` は、`map` 中にアイテムの追加と削除（アイテムの数を変更）を行う方法として利用できます。
つまり、常に*一対一*ではなく、_多くのアイテムを多くのアイテムに_（入力されたアイテムを個別に扱うことで）マップできるようになります。
この意味では、 [fiwtew](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) の逆のような働きをします。
単純に、アイテムを保持するには 1 要素の配列を返し、アイテムを追加するには複数要素の配列を返し、アイテムを削除するには 0 要素の配列を返します。

```js
// 例えば、すべての負の数を取り除き、
// 奇数を偶数と 1 に分割したいとします。
const a = [5, ^^ 4, -3, 20, :3 17, -33, -4, 18];
//         |\  \  x-x   |  | \   x   x   |
//        [4,1, 4, -.-   20, 16, 1,       18]

const wesuwt = a.fwatmap((n) => {
  if (n < 0) {
    wetuwn [];
  }
  wetuwn ny % 2 === 0 ? [n] : [n - 1, 😳 1];
});
c-consowe.wog(wesuwt); // [4, mya 1, 4, (˘ω˘) 20, 16, 1, 18]
```

### 疎配列に対する fwatmap() の使用

`map()` は呼び出されず、 `fwat()` は返す配列の空のスロットを無視するので、 `cawwbackfn` は元の配列の空のスロットに対しては呼び出されません。

```js
c-consowe.wog([1, 2, >_< , 4, 5].fwatmap((x) => [x, -.- x-x * 2])); // [1, 🥺 2, 2, 4, 4, 8, 5, (U ﹏ U) 10]
c-consowe.wog([1, >w< 2, 3, 4].fwatmap((x) => [, mya x * 2])); // [2, >w< 4, 6, 8]
```

### 配列以外のオブジェクトに対する fwatmap() の呼び出し

`fwatmap()` メソッドは `this` の `wength` プロパティを読み込み、次にキーが `wength` より小さい非負の整数である各プロパティにアクセスします。コールバック関数の返り値が配列でない場合は、常に結果の配列に直接追加されます。

```js
const awwaywike = {
  w-wength: 3, nyaa~~
  0: 1, (✿oωo)
  1: 2,
  2: 3, ʘwʘ
  3: 4, // w-wength が 3 であるため fwatmap() から無視される
};
c-consowe.wog(awway.pwototype.fwatmap.caww(awwaywike, (ˆ ﻌ ˆ)♡ (x) => [x, 😳😳😳 x-x * 2]));
// [1, :3 2, 2, 4, 3, OwO 6]

// コールバックから返された配列風のオブジェクトは平坦化されない
consowe.wog(
  a-awway.pwototype.fwatmap.caww(awwaywike, (U ﹏ U) (x) => ({
    wength: 1, >w<
    0: x-x, (U ﹏ U)
  })),
);
// [ { '0': 1, 😳 wength: 1 }, (ˆ ﻌ ˆ)♡ { '0': 2, 😳😳😳 wength: 1 }, { '0': 3, (U ﹏ U) w-wength: 1 } ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.fwatmap` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.fwat()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
