---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Web Speech API")}}

**`SpeechRecognition`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のインターフェイスで、 認識サービスの制御インターフェイスです。これは、認識サービスから送信された {{domxref("SpeechRecognitionEvent")}} も処理します。

> [!NOTE]
> Chrome など一部のブラウザーでは、ウェブページ上で音声認識を使用するとサーバーベースの認識エンジンが使用されます。音声を認識処理するためにウェブサービスへ送信するため、オフラインでは動作しません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("SpeechRecognition.SpeechRecognition()")}}
  - : 新しい `SpeechRecognition` オブジェクトを作成します。

## インスタンスプロパティ

_`SpeechRecognition` は、親インターフェイスである {{domxref("EventTarget")}} からのプロパティも継承しています。_

- {{domxref("SpeechRecognition.lang")}}
  - : 現在の `SpeechRecognition` の言語を返して設定します。指定されない場合、これは既定でで HTML の [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性の値になります。どちらも設定されていない場合、ユーザーエージェントの言語設定が使用されます。
- {{domxref("SpeechRecognition.continuous")}}
  - : 各認識の継続的な結果を返すか、単一の認識結果だけを返すかを制御します。既定値は単一 (`false`) です。
- {{domxref("SpeechRecognition.interimResults")}}
  - : 暫定的な結果を返すか (`true`)、そうでないか (`false`) を制御します。暫定的な結果は、最終的な結果ではありません（つまり、{{domxref("SpeechRecognitionResult.isFinal")}} プロパティの値は `false` です）。
- {{domxref("SpeechRecognition.maxAlternatives")}}
  - : 結果ごとに提供される {{domxref("SpeechRecognitionAlternative")}} の最大数を設定します。既定値は 1 です。
- {{domxref("SpeechRecognition.phrases")}} {{experimental_inline}}
  - : [文脈バイアス](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition)に使用する {{domxref("SpeechRecognitionPhrase")}} オブジェクトの配列を設定します。
- {{domxref("SpeechRecognition.processLocally")}} {{experimental_inline}}
  - : 音声認識をユーザーの端末でローカルに実行する必要があるかどうかを指定します。

### 非推奨のプロパティ

ウェブ音声 API から文法の概念が削除されました。関連機能は仕様に残っており、下位互換性のため対応ブラウザーでは認識されますが、音声認識サービスには影響しません。

- {{domxref("SpeechRecognition.grammars")}}
  - : {{domxref("SpeechGrammar")}} オブジェクトのコレクションを返却および設定します。これは、現在の `SpeechRecognition` により理解される文法を表します。

## 静的メソッド

- {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} {{experimental_inline}}
  - : 指定された言語が音声認識で使用可能かどうかを確認します。
- {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} {{experimental_inline}}
  - : 指定された言語で、端末上の音声認識に必要な言語パックをインストールします。

## インスタンスメソッド

_`SpeechRecognition` は、その親インターフェイスである {{domxref("EventTarget")}} からのメソッドも継承しています。_

- {{domxref("SpeechRecognition.abort()")}}
  - : 音声認識サービスによる入力音声のリスニングを停止し、{{domxref("SpeechRecognitionResult")}} を返そうとしないようにします。
- {{domxref("SpeechRecognition.start()")}}
  - : 音声認識サービスを開始し、（マイクまたはオーディオトラックから）入力される音声を待機し、その認識結果を返します。
- {{domxref("SpeechRecognition.stop()")}}
  - : 音声認識サービスによる入力音声のリスニングを停止し、その時点までに取得した結果を使用して {{domxref("SpeechRecognitionResult")}} を返そうとします。

## イベント

これらのイベントを [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用して待ち受けするか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- [`audiostart`](/ja/docs/Web/API/SpeechRecognition/audiostart_event)
  - : ユーザーエージェントが音声のキャプチャを開始したときに発行されます。
- [`audioend`](/ja/docs/Web/API/SpeechRecognition/audioend_event)
  - : ユーザーエージェントが音声のキャプチャを完了したときに発行されます。
- [`end`](/ja/docs/Web/API/SpeechRecognition/end_event)
  - : 音声認識サービスが切断されたときに発行される。
- [`error`](/ja/docs/Web/API/SpeechRecognition/error_event)
  - : 音声認識エラーが発生したときに発行さ れます。
- [`nomatch`](/ja/docs/Web/API/SpeechRecognition/nomatch_event)
  - : 音声認識サービスが、有意な認識がない最終結果を返したときに発行されます。これは、 {{domxref("SpeechRecognitionAlternative.confidence","confidence")}} の閾値を満たさない、または超えない、ある程度の認識を含む場合があります。
- [`result`](/ja/docs/Web/API/SpeechRecognition/result_event)
  - : 音声認識サービスが結果を返したとき、つまり単語やフレーズが正の値で認識され、これがアプリに伝達されたときに発行されます。
- [`soundstart`](/ja/docs/Web/API/SpeechRecognition/soundstart_event)
  - : （認識可能な音声であるかどうかに関わらず）何らかの音が検出されたときに発行されます。
- [`soundend`](/ja/docs/Web/API/SpeechRecognition/soundend_event)
  - : 認識可能な音声であろうとなかろうと、何らかの音が検出されなくなったときに発行されます。
- [`speechstart`](/ja/docs/Web/API/SpeechRecognition/speechstart_event)
  - : 音声認識サービスによって音声として認識される音が検出されたときに発行されます。
- [`speechend`](/ja/docs/Web/API/SpeechRecognition/speechend_event)
  - : 音声認識サービスによって認識された音声が検出されなくなったときに発行されます。
- [`start`](/ja/docs/Web/API/SpeechRecognition/start_event)
  - : 音声認識サービスが音声認識のために聞き取りを開始したときに発生します。

## 例

[Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) の例では、{{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} コンストラクターを使用して新しい `SpeechRecognition` オブジェクトのインスタンスを生成しています。

他の値を定義した後、それを設定して、ボタンがクリックされた時（{{domxref("SpeechRecognition.start()")}} を参照）に認識サービスを開始します。音声の認識に成功すると、{{domxref("SpeechRecognition.result_event", "result")}} イベントが発生し、イベントオブジェクトから発話された色を展開、そしてそれを {{htmlelement("html")}} 要素の背景色に設定します。

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const startBtn = document.querySelector("button");

startBtn.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
