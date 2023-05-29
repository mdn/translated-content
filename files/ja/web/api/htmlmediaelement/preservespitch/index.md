---
title: HTMLMediaElement.preservesPitch
slug: Web/API/HTMLMediaElement/preservesPitch
l10n:
  sourceCommit: a36633398f827c87eb593f9647ed00bf33fd5b34
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
  <label for="rate">Adjust playback rate:</label>
  <input id="rate" type="range" min="0.25" max="3" step="0.05" value="1" />
</div>

<div>
  <label for="pitch">Preserve pitch:</label>
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

const rate = document.querySelector('#rate');
rate.addEventListener('input', () => audio.playbackRate = rate.value );

const pitch = document.querySelector('#pitch');
pitch.addEventListener('change', () => {
  if ('preservesPitch' in audio) {
    audio.preservesPitch = pitch.checked;
  } else if ('mozPreservesPitch' in audio) { //deprecated
    audio.mozPreservesPitch = pitch.checked;
  }
});
```

{{EmbedLiveSample("Setting the preservesPitch property")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement.playbackRate")}}
- [ウェブオーディオの playbackRate の説明](/ja/docs/Web/Guide/Audio_and_video_delivery/WebAudio_playbackRate_explained)
