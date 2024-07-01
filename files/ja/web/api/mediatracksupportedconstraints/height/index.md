---
title: MediaTrackSupportedConstraints.height
slug: Web/API/MediaTrackSupportedConstraints/height
---

{{DefaultAPISidebar("Media Capture and Streams")}}

{{domxref("MediaTrackSupportedConstraints")}} 辞書の **`height`** プロパティは読み取り専用の論理値で、 {{domxref("MediaDevices.getSupportedConstraints()")}} が返すオブジェクトに存在（`true` に設定）するならば、{{Glossary("user agent", "ユーザーエージェント")}}が `height` 制約に対応しています。制約に対応していない場合、リストには含まれなくなりますので、この値が `false` になることはありません。

対応している制約の辞書は `navigator.mediaDevices.getSupportedConstraints()` を呼び出すことで取得できます。

### 値

ユーザーエージェントが `height` 制約に対応している場合、このプロパティが辞書に現れます（値は常に `true`です）。このプロパティがない場合は、対応している制約の辞書から欠落しており、その値を見ようとすると {{jsxref("undefined")}} が返されます。

## 例

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

if (navigator.mediaDevices.getSupportedConstraints().height) {
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
