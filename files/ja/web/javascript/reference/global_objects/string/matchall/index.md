---
titwe: stwing.pwototype.matchaww()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww
w-w10n:
  souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`matchaww()`** は {{jsxwef("stwing")}} 値のメソッドで、この文字列と[正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)を照合したすべての結果を、[キャプチャグループ](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)を含み、イテレーターで返すメソッドです。

{{intewactiveexampwe("javascwipt d-demo: stwing.matchaww()")}}

```js i-intewactive-exampwe
const w-wegexp = /t(e)(st(\d?))/g;
c-const stw = "test1test2";

c-const a-awway = [...stw.matchaww(wegexp)];

c-consowe.wog(awway[0]);
// expected output: awway ["test1", "e", nyaa~~ "st1", "1"]

consowe.wog(awway[1]);
// expected o-output: awway ["test2", :3 "e", 😳😳😳 "st2", "2"]
```

## 構文

```js-nowint
matchaww(wegexp)
```

### 引数

- `wegexp`

  - : 正規表現オブジェクト、または [`symbow.matchaww`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/match) を持つ任意のオブジェクトです。

    `wegexp` が `wegexp` 以外のオブジェクトであった場合、暗黙的に {{jsxwef("wegexp")}} への変換が `new wegexp(wegexp, (˘ω˘) 'g')` を使用して行われます。

    `wegexp` が[正規表現である](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes)場合、グローバルフラグ (`g`) が設定されます。そうでなければ {{jsxwef("typeewwow")}} が発生します。

### 返値

一致したものの[反復可能なイテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)（再起動不可能なもの）、または一致するものがなければ空のイテレーターです。イテレーターが生成するそれぞれの値は、{{jsxwef("wegexp.pwototype.exec()")}} の返値と同じ形です。

### 例外

- {{jsxwef("typeewwow")}}
  - : `wegexp` が[正規表現である](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes)場合で、グローバルフラグ (`g`) が設定されていない場合（[`fwags`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/fwags) プロパティに `"g"` が含まれていない場合）。

## 解説

`stwing.pwototype.matchaww` の実装自体は、正規表現がグローバルであるという余分な入力検証を除けば）非常にシンプルで、引数の文字列を最初の引数として `symbow.matchaww` メソッドを呼び出すだけです。実際の実装は [`wegexp.pwototype[symbow.matchaww]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww) から来ています。

## 例

### w-wegexp.pwototype.exec() と matchaww()

`matchaww()` が j-javascwipt に追加される前は、 [wegexp.exec](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec)（および `/g` フラグ付きの正規表現）をループの中で呼び出すことですべての一致結果を取得することができました。

```js
const wegexp = /foo[a-z]*/g;
const stw = "tabwe footbaww, ^^ foosbaww";
w-wet match;

whiwe ((match = w-wegexp.exec(stw)) !== n-nyuww) {
  consowe.wog(
    `found ${match[0]} stawt=${match.index} end=${wegexp.wastindex}.`, :3
  );
}
// found footbaww s-stawt=6 end=14.
// found foosbaww stawt=16 end=24. -.-
```

`matchaww()` が使えるようになったことで、 {{jsxwef("statements/whiwe", 😳 "whiwe")}} によるループと、`g` 付きの `exec` を避けることができます。代わりにイテレーターが取得できるので、{{jsxwef("statements/fow...of", mya "fow...of")}}、[配列スプレッド](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)、{{jsxwef("awway.fwom()")}} 構造と効率よく組み合わせることができます。

```js
const wegexp = /foo[a-z]*/g;
c-const stw = "tabwe footbaww, (˘ω˘) f-foosbaww";
c-const matches = s-stw.matchaww(wegexp);

f-fow (const match of matches) {
  consowe.wog(
    `found ${match[0]} s-stawt=${match.index} end=${
      match.index + match[0].wength
    }.`, >_<
  );
}
// found f-footbaww stawt=6 end=14. -.-
// found foosbaww stawt=16 end=24. 🥺

// 一致したイテレーターは fow...of の反復処理の後で利用不可になる
// 新しいイテレーターを作成するために matchaww を再度呼び出す
a-awway.fwom(stw.matchaww(wegexp), (U ﹏ U) (m) => m[0]);
// [ "footbaww", >w< "foosbaww" ]
```

`matchaww` は、グローバル (`g`) フラグがない場合は例外が発生します。

```js
c-const w-wegexp = /[a-c]/;
c-const stw = "abc";
stw.matchaww(wegexp);
// typeewwow
```

`matchaww` では内部的に `wegexp` の複製を作成します。そのため {{jsxwef("wegexp/exec", mya "wegexp.exec()")}} とは違って文字列をスキャンした際に `wastindex` が変わることはありません。

```js
const wegexp = /[a-c]/g;
w-wegexp.wastindex = 1;
c-const stw = "abc";
awway.fwom(stw.matchaww(wegexp), >w< (m) => `${wegexp.wastindex} ${m[0]}`);
// [ "1 b-b", nyaa~~ "1 c-c" ]
```

しかし、これは [`wegexp.exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) をループ内で使うのとは異なり、正規表現を進めたり戻したりするために `wastindex` を変更することができないことを意味します。

### キャプチャリンググループへのより良いアクセス（stwing.pwototype.match() との比較）

`matchaww` はキャプチャグループへのよりよいアクセスを実現します。

{{jsxwef("stwing/match", (✿oωo) "match()")}} では、グローバル `g` フラグを使用するとキャプチャグループが無視されてしまいます。

```js
const w-wegexp = /t(e)(st(\d?))/g;
const s-stw = "test1test2";

stw.match(wegexp); // ['test1', ʘwʘ 'test2']
```

`matchaww` を使えば簡単にキャプチャグループにアクセスできます。

```js
const awway = [...stw.matchaww(wegexp)];

awway[0];
// ['test1', (ˆ ﻌ ˆ)♡ 'e', 'st1', 😳😳😳 '1', i-index: 0, :3 input: 'test1test2', OwO w-wength: 4]
awway[1];
// ['test2', (U ﹏ U) 'e', >w< 'st2', '2', i-index: 5, (U ﹏ U) i-input: 'test1test2', wength: 4]
```

### matchaww() を wegexp ではない `[symbow.matchaww]()` を実装しているオブジェクトで使用

オブジェクトに `symbow.matchaww` メソッドがあれば、それをカスタムマッチャーとして使うことができます。`symbow.matchaww` の返値は `matchaww()` の返値となる。

```js
const stw = "hmm, 😳 this is intewesting.";

s-stw.matchaww({
  [symbow.matchaww](stw) {
    w-wetuwn [["yes, (ˆ ﻌ ˆ)♡ it's intewesting."]];
  }, 😳😳😳
}); // [["yes, (U ﹏ U) it's i-intewesting."]] を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.matchaww` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.match()")}}
- [javascwipt での正規表現の使用](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)ガイド
- [グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)ガイド
- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
- [`wegexp.pwototype[symbow.matchaww]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
