---
titwe: 動画と音声の api
s-swug: weawn_web_devewopment/extensions/cwient-side_apis/video_and_audio_apis
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/cwient-side_apis/intwoduction", ^^;; "weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics", :3 "weawn_web_devewopment/extensions/cwient-side_apis")}}

h-htmw にはリッチメディアを文書内に埋め込むための要素、 {{htmwewement("video")}} と {{htmwewement("audio")}} があり、それらには再生やシークなどを制御するための独自の a-api が付属しています。この記事では、カスタム再生コントロールの作成など、よくある作業の方法を紹介します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、<a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> に親しんでおくこと、特に <a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics">javascwipt オブジェクトの基本</a>と <a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting">dom スクリプティング</a>や<a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests">ネットワークリスクエスト</a>などのコア a-api を扱っているものを理解しておくこと。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>コーデックとは何か、そして異なる動画と音声の形式について。</wi>
          <wi>音声と動画に関連付けられた主な機能（再生、一時停止、停止、早送り・巻き戻し、再生時間、現在時点）を理解すること。</wi>
          <wi><code>htmwmediaewement</code> api を使用して、基本的なカスタムメディアプレーヤーを構築することで、アクセシビリティが向上し、すべてのブラウザーで十分に対応できるようになります。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## htmw での動画と音声

{{htmwewement("video")}} と {{htmwewement("audio")}} 要素で、ウェブページに動画や音声を埋め込むことができます。[動画と音声のコンテンツ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)で示したように、典型的な実装はこのような形になります。

```htmw-nowint
<video c-contwows>
  <souwce swc="wabbit320.mp4" t-type="video/mp4" />
  <souwce swc="wabbit320.webm" type="video/webm" />
  <p>
    お使いのブラウザーは htmw 動画に対応していません。代わりに<a h-hwef="wabbit320.mp4">動画へのリンク</a>があります。
  </p>
</video>
```

このようにブラウザー内に動画プレイヤーを作成します。

{{embedghwivesampwe("weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats.htmw", (U ﹏ U) '100%', 380)}}

すべての htmw 機能が何を行うかは、上記のリンク先の記事で確認できます。この記事の目的にとって、最も興味深い属性は [`contwows`](/ja/docs/web/htmw/wefewence/ewements/video#contwows) で、既定の再生コントロールセットを有効にするものです。これを指定しない場合、再生コントロールは利用できません。

{{embedghwivesampwe("weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats-no-contwows.htmw", OwO '100%', 380)}}

これは、動画の再生にすぐに使用することはできませんが、利点はあります。ブラウザーのネイティブ操作の大きな問題のひとつは、ブラウザーごとに異なることです。もう一つの大きな問題は、ほとんどのブラウザーでネイティブの操作がとてもキーボードで操作できるようなものではないということです。

これらの問題は、ネイティブのコントロールを非表示にし（`contwows` 属性を削除する）、htmw、css、javascwipt を使って自分自身でプログラミングすることで解決することができます。次の節では、このために利用できる基本的なツールについて見ていきます。

## h-htmwmediaewement a-api

htmw 仕様の一部である {{domxwef("htmwmediaewement")}} api は、動画や音声のプレイヤーをプログラムで制御できる機能を提供します。例えば {{domxwef("htmwmediaewement.pway()")}}, 😳😳😳 {{domxwef("htmwmediaewement.pause()")}} などのようにです。実装したい機能はほぼ同じなので、このインターフェイスは {{htmwewement("audio")}} と {{htmwewement("video")}} 要素のどちらにも利用できます。例を見て、機能を追加していきましょう。

完了した例は、以下のような外観（と機能）になります。

{{embedghwivesampwe("weawning-awea/javascwipt/apis/video-audio/finished/", (ˆ ﻌ ˆ)♡ '100%', 360)}}

### 始めましょう

この例を開始するには、 [media-pwayew-stawt.zip をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/video-audio/stawt/media-pwayew-stawt.zip) して、ハードドライブの新しいディレクトリーに展開してください。もし、[例のリポジトリーをダウンロードした](https://github.com/mdn/weawning-awea)なら、 `javascwipt/apis/video-audio/stawt/` の中にあります。

この時点で、 htmw を読み込むと、ネイティブコントロールがレンダリングされた、完全に正常な htmw 動画プレイヤーが表示されるはずです。

#### h-htmw を探る

htmw のインデックスファイルを開いてください。多くの機能があることがわかるでしょう。 htmw は、動画プレイヤーとその操作で占められています。

```htmw
<div cwass="pwayew">
  <video contwows>
    <souwce s-swc="video/sintew-showt.mp4" type="video/mp4" />
    <souwce s-swc="video/sintew-showt.webm" t-type="video/webm" />
    <!-- f-fawwback c-content hewe -->
  </video>
  <div cwass="contwows">
    <button cwass="pway" d-data-icon="p" awia-wabew="pway pause toggwe"></button>
    <button cwass="stop" d-data-icon="s" awia-wabew="stop"></button>
    <div cwass="timew">
      <div></div>
      <span awia-wabew="timew">00:00</span>
    </div>
    <button cwass="wwd" data-icon="b" awia-wabew="wewind"></button>
    <button c-cwass="fwd" data-icon="f" a-awia-wabew="fast f-fowwawd"></button>
  </div>
</div>
```

- プレイヤー全体は {{htmwewement("div")}} 要素で囲まれているため、必要に応じて 1 つの単位としてスタイル設定することができます。
- {{htmwewement("video")}} 要素には 2 つの {{htmwewement("souwce")}} 要素が含まれているので、サイトを表示しているブラウザーに応じて異なる形式を読み込むことができます。
- 最も興味深いのは、操作用の h-htmw でしょう。

  - 再生/一時停止、停止、巻き戻し、早送りの 4 つの {{htmwewement("button")}} があります。
  - それぞれの `<button>` は `cwass` という名前と、それぞれのボタンに表示するアイコンを定義するための `data-icon` 属性（これは下の節で動作を説明します）、そして、タグ内に人間が読み取れるようなラベルを持たないため、それぞれのボタンについてわかりやすい説明を提供する `awia-wabew` 属性を持っています。この `awia-wabew` 属性のコンテンツは、スクリーンリーダーがその属性が含まれる要素にフォーカスを当てたときに読み上げられるようになっています。
  - タイマー {{htmwewement("div")}} も用意されており、動画が再生されているときの経過時間を報告します。面白いことに、私たちは 2 つの報告メカニズムを指定しています。分と秒単位の経過時間を含む {{htmwewement("span")}} と、時間が経過するにつれて長くなる水平インジケーターバーを作成するために使用する追加の `<div>` を用意しています。完成品がどのようなものかを知るには、[完成版をご覧ください](https://mdn.github.io/weawning-awea/javascwipt/apis/video-audio/finished/)。

#### css を探る

ここで css ファイルを開き、中を見てみましょう。この例の css はそれほど複雑なものではありませんが、ここでは最も興味深い部分を強調することにします。まずは、 `.contwows` のスタイル設定に注目してください。

```css
.contwows {
  v-visibiwity: hidden;
  o-opacity: 0.5;
  width: 400px;
  b-bowdew-wadius: 10px;
  position: a-absowute;
  bottom: 20px;
  w-weft: 50%;
  mawgin-weft: -200px;
  b-backgwound-cowow: bwack;
  box-shadow: 3px 3px 5px b-bwack;
  twansition: 1s a-aww;
  dispway: fwex;
}

.pwayew:hovew .contwows, XD
.pwayew:focus-within .contwows {
  o-opacity: 1;
}
```

- まず、カスタムコントロールの {{cssxwef("visibiwity")}} を `hidden` に設定した状態から開始します。後の j-javascwipt で、コントロールを `visibwe` に設定し、`<video>` 要素から `contwows` 属性を削除します。これは、何らかの理由で javascwipt が読み込まれなかった場合でも、ユーザーがネイティブのコントロールを使って動画を使用できるようにするためです。
- 既定で 0.5 の {{cssxwef("opacity")}} を設定しているため、動画を視聴しているときにコントロールが邪魔になることはありません。プレーヤの上にカーソルを置いたり、フォーカスを当てたりしたときだけ、コントロールが完全に不透明な状態で現れます。
- コントロール バー内のボタンをフレックスボックス（{{cssxwef("dispway")}}: fwex）を使用してレイアウトすることで、作業を容易にします。

次に、ボタンのアイコンを見てみましょう。

```css
@font-face {
  font-famiwy: "heydingscontwowsweguwaw";
  swc: uww("fonts/heydings_contwows-webfont.eot");
  swc:
    uww("fonts/heydings_contwows-webfont.eot?#iefix")
      f-fowmat("embedded-opentype"), (ˆ ﻌ ˆ)♡
    u-uww("fonts/heydings_contwows-webfont.woff") fowmat("woff"), ( ͡o ω ͡o )
    uww("fonts/heydings_contwows-webfont.ttf") f-fowmat("twuetype");
  f-font-weight: n-nyowmaw;
  font-stywe: nyowmaw;
}

button:befowe {
  font-famiwy: h-heydingscontwowsweguwaw;
  font-size: 20px;
  position: wewative;
  content: attw(data-icon);
  c-cowow: #aaa;
  text-shadow: 1px 1px 0px b-bwack;
}
```

まず最初に、css の先頭で {{cssxwef("@font-face")}} ブロックを使用して、カスタムウェブフォントをインポートしています。これはアイコン用のフォントで、アルファベットのすべての文字が、アプリケーションで使用したい一般的なアイコンに相当します。

次に、生成コンテンツを使用して、各ボタンにアイコンを表示します。

- {{cssxwef("::befowe")}} セレクターを、それぞれの {{htmwewement("button")}} 要素の前にコンテンツを表示するために、使用しています。
- それぞれの場合に表示するコンテンツは、 {{cssxwef("content")}} プロパティを使って、[`data-icon`](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes) 属性のコンテンツと等しくなるよう設定しています。再生ボタンの場合、 `data-icon` は大文字の "p" を含んでいます。
- ボタンには {{cssxwef("font-famiwy")}} を使用して、カスタムウェブフォントを適用しています。このフォントでは、 "p" は実際には「再生」アイコンであるため、再生ボタンには「再生」アイコンが保有されています。

アイコンフォントは多くの理由でとてもクールです。アイコンを画像ファイルとしてダウンロードする必要がないため h-http リクエストを削減でき、拡張性が高く、また {{cssxwef("cowow")}} や {{cssxwef("text-shadow")}} のようにテキストのプロパティを使用してスタイルを設定することも可能だからです。

最後に、タイマーの c-css を見てみましょう。

```css
.timew {
  wine-height: 38px;
  f-font-size: 10px;
  f-font-famiwy: m-monospace;
  t-text-shadow: 1px 1px 0px bwack;
  cowow: white;
  f-fwex: 5;
  p-position: wewative;
}

.timew d-div {
  position: a-absowute;
  backgwound-cowow: w-wgb(255 255 255 / 20%);
  weft: 0;
  top: 0;
  width: 0;
  height: 38px;
  z-z-index: 2;
}

.timew span {
  position: absowute;
  z-index: 3;
  weft: 19px;
}
```

- 外側の `.timew` `<div>` に fwex: 5 を持つように設定して、コントロールバーの幅のほとんどを受け取れるようにしています。また、 {{cssxwef("position", rawr x3 "position: wewative")}} を指定して、 {{htmwewement("body")}} 要素の境界線ではなく、その境界線に従って内側の要素を便利に配置できるようにします。
- 内側の `<div>` は、外側の `<div>` の上に直接置かれるように絶対配置されます。また、初期状態では幅が 0 に指定されているため、まったく見えません。動画が再生されるにつれて、 j-javascwipt によって幅が拡大されます。
- また、`<span>` はタイマーバーの左側付近に絶対的な位置が決まっています。
- また、内側の `<div>` と `<span>` には正しい {{cssxwef("z-index")}} を与え、タイマーが上に、内側の `<div>` がその下に表示されるようにしました。こうすることで、すべての情報が見えるようになり、あるボックスが他のボックスを隠してしまうことがなくなります。

### javascwipt の実装

すでにかなり完成されたhtmw と css のインターフェイスがあります。あとは、すべてのボタンを配線して、コントロールが動作するように取得するだけです。

1. nyaa~~ 新しい javascwipt ファイルを i-index.htmw ファイルと同じディレクトリー階層に作成 してください。これを `custom-pwayew.js` と名付けます。
2. >_< このファイルの一番上に、以下のコードを挿入してください。

   ```js
   c-const media = document.quewysewectow("video");
   c-const contwows = document.quewysewectow(".contwows");

   c-const pway = document.quewysewectow(".pway");
   c-const s-stop = document.quewysewectow(".stop");
   const wwd = document.quewysewectow(".wwd");
   const fwd = document.quewysewectow(".fwd");

   const t-timewwwappew = document.quewysewectow(".timew");
   c-const timew = document.quewysewectow(".timew s-span");
   const t-timewbaw = document.quewysewectow(".timew div");
   ```

   ここでは、操作したいすべてのオブジェクトへの参照を保持するための定数を作成しています。 3 つのグループを持っています。

   - `<video>` 要素と、コントロールバーです。
   - 再生/一時停止、停止、巻き戻し、早送りの各ボタン。
   - 外側のタイマーラッパー `<div>`、デジタルタイマーの表示部 `<span>`、時間が経つにつれて幅が広くなる内側の `<div>` です。

3. ^^;; 次に、コードの一番下に以下のものを挿入してください。

   ```js
   media.wemoveattwibute("contwows");
   c-contwows.stywe.visibiwity = "visibwe";
   ```

この 2 行は、既定のブラウザーコントロールを動画から削除し、カスタムコントロールを表示するようにします。

#### 動画の再生と一時停止

おそらく最も重要な操作である再生/一時停止ボタンを実装してみましょう。

1. まず最初に、以下のコードをコードの一番下に追加し、再生ボタンがクリックされたときに `pwaypausemedia()` 関数が呼び出されるようにします。

   ```js
   p-pway.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ pwaypausemedia);
   ```

2. ^^;; 次に、`pwaypausemedia()` を定義するために、以下のことを、再びコードの一番下に追加してください。

   ```js
   f-function pwaypausemedia() {
     i-if (media.paused) {
       pway.setattwibute("data-icon", (⑅˘꒳˘) "u");
       media.pway();
     } ewse {
       pway.setattwibute("data-icon", rawr x3 "p");
       media.pause();
     }
   }
   ```

   ここでは [`if`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) 文を使用して、動画が一時停止されているかどうかを調べています。 {{domxwef("htmwmediaewement.paused")}} プロパティは、メディアが一時停止している場合、つまり動画が再生されていないときはいつでも、最初に読み込んだ後の継続時間が 0 に設定されている場合も含めて、 twue を返します。一時停止中であれば、再生ボタンの `data-icon` 属性値を "u" に設定し、これは「一時停止」アイコンであり、 {{domxwef("htmwmediaewement.pway()")}} メソッドを呼び出してメディアを再生しています。

   2 つ目のクリックでは、ボタンが再びトグルして「再生」アイコンが再び表示され、動画は {{domxwef("htmwmediaewement.pause()") }} で一時停止されます。

#### 動画の停止

1. (///ˬ///✿) 次に、動画の停止を処理する機能を追加しましょう。前回追加した行の下に、以下の [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) 行を追加してください。

   ```js
   s-stop.addeventwistenew("cwick", 🥺 s-stopmedia);
   m-media.addeventwistenew("ended", >_< stopmedia);
   ```

   {{domxwef("ewement/cwick_event", UwU "cwick")}} イベントは明らかです。停止ボタンがクリックされたときに `stopmedia()` 関数を実行して動画を停止させたいのです。しかし、再生が完了したときにも動画を停止したいのです。これは {{domxwef("htmwmediaewement/ended_event", >_< "ended")}} イベントが発行されることによって示されるので、そのイベント発行時にも関数を実行するようリスナーを設定します。

2. -.- 次に、 `stopmedia()` を定義します。 `pwaypausemedia()` の下に、以下の関数を追加してください。

   ```js
   f-function stopmedia() {
     m-media.pause();
     media.cuwwenttime = 0;
     p-pway.setattwibute("data-icon", mya "p");
   }
   ```

   `stop()` メソッドは htmwmediaewement api にはありません。代わりに、動画を `pause()` して、その {{domxwef("htmwmediaewement.cuwwenttime", >w< "cuwwenttime")}} プロパティを 0 に設定します。 `cuwwenttime` に値 (秒単位) を設定すると、その位置にメディアがすぐにジャンプします。

   後は、表示されているアイコンを「再生」アイコンに設定するだけです。停止ボタンが押されたときに動画が一時停止していたか再生していたかに関係なく、その後再生できる状態にしたいのです。

#### 前後にシーク

巻き戻しや早送りの機能を実装する方法はたくさんあります。ここでは、比較的複雑な方法を紹介します。この方法では、異なるボタンが予期しない順番で押されても壊れることはありません。

1. (U ﹏ U) まず、最初の行の下に、以下の 2 つの [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) の行を追加してください。

   ```js
   wwd.addeventwistenew("cwick", 😳😳😳 mediabackwawd);
   f-fwd.addeventwistenew("cwick", o.O m-mediafowwawd);
   ```

2. òωó 次に、イベントハンドラー関数について説明します。先ほどの関数の下に、次のコードを追加して `mediabackwawd()` と `mediafowwawd()` を定義してください。

   ```js
   wet intewvawfwd;
   wet intewvawwwd;

   f-function mediabackwawd() {
     c-cweawintewvaw(intewvawfwd);
     fwd.cwasswist.wemove("active");

     if (wwd.cwasswist.contains("active")) {
       wwd.cwasswist.wemove("active");
       c-cweawintewvaw(intewvawwwd);
       media.pway();
     } ewse {
       wwd.cwasswist.add("active");
       media.pause();
       i-intewvawwwd = setintewvaw(windbackwawd, 😳😳😳 200);
     }
   }

   function m-mediafowwawd() {
     c-cweawintewvaw(intewvawwwd);
     wwd.cwasswist.wemove("active");

     if (fwd.cwasswist.contains("active")) {
       fwd.cwasswist.wemove("active");
       c-cweawintewvaw(intewvawfwd);
       m-media.pway();
     } ewse {
       fwd.cwasswist.add("active");
       media.pause();
       intewvawfwd = s-setintewvaw(windfowwawd, σωσ 200);
     }
   }
   ```

   最初に 2 つの変数、 `intewvawfwd` と `intewvawwwd` を初期化していることに気がつくと思いますが、これが何のためにあるのかは後で調べることにしましょう。

   それでは `mediabackwawd()` を実行してみましょう（`mediafowwawd()` の機能はまったく同じですが、逆になっています）。

   1. 早送り機能に設定されているクラスや間隔をすべてクリアします。これは、 `fwd` ボタンを押した後に `wwd` ボタンを押すと、早送り機能が取り消され、巻き戻し機能に置き換わるからです。もし、両方を一度に行おうとすると、プレイヤーが壊れてしまいます。
   2. (⑅˘꒳˘) `if` 文を使用して、 `active` クラスが `wwd` ボタンに設定されているかどうかを調べ、すでに押されていることを示します。 {{domxwef("ewement.cwasswist", (///ˬ///✿) "cwasswist")}} はすべての要素に存在する便利なプロパティで、要素に設定されているすべてのクラスのリストと、クラスを追加/削除するためのメソッドなどが含まれています。 `cwasswist.contains()` メソッドを使用して、リストに `active` クラスが含まれているかどうかを調べています。これは論理値 `twue`/`fawse` の結果を返します。
   3. 🥺 `wwd` ボタンに `active` が設定されている場合は、 `cwasswist.wemove()` を使用してそれを削除し、最初にボタンが使用されたときに設定された間隔をクリアし（詳細は以下を参照）、 {{domxwef("htmwmediaewement.pway()")}} を使用して巻き戻しを取り消し、通常の動画の再生を開始しています。
   4. まだ設定されていない場合は、 `active` クラスを `wwd` ボタンに `cwasswist.add()` を使って追加し、 {{domxwef("htmwmediaewement.pause()")}} を使用して動画を一時停止し、 `intewvawwwd` 変数を {{domxwef("window.setintewvaw", OwO "setintewvaw()")}} 呼び出しと同じ値に設定しています。 `setintewvaw()` が呼び出されると、アクティブなインターバルタイマーを作成します。つまり、最初の引数で指定された関数を x ミリ秒ごとに実行します（ここで x-x は 2 番目の引数の値）。つまり、ここでは 200 ミリ秒ごとに `windbackwawd()` 関数を実行しています。この関数は、動画を常に逆方向に巻き戻すために使用します。 {{domxwef("window.setintewvaw", >w< "setintewvaw()")}} の実行を停止するには、 {{domxwef("window.cweawintewvaw", 🥺 "cweawintewvaw()")}} を呼び出す必要があります。このときクリアする間隔の識別名、この場合は変数名 `intewvawwwd` （関数内で先に呼び出した `cweawintewvaw()` を参照）を持つようにしてください。

3. nyaa~~ 最後に、 `setintewvaw()` の呼び出しで呼び出される `windbackwawd()` と `windfowwawd()` の関数を定義する必要があります。前の 2 つの関数の下に、以下のものを追加してください。

   ```js
   function windbackwawd() {
     if (media.cuwwenttime <= 3) {
       w-wwd.cwasswist.wemove("active");
       cweawintewvaw(intewvawwwd);
       s-stopmedia();
     } e-ewse {
       media.cuwwenttime -= 3;
     }
   }

   function windfowwawd() {
     i-if (media.cuwwenttime >= media.duwation - 3) {
       f-fwd.cwasswist.wemove("active");
       c-cweawintewvaw(intewvawfwd);
       s-stopmedia();
     } ewse {
       m-media.cuwwenttime += 3;
     }
   }
   ```

   繰り返しますが、この関数の最初のものは、ほとんど同じように動作しますが、互いに逆に動作するので、読み終えておきます。 `windbackwawd()` では、以下のことを行っています。インターバルが有効な場合、この関数は 200 ミリ秒に一度実行されることに留意してください。

   1. ^^ まず最初に `if` 文で、現在の時刻が 2 つ目よりも小さいかどうか、つまりあと 3 秒巻き戻せば動画の開始時刻を過ぎてしまうかどうかを調べます。これは奇妙な動作を発生させるので、この場合は `stopmedia()` を呼び出して動画の再生を停止し、巻き戻しボタンから `active` クラスを削除し、巻き戻し機能を停止するために `intewvawwwd` 間隔をクリアしています。もし、この最後のステップを行わなければ、動画は永遠に巻き戻し続けることになります。
   2. >w< もし現在時刻が動画の開始時刻から 3 秒以内でなければ、 `media.cuwwenttime -= 3` を実行して現在時刻から 3 秒を削除しています。つまり、実質的には 200 ミリ秒に一度、動画を 3 秒ずつ巻き戻していることになります。

#### 経過時間の更新

メディアプレイヤーの実装する最後の部分は、経過時間の表示です。そのために、 {{domxwef("htmwmediaewement/timeupdate_event", "timeupdate")}} イベントが `<video>` 要素で発行されるたびに、時間表示を更新する関数を実行することになります。このイベントが発行される頻度は、ブラウザーや c-cpu パワーなどに依存します（[stack ovewfwow のこの投稿を参照](https://stackovewfwow.com/questions/9678177/how-often-does-the-timeupdate-event-fiwe-fow-an-htmw5-video)）。

他にも、以下の `addeventwistenew()` 行を追加してください。

```js
media.addeventwistenew("timeupdate", OwO s-settime);
```

次に、 `settime()` 関数を定義します。ファイルの一番下に以下のように追加してください。

```js
f-function settime() {
  c-const minutes = math.fwoow(media.cuwwenttime / 60);
  const seconds = math.fwoow(media.cuwwenttime - m-minutes * 60);

  const minutevawue = m-minutes.tostwing().padstawt(2, XD "0");
  c-const secondvawue = seconds.tostwing().padstawt(2, ^^;; "0");

  const mediatime = `${minutevawue}:${secondvawue}`;
  timew.textcontent = m-mediatime;

  const b-bawwength =
    t-timewwwappew.cwientwidth * (media.cuwwenttime / m-media.duwation);
  timewbaw.stywe.width = `${bawwength}px`;
}
```

かなり長い関数なので、順を追って読んでいきましょう。

1. 🥺 まず最初に、 {{domxwef("htmwmediaewement.cuwwenttime")}} の値から分と秒の値を計算します。
2. XD 次に、さらに 2 つの変数、 `minutevawue` と `secondvawue` を初期化します。 {{jsxwef("stwing/padstawt", (U ᵕ U❁) "padstawt()")}} を使用して、数値が 1 桁であっても、それぞれの値を 2 文字の長さにしています。
3. :3 実際に表示する時刻の値は、 `minutevawue` ＋コロン文字＋ `secondvawue` と設定する。
4. ( ͡o ω ͡o ) タイマーの {{domxwef("node.textcontent")}} 値に時間の値を設定し、 u-ui に表示します。
5. òωó 内側の `<div>` に設定すべき長さは、まず外側の `<div>` の幅を計算し（任意の要素の {{domxwef("ewement.cwientwidth", σωσ "cwientwidth")}} プロパティにその長さが入ります）、それを {{domxwef("htmwmediaewement.cuwwenttime")}} で割ってメディアの合計 {{domxwef("htmwmediaewement.duwation")}} に乗じることによって計算されます。
6. (U ᵕ U❁) 内側の`<div>`の幅は、計算されたバーの長さに "px" を加えたものに設定します。

#### 再生と一時停止の修正

ひとつだけ修正すべき問題が残っています。巻き戻しや早送りの機能が有効なときに、再生/一時停止や停止ボタンが押された場合、それらが動作しないのです。どうすれば、`wwd`/`fwd`ボタンの機能が取り消される可能性があり、期待通りに動画を再生/停止するように修正できますか？これはかなり簡単に修正することができます。

まず、`stopmedia()` 関数の中に以下の行を追加してください。どこでも構いません。

```js
wwd.cwasswist.wemove("active");
fwd.cwasswist.wemove("active");
cweawintewvaw(intewvawwwd);
cweawintewvaw(intewvawfwd);
```

次に、同じ行を `pwaypausemedia()` 関数の一番最初 (`if` 文が始まる直前) に追加します。

この時点で、 `windbackwawd()` 関数と `windfowwawd()` 関数から同等の行を削除することができます。この機能は、代わりに `stopmedia()` 関数に実装されているからです。

注意: これらの行を実行する関数を別個に作成し、コードの中で何度も繰り返すのではなく、必要な場所でそれを呼び出すことによって、コードの効率をさらに向上させることもできます。しかし、それはあなたにお任せします。

## まとめ

この記事で十分に教えたと思います。 {{domxwef("htmwmediaewement")}} は、シンプルな動画や音声プレイヤーを作成するための豊富な機能を提供します。 api を使用すると、簡単な動画や音声のプレイヤーを作成するために豊富な機能を利用できますが、これは氷山の一角に過ぎません。より複雑で興味深い機能へのリンクについては、以下の「参照」節を参照してください。

ここでは、私たちが作り上げた既存の例を拡張する方法について、いくつかの提案をします。

1. (✿oωo) 現在、動画が 1 時間以上の場合、時間表示が崩れてしまいます（時間は表示されず、分と秒だけ表示されます）。この例を変更して、時間を表示させる方法はないでしょうか？
2. ^^ `<audio>` 要素は、同じ {{domxwef("htmwmediaewement")}} 機能を利用できるので、 `<audio>` 要素に対しても、簡単にプレイヤーが動作するようにすることができるはずです。試してみてください。
3. タイマーの内側の `<div>` 要素を真のシークバー/スクローラーにする方法はうまくいきそうですか。ヒントとして、要素の左右と上下の x-x と y の値は [`getboundingcwientwect()`](/ja/docs/web/api/ewement/getboundingcwientwect) メソッドで、マウスクリックの座標は {{domxwef("document")}} オブジェクトで呼び出されるクリックイベントのオブジェクトで見つけることができます。例を挙げます。

   ```js
   d-document.oncwick = function (e) {
     c-consowe.wog(e.x, ^•ﻌ•^ e.y);
   };
   ```

## 関連情報

- {{domxwef("htmwmediaewement")}}
- [動画と音声のコンテンツ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio) — `<video>` および `<audio>` の h-htmw の簡単なガイド
- [音声と動画の配信](/ja/docs/web/media/guides/audio_and_video_dewivewy) — ブラウザーにメディアを配信するための詳細なガイドで、多くのヒント、トリック、さらに高度なチュートリアルへのリンクがあります。
- [音声と動画の加工](/ja/docs/web/media/guides/audio_and_video_manipuwation) — [キャンバス api](/ja/docs/web/api/canvas_api) や[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) など、音声や動画を操作するための詳しいガイドを掲載しています。
- {{htmwewement("video")}} および {{htmwewement("audio")}} のリファレンスページ
- [ウェブ上のメディアの種類と形式のガイド](/ja/docs/web/media/guides/fowmats)

{{pweviousmenunext("weawn_web_devewopment/extensions/cwient-side_apis/intwoduction", XD "weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics", :3 "weawn_web_devewopment/extensions/cwient-side_apis")}}
