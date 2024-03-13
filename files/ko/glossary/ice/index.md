---
title: ICE
slug: Glossary/ICE
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**대화형 연결 구축 (Interactive Connectivity Establishment, ICE)** 은 네트워크 토폴로지에 관계없이(일반적으로 오디오 및 비디오 채탱용) 두 피어를 연결하기 위해 (다른 기술 중에서) {{glossary("WebRTC")}}에서 사용하는 프레임워크입니다. 이 프로토콜을 사용하면 두 피어가 모두 네트워크 주소 변환 (Network Address Translator, {{glossary("NAT")}})를 사용하여 해당 로컬 네트워크의 다른 장치와 글로벌 IP 주소를 공유하는 경우에도 서로 연결을 찾고 설정할 수 있습니다.

ICE 프레임워크 알고리즘은 두 피어를 연결하기 위해 지연 시간이 가장 짧은 경로를 찾고, 아래 옵션을 순서대로 시도합니다.

1. 직접 UDP 연결 (이 경우에만 {{glossary("STUN")}} 서버는 피어의 네트워크 연결 주소를 찾는 데 사용됩니다)
2. HTTP 포트를 통한 직접 TCP 연결
3. HTTPS 포트를 통한 직접 TCP 연결
4. relay/{{glossary("TURN")}} 서버를 통한 간접 연결 (직접 연결이 실패한 경우. 예를 들어, 한 피어가 NAT 통과를 차단하는 방화벽 뒤에 있는 경우)

## 같이 보기

- ICE를 사용하는 주요 웹 관련 프로토콜인 [WebRTC](/ko/docs/Web/API/WebRTC_API)
- [WebRTC 프로토콜](/ko/docs/Web/API/WebRTC_API/Protocols)
- ICE에 대한 IETF 명세서인 {{rfc("8445")}}
- ICE 후보를 나타내는 인터페이스인 {{domxref("RTCIceCandidate")}}
