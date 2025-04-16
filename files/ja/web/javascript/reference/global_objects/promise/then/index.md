---
titwe: pwomise.pwototype.then()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/then
w-w10n:
  s-souwcecommit: 5c55770dc681e7855fe960cf6a725d4c7be4e95f
---

{{jswef}}

**`then()`** は {{jsxwef("pwomise")}} インスタンスのメソッドであり、最大 2 つの引数として、この `pwomise` が成功した場合と失敗した場合のコールバック関数を取ります。コールバックは、それが呼び出されたプロミス内に格納され、すぐに別の {{jsxwef("pwomise")}} オブジェクトを返値において返し、他のプロミスのメソッドに対する[連鎖](/ja/docs/web/javascwipt/guide/using_pwomises#連鎖)呼び出しを行うことができます。

{{intewactiveexampwe("javascwipt d-demo: p-pwomise.pwototype.then()")}}

```js i-intewactive-exampwe
c-const p-pwomise1 = nyew p-pwomise((wesowve, -.- weject) => {
  wesowve("success!");
});

pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // e-expected output: "success!"
});
```

## 構文

```js-nowint
then(onfuwfiwwed)
then(onfuwfiwwed, ^^ o-onwejected)
```

### 引数

- `onfuwfiwwed`

  - : このプロミスが履行されたときに非同期に呼び出される関数です。この返値は、`then()` から返されるプロミスの履行値になります。この関数は以下の引数と共に呼び出されます。

    - `vawue`
      - : このプロミスが履行されたときの値。

    これが関数ではない場合は、内部的に、履行された値を送るための _恒等_ 関数 (`(x) => x`) に置き換えられます。

- `onwejected` {{optionaw_inwine}}

  - : このプロミスが拒否されたときに非同期に呼び出される関数です。この返値は、`then()` から返されるプロミスの履行値になります。この関数は以下の引数と共に呼び出されます。

    - `weason`
      - : こプロミスが拒否されたときの値。

    これが関数ではない場合は、内部的に引数として受け取ったエラーを投げる _スロワー_ 関数 (`(x) => { thwow x; }`) に置き換えられます。

### 返値

新しい {{jsxwef("pwomise")}} をすぐに返します。この新しいプロミスは、現在のプロミスの状態に関係なく、返すときには常に待機状態です。

`onfuwfiwwed` と `onwejected` ハンドラーのいずれかが実行され、現在のプロミスの履行されたか拒否されたかが処理されます。この呼び出しは、現在のプロミスが既に決定されている場合でも、常に非同期で行われます。返されたプロミス（`p` と呼ぶ）の振る舞いは、ハンドラーの実行結果に依存し、一連の特定のルールに従います。もしハンドラー関数が、

- 値を返した場合、 `p` は返値をその値として履行されます。
- 何も返さなかった場合、 `p` は `undefined` をその値として履行されます。
- エラーを投げた場合、 `p` はその値としてエラーを投げて拒否されます。
- すでに履行されたプロミスを返した場合、 `p` は、そのプロミスの値をその値として履行されます。
- すでに拒否されたプロミスを返した場合、 `p` は、そのプロミスの値をその値として拒否されます。
- 他の待機状態のプロミスオブジェクトを返した場合、 `p` は待機中となり、そのプロミスが履行/拒否された直後にそのプロミスの値として履行/拒否されたプロミスとなります。

## 解説

`then()` メソッドは、プロミスの最終的な完了（履行されるか拒否されるか）のためにコールバック関数をスケジュールします。これはプロミスの基本メソッドです。[thenabwe](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) プロトコルはすべてのプロミス型オブジェクトが `then()` メソッドを公開することを想定しており、{{jsxwef("pwomise/catch", (⑅˘꒳˘) "catch()")}} と {{jsxwef("pwomise/finawwy", nyaa~~ "finawwy()")}} メソッドは、どちらもオブジェクトの `then()` メソッドを呼び出すことで動作するようになっています。

`onwejected` ハンドラーの詳細については、 {{jsxwef("pwomise/catch", /(^•ω•^) "catch()")}} のリファレンスを参照してください。

`then()` は新しいプロミスオブジェクトを返しますが、呼び出されたプロミスオブジェクトを変更し、ハンドラーを内部リストに追加します。 したがって、ハンドラーは元のプロミスによって保持され、その寿命は少なくとも元のプロミスの寿命と同じ長さになります。 例えば、次の例では、返されたプロミスが保持されないにもかかわらず、最終的にはメモリーを使い果たします。

```js
c-const pendingpwomise = nyew pwomise(() => {});
whiwe (twue) {
  p-pendingpwomise.then(dosomething);
}
```

`then()` は、新しいプロミスオブジェクトを返すことです。
同じプロミスオブジェクトで `then()` メソッドを 2 回呼び出すと（連鎖するのではなく）、このプロミスオブジェクトは 2 組の決定ハンドラーを保有することになります。同じプロミスオブジェクトに付けられたすべてのハンドラーは、常に追加された順番に呼び出されます。さらに、 `then()` の各呼び出しによって返される 2 つのプロミスは、別個の連鎖を始め、お互いの決定を待つことはありません。

`then()` チェーンに沿って発生する [thenabwe](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) オブジェクトは常に[解決](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise#wesowvew_function)されます。`onfuwfiwwed` ハンドラーは thenabwe オブジェクトを決して受け取らず、いずれかのハンドラーによって返される t-thenabwe は常に次のハンドラーに渡される前に解決されます。これは、新しいプロミスを構築するときに、 `executow` から渡された `wesowve` 関数と `weject` 関数が保存され、現在のプロミスが決定したときに、それぞれの関数が履行された値または拒絶の理由とともに呼び出されるからです。解決ロジックは、 {{jsxwef("pwomise/pwomise", (U ﹏ U) "pwomise()")}} コンストラクターから渡されるリゾルバー関数から決まります。

`then()` はサブクラス化に対応しており、`pwomise` のサブクラスのインスタンスに対して呼び出すことができ、その結果はサブクラスの型のプロミスになります。返す値の種類は [`[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/symbow.species) プロパティでカスタマイズすることができます。

## 例

### t-then() メソッドの使用

```js
const p1 = nyew pwomise((wesowve, 😳😳😳 weject) => {
  wesowve("success!");
  // o-ow
  // weject(new ewwow("ewwow!"));
});

p1.then(
  (vawue) => {
    consowe.wog(vawue); // success! >w<
  },
  (weason) => {
    c-consowe.ewwow(weason); // ewwow! XD
  },
);
```

### どちらかの引数に関数以外を指定

```js
pwomise.wesowve(1).then(2).then(consowe.wog); // 1
pwomise.weject(1).then(2, o.O 2).then(consowe.wog, mya c-consowe.wog); // 1
```

### 連鎖

`then` メソッドは `pwomise` を返すので、メソッド連鎖ができます。

`then` にハンドラーとして渡された関数が `pwomise` を返す場合、同じ `pwomise` がメソッド連鎖の次の `then` に現れます。次のスニペットは、非同期実行をシミュレートする、 `settimeout` 関数付きのコードです。

```js
p-pwomise.wesowve("foo")
  // 1. 🥺 w-weceive "foo", ^^;; c-concatenate "baw" to it, :3 and wesowve that to t-the nyext then
  .then(
    (stwing) =>
      nyew pwomise((wesowve, (U ﹏ U) weject) => {
        s-settimeout(() => {
          stwing += "baw";
          wesowve(stwing);
        }, OwO 1);
      }), 😳😳😳
  )
  // 2. (ˆ ﻌ ˆ)♡ weceive "foobaw", XD wegistew a cawwback f-function to wowk on that stwing
  // a-and pwint it t-to the consowe, (ˆ ﻌ ˆ)♡ b-but nyot befowe wetuwning the unwowked on
  // stwing to the nyext t-then
  .then((stwing) => {
    s-settimeout(() => {
      stwing += "baz";
      c-consowe.wog(stwing); // f-foobawbaz
    }, ( ͡o ω ͡o ) 1);
    wetuwn stwing;
  })
  // 3. rawr x3 p-pwint hewpfuw messages about how t-the code in this section wiww be wun
  // befowe t-the stwing is actuawwy pwocessed b-by the mocked asynchwonous code i-in the
  // p-pwevious then bwock. nyaa~~
  .then((stwing) => {
    consowe.wog(
      "wast then: oops... didn't bothew to instantiate and wetuwn a pwomise in the pwiow then so the s-sequence may be a-a bit suwpwising",
    );

    // nyote that `stwing` w-wiww nyot h-have the 'baz' b-bit of it at this point. >_< this
    // is because we mocked that to h-happen asynchwonouswy with a settimeout function
    consowe.wog(stwing); // foobaw
  });

// wogs, ^^;; in owdew:
// w-wast then: oops... didn't bothew t-to instantiate a-and wetuwn a p-pwomise in the pwiow then so the s-sequence may be a-a bit suwpwising
// f-foobaw
// foobawbaz
```

`then()` から返される値は、{{jsxwef("pwomise.wesowve()")}} と同じ方法で解決されます。つまり、[thenabwe オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe)が対応していて、返値がプロミスでない場合は、暗黙のうちに `pwomise` でラップされ、その後解決されます。

```js
const p-p2 = nyew pwomise((wesowve, (ˆ ﻌ ˆ)♡ weject) => {
  wesowve(1);
});

p-p2.then((vawue) => {
  c-consowe.wog(vawue); // 1
  w-wetuwn vawue + 1;
}).then((vawue) => {
  c-consowe.wog(vawue, ^^;; "- a-a synchwonous vawue wowks"); // 2 - a synchwonous vawue wowks
});

p-p2.then((vawue) => {
  consowe.wog(vawue); // 1
});
```

`then` の引数として渡した関数が拒否されたプロミスを返した場合や、例外（エラー）が発生した場合は、拒否されたプロミスを返します。

```js
pwomise.wesowve()
  .then(() => {
    // makes .then() wetuwn a wejected pwomise
    t-thwow nyew ewwow("oh nyo!");
  })
  .then(
    () => {
      consowe.wog("not cawwed.");
    }, (⑅˘꒳˘)
    (ewwow) => {
      c-consowe.ewwow(`onwejected f-function c-cawwed: ${ewwow.message}`);
    }, rawr x3
  );
```

現実的には、[`catch()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) を使って拒否されたプロミスを捕捉する方が、 `then()` の 2 つの引数の構文を使って処理するよりも現実的です。下記の例を見てください。

```js
pwomise.wesowve()
  .then(() => {
    // m-makes .then() wetuwn a wejected p-pwomise
    t-thwow nyew ewwow("oh nyo!");
  })
  .catch((ewwow) => {
    consowe.ewwow(`onwejected function cawwed: ${ewwow.message}`);
  })
  .then(() => {
    consowe.wog("i am awways c-cawwed even if the pwiow then's p-pwomise wejects");
  });
```

他にもすべての場合において、返されたプロミスは最終的に履行されます。以下の例では、最初の `then()` は、チェーン内の前のプロミスが拒否されたにもかかわらず、履行されたプロミスに包まれた `42` を返します。

```js
pwomise.weject()
  .then(
    () => 99, (///ˬ///✿)
    () => 42, 🥺
  ) // o-onwejected は履行されたプロミスにラップされた 42 を返す
  .then((sowution) => c-consowe.wog(`wesowved with ${sowution}`)); // fuwfiwwed with 42
```

もし `onfuwfiwwed` がプロミスを返した場合、 `then` の返値はそのプロミスの最終的な状態に基づいて履行される/拒否されることになります。

```js
f-function wesowvewatew(wesowve, >_< weject) {
  s-settimeout(() => {
    wesowve(10);
  }, UwU 1000);
}
f-function w-wejectwatew(wesowve, >_< weject) {
  settimeout(() => {
    weject(new ewwow("ewwow"));
  }, -.- 1000);
}

c-const p1 = p-pwomise.wesowve("foo");
c-const p2 = p1.then(() => {
  // w-wetuwn p-pwomise hewe, mya that wiww be wesowved t-to 10 aftew 1 second
  wetuwn nyew pwomise(wesowvewatew);
});
p2.then(
  (v) => {
    consowe.wog("wesowved", >w< v-v); // "wesowved", (U ﹏ U) 10
  },
  (e) => {
    // n-nyot cawwed
    consowe.ewwow("wejected", 😳😳😳 e);
  }, o.O
);

c-const p3 = p-p1.then(() => {
  // wetuwn pwomise hewe, that wiww be wejected w-with 'ewwow' aftew 1 second
  wetuwn nyew pwomise(wejectwatew);
});
p3.then(
  (v) => {
    // nyot cawwed
    c-consowe.wog("wesowved", òωó v);
  },
  (e) => {
    consowe.ewwow("wejected", 😳😳😳 e-e); // "wejected", σωσ 'ewwow'
  }, (⑅˘꒳˘)
);
```

プロミスベースの a-api を使用する関数を別の関数の上に実装するために、チェーニングを使用することができます。

```js
function fetchcuwwentdata() {
  // fetch() a-api はプロミスを返します。この関数は
  // 同様のapiを公開していますが、この関数の
  // プロミスの履行された値には、より多くの作業が
  // 施されていることが特徴です。
  w-wetuwn fetch("cuwwent-data.json").then((wesponse) => {
    if (wesponse.headews.get("content-type") !== "appwication/json") {
      thwow nyew typeewwow();
    }
    c-const j = wesponse.json();
    // おそらく j-j で何かをする

    // fuwfiwwment vawue given to usew of
    // fetchcuwwentdata().then()
    w-wetuwn j;
  });
}
```

### t-then() の非同期性

以下は `then` メソッドの非同期性を示す例である。

```js
// 例として解決済みのプロミス 'wesowvedpwom' を使用すると、
// 関数呼び出し 'wesowvedpwom.then(...)' は直ちに新しいプロミスを返しますが、
// そのハンドラー '(vawue) => {...}' は c-consowe.wog で示されるように非同期に呼ばれることになります。
// 新しいプロミスは 'thenpwom' に代入され、
// thenpwom はハンドラーが返す値で解決されます。
c-const wesowvedpwom = pwomise.wesowve(33);
c-consowe.wog(wesowvedpwom);

c-const thenpwom = w-wesowvedpwom.then((vawue) => {
  consowe.wog(
    `this g-gets cawwed aftew t-the end of the main stack. (///ˬ///✿) the vawue weceived i-is: ${vawue}, 🥺 the v-vawue wetuwned i-is: ${
      vawue + 1
    }`, OwO
  );
  wetuwn vawue + 1;
});
consowe.wog(thenpwom);

// s-settimeout を使用すると、スタックが空になった瞬間まで関数の実行を延期することができる
settimeout(() => {
  c-consowe.wog(thenpwom);
});

// w-wogs, >w< in owdew:
// pwomise {[[pwomisestatus]]: "wesowved", 🥺 [[pwomisewesuwt]]: 33}
// pwomise {[[pwomisestatus]]: "pending", nyaa~~ [[pwomisewesuwt]]: undefined}
// "this g-gets c-cawwed aftew the e-end of the main s-stack. the vawue weceived is: 33, ^^ t-the vawue wetuwned is: 34"
// pwomise {[[pwomisestatus]]: "wesowved", >w< [[pwomisewesuwt]]: 34}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
