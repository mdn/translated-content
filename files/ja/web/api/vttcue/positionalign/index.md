---
title: "VTTCue: positionAlign プロパティ"
short-title: positionAlign
slug: Web/API/VTTCue/positionAlign
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`positionAlign`** は {{domxref("VTTCue")}} インターフェイスのプロパティで、 {{domxref("VTTCue.position")}} が何に結び付けられているのかを指定するのに使用します。

## 値

文字列で、以下のいずれかの値になります。

- `"line-left"`
  - : 行の左への配置。
- `"center"`
  - : 中央への配置。
- `"line-right"`
  - : 行の右への配置。
- `"auto"`
  - : 自動的に配置が行われ、キューのテキスト配置によって、以下のように解釈されます。
    - **line-left:** テキスト配置が左の場合、キューは LTR 言語を使用しており、テキスト配置は先頭、またはキューは RTL 言語を使用しており、テキスト配置は末尾です。
    - **line-right:** テキスト配置が右の場合、キューは RTL 言語を使用しており、テキスト配置は先頭、またはキューは LTR 言語を使用しており、テキスト配置は末尾です。
    - **center:** テキスト配置位置が設定されていません。

## 例

次の例では、新しい {{domxref("VTTCue")}} を作成し、 `positionAlign` の値を `"line-right"` に設定します。この値はコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.positionAlign = "line-right";
console.log(cue1.positionAlign);

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
