---
title: Web API の紹介
slug: Learn/JavaScript/Client-side_web_APIs/Introduction
tags:
  - 3rd party
  - API
  - Article
  - Beginner
  - Browser
  - CodingScripting
  - Learn
  - Object
  - WebAPI
  - client-side
translation_of: Learn/JavaScript/Client-side_web_APIs/Introduction
---
{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

まずは API を高い視点から見ていきます — これは何なのか、どう働くのか、あなたのコードでどう使うのか、どういう風に作られているのか? また様々なクラスの API は何なのか、どのような使い方があるのかも見ていきます。

| 前提条件: | 基本的なコンピューターの知識および利用能力、[HTML](/ja/docs/Learn/HTML) と [CSS](/ja/docs/Learn/CSS) の基本的な理解、JavaScript の基本 ([第一歩](/ja/docs/Learn/JavaScript/First_steps)、[構成要素](/ja/docs/Learn/JavaScript/Building_blocks), [JavaScript オブジェクト](/ja/docs/Learn/JavaScript/Objects)). |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | API に何ができて、あなたのコードでどう使えばいいのか知ること。                                                                                                                                                                                                                                                 |

## API って何?

Application Programming Interfaces (APIs) は、開発者が複雑な機能をより簡単に作成できるよう、プログラミング言語から提供される構造です。複雑なコードを抽象化し、それにかわる簡潔な構文を提供します。

実世界の例として、あなたの家、アパートや他の住処にある電気のコンセントについて考えて下さい。あなたの家で機器を使いたい時には、電源コードのプラグをコンセントに差し込めば事足ります。電源に直接結線したりしないでしょう — そんなのは非効率ですし、あなたが電気工事士でなければ、やってみるには難しいし危険です。

![](plug-socket.png)

_画像提供: [超タコ足コンセント](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) by [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), Flickr より_

それと同じことで、そうですね、例えば 3 次元グラフィックのプログラムを JavaScript や Python のような高レベル言語で書かれた API を使ってやる方が、C や C++ のような低レベル言語から直接コンピューターの GPU やグラフィック機能を叩いてやるよりも、ずっと簡単です。

> **Note:** API という語についてもっと詳しいことは [API の用語解説](/ja/docs/Glossary/API) を参照して下さい。

### クライアントサイド JavaScript での API

クライアントサイド API では、実際非常にたくさんの API が使えます — それらは JavaScript 言語本体の一部ではなく、あなたにスーパーパワーを与えるべく JavaScript 言語のコアの上に築かれた代物です。それらはおおよそ二つのカテゴリに分けられます:

- **ブラウザー API** は Web ブラウザーに組込まれていて、ブラウザーやコンピューターの環境の情報を取得し、これを使って役に立つややこしい事を行えるようにするものです。 例えば [Geolocation API](/ja/docs/Web/API/Geolocation_API) は位置情報を取得するための簡単な JavaScript 構造を提供するので、例えばグーグルマップにあなたの居場所を表示するような事ができます。裏で実際にはブラウザーは低レベル (例えば C++) の複雑なコードをいくつか使ってデバイスの GPS 機器 (あるいは位置情報を得られる他のなんだか) と通信し、位置情報を取得し、コードから利用できるようにブラウザー環境に情報を戻しています。ですがここでもこの複雑な事柄は API で抽象化され隠蔽されます。
- **サードパーティ API** はデフォルトではブラウザーに組込まれておらず、普通はコードと情報を Web のどこから読み込まねばなりません。例えば [Twitter API](https://dev.twitter.com/overview/documentation) を使えばあなたの Web サイトにあなたの最新のツイートを表示するような事が可能になります。Twitter API は、Twitter サービスに特定の情報を要求したりするのに使える特別な構造のかたまりを提供します。

![](browser.png)

### JavaScript と API とその他 JavaScript ツールの関係

ここまででクライアントサイド API とは何か、JavaScript 言語とどう関係しているのかお話しました。もっとはっきりさせるために一度おさらいして、ついでに他の JavaScript ツールがどう関係してくるのかもお話しましょう:

- JavaScript — ブラウザーに組込まれた高レベルスクリプト言語で、Web ページやアプリに機能を実装するのに使えます。[Node](/ja/docs/Learn/Server-side/Express_Nodejs/Introduction) のようなブラウザー以外の他のプログラミング環境でも使えるのは覚えておいて下さい。
- ブラウザー API — ブラウザーに組込みの JavaScript 言語の上にある構造で、何かの機能をもっと簡単に実装できるようにします。
- サードパーティ API — サードパーティのプラットフォーム (Twitter や Facebook) 上に作られた構造で、それらのプラットフォームの機能を Web ページで利用できるようにします (例えばあなたの最新のツイートをあなたの Web ページに表示する)。
- JavaScript ライブラリ — 多くは、[独自の関数](/ja/docs/Learn/JavaScript/Building_blocks/Functions#custom_functions) を含んだ一つか複数の JavaScript ファイルで、Web ページにくっつけることでスピードアップしたり共通の機能を書いたりできるものです。例えば、jQuery、Mootools や React がなどが含まれます。
- JavaScript フレームワーク — ライブラリの一階層上にあたり、JavaScript フレームワーク (例えば Angular や Ember) は HTML や CSS に JavaScript、インストールして一から Web アプリケーションを作成するのに使えるその他もろもろの技術がパッケージ化されている場合が多いです。ライブラリとフレームワークの大きな相違点は、「制御の逆転 (Inversion of Control)」にあります。ライブラリのメソッドを呼ぶ時には、開発者がコントロールしています。フレームワークでは、コントロールが逆転します: フレームワークから開発者のコードが呼ばれるのです。

## API で何ができる?

モダンなブラウザーではすごい数の API を利用できるので、コードからとてもいろいろな事ができます。 [MDN API 索引](/ja/docs/Web/API)を見てみればわかると思います。

### 一般的なブラウザー API

特に、あなたが使うであろう最も一般的なブラウザー API のカテゴリ (このモジュールでとても詳しい所まで網羅していきます) は:

- ブラウザーで読み込んだ**文書を操作するための API**。一番目にする例は [DOM (Document Object Model) API](/ja/docs/Web/API/Document_Object_Model) で、 HTML と CSS を操作できます — HTML を作成したり削除したり書き換えたり、動的に新しいスタイルをページに適用したり、などなど。例えばページにポップアップウィンドウが表われたり、何か新しい中身が表示されたりする時、DOM が使われています。この種の API については[ドキュメントの操作](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)でもっといろいろ見られます。
- **サーバからデータ取得をする API** で Web ページの一部を書き換える事はとてもよく行なわれます。この一見ちょっとした事が、サイトのパフォーマンスや振舞いに巨大なインパクトを与えました — 在庫一覧や新しいお話一覧を書き換えたい時に、サーバからページ全体をリロードする事なしにさくっとできたら、サイトやアプリはずっと反応よく素早く感じられます。これを可能にした API には [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest "XMLHttpRequest is an API that provides client functionality for transferring data between a client and a server. It provides an easy way to retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just a part of the page without disrupting what the user is doing.") と [Fetch API](/ja/docs/Web/API/Fetch_API) が含まれています。**Ajax** という言葉を聞いた事があるかもしれませんが、これがこのテクニックの呼び名です。これらの API について [サーバからのデータ取得](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)でもっといろいろ見られます。
- **グラフィックスを描画したり操作する API** は多くのブラウザーがサポートしています — 最も知られているものには[ Canvas](/ja/docs/Web/API/Canvas_API) と [WebGL](/ja/docs/Web/API/WebGL_API) があり、HTML の {{htmlelement("canvas")}} 要素上にあるピクセルデータを書き換えて 2 次元や 3 次元のシーンを作成するのに使えます。例えばキャンバス API を使って長方形や円のような形を描いたり、キャンバスに画像を読み込んだり、セピアやグレイスケールといったフィルターを適用したり、あるいは WebGL を使ってライティングやテクスチャを使った 3D シーンを作成したりできます。これらの API はよくアニメーションループを作成する API ({{domxref("window.requestAnimationFrame()")}} など)や他のものと組み合わせて使われ、アニメやゲームのようなものの表示を定期的に書き換えるようにします。
- **[動画と音声の API](/ja/docs/Web/Guide/Audio_and_video_delivery)** {{domxref("HTMLMediaElement")}} や [Web Audio API](/ja/docs/Web/API/Web_Audio_API) や [WebRTC](/ja/docs/Web/API/WebRTC_API) のような API を使うと、 マルチメディアを使ってとても面白い事ができます。音声や動画再生のための独自のコントロール UI の作成、字幕やサブタイトルのような音声トラックをビデオと一緒に表示したり、Web カメラの画像を取り込んで操作し、上述のキャンバスに表示したり Web カンファレンスに参加している他の誰かのコンピューター上に表示したり、音声トラックにイフェクト(ゲイン、ディストーション、音場効果など)をかけたりできます。
- **デバイス API** は基本的に Web アプリで使えるような形で、今時のハードウェアデバイスのデータを操作したり取得する API です。デバイスの位置データにアクセスして地図上にあなたの居場所を書くような位置情報 API についてはすでにお話しました。他の例にはシステム通知を使って Web アプリに役に立つアップデートがあるのを知らせたり([Notifications API](/ja/docs/Web/API/Notifications_API) を参照)、ハードウェアを振動させたり([Vibration API](/ja/docs/Web/API/Vibration_API) を参照)などがあります。
- **クライアント側でのデータ保持 API** は今多くのブラウザーに普及しつつあります。— クライアント側にデータを保存できると、ページを移動しても状態を保存したり、たとえデバイスがオフラインでも動作するようなアプリを作成したいような場合、とても役に立ちます。いくつもの選択肢があり、例えば [Web Storage API](/ja/docs/Web/API/Web_Storage_API) を使ったキーバリューストアや、 [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) を使ったもっと複雑なテーブル型データ保存などです。

### 一般的なサードパーティ API

サードパーティ API はバラエティーに富んでいます。あなたが遅かれ早かれ使うようになりそうな、世間でよく使われているものには以下のようなものがあります:

- [Twitter API](https://dev.twitter.com/overview/documentation)、あなたの最新のツイートをあなたの Web サイトに表示したりするような事に使えます。
- [Mapquest](https://developer.mapquest.com/) や [Google Maps API](https://developers.google.com/maps/) のような地図の API は、あなたの Web ページ上に地図を使ったあらゆる事を可能にします。
- [Facebook API スイート](https://developers.facebook.com/docs/)によって Facebook エコシステムの様々な部品を使ってあなたのアプリを強化できます。例えばアプリへのログインを Facebook のログインで行なったり、アプリ内での支払い、ターゲット広告を出したりなどです。
- [Telegram APIs](https://core.telegram.org/api) を使用すると、ボットのサポートに加えて、Telegram チャネルのコンテンツを Web サイトに埋め込むことができます。
- [YouTube API](https://developers.google.com/youtube/) を使ってあなたのサイトに YouTube のビデオを埋め込んだり、YouTube を検索したり、プレイリストを作成したりなどなどできます。
- [Pinterest API](https://developers.pinterest.com/) は、Pinterest のボードとピンを管理して Web サイトに含めるためのツールを提供します。
- [Twilio API](https://www.twilio.com/)はあなたのアプリで音声・ビデオ電話の機能を作成したり、SMS/MMS を送信したりなどするためのフレームワークを提供します。
- [Mastodon API](https://docs.joinmastodon.org/api/) を使用すると、Mastodon ソーシャルネットワークの機能をプログラムで操作できます。

> **Note:** サードパーティ API については [Programmable Web API directory](http://www.programmableweb.com/category/all/apis) でもっと多くの情報を見られます。

## API はどのように動作する?

異なる JavaScript API はそれぞれに違う方法で動作しますが、普通は、共通した機能とどのように動くべきかの類似したテーマを持ちます。

### オブジェクトに基づいています

あなたのコードは一つ以上の [JavaScript オブジェクト](/ja/docs/Learn/JavaScript/Objects)を通じて API とやりとりし、オブジェクトは API が使用するデータ (オブジェクトのプロパティとして持つ) や API が提供する機能(オブジェクトメソッドとして持つ) の容れ物として使われます。

> **Note:** もしまだオブジェクトがどのように動作するかについて理解があやふやなら、先に進む前に [JavaScript オブジェクト](/ja/docs/Learn/JavaScript/Objects) モジュールを読みなおし、練習するのをおすすめします。

Web Audio API の例に戻ってみましょう。Web Audio API はとても複雑な API で、たくさんのオブジェクトから成り立っています。わかりやすいものでいうと下記が挙げられます：

- {{domxref("AudioContext")}} は、ブラウザー内で再生する音声を操作するのに使われる[オーディオグラフ](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs)を表し、その音声を操作するためのたくさんのメソッドとプロパティを持ちます。
- {{domxref("MediaElementAudioSourceNode")}} は、音声コンテキストの中で再生または操作したい音声を含む {{htmlelement("audio")}} 要素を表します。
- {{domxref("AudioDestinationNode")}} は、音声の最終目的地、つまりはコンピューターで実際に出力するデバイス（通常スピーカーやヘッドホン）を表します。

では、どのようにこれらのオブジェクトは互いに作用するのでしょうか？ こちらの[シンプルな web audio の例](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/web-audio/index.html) ([デモページ](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/))を見ると、最初に以下のような HTML が書かれています。

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br>
<input type="range" min="0" max="1" step="0.01" value="1" class="volume">
```

最初に、 `<audio>` 要素を記述してページに MP3 を埋め込みます。デフォルトのブラウザーのコントロールは記しません。次に音楽を再生・停止させるのに使う {{htmlelement("button")}} 、再生中の音楽の音量を調整するのに使う range タイプの {{htmlelement("input")}} 要素を記述します。

次にこの例の JavaScript を見てみましょう。

まず、トラックを操作するための `AudioContext` インスタンスを作成します。

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

次に、 `<audio>` 、 `<button>` 、および `<input>` 要素への参照を格納する定数を作成し、 {{domxref("AudioContext.createMediaElementSource()")}} メソッドを使用して、音声のソースを表す `MediaElementAudioSourceNode` を作成します。`<audio>` 要素はここから再生されます。

```js
const audioElement = document.querySelector('audio');
const playBtn = document.querySelector('button');
const volumeSlider = document.querySelector('.volume');

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

次に、ボタンが押されたら再生と停止を切り替えるイベントハンドラーと、曲が再生し終わったら最初に戻るイベントハンドラーを記述します。

```js
// play/pause audio
playBtn.addEventListener('click', function() {
    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

  // if track is stopped, play it
    if (this.getAttribute('class') === 'paused') {
        audioElement.play();
        this.setAttribute('class', 'playing');
        this.textContent = 'Pause'
    // if track is playing, stop it
} else if (this.getAttribute('class') === 'playing') {
        audioElement.pause();
        this.setAttribute('class', 'paused');
        this.textContent = 'Play';
    }
});

// if track ends
audioElement.addEventListener('ended', function() {
    playBtn.setAttribute('class', 'paused');
    playBtn.textContent = 'Play';
});
```

> **Note:** 気づいた方もいるかも知れませんが、音声を再生・停止する `play()` と `pause()` メソッドは Web Audio API の一部ではなく、 {{domxref("HTMLMediaElement")}} API の一部です。これらは異なりますが密接に関連しています。

次に、 {{domxref("BaseAudioContext.createGain")}} を使用して {{domxref("GainNode")}} オブジェクトを作成します。このオブジェクトを使用して音声全体の音量を調整し、スライダーの値が変更される度にオーディオグラフのゲイン（音量）の値を変更する別のイベントハンドラーを作成します。

```js
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener('input', function() {
    gainNode.gain.value = this.value;
});
```

これを機能させるために最後に行うことは、オーディオグラフ内のさまざまなノードを接続することです。これは、すべてのノードタイプで使用可能な {{domxref("AudioNode.connect()")}} メソッドを使用して行われます。

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

音声はソースから始まり、ソースはゲインノードに接続されるため、音声の音量を調整できます。次に、ゲインノードが宛先ノードに接続され、コンピューターでサウンドを再生できるようになります。（{{domxref("BaseAudioContext.destination")}} は、スピーカーなど、コンピューターのハードウエアで使用可能なデフォルトの {{domxref("AudioDestinationNode")}} を表します。)

### 認識できる入口があります

API を使うときは、その API の入口がどこなのかしっかり確認するべきです。Web Audio API ではとても単純でした — それは {{domxref("AudioContext")}} オブジェクトであり、あらゆる音声操作を行うために使用する必要があります。

Document Object Model (DOM) API でも単純な入口があります — これの機能は {{domxref("Document")}} もしくは何らかの方法で影響を与えたい HTML 要素のインスタンスにぶらさがっている場合が多く、例えば:

```js
const em = document.createElement('em'); // create a new em element
const para = document.querySelector('p'); // reference an existing p element
em.textContent = 'Hello there!'; // give em some text content
para.appendChild(em); // embed em inside para
```

[Canvas API](/ja/docs/Web/API/Canvas_API) は、諸々を操作するために使用するコンテキストオブジェクトの取得にも依存していますが、この場合は、音声コンテキストではなく描画コンテキストです。そのコンテキストオブジェクトは、描画をしたい {{htmlelement("canvas")}} 要素への参照を取得して、 これの {{domxref("HTMLCanvasElement.getContext()")}} メソッドを呼ぶと作成されます:

```js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
```

キャンバスを使って何かやろうとする場合は何でも、コンテキストオブジェクト (これは {{domxref("CanvasRenderingContext2D")}} のインスタンスです) のプロパティやメソッドを呼んで行ないます。例えば:

```js
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> **Note:** この実例を[弾むボールのデモ](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/bouncing-balls.html) ([ライブ実行](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html) も見てね)で見られます。

### 状態の変化を捉えるのにイベントを使います

すでに学習コース中でイベントについてはお話しています、[イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events) — この記事でクライアント側 Web イベントとは何か、コードの中でどのように使えるのか詳しく見てきました。もしまだクライアント側 WebAPI の仕組みがよくわからいなら、この先に進む前に記事を読み直しておく方が良いでしょう。

イベントを持たない WebAPI もありますが、ほとんどの WebAPI はいくつか持っています。イベントが発火した際に関数を実行できるイベントハンドラーのプロパティについては、リファレンス記事の独立した"イベントハンドラー"セクションとしておおよそ列挙されています。

上記の Web Audio API の例では、すでにいくつかのイベントハンドラーが使用されています。

別の例として、[`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) オブジェクトのインスタンス (一つ一つがサーバから何らかの新しいリソースを取得しようとする HTTP リクエストを表わします) にはとてもたくさんのイベントが付随しており、たとえば `load` イベントは発火したリソースに対する正常なレスポンスが返ってきて、それが使えるようになった時点で発火します。

次のコードはこれをどう使うのか示す簡単な例です:

```js
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
```

> **Note:** [ajax.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/ajax.html) でこの例の動作を見られます([ライブ実行版](https://mdn.github.io/learning-area/javascript/apis/introduction/ajax.html)もどうぞ)。

最初の 5 行で取得したいリソースを指定し、`XMLHttpRequest()` コンストラクタを使って新しいリクエストオブジェクトを生成し、指定のリソースを取得するために `GET` リクエストを作り、レスポンスを JSON 形式として吐き出すよう指定、そしてリクエストを送信します。

`onload` ハンドラー関数で私たちがレスポンスに対して何を行なうかを指定します。load イベントが発火した後には、レスポンスが正常に得られて利用できるようになっている (エラーは起きていない) とわかっていますので、JSON であるレスポンスを `superHeroes` 変数に保存し、以降の処理のために 2 つの異なる関数に引き渡しています。

### 必要なところには追加のセキュリティ機構があります

WebAPI 機能は JavaScript や他の Web 技術と同等のセキュリティ上の配慮が必要です (例えば [same-origin ポリシー](/ja/docs/Web/Security/Same-origin_policy)) が、追加のセキュリティ機構が必要な場合もあります。例として今時の WebAPI の中には HTTPS で配信されるページ上でしか動かないものがあり、これは機密とすべきデータをやりとりする可能性があるためです ([ServiceWorkers](/ja/docs/Web/API/Service_Worker_API) や [Push](/ja/docs/Web/API/Push_API) など)。

さらには、ある種の WebAPI への呼び出しがあなたのコードにあると、ユーザに対してそれの許可を要求します。例えば、[Notifications API (通知 API)](/ja/docs/Web/API/Notifications_API) はポップアップのダイアログボックスを用いて許可を要求します:

![](notification-permission.png)

Web Audio および {{domxref("HTMLMediaElement")}} API には、[自動再生 (autoplay) ポリシー](/ja/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) と呼ばれるセキュリティ機構が適用されます。これは、基本的に、ページの読み込み時に音声を自動的に再生できないことを意味します。ユーザーに次のことを許可する必要があります。ボタンのようなコントロールを介して音声再生を開始します。これは、音声の自動再生は通常非常に煩わしいものであり、ユーザーにそれを課すべきではないためです。

> **Note:** ブラウザーの厳格さによっては、このようなセキュリティ機構により、例がローカルで機能しなくなる場合があります。つまり、ローカルの例のファイルをウェブサーバーから実行するのではなく、ブラウザーに読み込んだ場合です。執筆時点では、Web Audio API の例はローカルでは Google Chrome で動作しません。動作する前に、GitHub にアップロードする必要がありました。

## まとめ

ここまで来れば、API とは何か、どう動くのか、あなたの JavaScript コードからどんな事ができるのかよくわかったと思います。何か API を使って楽しいことをやりたくってしょうがなくなってることと思いますので、さあ始めましょう! 次から、**D**ocument **O**bject **M**odel 　(DOM) を使った文書の操作を見ていきます。

{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

## このモジュール

- [Web API の紹介](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [ドキュメントの操作](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [サーバからのデータ取得](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [サードパーティ API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [グラフィックの描画](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [動画と音声の API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [クライアント側ストレージ](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
