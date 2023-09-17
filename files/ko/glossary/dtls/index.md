---
title: 데이터그램 전송 계층 보안 (Datagram Transport Layer Security, DTLS)
slug: Glossary/DTLS
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**데이터그램 전송 계층 보안** (**DTLS**)은 데이터그램 기반 통신을 보호하는 데 사용되는 프로토콜입니다. DTLS은 스트림 중심의 전송 계층 보안 ({{Glossary("TLS")}})을 기반으로 하며, 유사한 수준의 보안을 제공합니다. 데이터그램 프로토콜로서, DTLS는 메시지 전달 순서를 보장하지 않으며, 메시지 전달도 전혀 보장하지 않습니다. 그러나, DTLS는 특히 오버헤드가 낮아지고 대기 시간이 줄어드는 데 있어 데이터그램 프로토콜의 이점도 얻습니다.

이런 기능은 DTLS가 사용되는 가장 일반적인 분야 중 하나인 {{Glossary("WebRTC")}}에 특히 유용합니다. 모든 WebRTC 관련 프로토콜({{Glossary("SCTP")}}, {{Glossary("RTP", "SRTP")}}, 및 {{Glossary("STUN")}})은 DTLS를 사용하여 통신을 암호화해야 합니다.

## 같이 보기

- 위키백과의 [데이터그램 전송 계층 보안](https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security)
- 명세서:

  - {{RFC(9147, "The Datagram Transport Layer Security (DTLS) Protocol Version 1.3")}}
  - {{RFC(6347, "Datagram Transport Layer Security Version 1.2")}}

- 관련 명세

  - {{RFC(5763, "Framework for Establishing a Secure Real-time Transport Protocol (SRTP) Security Context Using DTLS")}}
  - {{RFC(5764, "DTLS Extension to Establish Keys for the Secure Real-time Transport Protocol (SRTP)")}}
  - {{RFC(6083, "DTLS for Stream Control Transmission Protocol (SCTP)")}}
  - {{RFC(8261, "Datagram Transport Layer Security (DTLS) Encapsulation of SCTP Packets")}}
  - {{RFC(7350, "Datagram Transport Layer Security (DTLS) as Transport for Session Traversal Utilities for NAT (STUN)")}}
  - {{RFC(7925, "TLS / DTLS Profiles for the Internet of Things")}}
