---
title: "OfflineAudioContext: complete イベント"
slug: Web/API/OfflineAudioContext/complete_event
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{DefaultAPISidebar("Web Audio API")}}

`complete` は {{domxref("OfflineAudioContext")}} インターフェイスのイベントで、オフライン音声コンテキストのレンダリングが完了したときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
addEventListener('complete', (event) => { });

oncomplete = (event) => { };
```

## イベント型

{{domxref("OfflineAudioCompletionEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("OfflineAudioCompletionEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} からプロパティを継承しています_。

- {{domxref("OfflineAudioCompletionEvent.renderedBuffer")}} {{ReadOnlyInline}}
  - : {{domxref("AudioBuffer")}} で、 {{domxref("OfflineAudioContext")}} の処理結果が入っています。

## 例

処理が完全に終了したら、 `complete` イベントハンドラーを使用して、音声をこれで使用できることをユーザーに知らせ、再生ボタンを有効にしたいと思うかもしれません。

```js
const offlineAudioCtx = new OfflineAudioContext();

offlineAudioCtx.addEventListener('complete', () => {
  console.log('Offline audio processing now complete');
  showModalDialog('Song processed and ready to play');
  playBtn.disabled = false;
})
```

また、 `oncomplete` プロパティを使用して、イベントハンドラーを設定することもできます。

```js
const offlineAudioCtx = new OfflineAudioContext();

offlineAudioCtx.oncomplete = () => {
  console.log('Offline audio processing now complete');
  showModalDialog('Song processed and ready to play');
  playBtn.disabled = false;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
