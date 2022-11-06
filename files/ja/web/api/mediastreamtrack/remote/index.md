---
title: MediaStreamTrack.remote
slug: Web/API/MediaStreamTrack/remote
---

{{APIRef("Media Capture and Streams")}}{{deprecated_header}}

**`MediaStreamTrack.remote`** は読み取り専用のプロパティであり、 JavaScript 上で、 WebRTC の MediaStreamTrack がリモートソースであるかローカルソースであるかを知ることができます。返値は論理値で、 `true` であればソースがリモートであること（すなわち {{domxref("RTCPeerConnection")}} を起源としていること）を、 `false` はソースがローカルであることを表します。

## 値

論理値です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)
