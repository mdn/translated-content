---
title: MediaTrackSupportedConstraints.noiseSuppression
slug: Web/API/MediaTrackSupportedConstraints/noiseSuppression
---

{{DefaultAPISidebar("Media Capture and Streams")}}

{{domxref("MediaTrackSupportedConstraints")}} 辞書の **`noiseSuppression`** プロパティは読み取り専用の論理値で、 {{domxref("MediaDevices.getSupportedConstraints()")}} が返すオブジェクトに存在（`true` に設定）するならば、{{Glossary("user agent", "ユーザーエージェント")}}が **`noiseSuppression`** 制約に対応しています。制約に対応していない場合、リストには含まれなくなりますので、この値が `false` になることはありません。

対応している制約の辞書は `navigator.mediaDevices.getSupportedConstraints()` を呼び出すことで取得できます。

`noiseSuppression` 制約は、ブラウザーがメディアトラックのゲイン（音量）を自動的に制御する機能を提供しているかどうかを示します。これは明らかに、個々の機器が同様に自動ゲインコントロールに対応しているかどうかに依存しています。

### 値

ユーザーエージェントが `noiseSuppression` 制約に対応している（すなわち、音声トラックのノイズ抑制に対応している）場合、このプロパティが辞書に現れます（値は常に `true`です）。このプロパティがない場合は、対応している制約の辞書から欠落しており、その値を見ようとすると {{jsxref("undefined")}} が返されます。

## 例

この例では、ブラウザーが `noiseSuppression` 制約に対応しているかどうかを表示します。

```html hidden
<div id="result"></div>
```

```css hidden
#result {
  font:
    14px "Arial",
    sans-serif;
}
```

```js
let result = document.getElementById("result");

if (navigator.mediaDevices.getSupportedConstraints().noiseSuppression) {
  result.textContent = "Supported!";
} else {
  result.textContent = "Not supported!";
}
```

### 結果

{{ EmbedLiveSample('Examples', 600, 80) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Streams_API)
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
