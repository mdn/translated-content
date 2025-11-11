---
title: "HTMLMediaElement: preservesPitch プロパティ"
short-title: preservesPitch
slug: Web/API/HTMLMediaElement/preservesPitch
l10n:
  sourceCommit: c3be131cfd2c33822cb36b21cb4fca78980a6b4e
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.preservesPitch`** プロパティは、 {{domxref("HTMLMediaElement.playbackRate")}} の設定で行われた再生速度の変更を補償するために、ブラウザーが音声の音程を調整すべきかどうかを決定します。

## 値

論理値で、既定値は `true` です。

## 例

### preservesPitch プロパティの設定

この例には、 {{HTMLElement("audio")}} 要素、再生速度を制御する範囲コントロール、`preservesPitch`を設定するチェックボックスがあります。

音声を再生し、再生速度を調整し、チェックボックスを有効・無効にしてみてください。

```html
<audio
  controls
  src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>

<div>
  <label for="rate">再生レートを調整:</label>
  <input id="rate" type="range" min="0.25" max="3" step="0.05" value="1" />
</div>

<div>
  <label for="pitch">ピッチを維持:</label>
  <input type="checkbox" id="pitch" name="pitch" checked />
</div>
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

```js
const audio = document.querySelector("audio");
document.getElementById("rate").addEventListener("change", (e) => {
  audio.playbackRate = e.target.value;
});
document.getElementById("pitch").addEventListener("change", (e) => {
  audio.preservesPitch = e.target.checked;
});
```

{{EmbedLiveSample("Setting the preservesPitch property")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement.playbackRate")}}
- [ウェブオーディオの playbackRate の説明](/ja/docs/Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained)
