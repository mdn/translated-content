---
title: SpeechSynthesisEvent
slug: Web/API/SpeechSynthesisEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`SpeechSynthesisEvent`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のインターフェイスで、は、発話サービスで処理された {{domxref("SpeechSynthesisUtterance")}} オブジェクトの現在の状態に関する情報を保持します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("SpeechSynthesisEvent.SpeechSynthesisEvent", "SpeechSynthesisEvent()")}}
  - : 新しい `SpeechSynthesisEvent` を作成します。

## インスタンスプロパティ

_以下に挙げたプロパティに加え、親インターフェイスである {{domxref("Event")}} のプロパティが利用可能です。_

- {{domxref("SpeechSynthesisEvent.charIndex")}} {{ReadOnlyInline}}
  - : イベントが発生したときに発話されていた {{domxref("SpeechSynthesisUtterance.text")}} 内の文字のインデックス位置を返します。
- {{domxref("SpeechSynthesisEvent.charLength")}} {{ReadOnlyInline}}
  - : 発話エンジンが対応している場合、 `charIndex` 位置の後に発話できる残りの文字数を返します。発話エンジンが情報を提供できない場合は 0 を返します。
- {{domxref("SpeechSynthesisEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : イベントが発生した時点の {{domxref("SpeechSynthesisUtterance.text")}} が話し始めてからの経過時間（秒）を返します。
- {{domxref("SpeechSynthesisEvent.name")}} {{ReadOnlyInline}}
  - : {{domxref("SpeechSynthesisUtterance.text")}} が発話される際に発生する特定の種類のイベントに関連する名前を返します。 {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}} イベントの場合は到達した [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) マーカーの名前、 {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}} イベントの場合は到達した境界の種類です。
- {{domxref("SpeechSynthesisEvent.utterance")}} {{ReadOnlyInline}}
  - : イベントが発生した {{domxref("SpeechSynthesisUtterance")}} インスタンスを返します。

## インスタンスメソッド

_以下に挙げたメソッドに加え、親インターフェイスである {{domxref("Event")}} のメソッドが利用可能です。_

## 例

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
  );
};

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
