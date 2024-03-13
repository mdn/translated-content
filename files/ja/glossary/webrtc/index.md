---
title: WebRTC
slug: Glossary/WebRTC
---

{{GlossarySidebar}}

**WebRTC** (_Web Real-Time Communication_)はビデオチャット、音声通話、P2P ファイル共有を行うウェブアプリで使われる API です。

WebRTC は主に以下の要素で構成されています:

- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : 端末のカメラとマイクのアクセスを許可し、シグナルと RTC 接続を繋ぎます。
- {{domxref("RTCPeerConnection")}}
  - : ビデオチャットまたは音声通話を構成するインターフェイスです。
- {{domxref("RTCDataChannel")}}
  - : ブラウザー間の{{Glossary("P2P")}} のデータ経路を構成するメソッド。

## 詳細情報

- Wikipedia 上の記事「[WebRTC](https://ja.wikipedia.org/wiki/WebRTC)」
- [MDN 上の WebRTC の解説](/ja/docs/Web/API/WebRTC_API)
- [WebRTC のブラウザーサポート状況](http://caniuse.com/#feat=rtcpeerconnection)
