---
title: ブラウザーに依存しない動画プレイヤーの作成
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

この記事では、メディア API および全画面 API を使用した基本的な HTML 動画プレイヤーについて記述します。このプレイヤーは全画面表示に対応しているほか、ブラウザーのデフォルトのコントロールだけでなく、独自のコントロールも備えています。プレイヤーのコントロール自体については、動作に必要な基本的なスタイル設定以外は適用しません。プレイヤーの完全なスタイル設定については、今後の記事で取り上げる予定です。

このサンプル動画プレイヤーは、[Tears of Steel](https://mango.blender.org/about/) というオープンソースの映画のクリップを、一般的な動画コントロール機能を含めて表示します。

## HTML マークアップ

まずは、プレイヤーを構成する HTML を見ていきましょう。

### 動画

プレイヤー全体は、{{ htmlelement("figure") }} 要素内に含まれています。

```html-nolint live-sample___video-player
<figure id="videoContainer">
```

内部では、まず {{ htmlelement("video") }} 要素を定義します。

```html live-sample___video-player
<video
  id="video"
  controls
  preload="metadata"
  poster="/shared-assets/images/examples/tears-of-steel-battle-clip-medium-poster.jpg">
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.mp4"
    type="video/mp4" />
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.webm"
    type="video/webm" />
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.ogg"
    type="video/ogg" />
  <!-- ダウンロードを提案 -->
  <a href="/shared-assets/videos/tears-of-steel-battle-clip-medium.mp4"
    >MP4 をダウンロード</a
  >
</video>
```

このプレイヤーはコントロール群を独自に定義しますが、 `controls` 属性を {{ htmlelement("video") }} 要素に追加しており、JavaScript によってデフォルトのコントロール群を無効化しています。こうすることで、（何らかの理由で）JavaScript を無効にしているユーザーでも、ブラウザーのネイティブコントロールを利用できるようになります。

動画にはポスター画像が定義されており、`preload` 属性は `metadata` に設定されています。これにより、ブラウザーは当初、動画ファイル全体ではなく、メタデータのみを読み込むよう指示されます。これにより、再生プレイヤーは動画の再生時間や形式などに関するデータを入手できます。

このプレイヤーには、MP4、WebM、Ogg の 3 種類の動画ソースが提供されてます。これらの異なるソース形式を使用することで、HTML 動画に対応しているすべてのブラウザーで再生される可能性が最も高くなります。動画形式とブラウザーの互換性に関する情報については、[動画コーデックの選択](/ja/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec)を参照してください。

以上のコードを使用すれば、ほとんどのブラウザーで、ブラウザーのデフォルトのコントロール群を使用して動画を再生することができます。次の段階は、動画の操作に使用する独自のコントロール群を、同時に HTML で定義することです。

### コントロール群

ほとんどのブラウザーのデフォルトの動画コントロールは、次のような機能を備えています。

- 再生/一時停止
- 消音
- 音量コントロール
- 進捗バー
- スキップ
- 全画面表示

独自のコントロール群もこの機能に対応し、それに停止ボタンを追加します。

繰り返しになりますが、HTML は非常にシンプルで、`list-style-type:none` を設定した順序なしリストを使用してコントロールを囲み、それぞれのコントロールは `float:left` が設定されたリストアイテムとなっています。進捗バーについては、`progress` 要素が活用されています。このリストは、{{ htmlelement("video") }} 要素の後に、ただし {{ htmlelement("figure") }} 要素の内側に挿入します（これは、後述する全画面機能にとって重要な点です）。

```html live-sample___video-player
<ul id="video-controls" class="controls" data-state="hidden">
  <li><button id="play-pause" type="button">再生/一時停止</button></li>
  <li><button id="stop" type="button">停止</button></li>
  <li class="progress">
    <progress id="progress" value="0"></progress>
  </li>
  <li><button id="mute" type="button">消音/解除</button></li>
  <li><button id="vol-inc" type="button">音量↑</button></li>
  <li><button id="vol-dec" type="button">音量↓</button></li>
  <li><button id="fs" type="button">全画面</button></li>
</ul>
```

それぞれのボタンには `id` を指定しており、JavaScript から簡単にアクセスすることが可能です。

コントロールは、最初は CSS の `display:none` によって非表示になっており、JavaScript によって有効化されます。繰り返しになりますが、ユーザーが JavaScript を無効にしている場合、独自のコントロール群は表示されず、ブラウザーのデフォルトのコントロール群を何の問題もなく使用することができます。

もちろん、この独自のコントロール群は現時点では役に立たず、何もしません。JavaScript でこれを改善してみましょう。

最後に、著作権情報が入った {{htmlelement("figcaption")}} をつけて、`<figure>` 要素を閉じます。

```html live-sample___video-player
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

## メディア API の使用

HTML には、開発者が HTML メディアにアクセスして制御することができる JavaScript の[メディア API](/ja/docs/Web/API/HTMLMediaElement)が備わっています。この API を使用して、以上で定義した独自のコントロール群に実際に動作をさせます。さらに、全画面表示ボタンでは、[全画面 API](/ja/docs/Web/API/Fullscreen_API)が使用されます。これは、ウェブブラウザーがコンピューターの全画面を使用してアプリを表示させる機能を制御する、もう 1 つの W3C API です。

### セットアップ

個々のボタンについて扱う前に、いくつかの初期化処理が必要です。HTML 要素を指す変数が必要です。

```js live-sample___video-player
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

これらのハンドルを使用することで、それぞれの独自のコントロールボタンにイベントを紐付け、それらを操作可能にすることができます。これらのボタンのほとんどは、`click` イベントリスナーを追加するとともに、動画に対してメディア API で定義されたメソッドや属性を呼び出したり確認したりする必要があります。

前述の通り、ブラウザーのデフォルトのコントロールを無効にし、独自のコントロールを表示させる必要があります。

```js live-sample___video-player
// デフォルトのコントロールを非表示にする
video.controls = false;
// ユーザー定義の動画コントロールを表示させる
videoControls.setAttribute("data-state", "visible");
```

### 再生/一時停止

```js live-sample___video-player
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

再生/一時停止ボタンで `click` イベントが検出されると、ハンドラーはまず、動画が現在一時停止中か、あるいは再生が終了しているか（メディア API の `paused` および `ended` 属性を使用して）を調べます。その場合は、`play()` メソッドを使用して動画を再生します。そうでない場合は、動画が再生中であるため、`pause()` メソッドを使用して再生を一時停止します。

### 停止

```js live-sample___video-player
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

メディア API には `stop` メソッドがないため、これを再現するために動画を一時停止し、その `currentTime`（つまり、動画の現在の再生位置）と {{ htmlelement("progress") }} 要素の位置を 0 に設定します（{{ htmlelement("progress") }} 要素については後述します）。

### 消音

```js live-sample___video-player
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

消音ボタンは、メディア API の `muted` 属性を使用して動画の音を消すトグルボタンです。これは、動画が消音になっているかどうかを示す論理値です。トグル切り替えをするためには、その値を反転させます。

### 音量

```js live-sample___video-player
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

音量を上げるボタンと下げるボタンの 2 つの音量調節ボタンが定義されています。これに対応するために、ユーザー定義関数 `alterVolume(direction)` を作成しました。

```js live-sample___video-player
function alterVolume(dir) {
  const currentVolume = Math.floor(video.volume * 10) / 10;
  if (dir === "+" && currentVolume < 1) {
    video.volume += 0.1;
  } else if (dir === "-" && currentVolume > 0) {
    video.volume -= 0.1;
  }
}
```

この関数は、メディア API の `volume` 属性を使用しています。この属性には、動画の現在の音量値が格納されています。この属性の有効な値は、0、1、およびその間の任意の値です。この関数は、音量を上げる (+) か下げる (-) かを示す `dir` 引数を調べ、それに応じて動作します。この関数は、動画の `volume` 属性を 0.1 段階で増減するように定義されており、0 未満にはならず、1 を超えないように実現します。

### 進捗

前述の HTML で {{ htmlelement("progress") }} 要素を定義した際、`value` 属性のみが 0 に設定されていました。この属性は、プログレスバー要素の現在の値を示します。また、範囲を正しく表示するためには最大値を設定する必要があり、これは `max` 属性を使用して行います。この属性には、動画の最大再生時間を設定する必要があります。これは、動画の `duration` 属性から取得されます。この属性も、メディア API の一部です。

理想的には、動画のメタデータが読み込まれた際に発生する `loadedmetadata` イベントが発生した時点で、動画の `duration` 属性の正しい値が利用できるはずです。

```js live-sample___video-player
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

残念ながら、一部のモバイルブラウザーでは、`loadedmetadata` が発生した際（そもそも発生する場合さえあるかどうかは別として）、`video.duration` が正しい値になっていないか、あるいはまったく値をないことがあります。そのため、他の対応を行う必要があります。これについては下記で説明します。

別のイベントである `timeupdate` は、動画の再生中に定期的に発生します。このイベントは、進捗バーの値を更新するのに最適であり、現在の再生位置を示す動画の `currentTime` 属性の値に設定します。

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

`timeupdate` イベントが発生すると、`progress` 要素の `value` 属性に、動画の `currentTime` が設定されます。この span 要素には CSS で背景色が塗りつぶしの設定がされており、{{ htmlelement("progress") }} 要素と同じ視覚的なフィードバックを提供するのに役立ちます。

前述した `video.duration` の問題に戻りますが、`timeupdate` イベントが発生すると、ほとんどのモバイルブラウザーでは、動画の `duration` 属性に正しい値が設定されるようになりました。この仕組みを利用して、`progress` 要素の `max` 属性がまだ設定されていない場合は、それを設定することができます。

```js live-sample___video-player
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> 進捗バーやバッファリングのフィードバックに関する詳細情報や考え方について詳しくは、[メディアのバッファリング、シーク、時間範囲](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)をご覧ください。

### スキップ

ほとんどのブラウザーのデフォルトの動画コントロール群のもう一つの機能は、動画の進捗バーをクリックして、動画内の別の箇所へ「スキップ」できることです。これは、`progress` 要素に `click` イベントリスナーを追加することでも実現できます。

```js live-sample___video-player
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

このコードは、クリックされた位置を利用して、ユーザーが `progress` 要素のどのあたりをクリックしたかを（おおよそ）特定し、`currentTime` 属性を設定することで、動画をその位置まで移動します。動画がまだ読み込まれていない場合、動画の再生時間が {{jsxref("Global_Objects/NaN", "NaN")}} または {{jsxref("Global_Objects/Infinity", "Infinity")}} となるため、その場合は `currentTime` 設定しないようにします。

### 全画面

全画面 API の使い方は単純明快です。ユーザーがボタンをクリックすると、動画が全画面表示モードの場合はその状態を解除し、そうでない場合は全画面表示モードに切り替えます。

全画面 API が有効になっていない場合、全画面ボタンは非表示になります。

```js live-sample___video-player
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

全画面表示ボタンには、実際に動作させる必要があります。それ以外にも、他のボタンと同様に、全画面表示モードを切り替える `click` イベントハンドラーが添付されています。

```js live-sample___video-player
fullscreen.addEventListener("click", (e) => {
  if (document.fullscreenElement !== null) {
    // この文書は全画面表示モードになっています
    document.exitFullscreen();
  } else {
    // この文書は全画面表示モードになっていません
    videoContainer.requestFullscreen();
  }
});
```

ブラウザーが現在全画面モードになっている場合は、そのモードを終了させる必要があり、その逆も同様です。興味深いことに、全画面モードの終了やキャンセルには `document` を使用する必要がありますが、全画面モードの開始には任意の HTML 要素を使用することができます。ここでは、全画面モード時に動画とともに独自のコントロールも表示すべきであるため、`videoContainer` が使用されています。

## 結果

このチュートリアルでは CSS の部分は非表示になっていますが、"Play" をクリックすると完全なソースコードを確認できます。次の部分、[動画プレイヤーのスタイル設定の基礎](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)では、ここで使用されている興味深い CSS のテクニックをいくつか紹介するとともに、プレイヤーの見た目をさらに良くするための新しい CSS を追加していきます。

```css hidden live-sample___video-player
:root {
  color: #333333;
  font-family:
    "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", "Lucida",
    "Helvetica", "Arial", sans-serif;
}
a {
  color: #0095dd;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2255aa;
  text-decoration: underline;
}
figure {
  max-width: 64rem;
  width: 100%;
  margin: 0;
  padding: 0;
}
figcaption {
  display: block;
  font-size: 1rem;
}
video {
  width: 100%;
}

/* コントロール */
.controls {
  display: flex;
  gap: 6px;
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
}
.controls[data-state="hidden"] {
  display: none;
}
.controls li {
  width: max(10%, 3rem);
  margin: 0;
  padding: 0;
}
.controls .progress {
  flex-grow: 1;
  cursor: pointer;
}
.controls button {
  width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.controls progress {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #aaaaaa;
  overflow: hidden;
  border-radius: 2px;
}

/* 全画面 */
figure:fullscreen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  height: 100%;
}
figure:fullscreen video {
  margin-top: auto;
  margin-bottom: auto;
}
figure:fullscreen figcaption {
  display: none;
}
```

> [!WARNING]
> サンプル動画の音量が大きいことがあります！

{{EmbedLiveSample("video-player", "", 400, "", "", "", "fullscreen")}}

## 関連情報

- {{ htmlelement("video") }} のリファレンス素材
- [HTML の動画とオーディオ](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio): それ以外の技術
- [HTML の audio および video 要素が対応するメディア形式](/ja/docs/Web/Media/Guides/Formats)
