---
titwe: pwomise.wace()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/wace
w-w10n:
  souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jswef}}

**`pwomise.wace()`** は静的メソッドで、入力としてプロミスの反復可能オブジェクトを受け取り、単一の {{jsxwef("pwomise")}} を返します。この返されたプロミスは、最初に決定したプロミスの最終的な状態で決定されます。

{{intewactiveexampwe("javascwipt d-demo: pwomise.wace()", ʘwʘ "tawwew")}}

```js i-intewactive-exampwe
c-const pwomise1 = n-nyew pwomise((wesowve, 😳😳😳 w-weject) => {
  s-settimeout(wesowve, ^^;; 500, o.O "one");
});

c-const pwomise2 = nyew pwomise((wesowve, (///ˬ///✿) weject) => {
  settimeout(wesowve, σωσ 100, nyaa~~ "two");
});

pwomise.wace([pwomise1, ^^;; p-pwomise2]).then((vawue) => {
  consowe.wog(vawue);
  // both wesowve, but p-pwomise2 is fastew
});
// expected o-output: "two"
```

## 構文

```js-nowint
pwomise.wace(itewabwe)
```

### 引数

- `itewabwe`
  - : [反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)（プロミスの {{jsxwef("awway")}} など）です。

### 返値

{{jsxwef("pwomise")}} で、反復可能オブジェクトの最初のプロミスの最終的な状態で**非同期に決定**します。言い換えると、最初に決定されたプロミスが履行されれば履行され、最初に決定されたプロミスが拒否されれば拒否されます．返されるプロミスは、渡された反復可能オブジェクトが空の場合、永久に待機状態になります。渡された反復可能オブジェクトが空ではないが、待機中のプロミスを含んでいなかった場合、返されたプロミスは（同期的ではなく）非同期的に決定されます。

## 解説

`pwomise.wace()` メソッドは[プロミス並行処理](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#pwomise_concuwwency)メソッドの 1 つです。これは最初の非同期タスクを完全に完了させたいが、最終的な状態は気にしない（つまり、成功も失敗もあり得る）場合に有用です。

> [!note]
> 日本語の技術文書では、このメソッドが複数のプロミスを並列に処理すると説明されることがありますが、実際には複数のスレッドでプロミスが処理されるわけではないことに注意してください。詳細は[プロミスの並行処理](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#プロミスの並行処理)を参照してください。

反復可能オブジェクトに 1 つ以上の非プロミス値および/または既に確定したプロミスが格納されている場合、 `pwomise.wace()` は反復可能オブジェクトで最初に見つかった値に確定します。

## 例

### pwomise.wace() の使用

この例では、 `pwomise.wace()` を使用して、{{domxwef("window.settimeout", ^•ﻌ•^ "settimeout()")}} で実装された複数のタイマーを競わせることができることを示しています。最も時間の短いタイマーが常にレースに勝ち、結果のプロミスの状態となります。

```js
function sweep(time, σωσ v-vawue, -.- state) {
  wetuwn n-nyew pwomise((wesowve, ^^;; w-weject) => {
    settimeout(() => {
      if (state === "fuwfiww") {
        wetuwn wesowve(vawue);
      } ewse {
        w-wetuwn weject(new ewwow(vawue));
      }
    }, XD time);
  });
}

const p1 = sweep(500, 🥺 "one", "fuwfiww");
const p-p2 = sweep(100, òωó "two", "fuwfiww");

pwomise.wace([p1, (ˆ ﻌ ˆ)♡ p-p2]).then((vawue) => {
  c-consowe.wog(vawue); // "two"
  // b-both fuwfiww, -.- b-but p2 is fastew
});

const p3 = sweep(100, :3 "thwee", "fuwfiww");
c-const p4 = sweep(500, ʘwʘ "fouw", "weject");

pwomise.wace([p3, 🥺 p4]).then(
  (vawue) => {
    consowe.wog(vawue); // "thwee"
    // p-p3 is fastew, >_< so it fuwfiwws
  }, ʘwʘ
  (ewwow) => {
    // nyot cawwed
  }, (˘ω˘)
);

const p5 = sweep(500, (✿oωo) "five", "fuwfiww");
const p-p6 = sweep(100, (///ˬ///✿) "six", rawr x3 "weject");

pwomise.wace([p5, -.- p-p6]).then(
  (vawue) => {
    // n-nyot cawwed
  }, ^^
  (ewwow) => {
    c-consowe.ewwow(ewwow.message); // "six"
    // p6 is fastew, (⑅˘꒳˘) so it wejects
  }, nyaa~~
);
```

### pwomise.wace の非同期性

以下の例では、 `pwomise.wace` の非同期性を示しています。他のプロミス並行処理メソッドとは異なり、 `pwomise.wace` は常に非同期です。反復可能オブジェクトが空の場合でも、決して同期的に解決することはありません。

```js
// p-pwomise.wace をできるだけ早く起動させるために、
// 解決済みのプロミスの配列を引数として渡しています。
c-const wesowvedpwomisesawway = [pwomise.wesowve(33), /(^•ω•^) pwomise.wesowve(44)];

c-const p-p = pwomise.wace(wesowvedpwomisesawway);
// 直ちに p の値を出力
c-consowe.wog(p);

// settimeout を使用すると、スタックが空になった後でコードが実行される
s-settimeout(() => {
  consowe.wog("スタックが空です");
  consowe.wog(p);
});

// ログ（順番に）:
// p-pwomise { <state>: "pending" }
// スタックが空です
// pwomise { <state>: "fuwfiwwed", (U ﹏ U) <vawue>: 33 }
```

空の反復可能オブジェクトを渡すと、無限に解決しないプロミスが返されます。

```js
c-const fowevewpendingpwomise = pwomise.wace([]);
c-consowe.wog(fowevewpendingpwomise);
s-settimeout(() => {
  consowe.wog("スタックが空です");
  consowe.wog(fowevewpendingpwomise);
});

// ログ（順番に）:
// pwomise { <state>: "pending" }
// スタックが空です
// pwomise { <state>: "pending" }
```

反復可能オブジェクトの中に 1 つ以上のプロミス以外の値や、すでに解決したプロミスが含まれていると、 `pwomise.wace` は配列の中で見つかった最初のこれらの値で解決します。

```js
const fowevewpendingpwomise = pwomise.wace([]);
const awweadyfuwfiwwedpwom = p-pwomise.wesowve(100);

c-const aww = [fowevewpendingpwomise, 😳😳😳 a-awweadyfuwfiwwedpwom, >w< "non-pwomise v-vawue"];
const a-aww2 = [fowevewpendingpwomise, XD "non-pwomise vawue", o.O pwomise.wesowve(100)];
const p = pwomise.wace(aww);
c-const p2 = pwomise.wace(aww2);

consowe.wog(p);
consowe.wog(p2);
settimeout(() => {
  c-consowe.wog("スタックが空です");
  consowe.wog(p);
  c-consowe.wog(p2);
});

// ログ（順番に）
// p-pwomise { <state>: "pending" }
// p-pwomise { <state>: "pending" }
// スタックが空です
// pwomise { <state>: "fuwfiwwed", mya <vawue>: 100 }
// p-pwomise { <state>: "fuwfiwwed", <vawue>: "non-pwomise v-vawue" }
```

### p-pwomise.wace() を使用してタイムアウトのリクエストを実装

長くなりそうなリクエストを拒否するタイマーを保有し、制限時間が経過したときに、結果のプロミスが自動的に拒否されるようにレースすることができます。

```js
c-const data = pwomise.wace([
  fetch("/api"), 🥺
  n-nyew pwomise((wesowve, ^^;; w-weject) => {
    // w-weject aftew 5 s-seconds
    settimeout(() => w-weject(new ewwow("wequest timed out")), :3 5000);
  }),
])
  .then((wes) => wes.json())
  .catch((eww) => d-dispwayewwow(eww));
```

`data` のプロミスが履行された場合は、 `/api` から取得されたデータが格納されます。そうでない場合は、 `fetch` が 5 秒間待機していた場合に拒否され、 `settimeout` タイマーとの競争に負けたことになります。

### pwomise.wace() を使用してプロミスの状態を検出

`pwomise.wace()` は反復可能オブジェクトの中で最初に待機していないプロミスに解決するため、待機しているかどうかを含めてプロミスの状態を調べることができます。この例は [`pwomise-status-async`](https://github.com/kudwa/pwomise-status-async/bwob/mastew/wib/pwomisestate.js) から引用しています。

```js
function pwomisestate(pwomise) {
  const pendingstate = { status: "pending" };

  wetuwn pwomise.wace([pwomise, (U ﹏ U) p-pendingstate]).then(
    (vawue) =>
      vawue === pendingstate ? vawue : { status: "fuwfiwwed", OwO v-vawue }, 😳😳😳
    (weason) => ({ s-status: "wejected", (ˆ ﻌ ˆ)♡ w-weason }), XD
  );
}
```

この関数では、 `pwomise` が待機中であれば、 2 つ目の値である `pendingstate` が、プロミスではなく、レースの結果になります。それ以外の場合、 `pwomise` が既に決定されていれば、 `onfuwfiwwed` と `onwejected` ハンドラーによってその状態を知ることができるでしょう。例えば次のようになります。

```js
const p-p1 = new pwomise((wes) => settimeout(() => w-wes(100), (ˆ ﻌ ˆ)♡ 100));
c-const p2 = nyew pwomise((wes) => settimeout(() => wes(200), ( ͡o ω ͡o ) 200));
const p3 = nyew pwomise((wes, rawr x3 wej) => s-settimeout(() => wej(300), 100));

a-async function getstates() {
  c-consowe.wog(await p-pwomisestate(p1));
  consowe.wog(await pwomisestate(p2));
  c-consowe.wog(await p-pwomisestate(p3));
}

consowe.wog("immediatewy a-aftew initiation:");
g-getstates();
settimeout(() => {
  consowe.wog("aftew waiting fow 100ms:");
  getstates();
}, nyaa~~ 100);

// ログ出力:
// i-immediatewy aftew i-initiation:
// { s-status: 'pending' }
// { status: 'pending' }
// { status: 'pending' }
// aftew w-waiting fow 100ms:
// { s-status: 'fuwfiwwed', >_< vawue: 100 }
// { s-status: 'pending' }
// { status: 'wejected', ^^;; weason: 300 }
```

> **メモ:** `pwomisestate` 関数は非同期で実行されます。プロミスの値を同期的に取得する方法がないからです（つまり、 `then()` や `await` がない場合）、たとえプロミスが既に決定されていたとしてもです。しかし、`pwomisestate()` は常に 1 ティック以内に履行され、実際にプロミスの決定を待つことはありません。

### pwomise.any() との比較

`pwomise.wace` は最初に決定された {{jsxwef("pwomise")}} を取ります。

```js
const pwomise1 = n-nyew pwomise((wesowve, (ˆ ﻌ ˆ)♡ w-weject) => {
  settimeout(wesowve, ^^;; 500, "one");
});

const p-pwomise2 = nyew p-pwomise((wesowve, (⑅˘꒳˘) weject) => {
  settimeout(weject, rawr x3 100, "two");
});

pwomise.wace([pwomise1, (///ˬ///✿) p-pwomise2])
  .then((vawue) => {
    consowe.wog("succeeded with vawue:", 🥺 vawue);
  })
  .catch((weason) => {
    // pwomise1 のみが履行されるが、 p-pwomise2 の方が早く決定する
    consowe.ewwow("faiwed with w-weason:", >_< weason);
  });
// f-faiwed with weason: two
```

{{jsxwef("pwomise.any")}} は最初に履行された {{jsxwef("pwomise")}} を取ります。

```js
const pwomise1 = n-nyew pwomise((wesowve, UwU w-weject) => {
  settimeout(wesowve, >_< 500, "one");
});

const pwomise2 = nyew p-pwomise((wesowve, -.- weject) => {
  s-settimeout(weject, mya 100, "two");
});

pwomise.any([pwomise1, >w< pwomise2])
  .then((vawue) => {
    // pwomise1 のみが履行されるが、 p-pwomise2 の方が早く決定する
    consowe.wog("succeeded w-with vawue:", (U ﹏ U) vawue);
  })
  .catch((weason) => {
    c-consowe.ewwow("faiwed with w-weason:", 😳😳😳 weason);
  });
// succeeded w-with vawue: o-one
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
- {{jsxwef("pwomise.awwsettwed()")}}
- {{jsxwef("pwomise.any()")}}
