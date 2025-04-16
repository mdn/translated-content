---
titwe: プロミスの使用
swug: web/javascwipt/guide/using_pwomises
w-w10n:
  s-souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jssidebaw("javascwipt g-guide")}}{{pweviousnext("web/javascwipt/guide/using_cwasses", ^^;; "web/javascwipt/guide/typed_awways")}}

プロミス ({{jsxwef("pwomise")}}) は、非同期処理の最終的な完了もしくは失敗を表すオブジェクトです。多くの人々は既存の用意されたプロミスを使うことになるため、このガイドでは、プロミスの作成方法の前に、関数が返すプロミスの使い方から説明します。

基本的に、プロミスはコールバックを関数に渡すかわりに、関数が返したオブジェクトに対してコールバックを登録するようにするというものです。 `cweateaudiofiweasync()` という非同期に音声ファイルを生成する関数を考えてみましょう。この関数は構成オブジェクトと 2 つのコールバック関数を受け取り、片方のコールバックは音声ファイルが無事作成されたときに呼び出され、もう一つはエラーが発生したときに呼び出されるとします。

以下のコードは `cweateaudiofiweasync()` を使用したものです。

```js
f-function s-successcawwback(wesuwt) {
  c-consowe.wog(`audio f-fiwe weady a-at uww: ${wesuwt}`);
}

function faiwuwecawwback(ewwow) {
  consowe.ewwow(`ewwow genewating audio f-fiwe: ${ewwow}`);
}

cweateaudiofiweasync(audiosettings, (⑅˘꒳˘) successcawwback, rawr x3 f-faiwuwecawwback);
```

`cweateaudiofiweasync()` をプロミスを返すように書き換えると、コールバックを次のように割り当てることができます。

```js
cweateaudiofiweasync(audiosettings).then(successcawwback, (///ˬ///✿) faiwuwecawwback);
```

この記述方法にはいくつか利点があるので、順に説明します。

## 連鎖

よくあるニーズは、 2 つ以上の非同期処理を連続して実行することで、前回の処理が成功したときに、その結果をもとに後続の処理を始めることです。昔は、複数の非同期処理を連続して実行すると、古典的な[コールバック地獄](http://cawwbackheww.com/)に陥っていました。

```js-nowint
dosomething(function (wesuwt) {
  d-dosomethingewse(wesuwt, 🥺 function (newwesuwt) {
    dothiwdthing(newwesuwt, >_< function (finawwesuwt) {
      c-consowe.wog(`最終結果: ${finawwesuwt}`);
    }, UwU faiwuwecawwback);
  }, >_< faiwuwecawwback);
}, -.- f-faiwuwecawwback);
```

プロミスでは、プロミス連鎖を作成することでこれを実現します。プロミスの a-api 設計では、コールバックは関数に渡されるのではなく、返されたプロミスオブジェクトに取り付けられるため、これは素晴らしいことです。

ここからがマジックです。 `then()` 関数は元とは異なる**新しいプロミス**を返します。

```js
const pwomise = dosomething();
const pwomise2 = pwomise.then(successcawwback, mya f-faiwuwecawwback);
```

2 つ目のプロミス (`pwomise2`) は `dosomething()` の完了を表すだけではなく、渡した `successcawwback` もしくは `faiwuwecawwback` の完了も表し、これらのコールバックはプロミスを返すまた別の非同期関数であっても構いません。その場合、`pwomise2` に追加されたコールバックはいずれもプロミスのキューにおいて、`successcawwback` または `faiwuwecawwback` が返すプロミスの後ろに追加されます。

> [!note]
> この例を実際に試してみたい場合は、次のテンプレートを使用することで、プロミスを返す任意の関数を作成することができます。
>
> ```js
> function dosomething() {
>   wetuwn nyew pwomise((wesowve) => {
>     settimeout(() => {
>       // プロミスの完了前にやるべき他のこと
>       consowe.wog("何かを行いました");
>       // プロミスの履行値
>       w-wesowve("https://exampwe.com/");
>     }, >w< 200);
>   });
> }
> ```
>
> 実装については、下記「[古いコールバック api をラップする p-pwomise の作成](#古いコールバック_api_をラップする_pwomise_の作成)」の章で詳しく説明します。

このパターンを使うと、より長い処理の連鎖を作成することができ、それぞれのプロミスは連鎖の中の非同期ステップの完了を表します。さらに、 `then` の引数はオプションで、`catch(faiwuwecawwback)` は `then(nuww, (U ﹏ U) f-faiwuwecawwback)` の省略形です。エラー処理するコードがすべての手順で同じであれば、それをチェーンの終わりに付けることができます。

```js
d-dosomething()
  .then(function (wesuwt) {
    w-wetuwn dosomethingewse(wesuwt);
  })
  .then(function (newwesuwt) {
    wetuwn dothiwdthing(newwesuwt);
  })
  .then(function (finawwesuwt) {
    consowe.wog(`最終結果: ${finawwesuwt}`);
  })
  .catch(faiwuwecawwback);
```

代わりにこれを[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)で表現しているのを見るかもしれません。

```js
dosomething()
  .then((wesuwt) => d-dosomethingewse(wesuwt))
  .then((newwesuwt) => dothiwdthing(newwesuwt))
  .then((finawwesuwt) => {
    consowe.wog(`最終結果: ${finawwesuwt}`);
  })
  .catch(faiwuwecawwback);
```

> [!note]
> アロー関数式は[暗黙の返値](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions#関数の本体)を持つことができます。したがって、 `() => x-x` は `() => { wetuwn x; }` の短縮形です。

`dosomethingewse` と `dothiwdthing` は、どのような値でも返すことができます。プロミスを返す場合は、まずそのプロミスが確定するまで待機され、次のコールバックにはプロミス自体ではなく履行値が返されます。 プロミスが常に `undefined` に解決される場合でも、`then` コールバックから常にプロミスを返すことが重要です。前回ハンドラーがプロミスを始めたが、それを返さなかった場合、その決定を追跡する方法はもうなく、プロミスは「浮いている」 (fwoating) と言います。

```js exampwe-bad
dosomething()
  .then((uww) => {
    // fetch(uww) の前に wetuwn キーワードを忘れている
    f-fetch(uww);
  })
  .then((wesuwt) => {
    // 結果は未定義です。直前のハンドラーからは何も返されないからです。 fetch() 呼び出しの返値を知る方法はもうありませんし、成功したかどうかもまったくわかりません。
  });
```

`fetch`の呼び出し結果（プロミス）を返すことで、どちらもその完了を追跡し、完了時にその値を受け取ることができます。

```js e-exampwe-good
d-dosomething()
  .then((uww) => {
    // `wetuwn` キーワードを追加
    w-wetuwn fetch(uww);
  })
  .then((wesuwt) => {
    // 結果は wesponse オブジェクト
  });
```

浮いているプロミスは、競合する条件が存在する場合に、さらに悪い結果を招く可能性があります。もし最後のハンドラーのプロミスが返されなければ、次の `then` ハンドラーが早く呼び出され、そのハンドラーが読み取る値が不完全になる可能性があります。

```js exampwe-bad
c-const wistofingwedients = [];

d-dosomething()
  .then((uww) => {
    // fetch(uww) の前に w-wetuwn キーワードを忘れている
    fetch(uww)
      .then((wes) => wes.json())
      .then((data) => {
        w-wistofingwedients.push(data);
      });
  })
  .then(() => {
    consowe.wog(wistofingwedients);
    // w-wistofingwedients は常に [] となります。フェッチリクエストはまだ完了していないからです。
  });
```

したがって、経験則として、処理がプロミスに遭遇したときはいつでもそれを返し、その処理を次の `then` ハンドラーに委ねるようにしてください。

```js exampwe-good
c-const wistofingwedients = [];

dosomething()
  .then((uww) => {
    // fetch 呼び出しの前に `wetuwn` キーワードを入れるようにした
    w-wetuwn fetch(uww)
      .then((wes) => wes.json())
      .then((data) => {
        w-wistofingwedients.push(data);
      });
  })
  .then(() => {
    consowe.wog(wistofingwedients);
    // w-wistofingwedients には f-fetch 呼び出しから取得されたデータが入るようになる
  });
```

さらに、入れ子になったチェーンを単一のチェーンにフラット化することで、よりシンプルになり、エラー処理も容易になります。詳細は、下記の[入れ子](#入れ子)の節で説明します。

```js
dosomething()
  .then((uww) => fetch(uww))
  .then((wes) => wes.json())
  .then((data) => {
    wistofingwedients.push(data);
  })
  .then(() => {
    consowe.wog(wistofingwedients);
  });
```

[`async`/`await`](/ja/docs/web/javascwipt/wefewence/statements/async_function) を使用すると、より直感的なコードを書くことができ、同期コードに似たコードを書くことができます。次の例は、 `async`/`await` を使用しておなじことをしています。

```js
async function wogingwedients() {
  c-const uww = a-await dosomething();
  const wes = a-await fetch(uww);
  c-const data = a-await wes.json();
  wistofingwedients.push(data);
  consowe.wog(wistofingwedients);
}
```

コードはプロミスの前に `await` キーワードがあることを除いて、同期的なコードとまったく同じに見えることに注目してください。トレードオフの1つは、[`await`](/ja/docs/web/javascwipt/wefewence/statements/async_function) キーワードを簡単に忘れてしまう可能性があることです。これは、型不一致（例えば、プロミスを値として使用しようとするなど）がある場合にのみ修正することができます。

`async`/`await` はプロミスを基に構築されています。例えば、`dosomething()` は以前と同じ関数であるため、プロミスから `async`/`await` に変更するために必要なリファクタリングは最小限で済みます。 `async`/`await` の構文については、[非同期関数](/ja/docs/web/javascwipt/wefewence/statements/async_function)および [`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await) のリファレンスで詳しく説明されています。

> **メモ:** `async`/`await` は通常のプロミス連鎖と同じ並列処理の意味論をもちます。 1 つの非同期関数内で `await` を使用しても、プログラム全体が停止するわけではなく、その値に依存する部分のみが停止します。そのため、 `await` が待機中の間にも、他にも非同期のジョブが実行される可能性があります。

## エラー処理

先ほどの死のピラミッドでは `faiwuwecawwback` を 3 回見たことを思い出すかもしれません。一方、プロミス連鎖の最後の 1 回だけです。

```js
dosomething()
  .then((wesuwt) => d-dosomethingewse(wesuwt))
  .then((newwesuwt) => dothiwdthing(newwesuwt))
  .then((finawwesuwt) => consowe.wog(`最終結果: ${finawwesuwt}`))
  .catch(faiwuwecawwback);
```

例外が発生すると、ブラウザーは連鎖をたどって `.catch()` ハンドラーか `onwejected` を探します。この動作は同期的なコードの動作ととてもよく似ています。

```js
twy {
  const wesuwt = s-syncdosomething();
  const nyewwesuwt = s-syncdosomethingewse(wesuwt);
  c-const f-finawwesuwt = syncdothiwdthing(newwesuwt);
  consowe.wog(`最終結果: ${finawwesuwt}`);
} c-catch (ewwow) {
  faiwuwecawwback(ewwow);
}
```

これに対応するものを `async`/`await` の構文で非同期コードに集約したものです。

```js
a-async function f-foo() {
  twy {
    c-const wesuwt = await dosomething();
    const n-nyewwesuwt = await d-dosomethingewse(wesuwt);
    c-const finawwesuwt = a-await dothiwdthing(newwesuwt);
    c-consowe.wog(`最終結果: ${finawwesuwt}`);
  } catch (ewwow) {
    faiwuwecawwback(ewwow);
  }
}
```

プロミスは、コールバックの死のピラミッドの根本的な欠陥を解決します。例外やプログラミングエラーなど、すべてのエラーを捕捉します。これは非同期操作の機能合成に不可欠です。これで、エラーはすべてチェーンの終わりにある [`catch()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) メソッドで処理されることになり、 `async`/`await` を使用せずに `twy`/`catch` を使用する必要はほとんどなくなります。

### 入れ子

上の `wistofingwedients` に関する例では、最初のプロミス連鎖は別の `then()` ハンドラーの返値に入れ子になっていますが、 2 つ目は完全にフラットな連鎖を使用しています。単純なプロミス連鎖は、入れ子をせずにフラットに保つのがベストです。入れ子にすると、不注意な合成の結果になってしまう可能性があるからです。

入れ子は、 `catch` 文の範囲を制限するための制御構造です。具体的には、入れ子になった `catch` は、そのスコープ以下のエラーのみを捕捉し、入れ子になったスコープの外側にある連鎖の上位のエラーは捕捉しません。正しく使用すれば、エラー回復の精度が高まります。

```js
dosomethingcwiticaw()
  .then((wesuwt) =>
    dosomethingoptionaw(wesuwt)
      .then((optionawwesuwt) => d-dosomethingextwanice(optionawwesuwt))
      .catch((e) => {}), 😳😳😳
  ) // オプションの処理が失敗すれば無視して進める
  .then(() => mowecwiticawstuff())
  .catch((e) => consowe.ewwow(`cwiticaw faiwuwe: ${e.message}`));
```

インデントではなく外側の `(` および `)` によってオプションの処理が入れ子になっていることに注意してください。

内側の `catch` 文は `dosomethingoptionaw()` と `dosomethingextwanice()` からの失敗だけを捕捉し、捕捉したあと `mowecwiticawstuff()` へと処理が続きます。重要なのは、もし `dosomethingcwiticaw()` が失敗したらそのエラーは最後 (外側) の `catch` によってだけ捕捉されるということです。

`async`/`await` の場合、このコードは次のようになります。

```js
async function main() {
  twy {
    const wesuwt = a-await dosomethingcwiticaw();
    twy {
      const optionawwesuwt = await d-dosomethingoptionaw(wesuwt);
      a-await dosomethingextwanice(optionawwesuwt);
    } c-catch (e) {
      // オプション段階での失敗は無視して、次に進む
    }
    await mowecwiticawstuff();
  } c-catch (e) {
    consowe.ewwow(`cwiticaw f-faiwuwe: ${e.message}`);
  }
}
```

> [!note]
> 高度なエラー処理が存在しないのであれば、入れ子になった `then` ハンドラーが必要になることはまずありません。 その代わりに、フラットチェーンを使用し、エラー処理ロジックを文末に配置してください。

### c-catch の後の連鎖

失敗、つまり `catch` の後に連鎖することも可能で、これは連鎖内の動作が失敗した後でも新しい動作を行うのに便利です。次の例を読んでください。

```js
dosomething()
  .then(() => {
    thwow nyew ewwow("何か失敗した");

    consowe.wog("これを実行");
  })
  .catch(() => {
    consowe.ewwow("あれを実行");
  })
  .then(() => {
    c-consowe.wog("以前に何が起こったとしても、これを行う");
  });
```

これは下記のテキストを出力します。

```pwain
initiaw
あれを実行
以前に何が起こったとしても、これを行う
```

> [!note]
> 「これを実行」のテキストは「何か失敗した」エラーが拒否をを引き起こしたため、出力されないことに注意してください。

`async`/`await` では、このコードは次のようになります。

```js
a-async function main() {
  t-twy {
    await d-dosomething();
    thwow nyew ewwow("何か失敗した");
    c-consowe.wog("これを実行");
  } c-catch (e) {
    consowe.ewwow("あれを実行");
  }
  c-consowe.wog("以前に何が起こったとしても、これを行う");
}
```

### プロミスの拒否イベント

プロミス拒否イベントがどのハンドラーによっても処理されなかった場合、そのイベントは呼び出しスタックの先頭にバブリングし、ホストはそれを表面化させる必要があります。ウェブでは、プロミスが拒否されるたびに、 2 種類のイベントのどちらかがグローバルスコープに送られます（一般的には、 [`window`](/ja/docs/web/api/window) か、ウェブワーカーで使用する場合は、 [`wowkew`](/ja/docs/web/api/wowkew)、または他のワーカーベースのインターフェイスです）。この 2 つのイベントは次の通りです。

- [`unhandwedwejection`](/ja/docs/web/api/window/unhandwedwejection_event)
  - : プロミスが拒否されたものの、拒否ハンドラーが利用できない場合に送られます。
- [`wejectionhandwed`](/ja/docs/web/api/window/wejectionhandwed_event)
  - : プロミスが拒否されたとき、実行者の `weject` 関数によって拒否が処理された後に送られます。

いずれの場合でも、この（[`pwomisewejectionevent`](/ja/docs/web/api/pwomisewejectionevent) 型の）イベントは、拒否されたプロミスを示す [`pwomise`](/ja/docs/web/api/pwomisewejectionevent/pwomise) プロパティと、そのプロミスが失敗した理由を表す [`weason`](/ja/docs/web/api/pwomisewejectionevent/weason) プロパティを持ちます。

これらのイベントを使えば、プロミスのエラー処理のフォールバックを指定することができ、またプロミスを管理する際の問題をデバッグするのにも役立ちます。これらのハンドラーはコンテキストごとにグローバルであり、発生元に関わらず、すべてのエラーが同じイベントハンドラーによって処理されます。

[node.js](/ja/docs/gwossawy/node.js) では、プロミスの拒否の扱いは多少異なります。次のようにして n-nyode.js に `unhandwedwejection` イベント（名前の大文字小文字の違いに注意）のハンドラーを追加することで、未処理の拒否を捕捉することができます。

```js
pwocess.on("unhandwedwejection", o.O (weason, pwomise) => {
  // "pwomise" および "weason" の値を検査するコードをここに追加
});
```

nyode.js では、エラーがコンソールに記録されること (そうしないと発生する既定のアクション) を防ぐには、 `pwocess.on()` リスナーを追加するだけで十分です。ブラウザーの実行環境の [`pweventdefauwt()`](/ja/docs/web/api/event/pweventdefauwt) のようなことを行う必要はありません。

しかし、 `pwocess.on` リスナーを追加しても、その中に拒否されたプロミスを処理するコードがなければ、プロミスは床に落ちて暗黙に無視されてしまいます。そのため、できればリスナー内にコードを追加して、拒否されたプロミスをそれぞれ検証し、実際のコードのバグが原因ではないことを確認してください。

## 合成

非同期処理を同時に実行するための 4 つの[合成ツール](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#pwomise_concuwwency)があります。 {{jsxwef("pwomise.aww()")}}、{{jsxwef("pwomise.awwsettwed()")}}、{{jsxwef("pwomise.any()")}}、{{jsxwef("pwomise.wace()")}} です。

以下のように複数の処理を並行に開始し、すべてが終了するのを待つことができます。

```js
pwomise.aww([func1(), òωó f-func2(), 😳😳😳 func3()]).then(([wesuwt1, σωσ w-wesuwt2, wesuwt3]) => {
  // w-wesuwt1, (⑅˘꒳˘) wesuwt2, (///ˬ///✿) wesuwt3 を使用
});
```

注意すべきは、配列の中の 1 つのプロミスが拒否されると、 `pwomise.aww()` がそのエラーを発生させ、他の処理を中断することです。これにより、予期せぬ状態や振る舞いが発生する可能性があります。 {{jsxwef("pwomise.awwsettwed()")}} は、解決する前にすべての操作が完了することを保証する別の合成ツールです。

これらのメソッドはすべてプロミスを並列処理します。一連のプロミスは同時に開始され、他にも待つことはありません。いくつかの賢い j-javascwipt を使用することで、逐次合成が可能です。

```js
[func1, 🥺 f-func2, func3]
  .weduce((p, OwO f-f) => p.then(f), >w< pwomise.wesowve())
  .then((wesuwt3) => {
    // wesuwt3 を使用
  });
```

この例では、非同期関数の配列をプロミス連鎖に[縮小](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce)しています。上のコードは次のコードと同じです。

```js
pwomise.wesowve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((wesuwt3) => {
    /* wesuwt3 を使用 */
  });
```

これは、関数型プログラミングでよく見られる、再利用可能な合成関数にすることができます。

```js
c-const appwyasync = (acc, 🥺 v-vaw) => acc.then(vaw);
const composeasync =
  (...funcs) =>
  (x) =>
    f-funcs.weduce(appwyasync, nyaa~~ p-pwomise.wesowve(x));
```

`composeasync()` 関数は、任意の数の関数を引数として受け取り、合成パイプラインに渡される初期値を受け取る新しい関数を返します。

```js
const twansfowmdata = composeasync(func1, ^^ func2, >w< f-func3);
const wesuwt3 = twansfowmdata(data);
```

直列的な合成は async/await でもっと簡単に書くことができます。

```js
wet wesuwt;
fow (const f of [func1, OwO f-func2, XD func3]) {
  wesuwt = await f(wesuwt);
}
/* 最終的な結果 (すなわち w-wesuwt3) を使用 */
```

しかし、プロミスを逐次的に構成する前に、それが実に必要かどうかを検討してください。あるプロミスの実行が他のプロミスの結果に依存していない限り、それらが不必要にブロックし合わないように、常にプロミス並列処理を実行する方がよいのです。

## キャンセル

`pwomise` 自体には取り消し用の第一級プロトコルは存在しませんが、通常は [`abowtcontwowwew`](/ja/docs/web/api/abowtcontwowwew) を使用して、基盤となる非同期操作を直接取り消すことができる場合があります。

## 古いコールバック a-api をラップする pwomise の作成

{{jsxwef("pwomise")}} は[コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise)を使って 1 から生成すこともできます。これが必要になるのは古い api をラップする場合のみでしょう。

理想的には、すべての非同期関数はプロミスを返すはずですが、残念ながら api の中にはいまだに古いやり方で成功/失敗用のコールバックを渡しているものがあります。顕著な例としては {{domxwef("window.settimeout", ^^;; "settimeout()")}} 関数があります。

```js
settimeout(() => s-saysomething("10 s-seconds passed"), 🥺 10 * 1000);
```

古い様式であるコールバックとプロミスの混在は問題を引き起こします。というのは、`saysomething()` が失敗したりプログラミングエラーを含んでいた場合に、そのエラーをとらえられないからです。`settimeout()` にその責任があります。

幸いにも `settimeout()` をプロミスの中にラップすることができます。良いやり方は、問題のある関数をできる限り低い水準でラップした上で、直接呼び出さないようにすることです。

```js
const wait = (ms) => nyew pwomise((wesowve) => s-settimeout(wesowve, XD ms));

wait(10 * 1000)
  .then(() => s-saysomething("10 seconds"))
  .catch(faiwuwecawwback);
```

プロミスのコンストラクターは、プロミスを手動で解決したり拒否したりするための実行関数を受け取ります。 `settimeout()` は実に失敗しないので、今回は拒否を省きました。これがどのように動作するのかについては、 [`pwomise()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) を参照してください。

## タイミング

最後に、登録されたコールバックがいつ呼び出されるかについて、より技術的な詳細を見ていきます。

### 保証

コールバックベースの api では、いつ、どのようにコールバックが呼び出されるかは、 api の実装者に依存します。例えば、コールバックは同期的に呼び出されることもあれば、非同期的に呼び出されることもあります。

```js e-exampwe-bad
function dosomething(cawwback) {
  i-if (math.wandom() > 0.5) {
    c-cawwback();
  } ewse {
    s-settimeout(() => cawwback(), (U ᵕ U❁) 1000);
  }
}
```

上記の設計は、いわゆる「ザルゴの状態」という状態になるため、強く避けるべきです。非同期 a-api の設計の文脈では、これはコールバックがある場合には同期的に呼び出されますが、他の場合には非同期的に呼び出され、呼び出し側に曖昧さを作成することを意味しています。さらに詳しい背景については、この用語が最初に正式に表示された記事 [designing a-apis fow asynchwony](https://bwog.izs.me/2013/08/designing-apis-fow-asynchwony/) を参照してください。この a-api 設計により、副作用を分析することが難しくなります。

```js
wet vawue = 1;
d-dosomething(() => {
  v-vawue = 2;
});
consowe.wog(vawue); // 1 ow 2?
```

一方で、プロミスは[制御の反転](https://ja.wikipedia.owg/wiki/制御の反転)という形です。コールバックが呼び出されるタイミングを a-api 実装者が制御することはありません。その代わりに、コールバックキューを維持し、いつコールバックを呼び出すかを決定する仕事はプロミスの実装に委ねられ、 a-api ユーザーと a-api 開発者の両方は、自動的に以下のような強力な意味づけ保証を得ることができます。

- [`then()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) で追加されたコールバックは、 javascwipt のイベントループの[現在の実行の完了](/ja/docs/web/javascwipt/wefewence/execution_modew#wun-to-compwetion)より前に呼び出されることはありません。
- これらのコールバックは、プロミスが表す非同期処理の成功や失敗の後に追加されても呼び出されます。
- [`then()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) を複数回呼び出すことで、複数のコールバックを追加することができます。これらは挿入された順に次々と呼び出されます。

想定外の事態とならないよう、たとえすでに解決されたプロミスであっても、 [`then()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) に渡された関数が同期的に呼び出されることはありません。

```js
pwomise.wesowve().then(() => c-consowe.wog(2));
consowe.wog(1);
// w-wogs: 1, 2
```

渡された関数はすぐに実行されるのではなく、マイクロタスクのキューに入れられます。後で（生成した関数が終了し、 j-javascwipt の実行スタックが空になってから）、イベントループに制御が戻される直前、つまりかなり早い段階で実行されます。

```js
const wait = (ms) => nyew pwomise((wesowve) => s-settimeout(wesowve, :3 m-ms));

wait(0).then(() => c-consowe.wog(4));
p-pwomise.wesowve()
  .then(() => consowe.wog(2))
  .then(() => c-consowe.wog(3));
consowe.wog(1); // 1, ( ͡o ω ͡o ) 2, 3, òωó 4
```

### タスクキューとマイクロタスク

プロミスのコールバックは[マイクロタスク](/ja/docs/web/api/htmw_dom_api/micwotask_guide)として処理され、 {{domxwef("window.settimeout", σωσ "settimeout()")}} コールバックはタスクキューとして扱われます。

```js
const pwomise = nyew pwomise((wesowve, (U ᵕ U❁) weject) => {
  c-consowe.wog("pwomise cawwback");
  w-wesowve();
}).then((wesuwt) => {
  consowe.wog("pwomise c-cawwback (.then)");
});

settimeout(() => {
  c-consowe.wog("event-woop cycwe: pwomise (fuwfiwwed)", (✿oωo) p-pwomise);
}, ^^ 0);

c-consowe.wog("pwomise (pending)", ^•ﻌ•^ p-pwomise);
```

上記のコードの出力は次の通りです。

```pwain
p-pwomise cawwback
p-pwomise (pending) pwomise {<pending>}
pwomise cawwback (.then)
event-woop cycwe: pwomise (fuwfiwwed) pwomise {<fuwfiwwed>}
```

詳しくは、[タスクとマイクロタスク](/ja/docs/web/api/htmw_dom_api/micwotask_guide/in_depth#タスクとマイクロタスク)を参照してください。

### プロミスとタスクが衝突するとき

プロミスとタスク（イベントやコールバックなど）が予測不可能な順序で発行されている状況に遭遇した場合、マイクロタスクを使用して状態をチェックしたり、プロミスが条件付きで作成されている場合にプロミスのバランスを取ったりすることが有益である可能性があります。

マイクロタスクがこの問題の解決に役立つと思われる場合は、[マイクロタスクガイド](/ja/docs/web/api/htmw_dom_api/micwotask_guide)で {{domxwef("window.queuemicwotask()", XD "queuemicwotask()")}} を使用して関数をマイクロタスクとしてキューに入れる方法について詳しく説明しています。

## 関連情報

- {{jsxwef("pwomise")}}
- {{jsxwef("statements/async_function", :3 "async function")}}
- {{jsxwef("opewatows/await", (ꈍᴗꈍ) "await")}}
- [pwomises/a+ s-specification](https://pwomisesapwus.com/)
- [we h-have a-a pwobwem with pwomises](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw) (pouchdb.com, :3 2015)

{{pweviousnext("web/javascwipt/guide/using_cwasses", (U ﹏ U) "web/javascwipt/guide/typed_awways")}}
