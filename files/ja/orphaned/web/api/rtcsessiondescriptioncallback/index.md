---
title: RTCSessionDescriptionCallback
slug: orphaned/Web/API/RTCSessionDescriptionCallback
original_slug: Web/API/RTCSessionDescriptionCallback
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}RTCSessionDescriptionCallback はオファーまたはアンサーの作成が要求された時に [RTCPeerConnection](/ja/docs/) オブジェクトによって実行されます。

### 例

```
var pc = new RTCPeerConnection();
var descriptionCallback = function(offer) {
  pc.setLocalDescription(offer);
}
pc.createOffer(descriptionCallback);
```
