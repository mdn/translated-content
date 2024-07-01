---
title: MediaTrackSupportedConstraints.frameRate
slug: Web/API/MediaTrackSupportedConstraints/frameRate
---

{{DefaultAPISidebar("Media Capture and Streams")}}

{{domxref("MediaTrackSupportedConstraints")}} 辞書の **`frameRate`** プロパティは読み取り専用の論理値で、 {{domxref("MediaDevices.getSupportedConstraints()")}} が返すオブジェクトに存在（`true` に設定）するならば、{{Glossary("user agent", "ユーザーエージェント")}}が {{domxref("MediaTrackConstraints.frameRate", "frameRate")}} 制約に対応しています。

制約に対応していない場合、リストには含まれなくなりますので、この値が `false` になることはありません。

`frameRate` 制約は、新しい映像トラックの映像フレームレートの許容上限と下限を設定したり、リクエストが成功するために提供されなければならない正確なフレームレートを指定するために使用することができます。このプロパティの値を確認することで、ユーザーエージェントがフレームレートによる映像トラック構成の制約を許可しているかどうかを判断できます。このプロパティがどのように使用できるかは、[例](#例)を参照してください。

### 値

このプロパティは、ユーザーエージェントが `frameRate` 制約に対応している場合に、辞書に現れます。このプロパティが現れない場合、ユーザーエージェントはビデオトラックのフレームレートの制限を指定することを許可していません。

> **メモ:** このプロパティが存在する場合は、常に `true` になります。

## 例

この簡単な例では、映像トラックを要求する際に、ブラウザがフレームレートの制約に対応しているかどうかを調べます。

### JavaScript

```js
let result = document.getElementById("result");

if (navigator.mediaDevices.getSupportedConstraints().frameRate) {
  result.textContent = "Supported!";
} else {
  result.textContent = "Not supported!";
}
```

### HTML

```html
<div id="result"></div>
```

### CSS

```css
#result {
  font:
    14px "Arial",
    sans-serif;
}
```

### 結果

ブラウザーが `frameRate` 制約に対応しているかどうかを示す出力は、次のとおりです。

{{ EmbedLiveSample('Examples', 600, 80) }}

この例は些細なものですが、「対応している」対「対応していない」という単純な出力をコードに置き換えることで、ユーザーと共有したい、あるいは一緒に作業したい視聴覚情報を表示するための代替方法を提供することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Streams_API)
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
