---
title: MediaRecorder.isTypeSupported()
slug: Web/API/MediaRecorder/isTypeSupported_static
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.isTypeSupported()`** は静的メソッドで、指定された MIME タイプがこのユーザーエージェントが収録できるものであれば `true` となる論理値を返します。

## 構文

```js-nolint
isTypeSupported(mimeType)
```

### 引数

- `mimeType`
  - : チェックする MIME タイプ。

### 返値

この {{domxref("MediaRecorder")}} の実装が指定された MIME タイプの {{domxref("Blob")}} オブジェクトを収録できる場合は `true` になります。 収録および符号化プロセスをサポートするのに十分なリソースがない場合、収録が失敗する可能性はまだあります。 値が `false` の場合、ユーザーエージェントは指定された形式を収録することができません。

## 例

```js
const types = [
  "video/webm",
  "audio/webm",
  "video/webm;codecs=vp8",
  "video/webm;codecs=daala",
  "video/webm;codecs=h264",
  "audio/webm;codecs=opus",
  "video/mpeg",
];

for (const type of types) {
  console.log(`${type} に対応している? ${MediaRecorder.isTypeSupported(type) ? "たぶん!" : "いいえ :("}`);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API)
- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブ上のメディア種別や形式のガイド](/ja/docs/Web/Media/Formats)
- [よくあるメディア種別の "codecs" 引数](/ja/docs/Web/Media/Formats/codecs_parameter)
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaCapabilities")}}
