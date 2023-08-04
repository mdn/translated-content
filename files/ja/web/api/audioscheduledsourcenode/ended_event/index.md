---
title: "AudioScheduledSourceNode: ended イベント"
slug: Web/API/AudioScheduledSourceNode/ended_event
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{DefaultAPISidebar("Web Audio API")}}

`ended` は {{domxref("AudioScheduledSourceNode")}} インターフェイスのイベントで、ソースノードの再生が停止したときに発生します。

このイベントは、{{domxref("AudioScheduledSourceNode")}}の再生が停止したときに発生します。理由は、所定の停止時刻に達したか、音声の全時間が再生されたか、またはバッファーの全体が再生されたかのいずれかです。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("ended", (event) => { })

onended = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

この単純な例では、 `ended` イベントに対するイベントリスナーを設定し、ノードの再生が停止したときにユーザーインターフェースに［Start］ボタンを表示できるようにしています。

```js
node.addEventListener("ended", () => {
  document.getElementById("startButton").disabled = false;
});
```

また、 `onended` プロパティを使用してイベントハンドラーを設定することもできます。

```js
node.onended = () => {
  document.getElementById("startButton").disabled = false;
};
```

ended イベントの使用例は、 [audio-buffer の例 (GitHub)](https://mdn.github.io/webaudio-examples/audio-buffer/) を参照してください。

## 仕様

{{Specifications}}

## ブラウザー互換性

{{Compat}}

## 関連イベント

- [audioprocess](/ja/docs/Web/API/ScriptProcessorNode/audioprocess_event)
- [complete](/ja/docs/Web/API/OfflineAudioContext/complete_event)

## 関連情報

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- HTMLMediaElement の {{domxref("HTMLMediaElement.ended_event", 'ended')}} イベント
- MediaStreamTrack の {{domxref("MediaStreamTrack.ended_event", 'ended')}} イベント
