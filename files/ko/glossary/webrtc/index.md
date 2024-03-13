---
title: WebRTC
slug: Glossary/WebRTC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**WebRTC** ('Web Real-Time Communication') {{Glossary("API")}}는 영상 채팅, 음성 통화, 그리고 P2P 파일 공유 웹 어플리케이션에서 사용할 수 있습니다.

WebRTC 의 3가지 주요 부분.

- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : 기기의 카메라와 마이크를 같이 혹은 개별로 접속권한을 부여받으며, RTC connection에 신호를 연결할 수 있습니다.
- {{domxref("RTCPeerConnection")}}
  - : 비디오 채팅 또는 음성 통화를 구성하기 위한 인터페이스입니다.
- {{domxref("RTCDataChannel")}}
  - : 브라우저간에 {{Glossary("P2P", "peer-to-peer")}} 데이터 경로 설정방법을 제공합니다.

## 같이 보기

- 위키백과의 [WebRTC](https://ko.wikipedia.org/wiki/WebRTC)
- [MDN의 WebRTC 자습서](/ko/docs/Web/API/WebRTC_API)
- [WebRTC 브라우저 지원](http://caniuse.com/rtcpeerconnection)
