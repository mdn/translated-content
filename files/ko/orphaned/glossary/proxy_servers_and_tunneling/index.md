---
title: 프록시 서버 및 터널링
slug: orphaned/Glossary/Proxy_servers_and_tunneling
original_slug: Glossary/Proxy_servers_and_tunneling
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

인터넷의 다양한 네트워크를 탐색할 때, 프록시 서버와 HTTP 터널은 월드 와이드 웹(World Wide Web)의 콘텐츠에 접근하는 것을 용이하게 합니다. 프록시는 사용자의 로컬 컴퓨터에 있거나, 사용자의 컴퓨터와 인터넷 상의 목적지 서버 사이 어디에나 위치할 수 있습니다. 이 페이지는 프록시에 관한 몇 가지 기본 사항을 설명하고 몇 가지 구성 옵션을 소개합니다.

두 가지 유형의 프록시가 있습니다. **포워드 프록시**(또는 터널, 또는 게이트웨이)와 **리버스 프록시**(로드 밸런싱, 인증, 복호화 또는 캐싱을 위해 서버에 대한 접근을 제어하고 보호하는 데 사용).

## 포워드 프록시

포워드 프록시, 또는 게이트웨이, 또는 그냥 "프록시"는 클라이언트 또는 클라이언트 그룹에 프록시 서비스를 제공합니다. 인터넷에는 약 수십만 개의 오픈 포워드 프록시가 있습니다. 이들은 인터넷 서비스(DNS나 웹 페이지와 같은)를 저장하고 전달하여 그룹이 사용하는 대역폭을 줄이고 제어합니다.

포워드 프록시는 또한 익명일 수 있으며 사용자가 웹을 탐색하거나 다른 인터넷 서비스를 사용하는 동안 IP 주소를 숨길 수 있게 합니다. 예를 들어, [Tor](https://www.torproject.org/)는 익명성을 위해 인터넷 트래픽을 여러 프록시를 통해 라우팅합니다.

## 리버스 프록시

이름에서 알 수 있듯, 리버스 프록시는 포워드 프록시와 반대로 작동합니다. 포워드 프록시는 클라이언트(또는 요청 호스트)를 대신하여 행동합니다. 포워드 프록시는 클라이언트의 신원을 숨길 수 있는 반면, 리버스 프록시는 서버의 신원을 숨길 수 있습니다. 리버스 프록시에는 여러 사용 사례가 있으며, 몇 가지는 다음과 같습니다.

- 로드 밸런싱: 여러 웹 서버에 부하를 분산,
- 정적 콘텐츠 캐싱: 이미지와 같은 정적 콘텐츠를 캐싱하여 웹 서버의 부하 감소,
- 압축: 콘텐츠를 압축하고 최적화하여 로딩 시간 단축.

## 프록시를 통한 클라이언트 정보 전달

프록시는 요청이 마치 프록시의 IP 주소에서 발생한 것처럼 보이게 할 수 있습니다. 이는 프록시가 클라이언트 익명성을 제공하는데 사용되는 경우 유용할 수 있지만, 그 외의 경우에는 원래 요청의 정보가 손실될 수 있습니다. 원래 클라이언트의 IP 주소는 종종 디버깅, 통계 또는 위치 기반 콘텐츠 생성에 사용됩니다. 이 정보를 공개하는 일반적인 방법은 다음 HTTP 헤더를 사용하는 것입니다.

표준화된 헤더

- {{HTTPHeader("Forwarded")}}
  - : 요청 경로에 프록시가 관여할 때 변경되거나 손실되는, 프록시 서버의 클라이언트 쪽 정보를 식별합니다.

또는 사실상 표준이 된 버전들

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : HTTP 프록시나 로드 밸런서를 통해 웹 서버에 연결하는 클라이언트의 원래 IP 주소를 식별합니다.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : 클라이언트가 프록시나 로드 밸런서에 연결하는데 사용한 원래 요청 호스트를 식별합니다.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : 클라이언트가 프록시나 로드 밸런서에 연결하는데 사용한 프로토콜(HTTP 또는 HTTPS)을 식별합니다.

프록시 자체에 대한 정보(프록시에 연결하는 클라이언트에 대한 정보가 아닌)를 제공하기 위해 `Via` 헤더를 사용할 수 있습니다.

- {{HTTPHeader("Via")}}
  - : 포워드 및 리버스 프록시 모두에 의해 추가되며, 요청 헤더와 응답 헤더 모두에 나타날 수 있습니다.

## HTTP 터널링

터널링은 데이터를 캡슐화하여 공용 네트워크를 통해 사설 네트워크 데이터와 프로토콜 정보를 전송합니다. HTTP 터널링은 상위 수준 프로토콜(HTTP)를 사용하여 하위 수준 프로토콜(TCP)을 전송하는 방식입니다.

HTTP 프로토콜은 {{HTTPMethod("CONNECT")}}라고 불리는 요청 메서드를 지정합니다. 이는 요청된 리소스와 양방향 통신을 시작하고 터널을 여는데 사용할 수 있습니다. 이는 HTTP 프록시 뒤에 있는 클라이언트가 TLS(즉, HTTPS, 443 포트)를 사용하여 웹 사이트에 접근할 수 있습니다. 그러나 주의할 점은, 모든 프록시 서버가 `CONNECT` 메서드를 지원하는 것은 아니며, 이 메서드를 443 포트로만 제한하는 것도 아닙니다.

위키피디아의 [HTTP 터널 문서](https://en.wikipedia.org/wiki/HTTP_tunnel)도 참고하세요.

## 프록시 자동 설정 (PAC)

[프록시 자동 설정 (PAC)](/ko/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) 파일은 웹 브라우저 요청(HTTP, HTTPS 그리고 FTP)이 목적지로 직접 가는지 또는 웹 프록시 서버로 전달되는지를 결정하는 [JavaScript](/ko/docs/Web/JavaScript) 함수입니다. PAC 파일에 포함된 JavaScript 함수는 다음 함수를 정의합니다.

자동 설정 파일은 `.pac` 파일 확장자를 가진 파일로 저장해야합니다. `proxy.pac`.

그리고 MIME 타입은 `application/x-ns-proxy-autoconfig`로 설정해야 합니다.

이 파일은 `FindProxyForURL`이라는 함수로 구성됩니다. 아래 예제는 내부 DNS 서버가 내부 호스트 이름만 해석할 수 있도록 설정된 환경에서 작동하며, 목표는 해석할 수 없는 호스트에 대해서만 프록시를 사용하는 것입니다.

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## 같이 보기

- [프록시 자동 설정(PAC) 파일](/ko/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
- {{HTTPMethod("CONNECT")}} method
- {{glossary("Proxy server")}}
