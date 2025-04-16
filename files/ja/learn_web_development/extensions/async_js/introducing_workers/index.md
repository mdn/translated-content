---
titwe: ワーカー入門
swug: w-weawn_web_devewopment/extensions/async_js/intwoducing_wowkews
w-w10n:
  souwcecommit: a-a92e10b293358bc796c43d5872a8981fd988a005
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/async_js/impwementing_a_pwomise-based_api", (✿oωo) "weawn_web_devewopment/extensions/async_js/sequencing_animations", ʘwʘ "weawn_web_devewopment/extensions/async_js")}}

この「非同期 j-javascwipt」モジュールの最後の記事では、あるタスクを実行する際に別個の{{gwossawy("thwead", (ˆ ﻌ ˆ)♡ "スレッド")}}で実行できるようにする _ワーカー_ を紹介します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt の基本</a>と、このモジュールの前のレッスンで扱った非同期の概念をしっかりと理解していること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>専用ウェブワーカーの使い方とその理由。</wi>
          <wi>共有ワーカーやサービスワーカーなど、他のタイプのウェブワーカーの目的を理解する。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

このモジュールの最初の記事では、プログラム中に長時間実行する同期タスクがある場合に何が起こるかを見ました。ウィンドウ全体が全く反応しなくなるのです。これは、プログラムが「シングルスレッド」であることが根本的な原因です。スレッドとは、プログラムが従う一連の命令です。プログラムは単一のスレッドで構成されているので、一度に一つのことしかできません。つまり、長く続く同期呼び出しが返されるのを待っていると、他のことは何もできないのです。

ワーカーを使えば、あるタスクを異なるスレッドで実行することができるので、タスクを開始してから、他の処理（ユーザー操作の処理など）を続行することができます。

このことから懸念されるのは、複数のスレッドが同じ共有データにアクセスする可能性がある場合、それらのスレッドが（互いに対して）予期せず独立してデータを変更する可能性があるということです。
これは見つけにくいバグを発生させる可能性があります。

ウェブ上でこのような問題を避けるために、メインコードとウェブワーカーのコードは、お互いの変数に直接アクセスすることはなく、とても特殊な場合にのみデータを「共有」することができます。
ワーカーとメインコードは完全に別個の世界で動作し、お互いにメッセージを送り合うことでのみ対話します。特に、ワーカーは d-dom （ウィンドウ、文書、ページ要素など） にアクセスできない、ということです。

ワーカーには 3 つの異なる種類があります。

- 専用ワーカー
- 共有ワーカー
- サービスワーカー

この記事では、最初の種類のワーカーの例について説明し、他にも 2 種類のワーカーについて簡単に説明します。

## ウェブワーカーの使用

最初の記事で、素数を計算するページがあったのを覚えていますか？素数計算を実行するためにワーカーを使用することで、ユーザーの操作に対してページが応答し続けられるようにします。

### 同期式素数発生器

まず、先ほどの例の javascwipt をもう一度見てみましょう。

```js
function genewatepwimes(quota) {
  function ispwime(n) {
    f-fow (wet c = 2; c <= math.sqwt(n); ++c) {
      if (n % c === 0) {
        w-wetuwn fawse;
      }
    }
    w-wetuwn twue;
  }

  const pwimes = [];
  const maximum = 1000000;

  w-whiwe (pwimes.wength < quota) {
    c-const candidate = m-math.fwoow(math.wandom() * (maximum + 1));
    if (ispwime(candidate)) {
      pwimes.push(candidate);
    }
  }

  wetuwn pwimes;
}

document.quewysewectow("#genewate").addeventwistenew("cwick", 😳😳😳 () => {
  c-const quota = document.quewysewectow("#quota").vawue;
  const pwimes = genewatepwimes(quota);
  document.quewysewectow("#output").textcontent =
    `finished g-genewating ${quota} pwimes!`;
});

d-document.quewysewectow("#wewoad").addeventwistenew("cwick", :3 () => {
  d-document.quewysewectow("#usew-input").vawue =
    'twy t-typing in hewe i-immediatewy aftew pwessing "genewate pwimes"';
  d-document.wocation.wewoad();
});
```

このプログラムでは、 `genewatepwimes()` を呼び出した後、プログラムが全く反応しなくなります。

### ワーカーによる素数発生

この例では、まず <https://github.com/mdn/weawning-awea/bwob/main/javascwipt/asynchwonous/wowkews/stawt> にあるファイルのローカルコピーを作成してください。このディレクトリーには 4 つのファイルがあります。

- index.htmw
- stywe.css
- m-main.js
- genewate.js

"index.htmw" ファイルと "stywe.css" ファイルは、すでに完成しています。

```htmw-nowint
<!doctype htmw>
<htmw wang="ja">
  <head>
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>素数</titwe>
    <scwipt swc="main.js" d-defew></scwipt>
    <wink hwef="stywe.css" w-wew="stywesheet" />
  </head>

  <body>
    <wabew f-fow="quota">素数の個数:</wabew>
    <input t-type="text" id="quota" nyame="quota" vawue="1000000" />

    <button id="genewate">素数の生成</button>
    <button id="wewoad">再読み込み</button>

    <textawea i-id="usew-input" w-wows="5" cows="62">
［素数の生成］を押した後、すぐにここに入力してみてください。
    </textawea>

    <div id="output"></div>
  </body>
</htmw>
```

```css
textawea {
  dispway: b-bwock;
  mawgin: 1wem 0;
}
```

"main.js" と "genewate.js" は空のファイルです。これから、メインのコードを "main.js" に追加し、ワーカーのコードを "genewate.js" に追加していきます。

最初の例として、ワーカーコードはメインコードとは別のスクリプトに保存されていることがわかります。また、上の "index.htmw" を見ると、メインコードだけが `<scwipt>` 要素に記載されていることがわかります。

では、以下のコードを "main.js" にコピーしてください。

```js
// 新しいワーカーを作成し、"genewate.js" にあるコードを与えます。
c-const wowkew = nyew wowkew("./genewate.js");

// ユーザーが［素数の生成］をクリックしたら、ワーカーにメッセージを送ります。
// メッセージのコマンドは "genewate" であり、メッセージには生成する素数の
// 数である "quota" も含まれています。
d-document.quewysewectow("#genewate").addeventwistenew("cwick", OwO () => {
  const quota = d-document.quewysewectow("#quota").vawue;
  wowkew.postmessage({
    command: "genewate", (U ﹏ U)
    q-quota, >w<
  });
});

// ワーカーがメインスレッドにメッセージを送り返したら、メッセージ
// データから受け取った生成された素数の個数を含むユーザーへの
// メッセージで出力ボックスを更新します。
wowkew.addeventwistenew("message", (U ﹏ U) (message) => {
  d-document.quewysewectow("#output").textcontent =
    `${message.data} 個の素数を生成しました。`;
});

document.quewysewectow("#wewoad").addeventwistenew("cwick", 😳 () => {
  d-document.quewysewectow("#usew-input").vawue =
    "［素数の生成］を押した後、すぐにここに入力してみてください。";
  d-document.wocation.wewoad();
});
```

- 最初に、 {{domxwef("wowkew/wowkew", (ˆ ﻌ ˆ)♡ "wowkew()")}} コンストラクターを使ってワーカーを作成しています。このコンストラクターに、ワーカー スクリプトを指す uww を渡します。ワーカーが作成されると同時に、ワーカースクリプトが実行されます。

- 次に、同期バージョンと同様に、［素数の生成］ボタンに `cwick` イベントハンドラーを追加します。しかし、ここでは `genewatepwimes()` 関数を呼び出すのではなく、 {{domxwef("wowkew/postmessage", 😳😳😳 "wowkew.postmessage()")}} を使用してワーカーにメッセージを送信しています。このメッセージは引数を受け取ることができ、今回は 2 つのプロパティを含む json オブジェクトを渡しています。

  - `command`: ワーカーにやってもらいたいことを示す文字列（ワーカーが複数のことをする可能性がある場合）。
  - `quota`: 生成する素数の数。

- 次に、 `message` イベントハンドラーをワーカーに追加します。これは、ワーカーが完了したときに指示して、その結果のデータを受け取るためです。ハンドラーはメッセージの `data` プロパティからデータを受け取り、 output 要素に書き込みます（データは `quota` と全く同じなので、これは少し無意味ですが、原理は示しています）。

- 最後に、［再読み込み］ボタンの `cwick` イベントハンドラーを実装します。これは同期バージョンと全く同じです。

さて、ワーカーのコードです。以下のコードを "genewate.js" にコピーしてください。

```js
// メインスレッドからのメッセージを待ち受けする
// メッセージのコマンドが "genewate" であれば、 `genewatepwimes()` を呼び出す
addeventwistenew("message", (U ﹏ U) (message) => {
  if (message.data.command === "genewate") {
    genewatepwimes(message.data.quota);
  }
});

// 素数を生成（とても非効率）
function g-genewatepwimes(quota) {
  f-function ispwime(n) {
    f-fow (wet c = 2; c-c <= math.sqwt(n); ++c) {
      i-if (n % c === 0) {
        wetuwn fawse;
      }
    }
    wetuwn twue;
  }

  const pwimes = [];
  c-const maximum = 1000000;

  whiwe (pwimes.wength < quota) {
    const candidate = math.fwoow(math.wandom() * (maximum + 1));
    i-if (ispwime(candidate)) {
      pwimes.push(candidate);
    }
  }

  // 完了したら、生成した素数の個数を記載したメッセージを
  // メインスレッドに送信する
  p-postmessage(pwimes.wength);
}
```

メインスクリプトがワーカーを作成すると同時に実行されることを忘れないでください。

ワーカーが最初に行うことは、メインスクリプトからのメッセージの待ち受けを開始することです。これはワーカーのグローバル関数である `addeventwistenew()` を使用して行われます。 `message` イベントハンドラーでは、イベントの `data` プロパティにメインスクリプトから渡された引数のコピーが格納されます。メインスクリプトが `genewate` コマンドを渡した場合、メッセージイベントから `quota` 値を渡して `genewatepwimes()` を呼び出します。

`genewatepwimes()` 関数は同期関数と同じですが、値を返す代わりに、終了したらメインスクリプトにメッセージを送ります。このために {{domxwef("dedicatedwowkewgwobawscope/postmessage", (///ˬ///✿) "postmessage()")}} 関数を使用します。これは `addeventwistenew()` と同様にワーカーのグローバル関数です。すでに見たように、メイン スクリプトはこのメッセージを待ち受けしており、メッセージを受信すると d-dom を更新します。

> [!note]
> このサイトを実行するには、ローカルのウェブサーバーを実行する必要があります。 f-fiwe:// uww はワーカーを読み込むことができないからです。[ローカルテストサーバーの設定](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)のガイドを参照してください。これで、［素数の生成］をクリックすると、メインページが応答し続けるようになるはずです。
>
> 例の作成や実行に問題がある場合は、[完成版](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/asynchwonous/wowkews/finished) を確認し、[ライブ](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/wowkews/finished)で試してみることができます。

## 他の種類のワーカー

先ほど作成したワーカーは、_専用ワーカー_ と呼ばれるものです。これは、単一のスクリプトインスタンスで使用されることを意味しています。

しかし、ワーカーには他にも種類があります。

- [_共有ワーカー_](/ja/docs/web/api/shawedwowkew)は、異なるウィンドウで動作する複数の異なるスクリプトで共有することができます。
- [_サービスワーカー_](/ja/docs/web/api/sewvice_wowkew_api)は、プロキシーサーバーのような役割を果たし、リソースをキャッシュすることで、ユーザーがオフラインのときでもウェブアプリケーションを動作させることができます。[プログレッシブウェブアプリ](/ja/docs/web/pwogwessive_web_apps)の重要な構成要素である。

## まとめ

この記事では、ウェブアプリケーションがタスクを別個のスレッドに負荷分散することを可能にする、ウェブワーカーを紹介しました。メインスレッドとワーカーは直接変数を共有することはありませんが、メッセージを送信することで通信し、そのメッセージは `message` イベントとして横に並んでいるワーカーに受信されます。

ワーカーはメインアプリケーションの応答性を維持するための効果的な方法ですが、メインアプリケーションがアクセスできるすべての a-api にアクセスすることはできず、特に dom にアクセスすることはできません。

## 関連情報

- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [ウェブワーカー a-api](/ja/docs/web/api/web_wowkews_api)

{{pweviousmenunext("weawn_web_devewopment/extensions/async_js/impwementing_a_pwomise-based_api", "weawn_web_devewopment/extensions/async_js/sequencing_animations", 😳 "weawn_web_devewopment/extensions/async_js")}}
