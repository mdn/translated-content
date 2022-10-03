---
title: BlobEvent()
slug: Web/API/BlobEvent/BlobEvent
---

{{APIRef("Media Capture and Streams")}}{{seeCompatTable}}

**`BlobEvent()`** コンストラクターは、新たに生成され {{domxref("Blob")}} に関連付けられた {{domxref("BlobEvent")}} オブジェクトを返します。

## 構文

```
blobEvent = new BlobEvent({data: aSpecificBlob}[, timecode]);
```

### 引数

_`BlobEvent()` コンストラクターは、{{domxref("Event.Event", "Event()")}} からの引数も継承します。_

- `data`
  - : イベントに関連付けられた {{domxref("Blob")}}。
- `timecode` {{optional_inline}}
  - : blob イベントの初期化に使用される {{domxref("DOMHighResTimeStamp")}}。

## 仕様

| 仕様書                                                                                                                   | 策定状況                                     | 備考       |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| {{SpecName('MediaStream Recording', '#dom-blobevent-blobevent', 'BlobEvent: BlobEvent')}} | {{Spec2('MediaStream Recording')}} | 初期定義。 |

## ブラウザーの実装状況

{{Compat("api.BlobEvent.BlobEvent")}}

## 関連項目

- このメソッドが属する {{domxref("BlobEvent")}} インターフェイス。
