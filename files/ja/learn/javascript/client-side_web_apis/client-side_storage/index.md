---
title: クライアント側ストレージ
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
l10n:
  sourceCommit: e1f571eced916f60ca387ecb562271f6235beb5c
---

{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

現代のブラウザーは、ウェブサイトがユーザーの許可を得た上で、ユーザーのコンピューターにデータを格納し、必要なときにそれを取得するためのさまざまな方法に対応しています。これにより、データを長期保存したり、サイトや文書をオフラインで使用するために保存したり、サイトのユーザー固有の設定を保持したりと、さまざまなことが可能になります。この記事では、これらがどのように動作するのか、ごく基本的なことを説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        JavaScript の基本
        （<a href="/ja/docs/Learn/JavaScript/First_steps">第一歩</a>、
        <a href="/ja/docs/Learn/JavaScript/Building_blocks"
          >構成要素</a
        >,
        <a href="/ja/docs/Learn/JavaScript/Objects">JavaScript のオブジェクト</a>）、
        <a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >クライアントサイド API の基本</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        アプリケーションデータを格納するために、クライアント側ストレージ API を使用する方法について学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## クライアント側ストレージとは

MDN 学習領域の他の場所で、[静的サイト](/ja/docs/Learn/Server-side/First_steps/Client-Server_overview#静的サイト)と[動的サイト](/ja/docs/Learn/Server-side/First_steps/Client-Server_overview#動的サイト)の違いについて説明しました。現代の主要なウェブサイトのほとんどは動的です。何らかのデータベース（サーバー側ストレージ）を使用してサーバーにデータを格納し、[サーバー側](/ja/docs/Learn/Server-side)コードを動作させて必要なデータを取得し、静的なページテンプレートに挿入し、結果の HTML をクライアントに提供してユーザーのブラウザーで表示させています。

クライアント側ストレージは、同様の原理で動作しますが、用途は異なります。これは、クライアント（つまりユーザーのマシン）上にデータを格納し、必要なときにそれを取得することを可能にする JavaScript API で構成されています。これには、以下のような多くの明確な用途があります。

- サイトの環境設定のパーソナライズ（ユーザーが選択したカスタムウィジェット、配色、フォントサイズの表示など）。
- 前回のサイト活動の維持（前回のセッションからショッピングカートの内容を格納する、ユーザーが以前ログインしていたかどうかを記憶する、など）。
- データや資産をローカルに保存することで、サイトのダウンロードを高速化（低コスト化）したり、ネットワーク接続がなくても使用できるようにしたりする。
- ウェブアプリケーションで作成した文書をオフラインで使用するための、ローカルへの保存

クライアント側とサーバー側のストレージが一緒に使用されることがよくあります。例えば、音楽ファイル（ウェブゲームや音楽プレーヤーアプリケーションで使用できる）を一括してダウンロードし、クライアント側のデータベースに格納し、必要に応じて再生できるようにすることができます。ユーザーが音楽ファイルをダウンロードするのは最初だけで、その後でアクセスした場合はデータベースから取得することになります。

> **メモ:** クライアント側ストレージ API を使用して格納できるデータの量には上限があります（おそらく個々の API ごとと、総量の両方）。正確な上限はブラウザーによって異なり、またユーザーの設定に基づく可能性もあります。詳細な情報は[ブラウザーのストレージ制限と削除基準](/ja/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)を参照してください。

### 古い流儀: クッキー

クライアント側ストレージの概念は、昔からありました。ウェブの初期から、サイトは[クッキー](/ja/docs/Web/HTTP/Cookies)を使用して、ウェブサイトでのユーザー操作をパーソナライズするために情報を格納してきました。これは、ウェブで一般的に使用されているクライアント側ストレージの最も初期の形態です。

最近では、クライアント側のデータを格納するために利用できるより簡単な仕組みがあるため、この記事ではクッキーを使用する方法を教えません。しかし、これはクッキーが現代のウェブで完全に無用であるという意味ではありません。クッキーは、セッション ID やアクセストークンのような、ユーザーの個人設定や状態に関連するデータを格納するために、今でも一般的に使用されています。クッキーについての詳細情報は、 [HTTP クッキーの使用](/ja/docs/Web/HTTP/Cookies)の記事を参照してください。

### 新しい流儀: ウェブストレージと IndexedDB

上で触れた「簡単な」機能には、以下のものがあります。

- [ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API) は、名前とそれに対応する値からなる、より小さなデータ項目を格納し、取得するための仕組みを提供します。これは、ユーザーの名前、ログインしているかどうか、画面の背景で使う色など、簡単なデータだけを格納する必要がある場合に有用です。
- [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) は、複雑なデータを格納するための完全なデータベースシステムをブラウザーに提供します。これは、顧客レコードの完全な集合から、音声ファイルや動画ファイルのような複雑なデータ型にまで使用することができます。

以下ではこれらの API について学ぶことになります。

### キャッシュ API

{{domxref("Cache", "キャッシュ", "", 1)}} API は、特定のリクエストに対する HTTP レスポンスを格納するために設計されており、ウェブサイトの資産をオフラインで格納し、その後ネットワーク接続なしでサイトを使用できるようにするようなことを行うのに、とても有用です。 Cache は通常、サービスワーカー API と組み合わせて使用されますが、必ずしもそうでなければならないというわけではありません。

キャッシュとサービスワーカーの使用は高度なトピックであるため、この記事ではあまり詳しく説明しませんが、以下の[オフライン資産ストレージ](#オフライン資産ストレージ)のセクションで例を示す予定です。

## 単純なデータの保存 — ウェブストレージ

[ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API) はとても簡単に使えます。（文字列や数などに限定された）データからなる単純な名前／値のペアを保存し、必要なときにその値を取り出します。

### 基本的構文

以下に方法を示しましょう。

1. まず、GitHub 上の[ウェブストレージの空白テンプレート](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html)へ行ってください（新規タブで開いてください）。
2. ブラウザーの開発者ツールの JavaScript コンソールを開いてください。
3. ウェブストレージのデータはすべて、ブラウザーの中にある 2 つのオブジェクト風の構造、 {{domxref("Window.sessionStorage", "sessionStorage")}} と {{domxref("Window.localStorage", "localStorage")}} の中に入っています。前者は、ブラウザーを開いている間だけデータを維持し（ブラウザーを閉じるとデータは失われる）、後者はブラウザーを閉じてから再び開いた後でもデータを維持するものです。一般的には後者の方が有用なので、この記事では後者を使用することにします。

   {{domxref("Storage.setItem()")}} メソッドによって、ストレージ内にデータ項目を保存できます。このメソッドは 2 つの引数をとります。すなわち、その項目の名前と、その値です。JavaScript コンソールに以下のように打ち込んでみてください（もし良ければ、値は自分の名前に変更してください）。

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. {{domxref("Storage.getItem()")}} メソッドは 1 つの引数をとります。つまり、取り出したいデータ項目の名前です。そして、このメソッドは、その項目の値を返します。今度は JavaScript コンソールに以下の行を打ち込んでください。

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   2 行目を入力すると、`myName` という変数が今や `name` というデータ項目の値を保有していることが分かるはずです。

5. {{domxref("Storage.removeItem()")}} メソッドは 1 つの引数をとります。つまり、削除したいデータ項目の名前です。このメソッドは、ウェブストレージからその項目を削除します。 JavaScript コンソールに以下の行を打ち込んでください。

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   3 行目は、今度は `null` を返すはずです。というのも、もはや `name` という項目はウェブストレージ内に存在しないからです。

### データの持続

ウェブストレージの一つの重要な特徴は、ページの読み込みまたいで（さらに、`localStorage` の場合には、ブラウザーを終了させた場合も）データが持続する、という点です。この点を見てみましょう。

1. もう一度、ウェブストレージの空白テンプレートを開いてください。ただし今回は、本チュートリアルを開いたのとは別のブラウザーで開いてください。こうすることで、扱いやすくなります。
2. 以下の行をブラウザーの JavaScript コンソールに打ち込んでください。

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   name という項目が返されるのが分かるはずです。

3. さてここでブラウザーを終了させてから再び起動して開いてください。
4. 再び、以下の行を入力してください。

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   ブラウザーを終了させてから再び開いたのに、それでも値が利用可能である、ということが分かるはずです。

### ストレージはドメインごとに独立

データストアはドメインごと（ブラウザーに読み込まれるウェブアドレスが別個のものごと）に用意されています。 2 つのウェブサイト（例えば google.com と amazon.com）を読み込んで、 1 つのウェブサイトにアイテムを格納しようとすると、それは他のウェブサイトでは利用できないことが分かるでしょう。

これは理にかなっています。もしウェブサイトがお互いのデータを見ることができたら、セキュリティ上の問題が発生することは想像に難くありません。

### より踏み込んだ例

この新しく得た知識を応用して、ウェブストレージがどのように使用できるかを知るために、 動作する例を書いてみましょう。この例では、名前を入力すると、ページが更新された後でパーソナライズされた挨拶ができるようになります。名前はウェブストレージに格納されているので、この状態はページやブラウザーが再読み込みされたときにも維持されます。

この例の HTML を [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) で入手できます。これは、ヘッダーとコンテンツとフッターを備えた簡素なウェブサイトと、名前を入力するためのフォームとを含みます。

![ヘッダー、コンテンツ、フッターのセクションがあるウェブサイトのスクリーンショットです。ヘッダーは、左側にウェルカムテキスト、右側に「忘れる」とラベル付けされたボタンがあります。コンテンツには、見出しと、それに続く2段落のダミーテキストがあります。フッターには、 'Copyright nobody. Use the code as you like' とあります。](web-storage-demo.png)

この例を組み上げましょう。すると、これがどのように機能するのか理解できるでしょう。

1. まず、自分のコンピューターの新しいディレクトリーに、 [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) ファイルのローカルコピーを作成してください。
2. 次に、 HTML が JavaScript ファイルの `index.js` を `<script src="index.js" defer></script>` のような行で参照している方法に注意してください。このファイルを作成し、 JavaScript のコードをそこに書く必要があります。 HTML ファイルと同じディレクトリーに `index.js` ファイルを作成してください。
3. まず、この例で操作する必要のあるすべての HTML の機能への参照を作成します。これらの参照はアプリのライフサイクルで変更する必要がないため、すべて定数として作成します。以下の行を JavaScript ファイルに追加してください。

   ```js
   // 必要な定数を作成
   const rememberDiv = document.querySelector(".remember");
   const forgetDiv = document.querySelector(".forget");
   const form = document.querySelector("form");
   const nameInput = document.querySelector("#entername");
   const submitBtn = document.querySelector("#submitname");
   const forgetBtn = document.querySelector("#forgetname");

   const h1 = document.querySelector("h1");
   const personalGreeting = document.querySelector(".personal-greeting");
   ```

4. 次は、送信ボタンが押されたときにフォームが実際に送信されるのを阻止するために、小さなイベントリスナーを記載する必要があります。これは私たちが望むような動作ではないからです。前回のコードの下に、次のスニペットを追加してください。

   ```js
   // ボタンが押されたときにフォームを送信しないようにする
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. 次に、イベントリスナーを追加する必要があります。このイベントリスナーのハンドラー関数は、"Say hello" ボタンがクリックされたときに動作するようにします。コメントでそれぞれが何を行うか詳細に説明していますが、要するにここではユーザーがテキスト入力ボックスに入力した名前を受け取り、 `setItem()` を使用してウェブストレージに保存し、次に `nameDisplayCheck()` という関数を呼び出して実際のウェブサイトの更新を処理しているのです。これをコードの一番下に追加してください。

   ```js
   // 'Say hello' ボタンがクリックされたら関数を実行する
   submitBtn.addEventListener("click", () => {
     // 入力された名前をウェブストレージに保存
     localStorage.setItem("name", nameInput.value);
     // nameDisplayCheck() を動作させ、パーソナライズされた挨拶の表示と、
     // フォームの表示を更新する
     nameDisplayCheck();
   });
   ```

6. この時点で、"Forget" ボタンがクリックされたときに関数を実行するためのイベントハンドラーも必要です。 "Forget" ボタンは、 "Say hello" ボタンがクリックされた後にのみ表示されます（二つのフォーム状態が行ったり来たり切り替わります）。この関数では、`removeItem()` を用いてウェブストレージから `name` という項目を削除し、その後、表示を更新するために `nameDisplayCheck()` を再び実行します。これを末尾に付け加えてください。

   ```js
   // 'Forget' ボタンがクリックされたら関数を実行する
   forgetBtn.addEventListener("click", () => {
     // 保存してある名前をウェブストレージから削除
     localStorage.removeItem("name");
     // 再び nameDisplayCheck() を実行して、一般的な挨拶を表示するとともに
     // フォーム表示を更新する
     nameDisplayCheck();
   });
   ```

7. 次に `nameDisplayCheck()` 関数そのものを定義する時が来ました。ここでは、条件テストとして `localStorage.getItem('name')` を使用して、 name 項目がウェブストレージに格納されているかどうかを調べています。 name が格納されていれば、この呼び出しを `true` と評価し、格納されていなければ、`false` と評価します。呼び出しが `true` と評価された場合、パーソナライズされた挨拶を表示し、フォームの "forget" 部分を表示し、フォームの "Say hello" 部分は非表示にします。呼び出した結果が `false` ならば、一般的な挨拶を表示し、その逆の処理を行います。再び、以下に示すコードを一番下に記述する。

   ```js
   // nameDisplayCheck() という関数を定義する
   function nameDisplayCheck() {
     // 'name' というデータ項目がウェブストレージに保存されているかどうかを調べる
     if (localStorage.getItem("name")) {
       // もし保存されていたら、個人に合わせた挨拶を表示
       const name = localStorage.getItem("name");
       h1.textContent = `Welcome, ${name}`;
       personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
       // フォームのうち 'remember' の部分を隠し、'forget' の部分を表示
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // もし保存されていなければ、一般的な挨拶を表示
       h1.textContent = "Welcome to our website ";
       personalGreeting.textContent =
         "Welcome to our website. We hope you have fun while you are here.";
       // フォームのうち 'forget' の部分を隠し、'remember' の部分を表示
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. 最後になりますが、ページが読み込まれたときに `nameDisplayCheck()` 関数を実行する必要があります。これを行わないと、パーソナライズされた挨拶文はページの再読み込み時に維持されません。コードの一番下に以下のように追加してください。

   ```js
   nameDisplayCheck();
   ```

例が完成しました。よくできましたね! 現時点で残っているのは、コードを保存して HTML ページをブラウザーでテストすることだけです。[ライブ実行される完成版をここで](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html)見られます。

> **メモ:** [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)のところには、探究するにはほんの少しだけ更に複雑な別の例もあります。

> **メモ:** 完成版のソースのうち `<script src="index.js" defer></script>` という行では、`defer` 属性により、ページを読み込み終わるまでは {{htmlelement("script")}} 要素の中身を実行しないように指定しています。

## 複雑なデータを保存する — IndexedDB

[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) （ときには IDB と省略します）は、ブラウザーで利用可能であり、複雑で関係性のあるデータを保存できる、完全なデータベースシステムです。そのデータの型は、文字列または数値のような単純な値に限定されません。動画や静止画像、そして、その他のものもほとんどすべて、 IndexedDB インスタンスに保存することができます。

しかし、これには代償があります。IndexedDB はウェブストレージ API よりも使うのがはるかに複雑です。この節では、実際にそれが可能なことの表面に触れるだけですが、 始めるには十分な情報を提供します。

### メモのストレージの例での作業

ここでは、ブラウザーの中にメモを格納し、好きな時に閲覧・削除できるようにする例を実行し ましょう。自分で構築してもらい、IDB の最も基本的な部分を説明しながら、進めていきます。

アプリは、次のような外見です。

![IndexDBメモのデモ画面では、4つのセクションがあります。最初のセクションはヘッダーです。2つ目のセクションは、作成されたすべてのメモを掲載しています。2 つのメモがあり、それぞれに削除ボタンがあります。3 つ目のセクションはフォームで、'Note title' と 'Note text' の 2 つの入力欄と 'Create new note' と書かれたボタンがあります。一番下のセクションのフッターには、'Copyright nobody. Use the code as you like' とあります。](idb-demo.png)

メモ書きの各々には題名と何らかの本文があり、題名と本文のそれぞれは別々に編集できます。以下で見てゆく JavaScript コードには、何が起きているのかを理解する手助けとなる詳しいコメントがあります。

### 始めましょう

1. まず、[`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html)、 [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css)、 [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) というファイルのローカルコピーを、ローカルマシンの新規ディレクトリー内に作成してください。
2. ファイルを見てください。 HTML は、ヘッダーとフッター、そしてメモを表示する場所とデータベースに新しいメモを入力するフォームを含むメインコンテンツエリアを持つウェブサイトを定義していることがわかるでしょう。 CSS は、何が起こっているかを明確にするために、いくつかのスタイル設定を提供しています。 JavaScript ファイルには、メモが表示される {{htmlelement("ul")}} 要素、タイトルと本文の {{htmlelement("input")}} 要素、 {{htmlelement("form")}} 自体、および {{htmlelement("button")}} への参照を含む 5 つの宣言済み定数が含まれています。
3. JavaScript ファイルの名前を `index.js` に変更してください。コードをそこに追加し始める準備がこれで整いました。

### データベースの初期設定

では、実際にデータベースを設定するには、最初の段階で何をしなければならないかを見てみましょう。

1. 定数の宣言の下に、以下の行を追加してください。

   ```js
   // 開いているデータベースを格納するために、 db オブジェクトのインスタンスを作成します。
   let db;
   ```

   ここでは、`db` と呼ばれる変数を宣言しています。これは後に、データベースを表すオブジェクトを記憶するのに使われます。この変数を何箇所かで使うつもりなので、物事を容易にするために、ここでこの変数を大域的に宣言しておきました。

2. 次に、以下のものをコードの末尾に加えてください。

   ```js
   // データベースを開きます。データベースがまだ存在しない場合は作成されます。
   // （後述の upgradeneed ハンドラーを参照）。
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   この行は、 `notes_db` というデータベースのバージョン `1` を開くためのリクエストを作成します。もしこれがまだ存在しない場合は、後続のコードで作成されます。このリクエストパターンは、 IndexedDB 全体でとても多く使用されるでしょう。データベース処理には時間がかかります。結果を待つ間にブラウザーがハングアップするのは避けたいので、データベースの操作は{{Glossary("asynchronous", "非同期")}}です。つまり、すぐに実行するのではなく、将来のある時点で実行し、実行が完了したら通知を受け取ります。

   IndexedDB でこれを扱うには、リクエストオブジェクトを作成します（これは好きなように名付けることができます。ここでは `openRequest` と名付けているので、何のためのオブジェクトかは明らかでしょう）。そして、リクエストが完全に完了したり、失敗したりしたときにコードを実行するために、イベントハンドラーを使用します。

   > **メモ:** バージョン番号は重要です。もし、データベースをアップグレードしたい場合（例えば、テーブル構造を変更するなど）、バージョンを上げ、 `upgradeneeded` ハンドラー（下記参照）の内部で異なるスキーマを指定するなどして、コードを再度実行する必要があります。このチュートリアルでは、データベースのアップグレードについては触れません。

3. 前回追加した部分のすぐ下に、次のイベントハンドラーを追加してください。

   ```js
   // error ハンドラーは、データベースがうまく開けなかったことを意味します。
   openRequest.addEventListener("error", () =>
     console.error("Database failed to open"),
   );

   // success ハンドラーは、データベースがうまく開けたことを意味します。
   openRequest.addEventListener("success", () => {
     console.log("Database opened successfully");

     // 開いたデータベースオブジェクトを db という変数に記憶します。これは以降で頻繁に使われます。
     db = openRequest.result;

     // IDB 内の既存のメモ書きを表示するために、 displayData() 関数を実行します。
     displayData();
   });
   ```

   {{domxref("IDBRequest/error_event", "error")}} イベントハンドラーは、システムがリクエストに失敗したと言って戻ってきたときに実行されます。これによって、この問題に対応することができます。この例では、 JavaScript のコンソールにメッセージを表示するだけです。

   {{domxref("IDBRequest/success_event", "success")}} イベントハンドラーは、リクエストが正常に返された場合、つまりデータベースが正常に開かれた場合に実行されます。この場合、開いたデータベースを表すオブジェクトが {{domxref("IDBRequest.result", "openRequest.result")}} プロパティで利用できるようになり、データベースを操作することができるようになります。後で使用するために、先に作成した `db` 変数にこの値を格納しておきます。また、 `displayData()` という関数も呼び出し、 {{HTMLElement("ul")}} の中にデータベースのデータを表示します。ここでは、ページを読み込むとすぐにデータベースにあるメモが表示されるように、この関数を実行しています。後で `displayData()` を定義したものを見ることになります。

4. この節の最後に、データベースを設定するためのおそらく最も重要なイベントハンドラーを追加します。 {{domxref("IDBOpenDBRequest/upgradeneeded_event", "upgradeneed")}} です。このハンドラーは、データベースがまだ設定されていない場合、またはデータベースが既存の格納されたデータベースよりも大きなバージョン番号で開かれた場合（アップグレードを実行する場合）実行されます。前回のハンドラーの下に、以下のコードを追加してください。

   ```js
   // データベースのテーブルがまだ存在しない場合は、それを設定します。
   openRequest.addEventListener("upgradeneeded", (e) => {
     // 開いたデータベースの参照を取得します。
     db = e.target.result;

     // 自動増加するキーを含んだ、メモを格納するための objectStore を
     // 作成します（基本的に単一の表のように）。
     const objectStore = db.createObjectStore("notes_os", {
       keyPath: "id",
       autoIncrement: true,
     });

     // objectStore にどのようなデータ項目を格納するかを定義します。
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("Database setup complete");
   });
   ```

   ここでは、データベースのスキーマ（構造）、つまり、データベースに含まれるカラム（またはフィールド）の集合を定義します。ここでは、まず既存のデータベースへの参照を、イベントのターゲット (`e.target.result`) の `result` プロパティ (`request` オブジェクト) から取得します。これは `success` イベントハンドラーの `db = openRequest.result;` という行と同じですが、ここでは別個に行う必要があります。それは、`upgradeneeded` イベントハンドラーが（必要なら） `success` イベントハンドラーの前に実行されるためです。つまり、この処理を行わない場合は `db` の値を利用することはできないのです。

   次に {{domxref("IDBDatabase.createObjectStore()")}} を使用して、呼び出されたデータベースの中に `notes_os` という名前の新しいオブジェクトストアを作成します。これは、従来のデータベースシステムにおける単一の表に相当します。これに notes という名前をつけて、 `id` という `autoIncrement` キーフィールドも指定しました。新しいレコードが作成されるたびに、このフィールドに自動的に値が増加するので、開発者は明示的にこのフィールドを設定する必要はありません。キーである `id` フィールドは、レコードを削除するときや表示するときなど、レコードを一意に識別するために使用されます。

   他にも {{domxref("IDBObjectStore.createIndex()")}} メソッドを使用して、`title` （それぞれのメモのタイトルを格納）と `body` （メモの本文を格納）の 2 つのインデックス（フィールド）も作成しています。

このデータベーススキーマを設定した上で、データベースにレコードを追加し始めると、各レコードはこのようなオブジェクトとして表わされることになります。

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### データをデータベースに追加

では、データベースにレコードを追加する方法を見てみましょう。これは、ページ上のフォームを使用して行われます。

前のイベントハンドラーの下に、次の行を追加してください。これは、 `submit` イベントハンドラーを設定し、 `addData()` という関数を、フォームが送信されたとき（送信ボタン ({{htmlelement("button")}}) が押されてフォーム送信が成功したとき）に実行するようにします。

```js
// submit イベントハンドラーを作成し、フォームが送信されたときに addData() 関数が実行されるようにします。
form.addEventListener("submit", addData);
```

では、`addData()` 関数を定義しましょう。上記の行の下に、以下のものを追加してください。

```js
// addData() 関数を定義します。
function addData(e) {
  // 既定の動作を抑止します。従来通りの方法でフォームを送信したくはないからです。
  e.preventDefault();

  // フォームのフィールドに入力された値を取得し、 DB に挿入できるようにオブジェクトに格納します。
  const newItem = { title: titleInput.value, body: bodyInput.value };

  // 読み書きのデータベーストランザクションを開いて、データの追加に備えます。
  const transaction = db.transaction(["notes_os"], "readwrite");

  // すでにデータベースに追加されているオブジェクトストアを呼び出すします。
  const objectStore = transaction.objectStore("notes_os");

  // newItem オブジェクトをオブジェクトストアに追加するリクエストを行います。
  const addRequest = objectStore.add(newItem);

  addRequest.addEventListener("success", () => {
    // フォームをクリアして、次の項目の追加に備えます。
    titleInput.value = "";
    bodyInput.value = "";
  });

  // トランザクションが完了し、完全に終了した場合の成功を報告します。
  transaction.addEventListener("complete", () => {
    console.log("Transaction completed: database modification finished.");

    // 表示データの更新を行い、新しく追加された項目を表示するために、再度 displayData() を実行します。
    displayData();
  });

  transaction.addEventListener("error", () =>
    console.log("Transaction not opened due to error"),
  );
}
```

これはかなり複雑です。分解すると、以下のことを行います。

- イベントオブジェクトに対して {{domxref("Event.preventDefault()")}} を実行し、従来の方法で実際にフォームを送信しないようにします（これではページの更新が発生し、使い勝手が損なわれてしまいます）。
- データベースに入力するレコードを表すオブジェクトを作成し、フォームの入力値からそのオブジェクトに値を入力します。明示的に `id` 値を記載する必要はないことに注意してください。先ほど説明したように、この値は自動で含まれます。
- `readwrite` トランザクションを `notes_os` オブジェクト ストアに対して、 {{domxref("IDBDatabase.transaction()")}} メソッドを使用して格納するために開いてください。このトランザクションオブジェクトによって、オブジェクトストアにアクセスすることができ、新しいレコードを追加するなど、何かを行うことができます。
- {{domxref("IDBTransaction.objectStore()")}} メソッドを用いてオブジェクトストアにアクセスし、その結果を `objectStore` 変数に格納します。
- 新しいレコードを {{domxref("IDBObjectStore.add()")}} を使用してデータベースに追加します。これは、前に見たのと同じ方法で、リクエストオブジェクトを作成します。
- ライフサイクルの重要なポイントでコードを実行するために、 `request` および `transaction` オブジェクトにいくつものイベントハンドラーを追加します。リクエストが成功したら、次のメモを入力するためにフォームの入力をクリアします。トランザクションが完了したら、 `displayData()` 関数を再び実行して、ページ上のメモの表示を更新しています。

### データの表示

すでにコードの中で `displayData()` を 2 回も参照しているので、定義しておいたほうがよさそうです。前回の関数定義の下に、次のコードを追加してください。

```js
// displayData() 関数を定義します。
function displayData() {
  // ここでは、表示が更新されるたびに、リスト要素の中身を空にしています。
  // これを行わないと、新しいメモが追加されるたびに、重複して掲載されてしまいます。
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // オブジェクトストアを開き、カーソルを取得します。カーソルはストア内の
  // 異なるデータ項目をすべて反復処理します。
  const objectStore = db.transaction("notes_os").objectStore("notes_os");
  objectStore.openCursor().addEventListener("success", (e) => {
    // カーソルへの参照を取得します。
    const cursor = e.target.result;

    // 反復処理を行うべき別のデータ項目がまだあれば、このコードを実行し続けます。
    if (cursor) {
      // リスト項目、h3、p を作成し、表示する際に各データ項目を中に入れます。
      // HTML フラグメントを構成し、リストの中に追加します。
      const listItem = document.createElement("li");
      const h3 = document.createElement("h3");
      const para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // h3 および para の内部に、カーソルからのデータを入れます。
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // listItem の属性内部に、このデータ項目の ID を保存します。こうすると、
      // どの項目に対応しているのかがわかります。これは、後で項目を削除したくなったときに有用です。
      listItem.setAttribute("data-note-id", cursor.value.id);

      // ボタンを作成し、それを各 listItem の内部に設置します。
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      // ボタンがクリックされたら deleteItem() 関数が実行されるように、
      // イベントハンドラーを設定します。
      deleteBtn.addEventListener("click", deleteItem);

      // カーソルの次の項目へ反復処理を行います。
      cursor.continue();
    } else {
      // Again, if list item is empty, display a 'No notes stored' message
      if (!list.firstChild) {
        const listItem = document.createElement("li");
        listItem.textContent = "No notes stored.";
        list.appendChild(listItem);
      }
      // 反復処理をすべきカーソルの項目がこれ以上ない場合、そのように示します。
      console.log("Notes all displayed");
    }
  });
}
```

改めて、分解してみましょう。

- 最初に {{htmlelement("ul")}} 要素の中身を空にしてから、更新された内容で埋めています。これを行わないと、更新のたびに追加される重複した内容の膨大なリストが出来上がってしまいます。
- 次に、 `notes_os` オブジェクトストアへの参照を取得します。これは `addData()`で行ったように {{domxref("IDBDatabase.transaction()")}} と {{domxref("IDBTransaction.objectStore()")}} を使用しますが、ここでは 1 行にまとめて記述しています。
- 次の段階では、カーソルのリクエストを開くために {{domxref("IDBObjectStore.openCursor()")}} メソッドを使用します。これは、オブジェクトストア内のレコードを反復処理するために使用できる構造体です。コードを簡潔にするために、この行の終わりに `success` イベントハンドラーを連結しています。カーソルが正常に返されたときに、ハンドラーが実行されます。
- カーソル自身への参照（{{domxref("IDBCursor")}} オブジェクト）は、 `const cursor = e.target.result` を使用して取得します。
- 次に、カーソルにデータストアのレコードがあるかどうかを調べます (`if (cursor){ }`)。もしあれば、 DOM フラグメントを作成し、レコードのデータを入れて、ページへ挿入します（`<ul>` 要素の中）。また、削除ボタンも追加しています。このボタンをクリックすると、次の節で説明する `deleteItem()` 関数が実行され、そのメモが削除されます。
- `if` ブロックの最後では {{domxref("IDBCursor.continue()")}} メソッドを使用して、データストアの次のレコードにカーソルを進め、再び `if` ブロックの中身を実行しています。反復処理する別のレコードがあれば、それがページに挿入され、再び `continue()` が実行され、以下同様となります。
- 反復処理するレコードがなくなると、 `cursor` は `undefined` を返しますので、 `if` ブロックの代わりに `else` ブロックが実行されます。このブロックは `<ul>` に何かメモが挿入されたかどうかを調べます。もし挿入されていない場合は、メモが格納されていなかったというメッセージを挿入します。

### メモの削除

上述のとおり、メモの削除ボタンが押されると、そのメモは削除されます。これは、 `deleteItem()` 関数により実現できます。この関数は以下のようなものです。

```js
// deleteItem() 関数を定義します。
function deleteItem(e) {
  // 削除したいタスクの名前を取得します。
  // IDB で使用する前に、これを数値に変換する必要があります。
  // IDB のキー値は型が重視されます。
  const noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // データベーストランザクションを開き、タスクを削除します。上で取得した id を使用してタスクを探します。
  const transaction = db.transaction(["notes_os"], "readwrite");
  const objectStore = transaction.objectStore("notes_os");
  const deleteRequest = objectStore.delete(noteId);

  // データ項目を削除したことを報告します。
  transaction.addEventListener("complete", () => {
    // ボタンの親、すなわちリスト項目を削除します。
    // すると、それは表示されなくなります。
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log(`Note ${noteId} deleted.`);

    // この場合も、リスト項目が空であれば、「メモが格納されていません」というメッセージを表示します。
    if (!list.firstChild) {
      const listItem = document.createElement("li");
      listItem.textContent = "No notes stored.";
      list.appendChild(listItem);
    }
  });
}
```

- 最初の部分は少し説明が必要かもしれません。削除するレコードの ID を `Number(e.target.parentNode.getAttribute('data-note-id'))` を使用して取得します。レコードの ID は `<li>` が最初に表示されたときに `data-note-id` 属性で保存されていたことを思い出しましょう。しかし、この属性はグローバルな組み込みの [`Number()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number) オブジェクトを通して渡す必要があります。これはデータ型が文字列なので、数字を期待するデータベースからは認識されないためです。
- 次に、前回と同じパターンでオブジェクトストアへの参照を取得し、 {{domxref("IDBObjectStore.delete()")}} メソッドを使用して、 ID を渡しながらデータベースからレコードを削除しています。
- データベーストランザクションが完了したら、メモの `<li>` を DOM から削除し、再び `<ul>` が空になったかどうかを調べて、適切なメモを挿入します。

というわけで、これで完了です。この例はこれでうまく動作するはずです。

もし問題があれば、気軽に [ライブ例と突き合わせてみてください](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) （[ソースコード](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js) も参照してください）。

### IndexedDB を通じて複雑なデータを格納

上で述べたように、IndexedDB は文字列以外のものも格納するために使用することができます。動画や画像 Blob のような複雑なオブジェクトを含め、ほぼ全てのものを格納することができます。そして、それを実現するのは、他の型のデータよりもそれほど難しいことではありません。

その方法を示すために、私たちは [IndexedDB 動画ストレージ](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) という別の例を書きました（これを[ここでライブ実行する](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)もご覧ください）。この例を最初に実行すると、ネットワークからすべての動画をダウンロードして IndexedDB データベースに格納し、UI の {{htmlelement("video")}} 要素の中に動画を表示します。2 回目に実行したときは、データベース内の動画を見つけて、代わりにそこから取得してから表示します。これにより、その後の読み込みがはるかに速くなり、帯域幅を消費することもなくなります。

この例で最も注目される部分を見ていきましょう。すべてを見ていくわけではありません。多くは前回の例と同様で、コードには十分なコメントがつけられています。

1. この例では、取得する動画の名前をオブジェクトの配列に格納しました。

   ```js
   const videos = [
     { name: "crystal" },
     { name: "elf" },
     { name: "frog" },
     { name: "monster" },
     { name: "pig" },
     { name: "rabbit" },
   ];
   ```

2. 始めるには、データベースを正常に開くために、`init()`関数を実行します。これは、さまざまな動画の名前をループして、 `videos` データベースからそれぞれの名前で指定されたレコードを読み込もうとするものです。

   それぞれの動画がデータベースで見つかった場合（`request.result` の評価値が `true` かどうかで確認します。記録が存在しない場合は `undefined` となります）、その動画ファイル（blob として格納されています）と動画名が `displayVideo()` 関数に直接渡され、UI に配置されます。存在しない場合、動画名は `fetchVideoFromNetwork()` 関数に渡され、ご想像のとおり、ネットワークから動画を取得します。

   ```js
   function init() {
     // 動画の名前を一つずつループ処理してゆきます。
     for (const video of videos) {
       // トランザクションを開き、オブジェクトストアを取得し、名前によって各動画を get() します。
       const objectStore = db.transaction("videos_os").objectStore("videos_os");
       const request = objectStore.get(video.name);
       request.addEventListener("success", () => {
         // もし結果がデータベース内に存在したら（存在しなければ undefined）
         if (request.result) {
           // displayVideo() を用いて、動画を IDB から取り出して表示します。
           console.log("taking videos from IDB");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // 動画をネットワークから取ってきます。
           fetchVideoFromNetwork(video);
         }
       });
     }
   }
   ```

3. 以下のスニペットは、`fetchVideoFromNetwork()` 内から引用したものです。ここでは、2 つの別々の {{domxref("fetch()")}} 要求を用いて MP4 版と WebM 版の動画を読み込んでいます。次に {{domxref("Response.blob()")}} メソッドを使用してそれぞれのレスポンスの本文を blob として抽出し、後で格納したり表示したりできる動画のオブジェクト表現を得ています。

   しかし、ここで問題があります。これらの二つの要求はどちらも非同期的なのですが、双方のプロミスが履行された (fulfilled) 場合にだけ動画を表示もしくは保存しようと試みたいのです。幸い、そうした問題を扱う組み込みメソッドがあります。すなわち {{jsxref("Promise.all()")}} です。これは一つの引数 — 成立したかどうかを調べたい個々のプロミスすべてに対する参照を配列に入れたもの — をとり、これ自体がプロミスに基づいています。

   このプロミスの `then()` ハンドラー内で、先ほどと同様に `displayVideo()` 関数を呼び出して動画を UI に表示し、さらに `storeVideo()` 関数を呼び出して動画をデータベース内に格納しています。

   ```js
   // fetch() 関数を使用して MP4 版と WebM 版の動画を取得し、そのレスポンス本体を blob として公開します。
   const mp4Blob = fetch(`videos/${video.name}.mp4`).then((response) =>
     response.blob(),
   );
   const webmBlob = fetch(`videos/${video.name}.webm`).then((response) =>
     response.blob(),
   );

   // 両方のプロミスが履行されたときのみ、次のコードを実行します。
   Promise.all([mp4Blob, webmBlob]).then((values) => {
     // ネットワークから取ってきた動画を、 displayVideo() により表示します。
     displayVideo(values[0], values[1], video.name);
     // storeVideo() を用いて、その動画を IDB に保存します。
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. まず `storeVideo()` を見ましょう。これは、データベースにデータを追加するための上記の例で見たパターンに、とてもよく似ています。つまり、`readwrite` (読み書き) トランザクションを開き、`videos_os` に対するオブジェクトストアへの参照を求め、データベースに追加すべきレコードを表すオブジェクトを作成し、それから、 {{domxref("IDBObjectStore.add()")}} を用いてそのオブジェクトを単純に追加しています。

   ```js
   // storeVideo() 関数を定義します。
   function storeVideo(mp4, webm, name) {
     // トランザクションを開き、オブジェクトストアを取得し、IDB に書き込めるように読み書きできるようにします。
     const objectStore = db
       .transaction(["videos_os"], "readwrite")
       .objectStore("videos_os");

     // add() を使ってレコードを IDB に追加します。
     const request = objectStore.add({ mp4, webm, name });

     request.addEventListener("success", () =>
       console.log("Record addition attempt finished"),
     );
     request.addEventListener("error", () => console.error(request.error));
   }
   ```

5. 最後に、`displayVideo()` があります。これは、UI に動画を挿入するのに必要な DOM 要素を作成してから、それらの DOM 要素をページに追加します。これの一番面白い部分は、以下に示した箇所です。`<video>` 要素内に動画ブロブを実際に表示するには、{{domxref("URL.createObjectURL()")}} メソッドを使って、オブジェクト URL (メモリに記憶されている動画ブロブを指し示す内部 URL) を作成せねばならないのです。それが済んだら、オブジェクト URL を {{htmlelement("source")}} 要素の `src` 属性の値として設定できて、物事がうまく機能します。

   ```js
   // displayVideo() 関数を定義します。
   function displayVideo(mp4Blob, webmBlob, title) {
     // Blob からオブジェクト URL を作成する
     const mp4URL = URL.createObjectURL(mp4Blob);
     const webmURL = URL.createObjectURL(webmBlob);

     // ページに動画を埋め込むための DOM 要素を作成する
     const article = document.createElement("article");
     const h2 = document.createElement("h2");
     h2.textContent = title;
     const video = document.createElement("video");
     video.controls = true;
     const source1 = document.createElement("source");
     source1.src = mp4URL;
     source1.type = "video/mp4";
     const source2 = document.createElement("source");
     source2.src = webmURL;
     source2.type = "video/webm";

     // DOM 要素のページへの埋め込み
     section.appendChild(article);
     article.appendChild(h2);
     article.appendChild(video);
     video.appendChild(source1);
     video.appendChild(source2);
   }
   ```

## オフライン資産ストレージ

上記の例では、大きな資産を IndexedDB データベースに格納し、複数回ダウンロードする必要を避けるアプリを作成する方法を既に示しました。これはすでにユーザー体験の大きな改善ですが、まだ一つ足りないことがあります。メインの HTML、CSS、JavaScript ファイルは、サイトにアクセスするたびにダウンロードする必要があり、ネットワーク接続がないときには動作しないことを意味します。

![Firefoxのオフライン画面の内側へ、右手に2ピンプラグ、左手に2ピンソケットを持った漫画のキャラクターのイラストが描かれています。右側の辺には、オフラインモードのメッセージと「再試行」と書かれたボタンがあります。](ff-offline.png)

ここは、 [サービスワーカー](/ja/docs/Web/API/Service_Worker_API)およびそれと緊密に関連した [キャッシュ API](/ja/docs/Web/API/Cache) の出番です。

サービスワーカーとは、ブラウザーからアクセスされたときに、特定のオリジン（ウェブサイト、または特定のドメインにあるウェブサイトの一部）に対して登録される JavaScript のファイルです。登録されると、そのオリジンで利用できるページを制御することができます。読み込まれたページとネットワークの間に位置し、そのオリジンを対象としたネットワークリクエストに介入することでこれを行います。

リクエストに介入した場合、望むことは何でもできますが（[用途のアイディア](/ja/docs/Web/API/Service_Worker_API#その他の使用例)を参照）、よくある例は、ネットワークのレスポンスをオフラインで保存して、ネットワークからのレスポンスの代わりにリクエストに応答するものを提供することです。事実上、これはウェブサイトを完全にオフラインで動作させることを可能にします。

Cache API もクライアント側のストレージ機構ですが、少し異なる点があります。 HTTP レスポンスを保存するように設計されているため、サービスワーカーと一緒に非常にうまく動作します。

### サービスワーカーの例

例を見て、これがどのように見えるかを少し考えてみましょう。前の章で見たビデオストアの例の別バージョンを作成しました。この例は、HTML、CSS、JavaScript をサービスワーカー経由で Cache API に保存し、例をオフラインで実行できるようにした以外は、まったく同じように機能します。

[サービスワーカーを用いた IndexedDB ビデオストアがライブで実行中のところ](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) をご覧ください。また、[ソースコードも参照してください](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline)。

#### サービスワーカーの登録

最初に注意すべきことは、メインの JavaScript ファイルに余分なコードが格納されていることです（[index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js) を参照してください）。最初に機能検出テストを行うために、 `serviceWorker` メンバーが {{domxref("Navigator")}} オブジェクトで利用できるかどうかを確認します。これが true を返した場合、少なくともサービスワーカーの基本は対応していることが分かります。この内部では {{domxref("ServiceWorkerContainer.register()")}} メソッドを使用して、 `sw.js` ファイルに含まれるサービスワーカーをそれが存在するオリジンに対して登録し、それと同じディレクトリーまたはサブディレクトリーのページを制御できるようにします。プロミスが履行されると、サービスワーカーは登録されたものとみなされます。

```js
// サイトがオフラインで動くようにする処理を制御するために、サービスワーカーを登録します。
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(() => console.log("Service Worker Registered"));
}
```

> **メモ:** 指定された `sw.js` ファイルへのパスは、コードを含む JavaScript ファイルではなく、サイトのオリジンからの相対パスです。サービスワーカーは `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` にあります。オリジンは `https://mdn.github.io` なので、指定されたパスは `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` である必要があります。もし、この例を自分自身でホスティングしたい場合は、これを適宜変更する必要があります。これはかなり紛らわしいですが、セキュリティ上の理由からこのように作業する必要があるのです。

#### サービスワーカーのインストール

次にサービスワーカーが制御するページがアクセスされたとき（例：リロードされたとき）、サービスワーカーはそのページに対してインストールされます。つまり、そのページを制御し始めることになります。このとき、サービスワーカーに対して `install` イベントが発行されます。サービスワーカー自身の内部で、インストールに応答するコードを書くことができます。

例として、[sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) ファイル（サービスワーカー）の中を見てみましょう。インストールを待ち受けするために、`self`というキーワードが登録されているのがわかります。この `self` キーワードは、サービスワーカーファイルの内部から、サービスワーカーのグローバルスコープを参照するためのものです。

`install` ハンドラーの内部では、イベントオブジェクトで利用できる {{domxref("ExtendableEvent.waitUntil()")}} メソッドを使用して、ブラウザーはサービスワーカーのインストールを、イベント内のプロミスが正常に履行されるまで完了すべきでないことを通知しています。

ここで、キャッシュ API の動作を確認します。Domxref("CacheStorage.open()")}} メソッドを使用して、レスポンスを格納できる新しいキャッシュオブジェクトを開いています（IndexedDB オブジェクトストアのようなものです）。このプロミスは `video-store` キャッシュを表す {{domxref("Cache")}} オブジェクトで履行されます。次に {{domxref("Cache.addAll()")}} メソッドを使用して、一連のアセットをフェッチし、そのレスポンスをキャッシュに追加しています。

```js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("video-store")
      .then((cache) =>
        cache.addAll([
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
        ]),
      ),
  );
});
```

さて、これで終わりです。インストールが済みました。

#### さらなるリクエストへの応答

サービスワーカーが登録され、 HTML ページに対してインストールされ、関連するアセットがすべてキャッシュに追加されたので、ほぼ準備が整いました。やるべきことはもう一つあります。さらなるネットワークリクエストに応答するためのコードを書くことです。

これが `sw.js` の 2 つ目のコードの役割です。サービスワーカーのグローバルスコープに別のリスナーを追加して、`fetch` イベントが発生したときにハンドラー関数を実行するようにします。これは、ブラウザーが、サービスワーカーが登録されているディレクトリーにある資産に対してリクエストを行うたびに発生します。

ハンドラーの内部では、まずリクエストされた資産の URL をログ出力します。次に、{{domxref("FetchEvent.respondWith()")}} メソッドを使用して、リクエストに対する独自のレスポンスを提供しています。

このブロックの中では {{domxref("CacheStorage.match()")}} を使用して、一致するリクエスト（すなわち URL に一致する）がいずれかのキャッシュで得られるかどうかを調べています。このプロミスは、一致するものが得られた場合は一致するレスポンスで履行され、そうでない場合は `undefined` となります。

一致するものが見つかった場合、それを独自のレスポンスとして返します。そうでない場合は、ネットワークからのレスポンスを [fetch()](/ja/docs/Web/API/fetch) して、代わりにそれを返します。

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

これでサービスワーカーは終わりです。
サービスワーカーを使ってできることはまだたくさんあります。詳しくは [service worker cookbook](https://github.com/mdn/serviceworker-cookbook) を参照してください。
この例のインスピレーションを与えてくれた Paul Kinlan の記事 [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0) に多くの感謝を捧げます。

#### この例をオフラインで試す

[サービスワーカーの例](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/)を試すには、それが確実にインストールされるように、2、3 度読み込む必要があるでしょう。それが済んだら、以下のことができます。

- ネットワーク接続ケーブルを抜いてみましょう。あるいは、Wi-Fi を切ってみましょう。
- Firefox を使っているなら、\[ファイル] > \[オフライン作業] を選択してください。
- Chrome を使っているなら、\[デベロッパーツール] へ進み、 \[_Application] > \[Service Workers]_ を選び、それから、\[_Offline]_ のチェックボックスをチェックしてください。

例のページをもう一度更新しても、問題なく読み込まれるはずです。ページ資産はキャッシュに、動画は IndexedDB データベースにと、すべてオフラインで格納されています。

## まとめ

これで終わりです。クライアント側での保存の技術についてのこの概要を、皆さんが有用だと思ってくださったのであれば良いな、と望んでいます。

## 関連情報

- [ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/ja/docs/Web/API/IndexedDB_API)
- [クッキー](/ja/docs/Web/HTTP/Cookies)
- [ウェブワーカー API](/ja/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
