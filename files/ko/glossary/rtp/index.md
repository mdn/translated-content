---
title: RTP (Real-time Transport Protocol, 실시간 전송 프로토콜) 및 SRTP (Secure RTP, 보안 RTP)
slug: Glossary/RTP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**실시간 전송 프로토콜(Real-time Transport Protocol, RTP)** 은 다양한 미디어(오디오, 비디오)를 한 엔드포인트에서 다른 엔드포인트로 실시간으로 전송하는 방법을 설명하는 네트워크 프로토콜입니다. RTP는 비디오 스트리밍 애플리케이션, Skype와 같은 {{glossary("IP")}}를 통한 전화 통신 및 회의 기술에 적합합니다.

RTP의 보안 버전인 **SRTP**는 [WebRTC](/ko/docs/Web/API/WebRTC_API)에서 사용되며 암호화 및 인증을 사용하여 서비스 거부 공격의 위험 및 보안 침해를 최소화합니다.

RTP는 단독으로 사용되는 경우가 거의 없습니다. 대신, {{glossary("RTSP")}} 및 {{glossary("SDP")}}와 같은 다른 프로토콜과 함께 사용됩니다.

## 같이 보기

- [실시간 전송 프로토콜에 대한 소개](/ko/docs/Web/API/WebRTC_API/Intro_to_RTP)
- 위키백과의 [RTP](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol)
- {{RFC(3550)}} (프로토콜의 작동 방식을 정확하게 표시한 문서 중 하나)
