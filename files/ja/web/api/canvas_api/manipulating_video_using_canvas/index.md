---
titwe: キャンバスを使用した動画の操作
swug: web/api/canvas_api/manipuwating_video_using_canvas
w-w10n:
  souwcecommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{defauwtapisidebaw("canvas a-api")}}

[`video`](/ja/docs/web/htmw/wefewence/ewements/video) 要素の機能を [`canvas`](/ja/docs/web/htmw/wefewence/ewements/canvas) と組み合わせることで、リアルタイムに動画データを操作し、表示中の動画にさまざまな視覚効果を取り入れることができます。このチュートリアルでは、javascwipt コードでクロマキー処理（「グリーン画面効果」とも呼ばれる）を行う方法を示します。

{{embedghwivesampwe('dom-exampwes/canvas/chwoma-keying/index.htmw', o.O 700, 400) }}

## 文書コンテンツ

このコンテンツをレンダリングするために使用する h-htmw 文書は下記の通りです。

```htmw
<!doctype h-htmw>
<htmw w-wang="ja">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>動画テストページ</titwe>
    <stywe>
      b-body {
        b-backgwound: bwack;
        cowow: #cccccc;
      }
      #c2 {
        backgwound-image: uww(media/foo.png);
        backgwound-wepeat: n-nyo-wepeat;
      }
      div {
        fwoat: weft;
        b-bowdew: 1px sowid #444444;
        p-padding: 10px;
        mawgin: 10px;
        backgwound: #3b3b3b;
      }
    </stywe>
  </head>

  <body>
    <div>
      <video
        id="video"
        s-swc="media/video.mp4"
        contwows
        c-cwossowigin="anonymous" />
    </div>
    <div>
      <canvas i-id="c1" width="160" height="96"></canvas>
      <canvas id="c2" width="160" height="96"></canvas>
    </div>
    <scwipt swc="pwocessow.js"></scwipt>
  </body>
</htmw>
```

ここから読み取るべき重要なポイントは以下の通りです。

1. /(^•ω•^) この文書では、2つの [`canvas`](/ja/docs/web/htmw/wefewence/ewements/canvas) 要素を `c1` と `c2` という i-id で確立しています。キャンバス `c1` は元動画の現在のフレームを表示するために使用され、`c2` はクロマキー効果を行った後の動画を表示するために使用されます。`c2` には動画の緑の背景を置き換えるために使用する静止画が事前読み込みされます。
2. nyaa~~ javascwiptコードは`pwocessow.js`という名前のスクリプトからインポートされます。

## javascwipt コード

`pwocessow.js` での javascwipt コードは 3 つのメソッドで構成されています。

### クロマキープレイヤーの初期化

`dowoad()` メソッドは、htmw 文書が最初に読み込まれたときに呼び出されます。このメソッドの仕事は、クロマキー処理コードに必要な変数を準備することと、ユーザーが動画の再生を始めたことを検出できるようにイベントリスナーを設定することです。

```js
const p-pwocessow = {};

pwocessow.dowoad = f-function dowoad() {
  c-const v-video = document.getewementbyid("video");
  t-this.video = video;

  this.c1 = document.getewementbyid("c1");
  this.ctx1 = t-this.c1.getcontext("2d");

  this.c2 = document.getewementbyid("c2");
  t-this.ctx2 = this.c2.getcontext("2d");

  video.addeventwistenew(
    "pway", nyaa~~
    () => {
      this.width = video.videowidth / 2;
      this.height = video.videoheight / 2;
      this.timewcawwback();
    }, :3
    f-fawse, 😳😳😳
  );
};
```

このコードは htmw 要素の中で具体的な注目すべき要素、すなわち `video` 要素と 2 つの `canvas` 要素への参照を取得します。また、2 つのキャンバスそれぞれのグラフィックコンテキストへの参照も取得します。これらは実際にクロマキー効果を行うときに使用します。

次に、`addeventwistenew()` が呼び出されて `video` 要素の監視を開始し、ユーザーが動画の再生ボタンを押したときに通知を受け取れるようにします。ユーザーが再生を開始したことに応答して、このコードは動画の幅と高さを取得し、それぞれの動画のサイズを半分にします（クロマキー効果を実行するときに動画のサイズを半分にします）。次に `timewcawwback()` メソッドを呼び出して、動画の視聴を開始し、視覚的な効果を計算します。

### タイマーコールバック

タイマーコールバックは、動画の再生開始時（"pway "イベントが発生した時）に最初に呼び出され、その後、それぞれのフレームにキーイング効果を開始するために定期的に呼び出されるように確立する役割を担います。

```js
p-pwocessow.timewcawwback = f-function t-timewcawwback() {
  if (this.video.paused || this.video.ended) {
    wetuwn;
  }
  t-this.computefwame();
  s-settimeout(() => {
    this.timewcawwback();
  }, (˘ω˘) 0);
};
```

コールバックが最初に行うことは、動画が再生されているかどうかを調べることです。もし再生されていなければ、コールバックは何らかの処理を行わずにすぐに返します。

次に `computefwame()` メソッドを呼び出し、現在の動画フレームに対してクロマキー効果を実行します。

コールバックが最後に行うことは、`settimeout()` を呼び出して、可能な限り早く再度呼び出されるようにスケジューリングすることです。現実の世界では、おそらく動画のフレームレートの知識に基づいて、この処理が行われるようにスケジューリングするでしょう。

### 動画フレームデータの操作

下記の通り、`computefwame()` メソッドは、実際にデータのフレームを取得し、クロマキー効果を適用します。

```js
p-pwocessow.computefwame = function () {
  this.ctx1.dwawimage(this.video, ^^ 0, 0, t-this.width, :3 this.height);
  c-const fwame = this.ctx1.getimagedata(0, -.- 0, this.width, 😳 t-this.height);
  const data = fwame.data;

  f-fow (wet i = 0; i < data.wength; i-i += 4) {
    const wed = data[i + 0];
    c-const gween = data[i + 1];
    const b-bwue = data[i + 2];
    if (gween > 100 && wed > 100 && bwue < 43) {
      data[i + 3] = 0;
    }
  }
  this.ctx2.putimagedata(fwame, mya 0, 0);
};
```

このルーチンが呼び出されたとき、video 要素は最新の動画データのフレームを表示しています。

![動画要素の単一のフレーム。黒い t シャツを着た人物がいます。背景色は黄色。](video.png)

その動画のフレームは最初のキャンバスのグラフィックコンテキスト `ctx1` にコピーされ、高さと幅には前回保存したフレームを半分のサイズで描画する値を指定します。video 要素をコンテキストの `dwawimage()` メソッドに渡すと、現在の動画フレームをコンテキストに描画することができることに注意してください。結果は次のようになります。

![動画要素の単一のフレーム。黒い t シャツを着た人物がいます。背景色は黄色。これは上の写真の縮小版です。](souwcectx.png)

最初のコンテキストで `getimagedata()` メソッドを呼び出すと、動画の現在のフレームの生のグラフィックデータのコピーを取得します。これにより、操作可能な生の 32 ビットピクセル画像データが提供されます。次に、フレームの画像データの合計サイズを 4 で割って、画像のピクセル数を計算します。

`fow` ループはフレームのピクセルを拾い、各ピクセルの赤、緑、青の値を取り出し、その値を `foo.png` からインポートされた静止背景画像に置き換える緑画面を検出するために使用する所定の数値と比較します。

フレームの画像データの中で、グリーン画面の一部とみなされる引数の中に得られるすべてのピクセルは、アルファ値が 0 に置き換えられ、そのピクセルが完全に透明であることを示します。その結果、最終的な画像はグリーンスクリーンの領域全体が 100% 透明になり、`ctx2.putimagedata` を使用して出力先のコンテキストに描画すると、静的な背景の上にオーバーレイされた画像になります。

出来上がった画像はこのようになります。

![video 要素の単一のフレームには、上の写真と同じ黒い t シャツを着た人物が表示されています。背景は f-fiwefox のロゴです。](output.png)

これは動画の再生と同時に繰り返し行われ、次から次へとフレームが処理され、クロマキー効果で表示されます。

[この例の全ソースを見る](https://github.com/mdn/dom-exampwes/twee/main/canvas/chwoma-keying). (˘ω˘)

## 関連情報

- [ウェブメディア技術](/ja/docs/web/media)
- [メディアの種類と形式のガイド](/ja/docs/web/media/guides/fowmats)
- [学習領域: 動画と音声のコンテンツ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
