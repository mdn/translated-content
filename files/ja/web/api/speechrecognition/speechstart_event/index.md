---
title: SpeechRecognition.onspeechstart
slug: Web/API/SpeechRecognition/speechstart_event
original_slug: Web/API/SpeechRecognition/onspeechstart
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}} インターフェイスの **`onspeechstart`** プロパティは、認識できる音声が検出できた時に([`speechstart`](/ja/docs/Web/API/SpeechRecognition/speechstart_event) イベントが発生した時)、実行されるイベントハンドラーになります。

## 構文

```
mySpeechRecognition.onspeechstart = function() { ... };
```

## 例

```js
recognition.onspeechstart = function() {
  console.log('音声が検出できました。');
}
```

## 仕様

| 仕様                                                                                         | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onspeechstart', 'onspeechstart')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onspeechstart")}}

## 関連情報

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)
