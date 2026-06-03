---
title: "HTMLMediaElement: waitingforkey イベント"
short-title: waitingforkey
slug: Web/API/HTMLMediaElement/waitingforkey_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Encrypted Media Extensions")}}

`waitingforkey` イベントは、メディア要素が次のデータをデコードするためにキーが必要であり、最初の再生が不可能になったときに発行され、再生が停止されます。

現在の再生位置の映像フレームや音声データがデコードされている場合、 {{domxref("HTMLMediaElement.readyState", "readyState")}} は [`HAVE_CURRENT_DATA`](/ja/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_current_data) に設定されます。それ以外の場合、前回は利用可能であったデータが利用できなくなった場合も含め、 `readyState` は [`HAVE_METADATA`](/ja/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_metadata) に設定されます。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} と同様に、メソッドでイベント名を使用するか、イベントハンドラープロパティを設定します。

```js-nolint
addEventListener("waitingforkey", (event) => { })

onwaitingforkey = (event) => { }
```

## イベント型

{{domxref("Event")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
