---
title: 動画と音声の API
slug: Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 05d8b0eb3591009b6b7fee274bb7ed1bc5638f18
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}

HTML にはリッチメディアを文書内に埋め込むための要素、 {{htmlelement("video")}} と {{htmlelement("audio")}} があり、それらには再生やシークなどを制御するための独自の API が付属しています。この記事では、カスタム再生コントロールの作成など、よくある作業の方法を紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        JavaScript の基本（<a href="/ja/docs/Learn/JavaScript/First_steps">最初のステップ</a>、
        <a href="/ja/docs/Learn/JavaScript/Building_blocks"
          >構成要素</a
        >、
        <a href="/ja/docs/Learn/JavaScript/Objects">JavaScript オブジェクト</a>）、
        <a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >クライアント側 API の基本</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        ブラウザー API を使用して動画や音声の再生を操作する方法を学ぶこと。
      </td>
    </tr>
  </tbody>
</table>

## HTML での動画と音声

{{htmlelement("video")}} と {{htmlelement("audio")}} 要素で、ウェブページに動画や音声を埋め込むことができます。[動画と音声のコンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)で示したように、典型的な実装はこのような形になります。

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    お使いのブラウザーは HTML 動画に対応していません。代わりに<a
      href="rabbit320.mp4"
      >動画へのリンク</a
    >があります。
  </p>
</video>
```

このようにブラウザー内に動画プレイヤーを作成します。

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

すべての HTML 機能が何を行うかは、上記のリンク先の記事で確認できます。この記事の目的にとって、最も興味深い属性は [`controls`](/ja/docs/Web/HTML/Element/video#controls) で、既定の再生コントロールセットを有効にするものです。これを指定しない場合、再生コントロールは利用できません。

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

これは、動画の再生にすぐに使用することはできませんが、利点はあります。ブラウザーのネイティブ操作の大きな問題のひとつは、ブラウザーごとに異なることです。もう一つの大きな問題は、ほとんどのブラウザーでネイティブの操作がとてもキーボードで操作できるようなものではないということです。

これらの問題は、ネイティブのコントロールを非表示にし（`controls` 属性を削除する）、HTML、CSS、JavaScript を使って自分自身でプログラミングすることで解決することができます。次の節では、このために利用できる基本的なツールについて見ていきます。

## HTMLMediaElement API

HTML 仕様の一部である {{domxref("HTMLMediaElement")}} API は、動画や音声のプレイヤーをプログラムで制御できる機能を提供します。例えば {{domxref("HTMLMediaElement.play()")}}, {{domxref("HTMLMediaElement.pause()")}} などのようにです。実装したい機能はほぼ同じなので、このインターフェイスは {{htmlelement("audio")}} と {{htmlelement("video")}} 要素のどちらにも利用できます。例を見て、機能を追加していきましょう。

完了した例は、以下のような外観（と機能）になります。

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### 始めましょう

この例を開始するには、 [media-player-start.zip をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) して、ハードドライブの新しいディレクトリーに展開してください。もし、[例のリポジトリーをダウンロードした](https://github.com/mdn/learning-area)なら、 `javascript/apis/video-audio/start/` の中にあります。

この時点で、 HTML を読み込むと、ネイティブコントロールがレンダリングされた、完全に正常な HTML 動画プレイヤーが表示されるはずです。

#### HTML を探る

HTML のインデックスファイルを開いてください。多くの機能があることがわかるでしょう。 HTML は、動画プレイヤーとその操作で占められています。

```html
<div class="player">
  <video controls>
    <source src="video/sintel-short.mp4" type="video/mp4" />
    <source src="video/sintel-short.webm" type="video/webm" />
    <!-- fallback content here -->
  </video>
  <div class="controls">
    <button class="play" data-icon="P" aria-label="play pause toggle"></button>
    <button class="stop" data-icon="S" aria-label="stop"></button>
    <div class="timer">
      <div></div>
      <span aria-label="timer">00:00</span>
    </div>
    <button class="rwd" data-icon="B" aria-label="rewind"></button>
    <button class="fwd" data-icon="F" aria-label="fast forward"></button>
  </div>
</div>
```

- プレイヤー全体は {{htmlelement("div")}} 要素で囲まれているため、必要に応じて 1 つの単位としてスタイル設定することができます。

- {{htmlelement("video")}} 要素には 2 つの {{htmlelement("source")}} 要素が含まれているので、サイトを表示しているブラウザーに応じて異なる形式を読み込むことができます。
- 最も興味深いのは、操作用の HTML でしょう。

  - 再生/一時停止、停止、巻き戻し、早送りの 4 つの {{htmlelement("button")}} があります。
  - それぞれの `<button>` は `class` という名前と、それぞれのボタンに表示するアイコンを定義するための `data-icon` 属性（これは下の節で動作を説明します）、そして、タグ内に人間が読み取れるようなラベルを持たないため、それぞれのボタンについてわかりやすい説明を提供する `aria-label` 属性を持っています。この `aria-label` 属性のコンテンツは、スクリーンリーダーがその属性が含まれる要素にフォーカスを当てたときに読み上げられるようになっています。
  - タイマー {{htmlelement("div")}} も用意されており、動画が再生されているときの経過時間を報告します。面白いことに、私たちは 2 つの報告メカニズムを指定しています。分と秒単位の経過時間を含む {{htmlelement("span")}} と、時間が経過するにつれて長くなる水平インジケーターバーを作成するために使用する追加の `<div>` を用意しています。完成品がどのようなものかを知るには、[完成版をご覧ください](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/)。

#### CSS を探る

ここで CSS ファイルを開き、中を見てみましょう。この例の CSS はそれほど複雑なものではありませんが、ここでは最も興味深い部分を強調することにします。まずは、 `.controls` のスタイル設定に注目してください。

```css
.controls {
  visibility: hidden;
  opacity: 0.5;
  width: 400px;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -200px;
  background-color: black;
  box-shadow: 3px 3px 5px black;
  transition: 1s all;
  display: flex;
}

.player:hover .controls,
.player:focus-within .controls {
  opacity: 1;
}
```

- まず、カスタムコントロールの {{cssxref("visibility")}} を `hidden` に設定した状態から開始します。後の JavaScript で、コントロールを `visible` に設定し、`<video>` 要素から `controls` 属性を削除します。これは、何らかの理由で JavaScript が読み込まれなかった場合でも、ユーザーがネイティブのコントロールを使って動画を使用できるようにするためです。
- 既定で 0.5 の {{cssxref("opacity")}} を設定しているため、動画を視聴しているときにコントロールが邪魔になることはありません。プレーヤの上にカーソルを置いたり、フォーカスを当てたりしたときだけ、コントロールが完全に不透明な状態で現れます。
- コントロール バー内のボタンをフレックスボックス（{{cssxref("display")}}: flex）を使用してレイアウトすることで、作業を容易にします。

次に、ボタンのアイコンを見てみましょう。

```css
@font-face {
  font-family: "HeydingsControlsRegular";
  src: url("fonts/heydings_controls-webfont.eot");
  src:
    url("fonts/heydings_controls-webfont.eot?#iefix") format("embedded-opentype"),
    url("fonts/heydings_controls-webfont.woff") format("woff"),
    url("fonts/heydings_controls-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

button:before {
  font-family: HeydingsControlsRegular;
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaa;
  text-shadow: 1px 1px 0px black;
}
```

まず最初に、CSS の先頭で {{cssxref("@font-face")}} ブロックを使用して、カスタムウェブフォントをインポートしています。これはアイコン用のフォントで、アルファベットのすべての文字が、アプリケーションで使用したい一般的なアイコンに相当します。

次に、生成コンテンツを使用して、各ボタンにアイコンを表示します。

- {{cssxref("::before")}} セレクターを、それぞれの {{htmlelement("button")}} 要素の前にコンテンツを表示するために、使用しています。
- それぞれの場合に表示するコンテンツは、 {{cssxref("content")}} プロパティを使って、[`data-icon`](/ja/docs/Learn/HTML/Howto/Use_data_attributes) 属性のコンテンツと等しくなるよう設定しています。再生ボタンの場合、 `data-icon` は大文字の "P" を含んでいます。
- ボタンには {{cssxref("font-family")}} を使用して、カスタムウェブフォントを適用しています。このフォントでは、 "P" は実際には「再生」アイコンであるため、再生ボタンには「再生」アイコンが保有されています。

アイコンフォントは多くの理由でとてもクールです。アイコンを画像ファイルとしてダウンロードする必要がないため HTTP リクエストを削減でき、拡張性が高く、また {{cssxref("color")}} や {{cssxref("text-shadow")}} のようにテキストのプロパティを使用してスタイルを設定することも可能だからです。

最後に、タイマーの CSS を見てみましょう。

```css
.timer {
  line-height: 38px;
  font-size: 10px;
  font-family: monospace;
  text-shadow: 1px 1px 0px black;
  color: white;
  flex: 5;
  position: relative;
}

.timer div {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  left: 0;
  top: 0;
  width: 0;
  height: 38px;
  z-index: 2;
}

.timer span {
  position: absolute;
  z-index: 3;
  left: 19px;
}
```

- 外側の `.timer` `<div>` に flex: 5 を持つように設定して、コントロールバーの幅のほとんどを受け取れるようにしています。また、 {{cssxref("position")}}`: relative` を指定して、 {{htmlelement("body")}} 要素の境界線ではなく、その境界線に従って内側の要素を便利に配置できるようにします。
- 内側の `<div>` は、外側の `<div>` の上に直接置かれるように絶対配置されます。また、初期状態では幅が 0 に指定されているため、まったく見えません。動画が再生されるにつれて、 JavaScript によって幅が拡大されます。
- また、`<span>` はタイマーバーの左側付近に絶対的な位置が決まっています。
- また、内側の `<div>` と `<span>` には正しい {{cssxref("z-index")}} を与え、タイマーが上に、内側の `<div>` がその下に表示されるようにしました。こうすることで、すべての情報が見えるようになり、あるボックスが他のボックスを隠してしまうことがなくなります。

### JavaScript の実装

すでにかなり完成されたHTML と CSS のインターフェイスがあります。あとは、すべてのボタンを配線して、コントロールが動作するように取得するだけです。

1. 新しい JavaScript ファイルを index.html ファイルと同じディレクトリー階層に作成 してください。これを `custom-player.js` と名付けます。
2. このファイルの一番上に、以下のコードを挿入してください。

   ```js
   const media = document.querySelector("video");
   const controls = document.querySelector(".controls");

   const play = document.querySelector(".play");
   const stop = document.querySelector(".stop");
   const rwd = document.querySelector(".rwd");
   const fwd = document.querySelector(".fwd");

   const timerWrapper = document.querySelector(".timer");
   const timer = document.querySelector(".timer span");
   const timerBar = document.querySelector(".timer div");
   ```

   ここでは、操作したいすべてのオブジェクトへの参照を保持するための定数を作成しています。 3 つのグループを持っています。

   - `<video>` 要素と、コントロールバーです。
   - 再生/一時停止、停止、巻き戻し、早送りの各ボタン。
   - 外側のタイマーラッパー `<div>`、デジタルタイマーの表示部 `<span>`、時間が経つにつれて幅が広くなる内側の `<div>` です。

3. 次に、コードの一番下に以下のものを挿入してください。

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

この 2 行は、既定のブラウザーコントロールを動画から削除し、カスタムコントロールを表示するようにします。

#### 動画の再生と一時停止

おそらく最も重要な操作である再生/一時停止ボタンを実装してみましょう。

1. まず最初に、以下のコードをコードの一番下に追加し、再生ボタンがクリックされたときに `playPauseMedia()` 関数が呼び出されるようにします。

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. 次に、`playPauseMedia()` を定義するために、以下のことを、再びコードの一番下に追加してください。

   ```js
   function playPauseMedia() {
     if (media.paused) {
       play.setAttribute("data-icon", "u");
       media.play();
     } else {
       play.setAttribute("data-icon", "P");
       media.pause();
     }
   }
   ```

   ここでは [`if`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 文を使用して、動画が一時停止されているかどうかを調べています。 {{domxref("HTMLMediaElement.paused")}} プロパティは、メディアが一時停止している場合、つまり動画が再生されていないときはいつでも、最初に読み込んだ後の継続時間が 0 に設定されている場合も含めて、 true を返します。一時停止中であれば、再生ボタンの `data-icon` 属性値を "u" に設定し、これは「一時停止」アイコンであり、 {{domxref("HTMLMediaElement.play()")}} メソッドを呼び出してメディアを再生しています。

   2 つ目のクリックでは、ボタンが再びトグルして「再生」アイコンが再び表示され、動画は {{domxref("HTMLMediaElement.pause()") }} で一時停止されます。

#### 動画の停止

1. 次に、動画の停止を処理する機能を追加しましょう。前回追加した行の下に、以下の [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) 行を追加してください。

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   {{domxref("Element/click_event", "click")}} イベントは明らかです。停止ボタンがクリックされたときに `stopMedia()` 関数を実行して動画を停止させたいのです。しかし、再生が完了したときにも動画を停止したいのです。これは {{domxref("HTMLMediaElement/ended_event", "ended")}} イベントが発行されることによって示されるので、そのイベント発行時にも関数を実行するようリスナーを設定します。

2. 次に、 `stopMedia()` を定義します。 `playPauseMedia()` の下に、以下の関数を追加してください。

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   `stop()` メソッドは HTMLMediaElement API にはありません。代わりに、動画を `pause()` して、その {{domxref("HTMLMediaElement.currentTime", "currentTime")}} プロパティを 0 に設定します。 `currentTime` に値 (秒単位) を設定すると、その位置にメディアがすぐにジャンプします。

   後は、表示されているアイコンを「再生」アイコンに設定するだけです。停止ボタンが押されたときに動画が一時停止していたか再生していたかに関係なく、その後再生できる状態にしたいのです。

#### 前後をシーク

巻き戻しや早送りの機能を実装する方法はたくさんあります。ここでは、比較的複雑な方法を紹介します。この方法では、異なるボタンが予期しない順番で押されても壊れることはありません。

1. まず、最初の行の下に、以下の 2 つの [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) の行を追加してください。

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. 次に、イベントハンドラー関数について説明します。先ほどの関数の下に、次のコードを追加して `mediaBackward()` と `mediaForward()` を定義してください。

   ```js
   let intervalFwd;
   let intervalRwd;

   function mediaBackward() {
     clearInterval(intervalFwd);
     fwd.classList.remove("active");

     if (rwd.classList.contains("active")) {
       rwd.classList.remove("active");
       clearInterval(intervalRwd);
       media.play();
     } else {
       rwd.classList.add("active");
       media.pause();
       intervalRwd = setInterval(windBackward, 200);
     }
   }

   function mediaForward() {
     clearInterval(intervalRwd);
     rwd.classList.remove("active");

     if (fwd.classList.contains("active")) {
       fwd.classList.remove("active");
       clearInterval(intervalFwd);
       media.play();
     } else {
       fwd.classList.add("active");
       media.pause();
       intervalFwd = setInterval(windForward, 200);
     }
   }
   ```

   最初に 2 つの変数、 `intervalFwd` と `intervalRwd` を初期化していることに気がつくと思いますが、これが何のためにあるのかは後で調べることにしましょう。

   それでは `mediaBackward()` を実行してみましょう（`mediaForward()` の機能はまったく同じですが、逆になっています）。

   1. これは、 `fwd` ボタンを押した後に `rwd` ボタンを押すと、早送り機能が取り消され、巻き戻し機能に置き換わるからです。もし、両方を一度に行おうとすると、プレイヤーが壊れてしまいます。
   2. `if`ステートメントを使用して、 `active` クラスが `rwd` ボタンに設定されているかどうかを調べ、すでに押されていることを示します。 {{domxref("Element.classList", "classList")}} はすべての要素に存在する便利なプロパティで、要素に設定されているすべてのクラスのリストと、クラスを追加/削除するためのメソッドなどが含まれています。 `classList.contains()` メソッドを使用して、リストに `active` クラスが含まれているかどうかを調べています。これは論理値 `true`/`false` の結果を返します。
   3. `rwd` ボタンに `active` が設定されている場合は、 `classList.remove()` を使用してそれを削除し、最初にボタンが使用されたときに設定された間隔をクリアし（詳細は以下を参照）、 {{domxref("HTMLMediaElement.play()")}} を使用して巻き戻しを取り消し、通常の動画の再生を開始しています。
   4. まだ設定されていない場合は、`classList.add()` を使用して `rwd` ボタンに `active` クラスを追加し、 {{domxref("HTMLMediaElement.pause()")}} を使用して動画を一時停止し、 `intervalRwd` 変数を {{domxref("setInterval()")}} 呼び出しを使用して等しい値にセットしています。 `setInterval()` が呼び出されると、アクティブなインターバルを作成します。つまり、最初の引数で指定された関数を x ミリ秒ごとに実行します（ここで x は 2 番目の引数の値）。つまり、ここでは200ミリ秒ごとに `windBackward()` 関数を実行しています。この関数は、動画を常に逆方向に巻き戻すために使用します。domxref("setInterval()")}} の実行を停止するには、 {{domxref("clearInterval", "clearInterval()")}} を呼び出す必要があります。このときクリアする間隔の識別名、この場合は変数名 `intervalRwd` （関数内で先に呼び出した `clearInterval()` を参照）を持つようにしてください。

3. 最後に、 `setInterval()` の呼び出しで呼び出される `windBackward()` と `windForward()` の関数を定義する必要があります。前の 2 つの関数の下に、以下を追加してください。

   ```js
   function windBackward() {
     if (media.currentTime <= 3) {
       rwd.classList.remove("active");
       clearInterval(intervalRwd);
       stopMedia();
     } else {
       media.currentTime -= 3;
     }
   }

   function windForward() {
     if (media.currentTime >= media.duration - 3) {
       fwd.classList.remove("active");
       clearInterval(intervalFwd);
       stopMedia();
     } else {
       media.currentTime += 3;
     }
   }
   ```

   繰り返しますが、この関数の最初のものは、ほとんど同じように動作しますが、互いに逆に動作するので、読み終えておきます。windBackward()` では、以下のことを行っています。インターバルが有効な場合、この関数は 200 ミリ秒に一度実行されることを覚えておいてください。

   1. まず最初に `if` 文で、現在の時刻が 2 つ目よりも小さいかどうか、つまりあと 3 秒巻き戻せば動画の開始時刻を過ぎてしまうかどうかを調べます。これは奇妙な動作を発生させるので、この場合は `stopMedia()` を呼び出して動画の再生を停止し、巻き戻しボタンから `active` クラスを削除し、巻き戻し機能を停止するために `intervalRwd` 間隔をクリアしています。もし、この最後のステップを行わなければ、動画は永遠に巻き戻し続けることになります。
   2. もし現在時刻が動画の開始時刻から 3 秒以内でなければ、`media.currentTime -= 3` を実行して現在時刻から 3 秒を削除しています。つまり、実質的には 200 ミリ秒に一度、動画を 3 秒ずつ巻き戻していることになります。

#### 経過時間の更新

メディアプレイヤーの実装する最後の部分は、経過時間の表示です。そのために、 {{domxref("HTMLMediaElement/timeupdate_event", "timeupdate")}} イベントが `<video>` 要素で発行されるたびに、時間表示を更新する関数を実行することになります。このイベントが発行される頻度は、ブラウザーや CPU パワーなどに依存します（[StackOverflow のこの投稿を参照](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)）。

他にも、以下の `addEventListener()` 行を追加してください。

```js
media.addEventListener("timeupdate", setTime);
```

次に、 `setTime()` 関数を定義します。ファイルの一番下に以下のように追加してください。

```js
function setTime() {
  const minutes = Math.floor(media.currentTime / 60);
  const seconds = Math.floor(media.currentTime - minutes * 60);

  const minuteValue = minutes.toString().padStart(2, "0");
  const secondValue = seconds.toString().padStart(2, "0");

  const mediaTime = `${minuteValue}:${secondValue}`;
  timer.textContent = mediaTime;

  const barLength =
    timerWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = `${barLength}px`;
}
```

かなり長い関数なので、順を追って読んでいきましょう。

1. まず最初に、 {{domxref("HTMLMediaElement.currentTime")}} の値から分と秒の数を計算して、この著作物を動作させます。
2. 次に、さらに二つの変数、 `minuteValue` と `secondValue` を初期化します。 {{jsxref("String/padStart", "padStart()")}} を使用して、たとえ数値が一桁であっても、それぞれの値を2文字の長さにしています。
3. 実際に表示する時刻の値は、 `minuteValue` ＋コロン文字＋ `secondValue` と設定する。
4. タイマーの {{domxref("Node.textContent")}} 値に時間の値を設定し、UIに表示します。
5. 内側の `<div>` に設定すべき長さは、まず外側の `<div>` の幅を計算し（任意の要素の {{domxref("Element.clientWidth", "clientWidth")}} プロパティにその長さが入ります）、それを {{domxref("HTMLMediaElement.currentTime")}} で割ってメディアの合計 {{domxref("HTMLMediaElement.duration")}} に乗じることによって計算されます。
6. 内側の`<div>`の幅は、計算されたバーの長さに "px" を加えたものに設定します。

#### 再生と一時停止の修正

ひとつだけ修正すべき問題が残っています。巻き戻しや早送りの機能が有効なときに、再生/一時停止や停止ボタンが押された場合、それらが動作しないのです。どうすれば、`rwd`/`fwd`ボタンの機能が取り消される可能性があり、期待通りに動画を再生/停止するように修正できますか？これはかなり簡単に修正することができます。

まず、`stopMedia()` 関数の中に以下の行を追加してください。どこでも構いません。

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

次に、同じ行を `playPauseMedia()` 関数の一番最初 (`if` 文が始まる直前) に追加します。

この時点で、 `windBackward()` 関数と `windForward()` 関数から同等の行を削除することができます。この機能は、代わりに `stopMedia()` 関数に実装されているからです。

注意: これらの行を実行する関数を別個に作成し、コードの中で何度も繰り返すのではなく、必要な場所でそれを呼び出すことによって、コードの効率をさらに向上させることもできます。しかし、それはあなたにお任せします。

## まとめ

この記事で十分に教えたと思います。 {{domxref("HTMLMediaElement")}} は、シンプルな動画や音声プレイヤーを作成するための豊富な機能を提供します。 API を使用すると、簡単な動画や音声のプレイヤーを作成するために豊富な機能を利用できますが、これは氷山の一角に過ぎません。より複雑で興味深い機能へのリンクについては、以下の「参照」節を参照してください。

ここでは、私たちが作り上げた既存の例を拡張する方法について、いくつかの提案をします。

1. 現在、動画が 1 時間以上の場合、時間表示が崩れてしまいます（時間は表示されず、分と秒だけ表示されます）。この例を変更して、時間を表示させる方法はないでしょうか？
2. `<audio>` 要素は、同じ {{domxref("HTMLMediaElement")}} 機能を利用できるので、 `<audio>` 要素に対しても、簡単にプレイヤーが動作するようにすることができるはずです。試してみてください。
3. タイマーの内側の `<div>` 要素を真のシークバー/スクローラーにする方法はうまくいきそうですか。ヒントとして、要素の左右と上下の X と Y の値は [`getBoundingClientRect()`](/ja/docs/Web/API/Element/getBoundingClientRect) メソッドで、マウスクリックの座標は {{domxref("Document")}} オブジェクトで呼び出されるクリックイベントのオブジェクトで見つけることができます。例を挙げます。

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## 関連情報

- {{domxref("HTMLMediaElement")}}
- [動画と音声のコンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) — `<video>` および `<audio>` の HTML の簡単なガイド
- [音声と動画の配信](/ja/docs/Web/Guide/Audio_and_video_delivery) — ブラウザーにメディアを配信するための詳細なガイドで、多くのヒント、トリック、さらに高度なチュートリアルへのリンクがあります。
- [音声と動画の加工](/ja/docs/Web/Guide/Audio_and_video_manipulation) — [キャンバス API](/ja/docs/Web/API/Canvas_API) や[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) など、音声や動画を操作するための詳しいガイドを掲載しています。
- {{htmlelement("video")}} および {{htmlelement("audio")}} のリファレンスページ
- [ウェブ上のメディアの種類と形式のガイド](/ja/docs/Web/Media/Formats)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}
