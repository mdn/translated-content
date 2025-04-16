---
title: キャンバスを使用した動画の操作
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{DefaultAPISidebar("Canvas API")}}

[`video`](/ja/docs/Web/HTML/Reference/Elements/video) 要素の機能を [`canvas`](/ja/docs/Web/HTML/Reference/Elements/canvas) と組み合わせることで、リアルタイムに動画データを操作し、表示中の動画にさまざまな視覚効果を取り入れることができます。このチュートリアルでは、JavaScript コードでクロマキー処理（「グリーン画面効果」とも呼ばれる）を行う方法を示します。

{{EmbedGHLiveSample('dom-examples/canvas/chroma-keying/index.html', 700, 400) }}

## 文書コンテンツ

このコンテンツをレンダリングするために使用する HTML 文書は下記の通りです。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>動画テストページ</title>
    <style>
      body {
        background: black;
        color: #cccccc;
      }
      #c2 {
        background-image: url(media/foo.png);
        background-repeat: no-repeat;
      }
      div {
        float: left;
        border: 1px solid #444444;
        padding: 10px;
        margin: 10px;
        background: #3b3b3b;
      }
    </style>
  </head>

  <body>
    <div>
      <video
        id="video"
        src="media/video.mp4"
        controls
        crossorigin="anonymous" />
    </div>
    <div>
      <canvas id="c1" width="160" height="96"></canvas>
      <canvas id="c2" width="160" height="96"></canvas>
    </div>
    <script src="processor.js"></script>
  </body>
</html>
```

ここから読み取るべき重要なポイントは以下の通りです。

1. この文書では、2つの [`canvas`](/ja/docs/Web/HTML/Reference/Elements/canvas) 要素を `c1` と `c2` という ID で確立しています。キャンバス `c1` は元動画の現在のフレームを表示するために使用され、`c2` はクロマキー効果を行った後の動画を表示するために使用されます。`c2` には動画の緑の背景を置き換えるために使用する静止画が事前読み込みされます。
2. JavaScriptコードは`processor.js`という名前のスクリプトからインポートされます。

## JavaScript コード

`processor.js` での JavaScript コードは 3 つのメソッドで構成されています。

### クロマキープレイヤーの初期化

`doLoad()` メソッドは、HTML 文書が最初に読み込まれたときに呼び出されます。このメソッドの仕事は、クロマキー処理コードに必要な変数を準備することと、ユーザーが動画の再生を始めたことを検出できるようにイベントリスナーを設定することです。

```js
const processor = {};

processor.doLoad = function doLoad() {
  const video = document.getElementById("video");
  this.video = video;

  this.c1 = document.getElementById("c1");
  this.ctx1 = this.c1.getContext("2d");

  this.c2 = document.getElementById("c2");
  this.ctx2 = this.c2.getContext("2d");

  video.addEventListener(
    "play",
    () => {
      this.width = video.videoWidth / 2;
      this.height = video.videoHeight / 2;
      this.timerCallback();
    },
    false,
  );
};
```

このコードは HTML 要素の中で具体的な注目すべき要素、すなわち `video` 要素と 2 つの `canvas` 要素への参照を取得します。また、2 つのキャンバスそれぞれのグラフィックコンテキストへの参照も取得します。これらは実際にクロマキー効果を行うときに使用します。

次に、`addEventListener()` が呼び出されて `video` 要素の監視を開始し、ユーザーが動画の再生ボタンを押したときに通知を受け取れるようにします。ユーザーが再生を開始したことに応答して、このコードは動画の幅と高さを取得し、それぞれの動画のサイズを半分にします（クロマキー効果を実行するときに動画のサイズを半分にします）。次に `timerCallback()` メソッドを呼び出して、動画の視聴を開始し、視覚的な効果を計算します。

### タイマーコールバック

タイマーコールバックは、動画の再生開始時（"play "イベントが発生した時）に最初に呼び出され、その後、それぞれのフレームにキーイング効果を開始するために定期的に呼び出されるように確立する役割を担います。

```js
processor.timerCallback = function timerCallback() {
  if (this.video.paused || this.video.ended) {
    return;
  }
  this.computeFrame();
  setTimeout(() => {
    this.timerCallback();
  }, 0);
};
```

コールバックが最初に行うことは、動画が再生されているかどうかを調べることです。もし再生されていなければ、コールバックは何らかの処理を行わずにすぐに返します。

次に `computeFrame()` メソッドを呼び出し、現在の動画フレームに対してクロマキー効果を実行します。

コールバックが最後に行うことは、`setTimeout()` を呼び出して、可能な限り早く再度呼び出されるようにスケジューリングすることです。現実の世界では、おそらく動画のフレームレートの知識に基づいて、この処理が行われるようにスケジューリングするでしょう。

### 動画フレームデータの操作

下記の通り、`computeFrame()` メソッドは、実際にデータのフレームを取得し、クロマキー効果を適用します。

```js
processor.computeFrame = function () {
  this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
  const frame = this.ctx1.getImageData(0, 0, this.width, this.height);
  const data = frame.data;

  for (let i = 0; i < data.length; i += 4) {
    const red = data[i + 0];
    const green = data[i + 1];
    const blue = data[i + 2];
    if (green > 100 && red > 100 && blue < 43) {
      data[i + 3] = 0;
    }
  }
  this.ctx2.putImageData(frame, 0, 0);
};
```

このルーチンが呼び出されたとき、video 要素は最新の動画データのフレームを表示しています。

![動画要素の単一のフレーム。黒い T シャツを着た人物がいます。背景色は黄色。](video.png)

その動画のフレームは最初のキャンバスのグラフィックコンテキスト `ctx1` にコピーされ、高さと幅には前回保存したフレームを半分のサイズで描画する値を指定します。video 要素をコンテキストの `drawImage()` メソッドに渡すと、現在の動画フレームをコンテキストに描画することができることに注意してください。結果は次のようになります。

![動画要素の単一のフレーム。黒い T シャツを着た人物がいます。背景色は黄色。これは上の写真の縮小版です。](sourcectx.png)

最初のコンテキストで `getImageData()` メソッドを呼び出すと、動画の現在のフレームの生のグラフィックデータのコピーを取得します。これにより、操作可能な生の 32 ビットピクセル画像データが提供されます。次に、フレームの画像データの合計サイズを 4 で割って、画像のピクセル数を計算します。

`for` ループはフレームのピクセルを拾い、各ピクセルの赤、緑、青の値を取り出し、その値を `foo.png` からインポートされた静止背景画像に置き換える緑画面を検出するために使用する所定の数値と比較します。

フレームの画像データの中で、グリーン画面の一部とみなされる引数の中に得られるすべてのピクセルは、アルファ値が 0 に置き換えられ、そのピクセルが完全に透明であることを示します。その結果、最終的な画像はグリーンスクリーンの領域全体が 100% 透明になり、`ctx2.putImageData` を使用して出力先のコンテキストに描画すると、静的な背景の上にオーバーレイされた画像になります。

出来上がった画像はこのようになります。

![video 要素の単一のフレームには、上の写真と同じ黒い T シャツを着た人物が表示されています。背景は Firefox のロゴです。](output.png)

これは動画の再生と同時に繰り返し行われ、次から次へとフレームが処理され、クロマキー効果で表示されます。

[この例の全ソースを見る](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying).

## 関連情報

- [ウェブメディア技術](/ja/docs/Web/Media)
- [メディアの種類と形式のガイド](/ja/docs/Web/Media/Guides/Formats)
- [学習領域: 動画と音声のコンテンツ](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
