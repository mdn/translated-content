---
title: SourceBuffer.timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`timestampOffset`** プロパティは、`SourceBuffer` に追加されるメディアセグメント内のタイムスタンプに適用されるオフセットを制御します。

`timestampOffset` の初期値は 0 です。

## 構文

```
var myOffset = sourceBuffer.timestampOffset;

sourceBuffer.timestampOffset = 2.5;
```

### 値

オフセット量が秒単位で表される double 型。

### 例外

このプロパティに新しい値を設定すると、次の例外がスローされる場合があります。

| 例外                | 説明                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError` | {{domxref("MediaSource.sourceBuffers")}} の {{domxref("SourceBuffer")}} オブジェクトの 1 つ以上が更新中（つまり、{{domxref("SourceBuffer.updating")}} プロパティが現在 `true`）、`SourceBuffer` 内のメディアセグメントが現在解析中、またはこの `SourceBuffer` が {{domxref("MediaSource")}} から取り除かれています。 |

## 例

未定

## 仕様

| 仕様                                                                                                                                 | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-timestampoffset', 'timestampOffset')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.timestampOffset")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
