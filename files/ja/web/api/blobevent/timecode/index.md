---
title: BlobEvent.timecode
slug: Web/API/BlobEvent/timecode
---

{{SeeCompatTable}}{{APIRef("Media Capture and Streams")}}

{{domxref("BlobEvent")}} インタフェースの **`timecode`** 読み取り専用プロパティは、データ内の最初のチャンクのタイムスタンプと、このレコーダによって生成された最初の `BlobEvent` 内の最初のチャンクのタイムスタンプとの差を示す {{domxref("DOMHighResTimeStamp")}} です。 最初に生成された `BlobEvent` の `timecode` はゼロである必要はないことに注意してください。

## 構文

```
var timecode = BlobEvent.timecode
```

### 値

{{domxref("DOMHighResTimeStamp")}}。

## 仕様

| 仕様書                                                                                               | 策定状況                                     | 備考       |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------- |
| {{SpecName('MediaStream Recording','#dom-blobevent-timecode','timecode')}} | {{Spec2('MediaStream Recording')}} | 初期定義。 |

## ブラウザーの実装状況

{{Compat("api.BlobEvent.timecode")}}
