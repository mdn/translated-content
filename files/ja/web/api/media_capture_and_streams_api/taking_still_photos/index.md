---
title: getUserMedia() による写真の撮影
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{DefaultAPISidebar("Media Capture and Streams")}}

この記事では、[`navigator.mediaDevices.getUserMedia()`](/ja/docs/Web/API/MediaDevices/getUserMedia) を使用して、 `getUserMedia()` に対応しているコンピューターや携帯電話のカメラにアクセスして写真を撮影する方法について示しています。

![getUserMedia ベースの画像キャプチャアプリ - 左側にはウェブカメラから撮影した動画ストリームと写真撮影ボタン、右側には写真撮影による静止画出力がある](web-rtc-demo.png)

お望みならば[デモ](#デモ)に直接ジャンプすることもできます。

## HTML のマークアップ

[HTML のインターフェイス](#html) には、ストリーム・キャプチャパネルとプレゼンテーションパネルの 2 つの主要な操作セクションがあります。
これらはそれぞれ自分自身で {{HTMLElement("div")}} の中に横に並んで表示され、スタイル設定や制御が容易にできるようになっています。
{{HTMLElement("button")}} 要素 (`permissions-button`) があり、後で JavaScript で使用して、`getUserMedia()` を通じて端末ごとにカメラの権限を許可または拒否できるようにします。

左側のボックスには 2 つの構成要素があります。 {{HTMLElement("video")}} 要素は `navigator.mediaDevices.getUserMedia()` からストリームを受け取り、 {{HTMLElement("button")}} は映像のキャプチャを開始するためのものです。
これは直感的ですが、JavaScript コードを見ていくうちに、全体がどうつながっているかが分かってくるでしょう。

```css hidden live-sample___photo-capture live-sample___photo-capture-with-filters
body {
  font:
    1rem "Lucida Grande",
    "Arial",
    sans-serif;
  padding: 0.8rem;
}

button {
  display: block;
  margin-block: 1rem;
}

#start-button {
  position: relative;
  margin: auto;
  bottom: 32px;
  background-color: rgb(0 150 0 / 50%);
  border: 1px solid rgb(255 255 255 / 70%);
  box-shadow: 0px 0px 1px 2px rgb(0 0 0 / 20%);
  font-size: 14px;
  color: white;
}

#video,
#photo {
  border: 1px solid black;
  box-shadow: 2px 2px 3px black;
  width: 100%;
  height: auto;
}

#canvas {
  display: none;
}

.camera,
.output {
  display: inline-block;
  width: 49%;
  height: auto;
}

.output {
  vertical-align: top;
}

code {
  background-color: lightgrey;
}
```

```html-nolint hidden live-sample___photo-capture live-sample___photo-capture-with-filters
<h1>写真のキャプチャデモ</h1>
<p>
  この例では、<code>navigator.mediaDevices.getUserMedia()</code> を使用して、ウェブカメラやその他の映像機器からメディアストリームを設定し、そのストリームから画像を取得して、その画像から PNG を作成する方法を示します。
</p>
<button id="permissions-button">カメラの使用を許可</button>
```

```html-nolint hidden live-sample___photo-capture-with-filters
<p>
  &#9432; この例では、以前と同じコードを使用しますが、今回は CSS の <code>filter: grayscale(100%)</code> 宣言を使用して、<code>&lt;video&gt;</code> 要素にフィルター効果を追加します。その後、video 要素に CSS の <code>filter</code> が適用されているかどうかを調べることができ、キャンバスに描画する際に同じフィルターを使用します。
</p>
```

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<div class="camera">
  <video id="video">映像ストリームが利用できません。</video>
  <button id="start-button">写真をキャプチャ</button>
</div>
```

次に、 {{HTMLElement("canvas")}} 要素があります。この要素にキャプチャしたフレームを格納し、何らかの方法で操作した後、出力画像ファイルに変換する可能性があります。
このキャンバスは、{{cssxref("display", "display: none")}} でスタイル設定することで非表示にし、画面が煩雑にならないようにしています（ユーザーはこの中間段階を見る必要がないため）。

また、画像を描画するための {{HTMLElement("img")}} 要素も保有しており、これがユーザーに見せる最終的な表示となります。

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<canvas id="canvas"></canvas>
<div class="output">
  <img
    id="photo"
    src=""
    alt="スクリーンキャプチャ結果はこのボックスに表示されます。" />
</div>
```

## JavaScript コード

それでは、JavaScript コードを見ていきましょう。説明しやすくするために、いくつか小さなブロックに分けていきます。

### 初期化

まず、これから使用するさまざまな変数を設定します。

```js live-sample___photo-capture live-sample___photo-capture-with-filters
const width = 320; // 写真の幅をこのサイズに変倍する
let height = 0; // これは入力ストリームに基づいて計算される

let streaming = false;

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const startButton = document.getElementById("start-button");
const allowButton = document.getElementById("permissions-button");
```

変数は次の通りです。

- `width`
  - : 入力される映像のサイズが何であれ、出来上がった画像を幅 320 ピクセルになるように拡大縮小します。
- `height`
  - : 画像の出力高さは，ストリームの `width` と{{glossary("aspect ratio", "アスペクト比")}}が指定された場合に計算されます．
- `streaming`
  - : 現在、アクティブな動画ストリームが実行されているか否かを示します。
- `video`
  - : {{HTMLElement("video")}} 要素への参照です。
- `canvas`
  - : {{HTMLElement("canvas")}} 要素への参照です。
- `photo`
  - : {{HTMLElement("img")}} 要素への参照です。
- `startButton`
  - : キャプチャを起動するために使用される {{HTMLElement("button")}} 要素への参照です。
- `allowButton`
  - : ページが端末にアクセスできるかどうかを制御するために使用される {{HTMLElement("button")}} 要素への参照です。

#### メディアストリームの取得

次の仕事は、メディアストリームを取得することです。ユーザーが「カメラの使用を許可」ボタンをクリックした際に、{{domxref("MediaDevices.getUserMedia()")}} を呼び出し、音声なしのビデオストリームをリクエストするイベントリスナーを定義します。
これによりプロミスが返されるため、成功時および失敗時のコールバックを設定します。

```js live-sample___photo-capture live-sample___photo-capture-with-filters
allowButton.addEventListener("click", () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error(`エラーが発生: ${err}`);
    });
});
```

成功時のコールバックには、入力として `stream` オブジェクトが渡されます。これは、{{HTMLElement("video")}} 要素のソースとして設定されます。
ストリームが `<video>` 要素に関連付けられると、[`HTMLMediaElement.play()`](/ja/docs/Web/API/HTMLMediaElement/play_event) を呼び出して再生を開始します。

エラーコールバックは、ストリームを開くことがうまくいかない場合に呼び出されます。
これは例えば、互換性のあるカメラが接続されていない場合や、ユーザーがアクセスを拒否した場合などに起こります。

#### 映像の再生が始まるのを待ち受けする

[`HTMLMediaElement.play()`](/ja/docs/Web/API/HTMLMediaElement/play_event) を {{HTMLElement("video")}} に対して呼び出した後、映像のストリームが流れ始めるまでに（期待する短い時間ですが）経過する時刻があります。そうなるまでブロックされることを避けるために、 `video` に {{domxref("HTMLMediaElement/canplay_event", "canplay")}} イベント用のイベントリスナーを追加し、映像の再生が実際に始まると配信されるようにします。この点で、 `video` オブジェクトのすべてのプロパティは、ストリームの形式に基づいて設定されています。

```js live-sample___photo-capture live-sample___photo-capture-with-filters
video.addEventListener("canplay", (ev) => {
  if (!streaming) {
    height = video.videoHeight / (video.videoWidth / width);

    video.setAttribute("width", width);
    video.setAttribute("height", height);
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    streaming = true;
  }
});
```

このコールバックは、初めて呼び出されたとき以外は何もしません。このテストでは、変数 `streaming` の値を確認し、このメソッドが最初に実行されたときは `false` になっていることを確認します。

このメソッドが最初に実行された場合は、動画の実際のサイズである `video.videoWidth` とレンダリングする幅である `width` のサイズ差に基づいて、動画の高さを設定します。

最後に、動画とキャンバスの両方の `width` と `height` を、それぞれの要素の 2 つのプロパティのそれぞれに対して {{domxref("Element.setAttribute()")}} を呼び出して、適切な幅と高さを設定することによって、互いに一致するように設定します。最後に、誤ってこの設定コードを再度実行しないように、変数 `streaming` に `true` を設定しています。

#### ボタンのクリックを処理する

ユーザーが `startButton` をクリックするたびに静止画を撮影するには、ボタンにイベントリスナーを追加して、 {{domxref("Element/click_event", "click")}} イベントが発行されたときに呼び出されるようにする必要があります。

```js live-sample___photo-capture live-sample___photo-capture-with-filters
startButton.addEventListener("click", (ev) => {
  takePicture();
  ev.preventDefault();
});
```

このメソッドは直感的で、下記の[ストリームからのフレームのキャプチャ](#capturing_a_frame_from_the_stream) で定義されている `takePicture()` 関数を呼び出した後、受け取ったイベントで {{domxref("Event.preventDefault()")}} を呼び、クリック処理が複数回行われないようにしています。

### 写真ボックスのクリア

写真ボックスをクリアするには、画像を作成し、それを {{HTMLElement("img")}} 要素で使用可能な形式に変換して、最も最近撮影したフレームを表示する必要があります。そのコードは次のようになります。

```js live-sample___photo-capture live-sample___photo-capture-with-filters
function clearPhoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#aaaaaa";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}

clearPhoto();
```

まず、オフスクリーンレンダリングに使用する非表示の {{HTMLElement("canvas")}} 要素への参照を取得することから始めます。次に、`fillStyle` を `#aaaaaa` (かなり明るい灰色) に設定し、{{domxref("CanvasRenderingContext2D.fillRect()","fillRect()")}} を呼び出してキャンバス全体をその色で塗りつぶします。

最後に、キャンバスを PNG 画像に変換して {{domxref("Element.setAttribute", "photo.setAttribute()")}} を呼び出し、キャプチャした静止画を表示させています。

### ストリームからのフレームのキャプチャ

定義する最後の関数があり、この点がこの演習のポイントです。 `takePicture()` 関数は、現在表示されている動画フレームをキャプチャし、 PNG ファイルに変換して、キャプチャしたフレーム枠に表示するのがその仕事です。コードは次のようになります。

```js live-sample___photo-capture
function takePicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  } else {
    clearPhoto();
  }
}
```

キャンバスのコンテンツを操作する必要があるときはいつでもそうですが、まず非表示のキャンバスの [2D 描画コンテキスト](/ja/docs/Web/API/CanvasRenderingContext2D)を取得することから始めます。

次に、幅と高さがどちらも 0 でない場合（少なくとも有効な画像データがある可能性があるということ）、キャンバスの幅と高さをキャプチャしたフレームの幅と高さに一致するように設定し、 {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}} を呼び出して動画の現在のフレームをコンテキストに描き、全体の画像をキャンバスで塗りつぶすようにします。

> [!NOTE]
> このインターフェイスは、`HTMLImageElement` を引数として受け入れる任意の API からは {{domxref("HTMLVideoElement")}} が {{domxref("HTMLImageElement")}} のように見えることを利用しており、動画の現在のフレームが画像のコンテンツとして表示されるように工夫されています。

キャンバスにはキャプチャした画像が格納されたら、{{domxref("HTMLCanvasElement.toDataURL()")}} を呼び出して PNG 形式に変換し、最後に {{domxref("Element.setAttribute", "photo.setAttribute()")}} を呼び出してキャプチャした静止画ボックスにその画像を表示させます。

利用できる有効な画像がない場合（つまり、`width` と `height` がどちらも 0 の場合）は、`clearPhoto()` を呼び出して、キャプチャしたフレームボックスのコンテンツを消去します。

## デモ

「カメラの使用を許可」をクリックして入力機器を指定し、このページがカメラにアクセスすることができるようにしてください。
動画が開始したら、「写真をキャプチャ」をクリックすると、ストリームの静止画を右側のキャンバスに描画された画像として保存することができます。

{{EmbedLiveSample('photo-capture', '', '500', , , , 'camera', 'allow-popups')}}

## フィルターで楽しむ

{{HTMLElement("video")}} 要素からフレームを取得することによって、ユーザーのウェブカメラから画像をキャプチャしているので、映像にフィルターや楽しい効果をとても簡単に適用することができます。結局のところ、 {{cssxref("filter")}} プロパティを使用して要素に適用した CSS フィルターは、キャプチャした写真に影響を与えます。これらのフィルターは、単純なもの（画像を白黒にする）から極端なもの（ガウスぼかしや色相回転）までの範囲があります。

```css live-sample___photo-capture-with-filters
#video {
  filter: grayscale(100%);
}
```

写真に動画フィルターを適用するには、`takePicture()`関数に以下の変更を加える必要があります。

```js live-sample___photo-capture-with-filters
function takePicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;

    // この video 要素から CSS フィルターの計算値を取得
    // この例では、"grayscale(100%)" などが返される可能性がある
    const videoStyles = window.getComputedStyle(video);
    const filterValue = videoStyles.getPropertyValue("filter");

    // このフィルターをキャンバスの描画コンテキストに適用する
    // フィルターがない場合（"none" が返された場合）、デフォルトで "none" とする
    context.filter = filterValue !== "none" ? filterValue : "none";

    context.drawImage(video, 0, 0, width, height);

    const dataUrl = canvas.toDataURL("image/png");
    photo.setAttribute("src", dataUrl);
  } else {
    clearPhoto();
  }
}
```

{{EmbedLiveSample('photo-capture-with-filters', , '600', , , , 'camera', 'allow-popups')}}

この効果は例えば、 Firefox の開発者ツールの[スタイルエディター](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html)で再生することができます。やり方の詳細は [CSS フィルターの編集](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html)を参照してください。

## 特定の機器の使用

必要に応じて、許可される動画ソースのセットを特定の機器または一連の機器に制限することができます。これを行うには、{{domxref("MediaDevices.enumerateDevices")}} を呼び出します。利用できる機器を記述した {{domxref("MediaDeviceInfo")}} オブジェクトの配列でプロミスが履行されたら、許可したいものを探し、 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} に渡される {{domxref("MediaTrackConstraints")}} オブジェクトで対応する {{domxref("MediaTrackConstraints.deviceId", "deviceId")}} または `deviceId` を指定します。

## 関連情報

- {{domxref("MediaDevices.getUserMedia")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- [動画のフレームの使用](/ja/docs/Web/API/Canvas_API/Tutorial/Using_images#動画のフレームの使用)（キャンバスチュートリアル内）
