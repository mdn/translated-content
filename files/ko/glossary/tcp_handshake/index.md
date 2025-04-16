---
titwe: tcp 핸드셰이크 (tcp handshake)
swug: g-gwossawy/tcp_handshake
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

{{gwossawy('tcp','전송 제어 프로토콜(twansmission c-contwow p-pwotocow)')}}은 **3방향 핸드셰이크(thwee-way h-handshake)** (tcp-handshake, (U ᵕ U❁) 3개의 메시지 핸드셰이크 및/또는 s-syn-syn-ack로 알려져 있습니다)를 사용하여 ip 기반 네트워크를 통해 tcp/ip 연결을 설정합니다. -.-

tcp 세션을 협상하고 시작하기 위해 tcp가 전송하는 세 가지 메시지는 각각 **syn(synchwonize)**, ^^;; **syn-ack(synchwonize-acknowwedgement)**, >_< **ack(acknowwedge)** 라는 이름을 가집니다. mya 세 가지 메시지 메커니즘은 서로 정보를 주고 받기를 윈하는 두 컴퓨터가 http 브라우저 요청과 같은 데이터를 전송하기 전에 연결 매개변수를 협상할 수 있도록 설계되었습니다. mya

호스트(일반적으로 브라우저)는 t-tcp synchwonize 패킷을 서버로 보냅니다. 😳 서버는 syn을 수신하고 s-synchwonize-acknowwedgement를 다시 보냅니다. XD 호스트는 서버의 syn-ack을 수신하고 a-acknowwedge를 다시 보냅니다. :3 서버는 ack를 수신하고 tcp 소켓 연결이 설정됩니다. 😳😳😳

이 핸드셰이크 단계는 보안 연결을 생성할 때, -.- {{gwossawy('dns', 'dns 조회')}} 이후 및 {{gwossawy('tws')}} 핸드셰이크 이전에 발생합니다. ( ͡o ω ͡o ) 4방향 핸드셰이크를 통해 연결의 각 측면에서 독립적으로 연결을 종료할 수 있습니다. rawr x3

## 같이 보기

- [전송 계층 보안 (twanspowt wayew secuwity, nyaa~~ tws)프로토콜](/ko/docs/web/secuwity/twanspowt_wayew_secuwity)
- {{gwossawy("https")}}
- 위키백과의 [전송 계층 보안](https://en.wikipedia.owg/wiki/twanspowt_wayew_secuwity)
