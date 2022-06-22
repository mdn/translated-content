---
title: MediaStreamTrack.remote
slug: Web/API/MediaStreamTrack/remote
page-type: web-api-instance-property
tags:
  - 非推奨
  - MediaStreamTrack
  - プロパティ
  - 読み取り専用
  - リファレンス
  - WebRTC
browser-compat: api.MediaStreamTrack.remote
translation_of: Web/API/MediaStreamTrack/remote
---
{{APIRef("Media Capture and Streams")}}{{deprecated_header}}

**`MediaStreamTrack.remote`** は読み取り専用のプロパティで、 JavaScript 上で、 WebRTC の MediaStreamTrack がリモートソースであるかローカルソースであるかを知ることができます。返値は論理値で、 `true` であればソースがリモートであること（すなわち {{domxref("RTCPeerConnection")}} を起源としていること）を、 `false` はソースがローカルであることを表します。

## 構文

```js
var bool = track.remote;
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
