---
title: "MediaRecorder: isTypeSupported() 静的メソッド"
short-title: isTypeSupported()
slug: Web/API/MediaRecorder/isTypeSupported_static
l10n:
  sourceCommit: bd9c6885357f0c42e3445cac6a47d04bc35c89e6
---

{{APIRef("MediaStream Recording")}}

**`isTypeSupported()`** は {{domxref("MediaRecorder")}} インターフェイスの静的メソッドで、指定された MIME メディア種別がこのユーザーエージェントが収録できるものであれば `true` となる論理値 ({{jsxref("Boolean")}}) を返します。

## 構文

```js-nolint
MediaRecorder.isTypeSupported(mimeType)
```

### 引数

- `mimeType`
  - : チェックする MIME メディア種別。

### 返値

論理値 ({{jsxref("Boolean")}}) で、この {{domxref("MediaRecorder")}} の実装が、指定された MIME タイプの {{domxref("Blob")}} オブジェクトを収録できる場合は `true` になります。
収録および符号化プロセスをサポートするのに十分なリソースがない場合、収録が失敗する可能性はまだあります。
値が `false` の場合、ユーザーエージェントは指定された形式を収録することができません。

## 例

```js
const types = [
  "video/webm",
  "audio/webm",
  "video/webm;codecs=vp8",
  "video/webm;codecs=daala",
  "video/webm;codecs=h264",
  "audio/webm;codecs=opus",
  "video/mp4",
  "video/mp4;codecs=avc1.64003E,mp4a.40.2",
  "video/mp4;codecs=avc1.64003E,opus",
  "video/mp4;codecs=avc3.64003E,mp4a.40.2",
  "video/mp4;codecs=avc3.64003E,opus",
  "video/mp4;codecs=hvc1.1.6.L186.B0,mp4a.40.2",
  "video/mp4;codecs=hvc1.1.6.L186.B0,opus",
  "video/mp4;codecs=hev1.1.6.L186.B0,mp4a.40.2",
  "video/mp4;codecs=hev1.1.6.L186.B0,opus",
  "video/mp4;codecs=av01.0.19M.08,mp4a.40.2",
  "video/mp4;codecs=av01.0.19M.08,opus",
];

for (const type of types) {
  console.log(
    `${type} に対応している? ${
      MediaRecorder.isTypeSupported(type) ? "たぶん!" : "いいえ :("
    }`,
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API)
- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブ上のメディア種別や形式のガイド](/ja/docs/Web/Media/Guides/Formats)
- [よくあるメディア種別のコーデック](/ja/docs/Web/Media/Guides/Formats/codecs_parameter)
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaCapabilities")}}
