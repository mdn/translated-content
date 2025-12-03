---
title: 전송 계층 보안
slug: Web/Security/Defenses/Transport_Layer_Security
original_slug: Web/Security/Transport_Layer_Security
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}

전송 계층 보안(TLS)을 사용하는 모든 연결의 보안은 선택된 암호화 스위트와 보안 매개변수에 강하게 의존합니다. 이 문서의 목표는 클라이언트와 서버 간 통신의 기밀성과 무결성을 보장하기 위한 결정을 내리는 데 도움을 주는 것입니다. Mozilla 운영 보안(OpSec) 팀은 서버를 위한 참조 설정이 포함된 [위키 항목을 유지 관리합니다](https://wiki.mozilla.org/Security/Server_Side_TLS).

전송 계층 보안(TLS) 프로토콜은 네트워크로 연결된 두 개의 애플리케이션이나 장치가 비공개로 강력하게 정보를 교환할 수 있도록 하는 표준입니다. TLS를 사용하는 애플리케이션은 데이터의 보안과 안정성에 상당한 영향을 미칠 수 있는 보안 매개변수를 선택할 수 있습니다. 이 문서에서는 TLS에 대한 개요와 콘텐츠를 보호할 때 내려야 하는 결정의 종류를 제공합니다.

## 역사

HTTPS가 처음 소개되었을 땐 Netscape가 도입한 기술인 보안 소켓 계층(SSL) 2.0이 기반이었습니다. 얼마 지나지 않아 SSL 3.0으로 업데이트되었고, 사용이 확대됨에 따라 모든 웹 브라우저와 서버 간의 상호 운용성을 보장하기 위해 공통 표준 암호화 기술을 지정해야 한다는 것이 분명해졌습니다. [Internet Engineering Task Force](https://www.ietf.org/) (IETF)는 1999년 1월 {{RFC(2246)}}에서 TLS 1.0을 기입했습니다. TLS의 현재 버전은 1.3({{RFC(8446)}})입니다.

이제 웹이 암호화에 TLS를 사용하고 있음에도 불구하고, 많은 사람들이 아직까지 습관적으로 TLS를 "SSL"이라고 언급합니다.

TLS가 모든 저수준의 전송 프로토콜의 위에서 사용될 수 있지만, 이 프로토콜은 원래 HTTP 트래픽을 암호화하는 것이 목적이었습니다. TLS로 암호화된 HTTP는 흔히 {{Glossary("HTTPS")}}라고 합니다. TLS로 암호화된 웹 트래픽은 관습적으로 443 포트를 통해 교환되었으며, 암호화되지 않은 HTTP는 기본적으로 80번 포트를 사용합니다. HTTPS는 중요한 TLS 사용 사례로 남았습니다.

## HTTP 위에 TLS

TLS는 주고받는 데이터의 안전과 보안을 보장하게 하는 세 가지 주요 서비스를 제공합니다.

- 인증
  - : 인증을 통해 통신의 각 당사자는 상대방이 자신이 주장하는 사람인지 확인할 수 있습니다.
- 암호화
  - : 권한이 없는 사람이 데이터를 읽고 해석하는 것을 방지하기 위해 사용자 에이전트와 서버 사이에 데이터가 전송되는 동안 데이터가 암호화됩니다.
- 무결성
  - : TLS는 데이터를 암호화, 전송, 복호화하는 동안에 정보가 없어지거나, 손실되거나, 변조되지 않는 것을 보장합니다.

TLS 연결은 클라이언트와 서버가 공유 암호에 동의하고 암호화 스위트와 같은 중요한 매개변수가 협상되는 핸드쉐이크 단계로 시작됩니다. HTTP와 같은 애플리케이션 데이터가 교환되는 매개변수와 데이터 교환 모드입니다.

### 암호화 스위트

TLS 핸드쉐이크가 협상하는 주요 파라메터들은 [암호화 스위트](https://en.wikipedia.org/wiki/Cipher_suite)입니다.

TLS 1.2와 그 이전 버전에서 협상된 암호화 스위트는 공유 암호 협상, 서버가 인증되는 방법, 데이터를 암호화 하는데 사용할 방법을 함께 제공하는 암호화 알고리즘의 집합을 포함합니다.

TLS 1.3의 암호와 스위트는 주로 데이터 암호화를 관리하며 키 계약과 인증에는 별도의 협상 방법이 사용됩니다.

서로 다른 소프트웨어는 같은 암호화 스위트에 대해 서로 다른 이름을 사용할 수 있습니다. 예를 들어 OpenSSL과 GnuTLS에서 사용되는 이름은 TLS 표준에서 사용되는 이름과 다릅니다. TLS 설정에 대한 Mozilla OpSec 팀 문서에 있는 [암호 이름 대응 표](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table)에는 이러한 이름과 호환성, 보안 수준에 대한 정보가 나열되어 있습니다.

### 서버 설정하기

서버를 올바르게 구성하는 것은 매우 중요합니다. 일반적으로, 사이트에 연결하려는 브라우저와 호환 가능한 최신 암호화 기능으로만 한정적으로 설정하는 것이 좋습니다. 올바른 설정과 관련해서 [Mozilla OpSec guide to TLS configurations](https://wiki.mozilla.org/Security/Server_Side_TLS) 에서 추가적인 정보를 얻을 수 있습니다.

사이트 구성을 돕기 위해 Mozilla는 다음 웹 서버에 대한 설정 파일을 생성하는 유용한 [TLS 설정 생성기](https://mozilla.github.io/server-side-tls/ssl-config-generator/)를 제공합니다.

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

여러분의 필요에 맞게 설정을 생성하려면 [설정기](https://mozilla.github.io/server-side-tls/ssl-config-generator/)를 사용하는 것이 좋습니다. 그런 다음 복사하여 서버의 해당 파일에 붙여넣고 서버를 다시 시작하여 변경 사항을 적용하십시오. 설정 파일은 사용자 정의 설정을 포함하기 위해 약간의 조정이 필요할 수 있으므로 사용하기 전에 생성된 설정을 검토해야 합니다. 도메인 이름 등에 대한 참조가 올바른지 확인하지 않고 설정 파일을 설치하면 서버가 작동하지 않습니다.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}}은 TLS의 주요 개정판입니다. TLS 1.3에는 보안과 성능을 개선하는 수많은 변경 사항이 포함되어 있습니다. TLS 1.3의 목표는 다음과 같습니다.

- TLS 1.2에서 사용하지 않고 안전하지 않은 요소들을 제거
- 설계에 강력한 보안 분석을 포함
- 더 많은 프로토콜을 암호화하여 개인 정보를 개선
- 핸드쉐이크를 성립시키는데 소요되는 시간을 단축

TLS 1.3은 프로토콜 기본 사항의 많은 부분을 변경하지만, 이전 TLS 버전의 거의 모든 기본 기능을 유지합니다. 웹의 경우 몇 가지 드문 예외를 제외하고 호환성에 영향을 주지 않으면서 TLS 1.3을 활성화할 수 있습니다(아래 참조).

TLS 1.3의 주요 변화는 다음과 같습니다.

- TLS 1.3 핸드쉐이크는 대부분의 경우에 한번의 왕복만으로 완려되어 핸드쉐이크 지연시간이 줄어듭니다.
- 서버는 0-RTT(무 왕복 시간) 핸드쉐이크를 활성화할 수 있습니다. 서버에 다시 연결하는 클라이언트는 즉시 요청을 보낼 수 있으므로 TLS 핸드쉐이크의 대기 시간이 완전히 제거됩니다. 0-RTT의 성능 향상이 상당할 수 있지만 재생 공격의 위험이 있으므로 이 기능을 활성화하기 전에 약간의 주의가 필요합니다.
- TLS 1.3은 연결이 재개되거나 사전 공유 키를 사용하지 않는 한 정방향 보안 모드만 지원합니다.
- TLS 1.3은 TLS 1.3 전용인 새로운 암호화 스위트를 정의합니다. 이러한 암호화 스위트는 모두 최신 연관 데이터 암호화 인증(AEAD) 알고리즘을 사용합니다.
- 공유 비밀을 설정하는 데 필요한 메시지를 제외한 TLS 1.3 핸드쉐이크는 암호화됩니다. 특히 이는 서버와 클라이언트 인증서가 암호화 되었다는 것을 의미합니다. 그러나 클라이언트가 서버에 보내는 서버 ID(server_name 또는 SNI 확장자)는 암호화되지 않습니다.
- 재협상, 일반 데이터 압축, [디지털 서명 알고리즘](ttps://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA) 인증서, 정적 RSA 키 교환, 사용자 지정 Diffie-Hellman (DH) 그룹과의 키 교환 등의 여러 메커니즘이 비활성화되었습니다.

TLS 1.3 초안 버전 구현은 가능합니다. TLS 1.3은 0-RTT 모드를 포함하여 일부 브라우저에서 활성화되어 있습니다. TLS 1.3을 활성화한 웹 서버는 TLS 1.3이 성공적으로 작동하도록 설정을 조정해야 할 수 있습니다.

TLS 1.3은 중요한 새로운 사용 사례를 하나만 추가합니다. 0-RTT 핸드쉐이크는 웹과 같이 대기 시간에 민감한 애플리케이션에 상당한 성능 향상을 제공할 수 있습니다. 0-RTT를 활성화하려면 성공적인 배포를 보장하고 재생 공격의 위험을 관리하기 위해 추가 단계가 필요합니다.

TLS 1.3에서 재협상을 제거하면 인증서를 이용한 클라이언트 인증에 의존하는 일부 웹 서버가 영향을 받을 수 있습니다. 일부 웹 서버는 재협상을 사용하여 클라이언트 인증서가 암호화되었는지 확인하거나 특정 리소스가 요청될 때만 클라이언트 인증서를 요청합니다. 클라이언트 인증서의 개인 정보 보호를 위해 TLS 1.3 핸드쉐이크의 암호화는 클라이언트 인증서가 암호화되도록 합니다. 그러나 일부 소프트웨어 변경이 필요할 수 있습니다. 인증서를 사용하는 반응형 클라이언트 인증은 TLS 1.3에서 지원되지만 광범위하게 구현되진 않습니다. HTTP/2도 지원할 대체 메커니즘이 개발 중에 있습니다.

## 이전 TLS 버전 제거하기

보다 현대적이고 안전한 웹을 위한 작업을 돕기 위해 모든 주요 브라우저는 2020년 초에 TLS 1.0과 1.1에 대한 지원을 제거하기 시작했습니다. 앞으로 웹 서버가 TLS 1.2 또는 1.3을 지원하는지 확인해야 합니다.

Firefox는 버전 74부터 이전 TLS 버전을 사용하여 서버에 연결할 때 [보안 연결 실패](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) 오류를 반환합니다([Firefox 버그 1606734](https://bugzil.la/1606734)).

## TLS 핸드쉐이크 타임아웃 값

어떤 이유로 TLS 핸드셰이크가 느려지거나 응답하지 않으면 사용자 경험에 상당한 영향을 미칠 수 있습니다. 이 문제를 완화하기 위해 최신 브라우저는 핸드셰이크 시간 제한을 구현했습니다.

어떤 이유에서든지 간에 TLS 핸드쉐이크가 느려지거나 반응이 없다면 사용자 경험에 상당한 영향을 미칠 수 있습니다. 이 문제들을 완화하기 위해 최신 브라우저들은 핸드쉐이크 타임아웃을 도입했습니다.

- Firefox는 버전 58부터 기본값이 30초인 TLS 핸드쉐이크 타임아웃을 도입했습니다. 타임아웃 값은 about:config에서 `network.http.tls-handshake-timeout` 설정을 편집하여 변경할 수 있습니다.

## 같이 보기

- [Mozilla SSL 설정 생성기](https://mozilla.github.io/server-side-tls/ssl-config-generator/)와 [Cipherlist.eu](https://cipherlist.eu/)는 사이트를 보호하기 위해 서버에 대한 설정 파일을 생성하는 데 도움이 될 수 있습니다.
- OpSec(Mozilla Operations Security) 팀은 [참조 TLS 설정](https://wiki.mozilla.org/Security/Server_Side_TLS)이 포함된 위키 페이지를 유지 관리합니다.
- [Mozilla Observatory](https://observatory.mozilla.org/), [SSL Labs](https://www.ssllabs.com/ssltest/), 그리고 [Cipherscan](https://github.com/mozilla/cipherscan)은 사이트를 테스트하여 TLS 구성이 얼마나 안전한지 확인하는 데 도움을 줄 수 있습니다.
- [Secure Contexts](/ko/docs/Web/Security/Secure_Contexts)
- [Strict-Transport-Security](/ko/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP 헤더
