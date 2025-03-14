---
title: HTTP 헤더
slug: Web/HTTP/Headers
---

{{HTTPSidebar}}

HTTP 헤더는 클라이언트와 서버가 요청 또는 응답으로 부가적인 정보를 전송할 수 있도록 해줍니다. HTTP 헤더는 대소문자를 구분하지 않는 이름과 콜론 '`:`' 다음에 오는 값(줄 바꿈 없이)으로 이루어져있습니다. 값 앞에 붙은 빈 문자열은 무시됩니다.

커스텀 등록 헤더는 'X-'를 앞에 붙여 추가될 수 있지만, 이 관례는 [RFC 6648](https://tools.ietf.org/html/rfc6648)에서 비표준 필드가 표준이 되었을때 불편함을 유발하는 이유로 2012년 6월에 폐기되었습니다. 다른것들은 [IANA 레지스트리](https://www.iana.org/assignments/message-headers/perm-headers.html)에 나열되어 있으며, 원본 컨텐츠는 [RFC 4229](https://tools.ietf.org/html/rfc4229)에서 정의되었습니다. IANA는 또한 [제안된 새로운 메시지 헤더의 레지스트리](https://www.iana.org/assignments/message-headers/prov-headers.html)도 관리합니다.

헤더는 컨텍스트에 따라 그룹핑될 수 있습니다:

- {{Glossary("General header")}}: 요청과 응답 모두에 적용되지만 바디에서 최종적으로 전송되는 데이터와는 관련이 없는 헤더.
- {{Glossary("Request header")}}: 페치될 리소스나 클라이언트 자체에 대한 자세한 정보를 포함하는 헤더.
- {{Glossary("Response header")}}: 위치 또는 서버 자체에 대한 정보(이름, 버전 등)와 같이 응답에 대한 부가적인 정보를 갖는 헤더.
- {{Glossary("Entity header")}}: 컨텐츠 길이나 MIME 타입과 같이 엔티티 바디에 대한 자세한 정보를 포함하는 헤더.

헤더는 또한 프록시의 처리 방법에 따라 그룹핑할 수도 있습니다:

- 종단간 헤더
  - : 이러한 헤더는 반드시 메시지의 최종 수신자에게 전송되어야 합니다. 즉, 요청에 대해서는 서버, 응답에 대해서는 클라이언트입니다. 중간 프록시는 반드시 종단 간 헤더를 수정되지 않은 상태로 재전송해야하며 캐시는 이를 반드시 저장해야합니다.
- 홉간 헤더
  - : 이러한 헤더는 단일 전송-레벨 연결에서만 의미가 있으며 프록시에의해 재전송되거나 캐시되어선 안됩니다. 이러한 헤더들은 다음과 같습니다: {{ httpheader("Connection") }}, {{ httpheader("Keep-Alive") }}, {{ httpheader("Proxy-Authenticate") }}, {{ httpheader("Proxy-Authorization") }}, {{ httpheader("TE") }}, {{ httpheader("Trailer") }}, {{ httpheader("Transfer-Encoding") }}, {{ httpheader("Upgrade") }}. 홉간 헤더는 {{ httpheader("Connection") }} 일반 헤더를 사용해 설정될 수도 있음을 유의하세요.

다음은 사용 카테고리에 따라 HTTP 헤더를 요약한 리스트입니다. 알파벳순의 리스트는 왼쪽의 네비게이션을 보세요.

## 인증

- {{HTTPHeader("WWW-Authenticate")}}
  - : 리소스에 대한 접근을 하는데 사용되어야하는 인증 메소드를 정의합니다.
- {{HTTPHeader("Authorization")}}
  - : 서버와함께 유저 에이전트를 인증하기 위한 자격 증명을 포함합니다.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : 프록시 서버 뒤에 있는 리소스에 접근하는데 사용되어야하는 인증 메소드를 정의합니다.
- {{HTTPHeader("Proxy-Authorization")}}
  - : 프록시 서버와 함께 유저 에이전트를 인증하기 위한 자격 증명을 포함합니다.

## 캐싱

- {{HTTPHeader("Age")}}
  - : 객체가 프록시 캐시에 있었던 초 단위의 시간.
- {{HTTPHeader("Cache-Control")}}
  - : 요청과 응답 모두에서의 캐싱 메커니즘을 명시하는 지시문.
- {{HTTPHeader("Clear-Site-Data")}}
  - : 요청하는 웹사이트에 관련된 탐색 데이터(예, 쿠키, 저장소, 캐시)를 제거합니다.
- {{HTTPHeader("Expires")}}
  - : 응답이 만료되었다고 고려되는 날짜/시간.
- {{HTTPHeader("Pragma")}}
  - : 요청-응답 체인을 따라 어디든 다양한 영향을 줄 수 있는 구현-관련 헤더. `Cache-Control` 헤더가 존재하지 않는 HTTP/1.0 캐시와의 하위 호환성을 위해 사용됨.
- {{HTTPHeader("Warning")}}
  - : 가능한 문제들에 대한 정보를 포함하는 일반 경고 필드.

## 클라이언트 힌트

HTTP 클라이언트 힌트는 작업중에 있습니다. 실제 문서는 [HTTP 작업 그룹의 웹사이트](https://httpwg.org/http-extensions/client-hints.html)에서 확인하실 수 있습니다.

- {{HTTPHeader("Accept-CH")}} {{experimental_inline}}
  - : 서버는 Accept-CH 헤더 필드나 http-equiv 어트리뷰트([\[HTML5\]](https://httpwg.org/http-extensions/client-hints.html#HTML5))를 갖는 동등한 HTML meta 엘리먼트를 사용해 클라이언트 힌트에 대한 지원을 알릴 수 있습니다.
- {{HTTPHeader("Accept-CH-Lifetime")}} {{experimental_inline}}
  - : 서버는 명시된 시간동안 서버가 지원하는 클라이언트 힌트의 집합을 클라이언트가 기억하도록 요청하여 서버의 오리진으로의 후속 요청에 대한 클라이언트 힌트를 전송할 수 있습니다([\[RFC6454\]](https://httpwg.org/http-extensions/client-hints.html#RFC6454)).
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : 요청이 초기 데이터로 전달되었음을 나타냅니다.
- {{HTTPHeader("Content-DPR")}} {{experimental_inline}}
  - : `Content-DPR` 응답 헤더 필드는 선택한 이미지 응답의 CSS px를 통한 물리적 픽셀간의 비율을 나타내는 숫자입니다.
- {{HTTPHeader("DPR")}} {{experimental_inline}}
  - : `DPR` 요청 헤더 필드는 레이아웃 뷰포트(Section 9.1.1 of [\[CSS2\]](https://httpwg.org/http-extensions/client-hints.html#CSS2))의 CSS px(Section 5.2 of [\[CSSVAL\]](https://httpwg.org/http-extensions/client-hints.html#CSSVAL))를 통한 물리적 픽셀 비율인 클라이언트의 현재 기기 픽셀 비율(DPR)을 나타내는 숫자입니다.
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}

  - : &#x20;

    <a class="internalDFN" href="https://wicg.github.io/netinfo/#dom-networkinformation-savedata"><code>SaveData</code></a>

    &#x20;\[

    <a class="bibref" href="https://wicg.github.io/netinfo/#bib-client-hints">CLIENT-HINTS</a>

    ] 요청 헤더 필드는 절약한 데이터 사용에 대한 유저 에이전트의 설정을 나타내는 하나 이상의 토큰으로 이루어져있습니다.

- {{HTTPHeader("Viewport-Width")}} {{experimental_inline}}

  - : `Viewport-Width` 요청 헤더 필드는 CSS px 단위의 레이아웃 뷰포트 width를 나타내는 숫자입니다. 제공된 CSS px값은 정수로 반올림된 숫자입니다(예, 올림 값).

    하나 이상의 메시지에서 `Viewport-Width`가 나타난다면, 마지막 값이 모든 이전의 값을 덮어씁니다.

- {{HTTPHeader("Width")}} {{experimental_inline}}

  - : `Width` 요청 헤더 필드는 물리적 px(예, 이미지의 실제 크기) 단위의 원하는 리소스 width를 나타내는 숫자입니다. 제공된 물리적 px 값은 정수로 반올림된 숫자입니다(예, 올림 값).

    원하는 리소스 width를 요청 시점에 알 수 없거나 리소스가 표출 width를 갖지 않을 경우, `Width` 헤더 필드는 생략될 수 있습니다. 하나 이상의 메시지에서 `Width`가 나타난다면, 마지막 값이 모든 이전의 값을 덮어씁니다.

## 조건부

- {{HTTPHeader("Last-Modified")}}
  - : 동일한 리소스의 여러 버전을 비교하는데 사용되는 검사기로, 리소스의 마지막 수정 날짜입니다. {{HTTPHeader("ETag")}}보다 덜 정확하지만, 어떤 환경에서는 계산이 더 쉽습니다. {{HTTPHeader("If-Modified-Since")}}와 {{HTTPHeader("If-Unmodified-Since")}}를 사용하는 조건부 요청은 이 값을 사용하여 요청의 동작을 변경합니다.
- {{HTTPHeader("ETag")}}
  - : 리소스의 버전을 식별하는 고유한 문자열 검사기입니다. {{HTTPHeader("If-Match")}}와 {{HTTPHeader("If-None-Match")}}를 사용하는 조건부 요청은 이 값을 사용하여 요청의 동작을 변경합니다.
- {{HTTPHeader("If-Match")}}
  - : 저장된 리소스가 주어진 ETags의 하나와 일치하는 경우에만 요청을 조건부로 만들고 메소드를 적용합니다.
- {{HTTPHeader("If-None-Match")}}
  - : 저장된 리소스가 주어진 ETags 모두와 일치하지 않는 경우에만 요청을 조건부로 만들고 메소드를 적용합니다. 캐시(안전 연결용)를 업데이트하거나 이미 존재하는 리소스를 다시 업로드하는 것을 방지하기위해 사용됩니다.
- {{HTTPHeader("If-Modified-Since")}}
  - : 주어진 날짜 이후에 수정된 경우에만 요청을 조건부로 만들고 엔티티가 전송될 것을 기대합니다. 캐시가 만료되었을 때에만 데이터를 전송하는데 사용됩니다.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : 주어진 날짜 이후에 수정되지 않은 경우에만 요청을 조건부로 만들고 엔티티가 전송될 것을 기대합니다. 이는 특정 범위의 새로운 프래그먼트와 이전의 것과의 일관성을 보장하거나, 존재하는 다큐먼트를 수정할 때에 낙관적인 제어 시스템을 구현하는데 사용됩니다.
- {{HTTPHeader("Vary")}}
  - : 오리진 서버로부터 새로운 요청을하는 대신 캐시된 응답을 사용할지를 결정하기위한 향후의 요청 헤더를 매칭할 방법을 정합니다.

## 연결 관리

- {{HTTPHeader("Connection")}}
  - : 현재 트랜잭션이 끝난후에 네트워크 연결을 열린 상태로 둘지 여부를 제어합니다.
- {{HTTPHeader("Keep-Alive")}}
  - : 지속적인 연결이 열린 상태로 유지할 기간을 제어합니다.

## [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)

- {{HTTPHeader("Accept")}}
  - : 돌려줄 데이터 타입에 대해 서버에 알립니다. MIME 타입입니다.
- {{HTTPHeader("Accept-Charset")}}
  - : 클라이언트가 이해할 수 있는 문자 집합에 대해 서버에 알립니다.
- {{HTTPHeader("Accept-Encoding")}}
  - : 인코딩 알고리즘에 대해 서버에 알립니다. 보통은 돌려줄 리소스에 사용되는 압축 알고리즘입니다.
- {{HTTPHeader("Accept-Language")}}
  - : 서버가 돌려주기로 예상된 언어에 대해 서버에 알립니다. 이는 힌트이며 사용자의 모든 제어 아래에서는 필수가 아닙니다: 서버는 명시적인 사용자 선택을 덮어쓰지 않도록 항상 집중해야합니다(드롭 다운 리스트에서 언어를 선택하는 것처럼).

## 제어

- {{HTTPHeader("Expect")}}
  - : 요청을 적절히 처리하기위해 서버에서 수행되어야하는 기대치를 나타냅니다.
- {{HTTPHeader("Max-Forwards")}}
  - : ...

## 쿠키

- {{HTTPHeader("Cookie")}}
  - : {{HTTPHeader("Set-Cookie")}} 헤더와 함께 서버로부터 이전에 전송됐던 저장된 [HTTP 쿠키](/ko/docs/Web/HTTP/Cookies)를 포함합니다.
- {{HTTPHeader("Set-Cookie")}}
  - : 서버에서 유저 에이전트로 쿠키를 전송합니다.
- {{HTTPHeader("Cookie2")}} {{deprecated_inline}}
  - : {{HTTPHeader("Set-Cookie2")}}와 함께 서버에 의해 이전에 전송된 HTTP 쿠키를 포함하는데 사용되었지만, 명세에 의해 사용되지 않게 되었습니다. 대신 {{HTTPHeader("Cookie")}}를 사용하세요.
- {{HTTPHeader("Set-Cookie2")}} {{deprecated_inline}}
  - : 서버에서 유저 에이전트로 쿠키를 전송하는데 사용되었지만, 명세에 의해 사용되지 않게 되었습니다. 대신 {{HTTPHeader("Set-Cookie")}}를 사용하세요.

## CORS

_[여기](CORS)에서 CORS에 대해 더 알아보세요._

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : 응답이 공유될 수 있는지를 나타냅니다.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : credentials 플래그가 true일 때 요청에 대한 응답이 노출될 수 있는지를 나타냅니다.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : 실제 요청을 만들 때 사용될 수 있는 HTTP 헤더를 나타내는 preflight 요청에 대한 응답으로 사용됩니다.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : preflight 요청에 대한 응답으로 리소스에 접근할 때 허용되는 메소드를 명시합니다.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : 헤더의 이름을 나열하여 어떤 헤더가 응답의 일부로 노출될 수 있는지를 나타냅니다.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : preflight 요청의 결과가 캐시되는 기간을 나타냅니다.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : 실제 요청이 있을 때 사용될 HTTP 헤더를 서버에 알리기 위한 preflight 요청을 보낼 때 사용됩니다.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : 실제 요청이 있을 때 사용될 [HTTP 메소드](/ko/docs/Web/HTTP/Methods)를 서버에 알리기 위한 preflight 요청을 보낼 때 사용됩니다.
- {{HTTPHeader("Origin")}}
  - : 페치가 시작된 위치를 나타냅니다.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : [Resource Timing API](/ko/docs/Web/API/Performance_API/Resource_timing)의 기능을 통해 반환되는 속성을 확인할 수 있게해주는 오리진을 명시합니다. 교차-오리진 제한으로인해 0으로 기록될 수도 있습니다.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : 교차-도메인 정책 파일(XML)이 허용되었는지를 명시합니다. 해당 파일은 Adobe Flash Player 또는 Adobe Acrobat(예, PDF)과 같은 웹 클라이언트가 도메인을 넘어 데이터를 다룰 수 있도록 허용하는 정책을 정의할수도 있습니다.

## 추적 안함

- {{HTTPHeader("DNT")}}
  - : 사용자의 추적 설정을 나타내는데 사용됩니다.
- {{HTTPHeader("Tk")}}
  - : 해당하는 요청에 적용되는 추적 상태를 나타냅니다.

## 다운로드

- {{HTTPHeader("Content-Disposition")}}
  - : 전송된 리소스가 한 줄로 표시되어야하거나(헤더가 존재하지 않을 때는 기본 동작), 다운로드처럼 처리되어야 하고 브라우저가 '다른 이름으로 저장' 창을 표시해야할 때에 대한 응답 헤더입니다.

## 메시지 바디 정보

- {{HTTPHeader("Content-Length")}}
  - : 수신자에게 전송된 엔티티 바디의 크기를 10진수 바이트 단위로 나타냅니다.
- {{HTTPHeader("Content-Type")}}
  - : 리소스의 미디어 타입을 나타냅니다.
- {{HTTPHeader("Content-Encoding")}}
  - : 압축 알고리즘을 명시하는데 사용됩니다.
- {{HTTPHeader("Content-Language")}}
  - : 사용자를 위한 언어를 설명하여 사용자가 선호하는 언어에 따라 구분할 수 있게해줍니다.
- {{HTTPHeader("Content-Location")}}
  - : 반환된 데이터를 위한 대체 위치를 나타냅니다.

## 프록시

- {{HTTPHeader("Forwarded")}}
  - : 프록시가 요청의 경로에 포함될 때 변경되거나 손실되는 프록시 서버의 클라이언트 측면에 대한 정보를 포함합니다.
- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : HTTP 프록시나 로드 밸런서를 통해 웹 서버로 연결하는 클라이언트의 시작 IP 주소를 확인합니다.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : 클라이언트가 여러분의 프록시나 로드 밸런서에 접속하기 위해 사용하도록 요청됐던 원본 호스트를 확인합니다.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : 클라이언트가 여러분의 프록시나 로드 밸런서에 접속하기 위해 사용했던 프로토콜(HTTP 또는 HTTPS)을 확인합니다.
- {{HTTPHeader("Via")}}
  - : 정방향 및 역방향 프록시에 모두에 의해 추가되며, 요청 헤더와 응답 헤더에서 나타날 수 있습니다.

## 리다이렉트

- {{HTTPHeader("Location")}}
  - : 페이지를 리다이렉트할 URL을 나타냅니다.

## 요청 컨텍스트

- {{HTTPHeader("From")}}
  - : 요청하는 유저 에이전트를 제어하는 사용자(사람)의 인터넷 이메일 주소를 포함합니다.
- {{HTTPHeader("Host")}}
  - : 서버(가상 호스팅용)의 도메인명과 (선택적으로) 서버가 리스닝중인 TCP 포트 번호를 명시합니다.
- {{HTTPHeader("Referer")}}
  - : 현재 페이지로 연결되는 링크가 있던 이전 웹 페이지의 주소입니다.
- {{HTTPHeader("Referrer-Policy")}}
  - : 생성된 요청이 {{HTTPHeader("Referer")}} 헤더에서 전송된 referrer 정보에 포함되어야하는지를 관리합니다.
- {{HTTPHeader("User-Agent")}}
  - : 네트워크 프로토콜 피어가 요청하는 사용자 에이전트의 애플리케이션 타입, 운영 체제, 소프트웨어 벤더 또는 소프트웨어 버전을 식별할 수 있는 특성 문자열을 포함합니다. [Firefox 유저 에이전트 문자열 레퍼런스](/ko/docs/Web/HTTP/Headers/User-Agent/Firefox) 문서도 참고하세요.

## 응답 컨텍스트

- {{HTTPHeader("Allow")}}
  - : 리소스에 의해 지원되는 HTTP 요청 메소드를 나열합니다.
- {{HTTPHeader("Server")}}
  - : 요청을 처리하기 위해 오리진 서버에 의해 사용되는 소프트웨어에 대한 정보를 포함합니다.

## 범위 요청

- {{HTTPHeader("Accept-Ranges")}}
  - : 서버가 범위 요청을 지원하는지를 나타내며, 지원할 경우 범위가 표현될 수 있는 단위를 나타냅니다.
- {{HTTPHeader("Range")}}
  - : 서버가 반환해야하는 문서의 부분을 나타냅니다.
- {{HTTPHeader("If-Range")}}
  - : 주어진 etag 또는 날짜가 원격 리소스와 일치할 경우에만 수행되는 조건적 범위 요청을 생성합니다. 호환되지 않는 범전의 리소스에서 두 가지 범위의 다운로드를 방지하기위해 사용됩니다.
- {{HTTPHeader("Content-Range")}}
  - : 전체 바디 메시지 중 특정 메시지가 포함된 위치를 나타냅니다.

## 보안

- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
  - : 이 헤더가 적용된 리소스의 응답을 다른 도메인이 읽는 것을 방지합니다.
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : 주어진 페이지에 대해 유저 에이전트가 로드할 수 있는 리소스를 제어합니다.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : 웹 개발자가 정책을 강제로 적용하지 않고도 그 효과를 실험해볼 수 있게 해줍니다. 이러한 위반 보고서는 HTTP `POST` 요청을 통해 지정된 URL로 전송된 {{Glossary("JSON")}} 문서로 구성됩니다.
- {{HTTPHeader("Expect-CT")}}
  - : 사이트가 잘못 발급된 인증서의 사용이 눈에 띄지 않게 넘어가는것을 방지해주는 인증서 투명성(Certificate Transparency) 요구 보고 및/또는 시행을 옵트인할 수 있게 해줍니다. 사이트가 Expect-CT 헤더를 사용할 때, 사이트는 공개 CT 로그에 나타난 사이트에 대한 모든 인증서를 Chrome이 확인하도록 요청합니다.
- {{HTTPHeader("Feature-Policy")}}
  - : 소유한 프레임 및 내장된 iframe에서 브라우저 기능의 사용을 허용 및 거부하기위한 메커니즘을 제공합니다.
- {{HTTPHeader("Public-Key-Pins")}} ({{Glossary("HPKP")}})
  - : 위조된 인증서를 사용한 {{Glossary("MITM")}} 공격의 위험을 줄이기 위해 특정 웹 서버에 특정 암호화 공개 키를 연결합니다.
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
  - : 헤더에 지정된 report-uri로 보고를 전송하고 피닝을 위반하더라도 클라이언트가 서버에 접속하는 것을 계속 허용합니다.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : HTTP 대신 HTTPS를 사용하여 통신하도록 강제합니다.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : 암호화된 응답과 인증된 응답에 대한 클라이언트의 설정을 나타내는 신호를 서버에 전송하며, {{CSP("upgrade-insecure-requests")}} 지시자를 성공적으로 처리할 수 있습니다.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : MIME 스니핑을 비활성화하고 브라우저가 {{HTTPHeader("Content-Type")}}에 주어진 타입을 사용하도록 강제합니다.
- {{HTTPHeader("X-Download-Options")}}
  - : 브라우저(인터넷 익스플로러)가 파일을 통한 피싱 공격을 방지하기 위해 애플리케이션으로부터 다운로드된 파일에 "열기" 옵션을 표시하면 안되는지 여부를 나타냅니다. 피싱 공격을 방지하지 못할 경우 파일을 애플리케이션의 컨텍스트에서 실행할 권한을 얻게됩니다.

<dl><dt>{{HTTPHeader("X-Frame-Options")}} (XFO)</dt><dd>브라우저가 {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} 또는 {{HTMLElement("object")}}에서 페이지 렌더링을 허용해야하는지를 나타냅니다.</dd><dt>{{HTTPHeader("X-Powered-By")}}</dt><dd>호스팅 환경이나 다른 프레임워크에 의해 설정 될 수 있으며, 그들에 대한 정보를 포함하지만 애플리케이션이나 방문자에게 유용하지는 않습니다. 잠재적인 취약점 노출을 피하려면 이 헤더를 해제하세요.</dd><dt>{{HTTPHeader("X-XSS-Protection")}}</dt><dd>교차-사이트 스크립팅 필터링을 활성화합니다.</dd><dt></dt></dl>

## 서버가 전송한 이벤트

- {{HTTPHeader("Last-Event-ID")}}
  - : ...
- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : 개발자가 네트워크 에러 보고 정책을 선언할 수 있게하는 메커니즘을 정의합니다.
- {{HTTPHeader("Ping-From")}}
  - : ...
- {{HTTPHeader("Ping-To")}}
  - : ...
- {{HTTPHeader("Report-To")}}
  - : 브라우저가 경고 및 에러 보고를 전송하기 위한 서버 엔드포인트를 지정하는데 사용됩니다.

## 전송 코딩

- {{HTTPHeader("Transfer-Encoding")}}
  - : 사용자에게 엔티티를 안전하게 전송하기위해 사용할 인코딩 형식을 지정합니다.
- {{HTTPHeader("TE")}}
  - : 유저 에이전트가 수락하기로한 전송 인코딩을 지정합니다.
- {{HTTPHeader("Trailer")}}
  - : 전송자가 청크 분할된 메시지의 끝에 부가적인 필드를 포함할 수 있게 해줍니다.

## 웹소켓

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : ...

## 그 외

- {{HTTPHeader("Accept-Push-Policy")}} {{experimental_inline}}
  - : 클라이언트는 요청에 [`Accept-Push-Policy`](https://tools.ietf.org/html/draft-ruellan-http-accept-push-policy-00#section-3.1) 헤더 필드를 전송하여 요청에 대해 희망하는 푸시 정책을 나타낼 수 있습니다.
- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : 클라이언트는 [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.7) 헤더 필드를 전송하여 지원하는 서명의 종류와 사용 가능한 모든 서명을 이용할 의도를 나타낼 수 있습니다.
- {{HTTPHeader("Alt-Svc")}}
  - : 이 서비스에 도달할 수 있는 대안을 나열하는데 사용됩니다.
- {{HTTPHeader("Date")}}
  - : 메시지가 발생한 날짜와 시간을 포함합니다.
- {{HTTPHeader("Large-Allocation")}}
  - : 로드되고 있는 페이지가 대규모 할당 작업을 원할 것이라고 브라우저에게 알립니다.
- {{HTTPHeader("Link")}}
  - : [`Link`](https://tools.ietf.org/html/rfc5988#section-5) 엔티티 헤더 필드는 HTTP 헤더내의 하나 이상의 링크를 직렬화하기위한 수단을 제공합니다. HTML {{HTMLElement("link")}} 엘리먼트와 의미상으로 동일합니다.
- {{HTTPHeader("Push-Policy")}} {{experimental_inline}}
  - : [`Push-Policy`](https://tools.ietf.org/html/draft-ruellan-http-accept-push-policy-00#section-3.2)는 요청을 처리할 때 푸시에 관련된 서버의 동작을 정의합니다.
- {{HTTPHeader("Retry-After")}}
  - : 유저 에이전트가 다음 요청을 생성하기전에 얼마나 기다려야하는지를 나타냅니다.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.1) 헤더 필드는 교환을 위한 서명의 리스트를 전달하며, 각 서명은 권한을 판별하고 새로고치는 방법에 대한 정보를 수반합니다.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.5.1.2) 헤더 필드는 서명에서 포함할 응답 헤더 필드의 정렬된 리스트를 식별합니다.
- {{HTTPHeader("Server-Timing")}}
  - : 주어진 요청-응답 주기에 대한 하나 이상의 메트릭 및 설명을 전달합니다.
- {{HTTPHeader("SourceMap")}}
  - : 생성된 코드를 [source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)에 링크합니다.
- {{HTTPHeader("Upgrade")}}
  - : [Upgrade 헤더 필드](https://tools.ietf.org/html/rfc7230#section-6.7)에 관련된 RFC 문서는 RFC 7230, section 6.7입니다. 이 표준은 현재 클라이언트, 서버, 전송 프로토콜 연결에서 다른 프로토콜로 업그레이드 또는 변경하기위한 규칙을 정하였습니다. 예를 들면, 이 헤더 표준은 서버가 Upgrade 헤더 필드를 인식하고 구현하도록 결정했다고 가정하여 클라이언트가 HTTP 1.1에서 HTTP 2.0으로 변경하는것을 허용합니다. 어떠한 집단에서도 Upgrade 헤더 필드에서 명시된 용어를 수락할 필요는 없습니다. 이는 클라이언트 및 서버 헤더 모두에서 사용될 수 있습니다. Upgrade 헤더 필드가 명시되었을 경우, 전송자는 반드시 업그레이드 옵션을 지정한 Connection 헤더 필드도 전송해야합니다. Connection 헤더 필드에 대한 자세한 내용은 [앞서 언급한 RFC의 section 6.1](https://tools.ietf.org/html/rfc7230#section-6.1)을 확인하시기 바랍니다..
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
  - : 브라우저가 이미지, CSS, JavaScript 등을 포함하여 문서에 의해 참조된 항목을 위한 URL뿐만 아니라 사용자가 따르길 선택한 링크 모두에서 사전에 수행할 도메인 네임 확인을 수행하는 기능인 DNS 프리페칭을 제어합니다.
- {{HTTPHeader("X-Firefox-Spdy")}} {{deprecated_inline}} {{non-standard_inline}}
  - : ...
- {{HTTPHeader("X-Pingback")}} {{non-standard_inline}}
  - : ...
- {{HTTPHeader("X-Requested-With")}}
  - : ...
- {{HTTPHeader("X-Robots-Tag")}}{{non-standard_inline}}
  - : 공개 검색 엔진 결과에서 웹 페이지가 인덱싱되는 방식을 나타내기 위해 사용됩니다. 이 헤더는 사실상 `<meta name="robots" content="...">`와 동일합니다.
- {{HTTPHeader("X-UA-Compatible")}} {{non-standard_inline}}
  - : Internet Explorer에게 사용할 문서 모드를 알리는데 사용됩니다.

## 기여

[새로운 항목을 작성](/ko/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header)하거나 존재하는 항목을 향상하여 도움을 주실 수 있습니다.

## 함께 보기

- [Wikipedia page on List of HTTP headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA registry](https://www.iana.org/assignments/message-headers/perm-headers.html)
- [HTTP Working Group](https://httpwg.org/specs/)
