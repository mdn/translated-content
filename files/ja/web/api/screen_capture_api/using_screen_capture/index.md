---
title: 画面キャプチャ API の使用
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
---

{{DefaultAPISidebar("Screen Capture API")}}

この記事では、画面キャプチャ API とその {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} メソッドを使用して、 [WebRTC](/ja/docs/Web/API/WebRTC_API) 会議セッション中に画面の一部または全部をストリーミング、録音、共有用に取得する方法を検証していきます。

> **メモ:** 最近のバージョンの [WebRTC adapter.js shim](https://github.com/webrtcHacks/adapter) には `getDisplayMedia()` の実装が含まれており、画面共有をサポートしているが現在の標準 API を実装していないブラウザーで画面共有を可能にすることができるので便利かもしれません。これは、少なくとも Chrome、Edge、Firefox で動作します。

## 画面の内容のキャプチャ

画面の内容をライブの {{domxref("MediaStream")}} でキャプチャするには、 {{domxref("MediaDevices.getDisplayMedia", "navigator.mediaDevices.getDisplayMedia()")}} を呼び出すことで開始され、ライブ画面の内容を含むストリームに解決するプロミスが返されます。

### 画面キャプチャの開始: `async`/`await` スタイル

```js
async function startCapture(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions,
    );
  } catch (err) {
    console.error("Error: " + err);
  }
  return captureStream;
}
```

このコードは、上記のように非同期関数と [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) 演算子を使うか、下記のように {{jsxref("Promise")}} を直接使って記述することができます。

### 画面キャプチャの開始: `Promise` スタイル

```js
function startCapture(displayMediaOptions) {
  return navigator.mediaDevices
    .getDisplayMedia(displayMediaOptions)
    .catch((err) => {
      console.error("Error:" + err);
      return null;
    });
}
```

いずれにせよ、{{Glossary("user agent", "ユーザーエージェント")}}は、共有する画面領域を選択するようユーザーに促すユーザーインタフェースを提示して応答します。これらの `startCapture()` の実装はどちらも、キャプチャされた表示画像を含む {{domxref("MediaStream")}} を返します。

必要な画面の種類を指定する方法と、結果として得られるストリームを調整する他の方法については、以下の[オプションと制約](#オプションと制約)を参照してください。

### キャプチャする表示面を選択するウィンドウの例

[![Chrome のソース面を選ぶウィンドウの画面ショット](chrome-screen-capture-window.png)](Chrome-Screen-Capture-Window.png)

そして、キャプチャしたストリーム `captureStream` を、ストリームを入力として受け付けるあらゆるものに使用することができます。以下の[例](#例)は、ストリームを利用するためのいくつかの方法を示しています。

### 可視、論理表示面

画面キャプチャ API の用語では、**表示面**は、共有のために API によって選択できる任意のコンテンツオブジェクトです。共有面には、ブラウザータブのコンテンツ、完全なウィンドウ、 1 つの面に結合されたアプリケーションのすべてのウィンドウ、およびモニター（または 1 つの面に結合されたモニターのグループ）が含まれます。

表示面には 2 種類あります。**可視表示面**とは、最前面のウィンドウやタブ、あるいは画面全体など、画面上で全体が見える表示面です。

**論理的表示面**とは、他のオブジェクトとある程度重なっていたり、完全に隠れていたり、画面外にあったりして、部分的または完全に隠されているものです。画面キャプチャ API でこれらをどのように処理するかは、さまざまです。一般にブラウザーは、論理的な表示面の隠れた部分をぼかしたり、色やパターンに置き換えたりして、何らかの方法で隠蔽した画像を提供します。これはセキュリティ上の理由から行われるもので、ユーザーが見ることのできないコンテンツには、共有したくないデータが含まれている可能性があるからです。

ユーザーエージェントは，ユーザから許可を得た上で，不明瞭なウィンドウの全コンテンツのキャプチャを許可するかもしれません。この場合，ユーザーエージェントは，ウィンドウの隠された部分の現在の内容を取得することによって，または現在の内容が利用可能でない場合には最も最近表示された内容を提示することによって，隠された内容を含むことができます。

### オプションと制約

{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} に渡される制約オブジェクトは、結果のストリームを設定するために使用されるオブジェクトです。

> **メモ:** メディア API における制約のほとんどの用途とは異なり、ここでは、ストリーム構成を定義するためにのみ使用され、利用可能な選択肢をフィルタリングするために使用されるわけではありません。

[共有画面トラックのプロパティ](/ja/docs/Web/API/MediaTrackConstraints#properties_of_shared_screen_tracks)では、 {{domxref("MediaTrackConstraints")}}、{{domxref("MediaTrackSupportedConstraints")}}、{{domxref("MediaTrackSettings")}} に追加された画面キャプチャストリームの構成に関する制約について参照できます。

キャプチャするコンテンツが選択されるまで、どのような制約も適用されません。制約は、結果のストリームに表示される内容を変更します。

たとえば、動画に {{domxref("MediaTrackConstraints.width", "width")}} 制約を指定すると、ユーザーが共有する領域を選択した後に動画を拡大縮小することによって適用されます。ソース自体のサイズに制約を設けるものではありません。

> **メモ:** 制約によって、画面共有 API でキャプチャ可能なソースのリストが変更されることは決してありません。このため、ウェブアプリケーションでは、1 つの項目が残るまでソース リストを制限することによって、ユーザーに特定のコンテンツを共有するように強制することはできません。

表示のキャプチャが行われている間、画面共有を行っているマシンは、共有が行われていることをユーザーに認識させるために、何らかのインジケーターを表示します。

> **メモ:** プライバシーとセキュリティ上の理由から、画面共有のソースは {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} を使って列挙することができないようになっています。これに関連して、`getDisplayMedia()` で利用できるソースに変更があった場合も、 {{domxref("MediaDevices/devicechange_event", "devicechange")}} イベントは送信されません。

### 共有音声のキャプチャ

{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} は、ユーザーの画面（またはその一部）の動画をキャプチャするために最も一般的に使用されています。しかし、{{Glossary("user agent", "ユーザーエージェント")}}は、動画コンテンツと一緒に音声のキャプチャを許可する場合があります。この音声のソースは、選択されたウィンドウ、コンピューター全体のオーディオシステム、またはユーザーのマイク（または上記のすべての組み合わせ）であるかもしれません。

音声の共有が必要なプロジェクトを始める前に、 [ブラウザーの互換性](/ja/docs/Web/API/MediaDevices/getDisplayMedia#%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC%E3%81%AE%E4%BA%92%E6%8F%9B%E6%80%A7) を確認し、互換性を希望するブラウザーがキャプチャした画面ストリームに音声のサポートがあるかどうかを確認してください。

音声を含む画面の共有を要求するには、 `getDisplayMedia()` に渡すオプションは次のようになります。

```js
const gdmOptions = {
  video: true,
  audio: true,
};
```

これにより、ユーザーエージェントが対応する範囲内で、ユーザーが希望するものを自由に選択することができます。これは、 `audio` と `video` のそれぞれに追加の情報を指定することで、さらに改良することができます。

```js
const gdmOptions = {
  video: {
    cursor: "always",
  },
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100,
  },
};
```

この例では、カーソルは常にキャプチャで表示され、音声トラックはノイズ抑制とエコーキャンセル機能を有効にし、音声のサンプリングレートは 44.1kHz が理想的です。

音声のキャプチャは常にオプションです。ウェブコンテンツが音声と動画の両方を含むストリームを要求した場合でも、返される {{domxref("MediaStream")}} は、音声なしの 1 つの動画トラックのみとなる場合があります。

> **メモ:** プロパティによっては広く実装されておらず、エンジンで使用されない場合もあります。例えば `cursor` は [対応が限定されています](/ja/docs/Web/API/MediaTrackConstraints/cursor#ブラウザーの互換性)。

## キャプチャしたストリームの使用

{{jsxref("promise")}} が返す {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} は、画面または画面領域を含む少なくとも一つの動画ストリームを含み、 `getDisplayMedia()` が呼ばれたときに指定した制約に基づいて調整またはフィルタリングされた {{domxref("MediaStream")}} に解決されます。

## セキュリティ

ネットワーク上でコンテンツを共有する場合は常にそうですが、画面共有のプライバシーと安全性への影響を考慮することが重要です。

### 潜在的なリスク

画面共有を取り巻くプライバシーとセキュリティの問題は、通常、それほど深刻ではありませんが、実際に存在します。最も大きな潜在的問題は、ユーザーが共有したくないコンテンツを不注意に共有してしまうことです。

たとえば、ユーザーが自分の画面を共有しているときに、見えている背景のウィンドウにたまたま個人情報が含まれていたり、パスワードマネージャーが共有ストリームに見えていたりすると、プライバシーやセキュリティの侵害が容易に発生します。論理的な表示面をキャプチャする場合、この影響は増幅される可能性があり、ユーザーは見るどころか、全く知らないコンテンツを含んでいる可能性があります。

プライバシーを真剣に考えるユーザーエージェントは、特にそのコンテンツを共有する権限が与えられていない限り、画面上に実際に表示されていないコンテンツを難読化する必要があります。

### 表示コンテンツのキャプチャの許可

キャプチャした画面コンテンツのストリーミングを開始する前に、{{Glossary("user agent", "ユーザーエージェント")}}は共有の要求を確認し、共有するコンテンツを選択するようユーザーに要求します。

## 例

### 単純な画面キャプチャ

この例では、キャプチャした画面領域の内容を、同じページ内の {{HTMLElement("video")}} 要素にストリーミングしています。

#### JavaScript

この機能を実現するために必要なコードはそれほど多くありません。 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使ってカメラから動画を取り込むことに慣れているなら、 {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} は非常に身近に感じることでしょう。

##### セットアップ

まず、アクセスする必要のあるページ上の要素を参照するために、いくつかの定数が設定されます。キャプチャされた画面のコンテンツがストリームされる {{HTMLElement("video")}}、ログ出力が描かれるボックス、画面イメージのキャプチャをオン/オフする開始/停止ボタンがあります。

オブジェクト `displayMediaOptions` には `getDisplayMedia()` に渡す制約が含まれています。ここでは {{domxref("MediaTrackConstraints.cursor", "cursor")}} プロパティを `always` に設定しており、マウスカーソルを常にキャプチャメディアに含めることを指定しています。

> **メモ:** プロパティによっては広く実装されておらず、エンジンで使用されないかもしれません。例えば `cursor` は [サポートが限定されています](/ja/docs/Web/API/MediaTrackConstraints/cursor#browser_compatibility).

最後に、イベントリスナーを設定して、スタートボタンとストップボタンに対するユーザーのクリックを検出します。

```js
const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

// Options for getDisplayMedia()

var displayMediaOptions = {
  video: {
    cursor: "always",
  },
  audio: false,
};

// Set event listeners for the start and stop buttons
startElem.addEventListener(
  "click",
  function (evt) {
    startCapture();
  },
  false,
);

stopElem.addEventListener(
  "click",
  function (evt) {
    stopCapture();
  },
  false,
);
```

##### 内容のログ出力

エラーやその他の問題のログを簡単に取るために、この例では特定の {{domxref("console")}} メソッドをオーバーライドして、そのメッセージを ID が `log` である {{HTMLElement("pre")}} ブロックに出力しています。

```js
console.log = (msg) => (logElem.innerHTML += `${msg}<br>`);
console.error = (msg) =>
  (logElem.innerHTML += `<span class="error">${msg}</span><br>`);
console.warn = (msg) =>
  (logElem.innerHTML += `<span class="warn">${msg}<span><br>`);
console.info = (msg) =>
  (logElem.innerHTML += `<span class="info">${msg}</span><br>`);
```

これにより、おなじみの {{domxref("console.log()")}} や {{domxref("console.error()")}} などを使って、ドキュメント内のログボックスに情報を記録することができるようになります。

##### 画面キャプチャの開始

以下の `startCapture()` メソッドは、ユーザーが画面上で選択した領域から内容を取得する {{domxref("MediaStream")}} のキャプチャを開始するものです。`startCapture()` は、 "Start Capture" ボタンがクリックされたときに呼び出されます。

```js
async function startCapture() {
  logElem.innerHTML = "";

  try {
    videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions,
    );
    dumpOptionsInfo();
  } catch (err) {
    console.error("Error: " + err);
  }
}
```

前回の接続の際に残ったテキストを取り除くためにログの内容をクリアした後、`startCapture()` は {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} を呼び出し、そこに `displayMediaOptions` で定義された制約オブジェクトを渡します。jsxref("Operators/await", "await")}} を使用して、次のコード行は `getDisplayMedia()` が返す {{jsxref("promise")}} が解決するまで実行されません。解決後、プロミスは {{domxref("MediaStream")}} を返し、ユーザが選択した画面、ウィンドウ、その他の領域の内容をストリームとして出力します。

このストリームは、返された `MediaStream` を要素の {{domxref("HTMLMediaElement.srcObject", "srcObject")}} に格納することによって {{HTMLElement("video")}} 要素に接続されています。

`dumpOptionsInfo()` 関数は、後で見ることになりますが、教育的な目的のために、ストリームに関する情報をログボックスにダンプします。

もし、どれかが失敗したら、 [`catch()`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) 節は、ログボックスにエラーメッセージを出力します。

##### 画面キャプチャの停止

`stopCapture()` メソッドは "Stop Capture" ボタンがクリックされたときに呼び出されます。これは {{domxref("MediaStream.getTracks()")}} を用いてトラックリストを取得し、各トラックの {{domxref("MediaStreamTrack.stop", "stop()")}} メソッドを呼び出してストリームを停止させます。それが終わると、 `srcObject` に `null` がセットされ、ストリームが接続されていないことが誰にでも分かるようにします。

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### 設定情報のダンプ

参考までに、上記の `startCapture()` メソッドは `dumpOptions()` という名前のメソッドを呼び出し、現在のトラック設定と、ストリームが作成されたときに設定された制約を出力します。

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.info("Track settings:");
  console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.info("Track constraints:");
  console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

トラックリストは、キャプチャした画面の {{domxref("MediaStream")}} で {{domxref("MediaStream.getVideoTracks", "getVideoTracks()")}} を呼び出すことで取得します。現在有効な設定は {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} で、設定されている制約は {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} で取得されます。

#### HTML

HTML は簡単な紹介文から始まり、本題に入ります。

```html
<p>
  This example shows you the contents of the selected part of your display.
  Click the Start Capture button to begin.
</p>

<p>
  <button id="start">Start Capture</button>&nbsp;<button id="stop">
    Stop Capture
  </button>
</p>

<video id="video" autoplay></video>
<br />

<strong>Log:</strong>
<br />
<pre id="log"></pre>
```

HTML の主要な部分は以下の通りです。

1. "Start Capture" と書かれた {{HTMLElement("button")}} は、クリックされると `startCapture()` 関数を呼び出し、画面コンテンツへのアクセスを要求し、キャプチャを開始します。
2. "Stop Capture" というラベルの付いた 2 番目のボタンがあり、クリックされると `stopCapture()` を呼び出して画面のコンテンツのキャプチャを終了します。
3. キャプチャされた画面の内容がストリームされる {{HTMLElement("video")}}。
4. {{HTMLElement("pre")}} ブロック。この中では、インターセプトされた {{domxref("console")}} メソッドによってログが記録されます。

#### CSS

この例では、 CSS は完全に外観上のものです。動画には境界線が付けられ、その幅は利用可能な水平方向のスペースのほぼ全体を占めるように設定されています (`width: 98%`)。 {{cssxref("max-width")}} には `860px` を設定し、動画のサイズに絶対的な上限を設定しています。

`error`、`warn`、`info` クラスは、対応するコンソール出力の種類をスタイル設定するために使用されます。

```css
#video {
  border: 1px solid #999;
  width: 98%;
  max-width: 860px;
}

.error {
  color: red;
}

.warn {
  color: orange;
}

.info {
  color: darkgreen;
}
```

#### 結果

最終的にはこのようになります。ブラウザーが画面キャプチャ API に対応している場合、"Start Capture" をクリックすると、共有する画面、ウィンドウ、タブを選択するための{{Glossary("user agent", "ユーザーエージェント")}}のインターフェイスが表示されます。

{{EmbedLiveSample("Simple_screen_capture", 640, 680, "", "", "", "display-capture")}}

## セキュリティ

[機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)が有効なときに機能させるためには、 `display-capture` 権限が必要です。これは {{HTTPHeader("Feature-Policy")}} を用いて行うことができます。または、画面キャプチャ API を {{HTMLElement("iframe")}} 内で使用している場合は、 `<iframe>` 要素の [`allow`](/ja/docs/Web/HTML/Element/iframe#allow) 属性を使用します。

例えば、 HTTP ヘッダーのこの行は、文書と同じオリジンから読み込まれる埋め込み {{HTMLElement("iframe")}} 要素の画面キャプチャ API を有効にします。

```
Feature-Policy: display-capture 'self'
```

もし `<iframe>` 内で画面キャプチャを行うのであれば、そのフレームに対してのみ許可を要求することができ、より一般的な許可を要求するよりも明らかに安全です。

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## ブラウザーの互換性

{{Compat("api.MediaDevices.getDisplayMedia")}}

## 関連情報

- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API)
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Streams_API)
- [WebRTC で静止画の写真を撮影](/ja/docs/Web/API/WebRTC_API/Taking_still_photos)
- {{domxref("HTMLCanvasElement.captureStream()")}} で {{HTMLElement("canvas")}} のライブコンテンツの {{domxref("MediaStream")}} を取得できる
