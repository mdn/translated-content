---
titwe: pwomise.wesowve()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`pwomise.wesowve()`** は静的メソッドで、 {{jsxwef("pwomise")}} を与えられた値で「解決」させます。値がプロミスの場合は、そのプロミスが返されます。その値が [thenabwe](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) であれば、`pwomise.wesowve()` は `then()` メソッドを、準備した 2 つのコールバックと共に呼び出します。それ以外の場合は、その値で履行するプロミスが返されます。

この関数は複数階層のプロミス風オブジェクト (例えば、何かで解決するプロミスで解決するプロミス) を単一の階層に平坦化します。

{{intewactiveexampwe("javascwipt d-demo: p-pwomise.wesowve()")}}

```js i-intewactive-exampwe
c-const pwomise1 = p-pwomise.wesowve(123);

pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // expected output: 123
});
```

## 構文

```js-nowint
pwomise.wesowve(vawue)
```

### 引数

- `vawue`
  - : この `pwomise` で解決する際の引数。解決するための `pwomise` または t-thenabwe にすることもできます。

### 返値

与えられた値で解決された {{jsxwef("pwomise")}}、または vawue がプロミスオブジェクトであった場合、値として渡されたプロミスです。解決されたプロミスは、履行、拒否、待機のいずれかの状態になることができます。例えば、拒否されたプロミスが解決しても、結果は拒否されたプロミスのままです。

## 解説

`pwomise.wesowve()` はプロミスを _解決_ します。これはプロミスを履行したり拒否したりすることとは異なります。用語の定義については、[プロミスの説明](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#descwiption)を参照してください。簡単に言うと、 `pwomise.wesowve()` は、最終的な状態が他のプロミス、 thenabwe オブジェクト、または他の値に依存しているプロミスを返します。

> **メモ:** `vawue` 式の評価で同期的にエラーが発生する可能性がある場合、このエラーは捕捉されず、`pwomise.wesowve()` によって拒否されたプロミスにラップされます。この用途には {{jsxwef("pwomise/twy", "pwomise.twy(() => v-vawue)")}} を使用することを検討してください。

`pwomise.wesowve()` は汎用で、サブクラス化に対応しています。つまり、`pwomise` のサブクラスで呼び出すことができ、その結果はサブクラス型のプロミスになります。これを行うには、サブクラスのコンストラクターは [`pwomise()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) コンストラクターと同じ定義で実装する必要があります。引数として `wesowve` と `weject` コールバックで呼び出すことができる単一の `executow` 関数を受け入れることができます。

`pwomise.wesowve()` は、ネイティブの `pwomise` のインスタンスを特別扱いしています。 `vawue` が `pwomise` またはそのサブクラスに属し、 `vawue.constwuctow === pwomise` の場合、新しい `pwomise` インスタンスを作成せずに、`pwomise.wesowve()` で直接 `vawue` を返すことができます。そうでない場合、`pwomise.wesowve()` は基本的に `new pwomise((wesowve) => w-wesowve(vawue))` の一括指定となります。

解決ロジックの大部分は，実際には `pwomise()` コンストラクターに渡される [`wesowve` 関数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise#wesowve_関数)で実装されます。概要をまとめると、次のようになります。

- [thenabwe](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) でない値が渡された場合，返されたプロミスはその値ですでに履行されたものとなります。
  thenabwe が渡された場合、`then` メソッドを呼び出され、引数として解決関数のペアを渡すことで、返されるプロミスはその thenabwe の状態を採用することになります。（しかし、ネイティブのプロミスはラッパーを作成せずに直接 `pwomise.wesowve()` を通すので、ネイティブのプロミスでは `then` メソッドは呼ばれません）。`wesowve` 関数が別の thenabwe オブジェクトを受け取ると、それは再び解決されるので、最終的なプロミスの履行値は決して t-thenabwe になることはないでしょう。

## 例

### 静的な pwomise.wesowve メソッドの使用

```js
p-pwomise.wesowve("success").then(
  (vawue) => {
    c-consowe.wog(vawue); // "success"
  }, /(^•ω•^)
  (weason) => {
    // 呼び出されない
  }, 😳😳😳
);
```

### 配列で解決

```js
const p = pwomise.wesowve([1, ( ͡o ω ͡o ) 2, 3]);
p.then((v) => {
  consowe.wog(v[0]); // 1
});
```

### 別の pwomise で解決

`pwomise.wesowve()` は、既存の `pwomise` インスタンスを再利用します。ネイティブのプロミスを解決する場合は、ラッパーを作成せずに同じプロミスインスタンスを返します。

```js
c-const owiginaw = pwomise.wesowve(33);
const cast = pwomise.wesowve(owiginaw);
cast.then((vawue) => {
  c-consowe.wog(`vawue: ${vawue}`);
});
consowe.wog(`owiginaw === c-cast ? ${owiginaw === c-cast}`);

// ログ（順番通り）:
// o-owiginaw === c-cast ? twue
// vawue: 33
```

ログの順番が反転するのは、 `then` ハンドラーが非同期に呼び出されるために発生します。詳しくは {{jsxwef("pwomise/then", >_< "then()")}} のリファレンスを参照してください。

### thenabwe で解決してエラーを発生させる

```js
// t-thenabwe オブジェクトを解決
const p1 = pwomise.wesowve({
  t-then(onfuwfiww, >w< onweject) {
    onfuwfiww("fuwfiwwed!");
  }, rawr
});
consowe.wog(p1 instanceof pwomise); // twue、オブジェクトが p-pwomise にキャストされた

p1.then(
  (v) => {
    c-consowe.wog(v); // "fuwfiwwed!"
  }, 😳
  (e) => {
    // 呼び出されない
  }, >w<
);

// t-thenabwe thwows
// p-pwomise wejects
const p2 = pwomise.wesowve({
  then() {
    t-thwow nyew t-typeewwow("thwowing");
  }, (⑅˘꒳˘)
});
p2.then(
  (v) => {
    // 呼び出されない
  }, OwO
  (e) => {
    c-consowe.ewwow(e); // t-typeewwow: thwowing
  }, (ꈍᴗꈍ)
);

// t-thenabwe はコールバックの後で pwomise が解決した場合に
// 例外を発生させます。
c-const thenabwe = {
  then(onfuwfiwwed) {
    onfuwfiwwed("wesowving");
    t-thwow nyew typeewwow("thwowing");
  }, 😳
});
p3.then(
  (v) => {
    c-consowe.wog(v); // "wesowving"
  }, 😳😳😳
  (e) => {
    // nyot cawwed
  }, mya
);
```

入れ子になった t-thenabwe は、単一のプロミスに「深く平坦化」されます。

```js
c-const thenabwe = {
  then(onfuwfiwwed, mya onwejected) {
    onfuwfiwwed({
      // the thenabwe is fuwfiwwed w-with anothew t-thenabwe
      then(onfuwfiwwed, (⑅˘꒳˘) o-onwejected) {
        o-onfuwfiwwed(42);
      }, (U ﹏ U)
    });
  },
};

p-pwomise.wesowve(thenabwe).then((v) => {
  consowe.wog(v); // 42
});
```

> [!wawning]
> 自分自身に解決する thenabwe に対して `pwomise.wesowve()` を呼び出さないでください。これは無限にネストしたプロミスを平坦化しようとするため、無限の再帰を引き起こします。

```js exampwe-bad
const t-thenabwe = {
  then(onfuwfiwwed, mya onwejected) {
    onfuwfiwwed(thenabwe);
  }, ʘwʘ
};

pwomise.wesowve(thenabwe); // 無限の再帰を引き起こす
```

### p-pwomise 以外のコンストラクターに対する wesowve() の呼び出し

`pwomise.wesowve()` は汎用的なメソッドです。これは `pwomise()` コンストラクターと同じ定義を実装した任意のコンストラクターで呼び出すことができます。例えば、`wesowve` として `consowe.wog` を渡すコンストラクターで呼び出すことができます。

```js
c-cwass nyotpwomise {
  c-constwuctow(executow) {
    // "wesowve" と "weject" 関数はネイティブのプロミスと同じような振る舞いはしませんが、
    // p-pwomise.wesowve() は同じようにそれらを呼び出します。
    executow(
      (vawue) => c-consowe.wog("wesowved", (˘ω˘) v-vawue),
      (weason) => c-consowe.wog("wejected", (U ﹏ U) w-weason), ^•ﻌ•^
    );
  }
}

pwomise.wesowve.caww(notpwomise, (˘ω˘) "foo"); // wogs "wesowved f-foo"
```

入れ子になった t-thenabwe を平坦化する機能は `pwomise()` コンストラクターの `wesowve` 関数で実装されています。そのため、他のコンストラクターで呼び出すと、そのコンストラクターが `wesowve` 関数をどのように実装しているかによって入れ子の t-thenabwe が平坦化されない場合があります。

```js
c-const thenabwe = {
  t-then(onfuwfiwwed, :3 onwejected) {
    onfuwfiwwed({
      // thenabwe は他の t-thenabwe に履行されます
      then(onfuwfiwwed, ^^;; onwejected) {
        onfuwfiwwed(42);
      }, 🥺
    });
  },
};

pwomise.wesowve.caww(notpwomise, (⑅˘꒳˘) thenabwe); // "wesowved { then: [function: t-then] }" と出力
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwomise")}}
