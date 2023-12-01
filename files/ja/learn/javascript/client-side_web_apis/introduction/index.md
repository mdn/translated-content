---
title: Web API の紹介
slug: Learn/JavaScript/Client-side_web_APIs/Introduction
l10n:
  sourceCommit: 904cdf09c7e328b7a15a6a4db6bc6bd31f969cce
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

まずは API を高い視点から見ていきます — これは何なのか、どう働くのか、あなたのコードでどう使うのか、どういう風に作られているのか? また様々なクラスの API は何なのか、どのような使い方があるのかも見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、
        <a href="/ja/docs/Learn/HTML">HTML</a>、
        <a href="/ja/docs/Learn/CSS">CSS</a>、JavaScript の基本
        （<a href="/ja/docs/Learn/JavaScript/First_steps">第一歩</a>、
        <a href="/ja/docs/Learn/JavaScript/Building_blocks"
          >構成要素</a
        >、
        <a href="/ja/docs/Learn/JavaScript/Objects">JavaScript のオブジェクト</a>）の基本的な理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        API に親しみ、API で何ができるのか、API をどのようにコードで使用するのかを知ること。
      </td>
    </tr>
  </tbody>
</table>

## API って何?

Application Programming Interfaces (APIs) は、開発者が複雑な機能をより簡単に作成できるよう、プログラミング言語から提供される構造です。複雑なコードを抽象化し、それにかわる簡潔な構文を提供します。

実世界の例として、あなたの家、アパートや他の住処にある電気のコンセントについて考えて下さい。あなたの家で機器を使いたい時には、電源コードのプラグをコンセントに差し込めば事足ります。電源に直接結線したりしないでしょう — そんなのは非効率ですし、あなたが電気工事士でなければ、やってみるには難しいし危険です。

![2 つの異なるコンセントのソケットに、 2 つのマルチプラグホルダーが差し込まれています。それぞれのマルチプラグホルダーは、その上部と正面に差し込み口があります。 2 つのプラグは、それぞれのマルチプラグホルダーに差し込まれています。](plug-socket.png)

_画像提供: [超タコ足コンセント](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) by [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), Flickr より_

それと同じことで、そうですね、例えば 3 次元グラフィックのプログラムを JavaScript や Python のような高水準言語で書かれた API を使ってやる方が、C や C++ のような低レベル言語から直接コンピューターの GPU やグラフィック機能を叩いてやるよりも、ずっと簡単です。

> **メモ:** API という語についてもっと詳しいことは [API の用語解説](/ja/docs/Glossary/API) を参照して下さい。

### クライアントサイド JavaScript での API

クライアントサイド API では、実際とてもたくさんの API が使えます、それらは JavaScript 言語本体の一部ではなく、あなたにスーパーパワーを与えるべく JavaScript 言語のコアの上に築かれた代物です。それらはおおよそ二つのカテゴリに分けられます。

- **ブラウザー API** はウェブブラウザーに組み込まれていて、ブラウザーやコンピューターの環境の情報を取得し、これを使って役に立つ複雑なことを行えるようにするものです。 例えば [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) は、ブラウザー内での音声を操作、たとえば音声トラックの取得、音量の変更、エフェクトの適用などを行うための JavaScript の仕組みを提供します。実際には、裏でブラウザーは低レベル（例えば C++ や Rust）の複雑なコードを使って実際の音声処理を行います。しかし、この複雑さを API が抽象化して隠蔽します。
- **サードパーティ API** は既定ではブラウザーに組み込まれておらず、一般的にウェブのどこかから、コードと情報を取得する必要があります。例えば [Twitter API](https://developer.twitter.com/ja/docs) を使うと、自分のウェブサイトに自分の最新のツイートを表示したりすることができます。これは、 Twitter サービスに問い合わせを行い、特定の情報を返すために使用することができる特別な一連の仕組みを提供します。

![ブラウザーに firefox ブラウザーのホームページを開いた状態のスクリーンショット。既定でブラウザーに組み込まれている API があります。サードパーティの API は既定でブラウザーに組み込まれているわけではありません。それらのコードや情報を利用するためには、ウェブ上のどこかから取得する必要があります。](browser.png)

### JavaScript と API とその他 JavaScript ツールの関係

ここまででクライアントサイド API とは何か、JavaScript 言語とどう関係しているのかお話しました。もっとはっきりさせるために一度おさらいして、ついでに他の JavaScript ツールがどう関係してくるのかもお話しましょう。

- JavaScript — ブラウザーに組込まれた高水準スクリプト言語で、ウェブページやアプリに機能を実装するのに使うことができます。 [Node](/ja/docs/Learn/Server-side/Express_Nodejs/Introduction) のようなブラウザー以外の他のプログラミング環境でも使えます。
- ブラウザー API — JavaScript 言語の上に乗って、より簡単に機能を実装するためにブラウザーに組み込まれた仕組みです。
- サードパーティ API — サードパーティのプラットフォーム（Twitter や Facebook など）上に作られた構造で、それらのプラットフォームの機能をウェブページで利用できるようにします（例えば自分の最新のツイートを自分のウェブページに表示するなど）。
- JavaScript ライブラリー — 多くは、[独自の関数](/ja/docs/Learn/JavaScript/Building_blocks/Functions#custom_functions)を含んだ 1 つ以上の JavaScript ファイルで、ウェブページに装着することで、スピードアップさせたりよくある機能を書いたりできるものです。例えば、jQuery、Mootools、React がなどがあります。
- JavaScript フレームワーク — ライブラリーの一階層上にあたる JavaScript フレームワーク（Angular や Ember など）は、HTML、CSS、JavaScript などの技術をパッケージ化してインストールする傾向があり、これを使用してウェブアプリケーション全体をゼロから書きます。ライブラリーとフレームワークの大きな違いは、「制御の逆転 (Inversion of Control)」です。ライブラリーからメソッドを呼び出す場合、制御するのは開発者です。フレームワークでは、制御が逆転しています。フレームワークが開発者のコードを呼び出すのです。

## API で何ができる?

現代のブラウザーでは、膨大な数の API が利用可能で、コードの中で様々なことができるようになっています。 [MDN の API 索引ページ](/ja/docs/Web/API)を見てみると、そのことが分かります。

### 一般的なブラウザー API

特に、使用する（このモジュールでより詳細に取り上げる）ブラウザー API の最も一般的なカテゴリーは、次のとおりです。

- ブラウザーに読み込まれた**文書を操作するための API**。最も顕著な例は [DOM (Document Object Model) API](/ja/docs/Web/API/Document_Object_Model) で、 HTML と CSS を操作することができます。 HTML を作成、削除、書き換えしたり、動的に新しいスタイルをページに適用したり、などなど。例えばページにポップアップウィンドウが表われたり、何か新しい中身が表示されたりする時、DOM が使われています。この種の API について、詳しくは[文書の操作](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#ドキュメントオブジェクトモデル)で分かります。
- **サーバーからのデータ取得 API** で、ウェブページの小さな部分を自分自身で更新するために、とてもよく使用されています。この一見すると些細なことが、サイトのパフォーマンスや動作に大きな影響を与えてきました。株価リストや利用できる新着記事のリストを更新するだけなら、ページ全体をサーバーから再読み込みすることなく瞬時に行うことで、サイトやアプリの応答性や「キビキビ感」がずっと良くなります。このために使用される主な API は [Fetch API](/ja/docs/Web/API/Fetch_API) ですが、古いコードではまだ [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) API を使用している場合があります。また、この技術を記述した **Ajax** という用語に出会うこともあります。このような API については、[サーバーからのデータ取得](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)で詳しく調べてください。
- **グラフィックの描画や操作のための API** は、ブラウザーが広く対応しています。最も普及しているのは[キャンバス](/ja/docs/Web/API/Canvas_API)と [WebGL](/ja/docs/Web/API/WebGL_API) で、HTML の {{htmlelement("canvas")}} 要素に含まれるピクセルデータをプログラムで更新して 2D や 3D の場面を作成することが可能です。例えば、矩形や円などの図形を描いたり、画像をキャンバス上に取り込んで、キャンバス API を使用してセピアやグレースケールなどのフィルターを適用したり、WebGL を使用して照明やテクスチャを含む複雑な 3D シーンを作成したりすることができます。こうした API は、アニメやゲームのように常に更新される場面を作るために、アニメーションのループを作成する API（{{domxref("window.requestAnimationFrame()")}} など）とよく組み合わせて使用されます。
- **[動画と音声の API](/ja/docs/Web/Guide/Audio_and_video_delivery)** 、例えば {{domxref("HTMLMediaElement")}}、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)、[WebRTC](/ja/docs/Web/API/WebRTC_API) などを使用すると、音声や動画を再生するためのカスタム UI コントロールを作成したり、動画と一緒にキャプションや字幕などのテキストトラックを表示したり、ウェブカメラから動画を取得してキャンバス（上記参照）を介して操作したり、ウェブ会議で他の人のコンピューターに表示したり、音声にエフェクト（ゲイン、歪曲、パンニングなど）を追加したりと、マルチメディアを使って実に興味深いことを行うことができます。
- **端末 API** は、端末のハードウェアと対話することができます。例えば、[位置情報 API](/ja/docs/Web/API/Geolocation_API) を使用すると、端末の GPS にアクセスしてユーザーの位置を特定することが可能です。
- **クライアント側でのデータ保持 API** は今多くのブラウザーに普及しつつあります。— クライアント側にデータを保存できると、ページを移動しても状態を保存したり、たとえデバイスがオフラインでも動作するようなアプリを作成したいような場合、とても役に立ちます。いくつもの選択肢があり、例えば [Web Storage API](/ja/docs/Web/API/Web_Storage_API) を使ったキーバリューストアや、 [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) を使ったもっと複雑なテーブル型データ保存などです。

### 一般的なサードパーティ API

サードパーティ API はバラエティーに富んでいます。遅かれ早かれ使うことになりそうな、世間でよく使われているものには以下のようなものがあります。

- [Twitter API](https://developer.twitter.com/ja/docs)、これで自分の最新のツイート自分のウェブサイトにしたりすることができます。
- [Mapquest](https://developer.mapquest.com/) や [Google Maps API](https://developers.google.com/maps/) のような地図の API で、ウェブページ上の地図で様々なことをすることができます。
- [Facebook API スイート](https://developers.facebook.com/docs/)によって Facebook エコシステムの様々な部品を使ってあなたのアプリを強化できます。例えばアプリへのログインを Facebook のログインで行なったり、アプリ内での支払い、ターゲット広告を出したりなどです。
- [Telegram API](https://core.telegram.org/api) を使用すると、ボットのサポートに加えて、Telegram チャネルのコンテンツをウェブサイトに埋め込むことができます。
- [YouTube API](https://developers.google.com/youtube/) を使うと、サイトに YouTube の動画を埋め込んだり、 YouTube を検索したり、プレイリストを作成したりすることができます。
- [Pinterest API](https://developers.pinterest.com/) は、 Pinterest のボードとピンを管理して、ウェブサイトに表示するためのツールを提供します。
- [Twilio API](https://www.twilio.com/) は、自分のアプリに音声や動画の通話機能を作成したり、SMS/MMS を送信したりなどするためのフレームワークを提供します。
- [Mastodon API](https://docs.joinmastodon.org/api/) を使用すると、Mastodon ソーシャルネットワークの機能をプログラムで操作できます。

> **メモ:** サードパーティ API については [Programmable Web API directory](http://www.programmableweb.com/category/all/apis) でもっと多くの情報を見られます。

## API はどのように動作するのか

様々な JavaScript API は、それぞれ微妙に異なる方法で動作しますが、一般的には共通の機能があり、動作方法についても似たようなテーマがあります。

### オブジェクトベース

コードは 1 つ以上の [JavaScript オブジェクト](/ja/docs/Learn/JavaScript/Objects)を使用して API と対話します。オブジェクトは API が使用するデータ（オブジェクトプロパティに含まれる）、および API が利用可能にする機能（オブジェクトメソッドに含まれる）のコンテナーとして機能します。

> **メモ:** もし、まだオブジェクトがどのように動作するのかよくわからない場合は、先に進む前に [JavaScript オブジェクト](/ja/docs/Learn/JavaScript/Objects)モジュールに戻って練習をしてください。

ウェブオーディオ API の例に戻ってみましょう。ウェブオーディオ API はとても複雑な API で、たくさんのオブジェクトから成り立っています。わかりやすいものでいうと下記が挙げられます。

- {{domxref("AudioContext")}} は、ブラウザー内で再生する音声を操作するのに使われる[オーディオグラフ](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#オーディオグラフ)を表し、その音声を操作するためのたくさんのメソッドとプロパティを持っています。
- {{domxref("MediaElementAudioSourceNode")}} は、音声コンテキストの中で再生または操作したい音声を含む {{htmlelement("audio")}} 要素を表します。
- {{domxref("AudioDestinationNode")}} は、音声の最終目的地、つまりはコンピューターで実際に出力する機器（通常スピーカーやヘッドホン）を表します。

では、どのようにこれらのオブジェクトは互いに作用するのでしょうか。こちらの[シンプルなウェブオーディオの例](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) （[デモ](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)）を見ると、最初に以下のような HTML が書かれています。

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

最初に、 `<audio>` 要素を記述してページに MP3 を埋め込みます。既定のブラウザーのコントロールは表示しません。次に音楽を再生・停止させるのに使う {{htmlelement("button")}} 、再生中の音楽の音量を調整するのに使う {{htmlelement("input")}} 要素の range 型を記述します。

次にこの例の JavaScript を見てみましょう。

まず、トラックを操作するための `AudioContext` インスタンスを作成します。

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

次に、 `<audio>` 、 `<button>` 、および `<input>` 要素への参照を格納する定数を作成し、 {{domxref("AudioContext.createMediaElementSource()")}} メソッドを使用して、音声のソースを表す `MediaElementAudioSourceNode` を作成します。`<audio>` 要素はここから再生されます。

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

次に、ボタンが押されたら再生と停止を切り替えるイベントハンドラーと、曲が再生し終わったら最初に戻るイベントハンドラーを記述します。

```js
// play/pause audio
playBtn.addEventListener("click", () => {
  // check if context is in suspended state (autoplay policy)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // if track is stopped, play it
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // if track is playing, stop it
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// if track ends
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});
```

> **メモ:** 気づいた方もいるかも知れませんが、音声を再生・停止する `play()` と `pause()` メソッドは ウェブオーディオ API の一部ではなく、 {{domxref("HTMLMediaElement")}} API の一部です。これらは異なりますが、密接に関連しています。

次に {{domxref("GainNode")}} を、 {{domxref("BaseAudioContext/createGain", "AudioContext.createGain()")}} を使用して作成します。このオブジェクトを使用して音声全体の音量を調整し、スライダーの値が変更される度にオーディオグラフのゲイン（音量）の値を変更する別のイベントハンドラーを作成します。

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

これを機能させるために最後に行うことは、オーディオグラフ内のさまざまなノードを接続することです。これは、すべてのノードタイプで使用可能な {{domxref("AudioNode.connect()")}} メソッドを使用して行われます。

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

音声は音源から開始され、音源はゲインノードに接続され、音声の音量を調整することができます。ゲインノードは次に出力先ノードに接続され、コンピューターで音を再生できるようになります（{{domxref("BaseAudioContext/destination", "AudioContext.destination")}}プロパティは、コンピューターのハードウェア、例えばスピーカーで利用できる既定の {{domxref("AudioDestinationNode")}} を表しています）。

### 認識可能なエントリーポイント

API を使用する場合、その API のエントリーポイント（入口）がどこであるかを確認しておく必要があります。ウェブオーディオ API では、これはとてもシンプルで、 {{domxref("AudioContext")}} オブジェクトであり、音声操作を行うにはこれを使用する必要があります。

Document Object Model (DOM) API もシンプルなエントリーポイントがあります。その機能は、例えば {{domxref("Document")}} オブジェクトや、何らかの形で影響を与えたい HTML 要素のインスタンスにぶら下がった状態で得られる傾向があります。

```js
const em = document.createElement("em"); // 新しい em 要素を作成
const para = document.querySelector("p"); // 既存の p 要素の参照
em.textContent = "Hello there!"; // em にテキストの内容を入れる
para.appendChild(em); // 段落に em を入れる
```

[キャンバス API](/ja/docs/Web/API/Canvas_API) も、操作するために使用するコンテキストオブジェクトの取得に頼っていますが、この用途では音声コンテキストではなくグラフィックコンテキストを使用します。このコンテキストオブジェクトは、描画する {{htmlelement("canvas")}} 要素への参照を取得し、その {{domxref("HTMLCanvasElement.getContext()")}} メソッドを呼び出すことによって作成されます。

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

キャンバスに対して何らかの処理を行いたい場合は、コンテキストオブジェクト（{{domxref("CanvasRenderingContext2D")}} のインスタンス）のプロパティやメソッドを呼び出すことで実現できます。

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> **メモ:** この実例を[弾むボールのデモ](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) で見られます（[ライブ実行](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html) も見てください）。

### 状態の変化を捉えるのにイベントを使う

イベントについては、このコースの早い段階で、[イベントへの入門](/ja/docs/Learn/JavaScript/Building_blocks/Events)という記事ですでに説明しましたが、この記事ではクライアントサイドのウェブイベントとは何か、そしてそれらがコードでどのように使用されるかについて詳細に見ています。もしあなたがクライアントサイドのウェブ API イベントがどのように動作するかについてまだよく知らないのであれば、先にこの記事を読んでから続きを読んでください。

ウェブ API の中にはイベントを含まないものもありますが、ほとんどは少なくともいくつかのイベントを含んでいます。イベントが発行されたときに関数を動作させるためのハンドラープロパティは、一般に、リファレンス資料の中で個々の「イベントハンドラー」の節に掲載されています。

上記のウェブオーディオ API の例では、すでに多くのイベントハンドラーが使用されているのを確認しました。

```js
// play/pause audio
playBtn.addEventListener("click", () => {
  // check if context is in suspended state (autoplay policy)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // if track is stopped, play it
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // if track is playing, stop it
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// if track ends
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});
```

### 必要に応じて追加のセキュリティ機構がある

WebAPI 機能は、 JavaScript や他のウェブ技術（例えば [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)）と同等のセキュリティ上の配慮が必要ですが、追加のセキュリティ機構が必要な場合もあります。例として、現代の WebAPI の中には HTTPS で配信されるページ上でしか動かないものがあります。これは機密とすべきデータをやりとりする可能性があるためです（[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)や[プッシュ通知](/ja/docs/Web/API/Push_API)など）。

また、WebAPI の中には、コード内で呼び出された時点で、ユーザーから有効化するための許可を求めるものがあります。例として、[通知 API](/ja/docs/Web/API/Notifications_API) は、ポップアップダイアログボックスを使用して許可を求めます。

![ブラウザーの通知 API が指定された通知ポップアップダイアログのスクリーンショットです。 'mdn.github.io' ウェブサイトは、ダイアログを閉じるためのXと、既定で「常に通知を受け取る」を選択したオプションのドロップダウンメニューで、ユーザーエージェントに通知をプッシュする許可を求めています。](notification-permission.png)

ウェブオーディオ API や {{domxref("HTMLMediaElement")}} API には、[自動再生ポリシー](/ja/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy)と呼ばれるセキュリティ機構が適用されます。これは、基本的に、ページの読み込み時に音声を自動的に再生できないことを意味します。ユーザーに次のことを許可する必要があります。ボタンのようなコントロールを介して音声再生を開始します。これは、音声の自動再生は通常非常に煩わしいものであり、ユーザーにそれを課すべきではないためです。

> **メモ:** ブラウザーの厳格さによっては、このようなセキュリティ機構により、例がローカルでは動作しなくなる場合があります。つまり、ローカルの例のファイルをウェブサーバーから実行するのではなく、ブラウザーに読み込んだ場合です。執筆時点では、ウェブオーディオ API の例はローカルでは Google Chrome で動作しません。動作する前に、GitHub にアップロードする必要がありました。

## まとめ

この時点で、 API が何であるか、それがどのように動作するか、そして JavaScript コードで API を使って何ができるかについて、よく分かったはずです。おそらく、実際に特定の API を使って楽しいことを始めることに期待していることでしょうから、さっそく始めましょう。次は、 Document Object Model (DOM) を使った文書内の操作について見ていきます。

{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}
