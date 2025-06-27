---
title: "HTMLMediaElement: played プロパティ"
short-title: played
slug: Web/API/HTMLMediaElement/played
l10n:
  sourceCommit: 2e84c228bf55def31fcd3ac3a0227b5faed99657
---

{{APIRef("HTML DOM")}}

**`played`** は {{domxref("HTMLMediaElement")}} インターフェイスの読み取り専用プロパティで、リソース（{{htmlelement("audio")}} または {{htmlelement("video")}} のメディアファイル）が再生された時間の範囲を示します。このプロパティは、この属性が評価された時点で、ブラウザーが再生したメディアソースの範囲（ある場合）を含む新しい {{domxref("TimeRanges")}} オブジェクトを返します。

## 値

{{domxref("TimeRanges")}} オブジェクトです。再生が行われた時間の範囲を示します。

## 例

```js
const media = document.querySelector("audio");
const playedTimeRanges = media.played;
let timePlayed = 0;
// メディアが再生された合計時間を計算します
for (let i = 0; i < playedTimeRanges.length; i++) {
  timePlayed += playedTimeRanges.end(i) - playedTimeRanges.start(i);
}
console.log(`このメディアは合計で ${timePlayed} 秒再生されました。`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement.seeked_event", "seeked")}} イベント
- {{domxref("HTMLMediaElement.progress_event", "progress")}} イベント
- {{domxref("HTMLMediaElement.seekable")}}
- {{domxref("HTMLMediaElement.buffered")}}
- {{domxref("HTMLVideoElement")}}
- {{domxref("HTMLAudioElement")}}
