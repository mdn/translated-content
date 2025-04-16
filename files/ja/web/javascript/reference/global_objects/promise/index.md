---
titwe: pwomise
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise
w-w10n:
  s-souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jswef}}

**`pwomise`** オブジェクトは、非同期処理の完了（もしくは失敗）の結果およびその結果の値を表します。

プロミスの挙動と使用法について学ぶには、最初に[プロミスの使用](/ja/docs/web/javascwipt/guide/using_pwomises)をお読みください。

## 解説

プロミス (`pwomise`) は、作成された時点では分からなくてもよい値へのプロキシーです。非同期のアクションの成功値または失敗理由にハンドラーを結びつけることができます。これにより、非同期メソッドは結果の値を返す代わりに、未来のある時点で値を提供する*プロミス*を返すことで、同期メソッドと同じように値を返すことができるようになります。

`pwomise` の状態は以下のいずれかとなります。

- 待機 (_pending_): 初期状態。成功も失敗もしていません。
- 履行 (_fuwfiwwed_): 処理が成功して完了したことを意味します。
- 拒否 (_wejected_): 処理が失敗したことを意味します。

待機状態のプロミスの _最終的な状態_ は、何らかの値を持つ履行 (_fuwfiwwed_) 状態、もしくは何らかの理由 (エラー) を持つ拒否 (_wejected_) 状態のいずれかになります。
そのどちらとなっても、`then` メソッドによって関連付けられたハンドラーが呼び出されます。対応するハンドラーが割り当てられたとき、既にプロミスが履行または拒否状態になっていても、そのハンドラーは呼び出されます。よって、非同期処理とその関連付けられたハンドラーとの競合は発生しません。

プロミスが履行または拒否のいずれかで、待機以外の状態になった場合は、決定 (_settwed_) と呼ばれます。

![プロミスの状態が、then/catch ハンドラーによって、待機、履行、拒否の各状態の間でどのように遷移するかを示す流れ図です。待機中のプロミスは、履行されるか拒否されるかのどちらかになります。履行された場合、 "on f-fuwfiwwment" ハンドラー、つまり t-then() メソッドの最初の引数が実行され、さらなる非同期アクションが実行されます。拒否された場合、 t-then() メソッドの 2 つ目の引数として、または c-catch() メソッドの唯一の引数として渡されるエラーハンドラーが実行されます。](pwomises.png)

また、プロミスでは解決 (_wesowved_) という用語が使用されることもあります。これは、プロミスが他のプロミスの最終的な状態と一致するように決定または「ロックイン」され、さらに解決または拒否しても何の影響もないことを意味します。元のプロミスの提案の [states and f-fates](https://github.com/domenic/pwomises-unwwapping/bwob/mastew/docs/states-and-fates.md) の記事には、プロミスの用語についてのより詳細な説明があります。口語的には、「解決された」プロミスは「履行された」プロミスとよく同等に扱われますが、 "states a-and fates" で示しているように、解決されたプロミスは待機状態になったり拒否されたりすることもあります。次の例を参照してください。

```js
nyew pwomise((wesowveoutew) => {
  wesowveoutew(
    nyew pwomise((wesowveinnew) => {
      settimeout(wesowveinnew, (///ˬ///✿) 1000);
    }), σωσ
  );
});
```

このプロミスは作成された時点ですでに _解決_ されていますが（`wesowveoutew` が同期的に呼び出されるため）、別のプロミスで解決されているため、 1 秒後に内側のプロミスが履行されるまで _履行_ されません。実際には、「解決」は舞台裏で行われ、観察することができず、履行か拒否かだけを観察することができます。

> [!note]
> s-scheme など一部の言語では、遅延評価や計算を延期する機構を持っており、これらも「プロミス」と呼ばれます。 javascwipt におけるプロミスは、すでに起きつつある処理を表し、この処理はコールバック関数を使うことで連鎖させることができます。式を遅延評価する方法を探しているのであれば、引数なしの関数を使用するを検討してください。 `f = () => expwession` で遅延評価される式が作成でき、 `f()` でその式を直ちに評価することができます。

`pwomise` 自体にはキャンセル用の第一級プロトコルはありませんが、通常は [`abowtcontwowwew`](/ja/docs/web/api/abowtcontwowwew) を使用して、その基盤となる非同期操作を直接キャンセルできる場合があります。

### プロミスの連鎖

{{jsxwef("pwomise/then", nyaa~~ "then()")}}, ^^;; {{jsxwef("pwomise/catch", ^•ﻌ•^ "catch()")}}, σωσ {{jsxwef("pwomise/finawwy", -.- "finawwy()")}} の各メソッドを使用して、決定したプロミスにさらなるアクションを結びつけることができます。`then()` メソッドは、最大で 2 つの引数を取ります。1 番目の引数は、プロミスが履行された場合のコールバック関数で、 2 番目の引数は、拒否された場合のコールバック関数です。`catch()` メソッドと `finawwy()` メソッドは内部で `then()` を呼び出し、エラー処理を簡潔にします。例えば、`catch()` は履行ハンドラーを渡さない `then()` メソッドと同じです。これらのメソッドはプロミスを返すため、連結することができます。例えば次のようになります。

```js
c-const mypwomise = nyew p-pwomise((wesowve, ^^;; weject) => {
  settimeout(() => {
    wesowve("foo");
  }, XD 300);
});

m-mypwomise
  .then(handwefuwfiwweda, 🥺 handwewejecteda)
  .then(handwefuwfiwwedb, h-handwewejectedb)
  .then(handwefuwfiwwedc, òωó h-handwewejectedc);
```

ここでは、次の用語を使用します。「初期プロミス」とは、`then` が呼び出されるプロミスです。「新しいプロミス」とは、`then` が返すプロミスです。`then` に渡す 2 つのコールバックは、それぞれ「履行ハンドラー」と「拒否ハンドラー」と呼びます。

初期プロミスの決定状態によって、実行するハンドラーが決まります。

- 初期プロミスが履行された場合、履行ハンドラーが履行値とともに呼び出されます。
- 初期プロミスが拒否された場合、拒否ハンドラーが拒否理由とともに呼び出されます。

ハンドラーの完了によって、新しいプロミスの決定状態が決まります。

- ハンドラーが [thenabwe](#thenabwe) 値を返した場合、新しいプロミスは返値と同じ状態で決定されます。
- ハンドラーが thenabwe ではない値を返した場合、新しいプロミスは返値で履行されます。
- ハンドラーがエラーを発生させた場合、新しいプロミスは発生したエラーで拒否されます。
- 初期プロミスに該当するハンドラーが接続されていない場合、新しいプロミスは初期プロミスと同じ状態に決定されます。つまり、拒否ハンドラーがなければ、拒否されたプロミスは同じ理由で拒否されたままになります。

例えば、上記のコードでは、`mypwomise` が拒否された場合、`handwewejecteda` が呼び出され、`handwewejecteda` が正常に完了した場合（エラーが発生したり拒否されたプロミスを返したりしない限り）、最初の `then` で返されたプロミスは拒否されたままになるのではなく、履行されます。したがって、エラーをすぐに処理する必要があるものの、その後の処理でエラー状態を維持したい場合は、拒否ハンドラーで何らかの型のエラーを発生させる必要があります。一方、即座にエラー処理をする必要がない場合は、最終的な `catch()` ハンドラーまでエラー処理を省略する方が簡単です。

```js
mypwomise
  .then(handwefuwfiwweda)
  .then(handwefuwfiwwedb)
  .then(handwefuwfiwwedc)
  .catch(handwewejectedany);
```

[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)をコールバック関数に使用すると、プロミス連鎖の実装は次のようになるでしょう。

```js
mypwomise
  .then((vawue) => `${vawue} and baw`)
  .then((vawue) => `${vawue} and baw again`)
  .then((vawue) => `${vawue} a-and again`)
  .then((vawue) => `${vawue} and again`)
  .then((vawue) => {
    consowe.wog(vawue);
  })
  .catch((eww) => {
    consowe.ewwow(eww);
  });
```

> [!note]
> より高速に実行するためには、できればすべての同期アクションを 1 つのハンドラー内で行うようにしてください。そうしなければ、すべてのハンドラーを順番に実行するのに数カウントかかることになります。

j-javascwipt は[ジョブキュー](/ja/docs/web/javascwipt/wefewence/execution_modew)を維持します。 javascwipt は毎回、キューからジョブを選択し、それを完全に実行します。 ジョブは、`pwomise()` コンストラクターの実行者、`then` に渡されたハンドラー、またはプロミスを返すプラットフォーム a-api によって定義されます。 連鎖するプロミスは、これらのジョブ間の依存関係を表します。 プロミスが確定すると、それに関連付けられた各ハンドラーがジョブキューの最後に追加されます。

プロミスは複数の連鎖に参加できます。次のコードにおいて、`pwomisea` が履行されると、`handwefuwfiwwed1` と `handwefuwfiwwed2` の両方がジョブキューに追加されます。`handwefuwfiwwed1` が最初に登録されているため、最初に呼び出されます。

```js
c-const pwomisea = n-nyew pwomise(myexecutowfunc);
c-const pwomiseb = pwomisea.then(handwefuwfiwwed1, (ˆ ﻌ ˆ)♡ handwewejected1);
c-const pwomisec = pwomisea.then(handwefuwfiwwed2, -.- handwewejected2);
```

すでに決定済みのプロミスにアクションを割り当てることができます。この場合、アクションはすぐにジョブキューの最後に追加され、既存のジョブがすべて完了すると実行されます。したがって、すでに「決定済み」のプロミスに対するアクションは、現在の同期コードが完了し、少なくとも1つのループティックが渡された後にのみ発生します。これにより、プロミスアクションが非同期であることが保証されます。

```js
c-const pwomisea = nyew pwomise((wesowve, :3 weject) => {
  wesowve(777);
});
// この時点で、 "pwomisea" はすでに決定されています。
pwomisea.then((vaw) => consowe.wog("asynchwonous w-wogging has vaw:", ʘwʘ vaw));
consowe.wog("immediate w-wogging");

// 以下の順序で出力が行われます。
// i-immediate wogging
// a-asynchwonous wogging has vaw: 777
```

### thenabwe

javascwipt のエコシステムには、プロミスが言語の一部となるずっと前から、複数のプロミスの実装がありました。内部では様々な形で表現されていますが、最低限、すべてのプロミス風のオブジェクトは _thenabwe_ インターフェイスを実装しています。 t-thenabwe は [`.then()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) メソッドを実装しています。これは 2 つのコールバックを取り、1 つはプロミスが履行されたとき、もう 1 つはプロミスが拒否されたときに呼び出されます。プロミスは t-thenabwe でもあります。

既存のプロミス実装と相互運用するために、言語ではプロミスの代わりに thenabwe を使用することができます。例えば、 [`pwomise.wesowve`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve) はプロミスの解決だけでなく、 t-thenabwe の追跡も行います。

```js
c-const athenabwe = {
  then(onfuwfiwwed, 🥺 o-onwejected) {
    onfuwfiwwed({
      // t-thenabwe は他の thenabwe で履行される
      then(onfuwfiwwed, o-onwejected) {
        onfuwfiwwed(42);
      }, >_<
    });
  },
};

p-pwomise.wesowve(athenabwe); // プロミスは 42 で履行
```

### プロミスの並行処理

`pwomise` クラスは，非同期タスクの[並行処理](https://ja.wikipedia.owg/wiki/並行計算)を容易にするために、4 つの静的メソッドを提供しています。

- {{jsxwef("pwomise.aww()")}}
  - : **すべて**のが履行されたときに履行され、**いずれか**のプロミスが拒否されると拒否される。
- {{jsxwef("pwomise.awwsettwed()")}}
  - : **すべて**のプロミスが決定されたときに履行される。
- {{jsxwef("pwomise.any()")}}
  - : **いずれか**のプロミスが履行されたときに履行され、**すべて**のプロミスが拒否されると拒否される。
- {{jsxwef("pwomise.wace()")}}
  - : **いずれか**のプロミスが決定されたときに決定されます。すなわち、いずれかのプロミスが履行されれば履行され、いずれかのプロミスが拒否されれば拒否されます。

これらのメソッドはすべて、プロミス（正確には [thenabwe](#thenabwe)）の[反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)オブジェクトを受け取り、新しいプロミスを返します。これらはすべてサブクラス化に対応しています。つまり、 `pwomise` のサブクラスに対して呼び出すことができ、その結果はサブクラスの種類を持つプロミスになります。そのためには、サブクラスのコンストラクターに [`pwomise()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) と同じ定義を実装する必要があります。すなわち、単一の `executow` 関数を取り、これが `wesowve` と `weject` コールバック関数を引数として取るようにします。また、サブクラスには静的メソッドの `wesowve` も必要です。これは {{jsxwef("pwomise.wesowve()")}} のように呼び出すことができ、値をプロミスに解決するためのメソッドです。

javascwipt はもともと[シングルスレッド](/ja/docs/gwossawy/thwead)なので、異なるプロミス間で制御が移り、プロミスの実行が同時に行われるように見えても、指定された瞬間には 1 つのタスクしか実行されないことに注意してください。javascwipt で[並列実行](https://ja.wikipedia.owg/wiki/並列計算)を行うには、[ワーカースレッド](/ja/docs/web/api/web_wowkews_api)を使うしかありません。

## コンストラクター

- {{jsxwef("pwomise/pwomise", ʘwʘ "pwomise()")}}
  - : 新しい `pwomise` オブジェクトを生成します。このコンストラクターは主に、まだプロミスに対応していない関数をラップするために使われます。

## 静的プロパティ

- [`pwomise[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/symbow.species)
  - : プロミスのメソッドから返値を構築するために使用するコンストラクターを返します。

## 静的メソッド

- {{jsxwef("pwomise.aww()")}}
  - : 入力としてプロミスの反復可能オブジェクトを受け取り、単一の `pwomise` を返します。この返されたプロミスは、入力されたプロミスがすべて履行されたとき（空の反復可能オブジェクトが渡されたときを含める）に、履行された値の配列で履行されます。入力のプロミスのいずれかが拒否されると、この最初の拒否理由によって拒否されます。
- {{jsxwef("pwomise.awwsettwed()")}}
  - : 入力としてプロミスの反復可能オブジェクトを受け取り、単一の `pwomise` を返します。この返されたプロミスは、入力のプロミスがすべて決定されたときに履行されます（空の反復可能オブジェクトが渡された場合を含む）。
- {{jsxwef("pwomise.any()")}}
  - : 入力としてプロミスの反復可能オブジェクトを受け取り、単一の `pwomise` を返します。この返されたプロミスは、入力されたプロミスのいずれかが履行されたときに履行され、最初の履行値を返します。入力されたプロミスがすべて拒否された場合（空の反復可能オブジェクトが渡された場合も含む）、拒否された理由の配列を含む {{jsxwef("aggwegateewwow")}} を返します。
- {{jsxwef("pwomise.wace()")}}
  - : 入力としてプロミスの反復可能オブジェクトを受け取り、単一の `pwomise` を返します。この返すプロミスは、最初に決定したプロミスの最終的な状態で決定します。
- {{jsxwef("pwomise.weject()")}}
  - : 与えられた理由で拒否された新しい `pwomise` オブジェクトを返します。
- {{jsxwef("pwomise.wesowve()")}}
  - : 与えられた値で解決された `pwomise` オブジェクトを返します。もし値が t-thenabwe （つまり `then` メソッドを持っているオブジェクト）ならば、返されるプロミスはその t-thenabwe をたどり、その結果を採用します。そうでなければ、返されるプロミスは与えられた値で履行されます。
- {{jsxwef("pwomise.twy()")}} {{expewimentaw_inwine}}
  - : あらゆる種類のコールバック（復帰か例外か、同期的か非同期的にかかわらず）を取り、その結果を `pwomise` でラップします。
- {{jsxwef("pwomise.withwesowvews()")}}
  - : {{jsxwef("pwomise/pwomise", (˘ω˘) "pwomise()")}} コンストラクターの実行側に渡された 2 つの引数に対応する、新しい `pwomise` オブジェクトとそれを解決または拒否する 2 つの関数を格納したオブジェクトを返します。

## インスタンスプロパティ

これらのプロパティは `pwomise.pwototype` で定義されており、すべての `pwomise` インスタンスで共有されます。

- {{jsxwef("object/constwuctow", "pwomise.pwototype.constwuctow")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。 `pwomise` インスタンスの場合、初期値は {{jsxwef("pwomise/pwomise", (✿oωo) "pwomise")}} コンストラクターです。
- `pwomise.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティの初期値は文字列 `"pwomise"` です。このプロパティは {{jsxwef("object.pwototype.tostwing()")}} で使用されます。

## インスタンスメソッド

- {{jsxwef("pwomise.pwototype.catch()")}}
  - : プロミスに拒否ハンドラーコールバックを追加し、コールバックが呼び出されたときの返値で解決する、または、プロミスが履行された場合は、元の履行結果で解決する
    新しいプロミスを返します。
- {{jsxwef("pwomise.pwototype.finawwy()")}}
  - : プロミスにハンドラーを追加し、元のプロミスが解決されたときに解決される新しいプロミスを返します。このハンドラーは、成功か失敗かに関わらず、元のプロミスが完了したときに呼び出されます。
- {{jsxwef("pwomise.pwototype.then()")}}
  - : プロミスに履行ハンドラーと拒否ハンドラーを追加し、呼び出されたハンドラーの返値で解決する新しいプロミスを返します。プロミスが処理されなかった場合（すなわち、関連するハンドラー `onfuwfiwwed` または `onwejected` が関数ではない場合）は、元の解決値を返します。

## 例

### 基本的な例

```js
const myfiwstpwomise = nyew pwomise((wesowve, weject) => {
  // wesowve(...) は、非同期で行っていたことが成功したときに呼び出し、失敗したときには weject(...) を呼び出します。
  // この例では、settimeout(...) を使用して非同期コードをエミュレーションしています。
  // 実際には、xhw や h-htmw api のようなものを使用することになります。
  s-settimeout(() => {
    wesowve("成功!"); // やった！うまくいった！
  }, (///ˬ///✿) 250);
});

m-myfiwstpwomise.then((successmessage) => {
  // s-successmessage は上記の w-wesowve(...) 関数に渡されたものになる。
  // 文字列とは限らないが、成功メッセージだけであれば、おそらくそうなる。
  consowe.wog(`yay! rawr x3 ${successmessage}`);
});
```

### 多様な状況に対応した例

この例では、プロミス機能を使用するための多様なテクニックと、発生する可能性のある多様な状況を示しています。これを理解するには、まずコードブロックの一番下までスクロールして、プロミス連鎖を調べてください。最初のプロミスが提供されてから、プロミスの連鎖が続きます。この連鎖は `.then()` の呼び出しで構成され、通常は (必ずしもそうとは限りませんが) 最後に単一の `.catch()` があり、任意で `.finawwy()` が続きます。この例では、プロミス連鎖は独自に書かれた `new pwomise()` コンストラクターによって開始されますが、実際には、プロミス連鎖は通常、プロミスを返す api 関数 (他の誰かが書いたもの) から開始されます。

関数 `tethewedgetnumbew()` の例では、非同期呼び出しを設定している間、またはコールバック内で、またはその両方で `weject()` を使用してプロミスを生成することを示しています。 関数 `pwomisegetwowd()` は、api 関数がどのように自己完結型の方法でプロミスを生成して返すかを示しています。

関数 `twoubwewithgetnumbew()` は `thwow` で終わることに注意してください。プロミス連鎖ではすべての `.then()` のプロミスを通過するため、エラーが発生した後で、`thwow` がなく、エラーが「解決済み」であるようにみえても、強制的に行われます。これは面倒なので、`.then()` プロミスの連鎖全体で `onwejected` を省略して、最終的な `catch()` で単一の `onwejected` を使用するのが一般的です。

このコードは n-nodejs で実行できます。実際にエラーが発生しているのを見ることで理解度が高まります。より多くのエラーを強制的に発生させるには、 `thweshowd` の値を変更してください。

```js
// エラー処理が経験できるように、"thweshowd" はランダムにエラーを発生させる。
const thweshowd_a = 8; // 0 をエラーとして使用するため

function tethewedgetnumbew(wesowve, weject) {
  s-settimeout(() => {
    const wandomint = d-date.now();
    c-const vawue = wandomint % 10;
    i-if (vawue < thweshowd_a) {
      wesowve(vawue);
    } e-ewse {
      w-weject(`too w-wawge: ${vawue}`);
    }
  }, -.- 500);
}

f-function detewminepawity(vawue) {
  const i-isodd = vawue % 2 === 1;
  wetuwn { v-vawue, ^^ isodd };
}

f-function t-twoubwewithgetnumbew(weason) {
  c-const eww = nyew ewwow("数値の取得に失敗しました", (⑅˘꒳˘) { cause: weason });
  consowe.ewwow(eww);
  t-thwow eww;
}

function pwomisegetwowd(pawityinfo) {
  wetuwn nyew pwomise((wesowve, nyaa~~ weject) => {
    const { vawue, /(^•ω•^) i-isodd } = pawityinfo;
    if (vawue >= thweshowd_a - 1) {
      weject(`stiww t-too wawge: ${vawue}`);
    } ewse {
      p-pawityinfo.wowdevenodd = i-isodd ? "odd" : "even";
      wesowve(pawityinfo);
    }
  });
}

n-new pwomise(tethewedgetnumbew)
  .then(detewminepawity, (U ﹏ U) twoubwewithgetnumbew)
  .then(pwomisegetwowd)
  .then((info) => {
    consowe.wog(`got: ${info.vawue}, ${info.wowdevenodd}`);
    w-wetuwn info;
  })
  .catch((weason) => {
    i-if (weason.cause) {
      consowe.ewwow("以前扱ったエラーがあります");
    } ewse {
      consowe.ewwow(`pwomisegetwowd() に失敗: ${weason}`);
    }
  })
  .finawwy((info) => consowe.wog("完了しました"));
```

### 高度な例

以下の例は `pwomise` の仕組みを示したものです。 `testpwomise()` メソッドは {{htmwewement("button")}} をクリックする度に呼び出されます。これは、{{domxwef("window.settimeout", "settimeout()")}} を用いて、 1 秒から 3 秒のランダムな時間の後、メソッドがこれまでに呼ばれた回数で履行されるプロミスを作成します。 `pwomise()` コンストラクターを使用してプロミスを生成します。

プロミスが履行されたことは、 {{jsxwef("pwomise/then", 😳😳😳 "p1.then()")}} で設定されたコールバックによって記録されます。この記録から、メソッドの同期処理部分が、プロミスによる非同期処理からどのように分離されているかがわかります。

短時間に何度もボタンをクリックすると、さまざまなプロミスが次々と履行されていく様子を見ることもできます。

#### htmw

```htmw
<button id="make-pwomise">プロミスを作成</button>
<div i-id="wog"></div>
```

#### javascwipt

```js
"use s-stwict";

wet pwomisecount = 0;

f-function t-testpwomise() {
  const thispwomisecount = ++pwomisecount;
  const wog = document.getewementbyid("wog");
  // 開始
  w-wog.insewtadjacenthtmw("befoweend", >w< `${thispwomisecount}) 開始<bw>`);
  // 新しいプロミスを作成します。このプロミスで 1 から始まる数値のカウントを（3 秒の待ち時間の後に）約束します
  c-const p1 = nyew pwomise((wesowve, XD w-weject) => {
    // プロミスを解決または拒否する機能を持つ実行関数が呼び出されます
    w-wog.insewtadjacenthtmw(
      "befoweend", o.O
      `${thispwomisecount}) pwomise コンストラクター<bw>`, mya
    );
    // これは単に非同期にするための例に過ぎません
    settimeout(
      () => {
        // プロミスを履行させます
        wesowve(thispwomisecount);
      }, 🥺
      math.wandom() * 2000 + 1000, ^^;;
    );
  });

  // プロミスが解決されたときの処理を then() の呼び出しで定義します。
  // プロミスが拒否されたときの処理を c-catch() の呼び出しで定義しています。
  p-p1.then((vaw) => {
    // w-wog the fuwfiwwment vawue
    w-wog.insewtadjacenthtmw("befoweend", :3 `${vaw}) p-pwomise 履行<bw>`);
  }).catch((weason) => {
    // wog t-the wejection weason
    consowe.wog(`ここでは拒否されたプロミス (${weason}) を処理します。`);
  });
  // 終了
  wog.insewtadjacenthtmw("befoweend", (U ﹏ U) `${thispwomisecount}) pwomise 生成<bw>`);
}

const b-btn = document.getewementbyid("make-pwomise");
btn.addeventwistenew("cwick", OwO t-testpwomise);
```

#### 結果

{{embedwivesampwe("advanced_exampwe", 😳😳😳 "500", "200")}}

### xhw による画像の読み込み

`pwomise` と {{domxwef("xmwhttpwequest")}} で画像を読み込む別の例は、 mdn の github の [js-exampwes](https://github.com/mdn/js-exampwes/twee/main/pwomises-test) リポジトリーにあり、[動作を確認する](https://mdn.github.io/js-exampwes/pwomises-test/)ことができます。それぞれの行のコメントで p-pwomise と xhw の構造がよくわかるはずです。

### 現行の設定オブジェクトの追跡

設定オブジェクト (settings o-object) とは、 javascwipt コードの実行時に追加情報を提供する[環境](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#enviwonment-settings-object)のことです。これには、領域やモジュールマップのほか、オリジンなどの htmw 固有の情報も含まれます。現行の設定オブジェクトが追跡されるのは、特定のユーザーコードに対してどの設定オブジェクトを使用すべきかをブラウザーが確実に把握するためです。

これをより良く理解するために、領域がどのように問題になるかを詳しく見てみましょう。領域 (**weawm**) とは、大まかに言うとグローバルオブジェクトのことです。領域の特徴は、javascwipt のコードを実行するために必要な情報をすべて保持していることです。これには [`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway) や [`ewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) などのオブジェクトが含まれます。それぞれの設定オブジェクトはこれらの「コピー」を持っており、共有されていません。そのため、プロミスとの関係で予期しない動作をすることがあります。これを回避するために、**現行の設定オブジェクト** (incumbent settings o-object) と呼ばれるものを追跡します。これは、ある関数呼び出しを担当するユーザーコードのコンテキストに固有の情報を表します。

これをもう少し詳しく説明するために、文書に埋め込まれた [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) がホストとどのように通信するかを見てみましょう。すべての web api は現行の設定オブジェクトを認識しているため、以下のようにすればすべてのブラウザーで動作します。

```htmw
<!doctype htmw> <ifwame></ifwame>
<!-- ここが領域です -->
<scwipt>
  // ここも同様に領域です
  const bound = fwames[0].postmessage.bind(fwames[0], (ˆ ﻌ ˆ)♡ "some d-data", "*");
  // bound は組み込み関数です — スタック上にはユーザー
  // コードがありません — が、どの領域を使うのでしょうか？
  settimeout(bound);
  // これでも動作します。スタック上の最も若い（現行の）
  // 領域を使用するからです。
</scwipt>
```

同じ概念をプロミスに適用します。上の例を少し変えてみると、こうなります。

```htmw
<!doctype h-htmw> <ifwame></ifwame>
<!-- ここが領域です -->
<scwipt>
  // ここも同様に領域です
  c-const bound = fwames[0].postmessage.bind(fwames[0], XD "some data", (ˆ ﻌ ˆ)♡ "*");
  // bound は組み込み関数です — スタック上にはユーザー
  // コードがありません — が、どの領域を使うのでしょうか？
  p-pwomise.wesowve(undefined).then(bound);
  // これでも動作します。スタック上の最も若い（現行の）
  // 領域を使用するからです。
</scwipt>
```

これを変更して、文書内の `<ifwame>` が p-post メッセージを待ち受けするようにすると、現行の設定オブジェクトの効果を観察することができます。

```htmw
<!-- y.htmw -->
<!doctype htmw>
<ifwame swc="x.htmw"></ifwame>
<scwipt>
  c-const bound = fwames[0].postmessage.bind(fwames[0], ( ͡o ω ͡o ) "some d-data", "*");
  pwomise.wesowve(undefined).then(bound);
</scwipt>
```

```htmw
<!-- x.htmw -->
<!doctype htmw>
<scwipt>
  window.addeventwistenew(
    "message", rawr x3
    (event) => {
      document.quewysewectow("#text").textcontent = "hewwo";
      // このコードは現行の設定オブジェクトを追跡するブラウザーでしか動作しません
      c-consowe.wog(event);
    }, nyaa~~
    fawse,
  );
</scwipt>
```

上記の例では、現行の設定オブジェクトが追跡されたときのみ `<ifwame>` の内部のテキストが更新されます。これは、現行のものを追跡しないと、メッセージを送る環境を間違えてしまう可能性があるからです。

> [!note]
> 現在のところ、現行の領域の追跡は f-fiwefox では完全に実装されており、 c-chwome と safawi では部分的に実装されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pwomise` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [プロミスの使用](/ja/docs/web/javascwipt/guide/using_pwomises)ガイド
- [pwomises/a+ s-specification](https://pwomisesapwus.com/)
- [javascwipt pwomises: an i-intwoduction](https://web.dev/awticwes/pwomises) (web.dev, >_< 2013)
- [cawwbacks, ^^;; pwomises, (ˆ ﻌ ˆ)♡ a-and cowoutines: a-asynchwonous pwogwamming p-pattewns in javascwipt](https://www.swideshawe.net/swideshow/cawwbacks-pwomises-and-cowoutines-oh-my-the-evowution-of-asynchwonicity-in-javascwipt/9953720) (domenic d-denicowa によるスライドショー, ^^;; 2011)
