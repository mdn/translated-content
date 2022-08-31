---
title: SourceBuffer.trackDefaults
slug: orphaned/Web/API/SourceBuffer/trackDefaults
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - SourceBuffer
  - Video
  - trackDefaults
translation_of: Web/API/SourceBuffer/trackDefaults
original_slug: Web/API/SourceBuffer/trackDefaults
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`trackDefaults`** プロパティは、`SourceBuffer` に追加されるメディアの初期化セグメント（[initialization segment](https://w3c.github.io/media-source/#init-segment)）で、種類、ラベル、言語情報が利用できない場合に使用するデフォルト値を指定します。

## 構文

```
var myTrackDefaults = sourceBuffer.trackDefaults;

sourceBuffer.trackDefaults = myTrackDefaultList;
```

### 値

{{domxref("TrackDefaultList")}} オブジェクト。

### 例外

このプロパティに新しい値を設定すると、次の例外がスローされる場合があります。

| 例外                | 説明                                                                                                                                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `InvalidStateError` | {{domxref("MediaSource.sourceBuffers")}} の {{domxref("SourceBuffer")}} オブジェクトの 1 つ以上が更新中（つまり、{{domxref("SourceBuffer.updating")}} プロパティが現在 `true`）、またはこの `SourceBuffer` が {{domxref("MediaSource")}} から取り除かれています。 |

## 例

未定

## 仕様

| 仕様                                                                                                                             | 状態                                             | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-trackdefaults', 'trackDefaults')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.trackDefaults")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
