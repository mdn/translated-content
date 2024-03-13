---
title: "SpeechSynthesisUtterance: start イベント"
short-title: start
slug: Web/API/SpeechSynthesisUtterance/start_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

**`start`** は [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) の {{domxref("SpeechSynthesisUtterance")}} オブジェクトのイベントで、発話が始まったときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("start", (event) => {});

onstart = (event) => {};
```

## イベント型

{{domxref("SpeechSynthesisEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## イベントプロパティ

_以下に挙げたプロパティに加え、親インターフェイスである {{domxref("Event")}} のプロパティが利用可能です。_

- {{domxref("SpeechSynthesisEvent.charIndex", "charIndex")}} {{ReadOnlyInline}}
  - : イベントが発生したときに発話されていた {{domxref("SpeechSynthesisUtterance.text")}} 内の文字のインデックス位置を返します。
- {{domxref("SpeechSynthesisEvent.elapsedTime", "elapsedTime")}} {{ReadOnlyInline}}
  - : イベントが発生した時点の {{domxref("SpeechSynthesisUtterance.text")}} が話し始めてからの経過時間（秒）を返します。
- {{domxref("SpeechSynthesisEvent.name", "name")}} {{ReadOnlyInline}}
  - : {{domxref("SpeechSynthesisUtterance.text")}} が発話される際に発生する特定の種類のイベントに関連する名前を返します。 {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}} イベントの場合は到達した [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) マーカーの名前、 {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}} イベントの場合は到達した境界の種類です。
- {{domxref("SpeechSynthesisEvent.utterance", "utterance")}} {{ReadOnlyInline}}
  - : イベントが発生した {{domxref("SpeechSynthesisUtterance")}} インスタンスを返します。

## 例

`start` イベントを [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
utterThis.addEventListener("start", (event) => {
  console.log(`We have started uttering this speech: ${event.utterance.text}`);
});
```

または `onstart` イベントハンドラープロパティで使用することができます。

```js
utterThis.onstart = (event) => {
  console.log(`We have started uttering this speech: ${event.utterance.text}`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
