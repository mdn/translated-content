---
title: MediaStreamTrack.remote
slug: Web/API/MediaStreamTrack/remote
page-type: web-api-instance-property
tags:
  - Deprecated
  - MediaStreamTrack
  - Property
  - Read-only
  - Reference
  - WebRTC
browser-compat: api.MediaStreamTrack.remote
translation_of: Web/API/MediaStreamTrack/remote
---
{{APIRef("Media Capture and Streams")}}{{deprecated_header}}

**`MediaStreamTrack.remote`** は読み取り専用のプロパティであり、 JavaScript 上で、 WebRTC の MediaStreamTrack がリモートソースであるかローカルソースであるかを知ることができます。返値は論理値で、 `true` であればソースがリモートであること（すなわち {{domxref("RTCPeerConnection")}} を起源としていること）を、 `false` はソースがローカルであることを表します。

## 値

論理値です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
