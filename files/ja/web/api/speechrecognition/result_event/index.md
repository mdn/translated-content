---
title: SpeechRecognition.onresult
slug: Web/API/SpeechRecognition/result_event
original_slug: Web/API/SpeechRecognition/onresult
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}}インターフェイスの **`onresult`** プロパティは、音声認識サービスが結果を返した時に、つまり正しく言葉や文法が認識でき、アプリに通信した時 ({{event("result")}}イベントが発生した時) に、実行するイベントハンドラーになります。

## 構文

```
mySpeechRecognition.onresult = function() { ... };
```

## 例

下記のソースコードは [Speech color changer](https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js) の例文から取り出しました。

```js
recognition.onresult = function(event) {
  // SpeechRecognitionEvent プロパティーは SpeechRecognitionResultList オブジェクトを返しました。
  // SpeechRecognitionResult オブジェクトは SpeechRecognitionResultList オブジェクトにあります。
  // ゲッターがあるので、配列のように呼び出すことができます。
  // 最初の[0]は 0 の位置にある SpeechRecognitionResult を返します。
  // それぞれの結果がある SpeechRecognitionAlternative オブジェクトは各位SpeechRecognitionResult オブジェクトにあります。
  // それもゲッターがあるので、配列のように呼び出すことができます。
  // ２つ目の[0]は 0 の位置にある SpeechRecognitionAlternative を返します。
  // SpeechRecognitionAlternative オブジェクトの transcript プロパティを返します。
  var color = event.results[0][0].transcript;
  diagnostic.textContent = '結果：' + color + '.';
  bg.style.backgroundColor = color;
}
```

## 仕様

| 仕様                                                                             | 状態                                 | コメント |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onresult', 'onresult')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onresult")}}

### Firefox OS の権限

アプリで音声認識を利用する前に、下記の権限を [manifest](/ja/docs/Web/Apps/Build/Manifest) に追加する必要があります。

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

privileged アプリ権限も必要なので、下記も追加が必要です。

```json
  "type": "privileged"
```

## 関連情報

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)
