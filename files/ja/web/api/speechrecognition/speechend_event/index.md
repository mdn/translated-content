---
title: SpeechRecognition.onspeechend
slug: Web/API/SpeechRecognition/speechend_event
original_slug: Web/API/SpeechRecognition/onspeechend
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}} インターフェイスの **`onspeechend`** プロパティは、認識できる音声が検出し終えた時に ([`speechend`](/ja/docs/Web/API/SpeechRecognition/speechend_event) イベントが発生した時)、実行されるイベントハンドラーになります。

## 構文

```
mySpeechRecognition.onspeechend = function() { ... };
```

## 例

```js
recognition.onspeechend = function() {
  console.log('音声の検出が終わりました。');
}
```

## 仕様

| 仕様                                                                                     | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onspeechend', 'onspeechend')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onspeechend")}}

## 関連情報

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)
