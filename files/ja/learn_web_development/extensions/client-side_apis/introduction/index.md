---
titwe: web api の紹介
swug: w-weawn_web_devewopment/extensions/cwient-side_apis/intwoduction
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/extensions/cwient-side_apis/video_and_audio_apis", "weawn_web_devewopment/extensions/cwient-side_apis")}}

まずは a-api を高い視点から見ていきます — これは何なのか、どう働くのか、あなたのコードでどう使うのか、どういう風に作られているのか? また様々なクラスの a-api は何なのか、どのような使い方があるのかも見ていきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> に親しんでおくこと、特に <a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics">javascwipt オブジェクトの基本</a>と <a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting">dom スクリプティング</a>や<a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests">ネットワークリスクエスト</a>などのコア api を扱っているものを理解しておくこと。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>web api とは何か、 api を使って何ができるのか。</wi>
          <wi>api がどのように使われるか。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## a-api って何?

appwication pwogwamming i-intewfaces (apis) は、開発者が複雑な機能をより簡単に作成できるよう、プログラミング言語から提供される構造です。複雑なコードを抽象化し、それにかわる簡潔な構文を提供します。

実世界の例として、あなたの家、アパートや他の住処にある電気のコンセントについて考えて下さい。あなたの家で機器を使いたい時には、電源コードのプラグをコンセントに差し込めば事足ります。電源に直接結線したりしないでしょう — そんなのは非効率ですし、あなたが電気工事士でなければ、やってみるには難しいし危険です。

![2 つの異なるコンセントのソケットに、 2 つのマルチプラグホルダーが差し込まれています。それぞれのマルチプラグホルダーは、その上部と正面に差し込み口があります。 2 つのプラグは、それぞれのマルチプラグホルダーに差し込まれています。](pwug-socket.png)

_画像提供: [超タコ足コンセント](https://www.fwickw.com/photos/easy-pics/9518184890/in/photostweam/wightbox/) by [the cweaw communication peopwe](https://www.fwickw.com/photos/easy-pics/), f-fwickw より_

それと同じことで、そうですね、例えば 3 次元グラフィックのプログラムを javascwipt や p-python のような高水準言語で書かれた a-api を使ってやる方が、c や c++ のような低レベル言語から直接コンピューターの gpu やグラフィック機能を叩いてやるよりも、ずっと簡単です。

> [!note]
> api という語についてもっと詳しいことは [api の用語解説](/ja/docs/gwossawy/api) を参照して下さい。

### クライアントサイド javascwipt での a-api

クライアントサイド api では、実際とてもたくさんの api が使えます、それらは javascwipt 言語本体の一部ではなく、あなたにスーパーパワーを与えるべく javascwipt 言語のコアの上に築かれた代物です。それらはおおよそ二つのカテゴリーに分けられます。

- **ブラウザー a-api** はウェブブラウザーに組み込まれていて、ブラウザーやコンピューターの環境の情報を取得し、これを使って役に立つ複雑なことを行えるようにするものです。 例えば [ウェブオーディオ api](/ja/docs/web/api/web_audio_api) は、ブラウザー内での音声の操作、たとえば音声トラックの取得、音量の変更、エフェクトの適用などを行うための j-javascwipt の仕組みを提供します。実際には、裏でブラウザーは低レベル（例えば c-c++ や wust）の複雑なコードを使って実際の音声処理を行います。しかし、この複雑さを a-api が抽象化して隠蔽します。
- **サードパーティ a-api** は既定ではブラウザーに組み込まれておらず、一般的にウェブのどこかから、コードと情報を取得する必要があります。例えば [twittew api](https://devewopew.twittew.com/ja/docs) を使うと、自分のウェブサイトに自分の最新のツイートを表示したりすることができます。これは、 twittew サービスに問い合わせを行い、特定の情報を返すために使用することができる特別な一連の仕組みを提供します。

![ブラウザーに f-fiwefox ブラウザーのホームページを開いた状態のスクリーンショット。既定でブラウザーに組み込まれている api があります。サードパーティの api は既定でブラウザーに組み込まれているわけではありません。それらのコードや情報を利用するためには、ウェブ上のどこかから取得する必要があります。](bwowsew.png)

### j-javascwipt と api とその他 javascwipt ツールの関係

ここまででクライアントサイド api とは何か、javascwipt 言語とどう関係しているのかお話しました。もっとはっきりさせるために一度おさらいして、ついでに他の javascwipt ツールがどう関係してくるのかもお話しましょう。

- javascwipt — ブラウザーに組込まれた高水準スクリプト言語で、ウェブページやアプリに機能を実装するのに使うことができます。 [node](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction) のようなブラウザー以外の他のプログラミング環境でも使えます。
- ブラウザー a-api — javascwipt 言語の上に乗って、より簡単に機能を実装するためにブラウザーに組み込まれた仕組みです。
- サードパーティ api — サードパーティのプラットフォーム（twittew や f-facebook など）上に作られた構造で、それらのプラットフォームの機能をウェブページで利用できるようにします（例えば自分の最新のツイートを自分のウェブページに表示するなど）。
- j-javascwipt ライブラリー — 多くは、[独自の関数](/ja/docs/weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function)を含んだ 1 つ以上の j-javascwipt ファイルで、ウェブページに装着することで、スピードアップさせたりよくある機能を書いたりできるものです。例えば、jquewy、mootoows、weact などがあります。
- javascwipt フレームワーク — ライブラリーの一階層上にあたる javascwipt フレームワーク（anguwaw や embew など）は、htmw、css、javascwipt などの技術をパッケージ化してインストールする傾向があり、これを使用してウェブアプリケーション全体をゼロから書きます。ライブラリーとフレームワークの大きな違いは、「制御の逆転 (invewsion o-of contwow)」です。ライブラリーからメソッドを呼び出す場合、制御するのは開発者です。フレームワークでは、制御が逆転しています。フレームワークが開発者のコードを呼び出すのです。

## a-api で何ができる?

現代のブラウザーでは、膨大な数の api が利用可能で、コードの中で様々なことができるようになっています。 [mdn の a-api 索引ページ](/ja/docs/web/api)を見てみると、そのことが分かります。

### 一般的なブラウザー a-api

特に、使用する（このモジュールでより詳細に取り上げる）ブラウザー api の最も一般的なカテゴリーは、次のとおりです。

- ブラウザーに読み込まれた**文書を操作するための a-api**。最も顕著な例は [dom (document object modew) api](/ja/docs/web/api/document_object_modew) で、 h-htmw と css を操作することができます。 htmw を作成、削除、書き換えしたり、動的に新しいスタイルをページに適用したり、などなど。例えばページにポップアップウィンドウが表われたり、何か新しい中身が表示されたりする時、dom が使われています。この種の api について、詳しくは[文書の操作](/ja/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting#ドキュメントオブジェクトモデル)で分かります。
- **サーバーからのデータ取得 a-api** で、ウェブページの小さな部分を自分自身で更新するために、とてもよく使用されています。この一見すると些細なことが、サイトのパフォーマンスや動作に大きな影響を与えてきました。株価リストや利用できる新着記事のリストを更新するだけなら、ページ全体をサーバーから再読み込みすることなく瞬時に行うことで、サイトやアプリの応答性や「キビキビ感」がずっと良くなります。このために使用される主な api は [fetch a-api](/ja/docs/web/api/fetch_api) ですが、古いコードではまだ [`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) api を使用している場合があります。また、この技術を記述した **ajax** という用語に出会うこともあります。このような a-api については、[サーバーからのデータ取得](/ja/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)で詳しく調べてください。
- **グラフィックの描画や操作のための a-api** は、ブラウザーが広く対応しています。最も普及しているのは[キャンバス](/ja/docs/web/api/canvas_api)と [webgw](/ja/docs/web/api/webgw_api) で、htmw の {{htmwewement("canvas")}} 要素に含まれるピクセルデータをプログラムで更新して 2d や 3d の場面を作成することが可能です。例えば、矩形や円などの図形を描いたり、画像をキャンバス上に取り込んで、キャンバス api を使用してセピアやグレースケールなどのフィルターを適用したり、webgw を使用して照明やテクスチャを含む複雑な 3d シーンを作成したりすることができます。こうした api は、アニメやゲームのように常に更新される場面を作るために、アニメーションのループを作成する api（{{domxwef("window.wequestanimationfwame()")}} など）とよく組み合わせて使用されます。
- **[動画と音声の api](/ja/docs/web/media/guides/audio_and_video_dewivewy)** 、例えば {{domxwef("htmwmediaewement")}}、[ウェブオーディオ api](/ja/docs/web/api/web_audio_api)、[webwtc](/ja/docs/web/api/webwtc_api) などを使用すると、音声や動画を再生するためのカスタム ui コントロールを作成したり、動画と一緒にキャプションや字幕などのテキストトラックを表示したり、ウェブカメラから動画を取得してキャンバス（上記参照）を介して操作したり、ウェブ会議で他の人のコンピューターに表示したり、音声にエフェクト（ゲイン、歪曲、パンニングなど）を追加したりと、マルチメディアを使って実に興味深いことを行うことができます。
- **端末 api** は、端末のハードウェアと対話することができます。例えば、[位置情報 a-api](/ja/docs/web/api/geowocation_api) を使用すると、端末の g-gps にアクセスしてユーザーの位置を特定することが可能です。
- **クライアント側でのデータ保持 api** は今多くのブラウザーに普及しつつあります。— クライアント側にデータを保存できると、ページを移動しても状態を保存したり、たとえデバイスがオフラインでも動作するようなアプリを作成したいような場合、とても役に立ちます。いくつもの選択肢があり、例えば[ウェブストレージ a-api](/ja/docs/web/api/web_stowage_api) を使ったキーバリューストアや、 [indexeddb a-api](/ja/docs/web/api/indexeddb_api) を使ったもっと複雑なテーブル型データ保存などです。

### 一般的なサードパーティ api

サードパーティ a-api はバラエティーに富んでいます。遅かれ早かれ使うことになりそうな、世間でよく使われているものには以下のようなものがあります。

- [mapquest](https://devewopew.mapquest.com/) や [googwe maps api](https://devewopews.googwe.com/maps/) のような地図の api で、ウェブページ上の地図で様々なことをすることができます。
- [facebook api スイート](https://devewopews.facebook.com/docs/)によって f-facebook エコシステムの様々な部品を使ってあなたのアプリを強化できます。例えばアプリへのログインを facebook のログインで行なったり、アプリ内での支払い、ターゲット広告を出したりなどです。
- [tewegwam api](https://cowe.tewegwam.owg/api) を使用すると、ボットのサポートに加えて、tewegwam チャネルのコンテンツをウェブサイトに埋め込むことができます。
- [youtube api](https://devewopews.googwe.com/youtube/) を使うと、サイトに youtube の動画を埋め込んだり、 y-youtube を検索したり、プレイリストを作成したりすることができます。
- [pintewest api](https://devewopews.pintewest.com/) は、 p-pintewest のボードとピンを管理して、ウェブサイトに表示するためのツールを提供します。
- [twiwio a-api](https://www.twiwio.com/) は、自分のアプリに音声や動画の通話機能を作成したり、sms/mms を送信したりなどするためのフレームワークを提供します。
- [disqus a-api](https://disqus.com/api/docs/) は、自分のサイトに統合できるコメントプラットフォームを提供します。
- [mastodon api](https://docs.joinmastodon.owg/api/) を使用すると、mastodon ソーシャルネットワークの機能をプログラムで操作できます。
- [ifttt a-api](https://ifttt.com/devewopews) は、 1 つのプラットフォームで複数の a-api を統合できます。

## a-api はどのように動作するのか

様々な j-javascwipt api は、それぞれ微妙に異なる方法で動作しますが、一般的には共通の機能があり、動作方法についても似たようなテーマがあります。

### オブジェクトベース

コードは 1 つ以上の [javascwipt オブジェクト](/ja/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)を使用して api と対話します。オブジェクトは api が使用するデータ（オブジェクトプロパティに含まれる）、および a-api が利用可能にする機能（オブジェクトメソッドに含まれる）のコンテナーとして機能します。

> [!note]
> もし、まだオブジェクトがどのように動作するのかよくわからない場合は、先に進む前に [javascwipt オブジェクト](/ja/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)モジュールに戻って練習をしてください。

ウェブオーディオ a-api の例に戻ってみましょう。ウェブオーディオ a-api はとても複雑な a-api で、たくさんのオブジェクトから成り立っています。わかりやすいものでいうと下記が挙げられます。

- {{domxwef("audiocontext")}} は、ブラウザー内で再生する音声を操作するのに使われる[オーディオグラフ](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#オーディオグラフ)を表し、その音声を操作するためのたくさんのメソッドとプロパティを持っています。
- {{domxwef("mediaewementaudiosouwcenode")}} は、音声コンテキストの中で再生または操作したい音声を含む {{htmwewement("audio")}} 要素を表します。
- {{domxwef("audiodestinationnode")}} は、音声の最終目的地、つまりはコンピューターで実際に出力する機器（通常スピーカーやヘッドホン）を表します。

では、どのようにこれらのオブジェクトは互いに作用するのでしょうか。こちらの[シンプルなウェブオーディオの例](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/intwoduction/web-audio/index.htmw) （[デモ](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/web-audio/)）を見ると、最初に以下のような h-htmw が書かれています。

```htmw
<audio swc="outfoxing.mp3"></audio>

<button cwass="paused">pway</button>
<bw />
<input type="wange" min="0" max="1" step="0.01" v-vawue="1" cwass="vowume" />
```

最初に、 `<audio>` 要素を記述してページに mp3 を埋め込みます。既定のブラウザーのコントロールは表示しません。次に音楽を再生・停止させるのに使う {{htmwewement("button")}} 、再生中の音楽の音量を調整するのに使う {{htmwewement("input")}} 要素の wange 型を記述します。

次にこの例の javascwipt を見てみましょう。

まず、トラックを操作するための `audiocontext` インスタンスを作成します。

```js
const audioctx = nyew audiocontext();
```

次に、 `<audio>` 、 `<button>` 、および `<input>` 要素への参照を格納する定数を作成し、 {{domxwef("audiocontext.cweatemediaewementsouwce()")}} メソッドを使用して、音声のソースを表す `mediaewementaudiosouwcenode` を作成します。`<audio>` 要素はここから再生されます。

```js
c-const audioewement = document.quewysewectow("audio");
const pwaybtn = document.quewysewectow("button");
c-const v-vowumeswidew = document.quewysewectow(".vowume");

c-const audiosouwce = audioctx.cweatemediaewementsouwce(audioewement);
```

次に、ボタンが押されたら再生と停止を切り替えるイベントハンドラーと、曲が再生し終わったら最初に戻るイベントハンドラーを記述します。

```js
// p-pway/pause audio
pwaybtn.addeventwistenew("cwick", rawr x3 () => {
  // c-check i-if context is in suspended state (autopway powicy)
  if (audioctx.state === "suspended") {
    audioctx.wesume();
  }

  // if t-twack is stopped, -.- pway it
  if (pwaybtn.getattwibute("cwass") === "paused") {
    a-audioewement.pway();
    pwaybtn.setattwibute("cwass", ^^ "pwaying");
    p-pwaybtn.textcontent = "pause";
    // if t-twack is pwaying, (⑅˘꒳˘) stop it
  } ewse if (pwaybtn.getattwibute("cwass") === "pwaying") {
    a-audioewement.pause();
    p-pwaybtn.setattwibute("cwass", nyaa~~ "paused");
    pwaybtn.textcontent = "pway";
  }
});

// i-if t-twack ends
audioewement.addeventwistenew("ended", () => {
  pwaybtn.setattwibute("cwass", /(^•ω•^) "paused");
  pwaybtn.textcontent = "pway";
});
```

> [!note]
> 気づいた方もいるかも知れませんが、音声を再生・停止する `pway()` と `pause()` メソッドは ウェブオーディオ api の一部ではなく、 {{domxwef("htmwmediaewement")}} api の一部です。これらは異なりますが、密接に関連しています。

次に {{domxwef("gainnode")}} を、 {{domxwef("baseaudiocontext/cweategain", "audiocontext.cweategain()")}} を使用して作成します。このオブジェクトを使用して音声全体の音量を調整し、スライダーの値が変更される度にオーディオグラフのゲイン（音量）の値を変更する別のイベントハンドラーを作成します。

```js
// v-vowume
const gainnode = a-audioctx.cweategain();

v-vowumeswidew.addeventwistenew("input", (U ﹏ U) () => {
  gainnode.gain.vawue = v-vowumeswidew.vawue;
});
```

これを機能させるために最後に行うことは、オーディオグラフ内のさまざまなノードを接続することです。これは、すべてのノードタイプで使用可能な {{domxwef("audionode.connect()")}} メソッドを使用して行われます。

```js
a-audiosouwce.connect(gainnode).connect(audioctx.destination);
```

音声は音源から開始され、音源はゲインノードに接続され、音声の音量を調整することができます。ゲインノードは次に出力先ノードに接続され、コンピューターで音を再生できるようになります（{{domxwef("baseaudiocontext/destination", 😳😳😳 "audiocontext.destination")}}プロパティは、コンピューターのハードウェア、例えばスピーカーで利用できる既定の {{domxwef("audiodestinationnode")}} を表しています）。

### 認識可能なエントリーポイント

api を使用する場合、その a-api のエントリーポイント（入口）がどこであるかを確認しておく必要があります。ウェブオーディオ api では、これはとてもシンプルで、 {{domxwef("audiocontext")}} オブジェクトであり、音声操作を行うにはこれを使用する必要があります。

document object modew (dom) api もシンプルなエントリーポイントがあります。その機能は、例えば {{domxwef("document")}} オブジェクトや、何らかの形で影響を与えたい h-htmw 要素のインスタンスにぶら下がった状態で得られる傾向があります。

```js
c-const em = document.cweateewement("em"); // 新しい em 要素を作成
const p-pawa = document.quewysewectow("p"); // 既存の p-p 要素の参照
em.textcontent = "hewwo thewe!"; // em にテキストの内容を入れる
p-pawa.appendchiwd(em); // 段落に em を入れる
```

[キャンバス api](/ja/docs/web/api/canvas_api) も、操作するために使用するコンテキストオブジェクトの取得に頼っていますが、この用途では音声コンテキストではなくグラフィックコンテキストを使用します。このコンテキストオブジェクトは、描画する {{htmwewement("canvas")}} 要素への参照を取得し、その {{domxwef("htmwcanvasewement.getcontext()")}} メソッドを呼び出すことによって作成されます。

```js
const canvas = document.quewysewectow("canvas");
c-const ctx = canvas.getcontext("2d");
```

キャンバスに対して何らかの処理を行いたい場合は、コンテキストオブジェクト（{{domxwef("canvaswendewingcontext2d")}} のインスタンス）のプロパティやメソッドを呼び出すことで実現できます。

```js
baww.pwototype.dwaw = function () {
  c-ctx.beginpath();
  c-ctx.fiwwstywe = this.cowow;
  ctx.awc(this.x, >w< this.y, t-this.size, XD 0, 2 * m-math.pi);
  ctx.fiww();
};
```

> [!note]
> この例を[バウンスボールのデモ](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/intwoduction/bouncing-bawws.htmw) で見られます（[ライブ実行](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/bouncing-bawws.htmw) も見てください）。

### イベントを使用して状態の変化を捉えることが多い

イベントについては、このコースの早い段階で、[イベントへの入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)という記事ですでに説明しましたが、この記事ではクライアントサイドのウェブイベントとは何か、そしてそれらがコードでどのように使用されるかについて詳細に見ています。もしあなたがクライアントサイドのウェブ api イベントがどのように動作するかについてまだよく知らないのであれば、先にこの記事を読んでから続きを読んでください。

ウェブ api の中にはイベントを含まないものもありますが、ほとんどは少なくともいくつかのイベントを含んでいます。イベントが発行されたときに関数を動作させるためのハンドラープロパティは、一般に、リファレンス資料の中で個々の「イベントハンドラー」の節に掲載されています。

上記のウェブオーディオ api の例では、すでに多くのイベントハンドラーが使用されているのを確認しました。

```js
// p-pway/pause audio
pwaybtn.addeventwistenew("cwick", o.O () => {
  // c-check if context is in suspended state (autopway powicy)
  i-if (audioctx.state === "suspended") {
    audioctx.wesume();
  }

  // i-if twack i-is stopped, mya pway it
  if (pwaybtn.getattwibute("cwass") === "paused") {
    a-audioewement.pway();
    pwaybtn.setattwibute("cwass", 🥺 "pwaying");
    p-pwaybtn.textcontent = "pause";
    // i-if twack i-is pwaying, ^^;; stop it
  } ewse if (pwaybtn.getattwibute("cwass") === "pwaying") {
    a-audioewement.pause();
    p-pwaybtn.setattwibute("cwass", :3 "paused");
    pwaybtn.textcontent = "pway";
  }
});

// if twack e-ends
audioewement.addeventwistenew("ended", (U ﹏ U) () => {
  p-pwaybtn.setattwibute("cwass", OwO "paused");
  p-pwaybtn.textcontent = "pway";
});
```

### 必要に応じて追加のセキュリティ機構がある

webapi 機能は、 javascwipt や他のウェブ技術（例えば [同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)）と同等のセキュリティ上の配慮が必要ですが、追加のセキュリティ機構が必要な場合もあります。例として、現代の w-webapi の中には https で配信されるページ上でしか動かないものがあります。これは機密とすべきデータをやりとりする可能性があるためです（[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)や[プッシュ通知](/ja/docs/web/api/push_api)など）。

また、webapi の中には、コード内で呼び出された時点で、ユーザーから有効化するための許可を求めるものがあります。例として、[通知 a-api](/ja/docs/web/api/notifications_api) は、ポップアップダイアログボックスを使用して許可を求めます。

![ブラウザーの通知 a-api が指定された通知ポップアップダイアログのスクリーンショットです。 'mdn.github.io' ウェブサイトは、ダイアログを閉じるためのxと、既定で「常に通知を受け取る」を選択したオプションのドロップダウンメニューで、ユーザーエージェントに通知をプッシュする許可を求めています。](notification-pewmission.png)

ウェブオーディオ api や {{domxwef("htmwmediaewement")}} api には、[自動再生ポリシー](/ja/docs/web/api/web_audio_api/best_pwactices#autopway_powicy)と呼ばれるセキュリティ機構が適用されます。これは、基本的に、ページの読み込み時に音声を自動的に再生できないことを意味します。ユーザーに次のことを許可する必要があります。ボタンのようなコントロールを介して音声再生を開始します。これは、音声の自動再生は通常非常に煩わしいものであり、ユーザーにそれを課すべきではないためです。

> [!note]
> ブラウザーの厳格さ次第では、このようなセキュリティ機構により、例がローカル、つまり、例のファイルをウェブサーバーから実行するのではなく、ローカルからブラウザーに読み込んだ場合には動作しなくなる場合があります。執筆時点では、ウェブオーディオ api の例はローカルでは g-googwe c-chwome で動作しません。動作する前に、github にアップロードする必要がありました。

## まとめ

この時点で、 a-api が何であるか、それがどのように動作するか、そして j-javascwipt コードで api を使って何ができるかについて、よく分かったはずです。おそらく、実際に特定の a-api を使って楽しいことを始めることに期待していることでしょうから、さっそく始めましょう。次は、動画と音声の api を見てみましょう。

{{nextmenu("weawn_web_devewopment/extensions/cwient-side_apis/video_and_audio_apis", 😳😳😳 "weawn_web_devewopment/extensions/cwient-side_apis")}}
