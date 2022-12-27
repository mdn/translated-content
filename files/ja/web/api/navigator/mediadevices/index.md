---
title: Navigator.mediaDevices
slug: Web/API/Navigator/mediaDevices
---

{{APIRef("Media Capture and Streams")}}

**`Navigator.mediaDevices`** 読み取り専用プロパティは、カメラやマイク、画面共有のような接続されたメディア入力装置へのアクセスを提供する {{domxref("MediaDevices")}} オブジェクトを返します。

## 構文

```
var mediaDevices = navigator.mediaDevices;
```

### 返値

{{domxref("MediaDevices")}} シングルトンオブジェクト。例えば {{domxref("navigator.mediaDevices.getUserMedia()")}} などを呼び出すなど、通常は、このオブジェクトのメンバーを直接使用するだけです。

## 仕様書

| 仕様書                                                                                                       | 状態                                 | 備考     |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Media Capture', '#mediadevices', 'NavigatorUserMedia.mediaDevices')}} | {{Spec2('Media Capture')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.mediaDevices")}}

## 関連情報

- [Media Capture and Streams API](/ja/docs/Web/API/Media_Streams_API): すべての media stream API についてのドキュメントのエントリーポイント。
- [WebRTC API](/ja/docs/Web/API/WebRTC_API): 密接に関連する WebRTC API についてのドキュメント。
