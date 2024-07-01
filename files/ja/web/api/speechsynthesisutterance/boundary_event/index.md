---
title: "SpeechSynthesisUtterance: boundary イベント"
short-title: boundary
slug: Web/API/SpeechSynthesisUtterance/boundary_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`boundary`** は [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のイベントで、発話が胡屋分の境界に達したときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("boundary", (event) => {});

onboundary = (event) => {};
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

`boundary` イベントを [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
utterThis.addEventListener("boundary", (event) => {
  console.log(
    `${event.name} boundary reached after ${event.elapsedTime} seconds.`,
  );
});
```

または `onboundary` イベントハンドラープロパティで使用することができます。

```js
utterThis.onboundary = (event) => {
  console.log(
    `${event.name} boundary reached after ${event.elapsedTime} seconds.`,
  );
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
