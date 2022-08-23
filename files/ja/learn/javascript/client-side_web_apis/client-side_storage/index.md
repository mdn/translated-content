---
title: クライアント側ストレージ
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
tags:
  - API
  - Article
  - Beginner
  - CodingScripting
  - Guide
  - IndexedDB
  - JavaScript
  - Learn
  - Storage
  - Web Storage
  - ウェブストレージ
  - ガイド
  - 保存
  - 初心者
  - 学習
translation_of: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
---
{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

モダン・ウェブブラウザーは、ユーザーの許可のもとにウェブサイトがユーザーのコンピューター上にデータを保存して必要なときにそのデータを取得するための、いくつもの方法をサポートしています。このことにより、長期記憶のためにデータを存続させること、オフライン利用のためにサイトまたは文書を保存すること、サイトについてのユーザー独自の設定を保持すること、などなどが可能になります。本記事では、これらがどのようにして機能するのかについてのごく基本的な点を説明します。

| 前提知識: | JavaScript の基本 ([JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps)、[JavaScript の構成要素](/ja/docs/Learn/JavaScript/Building_blocks)、 [JavaScript オブジェクト入門](/ja/docs/Learn/JavaScript/Objects) を参照)、[ウェブ API の紹介](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | アプリケーション・データを保存するためのクライアント側のストレージ API の使い方を学ぶこと                                                                                                                                                                                                                        |

## クライアント側での保存って?

MDN 学習エリアの他の箇所で、[静的なサイト](/ja/docs/Learn/Server-side/First_steps/Client-Server_overview#Static_sites) と [動的なサイト](/ja/docs/Learn/Server-side/First_steps/Client-Server_overview#Dynamic_sites) の違いについて述べました。ほとんどの主要なモダン・ウェブサイトは動的です。つまり、ある種のデータベース (サーバー側のストレージ) を使ってデータをサーバー上に記憶し、必要なデータを取得するために[サーバー側](/ja/docs/Learn/Server-side) のコードを実行し、そのデータを静的なページ雛型に挿入し、結果として出来上がった HTML をクライアントに提供して、それがユーザーのブラウザーによって表示されるようにします。

クライアント側での保存は類似の原理に基づいて機能しますが、これにはいくつかの異なる使い道があります。クライアント側での保存は、クライアント上に (つまりユーザーのマシン上に) データを保存して必要なときにそのデータを取得できるようにしてくれる、いくつかの JavaScript API から構成されています。クライアント側での保存には、たとえば以下のように多くの異なる用途があります。

- サイトの環境設定を個人に合わせる (たとえば、カスタム・ウィジェット、カラースキーム、またはフォントサイズについて、ユーザーが選択したものを表示する、など)
- 以前のサイト上の行動を存続させる (たとえば、前回のセッションからの買い物かごの中身を記憶しておく、ユーザーが以前ログインしたかどうかを憶えておく、など)
- サイトをより速く (かつ、潜在的にはより費用をかけずに) ダウンロードできるように、または、ネットワーク接続なしでサイトが利用可能となるように、データと資産をローカルに保存する
- ウェブ・アプリケーションが生成した文書を、オフラインで利用するために、ローカルに保存する

クライアント側での保存とサーバ側での保存は、しばしば共に使われます。たとえば、複数の音楽ファイル (おそらくウェブゲームまたは音楽プレーヤー・アプリに使われる) をダウンロードし、それらの音楽ファイルをクライアント側のデータベース内に保存し、必要に応じて再生する、といったことが可能でしょう。ユーザーは、それらの音楽ファイルをただ一度ダウンロードするだけで済むでしょう。その後の訪問では、音楽ファイルは、ダウンロードされる代わりにデータベースから取得されるでしょう。

> **Note:** クライアント側のストレージ API を使って保存できるデータの量には、上限があります (もしかすると、個別の API ごとの上限と、累積的な上限の双方があるかもしれません)。正確な上限は、ブラウザーごとに異なりますし、もしかすると、ユーザーの設定によることもあるかもしれません。より詳しくは、[ブラウザーのストレージ制限と削除基準](/ja/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) を参照。

### 旧式な方法: クッキー

クライアント側での保存という考え方には、長い歴史があります。ウェブの初期から、ウェブサイト上でのユーザー体験を個別化するための情報を記憶するべく、サイトは [クッキー](/ja/docs/Web/HTTP/Cookies) を使ってきました。そうしたクッキーは、ウェブ上で一般的に使われるクライアント側での保存の、最初期の形式です。

最近では、クライアント側のデータを保存するためのより簡単な仕組みが利用できるため、この記事ではクッキーの使用方法については説明しません。ただし、これはクッキーが現代のウェブで完全に役に立たないことを意味するわけではありません。クッキーは、ユーザーの個別化や状態に関連するデータを保存するために今でも一般的に使用されています。たとえば、セッション ID やアクセストークンです。クッキーの詳細については、[HTTP cookies](/ja/docs/Web/HTTP/Cookies) の記事を参照してください。

### 新方式派: ウェブストレージと IndexedDB

前述の「簡単な」機能には次のものがあります:

- [Web Storage API](/ja/docs/Web/API/Web_Storage_API) は、名前とそれに対応する値とからなる小規模なデータ項目を保存したり取り出したりするための、とても簡潔な構文を提供しています。これは、ユーザーの名前、ユーザーがログインしているかどうか、画面の背景にどの色を使うべきか、といったような、何らかの単純なデータを記憶するだけでよい場合に有用です。
- [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) は、複雑なデータを保存するための完全なデータベース・システムをブラウザーに提供しています。これは、顧客レコードの完全な集合から、音声ファイルまたは動画ファイルのような複雑なデータ型にいたるまでの、種々の物事に対して使えます。

以下ではこれらの API について学ぶことになります。

### 将来: キャッシュ API

いくつかのモダン・ブラウザーは、新しい {{domxref("Cache")}} API をサポートしています。この API は、特定の要求に対する HTTP 応答を記憶しておくために設計されています。 また、ネットワーク接続なしに後でサイトを利用できるように、ウェブサイト資産をオフラインに記憶しておく、といったようなことをするうえで非常に有用です。キャッシュは通常、[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) と組み合わせて利用します。もっとも、必ずそうしなくてはならないというわけではありません。

キャッシュとサービスワーカーの利用は先進的な話題であり、この記事ではそれほど詳しくは扱いません。とは言うものの、後述の [Offline asset storage](#offline_asset_storage) の節では、簡単な例をお見せします。

## 単純なデータを保存する——ウェブストレージ

[Web Storage API](/ja/docs/Web/API/Web_Storage_API) は大変使いやすいものです。(文字列や数などに限定された) データからなる単純な名前／値のペアを保存し、必要なときにその値を取り出します。

### 基本的構文

以下に方法を示しましょう。

1.  まず、GitHub 上の [ウェブストレージの空白テンプレート](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) へ行ってください (新規タブで開いてください)。
2.  ブラウザーのデベロッパー・ツールの JavaScript コンソールを開いてください。
3.  ウェブストレージ・データのすべては、ブラウザー内部の二つのオブジェクト的な構造体の中に含まれます。つまり、{{domxref("Window.sessionStorage", "sessionStorage")}} と {{domxref("Window.localStorage", "localStorage")}} の中です。前者は、ブラウザーが開いている限り、データを存続させます (ブラウザーを閉じるとデータは失われます)。後者は、ブラウザーを閉じて、それから再びブラウザーを開いた後でさえも、データを存続させます。一般的には後者の方がより有用なので、本記事では後者を使います。

    {{domxref("Storage.setItem()")}} メソッドによって、ストレージ内にデータ項目を保存できます。このメソッドは二つの引数をとります。すなわち、その項目の名前と、その値です。JavaScript コンソールに以下のように打ち込んでみてください (もしお望みなら、値は御自分のお名前に変更してくださいね!)

    ```js
    localStorage.setItem('name','Chris');
    ```

4.  {{domxref("Storage.getItem()")}} メソッドは一つの引数をとります。つまり、取り出したいデータ項目の名前です。そして、このメソッドは、その項目の値を返します。今度は JavaScript コンソールに以下の行を打ち込んでください。

    ```js
    let myName = localStorage.getItem('name');
    myName
    ```

    2 行目を入力すると、`myName` という変数が今や `name` というデータ項目の値を保有していることが分かるはずです。

5.  {{domxref("Storage.removeItem()")}} メソッドは一つの引数をとります。つまり、削除したいデータ項目の名前です。このメソッドは、ウェブストレージからその項目を削除します。JavaScript コンソールに以下の行を打ち込んでください。

    ```js
    localStorage.removeItem('name');
    let myName = localStorage.getItem('name');
    myName
    ```

    3 行目は、今度は `null` を返すはずです。というのも、もはや `name` という項目はウェブストレージ内に存在しないからです。

### データが存続する!

ウェブストレージの一つの重要な特徴は、ページ・ロードをまたいで (さらに、`localStorage` の場合には、ブラウザーを終了させてさえも) データが存続する、という点です。この特徴が機能しているところを見てみましょう。

1.  もう一度、ウェブストレージの空白テンプレートを開いてください。ただし今回は、本チュートリアルを開いたのとは別のブラウザーで開いてください! こうすることで、取り扱いがしやすくなるでしょう。
2.  以下の行をブラウザーの JavaScript コンソールに打ち込んでください。

    ```js
    localStorage.setItem('name','Chris');
    let myName = localStorage.getItem('name');
    myName
    ```

    `name` という項目が返されるのが分かるはずです。

3.  さてここでブラウザーを終了させてから再び起動して開いてください。
4.  再び、以下の行を入力してください。

    ```js
    let myName = localStorage.getItem('name');
    myName
    ```

    ブラウザーを終了させてから再び開いたというのに、それでも依然として値が利用可能である、ということが分かるはずです。

### ドメインごとに別々のストレージ

ドメインごとに (ブラウザーにロードされた別々のウェブ・アドレスごとに)、別々のデータストアがあります。二つのウェブサイト (たとえば google.com と amazon.com) をロードして、一方のウェブサイトで項目を保存してみると、その項目は他方のウェブサイトでは利用できない、と分かるでしょう。

これには意義があります。もしウェブサイト同士がお互いのデータを見ることが可能であったら起こるであろうセキュリティ問題を想像できますよね!

### さらに込み入った例

どのようにウェブストレージを使えるのかについてお教えするために、簡単で基礎的な事例を書くことによって、(ドメインごとのストレージという) この新たに得た知識を応用してみましょう。この事例では、名前を入力できるようにします。その入力の後、個人に合わせた挨拶を表示するべく、ページが更新されます。この状態は、ページ／ブラウザーのリロードをまたいでも存続するでしょう。なぜなら、名前がウェブストレージに記憶されているからです。

この例の HTML を [personal-greeting.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/personal-greeting.html) で入手できます。これは、ヘッダーとコンテンツとフッターを備えた簡素なウェブサイトと、名前を入力するためのフォームとを含みます。

![](web-storage-demo.png)

この例を組み上げましょう。すると、これがどのように機能するのか理解できるでしょう。

1.  まず、御自分のコンピュータ上の新規ディレクトリーに、[personal-greeting.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/personal-greeting.html) というファイルのローカルコピーを作ってください。
2.  次に、`index.js` と呼ばれる JavaScript ファイルを、HTML がどのように参照しているのかに注意してください (40 行目を参照)。これ (`index.js`) を作成して、そこに JavaScript コードを書き込む必要があります。HTML ファイルと同じディレクトリーに `index.js` というファイルを作成してください。
3.  この例で操作する必要のある HTML 項目 (features) のすべてに対する参照を作るところから取り掛かりましょう。それらの参照のすべてを定数として作ります。なぜなら、これらの参照は、アプリのライフサイクル内で変化する必要がないからです。以下の行を JavaScript ファイルに追加してください。

    ```js
    // 必要な定数を作ります。
    const rememberDiv = document.querySelector('.remember');
    const forgetDiv = document.querySelector('.forget');
    const form = document.querySelector('form');
    const nameInput = document.querySelector('#entername');
    const submitBtn = document.querySelector('#submitname');
    const forgetBtn = document.querySelector('#forgetname');

    const h1 = document.querySelector('h1');
    const personalGreeting = document.querySelector('.personal-greeting');
    ```

4.  次に、送信ボタンが押されたときにフォームが実際にこのフォーム自体を送信することをやめさせるための、小規模なイベント・リスナーを含める必要があります。というのも、こうした送信は所望の振る舞いではないからです。以下に示すスニペットを、前のコードに追加してください。

    ```js
    // ボタンが押されたときにフォームが送信することをやめさせます。
    form.addEventListener('submit', function(e) {
      e.preventDefault();
    });
    ```

5.  さてここで、イベント・リスナーを追加せねばなりません。そのイベント・リスナーのハンドラー関数は、"Say hello" ボタンがクリックされたときに実行されます。それぞれの断片が何を行うのかはコメントで詳しく説明してありますが、本質的にここでは、ユーザーがテキスト入力ボックスに入力した名前をとってきて、`setItem()` を用いてその名前をウェブストレージに保存し、その後、実際のウェブサイト上のテキストの更新を扱う `nameDisplayCheck()` と呼ばれる関数を実行しています。これをコードの末尾に加えてください。

    ```js
    // 'Say hello' ボタンがクリックされたら関数を実行します。
    submitBtn.addEventListener('click', function() {
      // 入力された名前をウェブストレージに保存します。
      localStorage.setItem('name', nameInput.value);
      // 個人に合わせた挨拶を表示するとともにフォーム表示を更新する
      // 措置をとるべく、nameDisplayCheck() を実行します。
      nameDisplayCheck();
    });
    ```

6.  この時点で、"Forget" ボタンがクリックされたときに関数を実行するためのイベント・ハンドラーも必要です。"Forget" ボタンは、"Say hello" ボタンがクリックされた後にのみ表示されます (二つのフォーム状態が行ったり来たり切り替わります)。この関数では、`removeItem()` を用いてウェブストレージから `name` という項目を削除し、その後、表示を更新するために `nameDisplayCheck()` を再び実行します。これを末尾に付け加えてください。

    ```js
    // 'Forget' ボタンがクリックされたら関数を実行します。
    forgetBtn.addEventListener('click', function() {
      // 保存してある名前をウェブストレージから削除します。
      localStorage.removeItem('name');
      // 再び一般的な挨拶を表示するとともにフォーム表示を更新する
      // 措置をとるべく、nameDisplayCheck() を実行します。
      nameDisplayCheck();
    });
    ```

7.  さて今や `nameDisplayCheck()` という関数そのものを定義すべきときです。ここでは、`localStorage.getItem('name')` を条件テストとして用いることにより、`name` という項目がウェブストレージに保存済みかどうかを調べます。もし保存済みなら、この呼び出しは `true` と評価されるでしょう。もし保存済みでなければ、`false` になるでしょう。もし `true` なら、個人に合わせた挨拶を表示し、フォームの "forget" の部分を表示し、フォームの "Say hello" の部分を隠します。もし `false` なら、一般的な挨拶を表示し、逆のことをします (フォームの "forget" の部分を隠し、フォームの "Say hello" の部分を表示します)。またもや末尾に以下のコードを追加してください。

    ```js
    // nameDisplayCheck() という関数を定義します。
    function nameDisplayCheck() {
      // 'name' というデータ項目がウェブストレージに保存されているかどうかを調べます。
      if(localStorage.getItem('name')) {
        // もし保存されていたら、個人に合わせた挨拶を表示します。
        let name = localStorage.getItem('name');
        h1.textContent = 'Welcome, ' + name;
        personalGreeting.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
        // フォームのうち 'remember' の部分を隠し、'forget' の部分を表示します。
        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';
      } else {
        // もし保存されていなければ、一般的な挨拶を表示します。
        h1.textContent = 'Welcome to our website ';
        personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
        // フォームのうち 'forget' の部分を隠し、'remember' の部分を表示します。
        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
      }
    }
    ```

8.  最後に、ページがロードされるたびに `nameDisplayCheck()` という関数を実行せねばなりません。もしそうしなければ、個人に合わせた挨拶は、ページのリロードをまたがってまでは持続しなくなってしまうでしょう。以下のものをコードの末尾に追加してください。

    ```js
    document.body.onload = nameDisplayCheck;
    ```

例が完成しました。よくできましたね! 現時点で残っているのは、コードを保存して HTML ページをブラウザーでテストすることだけです。[ライブ実行される完成版をここで](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html) 見られます。

> **Note:** [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) のところには、探究するにはほんの少しだけ更に複雑な別の例もあります。

> **Note:** 完成版のソースのうち `<script src="index.js" defer></script>` という行では、`defer` 属性により、ページをロードし終わるまでは {{htmlelement("script")}} 要素の中身を実行しないように指定しています。

## 複雑なデータを保存する—— IndexedDB

[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) (ときには IDB と省略します) は、ブラウザーで利用可能であり、複雑で関係性のあるデータを保存できる、完全なデータベース・システムです。そしてそのデータの型は、文字列または数値のような単純な値に限定されません。動画や静止画像、そして、その他のものもほとんどすべて、IndexedDB インスタンスに保存できます。

しかし、これは高くつきます。IndexedDB の使用は、ウェブストレージ API の使用よりも遥かに複雑なのです。本節では、IndexedDB ができることのうち本当に表面的なところに触れるだけですが、始めるのに十分なだけのことは、お伝えしましょう。

### メモ書きの保存の事例を通して作業します

ここでは、メモ書きをブラウザーに保存して好きなときにそれを見たり消したりできるようにする事例を、見ていただきましょう。その際、その例は御自分で組み立てていただきますが、進行に合わせて、IDB の最も根本的な部分について御説明します。

当該アプリは、以下のような見かけをしています。

![](idb-demo.png)

メモ書きの各々には題名と何らかの本文があり、題名と本文のそれぞれは別々に編集できます。以下で見てゆく JavaScript コードには、何が起きているのかを理解する手助けとなる詳しいコメントがあります。

### 始めますよ

1.  まず、[`index.html`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index.html) と [`style.css`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/style.css) と [`index-start.js`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) というファイルのローカルコピーを、ローカルマシンの新規ディレクトリー内に作成してください。
2.  ファイルを見てください。HTML がかなり簡潔なのがお分かりでしょう。これは、ヘッダーとフッターのあるウェブサイトです。また、メモ書きを表示する場所と、データベースに新たなメモ書きを入力するためのフォームとを含む、本文コンテンツ領域もあります。 CSS は、何が起きているのかをより明瞭にするための、ある種の簡素なスタイルづけを提供しています。JavaScript ファイルは、宣言された五つの定数を含んでいます。つまり、 内部にメモ書きを表示することになる {{htmlelement("ul")}} 要素への参照と、題名および本文の {{htmlelement("input")}} 要素への参照と、{{htmlelement("form")}} 自体への参照と、{{htmlelement("button")}} への参照とを含んでいます。
3.  JavaScript ファイルの名前を `index.js` に変更してください。コードをそこに追加し始める準備がこれで整いました。

### データベースの初期設定

では、実際にデータベースを設定するために最初にすべきことを見てみましょう。

1.  定数の宣言の下に、以下の行を追加してください。

    ```js
    // 開いたデータベースを記憶しておくためのデータベース・オブジェクトのインスタンスを作成します。
    let db;
    ```

    ここでは、`db` と呼ばれる変数を宣言しています。これは後に、データベースを表すオブジェクトを記憶するのに使われます。この変数を何箇所かで使うつもりなので、物事を容易にするために、ここでこの変数を大域的に宣言しておきました。

2.  次に、以下のものをコードの末尾に加えてください。

    ```js
    window.onload = function() {

    };
    ```

    続きのコードはすべて、この `window.onload` イベント・ハンドラー関数——ウィンドウの {{event("load")}} イベントが発火したときに呼ばれます——の中に書いてゆきます。アプリが完全にロード動作を終えるよりも前には IndexedDB 機能を使おうとはしないよう保証するために、そうしています (もしそう保証しなかったら、失敗する可能性があります)。

3.  `window.onload` ハンドラーの中に、以下のものを追加してください。

    ```js
    // データベースを開きます。データベースは、まだ存在していない場合には
    // 新規作成されます (後述の onupgradeneeded を参照)。
    let request = window.indexedDB.open('notes', 1);
    ```

    この行では、`notes` と呼ばれるデータベースのバージョン `1` を開く `request` (要求) を作成します。もしそのデータベースがまだ存在しなければ、後述のコードによって新規作成されます。IndexedDB の全体を通じて、この要求パターンが非常に高頻度で使われることが、いずれお分かりになるでしょう。データベース操作には時間がかかります。その結果を待つ間、ブラウザーをハングさせることはお望みでないでしょうから、データベース操作は {{Glossary("asynchronous")}} (非同期) となっています。このことが意味するのは、結果は直ちに生じるのではなく、将来のいずれかの時点で生じるだろうということ、および、結果が出たときには通知されるということです。

    こういったことを IndexedDB で扱うために、要求オブジェクト (何とでも好きなように呼んで構いませんが、何を目的としたものなのかが明白になるので、`request` (要求) と呼んでおきました) を作成します。それから、要求が完了する、失敗する、などの際にコードを実行するために、いくつかのイベント・ハンドラーを使います。この点については、使用されているところを後で見ることになります。

    > **Note:** バージョン番号は重要です。(たとえばテーブル構造を変更することによって) データベースをアップグレードしたい場合には、上げたバージョン番号や、`onupgradeneeded` ハンドラー (下記参照) の内部で指定される別のスキーマなどを使って、コードを再度実行せねばなりません。この簡単なチュートリアルでは、データベースのアップグレードは扱いません。

4.  さて今度は、前に追加した分のすぐ下に、以下のイベント・ハンドラーを追加してください。今度もまた、`window.onload` ハンドラーの中への追加です。

    ```js
    // onerror ハンドラーは、データベースがうまく開けなかったことを意味します。
    request.onerror = function() {
      console.log('Database failed to open');
    };

    // onsuccess ハンドラーは、データベースがうまく開けたことを意味します。
    request.onsuccess = function() {
      console.log('Database opened successfully');

      // 開いたデータベース・オブジェクトを、db という変数に記憶します。この変数は、以下でたくさん使われます。
      db = request.result;

      // IDB 内の既存のメモ書きを表示するために、displayData() 関数を実行します。
      displayData();
    };
    ```

    要求は失敗した、と伝えつつシステムが戻ってくる場合には、{{domxref("IDBRequest.onerror", "request.onerror")}} というハンドラーが実行されます。これによって、(要求が失敗したという) この問題に対処できるようになります。この簡単な例では、単に JavaScript コンソールにメッセージを印字します。

    他方、{{domxref("IDBRequest.onsuccess", "request.onsuccess")}} ハンドラーは、要求が成功裡に戻ってくる場合、つまりデータベースをうまく開けた場合に、実行されます。この場合、開いたデータベースを表すオブジェクトが、{{domxref("IDBRequest.result", "request.result")}} というプロパティで利用可能となります。それにより、データベースを操作できるようになります。後で使うために、と事前に作っておいた `db` という変数に、このオブジェクトを保存します。また、`displayData()` と呼ばれるカスタム関数も実行します。この関数は、データベース内のデータを {{HTMLElement("ul")}} 内部に表示します。すでにデータベース内にあるメモ書きが、ページがロードされ次第すぐに表示されるように、ここでこの関数を実行しています。この関数を定義する様子は、後で見ることにしましょう。

5.  本節の最後では、データベースを設定するためには多分もっとも重要なイベント・ハンドラーを追加しましょう。つまり、{{domxref("IDBOpenDBRequest.onupgradeneeded", "request.onupgradeneeded")}} です。このハンドラーは、データベースがまだ設定されていなかった場合、あるいは、保存済みの既存のデータベースよりも上のバージョン番号でデータベースが開かれた場合 (アップグレードを行う場合) に、実行されます。前のハンドラーの下に、以下のコードを追加してください。

    ```js
    // これがまだ実行されていない場合に、データベースのテーブルを設定します。
    request.onupgradeneeded = function(e) {
      // 開いたデータベースに対する参照を求めます。
      let db = e.target.result;

      // 自動的にインクリメントするキーを含んでおり、メモ書きを中に保存するための
      // (基本的に一つのテーブルに類似した) objectStore を、作成します。
      let objectStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement:true });

      // objectStore が含むことになるデータ項目を定義します。
      objectStore.createIndex('title', 'title', { unique: false });
      objectStore.createIndex('body', 'body', { unique: false });

      console.log('Database setup complete');
    };
    ```

    ここは、データベースのスキーマ (構造) ——すなわち、データベースが含む列 (ないしフィールド) の集合——を定義している箇所です。ここではまず、`e.target.result` (イベント・ターゲットの `result` というプロパティ) から、既存のデータベースへの参照を求めていますが、これ (`e.target` というイベント・ターゲット) は、`request` というオブジェクトです。この行は、`onsuccess` ハンドラーの中の `db = request.result;` という行と等価です。しかし、それとは別に、ここでこのようにする必要があります。なぜなら、`onupgradeneeded` ハンドラーは、(もし必要な場合には) `onsuccess` ハンドラーよりも前に実行されることになる——つまり、もしここでこのようにしておかなければ、`db` の値を利用できない——からです。

    それから、{{domxref("IDBDatabase.createObjectStore()")}} を用いて、開いたデータベースの内部に新たなオブジェクト・ストアを作成します。これは、従来のデータベース・システムにおける一つのテーブルと等価です。このオブジェクト・ストアには `notes` という名前をつけました。また、`id` と呼ばれる `autoIncrement` キーのフィールドも指定しました。新規レコードの各々において、このフィールドには、インクリメントされた値が自動的に与えられ、開発者は、このフィールドを明示的に設定する必要がありません。キーであるがゆえに、`id` フィールドは、たとえばレコードを削除または表示する際に、レコードを一意に識別するのに使われることでしょう。

    {{domxref("IDBObjectStore.createIndex()")}} メソッドを用いて、別の二つのインデックス (フィールド) も作成します。すなわち、`title` (それぞれのメモ書きの題名を含むことになります) と、`body` (そのメモ書きの本文を含むことになります) を作成します。

以上のようにこの簡素なデータベース・スキーマを設定したので、データベースにレコードを追加し始めれば、それぞれのレコードは、以下の行のようなオブジェクトとして表現されることでしょう。

```js
{
  title: "Buy milk",
  body: "Need both cows milk and soy.",
  id: 8
}
```

### データをデータベースに追加します

それでは、どのようにしたらデータベースにレコードを追加できるか、その方法を見てみましょう。これは、ページ上のフォームを使って行われます。

前のイベント・ハンドラーの下に (ただし、やはり `window.onload` ハンドラーの内部に)、 以下の行を追加してください。以下の行では、フォームが送信された際に (送信 {{htmlelement("button")}} が押され、成功したフォーム送信、という結果に至ったときに)、`addData()` と呼ばれる関数を実行する、`onsubmit` ハンドラーを設定しています。

```js
// フォームが送信されたときに addData() 関数が実行されるように、onsubmit ハンドラーを作成します。
form.onsubmit = addData;
```

では、`addData()` 関数を定義しましょう。上記の行の下に、以下のものを追加してください。

```js
// addData() 関数を定義します。
function addData(e) {
  // デフォルト動作を防止します。従来通りの方法でフォームを送信したくはないからです。
  e.preventDefault();

  // フォーム・フィールドに入力された値を求めます。そして、それらの値を、データベースへ挿入すべく準備してあるオブジェクトに保存します。
  let newItem = { title: titleInput.value, body: bodyInput.value };

  // 読み書きのデータベース・トランザクションを開いて、データの追加に備えます。
  let transaction = db.transaction(['notes'], 'readwrite');

  // データベースに追加済みのオブジェクト・ストアを呼び出します。
  let objectStore = transaction.objectStore('notes');

  // newItem というオブジェクトをオブジェクト・ストアに追加するための要求を作ります。
  let request = objectStore.add(newItem);
  request.onsuccess = function() {
    // フォームをクリアして、次のエントリーの追加に備えます。
    titleInput.value = '';
    bodyInput.value = '';
  };

  // すべてが済んだら、完了するトランザクションの成功を報告します。
  transaction.oncomplete = function() {
    console.log('Transaction completed: database modification finished.');

    // displayData() を再度実行することによって、データの表示を更新して、新たに追加した項目を表示します。
    displayData();
  };

  transaction.onerror = function() {
    console.log('Transaction not opened due to error');
  };
}
```

これは割と複雑ですね。噛み砕くと、以下の通りです。

- フォームが実際に従来通りの方法で送信してしまうこと (これはページ・リフレッシュを引き起こし、体験をそこなうでしょう) を防ぐために、イベント・オブジェクトに対して {{domxref("Event.preventDefault()")}} を実行します。
- データベースに入力すべきレコードを表すオブジェクトを作成します。その際、そのオブジェクトには、フォーム入力からの値を埋め込みます。`id` の値を明示的に含める必要がないことに注意してください。以前説明したとおり、これは自動的に埋め込まれます。
- {{domxref("IDBDatabase.transaction()")}} メソッドを用いて、`notes` というオブジェクト・ストアに対する`readwrite` (読み書き) トランザクションを開きます。このトランザクション・オブジェクトのおかげでオブジェクト・ストアにアクセスできるようになり、オブジェクト・ストアに対して何か——たとえば新規レコードの追加など——を行えるようになります。
- {{domxref("IDBTransaction.objectStore()")}}メソッドを用いてオブジェクト・ストアにアクセスし、その結果を `objectStore` という変数に保存します。
- {{domxref("IDBObjectStore.add()")}} を用いて、データベースに新規レコードを追加します。これは、以前見たのと同様の方法で、要求オブジェクトを作り出します。
- ライフサイクル内での重大な時点 (クリティカル・ポイント) においてコードを実行するために、`request` (要求) と `transaction` (トランザクション) に対する一群のイベント・ハンドラーを追加します。要求が成功したら、次のメモ書きの入力に備えてフォーム入力をクリアします。トランザクションが完了したら、ページ上のメモ書きの表示を更新するために、`displayData()` 関数を再び実行します。

### データを表示します

すでにコード内で `displayData()` を二度も参照したからには、多分これを定義すべきでしょうね。以下のものをコードに (今までの関数定義の下に) 追加してください。

```js
// displayData() 関数を定義します。
function displayData() {
  // ここでは、表示を更新するたびにリスト要素の中身を空にします。
  // もしこのようにしなかったら、新たなメモ書きを追加するたびに複製を列挙する羽目になるでしょう。
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // オブジェクト・ストアを開き、それから、カーソルを取得します。
  // カーソルは、ストア内の異なるデータ項目のすべてにわたって反復処理を行うものです。
  let objectStore = db.transaction('notes').objectStore('notes');
  objectStore.openCursor().onsuccess = function(e) {
    // カーソルへの参照を求めます。
    let cursor = e.target.result;

    // 反復処理を行うべき別のデータ項目がまだあれば、このコードを実行し続けます。
    if(cursor) {
      // 各データ項目を表示する際にそのデータ項目を中に入れるための、リスト項目と h3 と p とを作成します。
      // HTML 断片を組み立てて、それをリスト内の最後に追加します。
      const listItem = document.createElement('li');
      const h3 = document.createElement('h3');
      const para = document.createElement('p');

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // h3 および para の内部に、カーソルからのデータを入れます。
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // listItem の属性内部に、このデータ項目の ID を保存します。こうすると、
      // listItem がどの項目に対応しているのかがわかります。これは、後で項目を削除したくなったときに有用です。
      listItem.setAttribute('data-note-id', cursor.value.id);

      // ボタンを作成し、それを各 listItem の内部に設置します。
      const deleteBtn = document.createElement('button');
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = 'Delete';

      // ボタンがクリックされたら deleteItem() 関数が実行されるように、
      // イベント・ハンドラーを設定します。
      deleteBtn.onclick = deleteItem;

      // カーソルにおける次の項目へと反復処理を進めます。
      cursor.continue();
    } else {
      // またもや、リスト項目が空であれば、'No notes stored' (メモ書きは何も保存されていません) というメッセージを表示します。
      if(!list.firstChild) {
        const listItem = document.createElement('li');
        listItem.textContent = 'No notes stored.';
        list.appendChild(listItem);
      }
      // 反復処理をすべきカーソル項目がこれ以上ない場合、そのように示します。
      console.log('Notes all displayed');
    }
  };
}
```

再びになりますが、これを噛み砕いてみましょう。

- まず、更新した中身を埋め込む前に、{{htmlelement("ul")}} 要素の中身を空っぽにします。これを行わないと、遂には、更新のたびに追加された複製された中身からなる巨大なリストができあがってしまいます。
- 次に、{{domxref("IDBDatabase.transaction()")}} と {{domxref("IDBTransaction.objectStore()")}} を用いて、`addData()` で行ったのと同様にして (ただしここではこれらを繋いで 1 行にまとめている点が異なりますが)、`notes` というオブジェクト・ストアへの参照を求めます。
- 次の段階は、{{domxref("IDBObjectStore.openCursor()")}} メソッドを使って、カーソルに対する要求を開くことです。カーソルとは、オブジェクト・ストア内の全レコードにわたって反復処理を行うのに使える構造体です。コードをより簡潔にするために、この行の最後に `onsuccess` ハンドラーを繋げています。カーソルが成功裡に返されると、このハンドラーが実行されます。
- `let cursor = e.target.result` を用いて、カーソル自体 ({{domxref("IDBCursor")}} オブジェクト) に対する参照を求めています。
- 次に、カーソルがデータストアのレコードを含むか否かを調べます (`if(cursor){ ... }`)。もし含むなら、DOM 断片を作成し、その断片にレコードのデータを埋め込み、ページ内に (`<ul>` 要素の内部に) その断片を挿入します。また、クリックされたら `deleteItem()` 関数を実行することによって当該メモ書きを削除するような削除ボタンも含めておきます。この関数は、次の節で見ることにします。
- `if` ブロックの最後では、{{domxref("IDBCursor.continue()")}} メソッドを用いてカーソルをデータストア内の次のレコードへと進め、`if` ブロックの中身を再び実行します。反復処理をすべき別のレコードがある場合には、こうすることにより、その別のレコードがページに挿入されることになり、その後また `continue()` が実行され、以下同様に続きます。
- 反復処理をすべき対象のレコードがもうない場合、`cursor` は `undefined` を返すことになります。よって、`if` ブロックの代わりに `else` ブロックが実行されることになります。このブロックでは、`<ul>` に何らかのメモ書きが挿入されたかどうかを調べます。もし何も挿入されていなければ、何もメモ書きが保存されていなかった旨を述べるメッセージを挿入します。

### メモ書きを削除します

上述のとおり、メモ書きの削除ボタンが押されると、そのメモ書きは削除されます。これは、`deleteItem()` 関数により達成されます。この関数は以下のようなものです。

```js
// deleteItem() 関数を定義します。
function deleteItem(e) {
  // 削除したいタスクの名前 (訳注: ID の間違い?) を取り出します。
  // それを IDB で使おうとする前に、数値に変換する必要があります。
  // IDB のキーの値には、型による区別があるのです。
  let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));

  // データベース・トランザクションを開き、当該タスクを削除します。その際、上記で取得した ID を用いて、当該タスクを見つけます。
  let transaction = db.transaction(['notes'], 'readwrite');
  let objectStore = transaction.objectStore('notes');
  let request = objectStore.delete(noteId);

  // データ項目を削除したことを報告します。
  transaction.oncomplete = function() {
    // ボタンの親——リスト項目——を削除します。
    // すると、それはもはや表示されなくなります。
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log('Note ' + noteId + ' deleted.');

    // 再びになりますが、リスト項目が空の場合は、'No notes stored' (メモ書きは何も保存されていません) というメッセージを表示します。
    if(!list.firstChild) {
      let listItem = document.createElement('li');
      listItem.textContent = 'No notes stored.';
      list.appendChild(listItem);
    }
  };
}
```

- これの最初の部分は説明を要します。 `Number(e.target.parentNode.getAttribute('data-note-id'))` を用いて、削除すべきレコードの ID を取り出します。レコードの ID は、最初にその `<li>` が表示された際にその `<li>` の `data-note-id` という属性に保存されている、ということを思い出してください。しかし、その属性は、 [Number()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number) というグローバル・ビルトイン・オブジェクトを通じて渡す必要があります。なぜなら、属性は今のところ文字列であり、こうしなければデータベースに認識されないからです。
- それから、以前に見たのと同じパターンを使って、オブジェクト・ストアへの参照を求めます。そして、{{domxref("IDBObjectStore.delete()")}} メソッドを用いて、データベースから当該レコードを削除します。その際、データベースには ID を渡します。
- データベース・トランザクションが完了したら、当該メモ書きの `<li>` を DOM から削除します。そして再び、`<ul>` が現時点で空かどうかを調べ、適宜注記を挿入します。

さあ、これで全部終わりです! あなたの例は今やちゃんと動くはずですよ。

もし問題があれば、気軽に [ライブ例と突き合わせてみてください](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) ([ソースコード](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index.js) も参照してください)。

### IndexedDB を通じて複雑なデータを保存します

上述のとおり、IndexedDB は、単純なテキスト文字列以上のものを保存するのに使えます。望むものはほとんど何でも——動画や静止画像のブロブ (blob) のような、複雑なオブジェクトまで含めて——保存できるのです。しかも、他のどの型のデータと比べても、達成するのがずっと困難だという訳でもないのです。

やり方を実演するために、[IndexedDB 動画ストア](https://github.com/mdn/learning-area/tree/master/javascript/apis/client-side-storage/indexeddb/video-store) と呼ばれる別の例を書きました ([ここでライブで動いているところも](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/) 参照してください)。この例を最初に実行すると、すべての動画をネットワークからダウンロードして IndexedDB データベースに保存し、それから、{{htmlelement("video")}} 要素内部の UI の中に動画を表示します。二度目に実行すると、動画を表示する前に、データベース内の動画を見つけ出し、(ネットワークからダウンロードする) 代わりにそこから動画を取ってきます。こうすることにより、後続のロードは高速化され、帯域幅をあまり食わなくなります。

この例のもっとも興味深い部分を見て回りましょう。すべては見ないことにします。というのも、多くの部分は前の例に類似しており、コードにはちゃんとコメントがつけてありますから。

1.  この単純な例のために、取得すべき動画の名前をオブジェクトの配列の形で保存しておきました。

    ```js
    const videos = [
      { 'name' : 'crystal' },
      { 'name' : 'elf' },
      { 'name' : 'frog' },
      { 'name' : 'monster' },
      { 'name' : 'pig' },
      { 'name' : 'rabbit' }
    ];
    ```

2.  まずはじめに、データベースを成功裡に開くことができたら、`init()` 関数を実行します。これは、異なる動画の名前をループしてゆきますが、その際、それぞれの名前で識別されるレコードを `videos` というデータベースからロードしようと試みます。

    各々の動画がデータベース内で見つかったら (これは、`request.result` が `true` と評価されるかどうかを調べることにより、容易に確認できます。もしレコードが存在しなければ、`undefined` となります)、その動画ファイル (ブロブとして保存されています) および動画の名前が、UI に配置するために、すぐに `displayVideo()` 関数へと渡されます。もし動画がデータベース内で見つからなければ、動画の名前が `fetchVideoFromNetwork()` 関数に渡されます。それが何のためか、見当がついていることでしょうが……そう、その動画をネットワークから取ってくるためです。

    ```js
    function init() {
      // 動画の名前を一つずつループしてゆきます。
      for(let i = 0; i < videos.length; i++) {
        // トランザクションを開き、オブジェクト・ストアを取得し、名前によって各動画を get() します。
        let objectStore = db.transaction('videos').objectStore('videos');
        let request = objectStore.get(videos[i].name);
        request.onsuccess = function() {
          // もし結果がデータベース内に存在したら (存在しなければ undefined)、
          if(request.result) {
            // displayVideo() を用いて、動画を IDB から取り出して表示します。
            console.log('taking videos from IDB');
            displayVideo(request.result.mp4, request.result.webm, request.result.name);
          } else {
            // 動画をネットワークから取ってきます。
            fetchVideoFromNetwork(videos[i]);
          }
        };
      }
    }
    ```

3.  以下のスニペットは、`fetchVideoFromNetwork()` の内部から取ったものです。ここでは、二つの別々の {{domxref("fetch()", "WindowOrWorkerGlobalScope.fetch()")}} 要求を用いて、MP4 版の動画と WebM 版の動画を取ってきます。それから、{{domxref("blob()", "Body.blob()")}} メソッドを用いて、それぞれの応答の本体をブロブとして抽出します。このブロブは、保存して後で表示することの可能な、動画のオブジェクト表現を与えてくれます。

    しかし、ここで問題があります。これらの二つの要求はどちらも非同期的なのですが、双方のプロミスが成立 (fulfill) した場合にだけ動画を表示もしくは保存しようと試みたいのです。幸い、そうした問題を扱うビルトイン・メソッドがあります。すなわち {{jsxref("Promise.all()")}} です。これは一つの引数——成立したかどうかを調べたい個々のプロミスすべてに対する参照を配列に入れたもの——をとり、これ自体がプロミスに基づいています。

    それらのプロミスすべてが成立したら、成立した個々の値すべてを含む配列をともなって、`all()` プロミスも成立します。`all()` のブロック内部では、以前 UI に動画を表示するために行ったのと同様にして `displayVideo()` 関数を呼び出していること、そして、それらの動画をデータベース内に保存するために `storeVideo()` 関数も呼び出していることが、お分かりでしょう。

    ```js
    let mp4Blob = fetch('videos/' + video.name + '.mp4').then(response =>
      response.blob()
    );
    let webmBlob = fetch('videos/' + video.name + '.webm').then(response =>
      response.blob()
    );

    // 双方のプロミスが成立したときのみ、次のコードを実行します。
    Promise.all([mp4Blob, webmBlob]).then(function(values) {
      // ネットワークから取ってきた動画を、displayVideo() により表示します。
      displayVideo(values[0], values[1], video.name);
      // storeVideo() を用いて、その動画を IDB に保存します。
      storeVideo(values[0], values[1], video.name);
    });
    ```

4.  まず `storeVideo()` を見ましょう。これは、データベースにデータを追加するための上記の例で見たパターンに、とてもよく似ています。つまり、`readwrite` (読み書き) トランザクションを開き、`videos` に対するオブジェクト・ストア参照を求め、データベースに追加すべきレコードを表すオブジェクトを作成し、それから、{{domxref("IDBObjectStore.add()")}} を用いてそのオブジェクトを単純に追加しています。

    ```js
    function storeVideo(mp4Blob, webmBlob, name) {
      // トランザクションを開き、オブジェクト・ストアを求めます。IDB に書き込めるようにするために、これは読み書きトランザクションにしておきます。
      let objectStore = db.transaction(['videos'], 'readwrite').objectStore('videos');
      // IDB に追加するレコードを作成します。
      let record = {
        mp4 : mp4Blob,
        webm : webmBlob,
        name : name
      }

      // add() を使ってレコードを IDB に追加します。
      let request = objectStore.add(record);

      ...

    };
    ```

5.  最後に、`displayVideo()` があります。これは、UI に動画を挿入するのに必要な DOM 要素を作成してから、それらの DOM 要素をページに追加します。これの一番面白い部分は、以下に示した箇所です。`<video>` 要素内に動画ブロブを実際に表示するには、{{domxref("URL.createObjectURL()")}} メソッドを使って、オブジェクト URL (メモリに記憶されている動画ブロブを指し示す内部 URL) を作成せねばならないのです。それが済んだら、オブジェクト URL を {{htmlelement("source")}} 要素の `src` 属性の値として設定できて、物事がうまく機能します。

    ```js
    function displayVideo(mp4Blob, webmBlob, title) {
      // ブロブからオブジェクト URL を作成します。
      let mp4URL = URL.createObjectURL(mp4Blob);
      let webmURL = URL.createObjectURL(webmBlob);

      ...

      const video = document.createElement('video');
      video.controls = true;
      const source1 = document.createElement('source');
      source1.src = mp4URL;
      source1.type = 'video/mp4';
      const source2 = document.createElement('source');
      source2.src = webmURL;
      source2.type = 'video/webm';

      ...
    }
    ```

## オフラインでの資産の保存

上記の例は、IndexedDB データベース内に大規模な資産を保存するアプリの作り方を既に示しており、こうすることで、それらの大規模な資産を二度以上ダウンロードする必要性をなくしています。これは既にユーザー体験にとっての多大なる進歩ではありますが、まだ一つ欠けていることがあります。すなわち、依然として、主たる HTML と CSS と JavaScript のファイルを、サイトにアクセスするたびにダウンロードせねばならないのです。これが意味することは、ネットワーク接続がない場合にはサイトが動作しないということです。

![](ff-offline.png)

ここは、 [サービスワーカー](/ja/docs/Web/API/Service_Worker_API) およびそれと緊密に関連した [キャッシュ API](/ja/docs/Web/API/Cache) の出番です。

サービスワーカーとは、ただ単に置いてあって、特定のオリジン (ウェブサイト、または、あるドメインにあるウェブサイトの一部) に対して、そこにブラウザーでアクセスした際に登録される、JavaScript ファイルのことです。登録されれば、サービスワーカーは、当該オリジンで利用可能なページを制御できます。サービスワーカーは、ロードされたページとネットワークとの間に位置して、当該オリジン宛のネットワーク要求を横取りすることにより、こうした制御を行います。

サービスワーカーが要求を横取りすると、その要求に対して望むことは何でも行えますが ([使用例の案](/ja/docs/Web/API/Service_Worker_API#Other_use_case_ideas) を参照)、典型例では、ネットワーク応答をオフラインに保存しており、その後、要求に応じて、ネットワークからの応答の代わりに、保存してあるそれらの応答を提供しています。これによって事実上、ウェブサイトを完全にオフラインで機能させることが可能になります。

キャッシュ API は、クライアント側での保存のもう一つの仕組みですが、これにはちょっとした相違点があります。キャッシュ API は HTTP 応答を保存するように設計されているのです。そのため、サービスワーカーと一緒に使うと、とてもうまく機能します。

> **Note:** サービスワーカーとキャッシュは、現在、ほとんどのモダン・ブラウザーでサポートされています。執筆時点では、Safari はまだ実装するのに忙しかったのですが、もうすぐサポートされるはずです。

### サービスワーカーの例

これがどのような感じなのかについて少しばかりお教えするために、例を見ましょう。前節で見た動画ストアの例の、別のバージョンを作っておきました。このバージョンは、サービスワーカーを介してキャッシュ API で HTML と CSS と JavaScript も保存する点を除いて、同等に機能しますが、この点のおかげで、この例がオフラインで実行できるようになるのです!

[サービスワーカーを用いた IndexedDB 動画ストアがライブで実行中のところ](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) をご覧ください。また、[ソースコードも参照してください](https://github.com/mdn/learning-area/tree/master/javascript/apis/client-side-storage/cache-sw/video-store-offline)。

#### サービスワーカーを登録します

注意すべき第一の点は、主たる JavaScript ファイル中に追加のコードが少々ある点です ([index.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js) を参照)。まず、{{domxref("Navigator")}} オブジェクトにおいて `serviceWorker` メンバーが利用可能かどうかを調べる機能検出検査を行います。もしこれが true を返したら、サービスワーカーの少なくとも基本部分がサポートされていることが分かります。ここの内部では、{{domxref("ServiceWorkerContainer.register()")}} メソッドを用いて、`sw.js` ファイルに含まれるサービスワーカーを、このファイルのあるオリジンに対して登録します。すると、同一ディレクトリーまたは下位ディレクトリーにあるページを制御できるようになります。このメソッドのプロミスが成立すると、サービスワーカーは登録されたものと見なされます。

```js
  // サイトがオフラインで動くようにする処理を制御するために、サービスワーカーを登録します。

  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
```

> **Note:** `sw.js` ファイルに至るまでの、与えられたパスは、サイト・オリジンに対して相対的なのであり、上記コードを含む JavaScript ファイルに対して相対的なのではありません。サービスワーカーは `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` にあります。オリジンは `https://mdn.github.io` です。よって、与えられるパスは、`/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` でなくてはなりません。もしこの例を御自分のサーバーにホストしたいとお思いでしたら、それに合わせて、ここを変更せねばなりません。これはやや混乱を招くところですが、セキュリティ上の理由から、この方法で動作する必要があるのです。

#### サービスワーカーをインストールします

サービスワーカーの制御下にあるいずれかのページが次にアクセスされた際には (たとえば、この例がリロードされたときには)、サービスワーカーがそのページに対してインストールされます。それが意味することは、サービスワーカーがそのページを制御し始めるだろう、ということです。これが起きると、サービスワーカーに対して `install` イベントを発火させます。サービスワーカー自体の内部には、当該インストールに応じるコードを書くことができます。

[sw.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) ファイル (サービスワーカー) 内の例を見てみましょう。`self` に対して `install` リスナーが登録されるのがお分かりでしょう。この `self` というキーワードは、サービスワーカー・ファイルの内部からサービスワーカーのグローバル・スコープを参照する手段です。

`install` ハンドラーの内部では、{{domxref("ExtendableEvent.waitUntil()")}}メソッド——イベント・オブジェクト上で使えます——を用いて、当メソッドの内部のプロミスが成功して成立するまではブラウザーはサービスワーカーのインストールを完了させるべきではない、と知らせます。

ここは、キャッシュ API が動作しているのが見られる箇所です。応答を保存できる新規キャッシュ・オブジェクト (IndexedDB オブジェクト・ストアと似ています) を開くために、{{domxref("CacheStorage.open()")}} メソッドを使います。このプロミスは、`video-store` というキャッシュを表現する {{domxref("Cache")}} オブジェクトをともなって成立します。その後、一連の資源を取ってきて、その応答をキャッシュに追加するために、{{domxref("Cache.addAll()")}} メソッドを使います。

```js
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/',
       '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html',
       '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js',
       '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css'
     ]);
   })
 );
});
```

さて、これで終わりです。インストールが済みました。

#### さらなる要求に応答します

HTML ページに対してサービスワーカーが登録されてインストールされ、関連する資産がすべてキャッシュに追加されれば、ほぼ開始準備が整っています。すべきことは、あと一つだけです。つまり、さらなるネットワーク要求に応答するための何らかのコードを書くことです。

`sw.js` における第二のちょっとしたコードがしていることは、こうです。すなわち、サービスワーカーのグローバル・スコープにもう一つのリスナーを追加し、これにより、`fetch` イベントが生じたときにハンドラー関数を実行します。このイベントは、サービスワーカーの登録先のディレクトリー内の資産に対してブラウザーが要求を出す際には、いつでも生じます。

ハンドラーの内部では、要求された資産の URL をまず記録します。それから、{{domxref("FetchEvent.respondWith()")}} メソッドを使って、その要求に対するカスタム応答を提供します。

このブロックの内部では、{{domxref("CacheStorage.match()")}} を用いて、マッチング要求 (URL にマッチします) がいずれかのキャッシュの中に見つかるかどうかを調べます。このプロミスは、マッチが見つからなければ (訳注: 正しくは「見つかれば」?) そのマッチする応答をともなって成立し、マッチが見つからなければ `undefined` となります。

もしマッチが見つかれば、単純にそれをカスタム応答として返します。もしマッチが見つからなければ、代わりに、ネットワークから応答を [fetch()](/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch) して、それを返します。

```js
self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
```

これで私たちの単純なサービスワーカーは終わりです。サービスワーカーを使ってできる、もっと多くのことがありますが、より詳しくは、[service worker cookbook](https://serviceworke.rs/) を参照してください。また、[ウェブアプリへの Service Worker とオフラインの追加](https://developers.google.com/web/fundamentals/codelabs/offline/) という記事について、著者の Paul Kinlan さんに感謝します。あの記事のおかげで、この単純な例の着想を得られました。

#### この例をオフラインで試します

[サービスワーカー の例](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) を試すには、それが確実にインストールされるように、二、三度ロードする必要があるでしょう。それが済んだら、以下のことができます。

- ネットワーク接続ケーブルを抜いてみましょう。あるいは、Wi-Fi を切ってみましょう。
- Firefox を使っているなら、\[ファイル] > \[オフライン作業] を選択してください。
- Chrome を使っているなら、\[デベロッパーツール] へ進み、 \[_Application] > \[Service Workers]_ を選び、それから、\[_Offline]_ のチェックボックスをチェックしてください。

この例のページをもう一度リフレッシュすれば、当該ページが依然として、まさに申し分なくロードされているところを見ることになるはずです。あらゆるものがオフラインに保存されています。すなわち、ページ資産はキャッシュに保存されており、動画は IndexedDB データベースに保存されています。

## まとめ

これで終わりです。クライアント側での保存の技術についてのこの概要を、皆さんが有用だと思ってくださったのであれば良いな、と望んでいます。

## あわせて参照

- [Web storage API](/ja/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/ja/docs/Web/API/IndexedDB_API)
- [Cookies](/ja/docs/Web/HTTP/Cookies)
- [Service worker API](/ja/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

## このモジュール

- [Web API の紹介](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [ドキュメントの操作](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [サーバからのデータ取得](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [サードパーティ API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [グラフィックの描画](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [動画と音声の API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [クライアント側ストレージ](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
