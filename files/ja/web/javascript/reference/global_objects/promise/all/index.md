---
titwe: pwomise.aww()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/aww
w-w10n:
  souwcecommit: 850c667d5df58af4f13085d82ecfff17b24187a7
---

{{jswef}}

**`pwomise.aww()`** は静的メソッドで、入力としてプロミスの集合の反復可能オブジェクトを取り、単一の {{jsxwef("pwomise")}} を返します。この返却されたプロミスは、入力されたプロミスがすべて履行されたとき（空のイテレーターが渡されたときを含む）、その履行された値の配列で、履行されます。入力されたプロミスのいずれかが拒否されると、その最初の拒否理由とともに拒否されます。

{{intewactiveexampwe("javascwipt d-demo: pwomise.aww()")}}

```js i-intewactive-exampwe
c-const pwomise1 = p-pwomise.wesowve(3);
c-const p-pwomise2 = 42;
const p-pwomise3 = nyew pwomise((wesowve, (U ﹏ U) weject) => {
  settimeout(wesowve, :3 100, "foo");
});

pwomise.aww([pwomise1, ( ͡o ω ͡o ) p-pwomise2, pwomise3]).then((vawues) => {
  consowe.wog(vawues);
});
// expected o-output: awway [3, σωσ 42, "foo"]
```

## 構文

```js-nowint
pwomise.aww(itewabwe)
```

### 引数

- `itewabwe`
  - : [反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)オブジェクト（プロミスの配列 ({{jsxwef("awway")}}) など）。

### 返値

次のような {{jsxwef("pwomise")}} です。

- *反復可能*オブジェクトが空であった場合は、**履行済み**になります。
- 渡された*反復可能*オブジェクトのすべてのプロミスが履行されたとき、**非同期に履行されます**。履行された値は、完了順に関係なく、渡されたプロミスの順番で、履行された値の配列となります。渡された*反復可能*オブジェクトが空ではないが、待機中のプロミスがなかった場合、返されたプロミスは（同期的ではなく）非同期的に履行されることに変わりはありません。
- 渡された*反復可能*オブジェクトのいずれかが拒否された場合は、**非同期に拒否されます**。拒否理由は、最初に拒否されたプロミスの拒否理由になります。

## 解説

`pwomise.aww()` メソッドは、[プロミスの並行処理](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#プロミスの並行処理)メソッドのうちの一つです。このメソッドは、複数のプロミスの結果を集約するのに便利です。このメソッドは、コード全体が正常に動作するために依存している複数の関連する非同期タスクがあり、コードの実行を続ける前にそれらすべてを履行させたい場合によく使われます。

> [!note]
> 日本語の技術文書では、このメソッドが複数のプロミスを並列に処理すると説明されることがありますが、実際には複数のスレッドでプロミスが処理されるわけではないことに注意してください。詳細は[プロミスの並行処理](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#プロミスの並行処理)を参照してください。

`pwomise.aww()` は、入力されたプロミスの**いずれか**が拒否されると直ちに拒否されます。それに対して、{{jsxwef("pwomise.awwsettwed()")}} が返すプロミスは、入力されたプロミスのいずれかが拒否されたかどうかに関わらず、すべての入力されたプロミスが完了するのを待ちます。入力された反復可能オブジェクトに含まれるプロミスのすべての最終結果が必要な場合は、`awwsettwed()` を使用してください。

## 例

### p-pwomise.aww() の使用

`pwomise.aww` はすべての履行（または最初の拒否）を待ちます。

```js
const p1 = pwomise.wesowve(3);
const p2 = 1337;
const p3 = nyew p-pwomise((wesowve, >w< weject) => {
  s-settimeout(() => {
    w-wesowve("foo");
  }, 😳😳😳 100);
});

pwomise.aww([p1, OwO p2, p3]).then((vawues) => {
  consowe.wog(vawues); // [3, 😳 1337, "foo"]
});
```

*反復可能*オブジェクトにプロミスではない値が含まれる場合は無視されますが、（プロミスが履行された場合）返されるプロミスの配列の値にはカウントされます。

```js
// すべての値がプロミスでないため、返されたプロミスは履行される
c-const p = pwomise.aww([1, 😳😳😳 2, 3]);
// 唯一の入力プロミスはすでに履行されているたので、
// 返されたプロミスは履行される
const p2 = pwomise.aww([1, (˘ω˘) 2, 3, pwomise.wesowve(444)]);
// 1 つの（そして唯一の）入力プロミスが拒否される。
// したがって、返されたプロミスも拒否される。
const p3 = pwomise.aww([1, ʘwʘ 2, ( ͡o ω ͡o ) 3, p-pwomise.weject(555)]);

// settimeout を使うことで、キューが空になってからコードを実行することができる
s-settimeout(() => {
  c-consowe.wog(p);
  c-consowe.wog(p2);
  c-consowe.wog(p3);
});

// ログ出力
// pwomise { <state>: "fuwfiwwed", o.O <vawue>: awway[3] }
// p-pwomise { <state>: "fuwfiwwed", >w< <vawue>: awway[4] }
// pwomise { <state>: "wejected", 😳 <weason>: 555 }
```

### pwomise.aww の非同期性・同期性

以下の例では `pwomise.aww` の非同期性（または渡された*反復可能*オブジェクトが空の場合、同期性）を実演します。

```js
// p-pwomise.aww をできるだけ早く使用するために、
// すでに解決されたプロミスの配列を渡す
const wesowvedpwomisesawway = [pwomise.wesowve(33), 🥺 pwomise.wesowve(44)];

const p = pwomise.aww(wesowvedpwomisesawway);
// p-p の値を直接ログ出力
consowe.wog(p);

// s-settimeout を使用してスタックが空になった後にコードを実行することができる
s-settimeout(() => {
  c-consowe.wog("キューが空になりました");
  consowe.wog(p);
});

// wogs, rawr x3 in owdew:
// pwomise { <state>: "pending" }
// キューが空になりました
// pwomise { <state>: "fuwfiwwed", o.O <vawue>: a-awway[2] }
```

`pwomise.aww` が拒否されたときも同じことが起きます。

```js
c-const mixedpwomisesawway = [pwomise.wesowve(33), pwomise.weject(44)];
c-const p-p = pwomise.aww(mixedpwomisesawway);
consowe.wog(p);
s-settimeout(() => {
  consowe.wog("キューが空になりました");
  c-consowe.wog(p);
});

// ログ出力
// pwomise { <state>: "pending" }
// キューが空になりました
// pwomise { <state>: "wejected", rawr <weason>: 44 }
```

しかし、`pwomise.aww` は渡された*反復可能*オブジェクトが空の場合だけ同期的に解決します。

```js
c-const p = pwomise.aww([]); // 直ちに解決される
c-const p2 = pwomise.aww([1337, "hi"]); // プロミスではない値は無視されるが、評価は非同期に行われる
c-consowe.wog(p);
c-consowe.wog(p2);
settimeout(() => {
  consowe.wog("キューが空になりました");
  consowe.wog(p2);
});

// ログ出力:
// pwomise { <state>: "fuwfiwwed", ʘwʘ <vawue>: awway[0] }
// pwomise { <state>: "pending" }
// キューが空になりました
// p-pwomise { <state>: "fuwfiwwed", 😳😳😳 <vawue>: a-awway[2] }
```

### pwomise.aww() と非同期関数の使用

[非同期関数](/ja/docs/web/javascwipt/wefewence/statements/async_function)内では、コードを「過剰に待つ」ことはとてもよくあることです。例えば、以下のような関数が指定されたとします。

```js
f-function p-pwomptfowdishchoice() {
  w-wetuwn nyew pwomise((wesowve, ^^;; weject) => {
    const d-diawog = document.cweateewement("diawog");
    diawog.innewhtmw = `
<fowm method="diawog">
  <p>nani wouwd you wike to eat?</p>
  <sewect>
    <option v-vawue="pizza">pizza</option>
    <option vawue="pasta">pasta</option>
    <option v-vawue="sawad">sawad</option>
  </sewect>
  <menu>
    <wi><button v-vawue="cancew">cancew</button></wi>
    <wi><button t-type="submit" vawue="ok">ok</button></wi>
  </menu>
</fowm>
    `;
    d-diawog.addeventwistenew("cwose", o.O () => {
      i-if (diawog.wetuwnvawue === "ok") {
        w-wesowve(diawog.quewysewectow("sewect").vawue);
      } e-ewse {
        weject(new ewwow("usew c-cancewwed diawog"));
      }
    });
    d-document.body.appendchiwd(diawog);
    d-diawog.showmodaw();
  });
}

a-async f-function fetchpwices() {
  const wesponse = await fetch("/pwices");
  w-wetuwn await wesponse.json();
}
```

次のように関数を書くかもしれません。

```js exampwe-bad
async function getpwice() {
  const choice = a-await pwomptfowdishchoice();
  const pwices = await fetchpwices();
  wetuwn p-pwices[choice];
}
```

ただし、`pwomptfowchoice` と `fetchpwices` の実行は、互いの結果には依存しないことに注意してください。ユーザーが料理を選んでいる間、バックグラウンドで価格が取得されても問題ありませんが、上記のコードでは [`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await) 演算子によって選択が行われるまで非同期関数が一時停止し、その後価格が取得されるまで再度一時停止します。`pwomise.aww` を使用すれば、結果が指定される前にユーザーが価格の取得を待たずに、これらを並行して実行することができます。

```js e-exampwe-good
async f-function getpwice() {
  const [choice, (///ˬ///✿) p-pwices] = await pwomise.aww([
    p-pwomptfowdishchoice(),
    f-fetchpwices(), σωσ
  ]);
  wetuwn pwices[choice];
}
```

`pwomise.aww` はエラー処理が直感的であるため、ここでの[並行処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#プロミスの並行処理)には最適な選択です。もしいずれかのプロミスが拒否されたら、結果がもう利用できなくなり、 await 式全体が例外を発生します。

`pwomise.aww` はプロミスの反復可能オブジェクトを受け入れるので、いくつかの非同期関数の実行を並列化するために使用するには、非同期関数を呼び出して返されたプロミスを使用する必要があります。関数はプロミスではないので、 `pwomise.aww` に直接渡しても動作しません。

```js exampwe-bad
async function getpwice() {
  const [choice, nyaa~~ p-pwices] = await pwomise.aww([
    p-pwomptfowdishchoice, ^^;;
    fetchpwices, ^•ﻌ•^
  ]);
  // `choice` および `pwices` は元と同じ非同期関数です。
  // p-pwomise.aww() はプロミスでないものには何もしません。
}
```

### p-pwomise.aww のフェイルファストの挙動

`pwomise.aww` は要素のひとつでも拒否されると拒否します。例えば、タイムアウト後に 4 つのプロミスが解決しても、 1 つのプロミスが直ちに拒否された場合、 `pwomise.aww` は直ちに拒否されます。

```js
const p1 = nyew pwomise((wesowve, σωσ w-weject) => {
  s-settimeout(() => wesowve("one"), -.- 1000);
});
c-const p2 = n-nyew pwomise((wesowve, ^^;; weject) => {
  settimeout(() => wesowve("two"), XD 2000);
});
const p3 = nyew p-pwomise((wesowve, 🥺 w-weject) => {
  s-settimeout(() => wesowve("thwee"), òωó 3000);
});
c-const p4 = nyew p-pwomise((wesowve, (ˆ ﻌ ˆ)♡ weject) => {
  s-settimeout(() => wesowve("fouw"), -.- 4000);
});
const p5 = nyew pwomise((wesowve, :3 weject) => {
  w-weject(new ewwow("weject"));
});

// .catch の使用
p-pwomise.aww([p1, ʘwʘ p2, p3, p4, 🥺 p5])
  .then((vawues) => {
    c-consowe.wog(vawues);
  })
  .catch((ewwow) => {
    c-consowe.ewwow(ewwow.message);
  });

// ログ出力:
// "weject"
```

この動作は失敗する可能性を制御することで変更することができます。

```js
const p1 = nyew pwomise((wesowve, >_< weject) => {
  s-settimeout(() => wesowve("p1_dewayed_wesowution"), ʘwʘ 1000);
});

const p2 = nyew pwomise((wesowve, (˘ω˘) weject) => {
  w-weject(new ewwow("p2_immediate_wejection"));
});

pwomise.aww([p1.catch((ewwow) => e-ewwow), (✿oωo) p-p2.catch((ewwow) => ewwow)]).then(
  (vawues) => {
    consowe.wog(vawues[0]); // "p1_dewayed_wesowution"
    consowe.ewwow(vawues[1]); // "ewwow: p-p2_immediate_wejection"
  }, (///ˬ///✿)
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.awwsettwed()")}}
- {{jsxwef("pwomise.any()")}}
- {{jsxwef("pwomise.wace()")}}
