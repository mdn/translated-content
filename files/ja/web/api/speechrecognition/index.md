---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

[Web Speech API](/ja/docs/Web/API/Web_Speech_API) の **`SpeechRecognition`** インターフェイスは、認識サービスの制御インターフェイスです。これは、認識サービスから送信された {{domxref("SpeechRecognitionEvent")}} も扱います。

> **メモ:** Chrome では、ウェブページ上で音声認識を使用するとサーバーベースの認識エンジンが使用されます。あなたの音声を認識処理するためにウェブサービスへ送信するのでオフラインでは動作しません。

## コンストラクター

- {{domxref("SpeechRecognition.SpeechRecognition()")}}
  - : 新しい `SpeechRecognition` オブジェクトを作成します。

## プロパティ

_`SpeechRecognition` は、親インターフェイスである {{domxref("EventTarget")}} からのプロパティも継承します。_

- {{domxref("SpeechRecognition.grammars")}}
  - : 現在の `SpeechRecognition` により理解される文法を表す、{{domxref("SpeechGrammar")}} オブジェクトのコレクションを返して設定します。
- {{domxref("SpeechRecognition.lang")}}
  - : 現在の `SpeechRecognition` の言語を返して設定します。指定されない場合、これはデフォルトで HTML {{htmlattrxref("lang","html")}} 属性の値になります。どちらも設定されていない場合、ユーザーエージェントの言語設定が使用されます。
- {{domxref("SpeechRecognition.continuous")}}
  - : 各認識の継続的な結果を返すか、単一の認識結果だけを返すかを制御します。デフォルトは単一 (`false`) です。
- {{domxref("SpeechRecognition.interimResults")}}
  - : 暫定的な結果を返すか (`true`)、そうでないか (`false`) を制御します。暫定的な結果は、最終的な結果ではありません (つまり、{{domxref("SpeechRecognitionResult.isFinal")}} プロパティの値は `false`)。
- {{domxref("SpeechRecognition.maxAlternatives")}}
  - : 結果ごとに提供される {{domxref("SpeechRecognitionAlternative")}} の最大数を設定します。デフォルト値は 1 です。
- {{domxref("SpeechRecognition.serviceURI")}}
  - : 実際の認識を扱うための現在の `SpeechRecognition` に使用される音声認識サービスの場所を指定します。デフォルトはユーザーエージェントのスピーチサービスです。

### イベントハンドラー

- {{domxref("SpeechRecognition.onaudiostart")}}
  - : ユーザーエージェントが音声の捕捉を開始した時に発火します。
- {{domxref("SpeechRecognition.onaudioend")}}
  - : ユーザーエージェントが音声の捕捉を終了した時に発火します。
- {{domxref("SpeechRecognition.onend")}}
  - : 音声認識サービスとの接続が切れた時に発火します。
- {{domxref("SpeechRecognition.onerror")}}
  - : 音声認識でエラーが起こった時に発火します。
- {{domxref("SpeechRecognition.onnomatch")}}
  - : 音声認識サービスが意味を認識できない最終結果を返した時に発火します。これは、ある程度の認識はされているが、信頼できるしきい値 ({{domxref("SpeechRecognitionAlternative.confidence","confidence")}}) に達していないことを意味します。
- {{domxref("SpeechRecognition.onresult")}}
  - : 音声認識サービスが結果を返した時に発火します。単語またはフレーズの認識結果が有意であり、アプリと通信してその結果が渡されます。
- {{domxref("SpeechRecognition.onsoundstart")}}
  - : 何らかの音が鳴った時 (認識可能な音声またはそうでない音が検知された時) に発火します。
- {{domxref("SpeechRecognition.onsoundend")}}
  - : 何らかの音が鳴り止んだ時 (認識可能な音声またはそうでない音が止んだことが検知された時) に発火します。
- {{domxref("SpeechRecognition.onspeechstart")}}
  - : 音声認識サービスにより音声として認識された音が検出された時に発火します。
- {{domxref("SpeechRecognition.onspeechend")}}
  - : 音声認識サービスにより認識された音声の停止が検出された時に発火します。
- {{domxref("SpeechRecognition.onstart")}}
  - : 音声認識サービスが、現在の `SpeechRecognition` に関連付けられた文法の認識が意図された入力音声のリスニングを開始した時に発火します。

## メソッド

_`SpeechRecognition` は、その親インターフェイスである {{domxref("EventTarget")}} からのメソッドも継承します。_

- {{domxref("SpeechRecognition.abort()")}}
  - : 音声認識サービスによる入力音声のリスニングを停止し、{{domxref("SpeechRecognitionResult")}} を返そうとしないようにします。
- {{domxref("SpeechRecognition.start()")}}
  - : 音声認識サービスによる入力音声のリスニングを開始し、現在の `SpeechRecognition` に関連付けられた文法の認識を行います。
- {{domxref("SpeechRecognition.stop()")}}
  - : 音声認識サービスによる入力音声のリスニングを停止し、その時点までに補足した音声を使用して {{domxref("SpeechRecognitionResult")}} を返そうとします。

## 例

私たちのシンプルな [Speech color changer](https://github.com/mdn/web-speech-api/tree/master/speech-color-changer) の例では、{{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} コンストラクターを使用して新しい `SpeechRecognition` オブジェクトのインスタンスを生成し、新しい {{domxref("SpeechGrammarList")}} を作成、それを {{domxref("SpeechRecognition.grammars")}} プロパティを使用して `SpeechRecognition` インスタンスにより認識される文法に設定します。

他の値を定義した後、私たちは、それを設定して、クリックイベントの発生時 ({{domxref("SpeechRecognition.start()")}} 参照) に認識サービスを開始します。音声の認識に成功すると、{{domxref("SpeechRecognition.onresult")}} ハンドラーが発火し、イベントオブジェクトから発話された色を展開、そしてそれを {{htmlelement("html")}} 要素の背景色に設定します。

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color;
  bg.style.backgroundColor = color;
}
```

## 仕様

| 仕様書                                                                                               | 策定状況                             | 備考 |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ---- |
| {{SpecName('Web Speech API', '#speechreco-section', 'SpeechRecognition')}} | {{Spec2('Web Speech API')}} |      |

## ブラウザーの実装状況

{{Compat("api.SpeechRecognition")}}

### Firefox OS の許可設定

アプリ内で音声認識を使用するには、以下の許可設定を [manifest](/ja/docs/Web/Apps/Build/Manifest) で指定する必要があります:

```json
"permissions": {
  "audio-capture" : {
    "description" : "Audio capture"
  },
  "speech-recognition" : {
    "description" : "Speech recognition"
  }
}
```

特権アプリも必要なため、以下も同様に含める必要があります:

```json
  "type": "privileged"
```

## 関連項目

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)
