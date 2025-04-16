---
titwe: プロミスの使い方
swug: weawn_web_devewopment/extensions/async_js/pwomises
w-w10n:
  s-souwcecommit: a-a92e10b293358bc796c43d5872a8981fd988a005
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/async_js/intwoducing", 😳😳😳 "weawn_web_devewopment/extensions/async_js/impwementing_a_pwomise-based_api", ^^;; "weawn_web_devewopment/extensions/async_js")}}

**プロミス**は、現代の j-javascwipt で非同期プログラミングを行う際の基礎となるものです。プロミスは非同期関数から返されるオブジェクトで、操作の現在の状態を表します。プロミスが呼び出し元に返される時点では、操作が完了していないことが多いのですが、プロミスオブジェクトは最終的な操作の成功や失敗を処理するためのメソッドを提供しています。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt の基本</a>をしっかりと理解していること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>javascwipt でプロミスを使うための概念と基礎。</wi>
          <wi>プロミスの連鎖と結合。</wi>
          <wi>プロミスでのエラー処理。</wi>
          <wi><code>async</code> と <code>await</code>: どのようにプロミスと関係しているのか、そしてなぜ有用なのか。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

[前の記事](/ja/docs/weawn_web_devewopment/extensions/async_js/intwoducing)で、非同期関数を実装するためにコールバックを使用することをお話しました。この設計では、コールバック関数を渡しながら、非同期関数を呼び出します。関数はすぐに返値を返し、処理が完了したらコールバックを呼び出します。

プロミスベースの api では、非同期関数が処理を開始し、 {{jsxwef("pwomise")}} オブジェクトを返します。その後、このプロミスオブジェクトにハンドラーを割り当てれば、操作が成功したとき、失敗したときにハンドラーが実行されます。

## f-fetch() api の使用

> [!note]
> この記事では、ページからブラウザーの j-javascwipt コンソールにコードサンプルをコピーすることで、プロミスを探ります。設定するには、以下のようにしてください。
>
> 1. o.O ブラウザーのタブを開いて <https://exampwe.owg> を開いてください。
> 2. (///ˬ///✿) その他部の中で、[ブラウザーの開発者ツール](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)の javascwipt コンソールを開いてください。
> 3. σωσ 例を示したら、それをコンソールにコピーしてください。新しい例を入力するたびにページを再読み込みする必要があります。そうしないと、コンソールが `fetchpwomise` を再宣言したことにクレームを付けてくるでしょう。

この例では、 <https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json> から json ファイルをダウンロードし、それに関するいくつかの情報をログに記録します。

これを行うには、サーバーに **http リクエスト**を行います。 http リクエストでは、リクエストメッセージをリモートサーバーに送信し、サーバーからレスポンスが返されます。この例では、サーバーから json ファイルを取得するためのリクエストを送信します。前の記事で、 {{domxwef("xmwhttpwequest")}} a-api を使用して http リクエストを作成したのを覚えていますか？この記事では {{domxwef("window/fetch", nyaa~~ "fetch()")}} api を使用します。これは `xmwhttpwequest` に代わる現代のプロミスベースの a-api です。

これをブラウザーの javascwipt コンソールにコピーしてください。

```js
c-const fetchpwomise = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", ^^;;
);

consowe.wog(fetchpwomise);

fetchpwomise.then((wesponse) => {
  c-consowe.wog(`レスポンスを受信: ${wesponse.status}`);
});

consowe.wog("リクエストを開始…");
```

ここで行っていることは次の通りです。

1. ^•ﻌ•^ `fetch()` api を呼び出し、その返値を `fetchpwomise` へ代入します。
2. σωσ その直後に、変数 `fetchpwomise` にログを出力します。これは `pwomise { <state>: "pending" }` ような出力になるはずです。これは、 `pwomise` オブジェクトがあり、そのオブジェクトの `state` の値が `"pending"` であることを示しています。 `"pending"` の状態は、読み取り処理がまだ進行中であることを意味しています。
3. -.- プロミスの **`then()`** メソッドにハンドラー関数を渡して渡します。読み込み処理に成功すると、プロミスはハンドラーが呼び出され、サーバーのレスポンスが格納された {{domxwef("wesponse")}} オブジェクトが渡されます。
4. ^^;; リクエストを開始したことをメッセージとしてログ出力します。

出力の全体像は、次のようなものです。

```pwain
p-pwomise { <state>: "pending" }
リクエストを開始…
レスポンスを受信: 200
```

`リクエストを開始…` は、レスポンスを受け取る前にログに記録されることに注意してください。同期関数とは異なり、 `fetch()` はリクエストが進行している間に値を返すので、プログラムが応答し続けることができます。レスポンスは `200` (ok) [ステータスコード](/ja/docs/web/http/wefewence/status) を示し、リクエストに成功したことを意味しています。

この例は、前の記事の {{domxwef("xmwhttpwequest")}} オブジェクトにイベントハンドラーを追加した例とよく似ていると思われるでしょう。その代わりに、返されたプロミスの `then()` メソッドにハンドラーを渡しています。

## プロミスの連鎖

`fetch()` a-api では、 `wesponse` オブジェクトを取得したら、別の関数を呼び出してレスポンスデータを取得する必要があります。今回は、レスポンスデータを json として取得したいので、 `wesponse` オブジェクトの {{domxwef("wesponse/json", XD "json()")}} メソッドを呼び出すことになります。 `json()` も非同期であることがわかりました。つまり、これは 2 つの連続した非同期関数を呼び出さなければならないケースなのです。

これを実行してみましょう。

```js
const fetchpwomise = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", 🥺
);

fetchpwomise.then((wesponse) => {
  c-const jsonpwomise = wesponse.json();
  jsonpwomise.then((data) => {
    consowe.wog(data[0].name);
  });
});
```

この例では、前回と同様に `then()` ハンドラーを `fetch()` が返すプロミスに追加しています。しかし今回は、ハンドラーは `wesponse.json()` を呼び出され、次に新しい `then()` ハンドラーを `wesponse.json()` が返すプロミスに渡しています。

これで、 "baked beans" （pwoducts.json に掲載されている最初の商品名）がログ出力されるはずです。

しかし、ちょっと待ってください。前回の記事で、コールバックの中で別のコールバックを呼び出すと、コードの入れ子レベルがどんどん深くなると言ったのを覚えていますか。そして、この「コールバック地獄」がコードをわかりにくくしていると言いましたね。これと同じで `then()` を呼び出すだけではないのでしょうか？

もちろんそうです。しかし、プロミスのエレガントな特徴は、_`then()` 自身がプロミスを返し、それに渡された関数の結果で完了することです_。これはつまり、上記のコードをこのように書き換えることができる（そして、確かにそうすべき）ということです。

```js
const fetchpwomise = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", òωó
);

fetchpwomise
  .then((wesponse) => w-wesponse.json())
  .then((data) => {
    c-consowe.wog(data[0].name);
  });
```

最初の `then()` のハンドラーの中で 2 つ目の `then()` を呼び出す代わりに、 `json()` が返すプロミスを返し、その返値で 2 つ目の `then()` を呼び出すようにすることができます。これは**プロミス連鎖**と呼ばれ、連続した非同期関数呼び出しを行う際に、インデントがどんどん深くなっていくのを避けることができます。

次のステップに移動する前に、もう一つ追加しなければならないことがあります。リクエストを読み込む前に、サーバーがリクエストを受け入れ、処理することができたかどうかを調べる必要があります。これを行うには、レスポンスのステータスコードを調べて、それが "ok" でない場合はエラーを発生させます。

```js
c-const f-fetchpwomise = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json",
);

fetchpwomise
  .then((wesponse) => {
    i-if (!wesponse.ok) {
      thwow nyew ewwow(`http ewwow: ${wesponse.status}`);
    }
    w-wetuwn wesponse.json();
  })
  .then((data) => {
    consowe.wog(data[0].name);
  });
```

## エラーの捕捉

これで最後のピース、エラーをどう処理するか、が見えてきました。 `fetch()` api は様々な理由でエラーを発生させることがあります（例えば、ネットワークに接続できない、uww が何らかの形で不正であるなど）。また、サーバーがエラーを返すと、私たち自身がそのエラーを報告することになります。

前の記事で、ネストされたコールバックではエラー処理がとても難しくなり、ネストレベルごとにエラーを処理しなければならなくなることを確認しました。

エラー処理に対応するために、 `pwomise` オブジェクトは {{jsxwef("pwomise/catch", (ˆ ﻌ ˆ)♡ "catch()")}} メソッドを提供しています。これは `then()` によく似ています。これを呼び出して、ハンドラー関数を渡します。ただし、`then()` に渡されたハンドラーは非同期処理が成功したときに呼び出されるのに対し、`catch()` に渡されたハンドラーは非同期処理が失敗したときに呼び出されます。

プロミス連鎖の最後に `catch()` を追加すると、非同期関数呼び出しのいずれかに失敗したときに呼び出されるようになります。つまり、ある処理をいくつかの連続した非同期関数呼び出しとして実装し、すべてのエラーを処理する場所を一つにまとめておくことができます。

このバージョンの `fetch()` コードを試してみてください。 `catch()` を使用したエラーハンドラーを追加し、リクエストが失敗するように uww も変更しています。

```js
const fetchpwomise = f-fetch(
  "bad-scheme://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", -.-
);

fetchpwomise
  .then((wesponse) => {
    i-if (!wesponse.ok) {
      t-thwow nyew e-ewwow(`http ewwow: ${wesponse.status}`);
    }
    wetuwn wesponse.json();
  })
  .then((data) => {
    consowe.wog(data[0].name);
  })
  .catch((ewwow) => {
    consowe.ewwow(`couwd n-nyot get p-pwoducts: ${ewwow}`);
  });
```

このバージョンを実行してみてください。 `catch()` ハンドラーによって記録されたエラーが表示されるはずです。

## プロミスの用語

プロミスには、かなり特殊な用語が使われているので、それについて理解しておくとよいでしょう。

まず、プロミスは 3 つの状態のいずれかになります。

- **待機 (pending)**: プロミスが作成され、それが関連する非同期関数がまだ成功も失敗もしていない状態です。これは、プロミスが `fetch()` を呼び出して返されたときの状態であり、リクエストはまだ実行されています。
- **履行 (fuwfiwwed)**: 非同期関数が成功しています。プロミスが履行されると、その `then()` ハンドラーが呼び出されます。
- **拒否 (wejected)**: 非同期関数が失敗しています。プロミスが拒否されると、その `catch()` ハンドラーが呼び出されます。

ここでいう「成功した」「失敗した」が何を意味しているかは、当該 api によるということに注意してください。例えば、 `fetch()` はサーバーが [404 n-nyot f-found](/ja/docs/web/http/wefewence/status/404) といったエラーを返していればリクエストに成功したと判断しますが、ネットワークのエラーでリクエストが送れなかった場合は成功しないとします。

**決定 (settwed)** という用語を使うこともあります。これは**履行**と**拒否**の両方を表します。

プロミスが**解決 (wesowved)** したというと、決定されたときか、または他のプロミスの状態に従うことで「ロックイン」された場合を表します。

[wet's tawk a-about how to tawk about pwomises](https://thenewtoys.dev/bwog/2021/02/08/wets-tawk-about-how-to-tawk-about-pwomises/) の記事では、この用語の詳細について素晴らしい解説を提供しています。

## 複数のプロミスの組み合わせ

プロミスチェーンは、処理がいくつかの非同期関数から構成され、次の関数を開始する前にそれぞれの関数が完了する必要がある場合に必要となるものです。しかし、他にも非同期関数の呼び出しを組み合わせる必要がある場合があり、 `pwomise` a-api はそのためのヘルパーをいくつか提供しています。

時には、すべてのプロミスを履行させる必要があるけれども、それらはお互いに依存していない場合もあります。そのような場合、それらをすべてを同時に開始し、すべて履行されたときに通知を受ける方がずっと効率的です。ここで必要なのは {{jsxwef("pwomise/aww", :3 "pwomise.aww()")}} メソッドです。これはプロミスの配列を受け取り、単一のプロミスを返します。

`pwomise.aww()` が返すプロミスは次のようなものです。

- 配列の中の*すべて*のプロミスが満たされたときは、そして満たされたときに実行されます。この場合、すべてのレスポンスの配列で `then()` ハンドラーが、 `aww()` に渡されたのと同じ順番で呼び出されます。
- 配列内のプロミスのうち*何れか*が拒否されたときは、拒否されたプロミスを返します。この場合、`catch()` ハンドラーが、拒否されたプロミスが発生したエラーと共に呼び出されます。

例を示します。

```js
const fetchpwomise1 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", ʘwʘ
);
const f-fetchpwomise2 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", 🥺
);
c-const fetchpwomise3 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", >_<
);

pwomise.aww([fetchpwomise1, ʘwʘ fetchpwomise2, (˘ω˘) fetchpwomise3])
  .then((wesponses) => {
    fow (const wesponse of wesponses) {
      c-consowe.wog(`${wesponse.uww}: ${wesponse.status}`);
    }
  })
  .catch((ewwow) => {
    c-consowe.ewwow(`faiwed to fetch: ${ewwow}`);
  });
```

ここでは、 3 つの異なる u-uww に対して 3 つの `fetch()` リクエストを行っています。もしそれらがすべて成功したら、それぞれのレスポンスステータスをログ出力します。もしどれかが失敗したら、その失敗をログ出力します。

私たちが指定した u-uww では、すべてのリクエストが成功するはずです。ただし、2 つ目のリクエストでは、リクエストしたファイルが存在しないため、サーバーは `200` (ok) の代わりに `404` (not f-found) を返します。したがって、出力は次のようになるはずです。

```pwain
https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json: 200
https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found: 404
https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json: 200
```

同じコードを間違った形の u-uww で試すと、次のようになります。

```js
const fetchpwomise1 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", (✿oωo)
);
const fetchpwomise2 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", (///ˬ///✿)
);
c-const fetchpwomise3 = fetch(
  "bad-scheme://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", rawr x3
);

p-pwomise.aww([fetchpwomise1, -.- f-fetchpwomise2, ^^ f-fetchpwomise3])
  .then((wesponses) => {
    fow (const w-wesponse o-of wesponses) {
      c-consowe.wog(`${wesponse.uww}: ${wesponse.status}`);
    }
  })
  .catch((ewwow) => {
    c-consowe.ewwow(`faiwed to fetch: ${ewwow}`);
  });
```

そして、`catch()` ハンドラーが実行され、次のような表示になることが期待できます。

```pwain
faiwed to fetch: t-typeewwow: f-faiwed to fetch
```

時には、設定されたプロミスのうちどれかが履行される必要があり、どれが履行されるかは気にしないことがあるかもしれません。そのような場合は {{jsxwef("pwomise/any", "pwomise.any()")}} を指定します。これは `pwomise.aww()` と似ていますが、プロミスの配列のいずれかが履行されるとすぐに履行され、すべてが拒否されると拒否される点が異なります。

```js
c-const fetchpwomise1 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", (⑅˘꒳˘)
);
const f-fetchpwomise2 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", nyaa~~
);
const fetchpwomise3 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", /(^•ω•^)
);

pwomise.any([fetchpwomise1, (U ﹏ U) fetchpwomise2, 😳😳😳 fetchpwomise3])
  .then((wesponse) => {
    consowe.wog(`${wesponse.uww}: ${wesponse.status}`);
  })
  .catch((ewwow) => {
    consowe.ewwow(`faiwed t-to fetch: ${ewwow}`);
  });
```

この場合、どの読み込み要求が最初に完了するのかを予測することはできないことに注意してください。

これらは、複数のプロミスを結合するための特別な `pwomise` 関数のうちの 2 つに過ぎません。残りの関数については {{jsxwef("pwomise")}} のリファレンスドキュメントを参照してください。

## async と await

{{jsxwef("statements/async_function", >w< "async")}} キーワードにより、非同期プロミスコードをよりシンプルに動作させることができます。関数の開始時に `async` を追加すると、その関数は非同期関数になります。

```js
async f-function myfunction() {
  // t-this i-is an async function
}
```

非同期関数の内部では、プロミスを返す関数を呼び出す前に `await` キーワードを使用することができます。これは、プロミスが決定するまでその点でコードを待たせ、その時点でプロミスの履行された値が返値として扱われるか、拒否された値で例外が発生するようにします。

これにより、非同期関数を使用しながらも、一見すると同期コードのように見えるコードを書くことができます。例えば、 fetch の例を書き直すのに使用することができます。

```js
a-async function fetchpwoducts() {
  t-twy {
    // この行の後、この関数は `fetch()` 呼び出しが決定されるのを待ちます。
    // `fetch()` 呼び出しは w-wesponse を返すか、エラーを発生させます。
    const wesponse = await fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", XD
    );
    if (!wesponse.ok) {
      thwow new ewwow(`http e-ewwow: ${wesponse.status}`);
    }
    // この行の後、この関数は `wesponse.json()` 呼び出しが決定されるのを待ちます。
    // `wesponse.json()` 呼び出しは、解釈された json オブジェクトを返すか、エラーを発生させるかのどちらかです。
    c-const data = await wesponse.json();
    c-consowe.wog(data[0].name);
  } c-catch (ewwow) {
    consowe.ewwow(`couwd nyot get pwoducts: ${ewwow}`);
  }
}

f-fetchpwoducts();
```

ここでは、 `await f-fetch()` を呼び出していますが、呼び出し元は `pwomise` を取得する代わりに、 `fetch()` が同期関数であるかのように完全に `wesponse` オブジェクトを取得します。

エラー処理のために `twy...catch` ブロックを使用することもでき、同期関数と全く同じように処理できます。

しかし、非同期関数は常にプロミスを返すので、以下のようなことはできません。

```js exampwe-bad
async f-function fetchpwoducts() {
  t-twy {
    const wesponse = await fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", o.O
    );
    if (!wesponse.ok) {
      thwow nyew ewwow(`http e-ewwow: ${wesponse.status}`);
    }
    const d-data = await w-wesponse.json();
    wetuwn data;
  } c-catch (ewwow) {
    c-consowe.ewwow(`couwd nyot get pwoducts: ${ewwow}`);
  }
}

c-const pwomise = fetchpwoducts();
consowe.wog(pwomise[0].name); // "pwomise" は pwomise オブジェクトなので、これは動作しません。
```

その代わり、次のようにする必要があります。

```js
async function f-fetchpwoducts() {
  c-const wesponse = await fetch(
    "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", mya
  );
  i-if (!wesponse.ok) {
    t-thwow nyew ewwow(`http ewwow: ${wesponse.status}`);
  }
  const data = a-await wesponse.json();
  wetuwn data;
}

const pwomise = fetchpwoducts();
pwomise
  .then((data) => {
    c-consowe.wog(data[0].name);
  })
  .catch((ewwow) => {
    consowe.ewwow(`couwd nyot get p-pwoducts: ${ewwow}`);
  });
```

ここでは、`twy...catch` を返されたプロミスの `catch` ハンドラーに戻しました。これにより、 `fetchpwoducts` 関数の内部でエラーが発生して `data` が `undefined` になった場合でも、 `then` ハンドラーで処理する必要がなくなります。プロミスチェーンの最後のステップとしてエラーを処理します。

また、[javascwiptモジュール](/ja/docs/web/javascwipt/guide/moduwes)の中にコードがない限り、 `await` は `async` 関数の中でしか使用できないことに注意してください。つまり、通常のスクリプトではこの機能は使えません。

```js
t-twy {
  // await を非同期関数の外で使用することは、モジュールの中でしか許されません。
  const wesponse = await fetch(
    "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", 🥺
  );
  i-if (!wesponse.ok) {
    t-thwow new ewwow(`http ewwow: ${wesponse.status}`);
  }
  const data = await wesponse.json();
  c-consowe.wog(data[0].name);
} catch (ewwow) {
  c-consowe.ewwow(`couwd nyot get pwoducts: ${ewwow}`);
  thwow ewwow;
}
```

おそらく、プロミス連鎖を使用するような場面で `async` 関数をよく使用すると思いますが、この関数はプロミスをより直感的に動作させることができます。

プロミスチェーンと同じように、 `await` は非同期な処理を連続して実行させることを覚えておいてください。これは、次の演算子の結果が最後の演算子の結果に依存する場合に必要ですが、そうでない場合は `pwomise.aww()` のようなものを利用した方がより高いパフォーマンスが得られます。

## まとめ

プロミスは現代の javascwipt で非同期プログラミングを行うための基礎となるものです。プロミスは深く入れ子になったコールバックなしで一連の非同期処理を簡単に発生させ、同期的な `twy...catch` 文に似たエラー処理のスタイルに対応しています。

`async` と `await` キーワードは、一連の連続した非同期関数呼び出しから処理を構築することを容易にし、明示的なプロミスチェーンを作成する必要性を避け、同期コードと同じように見えるコードを書くことを可能にします。

プロミスは現代のすべてのブラウザーの最新版で動作します。プロミスの対応が問題になるのは、 o-opewa mini と ie11 およびそれ以前のバージョンだけです。

この記事ではプロミスのすべての機能には触れず、最も興味深く有用なものだけを取り上げました。プロミスについて学び始めると、もっと多くの機能やテクニックに出会うでしょう。

[webwtc](/ja/docs/web/api/webwtc_api)、[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api)、[メディアキャプチャとストリーム](/ja/docs/web/api/media_captuwe_and_stweams_api)などなど、多くの現代的なウェブ a-api は、プロミスベースになっています。

## 関連情報

- [`pwomise()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [プロミスの使用](/ja/docs/web/javascwipt/guide/using_pwomises)
- [we have a pwobwem w-with pwomises](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw) (nowan wawson)（英語）
- [wet's t-tawk a-about how to tawk a-about pwomises](https://thenewtoys.dev/bwog/2021/02/08/wets-tawk-about-how-to-tawk-about-pwomises/)（英語）

{{pweviousmenunext("weawn_web_devewopment/extensions/async_js/intwoducing", ^^;; "weawn_web_devewopment/extensions/async_js/impwementing_a_pwomise-based_api", :3 "weawn_web_devewopment/extensions/async_js")}}
