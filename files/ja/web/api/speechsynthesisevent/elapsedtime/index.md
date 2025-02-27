---
title: "SpeechSynthesisEvent: elapsedTime プロパティ"
short-title: elapsedTime
slug: Web/API/SpeechSynthesisEvent/elapsedTime
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`elapsedTime`** は {{domxref("SpeechSynthesisEvent")}} の読み取り専用プロパティで、この[イベント](/ja/docs/Web/API/SpeechSynthesisUtterance#イベント)が発生した時点での {{domxref("SpeechSynthesisUtterance.text")}} を発話し始めてからの経過時間を秒単位で返します。

## 値

経過時間を秒単位で格納した浮動小数点数です。

> [!NOTE]
> 初期のバージョンの仕様書では、ミリ秒単位の経過時刻が必要でした。
> ブラウザーの[互換性一覧表](#ブラウザーの互換性)を確認してください。

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
