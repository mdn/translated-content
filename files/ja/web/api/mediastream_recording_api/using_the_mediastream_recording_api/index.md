---
title: MediaStream 収録 API の使用
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
l10n:
  sourceCommit: 6b1e3eebf22abf1b73bb219581335b1147b75d7a
---

{{DefaultAPISidebar("MediaStream Recording")}}

[MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API) を使用すると、音声や動画のストリームを簡単に記録できます。 {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}} と一緒に使用すると、ユーザーの入力機器から記録して結果を即座にウェブアプリで使用するための簡単な方法が提供されます。

音声と映像の両方を別々にまたは一緒に記録することができます。 この記事では、この API を提供する `MediaRecorder` インターフェースの使用方法に関する基本的なガイドを提供することを目的としています。

## サンプルアプリ: ウェブディクタフォン

![ウェブディクタフォンのサンプルアプリの画像 - 正弦波のサウンドの視覚化、次に録音と停止ボタン、そして再生可能な録音済みトラックの音声ジュークボックス。](web-dictaphone.png)

MediaStream 収録 API の基本的な使い方を説明するために、ウェブベースのディクタフォン (dictaphone) を作りました。 それは音声の断片を録音してからそれらを再生することを可能にします。ウェブオーディオ API を使用して、機器のサウンド入力を視覚化することもできます。 この記事では録音と再生の機能に集中します。

この[デモがライブで実行](https://mdn.github.io/dom-examples/media/web-dictaphone/)されているのを見ることも、 GitHub で[ソースコードを入手](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)することもできます。

## CSS のおいしいところ

このアプリでは HTML は非常に単純なので、ここでは説明しません。 言及する価値がある、もう少し興味深い CSS がいくつかありますので、それらについて以下で説明します。 CSS に興味がなく、JavaScript に直行したいのであれば、[基本的なアプリの設定](#basic_app_setup)のセクションに進んでください。

### calc() で、機器の高さに関係なく、インターフェイスをビューポートに制限

{{cssxref("calc", "calc()")}} 関数は、CSS でまとめられた便利で小さなユーティリティ機能の 1 つで、最初はあまり見かけませんが、すぐに「うわー、以前これがなかったのはなぜ？ CSS2 のレイアウトが厄介だったのはなぜ？」とあなたに考えさせ始めます。 それはプロセスで異なる単位を混合して、CSS 単位の計算値を決定するための計算をすることを可能にします。

例えば、ウェブディクタフォンには、3 つの主要な UI 領域が縦に積み重ねられています。 最初の 2 つ（ヘッダーとコントロール）の高さを固定したいと思いました。

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

ただし、機器の高さに関係なく、3 番目の領域（再生できる録音済みサンプルが含まれている領域）に、残っているスペースをすべて確保したいと考えました。 フレックスボックスがここでの答えかもしれませんが、それはそのような単純なレイアウトのために少しやり過ぎです。 代わりに、次のように 3 番目のコンテナーの高さを親の高さの 100% から、他の 2 つの高さとパディングを引いたものに等しくすることで、問題を解決しました。

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.1);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

### 表示/非表示のチェックボックスのハック

これはすでにかなりよく文書化されていますが、チェックボックスのハックについて言及したいと思います。 これは、チェックボックスの {{htmlelement("label")}} をクリックしてオン/オフを切り替えることができるという事実を乱用します。 ウェブディクタフォンでは、これにより情報画面が表示され、この画面は、右上隅にある疑問符アイコンをクリックすると表示/非表示になります。 まず最初に、次のように `<label>` を好きなようにスタイルして、他の要素の上に常に収まるように十分な `z-index` があり、したがってフォーカス可能/クリック可能になるようにします。

```css
label {
  font-family: "NotoColorEmoji";
  font-size: 3rem;
  position: absolute;
  top: 2px;
  right: 3px;
  z-index: 5;
  cursor: pointer;
}
```

次に、次のように実際のチェックボックスを非表示にします。 これは、UI を混乱させたくないためです。

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

次に、（{{htmlelement("aside")}} 要素で囲まれた）情報画面に希望のスタイルを設定し、レイアウトフローに表示されずメイン UI に影響しないように固定の位置を指定し、既定で収まって欲しい位置に変換し、スムーズな表示/非表示のための遷移を与えます。

```css
aside {
  position: fixed;
  top: 0;
  left: 0;
  text-shadow: 1px 1px 1px black;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  transition: 0.6s all;
  background-color: #999;
  background-image: linear-gradient(
    to top right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)
  );
}
```

最後に、チェックボックスをオンにすると（ラベルをクリックまたはフォーカスすると）、隣接する `<aside>` 要素の水平方向の平行移動値が変更され、スムーズにビューに遷移するという規則を書きます。

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## 基本的なアプリの設定

キャプチャしたいメディアストリームを入手するには、`getUserMedia()` を使用します。 その後、MediaStream 収録 API を使用してストリームを記録し、記録された各スニペットを生成された {{htmlelement("audio")}} 要素のソースに出力して、再生できるようにします。

次のように録音ボタンと停止ボタン、および生成された音声プレーヤーを含む {{htmlelement("article")}} の変数をいくつか宣言します。

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

このセクションの最後に、次のように基本的な `getUserMedia` 構造体を設定します。

```js
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia(
      // 制約 - 音声のみがこのアプリでは必要
      {
        audio: true,
      },
    )

    // 成功コールバック
    .then((stream) => {})

    // エラーコールバック
    .catch((err) => {
      console.error(`The following getUserMedia error occurred: ${err}`);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}
```

他のことを実行する前に、すべてが `getUserMedia` がサポートされているかどうかをチェックするテストに包まれています。 次に、`getUserMedia()` を呼び出し、その内部で次のように定義します。

- **制約**: 音声だけがディクタフォンにキャプチャされます。
- **成功コールバック**: このコードは、`getUserMedia` の呼び出しが正常に完了した後に実行されます。
- **エラーコールバック**: 何らかの理由で `getUserMedia` の呼び出しが失敗した場合、このコードが実行されます。

> **メモ:** 以下のコードはすべて `getUserMedia` の Success callback 内にあります。

## メディアストリームのキャプチャ

`getUserMedia` がメディアストリームを正常に作成したら、`MediaRecorder()` コンストラクタを使用して新しい Media Recorder のインスタンスを作成し、それに直接ストリーム (stream)を渡します。 これが MediaStream 収録 API を使用するためのエントリーポイントです。 これで、ストリームをブラウザーの既定のエンコード形式で {{domxref("Blob")}} にキャプチャする準備ができました。

```js
const mediaRecorder = new MediaRecorder(stream);
```

{{domxref("MediaRecorder")}} インターフェイスには、メディアストリームの記録を制御できる一連のメソッドがあります。 ウェブディクタフォンでは、その内の 2 つを利用して、いくつかのイベントを待ち受けしています。 まず、録音ボタンを押すと {{domxref("MediaRecorder.start()")}} を使用してストリームの録音を開始します。

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  record.style.background = "red";
  record.style.color = "black";
};
```

`MediaRecorder` が録音しているとき、{{domxref("MediaRecorder.state")}} プロパティは "recording" の値を返します。

録音が進むにつれて、音声データを収集する必要があります。 {{domxref("mediaRecorder.dataavailable_event", "ondataavailable")}} を使用してこれを行うためのイベントハンドラーを登録します。

```js
let chunks = [];

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

> **メモ:** ブラウザーは必要に応じて `dataavailable` イベントを発生させますが、この間隔を制御するために `start()` メソッドを呼び出すときにタイムスライス（例えば `start(10000)` ）を含めることも、必要なときに {{domxref("MediaRecorder.requestData()")}} を呼び出してイベントを発生させることもできます。

最後に、停止ボタンが押されたときに {{domxref("MediaRecorder.stop()")}} メソッドを使用して録音を停止し、アプリの他の場所で使用できるように {{domxref("Blob")}} を完成させます。

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

メディアストリームが終了すると（例えば、曲のトラックを入手してトラックが終了した場合や、ユーザーがマイクの共有を停止した場合）、録音も自然に停止することがあることに注意してください。

## blob を入手して使う

録音が停止すると、`state` プロパティは `"inactive"` の値を返し、`stop` イベントが発生します。 {{domxref("mediaRecorder.stop_event", "onstop")}} を使用してこれのイベントハンドラーを登録し、受け取ったすべてのチャンク (chunks) から `blob` を確定します。

```js
mediaRecorder.onstop = (e) => {
  console.log("recorder stopped");

  const clipName = prompt("Enter a name for your sound clip");

  const clipContainer = document.createElement("article");
  const clipLabel = document.createElement("p");
  const audio = document.createElement("audio");
  const deleteButton = document.createElement("button");

  clipContainer.classList.add("clip");
  audio.setAttribute("controls", "");
  deleteButton.innerHTML = "Delete";
  clipLabel.innerHTML = clipName;

  clipContainer.appendChild(audio);
  clipContainer.appendChild(clipLabel);
  clipContainer.appendChild(deleteButton);
  soundClips.appendChild(clipContainer);

  const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  chunks = [];
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;

  deleteButton.onclick = (e) => {
    let evtTgt = e.target;
    evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
  };
};
```

上記のコードを見て、何が起こっているのかを見てみましょう。

まず、ユーザーにクリップに名前を付けるように求めるプロンプトを表示します。

次に、次のような HTML 構造を作成し、それをクリップコンテナーに挿入します。 これは {{htmlelement("article")}} 要素です。

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

その後、録音した音声チャンクから結合された {{domxref("Blob")}} を作成し、それを指すオブジェクト URL を `window.URL.createObjectURL(blob)` を使用して作成します。 次に、{{HTMLElement("audio")}} 要素の [`src`](/ja/docs/Web/HTML/Element/audio#src) 属性の値をオブジェクト URL に設定して、音声プレーヤーの再生ボタンが押されたときに `Blob` を再生するようにします。

最後に、削除ボタンに `onclick` ハンドラーを設定して、クリップの HTML 構造全体を削除する関数にします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API) のランディングページ
- {{domxref("Navigator.getUserMedia()")}}
- [MediaStream 収録 API がウェブサイトのユーザーの 65% でサポートされるようになりました](https://addpipe.com/blog/media-recorder-api-is-now-supported-by-65-of-all-desktop-internet-users/)（英語）
