---
title: 画像の使用
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

これまで、[図形](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)を作成して[スタイルを適用する](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)方法を見てきました。 {{HTMLElement("canvas")}} のより面白い機能のひとつが、画像を扱えることです。これは動的な画像合成を行う、グラフの背景として使用する、ゲームのスプライトとして使用するなどといったことが可能です。 PNG、GIF、JPEG といった、ブラウザーが対応しているどの形式でも外部画像が使用できます。同じページ上の別のキャンバス要素によって生成された画像も、ソースとして使用できます。

基本的には 2 段階の手続きによって、画像をキャンバスにインポートします。

1. {{domxref("HTMLImageElement")}} オブジェクトまたは別の canvas 要素への参照を、ソースとして取得します。URL を与えることでも、画像を使用できます。
2. `drawImage()` 関数を使用して、画像をキャンバスに描きます。

これを行う方法を見ていきましょう。

## 描く画像の取得

キャンバス API は、以下のデータ形式を画像ソースとして使用できます。

- {{domxref("HTMLImageElement")}}
  - : {{HTMLElement("img")}} 要素だけでなく、 `Image()` コンストラクターを使用して作成した画像も含みます。
- {{domxref("SVGImageElement")}}
  - : {{SVGElement("image")}} 要素を使用して埋め込まれた画像です。
- {{domxref("HTMLVideoElement")}}
  - : HTML の {{HTMLElement("video")}} 要素を画像ソースとして使用すると、現在のフレームを動画から取得して、画像として使用します。
- {{domxref("HTMLCanvasElement")}}
  - : 別の {{HTMLElement("canvas")}} 要素を画像ソースとして使用できます。
- {{domxref("ImageBitmap")}}
  - : ビットマップ画像。この型は、大きな画像から画像の一部（スプライト）を抽出するために使用します。
- {{domxref("OffscreenCanvas")}}
  - : 特殊な種類の `<canvas>` で、表示されず、表示なしで準備をするものです。このような画像ソースを用いることで、コンテンツの合成をユーザーに見せることなく切り替えることができます。
- {{domxref("VideoFrame")}}
  - : 動画の単一のフレームを表す画像。

キャンバスで使用する画像を取得する方法がいくつかあります。

### 同一ページ上の画像の使用

キャンバスと同じページにある画像への参照は、次のいずれかを使って取得することができます。

- {{domxref("document.images")}} コレクション
- {{domxref("document.getElementsByTagName()")}} メソッド
- 使用したい特定の画像の ID がわかる場合は、特定の画像を取得するために {{domxref("document.getElementById()")}} を使用できます。

多数の画像を使用する場合や、[リソースの遅延読み込み](/ja/docs/Web/Performance/Guides/Lazy_loading)を行う場合は、通常、すべてのファイルが利用できるまで待ってから、キャンバスに描画する必要があります。
下記の実例では、async 関数と [`Promise.all`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) を使用して複数の画像を処理し、すべての画像が読み込まれたのを待ってから `drawImage()` を呼び出しています。

```js
async function draw() {
  // すべての画像が読み込まれるまで待つ
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  const ctx = document.getElementById("canvas").getContext("2d");
  // call drawImage() as usual
}
draw();
```

### 最初から画像を作成

もうひとつの方法は、スクリプト内で新たな {{domxref("HTMLImageElement")}} オブジェクトを作成することです。そのために、便利な `Image()` コンストラクターを使用することができます。

```js
const img = new Image(); // 新たな img 要素を作成
img.src = "myImage.png"; // ソースのパスを設定
```

このスクリプトを実行すると、画像の読み込みが始まりますが、画像の読み込みが完了する前に `drawImage()` を呼び出してみても、何も行いません。
古いブラウザーでは例外が発生するかもしれませんので、画像が利用できるようになる前にキャンバスに画像を描画しないようにするために、[load イベント](/ja/docs/Web/API/HTMLElement/load_event)を使用する必要があります。

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

マークアップに `<img>` 要素を持つ場合や、JavaScript でプログラムで作成する場合でも、外部画像には [CORS](/ja/docs/Web/HTTP/Guides/CORS) の制限があることがあります。デフォルトで、外部から取得された画像は[キャンバスを汚染](/ja/docs/Web/HTML/How_to/CORS_enabled_image#セキュリティと汚染されたキャンバス)し、サイトがオリジンを越えてデータを読み取ることを妨げます。{{HTMLElement("img")}} 要素の [`crossorigin`](/ja/docs/Web/HTML/Reference/Elements/img#crossorigin) 属性（{{domxref("HTMLImageElement.crossOrigin")}} プロパティに反映されます）を使用すると、CORS を使用して別のドメインから画像を読み込む権限をリクエストできます。ホストドメインが画像へのドメイン間アクセスを許可している場合、キャンバスを汚染することなく、その画像を使用することができます。

### data: URL で画像を埋め込む

画像を埋め込む別の方法が、[data: URL](/ja/docs/Web/URI/Reference/Schemes/data) です。データ URL によって、画像を Base64 でエンコードした文字列として、コード内で完全に定義できます。

```js
const img = new Image(); // 新たな img 要素を作成
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

data URL の利点のひとつが、別にサーバーとの通信を行うことなく即座に結果の画像を使用できることです。ほかに潜在的な利点として [CSS](/ja/docs/Web/CSS)、[JavaScript](/ja/docs/Web/JavaScript)、[HTML](/ja/docs/Web/HTML)、画像をひとつのファイルにカプセル化することもでき、ほかの場所へ持ち運びやすくなります。

この方法の欠点は画像がキャッシュされないことと、大きな画像をエンコードした URL がとても長くなることです。

### ほかの canvas 要素の使用

通常の画像と同様に、{{domxref("document.getElementsByTagName()")}} または {{domxref("document.getElementById()")}} メソッドを使用してほかの canvas 要素にアクセスできます。対象のキャンバスを使用する前に、そのキャンバスで描画を終えるようにしてください。

より実用的な使い方としては、 2 つ目の canvas 要素を、他の大きなキャンバスのサムネイル表示として使用することでしょう。

### 動画のフレームの使用

{{HTMLElement("video")}} 要素が提供する動画のフレームも（動画が非表示であっても）使用できます。例えば ID が "myVideo" である {{HTMLElement("video")}} 要素があるとき、以下のようなことができます。

```js
const video = document.getElementById("myVideo");
video.currentTime = 10; // 動画の 10 秒時点へシーク
video.pause(); // フレームを凍結するために動画を一時停止
```

これで、{{domxref("HTMLVideoElement")}} は 10 秒の時点に到達しており、現在のフレームがキャンバスに描画されます。`drawImage()` を呼び出す際にフレームが確実に利用できるようにするには、`drawImage()` を [`requestVideoFrameCallback()`](/ja/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback#drawing_video_frames_on_a_canvas) 内で呼び出してください。

## 画像の描画

ソース画像オブジェクトへの参照を取得したら、 `drawImage()` メソッドを使用して画像をキャンバスに描画できます。後ほど見るように、 `drawImage()` メソッドをオーバーロードした派生形がいくつかあります。もっとも基本的な形式は以下のようなものです。

- {{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, x, y)")}}
  - : 引数 `image` で指定した画像を、座標 (`x`, `y`) に描画します。

> [!NOTE]
> SVG 画像は、ルート \<svg> 要素で幅と高さを指定しなければなりません。

### 例: 小さな折れ線グラフ

以下の例は、小さな折れ線グラフの背景として外部の画像を使用しています。背景画像を使用すると背景を生成するコードが不要になりますので、スクリプトをかなり小さくすることができます。この例では画像を 1 つしか使用しませんので、描画する文を実行するために画像オブジェクトの `load` イベントハンドラーを使用しています。`drawImage()` メソッドは背景画像を座標 (0, 0) に配置します。これはキャンバスの左上の隅です。

```html hidden
<canvas id="my-canvas" width="180" height="150"></canvas>
```

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
  img.src = "backdrop.png";
}

draw();
```

結果のグラフは。次のようになります。

{{EmbedLiveSample("Example_A_simple_line_graph", "", "160")}}

## 拡大縮小

`drawImage()` メソッドの第 2 の形式は引数が 2 つ追加されており、キャンバスに拡大・縮小した画像を配置することができます。

- {{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, x, y, width, height)")}}
  - : これは引数 `width` および `height` を追加しており、画像をキャンバスに描画する際のサイズを示します。

### 例: 画像をタイル配置

以下の例は画像を壁紙として使用して、キャンバス上で数回繰り返して貼り付けています。ループ処理によって、さまざまな場所に縮小した画像を貼り付けました。以下のコードでは、最初の `for` ループで行の繰り返し処理を行います。2 番目の `for` ループで列の繰り返し処理を行います。画像は元のサイズの 3 分の 1 である、 50x38 ピクセルに縮小しています。

> [!NOTE]
> 画像を拡大しすぎると不鮮明に、あるいは縮小しすぎると荒くなります。読みやすくしておかなければならない文字列が画像内にある場合は、サイズを変更しないほうがよいでしょう。

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  const img = new Image();
  img.onload = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.drawImage(img, j * 50, i * 38, 50, 38);
      }
    }
  };
  img.src = "https://mdn.github.io/shared-assets/images/examples/rhino.jpg";
}

draw();
```

キャンバスの結果は次のようになります。

{{EmbedLiveSample("Example_Tiling_an_image", "", "160")}}

## 切り抜き

`drawImage()` メソッドの第 3 かつ最後の形式は、画像ソースについて 8 個の引数が追加されています。これはソース画像の一部を切り抜いて、サイズ変更およびキャンバスへの描画を行います。

- {{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)")}}
  - : この関数は、`image` から左上の隅が (`sx`, `sy`)、幅と高さが `sWidth` および `sHeight` である矩形で指定されるソース画像の領域を取得して、キャンバスの (`dx`, `dy`) で示した位置に配置して、`dWidth` および `dHeight` で指定したサイズに、{{glossary("aspect ratio", "アスペクト比")}}を維持したまま拡大縮小します。

何を行っているかを正しく理解するために、この画像を見ると役に立つかもしれません。

![矩形のソース画像の左上座標は sx と sy で、幅と高さはそれぞれ sWidth と sHeight です。ソース画像は出力先キャンバスに対応させ、左上隅の座標を dx と dy、幅と高さをそれぞれ dWidth と dHeight とします。](canvas_drawimage.jpg)

始めの 4 つの引数は、ソース画像を切り抜く場所とサイズを定義します。最後の 4 つの引数は、描画先キャンバスで画像を描画する矩形を定義します。

切り抜きは、画像を合成する際に役に立つでしょう。ひとつの画像ファイルにすべての要素を置いておき、このメソッドを使用して完成形の描画結果に合成します。例えばグラフを作成したいときに、すべての必要なテキストをひとつのファイルに収めた PNG 画像を用意して、データに応じてグラフの目盛りをとても簡単に変更できるでしょう。ほかの利点として、すべての画像を個別に読み込む必要がありませんので、読み込みパフォーマンスが向上するでしょう。

### 例: 画像をフレームに収める

以下の例では前の例と同じサイの画像を使用していますが、頭の部分を切り抜いて額縁の中に合成しています。額縁の画像は、ドロップシャドウを含む 24 ビット PNG 画像です。GIF や 8 ビット PNG 画像と異なり、24 ビット PNG 画像は 8 ビットのアルファチャンネルが含まれていますので、マットカラーに悩まされることなく背景に重ねることができます。

```html
<canvas id="canvas" width="150" height="150"></canvas>
<div class="hidden">
  <img
    id="source"
    src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg"
    width="300"
    height="227" />
  <img id="frame" src="canvas_picture_frame.png" width="132" height="150" />
</div>
```

```css hidden
.hidden {
  display: none;
}
```

```js
async function draw() {
  // すべての画像が読み込まれるまで待つ
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // スライス画像を描く
  ctx.drawImage(
    document.getElementById("source"),
    33,
    71,
    104,
    124,
    21,
    20,
    87,
    104,
  );

  // フレームを描く
  ctx.drawImage(document.getElementById("frame"), 0, 0);
}

draw();
```

この例では、画像の読み込みに別の方法を使用しています。新しい {{domxref("HTMLImageElement")}} オブジェクトを作成して画像を読み込む代わりに、画像を HTML ソース内の {{HTMLElement("img")}} タグとして含めておき、そこから画像を取り込んでいます。これらの画像については、CSS プロパティ {{cssxref("display")}} を `none` に設定することで、ページ上で非表示にしています。

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

それぞれの {{HTMLElement("img")}} には ID 属性が割り当てられているため、`source` 用と `frame` 用にそれぞれ 1 つずつあり、{{domxref("document.getElementById()")}} を使用して簡単に選択できます。
[Promise.all](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) を使用して、すべての画像が読み込まれたのを待ってから `drawImage()` を呼び出しています。
`drawImage()` は、まず最初の画像からサイを切り出し、それをキャンバス上に変倍して描画します。
最後に、2  つ目の `drawImage()` の呼び出しを使用して、フレームを描画します。

## アートギャラリーの例

この章の最後の例では、小さなアートギャラリーを作ります。いくつかの画像を持つテーブルで、ギャラリーを構成します。ページを読み込むとそれぞれの画像のために {{HTMLElement("canvas")}} 要素を挿入して、そこに画像と額縁を描画します。

この場合、すべてのイメージの幅と高さは固定で、その周りに描かれるフレームも固定です。このスクリプトを改良して、画像の幅と高さを利用して、額縁が画像の周りにぴったりと収まるようにすることができます。

下記コードでは、[Promise.all](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) を使用して、すべての画像の読み込みが完了するのを待ってから、キャンバスに画像が描画されるのを待っています。
{{domxref("document.images")}} コンテナーをループ処理し、それぞれの要素に対して新しいキャンバス要素を追加します。それ以外にも注目すべき点は、{{domxref("Node.insertBefore")}} メソッドの使用です。`insertBefore()` は、ある要素 (image) の前に新たな要素 (canvas 要素) を挿入したいときに使用する、親ノード (テーブルのセル) のメソッドです。

```html
<table>
  <tbody>
    <tr>
      <td><img src="gallery_1.jpg" /></td>
      <td><img src="gallery_2.jpg" /></td>
      <td><img src="gallery_3.jpg" /></td>
      <td><img src="gallery_4.jpg" /></td>
    </tr>
    <tr>
      <td><img src="gallery_5.jpg" /></td>
      <td><img src="gallery_6.jpg" /></td>
      <td><img src="gallery_7.jpg" /></td>
      <td><img src="gallery_8.jpg" /></td>
    </tr>
  </tbody>
</table>
<img id="frame" src="canvas_picture_frame.png" width="132" height="150" />
```

こちらが、見栄えをよくするための CSS です。

```css
body {
  background: 0 -100px repeat-x url("bg_gallery.png") #4f191a;
  margin: 10px;
}

img {
  display: none;
}

table {
  margin: 0 auto;
}

td {
  padding: 15px;
}
```

額縁付き画像を描く JavaScript が、すべてを結びつけます。

```js
async function draw() {
  // すべての画像が読み込まれるのを待つ。
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  // すべての画像に対するループ処理
  for (const image of document.images) {
    // 額縁の画像用の canvas は追加しない
    if (image.getAttribute("id") !== "frame") {
      // canvas 要素を作成
      const canvas = document.createElement("canvas");
      canvas.setAttribute("width", 132);
      canvas.setAttribute("height", 150);

      // 画像の前に挿入
      image.parentNode.insertBefore(canvas, image);

      ctx = canvas.getContext("2d");

      // キャンバスに画像を描く
      ctx.drawImage(image, 15, 20);

      // 額縁を追加
      ctx.drawImage(document.getElementById("frame"), 0, 0);
    }
  }
}

draw();
```

{{EmbedLiveSample("Art_gallery_example", 725, 400)}}

## 画像のサイズ変更の動作の制御

先に述べたとおり、サイズを変更した画像は変更処理の影響で、不鮮明またはブロック状のアーティファクトが発生します。描画コンテキスト内で画像のサイズを変更する際に使用する画像スムージングアルゴリズムを制御するために、描画コンテキストの {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} プロパティを使用できます。既定ではこれが `true` であり、画像のサイズを変更する際にスムージングを行います。

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
