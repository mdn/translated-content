---
title: RTCP (RTP 제어 프로토콜)
slug: Glossary/RTCP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**RTP 제어 프로토콜 (RTP Control Protocol, RTCP)** 은 {{Glossary("RTP")}} 프로토콜의 파트너입니다. RTCP는 RTP 미디어 스트리밍 세션에 대한 제어 및 통계 정보를 제공하는 데 사용됩니다.

이를 통해 기본 패킷 전달 계층을 사용하여 RTCP 신호와 RTP 및 미디어 콘텐츠를 전송하는 동시에 제어 및 통계 패킷을 미디어 스트리밍에서 논리적, 기능적으로 분리할 수 있습니다.

RTCP는 데이터 패킷을 전송하는 데, 사용되는 것과 동일한 메커니즘을 사용하여 RTP 세션의 모든 참가자에게 주기적으로 제어 패킷을 전송합니다. 해당 기본 프로토콜은 데이터 및 제어 패킷의 다중화를 처리하며 각 패킷 유형의 대해 별도의 네트워크 포트를 사용할 수 있습니다.

## 같이 보기

- [실시간 전송 프로토콜 소개](/ko/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP 제어 프로토콜](https://en.wikipedia.org/wiki/RTP_Control_Protocol)
- {{RFC(3550, "RFC 3550 Section 6", 6)}}
