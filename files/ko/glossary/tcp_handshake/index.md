---
title: TCP 핸드셰이크 (TCP handshake)
slug: Glossary/TCP_handshake
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

{{glossary('TCP','전송 제어 프로토콜(Transmission Control Protocol)')}}은 **3방향 핸드셰이크(three-way handshake)** (TCP-handshake, 3개의 메시지 핸드셰이크 및/또는 SYN-SYN-ACK로 알려져 있습니다)를 사용하여 IP 기반 네트워크를 통해 TCP/IP 연결을 설정합니다.

TCP 세션을 협상하고 시작하기 위해 TCP가 전송하는 세 가지 메시지는 각각 **SYN(SYNchronize)**, **SYN-ACK(SYNchronize-ACKnowledgement)**, **ACK(ACKnowledge)** 라는 이름을 가집니다. 세 가지 메시지 메커니즘은 서로 정보를 주고 받기를 윈하는 두 컴퓨터가 HTTP 브라우저 요청과 같은 데이터를 전송하기 전에 연결 매개변수를 협상할 수 있도록 설계되었습니다.

호스트(일반적으로 브라우저)는 TCP SYNchronize 패킷을 서버로 보냅니다. 서버는 SYN을 수신하고 SYNchronize-ACKnowledgement를 다시 보냅니다. 호스트는 서버의 SYN-ACK을 수신하고 ACKnowledge를 다시 보냅니다. 서버는 ACK를 수신하고 TCP 소켓 연결이 설정됩니다.

이 핸드셰이크 단계는 보안 연결을 생성할 때, {{glossary('DNS', 'DNS 조회')}} 이후 및 {{glossary('TLS')}} 핸드셰이크 이전에 발생합니다. 4방향 핸드셰이크를 통해 연결의 각 측면에서 독립적으로 연결을 종료할 수 있습니다.

## 같이 보기

- [전송 계층 보안 (Transport Layer Security, TLS)프로토콜](/ko/docs/Web/Security/Transport_Layer_Security)
- {{Glossary("HTTPS")}}
- 위키백과의 [전송 계층 보안](https://en.wikipedia.org/wiki/Transport_Layer_Security)
