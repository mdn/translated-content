---
title: WebRTC 프로토콜 소개
slug: Web/API/WebRTC_API/Protocols
---

{{DefaultAPISidebar("WebRTC")}}

이 글은 WebRTC API에 대한 프로토콜을 소개하기 위해 작성 되었습니다.

## ICE

[Interactive Connectivity Establishment (ICE)](http://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) 는 브라우저가 peer를 통한 연결이 가능하도록 하게 해주는 프레임워크입니다. Peer A에서 Peer B까지 단순하게 연결하는 것으로는 작동하지 않는 것에 대한 이유는 많이 있습니다. 연결을 시도하는 방화벽을 통과해야하기도 하고, 단말에 퍼블릭 IP가 없다면 유일한 주소값을 할당해야할 필요도 있으며 라우터가 peer간의 직접연결을 허용하지 않을 때에는 데이터를 릴레이해야할 경우도 있습니다. ICE는 이러한 작업을 수행하기 위해 STUN과 TURN 서버 둘다 혹은 하나의 서버를 사용합니다.

## STUN

[Session Traversal Utilities for **NAT** (STU**N**)](http://en.wikipedia.org/wiki/STUN) (단축어 안의 단축어) 는 당신의 공개 주소(public address)를 발견하거나 peer간의 직접 연결을 막는 등의 라우터의 제한을 결정하는 프로토콜입니다.

클라이언트는 인터넷을 통해 클라이언트의 공개주소와 라우터의 NAT 뒤에 있는 클라이언트가 접근가능한지에 대한 답변을 위한 요청을 STUN서버에 보냅니다.

![An interaction between two users of a WebRTC application involving a STUN server.](webrtc-stun.png)

## NAT

[Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) 는 단말에 공개 IP주소를 할당하기 위해 사용됩니다. 라우터는 공개 IP 주소를 갖고 있고 모든 단말들은 라우터에 연결되어 있으며 비공개 IP주소(private IP Address)를 갖고 있습니다. 요청은 단말의 비공개 주소로부터 라우터의 공개 주소와 유일한 포트를 기반으로 번역될 것입니다. 이러한 경유로 각각의 단말이 유일한 공개 IP 없이 인터넷 상에서 검색 될 수 있는 방법입니다.

어떠한 라우터들은 네트워크에 연결할수 있는 제한을 갖고 있습니다. 따라서 STUN서버에 의해 공개 IP주소를 발견한다고 해도 모두가 연결을 할수 있다는 것은 아닙니다. 이를 위해 TURN이 필요합니다.

## TURN

몇몇의 라우터들은 Symmetric NAT이라고 불리우는 제한을 위한 NAT을 채용하고 있습니다. 이 말은 peer들이 오직 이전에 연결한 적 있는 연결들만 허용한다는 것입니다.

[Traversal Using Relays around NAT (TURN)](http://en.wikipedia.org/wiki/TURN) 은 TURN 서버와 연결하고 모든 정보를 그 서버에 전달하는 것으로 Symmetric NAT 제한을 우회하는 것을 의미합니다. 이를 위해 TURN 서버와 연결을 한 후 모든 peer들에게 저 서버에 모든 패킷을 보내고 다시 나에게 전달해달라고 해야 합니다. 이것은 명백히 오버헤드가 발생하므로 이 방법은 다른 대안이 없을 경우만 사용하게 됩니다.

![An interaction between two users of a WebRTC application involving STUN and TURN servers.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](http://en.wikipedia.org/wiki/Session_Description_Protocol) 은 해상도나 형식, 코덱, 암호화등의 멀티미디어 컨텐츠의 연결을 설명하기 위한 표준입니다. 이러한 것이 두개의 peer가 다른 한쪽이 데이터가 전송되고 있다는 것을 알게 해줍니다. 이것은 기본적으로 미디어 컨텐츠 자체가 아닌 컨텐츠에 대한 메타데이터 설명이 됩니다.

기술적으로 보자면 SDP 는 프로토콜이 아닙니다. 그러나 데이터 포멧은 디바이스간의 미디어를 공유하기 위한 연결을 설명하기 위해 사용됩니다.

SDP의 문서화는 다른 웹상에서도 잘되어 있으므로 이 문서에서는 간단히 소개하는 것으로 마무리 짓도록 하겠습니다.

### 구조

SDP는 한줄 이상의 UTF-8 텍스트로 구성됩니다. 이 텍스트의 시작은 한글자로 구성되며 한글자 뒤에 등호기호 (`"="`)가 옵니다. 그리고 그 뒤에는 포멧에 맞게 값이나 설명이 적혀있습니다. 한글자로 시작되는 그 글자는 일반적으로 "letter-lines"를 뜻합니다. 예를들어 미디어 설명을 제공하는 것이라면 `"m"` 이라고 적어두고 이것은 m-lines을 뜻합니다.

### 자세히

SDP에 대해 더 알고 싶으시다면 아래 유용한 자료들이 있습니다.

- 명세: {{RFC(4566, "SDP: Session Description Protocol")}}
- [IANA registry of SDP parameters](https://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml)
