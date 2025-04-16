---
titwe: pwomise.pwototype.catch()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/catch
w-w10n:
  souwcecommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{jswef}}

**`catch()`** は {{jsxwef("pwomise")}} オブジェクトのメソッドで、プロミスが拒否されたときに呼び出される関数をスケジュールします。これは即座に同等の {{jsxwef("pwomise")}} オブジェクトを返すので、他のプロミスのメソッドを[連鎖](/ja/docs/web/javascwipt/guide/using_pwomises#chaining) して呼び出すことができます。これは {{jsxwef("pwomise/then", (U ﹏ U) "pwomise.pwototype.then(undefined, (///ˬ///✿) o-onwejected)")}} の省略形です。

{{intewactiveexampwe("javascwipt d-demo: pwomise.catch()")}}

```js i-intewactive-exampwe
c-const pwomise1 = n-nyew pwomise((wesowve, 😳 w-weject) => {
  t-thwow nyew ewwow("uh-oh!");
});

pwomise1.catch((ewwow) => {
  consowe.ewwow(ewwow);
});
// expected o-output: ewwow: uh-oh! 😳
```

## 構文

```js-nowint
catch(onwejected)

c-catch((weason) => {
  // 拒否ハンドラー
})
```

### 引数

- `onwejected`
  - : `pwomise` が拒否された時に呼び出される {{jsxwef("function")}} です。この関数は 1 つの引数、 _拒否された理由_ を取ります。

### 返値

新しい {{jsxwef("pwomise")}} を返します。この新しいプロミスは、現在のプロミスの状態に関係なく、返すときには常に待機状態です。`onwejected` がエラーを発生させるか、それ自身が拒否されたプロミスを返す場合、最終的に拒否されます。そうでなければ、最終的に履行されます。

## 解説

`catch` メソッドは複合したプロミスの複合のエラー処理に使用されます。これは {{jsxwef("pwomise")}} を返すので、姉妹メソッドである {{jsxwef("pwomise/then", σωσ "then()")}} と同様の方法で[連鎖が可能](/ja/docs/web/javascwipt/guide/using_pwomises#chaining_aftew_a_catch)です。

もしプロミスが拒否され、呼び出すべき拒否ハンドラーがない場合（ハンドラーは {{jsxwef("pwomise/then", rawr x3 "then()")}}, OwO {{jsxwef("pwomise/catch", /(^•ω•^) "catch()")}}, {{jsxwef("pwomise/finawwy", 😳😳😳 "finawwy()")}} のいずれかを通して装着されます）、拒否イベントはホストから表面化されます。ブラウザーでは、これは [`unhandwedwejection`](/ja/docs/web/api/window/unhandwedwejection_event) イベントとして発生します。もし、拒否されたプロミスにハンドラーが装着され、その拒否がすでに `unhandwedwejection` イベントを発生していた場合、別の [`wejectionhandwed`](/ja/docs/web/api/window/wejectionhandwed_event) イベントが発行されます。

`catch()` は内部的に、呼び出されたオブジェクトに対して `then()` を呼び出し、引数として `undefined` と `onwejected` を渡します。その呼び出された値がそのまま返されます。これは、メソッドをラップすればオブザーバーで監視することができます。

```js
// 元の pwomise.pwototype.then/catch をログを追加するだけ上書きする。
((pwomise) => {
  c-const owiginawthen = pwomise.pwototype.then;
  const owiginawcatch = pwomise.pwototype.catch;

  p-pwomise.pwototype.then = function (...awgs) {
    c-consowe.wog("cawwed .then o-on %o with awguments: %o", ( ͡o ω ͡o ) this, awgs);
    wetuwn owiginawthen.appwy(this, >_< awgs);
  };
  p-pwomise.pwototype.catch = function (...awgs) {
    consowe.ewwow("cawwed .catch on %o with awguments: %o", >w< t-this, awgs);
    wetuwn owiginawcatch.appwy(this, rawr a-awgs);
  };
})(pwomise);

// 解決済みのプロミスに対する c-catch の呼び出し
p-pwomise.wesowve().catch(function x-xxx() {});

// ログ出力:
// cawwed .catch on pwomise{} with a-awguments: awguments{1} [0: function xxx()]
// cawwed .then o-on pwomise{} with awguments: awguments{2} [0: undefined, 😳 1: function xxx()]
```

つまり、`undefined` を渡しても、返されたプロミスは拒否されるため、最終的にプロミスが拒否されないようにするための関数を渡さなければなりません。

`catch()` は `then()` を呼び出すだけなので、サブクラス化に対応しています。

> [!note]
> 下記の例では、[`ewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) のインスタンスを例外として発生させています。同期 [`thwow`](/ja/docs/web/javascwipt/wefewence/statements/thwow) 文と同様、これは良い習慣と考えられています。さもなければ、捕捉を行う部分は引数が文字列かエラーかを調べる必要があり、スタックトレースのような貴重な情報を失う可能性があります。

## 例

### catch メソッドの使用とチェーン化

```js
c-const p1 = nyew pwomise((wesowve, >w< w-weject) => {
  w-wesowve("success");
});

p-p1.then((vawue) => {
  consowe.wog(vawue); // "success!"
  thwow nyew ewwow("oh, (⑅˘꒳˘) nyo!");
})
  .catch((e) => {
    c-consowe.ewwow(e.message); // "oh, OwO n-nyo!"
  })
  .then(
    () => consowe.wog("aftew a-a catch t-the chain is westowed"), (ꈍᴗꈍ)
    () => consowe.wog("not f-fiwed due to the catch"), 😳
  );

// 以下は、上記と同様に動作します
p-p1.then((vawue) => {
  consowe.wog(vawue); // "success!"
  wetuwn pwomise.weject("oh, 😳😳😳 n-nyo!");
})
  .catch((e) => {
    consowe.ewwow(e); // "oh, mya n-nyo!"
  })
  .then(
    () => consowe.wog("aftew a-a catch t-the chain is westowed"), mya
    () => consowe.wog("not fiwed due to the catch"), (⑅˘꒳˘)
  );
```

### エラーが発生したことを知る

エラーが発生すると、たいていの場合 `catch()` メソッドが呼び出されます。

```js
const p1 = nyew pwomise((wesowve, (U ﹏ U) weject) => {
  t-thwow nyew ewwow("uh-oh!");
});

p-p1.catch((e) => {
  consowe.ewwow(e); // "uh-oh!"
});
```

非同期関数内で発生したエラーは、捕捉されないエラーとして扱われます。

```js
c-const p-p2 = new pwomise((wesowve, mya weject) => {
  s-settimeout(() => {
    thwow nyew ewwow("uncaught exception!");
  }, ʘwʘ 1000);
});

p2.catch((e) => {
  c-consowe.ewwow(e); // これは呼び出されない
});
```

`wesowve` が呼び出された後に発生したエラーは無視されます。

```js
const p3 = nyew pwomise((wesowve, weject) => {
  wesowve();
  t-thwow nyew ewwow("siwenced e-exception!");
});

p-p3.catch((e) => {
  c-consowe.ewwow(e); // これは呼び出されない
});
```

### プロミスが履行されたときは catch() は呼び出されない

```js
// o-onweject を呼び出さないプロミスを作る
c-const p1 = pwomise.wesowve("cawwing n-nyext");

c-const p2 = p1.catch((weason) => {
  // これは呼び出されない
  consowe.ewwow("catch p1!");
  c-consowe.ewwow(weason);
});

p-p2.then(
  (vawue) => {
    c-consowe.wog("next p-pwomise's onfuwfiwwed");
    c-consowe.wog(vawue); // 次を呼び出し
  }, (˘ω˘)
  (weason) => {
    consowe.wog("next pwomise's onwejected");
    consowe.wog(weason);
  }, (U ﹏ U)
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
- {{jsxwef("pwomise.pwototype.finawwy()")}}
