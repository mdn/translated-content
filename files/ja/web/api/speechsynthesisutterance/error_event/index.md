---
title: "SpeechSynthesisUtterance: error イベント"
short-title: error
slug: Web/API/SpeechSynthesisUtterance/error_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`error`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) の {{domxref("SpeechSynthesisUtterance")}} オブジェクトのイベントで、エラーが発生して正常に発話ができなかったときには発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

{{domxref("SpeechSynthesisErrorEvent")}} です。 {{domxref("SpeechSynthesisEvent")}} および {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("SpeechSynthesisErrorEvent")}}

## イベントプロパティ

_以下に挙げたプロパティに加え、親インターフェイスである {{domxref("Event")}} のプロパティが利用可能です。_

- {{domxref("SpeechSynthesisEvent.charIndex", "charIndex")}} {{ReadOnlyInline}}
  - : イベントが発生したときに発話されていた {{domxref("SpeechSynthesisUtterance.text")}} 内の文字のインデックス位置を返します。
- {{domxref("SpeechSynthesisEvent.elapsedTime", "elapsedTime")}} {{ReadOnlyInline}}
  - : イベントが発生した時点の {{domxref("SpeechSynthesisUtterance.text")}} が話し始めてからの経過時間（秒）を返します。
- {{domxref("SpeechSynthesisErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : 音声合成に失敗した原因を示すエラーコードを返します。
- {{domxref("SpeechSynthesisEvent.name", "name")}} {{ReadOnlyInline}}
  - : {{domxref("SpeechSynthesisUtterance.text")}} が発話される際に発生する特定の種類のイベントに関連する名前を返します。 {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}} イベントの場合は到達した [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) マーカーの名前、 {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}} イベントの場合は到達した境界の種類です。
- {{domxref("SpeechSynthesisEvent.utterance", "utterance")}} {{ReadOnlyInline}}
  - : イベントが発生した {{domxref("SpeechSynthesisUtterance")}} インスタンスを返します。

## 例

`error` イベントを [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
utterThis.addEventListener("error", (event) => {
  console.log(
    `An error has occurred with the speech synthesis: ${event.error}`,
  );
});
```

または `onerror` イベントハンドラープロパティで使用することができます。

```js
utterThis.onerror = (event) => {
  console.log(
    `An error has occurred with the speech synthesis: ${event.error}`,
  );
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
