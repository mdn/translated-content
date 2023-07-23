---
title: プロミスの使い方
slug: Learn/JavaScript/Asynchronous/Promises
l10n:
  sourceCommit: 4f6ba2f5a1615fe155292cac416c7ab6b9d711ec
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

**プロミス**は、現代の JavaScript で非同期プログラミングを行う際の基礎となるものです。プロミスは非同期関数から返されるオブジェクトで、操作の現在の状態を表します。プロミスが呼び出し元に返される時点では、操作が完了していないことが多いのですが、プロミスオブジェクトは最終的な操作の成功や失敗を処理するためのメソッドを提供しています。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、イベント処理を含む JavaScript の基本をそれなりに理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>JavaScript でプロミスを使用する方法を理解する。</td>
    </tr>
  </tbody>
</table>

前の記事で、非同期関数を実装するためにコールバックを使用することをお話しました。この設計では、コールバック関数を渡しながら、非同期関数を呼び出します。関数はすぐに返値を返し、処理が完了したらコールバックを呼び出します。

プロミスベースの API では、非同期関数が処理を開始し、{{jsxref("Promise")}}オブジェクトを返します。その後、このプロミスオブジェクトにハンドラーを割り当てれば、操作が成功したとき、失敗したときにハンドラーが実行されます。

## fetch() API の使用

> **メモ:** この記事では、ページからブラウザーの JavaScript コンソールにコードサンプルをコピーすることで、プロミスを探ります。設定するには、以下のようにしてください。
>
> 1. ブラウザーのタブを開いて <https://example.org> を開いてください。
> 2. その他部の中で、[ブラウザーの開発者ツール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)の JavaScript コンソールを開いてください。
> 3. 例を示したら、それをコンソールにコピーしてください。新しい例を入力するたびにページを再読み込みする必要があります。そうしないと、コンソールが `fetchPromise` を再宣言したことにクレームを付けてくるでしょう。

この例では、 <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> から JSON ファイルをダウンロードし、それに関するいくつかの情報をログに記録します。

これを行うには、サーバーに **HTTP リクエスト**を行います。 HTTP リクエストでは、リクエストメッセージをリモートサーバーに送信し、サーバーからレスポンスが返されます。この例では、サーバーから JSON ファイルを取得するためのリクエストを送信します。前の記事で、 {{domxref("XMLHttpRequest")}} API を使用して HTTP リクエストを作成したのを覚えていますか？この記事では {{domxref("fetch", "fetch()")}} API を使用します。これは `XMLHttpRequest` に代わる現代のプロミスベースの API です。

これをブラウザーの JavaScript コンソールにコピーしてください。

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`レスポンスを受信: ${response.status}`);
});

console.log("リクエストを開始…");
```

ここで行っていることは次の通りです。

1. `fetch()` API を呼び出し、その返値を `fetchPromise` へ代入します。
2. その直後に、変数 `fetchPromise` にログを出力します。これは `Promise { <state>: "pending" }` ような出力になるはずです。これは、 `Promise` オブジェクトがあり、そのオブジェクトの `state` の値が `"pending"` であることを示しています。 `"pending"` の状態は、読み取り処理がまだ進行中であることを意味しています。
3. プロミスの **`then()`** メソッドにハンドラー関数を渡して渡します。読み込み処理に成功すると、プロミスはハンドラーが呼び出され、サーバーのレスポンスが格納された {{domxref("Response")}} オブジェクトが渡されます。
4. リクエストを開始したことをメッセージとしてログ出力します。

出力の全体像は、次のようなものです。

```
Promise { <state>: "pending" }
リクエストを開始…
レスポンスを受信: 200
```

`リクエストを開始...` は、レスポンスを受け取る前にログに記録されることに注意してください。同期関数とは異なり、 `fetch()` はリクエストが進行している間に値を返すので、プログラムが応答し続けることができます。レスポンスは `200` (OK) [ステータスコード](/ja/docs/Web/HTTP/Status) を示し、リクエストに成功したことを意味しています。

この例は、前の記事の {{domxref("XMLHttpRequest")}} オブジェクトにイベントハンドラーを追加した例とよく似ていると思われるでしょう。その代わりに、返されたプロミスの `then()` メソッドにハンドラーを渡しています。

## プロミスの連鎖

`fetch()` API では、`Response` オブジェクトを取得したら、別の関数を呼び出してレスポンスデータを取得する必要があります。今回は、レスポンスデータを JSON として取得したいので、 `Response` オブジェクトの {{domxref("Response/json", "json()")}} メソッドを呼び出すことになります。 `json()` も非同期であることがわかりました。つまり、これは 2 つの連続した非同期関数を呼び出さなければならないケースなのです。

これを実行してみましょう。

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
```

この例では、前回と同様に `then()` ハンドラーを `fetch()` が返すプロミスに追加しています。しかし今回は、ハンドラーは `response.json()` を呼び出され、次に新しい `then()` ハンドラーを `response.json()` が返すプロミスに渡しています。

これで、 "baked beans" （products.json に掲載されている最初の商品名）がログ出力されるはずです。

しかし、ちょっと待ってください。前回の記事で、コールバックの中で別のコールバックを呼び出すと、コードの入れ子レベルがどんどん深くなると言ったのを覚えていますか。そして、この「コールバック地獄」がコードをわかりにくくしていると言いましたね。これと同じで `then()` を呼び出すだけではないのでしょうか？

もちろんそうです。しかし、プロミスのエレガントな特徴は、_`then()` 自身がプロミスを返し、それに渡された関数の結果で完了することです_。これはつまり、上記のコードをこのように書き換えることができる（そして、確かにそうすべき）ということです。

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
```

最初の `then()` のハンドラーの中で 2 つ目の `then()` を呼び出す代わりに、 `json()` が返すプロミスを返し、その返値で 2 つ目の `then()` を呼び出すようにすることができます。これは**プロミス連鎖**と呼ばれ、連続した非同期関数呼び出しを行う際に、インデントがどんどん深くなっていくのを避けることができます。

次のステップに移動する前に、もう一つ追加しなければならないことがあります。リクエストを読み込む前に、サーバーがリクエストを受け入れ、処理することができたかどうかを調べる必要があります。これを行うには、レスポンスのステータスコードを調べて、それが "OK" でない場合はエラーを発生させます。

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
```

## エラーの捕捉

これで最後のピース、エラーをどう処理するか、が見えてきました。 `fetch()` API は様々な理由でエラーを発生させることがあります（例えば、ネットワークに接続できない、URL が何らかの形で不正であるなど）。また、サーバーがエラーを返すと、私たち自身がそのエラーを報告することになります。

前の記事で、ネストされたコールバックではエラー処理がとても難しくなり、ネストレベルごとにエラーを処理しなければならなくなることを確認しました。

エラー処理に対応するために、 `Promise` オブジェクトは {{jsxref("Promise/catch", "catch()")}} メソッドを提供しています。これは `then()` によく似ています。これを呼び出して、ハンドラー関数を渡します。ただし、`then()` に渡されたハンドラーは非同期処理が成功したときに呼び出されるのに対し、`catch()` に渡されたハンドラーは非同期処理が失敗したときに呼び出されます。

プロミス連鎖の最後に `catch()` を追加すると、非同期関数呼び出しのいずれかに失敗したときに呼び出されるようになります。つまり、ある処理をいくつかの連続した非同期関数呼び出しとして実装し、すべてのエラーを処理する場所を一つにまとめておくことができます。

このバージョンの `fetch()` コードを試してみてください。 `catch()` を使用したエラーハンドラーを追加し、リクエストが失敗するように URL も変更しています。

```js
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
```

このバージョンを実行してみてください。 `catch()` ハンドラーによって記録されたエラーが表示されるはずです。

## プロミスの用語

プロミスには、かなり特殊な用語が使われているので、それについて理解しておくとよいでしょう。

まず、プロミスは 3 つの状態のいずれかになります。

- **待機 (pending)**: プロミスが作成され、それが関連する非同期関数がまだ成功も失敗もしていない状態です。これは、プロミスが `fetch()` を呼び出して返されたときの状態であり、リクエストはまだ実行されています。
- **履行 (fulfilled)**: 非同期関数が成功しています。プロミスが履行されると、その `then()` ハンドラーが呼び出されます。
- **拒否 (rejected)**: 非同期関数が失敗しています。プロミスが拒否されると、その `catch()` ハンドラーが呼び出されます。

ここでいう「成功した」「失敗した」が何を意味しているかは、当該 API によるということに注意してください。例えば、 `fetch()` はサーバーが [404 Not Found](/ja/docs/Web/HTTP/Status/404) といったエラーを返していればリクエストに成功したと判断しますが、ネットワークのエラーでリクエストが送れなかった場合は成功しないとします。

**決定 (settled)** という用語を使うこともあります。これは**履行**と**拒否**の両方を表します。

プロミスが**解決 (resolved)** したというと、決定されたときか、または他のプロミスの状態に従うことで「ロックイン」された場合を表します。

[Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) の記事では、この用語の詳細について素晴らしい解説を提供しています。

## 複数のプロミスの組み合わせ

プロミスチェーンは、処理がいくつかの非同期関数から構成され、次の関数を開始する前にそれぞれの関数が完了する必要がある場合に必要となるものです。しかし、他にも非同期関数の呼び出しを組み合わせる必要がある場合があり、 `Promise` API はそのためのヘルパーをいくつか提供しています。

時には、すべてのプロミスを履行させる必要があるけれども、それらはお互いに依存していない場合もあります。そのような場合、それらをすべてを同時に開始し、すべて履行されたときに通知を受ける方がずっと効率的です。ここで必要なのは {{jsxref("Promise/all", "Promise.all()")}} メソッドです。これはプロミスの配列を受け取り、単一のプロミスを返します。

`Promise.all()` が返すプロミスは次のようなものです。

- 配列の中の*すべて*のプロミスが満たされたときは、そして満たされたときに実行されます。この場合、すべてのレスポンスの配列で `then()` ハンドラーが、 `all()` に渡されたのと同じ順番で呼び出されます。
- 配列内のプロミスのうち*何れか*が拒否されたときは、拒否されたプロミスを返します。この場合、`catch()` ハンドラーが、拒否されたプロミスが発生したエラーと共に呼び出されます。

例を示します。

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
```

ここでは、 3 つの異なる URL に対して 3 つの `fetch()` リクエストを行っています。もしそれらがすべて成功したら、それぞれのレスポンスステータスをログ出力します。もしどれかが失敗したら、その失敗をログ出力します。

私たちが指定した URL では、すべてのリクエストが成功するはずです。ただし、2 つ目のリクエストでは、リクエストしたファイルが存在しないため、サーバーは `200` (OK) の代わりに `404` (Not Found) を返します。したがって、出力は次のようになるはずです。

```
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

同じコードを間違った形の URL で試すと、次のようになります。

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
```

そして、`catch()` ハンドラーが実行され、次のような表示になることが期待できます。

```
Failed to fetch: TypeError: Failed to fetch
```

時には、設定されたプロミスのうちどれかが履行される必要があり、どれが履行されるかは気にしないことがあるかもしれません。そのような場合は {{jsxref("Promise/any", "Promise.any()")}} を指定します。これは `Promise.all()` と似ていますが、プロミスの配列のいずれかが履行されるとすぐに履行され、すべてが拒否されると拒否される点が異なります。

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
```

この場合、どの読み込み要求が最初に完了するのかを予測することはできないことに注意してください。

これらは、複数のプロミスを結合するための特別な `Promise` 関数のうちの 2 つに過ぎません。残りの関数については {{jsxref("Promise")}} のリファレンスドキュメントを参照してください。

## async と await

{{jsxref("Statements/async_function", "async")}} キーワードにより、非同期プロミスコードをよりシンプルに動作させることができます。関数の開始時に `async` を追加すると、その関数は非同期関数になります。

```js
async function myFunction() {
  // This is an async function
}
```

非同期関数の内部では、プロミスを返す関数を呼び出す前に `await` キーワードを使用することができます。これは、プロミスが決定するまでその点でコードを待たせ、その時点でプロミスの履行された値が返値として扱われるか、拒否された値で例外が発生するようにします。

これにより、非同期関数を使用しながらも、一見すると同期コードのように見えるコードを書くことができます。例えば、 fetch の例を書き直すのに使用することができます。

```js
async function fetchProducts() {
  try {
    // この行の後、この関数は `fetch()` 呼び出しが決定されるのを待ちます。
    // `fetch()` 呼び出しは Response を返すか、エラーを発生させます。
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // この行の後、この関数は `response.json()` 呼び出しが決定されるのを待ちます。
    // `response.json()` 呼び出しは、解釈された JSON オブジェクトを返すか、エラーを発生させるかのどちらかです。
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
```

ここでは、 `await fetch()` を呼び出していますが、呼び出し元は `Promise` を取得する代わりに、 `fetch()` が同期関数であるかのように完全に `Response` オブジェクトを取得します。

エラー処理のために `try...catch` ブロックを使用することもでき、同期関数と全く同じように処理できます。

しかし、非同期関数は常にプロミスを返すので、以下のようなことはできません。

```js example-bad
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name); // "promise" は Promise オブジェクトなので、これは動作しません。
```

その代わり、次のようにする必要があります。

```js
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
```

また、[JavaScriptモジュール](/ja/docs/Web/JavaScript/Guide/Modules)の中にコードがない限り、 `await` は `async` 関数の中でしか使用できないことに注意してください。つまり、通常のスクリプトではこの機能は使えません。

```js
try {
  // await を非同期関数の外で使用することは、モジュールの中でしか許されません。
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
} catch (error) {
  console.error(`Could not get products: ${error}`);
}
```

おそらく、プロミス連鎖を使用するような場面で `async` 関数をよく使用すると思いますが、この関数はプロミスをより直感的に動作させることができます。

プロミスチェーンと同じように、 `await` は非同期な処理を連続して実行させることを覚えておいてください。これは、次の演算子の結果が最後の演算子の結果に依存する場合に必要ですが、そうでない場合は `Promise.all()` のようなものを利用した方がより高いパフォーマンスが得られます。

## まとめ

プロミスは現代の JavaScript で非同期プログラミングを行うための基礎となるものです。プロミスは深く入れ子になったコールバックなしで一連の非同期処理を簡単に発生させ、同期的な `try...catch` 文に似たエラー処理のスタイルに対応しています。

`async` と `await` キーワードは、一連の連続した非同期関数呼び出しから処理を構築することを容易にし、明示的なプロミスチェーンを作成する必要性を避け、同期コードと同じように見えるコードを書くことを可能にします。

プロミスは現代のすべてのブラウザーの最新版で動作します。プロミスの対応が問題になるのは、 Opera Mini と IE11 およびそれ以前のバージョンだけです。

この記事ではプロミスのすべての機能には触れず，最も興味深く有用なものだけを取り上げました。プロミスについて学び始めると，もっと多くの機能やテクニックに出会うでしょう。

[WebRTC](/ja/docs/Web/API/WebRTC_API)、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)、[メディアキャプチャとストリーム](/ja/docs/Web/API/Media_Capture_and_Streams_API)などなど、多くの現代的なウェブ API は、プロミスベースになっています。

## 関連情報

- [`Promise()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) (Nolan Lawson)（英語）
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)（英語）

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}
