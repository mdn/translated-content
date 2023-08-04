---
title: Transport Layer Security
slug: Web/Security/Transport_Layer_Security
---

TLS(Transport Layer Security)를 사용하는 연결의 보안은 암호 스위트(Ciper Suites)와 선택된 보안 파라메터에 강하게 의존합니다. 이 문서는 클라이언트와 서버 사이의 기밀성과 무결성 통신을 보장하기 위한 결정을 하도록 돕는 것이 목적입니다. 모질라 운영 보안(OpSec) 팀은 서버를 위한 참조용 설정이 있는 [위키](https://wiki.mozilla.org/Security/Server_Side_TLS)를 관리합니다..

TLS(Transport Layer Security) 프로토콜은 네트워크로 연결된 두 개의 어플리케이션 혹은 디바이스가 비밀스럽고 강건하게 정보를 교환하도록 하는 표준입니다. TLS를 사용하는 어플리케이션은 데이터의 보안과 신뢰성에 상당한 영향을 미칠 수 있는 보안 파라메터를 선택할 수 있습니다. 이 글은 TLS에 대한 개요와 컨텐츠를 보호할 때 결정해야 할 사항에 대해 설명합니다.

## 역사

HTTPS가 처음 발표 됐을 때는 넷스케이프가 도입한 기술인 SSL(Secure Sockets Layer) 2.0에 기반을 뒀습니다. 얼마되지 않아 SSL이 3.0으로 업데이트 되고 사용처가 확대되면서, 모든 웹 브라우저와 서버 사이에 상호 운영성을 보장하기 위한 공통의 표준 암호화 기술이 지정해야 하는 것이 명확해졌습니다. 국제 인터넷 표준화 기구(IETF)는 1999년 1월, TLS 1.0 {{RFC(2246)}}을 지정했습니다. 현재 TLS의 버전은 1.2 {{RFC(5246)}}입니다. 프로토콜에 대한 주요 개정 작업이 진행중이며, TLS 1.3이 거의 완성됐습니다.

> **참고:** 이제 웹이 암호화에 TLS를 사용하고 있음에도 불구하고, 많은 사람들이 아직까지 습관적으로 TLS를 "SSL"이라고 언급합니다.

TLS가 모든 저수준의 전송 프로토콜의 위에서 사용될 수 있지만, 이 프로토콜은 원래 HTTP 트래픽을 암호화하는 것이 목적이었습니다. TLS로 암호화된 HTTP는 흔히 HTTPS라고 언급됐습니다. TLS로 암호화된 웹 트래픽은 관습적으로 443 포트를 통해 교환되었으며, 암호화되지 않은 HTTP는 기본적으로 80번 포트를 사용합니다. HTTPS는 중요한 TLS 사용 사례로 남았습니다.

## HTTP보다 TLS

TLS는 주고받는 데이터의 안전과 보안을 보장하게 하는 세 가지 주요 서비스를 제공합니다.

- 인증
  - : 인증은 커뮤니케이션에 대한 각각의 당사자가 상대방이 주장하는 사람인지 검증하게 합니다.
- 암호화
  - : 데이터는 사용자 에이전트와 서버 사이에 전송이 되는 동안에 허용되지 않은 쪽에 의해 데이터가 읽혀지고 가로채지는 것을 방지하기 위해서 암호화됩니다.
- 무결성
  - : TLS는 데이터를 암호화하고 전송하고 복호화하는 동안에 정보가 없어지거나, 손실되거나, 위변조되지 않는 것을 보장합니다.

TLS 연결은 클라이언트와 서버가 공유된 암호에 동의하고, 보안 스위트(cipher suite)같은 중요한 파라메터가 협상되는 핸드쉐이크 단계로 시작합니다. Once parameters and a data exchange mode where application data, such HTTP, is exchanged.

### Cipher suites

TLS 핸드쉐이크가 협상하는 주요 파라메터들은 [cipher suite](https://en.wikipedia.org/wiki/Cipher_suite)입니다.

In TLS 1.2 and earlier, the negotiated cipher suite includes a set of cryptographic algorithms that together provide the negotiation of the shared secret, the means by which a server is authenticated, and the method that will be used to encrypt data.

The cipher suite in TLS 1.3 primarily governs the encryption of data, separate negotiation methods are used for key agreement and authentication.

Different software might use different names for the same cipher suites. For instance, the names used in OpenSSL and GnuTLS differ from those in the TLS standards. The [cipher names correspondence table](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table) on the Mozilla OpSec team's article on TLS configurations lists these names as well as information about compatibility and security levels.

### Configuring your server

서버를 올바르게 구성하는 것은 매우 중요합니다. 일반적으로, 사이트에 연결하려는 브라우저와 호환 가능한 최신 암호화 기능으로만 한정적으로 설정하는 것이 좋습니다. 올바른 설정과 관련해서 [Mozilla OpSec guide to TLS configurations](https://wiki.mozilla.org/Security/Server_Side_TLS) 에서 추가적인 정보를 얻을 수 있습니다.

To assist you in configuring your site, Mozilla provides a helpful [TLS configuration generator](https://mozilla.github.io/server-side-tls/ssl-config-generator/) that will generate configuration files for the following Web servers:

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

Using the [configurator](https://mozilla.github.io/server-side-tls/ssl-config-generator/) is a recommended way to create the configuration to meet your needs; then copy and paste it into the appropriate file on your server and restart the server to pick up the changes. The configuration file may need some adjustments to include custom settings, so be sure to review the generated configuration before using it; installing the configuration file without ensuring any references to domain names and the like are correct will result in a server that just doesn't work.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} is a major revision to TLS. TLS 1.3은 보안과 성능을 향상시키는 많은 변화들을 포함하고 있습니다. TLS 1.3의 목표는:

- TLS 1.2에서 사용하지 않고 안전하지 않은 요소들을 제거하는 것
- 디자인에 높은 수준의 보안 분석을 포함시키는 것
- 더 많은 프로토콜들의 암호화를 통해 프라이버시를 향상시키는 것
- 핸드쉐이크를 성립시키는데 소요되는 시간을 단축시키는 것

TLS 1.3은 프로토콜의 기본적인 부분들에 변화를 주지만, 이전 버전의 TLS의 기본적인 작업들을 대부분 온전히 수행할 수 있습니다. 웹에서 TLS 1.3은 아주 드문 예외적인 경우들을 제외하면 원활하게 사용될 수 있습니다.(아래 참고).

TLS 1.3의 주요 변화들은:

- TLS 1.3 핸드쉐이크는 대부분의 경우에 한번의 왕복만으로 성립되어, 핸드쉐이크 지연시간을 단축.
- 서버는 0-RTT(zero round trip time) 핸드쉐이크를 활성화시킬 수 있다. 서버에 재접속하려는 클라이언트들은 요청(request)을 즉시 보낼 수 있으며, 이를 통해 TLS 핸드쉐이크의 지연시간을 완전히 단축시킬 수 있다. 성능적인 측면에서 보면 0-RTT를 통해 얻을 수 있는 이점이 상당하지만, 리플레이 공격(replay attack)의 위험을 감수해야하므로 0-RTT를 활성화하기 전에 주의가 필요.
- TLS 1.3 supports forward-secure modes only, unless the connection is resumed or it uses a pre-shared key.
- TLS 1.3 defines a new set of cipher suites that are exclusive to TLS 1.3. These cipher suites all use modern Authenticated Encryption with Associated Data (AEAD) algorithms.
- The TLS 1.3 handshake is encrypted, except for the messages that are necessary to establish a shared secret. In particular, this means that server and client certificates are encrypted. Note however that the server identity (the server_name or SNI extension) that a client sends to the server is not encrypted.
- Numerous mechanisms have been disabled: renegotiation, generic data compression, [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA) certificates, static RSA key exchange, and key exchange with custom Diffie-Hellman (DH) groups.

Implementations of draft versions of TLS 1.3 are available. TLS 1.3 is enabled in some browsers, including the 0-RTT mode. Web servers that enable TLS 1.3 might need to adjust configuration to allow TLS 1.3 to operate successfully.

TLS 1.3 adds just one significant new use case. The 0-RTT handshake can provide significant performance gains for latency sensitive applications, like the web. Enabling 0-RTT requires additional steps, both to ensure successful deployment and to manage the risks of replay attacks.

TLS 1.3에서 재협상을 제거함으로써, 증명서(certificate)를 이용한 클라이언트 인증에 의존하는 몇몇 웹서버들이 영향을 받을 수 있습니다.어떤 웹서버들은 재협상을 통해 클라이언트 증명서의 암호화를 보장하거나, 특정 리소스가 필요할 때 재협상을 통해 클라이언트 증명서를 요청합니다. 클라이언트 증명서의 프라이버시를 위해, TLS 1.3 핸드쉐이크의 보안은 클라이언트 증명서가 암호화되었다는 것을 보장해줍니다. 그러나 소프트웨어에 변화가 필요할지도 모릅니다. TLS 1.3은 증명서를 사용한 반응형 클라이언트 인증을 지원하지만, 대중적으로 사용되지는 않습니다. HTTP/2를 지원하는 대안책들이 개발중에 있습니다.

## TLS handshake timeout values

어떤 이유에서든지 간에 TLS 핸드쉐이크가 느려지거나 반응이 없다면 사용자 입장에서는 큰 영향을 받을 수가 있습니다. 이러한 문제들을 완화시키기위해 모던 브라우저들은 핸드쉐이크 시간 만료(handshake timeout)를 도입했습니다:

- Firefox는 version 58 이후로 30초를 디폴트 값으로 가지는 TLS handshake timeout을 도입했습니다. Timeout value 값은 about:config에 있는 `network.http.tls-handshake-timeout` 를 통해 재설정 할 수 있습니다.

## See also

- The [Mozilla TLS Configurator](https://mozilla.github.io/server-side-tls/ssl-config-generator/) can help you generate configuration files for your server to secure your site.
- [Cipherli.st](https://cipherli.st/) provides of strong TLS configurations for a variety of software products.
- The Mozilla Operations Security (OpSec) team maintains a wiki page with [reference TLS configurations](https://wiki.mozilla.org/Security/Server_Side_TLS).
- [Mozilla Observatory](https://observatory.mozilla.org/), [SSL Labs](https://www.ssllabs.com/ssltest/), and [Cipherscan](https://github.com/mozilla/cipherscan) can help you test a site to see how secure its TLS configuration is.

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}
