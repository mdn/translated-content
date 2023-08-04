---
title: 音声と動画の加工
slug: Web/Guide/Audio_and_video_manipulation
---

ウェブのよいところは、複数の技術をまとめて新しいものを作ることができる点です。ネイティブの音声や動画をブラウザー上で利用できるということは、これらのデータストリームを {{htmlelement("canvas")}}、[WebGL](/ja/docs/Web/WebGL)、[Web Audio API](/ja/docs/Web/API/Web_Audio_API) を利用して操作することで、音声や動画に直接変更を加えることができることを意味します。例えば音声にリバーブやコンプレッション効果をかけたり、動画にグレイスケールやセピアのフィルターをかけたりすることができます。この記事では、必要なことを説明するためのリファレンスを提供します。

## 動画の加工

動画の各フレームからピクセルの値を読むことができることは、とても有用です。

### 動画とキャンバス

{{htmlelement("canvas")}} 要素はウェブページ上でグラフィックを描画するための平面を提供します。これは強力で、動画の処理にも有用です。

一般的なテクニックは次のようになります。

1. {{htmlelement("video")}} 要素からのフレームを中間の {{htmlelement("canvas")}} 要素に描画します。
2. 中間の `<canvas>` 要素からデータを取得し、それを加工します。
3. 加工したデータを「画面」の `<canvas>` を通じて描画します。
4. 一時停止し、繰り返します。

例えば、動画を処理してグレースケールで表示する場合を考えてみましょう。この場合、ソース動画と出力のグレースケールのフレームの両方を表示します。通常、「動画をグレースケールで再生」機能を実装する場合、 `display: none` を `<video>` 要素のスタイルに追加して、ソース動画が画面に描画されず、変更されたフレームのみが表示されるキャンバスが表示されるようにします。

#### HTML

動画プレイヤーと、 `<canvas>` 要素は次のように記述します。

```html
<video
  id="my-video"
  controls="true"
  width="480"
  height="270"
  crossorigin="anonymous">
  <source
    src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>

<canvas id="my-canvas" width="480" height="270"></canvas>
```

#### JavaScript

このコードはフレームの加工を扱います。

```js
var processor = {
  timerCallback: function () {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    var self = this;
    setTimeout(function () {
      self.timerCallback();
    }, 16); // roughly 60 frames per second
  },

  doLoad: function () {
    this.video = document.getElementById("my-video");
    this.c1 = document.getElementById("my-canvas");
    this.ctx1 = this.c1.getContext("2d");
    var self = this;

    this.video.addEventListener(
      "play",
      function () {
        self.width = self.video.width;
        self.height = self.video.height;
        self.timerCallback();
      },
      false,
    );
  },

  computeFrame: function () {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    var frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    var l = frame.data.length / 4;

    for (var i = 0; i < l; i++) {
      var grey =
        (frame.data[i * 4 + 0] +
          frame.data[i * 4 + 1] +
          frame.data[i * 4 + 2]) /
        3;

      frame.data[i * 4 + 0] = grey;
      frame.data[i * 4 + 1] = grey;
      frame.data[i * 4 + 2] = grey;
    }
    this.ctx1.putImageData(frame, 0, 0);

    return;
  },
};
```

ページの読み込み後に、次のように呼び出してください。

```js
processor.doLoad();
```

#### 結果

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

これは、キャンバスを使用して動画フレームを加工する方法を示すとてもシンプルな例です。効率をよくするために、対応しているブラウザーで実行する場合は {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} を `setTimeout()` の代わりに使用することを検討したほうがいいでしょう。

> **メモ:** 潜在的なセキュリティ上の問題により、動画がコードと異なるドメインより配信されている場合、動画を配信しているサーバーで [CORS (オリジン間リソース共有)](/ja/docs/Web/HTTP/Access_control_CORS) を有効にする必要があります。

### 動画と WebGL

[WebGL](/ja/docs/Web/WebGL) はキャンバスを使用してハードウェアアクセラレーションによる三次元や二次元の描画を行う強力な API です。 {{htmlelement("video")}} 要素と組み合わせることで、動画をテクチャとして利用できます。つまり三次元空間上に動画を配置し、再生できます。

{{EmbedGHLiveSample('webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> **メモ:** [このデモのソースコードは GitHub](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample8) にあります ([ライブで表示](https://mdn.github.io/webgl-examples/tutorial/sample8/)も)。

### 再生速度

音声や動画の再生速度は {{htmlelement("audio")}} もしくは {{htmlelement("video")}} 要素の {{domxref("HTMLMediaElement.playbackRate", "playbackRate")}} と呼ばれる属性を使用して調整することができます。 `playbackRate` には再生速度の倍率を指定します。例えば 0.5 を指定すると半分の速度で、 2 を指定すると倍速で再生されます。

なお、 `playbackRate` プロパティは `<audio>` と `<video>` の両方で動作しますが、どちらの場合も、再生速度を変更するものの音程は*変更しません*。音声の高さを変更するには、 Web Audio API を使用する必要があります。 {{domxref("AudioBufferSourceNode.playbackRate")}} プロパティを参照してください。

#### HTML

```html
<video
  id="my-video"
  controls
  src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"></video>
```

#### JavaScript

```js
var myVideo = document.getElementById("my-video");
myVideo.playbackRate = 2;
```

```html hidden
<video id="my-video" controls="true" width="480" height="270">
  <source
    src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
var myVideo = document.getElementById('my-video');
myVideo.playbackRate = 2;</textarea
>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function setPlaybackRate() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  setPlaybackRate();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", setPlaybackRate);
window.addEventListener("load", setPlaybackRate);
```

{{ EmbedLiveSample('Playable_code', 700, 425) }}

> **メモ:** [playbackRate のデモ](https://jsbin.com/qomuvefu/2/edit)を試してみてください。

## 音声の加工

`playbackRate` の一方で、音声を加工するためには [Web Audio API](/ja/docs/Web/API/Web_Audio_API) を利用することが一般的です。

### 音源の選択

Web Audio API は、様々なソースから音声を受け取り、それを処理してを受信し、それを処理して音を処理した後に送信する出力機器を表す {{domxref("AudioDestinationNode")}} に送り出すことができます。

| この音声ソースの場合...                                                                                                                                 | この Web Audio ノード型を使用してください node type |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| HTML の {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素の音声トラック                                                                     | {{domxref("MediaElementAudioSourceNode")}}          |
| メモリ内の生の音声データバッファー                                                                                                                      | {{domxref("AudioBufferSourceNode")}}                |
| サイン波やその他の合成波形を生成するオシレーター                                                                                                        | {{domxref("OscillatorNode")}}                       |
| [WebRTC](/ja/docs/Web/API/WebRTC_API) の音声トラック (例えば {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得できるマイク入力) | {{domxref("MediaStreamAudioSourceNode")}}           |

### 音声フィルター

Web Audio API では {{domxref("BiquadFilterNode")}} を利用することで様々なフィルターやエフェクトを利用できます。

#### HTML

```html
<video id="my-video" controls src="myvideo.mp4" type="video/mp4"></video>
```

#### JavaScript

```js
var context = new AudioContext(),
  audioSource = context.createMediaElementSource(
    document.getElementById("my-video"),
  ),
  filter = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

// Configure filter
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;
```

```html hidden
<video
  id="my-video"
  controls="true"
  width="480"
  height="270"
  crossorigin="anonymous">
  <source
    src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;</textarea
>
```

```js hidden
var context = new AudioContext(),
  audioSource = context.createMediaElementSource(
    document.getElementById("my-video"),
  ),
  filter = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function setFilter() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  setFilter();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", setFilter);
window.addEventListener("load", setFilter);
```

{{ EmbedLiveSample('Playable_code_2', 700, 425) }}

> **メモ:** [CORS](/ja/docs/Web/HTTP/Access_control_CORS) が有効になっていない環境では、動画はコードと同じドメイン上になければなりません。これはセキュリティ上の問題を避けるためです。

#### よく使われる音声フィルター

このノードでよく利用されるフィルターは以下の通りです。

- ローパス: 閾値に指定された周波数より低い音は通過させ、高いものは減衰させます。
- ハイパス: 閾値に指定された周波数より高い音は通過させ、低いものは減衰させます。
- バンドパス: 指定された周波数帯の音は通過させ、それ以外は減衰させます。
- ローシェルフ: 周波数に関わらず全ての音を通過させますが、閾値より低いものは増幅 (もしくは減衰) されます
- ハイシェルフ: 周波数に関わらず全ての音を通過させますが、閾値より高いものは増幅 (もしくは減衰) されます
- ピーキング: 周波数に関わらず全ての音を通過させますが、指定された周波数帯のものは増幅 (もしくは減衰) されます
- ノッチ: 指定された周波数帯を除き、全ての音を通過させます
- オールパス: 周波数に関わらず全ての音を通過させますが、幾つかの周波数間の相関係を変更します

> **メモ:** 詳しくは {{domxref("BiquadFilterNode")}} を参照してください。

### たたみ込みとインパルス

{{domxref("ConvolverNode")}} を利用することで、音声に**インパルス応答**を適用することができます。インパルス応答とはハンドクラップのような短い音のインパルスから作成された音のことです。インパルス応答はインパルスが作られた環境 (例えばトンネル内で手を叩くことで発生するエコー) を示します。

#### 例

```js
var convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

適用例としてはこの [Codepen](https://codepen.io/a2sheppy/pen/JjPgVYL) をご覧ください (ただし、とても、とてもくだらないです。小さな子どもが喜ぶくらいでしょう)。

### 空間的な音

**パンナーノード**を使用することで、音源の位置を操作できます。パンナーノード—{{domxref("PannerNode")}}—は、ソースコーンの位置だけでなく、その方向も指定することができます。位置や方向は三次元空間上で指定します。

#### 例

```js
var panner = context.createPanner();
panner.coneOuterGain = 0.2;
panner.coneOuterAngle = 120;
panner.coneInnerAngle = 0;

panner.connect(context.destination);
source.connect(panner);
source.start(0);

// Position the listener at the origin.
context.listener.setPosition(0, 0, 0);
```

> **メモ:** [GitHub リポジトリに例](https://github.com/mdn/webaudio-examples/tree/master/panner-node)があります ([ライブ版](https://mdn.github.io/webaudio-examples/panner-node/)も)。

## JavaScript によるコーデック

JavasCript でより低レベルでの音声操作が可能です。これを利用することで、オーディオコーデックを自作することができます。

以下にフォーマットとそのコーデックのリストを示します。

- AAC: [AAC.js](https://github.com/audiocogs/aac.js)
- ALAC: [alac.js](https://github.com/audiocogs/alac.js)
- FLAC: [flac.js](https://github.com/audiocogs/flac.js)
- MP3: [mp3.js](https://github.com/audiocogs/mp3.js)
- Opus: [Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis: [vorbis.js](https://github.com/audiocogs/vorbis.js)

> **メモ:** AudioCogs で[いくつかのデモ](http://audiocogs.org/codecs/)を試せます。 Audiocogs は JavaScript でのコーデック実装を行うためのフレームワークである [Aurora.js](http://audiocogs.org/codecs/) を提供しています。

## 例

- [様々な Web Audio API (およびその他) の例](https://github.com/mdn/)
- [THREE.js Video Cube example](https://github.com/chrisdavidmills/threejs-video-cube)
- [Convolution Effects in Real-Time](http://chromium.googlecode.com/svn/trunk/samples/audio/convolution-effects.html)

## 関連情報

### チュートリアル

- [キャンバスを使用した動画の加工](/ja/docs/Web/HTML/Manipulating_video_using_canvas)
- [HTML5 playbackRate の解説](/ja/Apps/Build/Manipulating_media/HTML5_playbackRate_explained)
- [Web Audio API の利用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web audio spatialisation の基本](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialisation_basics)
- [動画フレームの WebGL テクスチャとしての利用](/ja/docs/Web/WebGL/Animating_textures_in_WebGL#Using_the_video_frames_as_a_texture) ([THREE.js](http://threejs.org) WebGL ライブラリ (及びその他) と [この効果の実現](http://stemkoski.github.io/Three.js/Video.html))
- [WebGL におけるアニメーションテクスチャ](/ja/docs/Web/WebGL/Animating_textures_in_WebGL)
- [Developing Game Audio with the Web Audio API (Room effects and filters)](http://www.html5rocks.com/en/tutorials/webaudio/games/#toc-room)

### リファレンス

- {{htmlelement("audio")}} および {{htmlelement("video")}} 要素
- {{domxref("HTMLMediaElement")}} API
- {{htmlelement("canvas")}} 要素
- [Web Audio API](/ja/docs/Web/API/Web_Audio_API)
- [AudioContext](/ja/docs/Web/API/AudioContext)
- More info on [Spatial Audio](/ja/docs/Web/API/AudioContext.createPanner)
- [ウェブメディア技術](/ja/docs/Web/Media)

{{QuickLinksWithSubpages("/ja/docs/Web/Apps/Fundamentals/")}}
