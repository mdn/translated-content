---
title: DTLS (Datagram Transport Layer Security)
slug: Glossary/DTLS
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Datagram Transport Layer Security** (**DTLS**) とは、データグラムベースの通信を安全にするためのプロトコルです。ストリーム中心の Transport Layer Security ({{Glossary("TLS")}}) に基づいており、類似の水準のセキュリティを提供します。一般的なデータグラムプロトコルと同様に、 DTLS はメッセージが届く順番はおろか、メッセージが届くかどうかさえ保証しません。しかしながら、 DTLS はデータグラムプロトコルの恩恵 ―― 特に低いオーバーヘッドや、レイテンシーの縮小 ――ももたらします。

こうした特徴は DTLS が活躍する最もありふれた領域、 {{Glossary("WebRTC")}} において有用です。 WebRTC に関連するすべてのプロトコルは DTLS で通信を暗号化することが求められています。これには {{Glossary("SCTP")}}や {{Glossary("RTP", "SRTP")}}、 {{Glossary("STUN")}} も含まれます。

## 詳細情報

- [Datagram Transport Layer Security](https://ja.wikipedia.org/wiki/Datagram_Transport_Layer_Security) （ウィキペディア）
- 仕様書:
  - {{RFC(9147, "The Datagram Transport Layer Security (DTLS) Protocol Version 1.3")}}
  - {{RFC(6347, "Datagram Transport Layer Security Version 1.2")}}

- 関連する仕様書
  - {{RFC(5763, "Framework for Establishing a Secure Real-time Transport Protocol (SRTP) Security Context Using DTLS")}}
  - {{RFC(5764, "DTLS Extension to Establish Keys for the Secure Real-time Transport Protocol (SRTP)")}}
  - {{RFC(6083, "DTLS for Stream Control Transmission Protocol (SCTP)")}}
  - {{RFC(8261, "Datagram Transport Layer Security (DTLS) Encapsulation of SCTP Packets")}}
  - {{RFC(7350, "Datagram Transport Layer Security (DTLS) as Transport for Session Traversal Utilities for NAT (STUN)")}}
  - {{RFC(7925, "TLS / DTLS Profiles for the Internet of Things")}}
