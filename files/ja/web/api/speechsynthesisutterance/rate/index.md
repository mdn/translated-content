---
title: "SpeechSynthesisUtterance: rate プロパティ"
short-title: rate
slug: Web/API/SpeechSynthesisUtterance/rate
l10n:
  sourceCommit: bdb42cfc961631d82d44fadc3740a2bc2f0055ac
---

{{APIRef("Web Speech API")}}

**`rate`** は {{domxref("SpeechSynthesisUtterance")}} インターフェイスのプロパティで、発話をする速度を取得および設定します。

未設定の場合、既定値の 1 が使用されます。

## 値

浮動小数点数でレート値を表します。
範囲は 0.1 （最低値）から 10 （最高値）で、既定値では 1 が現在のプラットフォームや音声のレートとなり、通常の会話速度に相当します。
他の値はこの値に対する相対的なパーセント値として動作するため、例えば 2 は 2 倍の速さ、0.5 は半分の速さなどです。

音声合成エンジンや音声によっては、最小レートや最大レートがさらに制約される場合があります。
[SSML](https://www.w3.org/TR/speech-synthesis/) を使用している場合、この値はマークアップの[韻律タグ](https://www.w3.org/TR/speech-synthesis/#S3.2.4)によって上書きされます。

## 例

### 再生レートの調整

この例では、スライダーを使って再生速度を調整し、「再生」ボタンで発話を再生します。

#### HTML

```html
<p id="text">暗く嵐の夜でした。</p>

<div id="rate-control">
  <label for="rate">Rate:</label>
  <input type="range" min="0.5" max="2" value="1" step="0.1" id="rate" />
</div>

<button id="play">再生</button>
```

#### CSS

```css
body {
  font-family: sans-serif;
}

#rate-control {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}
```

#### JavaScript

```js
const synth = window.speechSynthesis;

const text = document.querySelector("#text");
const play = document.querySelector("#play");
const rate = document.querySelector("#rate");

function speak() {
  if (synth.speaking) {
    synth.cancel();
  }
  const utterThis = new SpeechSynthesisUtterance(text.textContent);
  utterThis.addEventListener("error", () => {
    console.error("SpeechSynthesisUtterance error");
  });
  utterThis.rate = rate.value;
  synth.speak(utterThis);
}

play.addEventListener("click", speak);
```

#### 出力

{{EmbedLiveSample("Adjusting playback rate")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
