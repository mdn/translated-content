---
title: "Navigator: mediaDevices プロパティ"
short-title: mediaDevices
slug: Web/API/Navigator/mediaDevices
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

**`Navigator.mediaDevices`** 読み取り専用プロパティは、カメラやマイク、画面共有のような接続されたメディア入力装置へのアクセスを提供する {{domxref("MediaDevices")}} オブジェクトを返します。

## 構文

```js-nolint
navigator.mediaDevices
```

### 返値

{{domxref("MediaDevices")}} シングルトンオブジェクト。例えば {{domxref("navigator.mediaDevices.getUserMedia()")}} などを呼び出すなど、通常は、このオブジェクトのメンバーを直接使用するだけです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API): すべてのメディアストリーム API についてのドキュメントのエントリーポイント。
- [WebRTC API](/ja/docs/Web/API/WebRTC_API): 密接に関連する WebRTC API についてのドキュメント。
