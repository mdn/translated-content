---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("Web Speech API")}}

**`SpeechRecognition`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のインターフェイスで、 認識サービスの制御インターフェイスです。これは、認識サービスから送信された {{domxref("SpeechRecognitionEvent")}} も処理します。

> **メモ:** Chrome など一部のブラウザーでは、ウェブページ上で音声認識を使用するとサーバーベースの認識エンジンが使用されます。音声を認識処理するためにウェブサービスへ送信するため、オフラインでは動作しません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("SpeechRecognition.SpeechRecognition()")}}
  - : 新しい `SpeechRecognition` オブジェクトを作成します。

## インスタンスプロパティ

_`SpeechRecognition` は、親インターフェイスである {{domxref("EventTarget")}} からのプロパティも継承しています。_

- {{domxref("SpeechRecognition.grammars")}}
  - : {{domxref("SpeechGrammar")}} オブジェクトのコレクションを返却および設定します。これは、現在の `SpeechRecognition` により理解される文法を表します。
- {{domxref("SpeechRecognition.lang")}}
  - : 現在の `SpeechRecognition` の言語を返して設定します。指定されない場合、これは既定でで HTML の [`lang`](/ja/docs/Web/HTML/Element/html#lang) 属性の値になります。どちらも設定されていない場合、ユーザーエージェントの言語設定が使用されます。
- {{domxref("SpeechRecognition.continuous")}}
  - : 各認識の継続的な結果を返すか、単一の認識結果だけを返すかを制御します。既定値は単一 (`false`) です。
- {{domxref("SpeechRecognition.interimResults")}}
  - : 暫定的な結果を返すか (`true`)、そうでないか (`false`) を制御します。暫定的な結果は、最終的な結果ではありません（つまり、{{domxref("SpeechRecognitionResult.isFinal")}} プロパティの値は `false` です）。
- {{domxref("SpeechRecognition.maxAlternatives")}}
  - : 結果ごとに提供される {{domxref("SpeechRecognitionAlternative")}} の最大数を設定します。既定値は 1 です。

## インスタンスメソッド

_`SpeechRecognition` は、その親インターフェイスである {{domxref("EventTarget")}} からのメソッドも継承しています。_

- {{domxref("SpeechRecognition.abort()")}}
  - : 音声認識サービスによる入力音声のリスニングを停止し、{{domxref("SpeechRecognitionResult")}} を返そうとしないようにします。
- {{domxref("SpeechRecognition.start()")}}
  - : 音声認識サービスによる入力音声のリスニングを開始し、現在の `SpeechRecognition` に関連付けられた文法の認識を行います。
- {{domxref("SpeechRecognition.stop()")}}
  - : 音声認識サービスによる入力音声のリスニングを停止し、その時点までに補足した音声を使用して {{domxref("SpeechRecognitionResult")}} を返そうとします。

## イベント

これらのイベントを [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用して待ち受けするか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- [`audiostart`](/ja/docs/Web/API/SpeechRecognition/audiostart_event)
  - : ユーザーエージェントが音声のキャプチャを開始したときに発行されます。
    `onaudiostart` プロパティからも利用できます。
- [`audioend`](/ja/docs/Web/API/SpeechRecognition/audioend_event)
  - : ユーザーエージェントが音声のキャプチャを完了したときに発行されます。
    `onaudioend` プロパティからも利用できます。
- [`end`](/ja/docs/Web/API/SpeechRecognition/end_event)
  - : 音声認識サービスが切断されたときに発行される。
    `onend` プロパティからも利用できます。
- [`error`](/ja/docs/Web/API/SpeechRecognition/error_event)
  - : 音声認識エラーが発生したときに発行さ れます。
    `onerror` プロパティからも利用できます。
- [`nomatch`](/ja/docs/Web/API/SpeechRecognition/nomatch_event)
  - : 音声認識サービスが、有意な認識がない最終結果を返したときに発行されます。これは、 {{domxref("SpeechRecognitionAlternative.confidence","confidence")}} の閾値を満たさない、または超えない、ある程度の認識を含む場合があります。
    `onnomatch` プロパティからも利用できます。
- [`result`](/ja/docs/Web/API/SpeechRecognition/result_event)
  - : 音声認識サービスが結果を返したとき、つまり単語やフレーズが正の値で認識され、これがアプリに伝達されたときに発行されます。
    `onresult` プロパティからも利用できます。
- [`soundstart`](/ja/docs/Web/API/SpeechRecognition/soundstart_event)
  - : （認識可能な音声であるかどうかに関わらず）何らかの音が検出されたときに発行されます。
    `onsoundstart` プロパティからも利用できます。
- [`soundend`](/ja/docs/Web/API/SpeechRecognition/soundend_event)
  - : 認識可能な音声であろうとなかろうと、何らかの音が検出されなくなったときに発行されます。
    `onsoundend` プロパティからも利用できます。
- [`speechstart`](/ja/docs/Web/API/SpeechRecognition/speechstart_event)
  - : 音声認識サービスによって音声として認識される音が検出されたときに発行されます。
    `onpeechstart` プロパティからも利用できます。
- [`speechend`](/ja/docs/Web/API/SpeechRecognition/speechend_event)
  - : 音声認識サービスによって認識された音声が検出されなくなったときに発行されます。
    また、 `onspeechend` プロパティからも利用できます。
- [`start`](/ja/docs/Web/API/SpeechRecognition/start_event)
  - : 音声認識サービスが、現在の `SpeechRecognition` に関連付けられた文法を認識するために、入力された音声を聞き始めたときに発行されます。
    `onstart` プロパティからも利用できます。

## 例

シンプルな [Speech color changer](https://github.com/mdn/dom-examples/tree/main/speech-color-changer) の例では、　{{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} コンストラクターを使用して新しい `SpeechRecognition` オブジェクトのインスタンスを生成し、新しい {{domxref("SpeechGrammarList")}} を作成、それを {{domxref("SpeechRecognition.grammars")}} プロパティを使用して `SpeechRecognition` インスタンスにより認識される文法に設定します。

他の値を定義した後、それを設定して、クリックイベントの発生時 ({{domxref("SpeechRecognition.start()")}} 参照) に認識サービスを開始します。音声の認識に成功すると、{{domxref("SpeechRecognition.result_event")}} イベントが発生し、イベントオブジェクトから発話された色を展開、そしてそれを {{htmlelement("html")}} 要素の背景色に設定します。

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");

document.body.onclick = () => {
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

{{Compat("api.SpeechRecognition")}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
