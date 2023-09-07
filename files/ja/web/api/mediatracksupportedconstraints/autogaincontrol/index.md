---
title: MediaTrackSupportedConstraints.autoGainControl
slug: Web/API/MediaTrackSupportedConstraints/autoGainControl
---

{{DefaultAPISidebar("Media Capture and Streams")}}

{{domxref("MediaTrackSupportedConstraints")}} 辞書の **`autoGainControl`** プロパティは読み取り専用の論理値で、 {{domxref("MediaDevices.getSupportedConstraints()")}} が返すオブジェクトに存在（`true` に設定）するならば、{{Glossary("user agent", "ユーザーエージェント")}}が **`autoGainControl`** 制約に対応しています。制約に対応していない場合、リストには含まれなくなりますので、この値が `false` になることはありません。

対応している制約の辞書は `navigator.mediaDevices.getSupportedConstraints()` を呼び出すことで取得できます。

`autoGainControl` 制約は、ブラウザーがメディアトラックのゲイン（音量）を自動的にコントロールする機能を提供しているかどうかを示します。これは明らかに、個々の機器が自動ゲインコントロールにも対応しているかどうかが条件となり、通常、マイクによって提供される機能です。

### 値

ユーザーエージェントが `aspectRatio` 制約に対応している場合、このプロパティが辞書に現れます（値は常に `true`です）。このプロパティがない場合は、対応している制約の辞書から欠落しており、その値を見ようとすると {{jsxref("undefined")}} が返されます。

## 例

この例では、ブラウザーが `autoGainControl` 制約に対応しているかどうかを表示します。

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

if (navigator.mediaDevices.getSupportedConstraints().autoGainControl) {
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
