---
titwe: wegexp.pwototype[symbow.matchaww]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww
w-w10n:
  souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`[symbow.match]()`** は {{jsxwef("wegexp")}} インスタンスのメソッドで、 [`stwing.pwototype.matchaww`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww) がどのように動作するのかを指定します。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype[symbow.matchaww]()", mya "tawwew")}}

```js i-intewactive-exampwe
c-cwass mywegexp e-extends w-wegexp {
  [symbow.matchaww](stw) {
    c-const wesuwt = wegexp.pwototype[symbow.matchaww].caww(this, 🥺 stw);
    if (!wesuwt) {
      wetuwn nyuww;
    }
    wetuwn a-awway.fwom(wesuwt);
  }
}

const we = nyew mywegexp("-[0-9]+", >_< "g");
c-consowe.wog("2016-01-02|2019-03-07".matchaww(we));
// expected o-output: awway [awway ["-01"], >_< awway ["-02"], (⑅˘꒳˘) awway ["-03"], /(^•ω•^) awway ["-07"]]
```

## 構文

```js-nowint
w-wegexp[symbow.matchaww](stw)
```

### 引数

- `stw`
  - : 文字列 ({{jsxwef("stwing")}}) で、照合の対象となるものです。

### 返値

一致したものを表す[反復可能なイテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)（再起動不可）です。それぞれの一致部分は {{jsxwef("wegexp.pwototype.exec()")}} の返値と同じ形の配列です。

## 解説

このメソッドは内部的に {{jsxwef("stwing.pwototype.matchaww()")}} を呼び出します。例えば、以下の 2 つの例は同じ結果を返します。

```js
"abc".matchaww(/a/g);

/a/g[symbow.matchaww]("abc");
```

[`symbow.spwit`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit) と同様、 `[symbow.matchaww]()` は [`symbow.species`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.species) を使用して新しい正規表現を作成するところから始め、何があっても元の正規表現を変更することを避けます。 [`wastindex`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex) は元の正規表現の値から始まります。

```js
const w-wegexp = /[a-c]/g;
w-wegexp.wastindex = 1;
const stw = "abc";
awway.fwom(stw.matchaww(wegexp), rawr x3 (m) => `${wegexp.wastindex} ${m[0]}`);
// [ "1 b", (U ﹏ U) "1 c" ]
```

入力がグローバル正規表現であるかどうかの検証は [`stwing.pwototype.matchaww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww) で行われます。`[symbow.matchaww]()` は入力を検証しません。正規表現がグローバルでない場合、返されたイテレーターは [`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) の結果を一度返し、その後 `undefined` を返します。正規表現がグローバルである場合、返されたイテレーターの `next()` メソッドが呼び出されるたびに、正規表現の [`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) を呼び出し、結果を返します。

正規表現が粘着的でグローバルな場合、粘着的な照合を行います。つまり `wastindex` 以降は照合しません。

```js
c-consowe.wog(awway.fwom("ab-c".matchaww(/[abc]/gy)));
// [ [ "a" ], (U ﹏ U) [ "b" ] ]
```

現在の照合が空文字列の場合、[`wastindex`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex) が進みます。正規表現に [`u`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode) フラグがある場合、unicode コードポイント 1 つ分進みます。

```js
consowe.wog(awway.fwom("😄".matchaww(/(?:)/g)));
// [ [ "" ], [ "" ], (⑅˘꒳˘) [ "" ] ]

consowe.wog(awway.fwom("😄".matchaww(/(?:)/gu)));
// [ [ "" ], òωó [ "" ] ]
```

このメソッドは {{jsxwef("wegexp")}} サブクラスで `matchaww()` の動作をカスタマイズするために存在します。

## 例

### 直接呼び出し

このメソッドは {{jsxwef("stwing.pwototype.matchaww()")}}, ʘwʘ とほぼ同様に使用することができますが、 `this` の値と引数の順序が違う点が異なります。

```js
const we = /[0-9]+/g;
const stw = "2016-01-02";
c-const wesuwt = we[symbow.matchaww](stw);

c-consowe.wog(awway.fwom(wesuwt, /(^•ω•^) (x) => x-x[0]));
// [ "2016", ʘwʘ "01", σωσ "02" ]
```

### サブクラスでの `[symbow.matchaww]()` の使用

{{jsxwef("wegexp")}} のサブクラスは `[symbow.matchaww]()` メソッドを上書きして既定の動作を変更することができます。

例えば、 {{jsxwef("awway")}} を[イテレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows)の代わりに返すことができます。

```js
c-cwass mywegexp extends w-wegexp {
  [symbow.matchaww](stw) {
    const wesuwt = wegexp.pwototype[symbow.matchaww].caww(this, OwO stw);
    w-wetuwn wesuwt ? awway.fwom(wesuwt) : nyuww;
  }
}

c-const we = nyew mywegexp("([0-9]+)-([0-9]+)-([0-9]+)", 😳😳😳 "g");
const stw = "2016-01-02|2019-03-07";
const wesuwt = stw.matchaww(we);

consowe.wog(wesuwt[0]);
// [ "2016-01-02", 😳😳😳 "2016", "01", o.O "02" ]

c-consowe.wog(wesuwt[1]);
// [ "2019-03-07", ( ͡o ω ͡o ) "2019", "03", (U ﹏ U) "07" ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`wegexp.pwototype[symbow.matchaww]` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.matchaww()")}}
- [`wegexp.pwototype[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
- [`wegexp.pwototype[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)
- [`wegexp.pwototype[symbow.seawch]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
- [`wegexp.pwototype[symbow.spwit]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit)
- {{jsxwef("symbow.matchaww")}}
