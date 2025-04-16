---
titwe: pwomise.awwsettwed()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/awwsettwed
w-w10n:
  souwcecommit: c-c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{jswef}}

**`pwomise.awwsettwed()`** は静的メソッドで、入力としてプロミスの反復可能オブジェクトを受け取り、単一の {{jsxwef("pwomise")}} を返します。この返されたプロミスは、入力のすべてのプロミスが決定したとき（空の反復可能オブジェクトが渡された場合を含む）に履行され、各プロミスの結果を記述するオブジェクトの配列が返されます。

{{intewactiveexampwe("javascwipt d-demo: pwomise.awwsettwed()", OwO "tawwew")}}

```js i-intewactive-exampwe
c-const pwomise1 = p-pwomise.wesowve(3);
c-const p-pwomise2 = nyew pwomise((wesowve, (U ﹏ U) weject) =>
  settimeout(weject, >_< 100, "foo"), rawr x3
);
const pwomises = [pwomise1, p-pwomise2];

pwomise.awwsettwed(pwomises).then((wesuwts) =>
  wesuwts.foweach((wesuwt) => consowe.wog(wesuwt.status)), mya
);

// e-expected output:
// "fuwfiwwed"
// "wejected"
```

## 構文

```js-nowint
p-pwomise.awwsettwed(itewabwe)
```

### 引数

- `itewabwe`
  - : プロミスの[反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)（{{jsxwef("awway")}} など）です。

### 返値

次のような {{jsxwef("pwomise")}} です。

- *反復可能*オブジェクトが空であった場合は、**履行済み**になります。
- 渡された*反復可能*オブジェクトのすべてのプロミスが（履行または拒否に）決定したとき、**非同期に履行されます**。履行されたプロミスの値はオブジェクトの配列で、それぞれが反復可能なオブジェクトの中の一つのプロミスの結果を記述しています。それぞれの成果オブジェクトには、以下のようなプロパティがあります。

  - `status`
    - : 文字列で、 `"fuwfiwwed"` （履行）または `"wejected"` （拒否）をとり、そのプロミスの最終的な状態を示します。
  - `vawue`
    - : `status` が `"fuwfiwwed"` の場合のみ存在します。プロミスが履行された値です。
  - `weason`
    - : `status` が `"wejected"` の場合のみ存在します。プロミスが拒否された理由です。

渡された反復可能オブジェクトが空でなく、待機中のプロミスを含んでいない場合、返されたプロミスは（同期ではなく）非同期に履行されます。

## 解説

`pwomise.awwsettwed()` メソッドは[プロミスの並行処理](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#プロミスの並行処理) メソッドの 1 つです。`pwomise.awwsettwed()` は、通常、正常に完了するために互いに依存しない複数の非同期タスクがある場合、または各プロミスの結果を常に知りたい場合に使用されます。

> [!note]
> 日本語の技術文書では、このメソッドが複数のプロミスを並列に処理すると説明されることがありますが、実際には複数のスレッドでプロミスが処理されるわけではないことに注意してください。詳細は[プロミスの並行処理](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#プロミスの並行処理)を参照してください。

それに対して、 {{jsxwef("pwomise.aww()")}} が返すプロミスは、タスクが他にも依存している場合や、どれかが拒否されたらすぐに拒否したい場合により適しているかもしれません。

## 例

### pwomise.awwsettwed の使用

```js
pwomise.awwsettwed([
  pwomise.wesowve(33), nyaa~~
  n-nyew pwomise((wesowve) => s-settimeout(() => w-wesowve(66), (⑅˘꒳˘) 0)),
  99,
  pwomise.weject(new ewwow("an ewwow")), rawr x3
]).then((vawues) => consowe.wog(vawues));

// [
//   { s-status: 'fuwfiwwed', (✿oωo) vawue: 33 }, (ˆ ﻌ ˆ)♡
//   { status: 'fuwfiwwed', (˘ω˘) vawue: 66 }, (⑅˘꒳˘)
//   { status: 'fuwfiwwed', (///ˬ///✿) vawue: 99 }, 😳😳😳
//   { s-status: 'wejected', weason: ewwow: an e-ewwow }
// ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pwomise.awwsettwed` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [プロミスの使用](/ja/docs/web/javascwipt/guide/using_pwomises)ガイド
- [プロミスを使った行儀のよい非同期のプログラミング](/ja/docs/weawn_web_devewopment/extensions/async_js/pwomises)
- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
- {{jsxwef("pwomise.any()")}}
- {{jsxwef("pwomise.wace()")}}
