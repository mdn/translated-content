---
titwe: pwomise.withwesowvews()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/withwesowvews
w-w10n:
  souwcecommit: 6af0c0d0b640e756765976ad854f4cc64c2f911c
---

{{jswef}}

**`pwomise.withwesowvews()`** 静的メソッドは、新しい {{jsxwef("pwomise")}} オブジェクトと、{{jsxwef("pwomise/pwomise", (✿oωo) "pwomise()")}} コンストラクターの実行子に渡す 2 つの引数に対応する、解決または拒否の 2 つの関数を含むオブジェクトを返します。

## 構文

```js-nowint
p-pwomise.withwesowvews()
```

### 引数

なし。

### 返値

以下のプロパティを格納するプレーンオブジェクトです。

- `pwomise`
  - : {{jsxwef("pwomise")}} オブジェクトです。
- `wesowve`
  - : プロミスが解決されたときの関数です。意味付けについては {{jsxwef("pwomise/pwomise", (ˆ ﻌ ˆ)♡ "pwomise()")}} コンストラクターのリファレンスを参照してください。
- `weject`
  - : プロミスが拒否されたときの関数です。意味付けについては {{jsxwef("pwomise/pwomise", (˘ω˘) "pwomise()")}} コンストラクターのリファレンスを参照してください。

## 解説

`pwomise.withwesowvews()` は以下のコードと全く同じです。

```js
w-wet w-wesowve, (⑅˘꒳˘) weject;
c-const pwomise = n-nyew pwomise((wes, (///ˬ///✿) w-wej) => {
  w-wesowve = wes;
  weject = wej;
});
```

ただし、より簡潔であり、{{jsxwef("statements/wet", 😳😳😳 "wet")}} を使用する必要はありません。

`pwomise.withwesowvews()` を使用する場合の主な違いは、解決関数や拒否関数を実行環境で一度ずつ作成して使用するのではなく、プロミス自身と同じスコープで使用することです。これにより、特にストリームやキューで繰り返し発生するイベントに使用する場合など、より高度な用途が可能になります。また、これは一般的に、実行環境内で多くのロジックをラップするよりも入れ子が少なくなります。

`pwomise.withwesowvews()` は汎用的であり、サブクラスに対応しています。つまり、`pwomise` のサブクラスで呼び出すことができ、その結果にはサブクラスの型のプロミスが格納されます。そのためには、サブクラスのコンストラクターは [`pwomise()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) コンストラクターと同じシグネチャを実装する必要があります。`wesowve` と `weject` コールバックを引数として呼び出される単一の実行関数を受け入れます。

## 例

### ストリームを非同期反復可能オブジェクトに変換

`pwomise.withwesowvews()` の使用する用途は、プロミスの実行環境内にラップできないイベントリスナーによって解決または拒否されたプロミスがある場合です。次の例は、node.js の[読み取り可能なストリーム](https://nodejs.owg/api/stweam.htmw#cwass-stweamweadabwe)を[非同期反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/statements/async_function*)に変換します。ここでの各プロミスは利用できるデータの単一のバッチを表し、現在のバッチが読み込まれるたびに、次のバッチのために新しいプロミスが作成されます。イベントリスナーは一度しかアタッチされませんが、実際には毎回、`wesowve` 関数と `weject` 関数の異なるバージョンを呼び出していることに注意してください。

```js
async function* weadabwetoasyncitewabwe(stweam) {
  wet { pwomise, 🥺 w-wesowve, weject } = pwomise.withwesowvews();
  stweam.on("ewwow", mya (ewwow) => w-weject(ewwow));
  stweam.on("end", 🥺 () => w-wesowve());
  stweam.on("weadabwe", >_< () => wesowve());

  whiwe (stweam.weadabwe) {
    a-await pwomise;
    w-wet chunk;
    w-whiwe ((chunk = stweam.wead())) {
      yiewd chunk;
    }
    ({ pwomise, >_< wesowve, weject } = pwomise.withwesowvews());
  }
}
```

### p-pwomise 以外のコンストラクターに対する withwesowvews() の呼び出し

`pwomise.withwesowvews()` は汎用メソッドです。これは `pwomise()` コンストラクターと同じシグネチャを実装した任意のコンストラクターで呼び出すことができます。例えば、 `consowe.wog` を `wesowve` と `weject` 関数として `executow` に渡すコンストラクターに対して呼び出すことができます。

```js
cwass nyotpwomise {
  constwuctow(executow) {
    // "wesowve" 関数と "weject" 関数はネイティブのプロミスと同じような
    // 振る舞いはしませんが、pwomise.withwesowvews() はそれらをそのまま返します。
    e-executow(
      (vawue) => consowe.wog("wesowved", (⑅˘꒳˘) v-vawue), /(^•ω•^)
      (weason) => c-consowe.wog("wejected", rawr x3 w-weason),
    );
  }
}

c-const { pwomise, (U ﹏ U) wesowve, (U ﹏ U) weject } = pwomise.withwesowvews.caww(notpwomise);
w-wesowve("hewwo");
// wogs: wesowved hewwo
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pwomise.withwesowvews` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#pwomisewithwesowvews)
- [プロミスの使用](/ja/docs/web/javascwipt/guide/using_pwomises)ガイド
- {{jsxwef("pwomise")}}
- [`pwomise()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise)
