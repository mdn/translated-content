---
title: SourceBuffer.textTracks
slug: Web/API/SourceBuffer/textTracks
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`textTracks`** 読み取り専用プロパティは、`SourceBuffer` 内に現在含まれているテキストトラックのリストを返します。

## 構文

```
var myTextTracks = sourceBuffer.textTracks;
```

### 値

{{domxref("TextTrackList")}} オブジェクト。

## 例

未定

## 仕様

| 仕様                                                                                                                     | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-texttracks', 'textTracks')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.textTracks")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
