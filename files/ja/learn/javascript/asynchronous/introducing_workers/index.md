---
title: ワーカー入門
slug: Learn/JavaScript/Asynchronous/Introducing_workers
l10n:
  sourceCommit: 05d8b0eb3591009b6b7fee274bb7ed1bc5638f18
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

この「非同期 JavaScript」モジュールの最後の記事では、あるタスクを実行する際に別個の{{Glossary("Thread", "スレッド")}}で実行できるようにする _ワーカー_ を紹介します。

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
      <td>ウェブワーカーの使用方法を理解すること。</td>
    </tr>
  </tbody>
</table>

このモジュールの最初の記事では、プログラム中に長時間実行する同期タスクがある場合に何が起こるかを見ました。ウィンドウ全体が全く反応しなくなるのです。これは、プログラムが「シングルスレッド」であることが根本的な原因です。スレッドとは、プログラムが従う一連の命令です。プログラムは単一のスレッドで構成されているので、一度に一つのことしかできません。つまり、長く続く同期呼び出しが返されるのを待っていると、他のことは何もできないのです。

ワーカーを使えば、あるタスクを異なるスレッドで実行することができるので、タスクを開始してから、他の処理（ユーザー操作の処理など）を続行することができます。

しかし、これには代償が必要です。マルチスレッドコードでは、自分のスレッドがいつ中断され、他のスレッドが実行する機会を得るかわかりません。そのため、両方のスレッドが同じ変数にアクセスすると、いつ変数が予期せぬ変化を起こすか分からず、見つけにくいバグが発生する可能性があるのです。

ウェブでこのような問題を防ぐために、メインコードとワーカーコードは、決してお互いの変数に直接アクセスしないようにします。ワーカーとメインコードは完全に別個の世界で動作し、お互いにメッセージを送り合うことでのみ対話します。特に、ワーカーは DOM （ウィンドウ、文書、ページ要素など） にアクセスできない、ということです。

ワーカーには 3 つの異なる種類があります。

- 専用ワーカー
- 共有ワーカー
- サービスワーカー

この記事では、最初の種類のワーカーの例について説明し、他にも 2 種類のワーカーについて簡単に説明します。

## ウェブワーカーの使用

最初の記事で、素数を計算するページがあったのを覚えていますか？素数計算を実行するためにワーカーを使用することで、ユーザーの操作に対してページが応答し続けられるようにします。

### 同期式素数発生器

まず、先ほどの例の JavaScript をもう一度見てみましょう。

```js
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  const primes = generatePrimes(quota);
  document.querySelector(
    "#output",
  ).textContent = `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

このプログラムでは、`generatePrimes()` を呼び出した後、プログラムが全く反応しなくなります。

### ワーカーによる素数発生

この例では、まず <https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/start> にあるファイルのローカルコピーを作成してください。このディレクトリーには 4 つのファイルがあります。

- index.html
- style.css
- main.js
- generate.js

"index.html" ファイルと "style.css" ファイルは、すでに完成しています。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>素数</title>
    <script src="main.js" defer></script>
    <link href="style.css" rel="stylesheet" />
  </head>

  <body>
    <label for="quota">素数の個数:</label>
    <input type="text" id="quota" name="quota" value="1000000" />

    <button id="generate">素数の生成</button>
    <button id="reload">再読み込み</button>

    <textarea id="user-input" rows="5" cols="62">
［素数の生成］を押した後、すぐにここに入力してみてください。
</textarea
    >

    <div id="output"></div>
  </body>
</html>
```

```css
textarea {
  display: block;
  margin: 1rem 0;
}
```

"main.js" と "generate.js" は空のファイルです。これから、メインのコードを "main.js" に追加し、ワーカーのコードを "generate.js" に追加していきます。

最初の例として、ワーカーコードはメインコードとは別のスクリプトに保存されていることがわかります。また、上の "index.html" を見ると、メインコードだけが `<script>` 要素に記載されていることがわかります。

では、以下のコードを "main.js" にコピーしてください。

```js
// 新しいワーカーを作成し、"generate.js" にあるコードを与えます。
const worker = new Worker("./generate.js");

// ユーザーが［素数の生成］をクリックしたら、ワーカーにメッセージを送ります。
// メッセージのコマンドは "generate" であり、メッセージには生成する素数の
// 数である "quota" も含まれています。
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// ワーカーがメインスレッドにメッセージを送り返したら、メッセージ
// データから受け取った生成された素数の個数を含むユーザーへの
// メッセージで出力ボックスを更新します。
worker.addEventListener("message", (message) => {
  document.querySelector(
    "#output",
  ).textContent = `${message.data} 個の素数を生成しました。`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    "［素数の生成］を押した後、すぐにここに入力してみてください。";
  document.location.reload();
});
```

- 最初に、{{domxref("Worker/Worker", "Worker()")}} コンストラクターを使ってワーカーを作成しています。このコンストラクターに、ワーカー スクリプトを指す URL を渡します。ワーカーが作成されると同時に、ワーカースクリプトが実行されます。

- 次に、同期バージョンと同様に、［素数の生成］ボタンに `click` イベントハンドラーを追加します。しかし、ここでは `generatePrimes()` 関数を呼び出すのではなく、 {{domxref("Worker/postMessage", "worker.postMessage()")}} を使用してワーカーにメッセージを送信しています。このメッセージは引数を受け取ることができ、今回は 2 つのプロパティを含む JSON オブジェクトを渡しています。

  - `command`: ワーカーにやってもらいたいことを示す文字列（ワーカーが複数のことをする可能性がある場合）。
  - `quota`: 生成する素数の数。

- 次に、 `message` イベントハンドラーをワーカーに追加します。これは、ワーカーが完了したときに指示して、その結果のデータを受け取るためです。ハンドラーはメッセージの `data` プロパティからデータを受け取り、 output 要素に書き込みます（データは `quota` と全く同じなので、これは少し無意味ですが、原理は示しています）。

- 最後に、［再読み込み］ボタンの `click` イベントハンドラーを実装します。これは同期バージョンと全く同じです。

さて、ワーカーのコードです。以下のコードを "generate.js" にコピーしてください。

```js
// メインスレッドからのメッセージを待ち受けします。
// メッセージのコマンドが "generate" であれば、 `generatePrimes()` を呼び出します。
addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

// Generate primes (very inefficiently)
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  // When we have finished, send a message to the main thread,
  // including the number of primes we generated.
  postMessage(primes.length);
}
```

メインスクリプトがワーカーを作成すると同時に実行されることを忘れないでください。

ワーカーが最初に行うことは、メインスクリプトからのメッセージの待ち受けを開始することです。これはワーカーのグローバル関数である `addEventListener()` を使用して行われます。 `message` イベントハンドラーでは、イベントの `data` プロパティにメインスクリプトから渡された引数のコピーが格納されます。メインスクリプトが `generate` コマンドを渡した場合、メッセージイベントから `quota` 値を渡して `generatePrimes()` を呼び出します。

`generatePrimes()` 関数は同期関数と同じですが、値を返す代わりに、終了したらメインスクリプトにメッセージを送ります。このために {{domxref("DedicatedWorkerGlobalScope/postMessage", "postMessage()")}} 関数を使用します。これは `addEventListener()` と同様にワーカーのグローバル関数です。すでに見たように、メイン スクリプトはこのメッセージを待ち受けしており、メッセージを受信すると DOM を更新します。

> **メモ:** このサイトを実行するには、ローカルのウェブサーバーを実行する必要があります。file:// URL はワーカーを読み込むことができないからです。ローカルテストサーバの設定] (/ja/docs/Learn/Common_questions/set_up_a_local_testing_server) のガイドを参照してください。これで、［素数の生成］をクリックすると、メインページが応答し続けるようになるはずです。
>
> 例の作成や実行に問題がある場合は、[完成版](https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/finished) を確認し、[ライブ](https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished)で試してみることができます。

## 他の種類のワーカー

先ほど作成したワーカーは、_専用ワーカー_ と呼ばれるものです。これは、単一のスクリプトインスタンスで使用されることを意味しています。

しかし、ワーカーには他にも種類があります。

- [_共有ワーカー_](/ja/docs/Web/API/SharedWorker)は、異なるウィンドウで動作する複数の異なるスクリプトで共有することができます。
- [_サービスワーカー_](/ja/docs/Web/API/Service_Worker_API) プロキシサーバーのような役割を果たし、リソースをキャッシュすることで、ユーザーがオフラインのときでもウェブアプリケーションを動作させることができます。[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)の重要な構成要素である。

## まとめ

この記事では、ウェブアプリケーションがタスクを別個のスレッドに負荷分散することを可能にする、ウェブワーカーを紹介しました。メインスレッドとワーカーは直接変数を共有することはありませんが、メッセージを送信することで通信し、そのメッセージは `message` イベントとして横に並んでいるワーカーに受信されます。

ワーカーはメインアプリケーションの応答性を維持するための効果的な方法ですが、メインアプリケーションがアクセスできるすべての API にアクセスすることはできず、特に DOM にアクセスすることはできません。

## 関連情報

- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [ウェブワーカー API](/ja/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}
