---
title: 사용자 데이터그램 프로토콜 (User Datagram Protocol, UDP)
slug: Glossary/UDP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**사용자 데이터그램 프로토콜 (User Datagram Protocol, UDP)** 은 보안과 신뢰성보다 전송 속도와 효율성이 더 중요한 경우 데이터를 전송하기 위해 {{glossary("IPv6","IP")}}과 함께 오래 사용된 {{glossary("protocol", "프로토콜")}}입니다.

UDP는 최소한의 프로토콜 메커니즘을 갖춘 간단한 [무연결 통신](https://en.wikipedia.org/wiki/Connectionless_communication) 모델을 사용합니다. UDP는 데이터 무결성을 위한 [checksums](https://en.wikipedia.org/wiki/Checksum) 및 데이터그램의 소스 및 대상에서 다양한 기능을 처리하기 위한 [포트 번호](https://en.wikipedia.org/wiki/Port_numbers)를 제공합니다. UDP에는 [핸드셰이킹](https://en.wikipedia.org/wiki/Handshaking) 대화 수단이 없으므로, 사용자 프로그램이 기본 네트워크의 [불안정성](<https://en.wikipedia.org/wiki/Reliability_(computer_networking)>)에 노출됩니다. 전달, 순서 또는 중복에 관한 보호가 보장되지 않습니다. 네트워크 인터페이스 수준에서 오류 수정 기능이 필요한 경우, 애플리케이션은 이 목적을 가지고 설계된 [전송 제어 프로토콜(Transmission Control Protocol, TCP)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) 또는 [스트림 제어 전송 프로토콜(Stream Control Transmission Protocol, SCTP)](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol)를 사용할 수 있습니다.

UDP는 오류 확인 및 수정이 필요하지 않거나 애플리케이션에서 수행되는 목적에 적합합니다. UDP는 [프로토콜 스택](https://en.wikipedia.org/wiki/Protocol_stack)에서 이러한 처리를 인한 오버헤드를 방지합니다. 시간에 민감한 애플리케이션은 UDP를 사용하는 경우가 많습니다. [실시간 시스템](https://en.wikipedia.org/wiki/Real-time_system)에서는 UDP는 옵션이 아닐 수 있는 [재전송](<https://en.wikipedia.org/wiki/Retransmission_(data_networks)>)으로 인해 지연된 패킷을 기다리는 것보다, 패킷 삭제가 더 바람직하기 때문입니다.

## 같이 보기

- 위키백과의 [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
- [명세서](https://datatracker.ietf.org/doc/html/rfc768)
