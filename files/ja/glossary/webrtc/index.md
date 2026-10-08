---
title: WebRTC
slug: Glossary/WebRTC
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**WebRTC** (_Web Real-Time Communication_) はビデオチャット、音声通話、P2P ファイル共有を行うウェブアプリで使われる API です。

WebRTC は主に以下の要素で構成されています。

- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : 端末のカメラとマイクのアクセスを許可し、シグナルと RTC 接続を繋ぎます。
- {{domxref("RTCPeerConnection")}}
  - : ビデオチャットまたは音声通話を構成するインターフェイスです。
- {{domxref("RTCDataChannel")}}
  - : ブラウザー間の {{Glossary("P2P")}} のデータ経路を構成するメソッド。

## 関連情報

- [WebRTC](https://ja.wikipedia.org/wiki/WebRTC) - ウィキペディア
- [MDN 上の WebRTC の解説](/ja/docs/Web/API/WebRTC_API)
- [WebRTC のブラウザー対応状況](https://caniuse.com/rtcpeerconnection)<sup>(英語)</sup>
