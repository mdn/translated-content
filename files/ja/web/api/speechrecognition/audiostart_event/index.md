---
title: 'SpeechRecognition: audiostart イベント'
slug: Web/API/SpeechRecognition/audiostart_event
---

{{APIRef("Web Speech API")}} {{SeeCompatTable}}

[Web Speech API](/ja/docs/Web/API/Web_Speech_API) の **`audiostart`** イベントは、ユーザーエージェントが会話認識のためのオーディオキャプチャを開始したときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラー</th>
      <td>
        {{domxref("SpeechRecognition/onaudiostart", "onaudiostart")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`audiostart` イベントは、 {{domxref("SpeechRecognition/onaudiostart", "onaudiostart")}} メソッドの中で使用することができます。

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('audiostart', function() {
  console.log('Audio capturing started');
});
```

または、 [onaudiostart](/ja/docs/Web/API/SpeechRecognition/onaudiostart) イベントハンドラープロパティを使用してください。

```js
recognition.onaudiostart = function() {
  console.log('Audio capturing started');
}
```

## 仕様書

| 仕様書                                                                                                       | 状態                                 | 備考 |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ---- |
| {{SpecName('Web Speech API', '#speechreco-events', 'speech recognition events')}} | {{Spec2('Web Speech API')}} |      |

## ブラウザーの対応

{{Compat("api.SpeechRecognition.audiostart_event")}}

## 関連情報

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)
- {{domxref("SpeechRecognition/onaudiostart", "onaudiostart")}} イベントハンドラープロパティ
