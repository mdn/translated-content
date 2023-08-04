---
title: "BaseAudioContext: statechange イベント"
slug: Web/API/BaseAudioContext/statechange_event
---

{{ APIRef("Web Audio API") }}

`statechange` イベントは、 {{DOMxRef("BaseAudioContext")}} オブジェクトに対して {{domxref("BaseAudioContext.state", "state")}} メンバーが変化したときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('statechange', event => { })

onstatechange = event => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

次のスニペットは [AudioContext states のデモ](https://github.com/mdn/webaudio-examples)（[ライブ実行を確認](https://mdn.github.io/webaudio-examples/audiocontext-states/)）の一部です。 `onstatechange` ハンドラーは現在の {{domxref("BaseAudioContext.state", "state")}} を、変化するたびにコンソールへログ出力します。

```js
audioCtx.onstatechange = function() {
  console.log(audioCtx.state);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
