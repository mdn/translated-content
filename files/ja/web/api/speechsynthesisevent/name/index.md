---
title: "SpeechSynthesisEvent: name プロパティ"
short-title: name
slug: Web/API/SpeechSynthesisEvent/name
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`name`** は {{domxref("SpeechSynthesisUtterance")}} インターフェイスの読み取り専用プロパティで、 {{domxref("SpeechSynthesisUtterance.text")}} が話されているときに発生する、特定の種類のイベントに関連付けられた名前を返します。
{{domxref("SpeechSynthesisUtterance.mark_event", "mark")}} イベントの場合は、到達した [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) マーカーの名前、 {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}} イベントの場合は到達した境界の種類です。

## 値

文字列です。

## 例

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
