---
title: HTTP의 진화
slug: Web/HTTP/Guides/Evolution_of_HTTP
original_slug: Web/HTTP/Evolution_of_HTTP
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

**HTTP** (HyperText Transfer Protocol)은 월드 와이드 웹의 기반이 되는 프로토콜입니다. 1989년부터 1991년까지 Tim Berners-Lee와 그의 팀이 개발한 HTTP는 유연함을 형성하는 동시에 단순함을 지키는 데 도움이 되는 많은 수정을 거쳐왔습니다. HTTP가 신뢰할 수 있는 실험실 환경에서 파일을 교환하도록 만들어진 프로토콜에서 고해상도와 3D 이미지와 비디오를 전달하는 현대 인터넷 미로로 어떻게 진화했는지 알아보려면 계속해서 읽어주세요.

## 월드 와이드 웹의 발명

1989년 CERN에서 일하고 있던 Tim Berners-Lee는 인터넷을 통한 하이퍼텍스트 시스템을 만들기 위한 제안을 작성했습니다. 초기에 Mesh라고 불리던 그것은 1990년에 구현 과정에서 '월드 와이드 웹'으로 이름을 바꿨습니다. 기존의 TCP 그리고 IP 프로토콜 기반으로 만들어졌고, 4개의 기본 구성요소로 이루어져 있습니다.

- 하이퍼텍스트 문서를 표현하기 위한 텍스트 형식의 '[하이퍼텍스트 마크업 언어](/ko/docs/Web/HTML)' (HTML).
- 하이퍼텍스트 문서를 교환하기 위한 간단한 프로토콜인 '하이퍼텍스트 전송 프로토콜' (HTTP).
- 문서를 보여주기(그리고 수정하기) 위한 클라이언트인 '월드 와이드 웹(WorldWideWeb)'이라고 불리는 첫번째 브라우저.
- 문서에 접근하도록 해주는 서버, 'httpd'의 초기 버전.

이 네 개의 기본 구성 요소는 1990년 말에 완료되었으며, 첫번째 서버는 1991년 초에 CERN 외부에서 실행되었습니다. 1991년 8월 6일, 'alt.hypertext' 공개 뉴스 그룹의 Tim Berners-Lee의 [포스트](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt)가 공개 프로젝트로써의 월드 와이드 웹의 공식적인 출발점으로 여겨집니다.

이렇게 초기 단계에 사용되던 HTTP 프로토콜은 매우 간단했습니다. 이후 HTTP/0.9 버전을 부여했으며 때로는 원-라인 프로토콜로 불리기도 했습니다.

## HTTP/0.9 – 원-라인 프로토콜

HTTP 초기 버전에는 버전 번호가 없었습니다. HTTP/0.9는 이후 버전과 구별하기 위해 0.9로 불리게 됐습니다. HTTP/0.9는 극히 단순합니다. 요청은 단일 라인으로 구성되며 리소스에 대한 경로로 가능한 메서드는 {{HTTPMethod("GET")}}이 유일했습니다. 서버에 연결되면 프로토콜, 서버 및 포트가 필요하지 않으므로 전체 URL은 포함되지 않았습니다.

```http
GET /mypage.html
```

응답 또한 극도로 단순합니다. 오로지 파일 내용 자체로 구성됩니다.

```html
<html>
  A very simple HTML page
</html>
```

다음 발전 방향과는 다르게, HTTP 헤더가 없었는데 이는 HTML 파일만 전송될 수 있으며 다른 유형의 문서는 전송될 수 없음을 의미합니다. 상태 혹은 오류 코드도 없었습니다. 문제가 발생한 경우, 특정 HTML 파일이 만들어지고 사람이 처리할 수 있도록, 해당 파일 내부에 문제에 대한 설명이 HTML 파일에 추가되었습니다.

## HTTP/1.0 – 확장성 만들기

HTTP/0.9는 매우 제한적이었으며, 브라우저와 서버를 통해서 빠르게 다양한 특징을 가지게 되었습니다.

- 각 요청 안에 버전 정보가 포함되어 전송되었습니다(`HTTP/1.0` 이 `GET` 라인에 붙은 형태).
- 상태 코드 라인 또한 응답의 시작 부분에 붙어 전송되었습니다. 브라우저가 요청에 대한 성공과 실패를 알 수 있고 그 결과에 대한 동작(예, 특정 방법으로 로컬 캐시를 갱신하거나 사용)을 할 수 있게 되었습니다.
- HTTP 헤더 개념은 요청과 응답 둘 다 도입되어, 메타데이터 전송이 가능해졌고, 프로토콜이 극도로 유연하고 확장성이 높아졌습니다.
- {{HTTPHeader("Content-Type")}} 덕분에, 일반 HTML 파일들 외에 다른 문서들을 전송할 수 있었습니다.

다음은 일반적인 요청과 응답입니다:

```http
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML>
A page with an image
  <IMG SRC="/myimage.gif">
</HTML>
```

두 번째 연결에 의한 이미지를 내려받기 위한 요청과 그에 대한 응답입니다.

```http
GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(image content)
```

1991년부터 1995년 사이에 시도해보고 접근하는 방식으로 도입되었습니다. 서버와 브라우저는 기능을 추가하고, 새로운 기능이 관심을 끄는지 주시했습니다. 수많은 상호작용의 문제는 일반적이었습니다. 1996년 11월에, 문제를 해결하기 위해, 일반적인 실제 내용을 설명하는 정보 문서로 HTTP/1.0가 정의된 {{RFC(1945)}}로 알려진 문서가 게시되었습니다.

## HTTP/1.1 – 표준 프로토콜

그 동안, 적절한 표준화 작업이 진행되었습니다. 표준화 작업은 HTTP/1.0의 다양한 구현과 병행되었습니다. HTTP의 첫 번째 표준화 버전인 HTTP/1.1은 HTTP/1.0 이후 불과 몇 달 뒤인 1997년 초에 발표되었습니다.

HTTP/1.1은 모호함을 명확하게 하고 많은 개선 사항들을 도입했습니다.

- 연결을 재사용할 수 있어 시간이 절약됩니다. 단일 원본 문서 내로 포함된 리소스들을 표시하기 위해 더 이상 여러 번 연결을 열 필요가 없기 때문입니다.
- 파이프라이닝을 추가하여, 첫번째 요청에 대한 응답이 완전히 전송되기 전에 두번째 요청 전송을 가능케 하여, 통신 지연 시간이 단축되었습니다.
- 청크된 응답도 지원되었습니다.
- 추가적인 캐시 제어 메커니즘이 도입되었습니다.
- 언어, 인코딩 혹은 타입을 포함한 컨텐츠 협상이 도입되어, 클라이언트와 서버로 하여금 교환하려는 가장 적합한 컨텐츠에 대한 합의를 할 수 있습니다.
- {{HTTPHeader("Host")}} 헤더 덕분에, 동일 IP 주소에 다른 도메인을 호스트하는 기능이 서버 배치가 가능해졌습니다.

다음은 하나의 단일 커넥션을 통한 요청의 전형적인 전체 흐름의 예시입니다.

```http
GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

(content)

GET /static/img/header-background.png HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/png
Date: Thu, 31 Mar 2016 13:34:46 GMT
Last-Modified: Wed, 21 Oct 2015 18:27:50 GMT
Server: Apache

(image content of 3077 bytes)
```

HTTP/1.1는 1997년 1월에 {{rfc(2068)}}에서 처음 공개되었습니다.

## 15년 넘게 진행된 확장

HTTP의 확장성 덕분에 새로운 헤더와 메서드를 쉽게 만들 수 있었습니다. HTTP/1.1 프로토콜은 HTTP/2가 나오기 전인 1999년 6월에 공개된 {{RFC("2616")}}과 2014년 6월에 공개된 {{RFC("7230")}}-{{RFC("7235")}}라는 두 번에 걸친 개정을 통해 개선되었고, 이 프로토콜은 15년 넘도록 매우 안정적이었습니다.

### 보안 전송을 위한 HTTP 사용

HTTP에 일어났던 가장 큰 변화는 1994년 말에 이루어졌습니다. 컴퓨터 서비스 회사인 Netscape Communications는 기본 TCP/IP 스택을 통해 HTTP를 전송하는 대신에, TCP/IP 스택 위에 추가적인 암호화된 전송 계층인 SSL을 만들어냈습니다. SSL 1.0은 대중에게 비공개였고, SSL 2.0과 후속 버전인 SSL 3.0을 통해 전자 상거래 웹사이트를 만들 수 있었습니다. 이를 위해서 서버와 클라이언트 간에 교환되는 메시지의 신뢰성을 암호화하고 보장했습니다. SSL은 결국 표준화되어 TLS가 되었습니다.

같은 기간에, 암호화된 전송 계층에 대한 필요하다는 것이 분명해졌습니다. 웹은 더 이상 학문적인 네트워크가 아니라, 광고주, 불특정 개인 혹은 범죄자가 가능한 한 많은 개인정보 데이터를 놓고 경쟁하는 정글이 되었습니다. HTTP를 통해 구축된 애플리케이션이 더욱 강력해지고 주소록, 이메일 혹은 사용자의 지리적 위치와 같은 수 많은 개인 정보에 접근하는 부분이 필요해짐에 따라, 전자 상거래 이외의 경우에서도 TLS에서 필요해졌습니다.

### 복잡한 애플리케이션을 위한 HTTP 사용

Tim Berners-Lee는 원래 HTTP를 읽기 전용 도구로 생각하지 않았습니다.
그는 사람들이 문서를 원격으로 추가하거나 이동시킬 수 있는, 분산된 파일 시스템의 한 종류로 웹을 만들고 싶었습니다. 1996년경에 HTTP는 저작을 허용하도록 확장되었으며 WebDAV라고 불리는 표준이 만들어졌습니다. WebDAV는 주소록 항목들을 다루기 위한 CardDAV 및 달력을 다루기 위한 CalDav와 같은 특정 애플리케이션들로 더 확장되었습니다. 그러나 이런 모든 \*DAV 확장들은 한 가지 결함이 있었는데, 서버에서 구현된 경우에만 사용할 수 있었습니다.

2000년에, HTTP 사용에 대한 새로운 패턴인 {{glossary("REST", "representational state transfer")}} (또는 REST)가 설계가 되었습니다. API는 새로운 HTTP 메서드를 기반으로 하지 않았지만, 대신 기본 HTTP/1.1 메서드를 사용하여 특정 URI에 대한 접근에 의존했습니다. 이를 통해 모든 웹 애플리케이션에서 API가 브라우저나 서버를 업데이트하지 않고도 데이터를 검색하고 수정할 수 있게 되었습니다. 필요한 모든 정보는 웹 사이트가 표준 HTTP/1.1을 통해 제공되는 파일에 포함되었습니다. REST 모델의 단점은 각 웹사이트가 자체 비표준 RESTful API를 정의하고 이를 완전히 제어할 수 있다는 것입니다. 이는 클라이언트와 서버가 상호 운용 가능한 \*DAV 확장과 차이가 있습니다. RESTful API들은 2010년에 들어 매우 보편화되었습니다.

2005년 이후 웹 페이지에서 사용 가능한 API를 사용할 수 있게 되었습니다. 이 API 중 일부는 특정한 목적을 위해 HTTP 프로토콜에 확장을 생성합니다.

- [서버 전송 이벤트](/ko/docs/Web/API/Server-sent_events), 서버가 브라우저로 가끔 메시지를 푸쉬할 수 있습니다.
- [웹소켓](/ko/docs/Web/API/WebSockets_API)은 기존 HTTP 연결을 업그레이드하여 만들 수 있는 새로운 프로토콜입니다.

### 웹의 보안 모델 완화

HTTP는 [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)으로 알려진 웹 보안 모델과는 독립되어 있습니다. 사실, 현재의 웹 보안 모델은 HTTP이 만들어진 이후에 개발되었습니다! 몇 년에 걸쳐, 특정 제약 조건을 두고, 이 정책의 일부 제한 사항을 해제하는 것이 유용한 것으로 입증되었습니다. 서버는 새로운 HTTP 헤더 세트를 사용하여 이러한 제한을 언제, 얼마나 해제해야 하는지 클라이언트에 전송했습니다. [교차 출처 리소스 공유](/ko/docs/Glossary/CORS) (CORS) 및 [컨텐츠 보안 정책](/ko/docs/Web/HTTP/Guides/CSP) (CSP)과 같은 명세 안에 정의되었습니다.

큰 확장 외에, 다른 많은 헤더들이, 때로는 실험적으로만, 추가되었습니다. 주목할 만한 헤더는 프라이버시를 제어하기 위한 Do Not Track ({{HTTPHeader("DNT")}}) 헤더, {{HTTPHeader("X-Frame-Options")}}, 혹은 {{HTTPHeader('Upgrade-Insecure-Requests')}}이 있지만, 더 많은 헤더들이 존재합니다.

## HTTP/2 – 더 나은 성능을 위한 프로토콜

몇 년에 걸쳐, 웹 페이지는 더욱 복잡해졌습니다. 일부는 그 자체로 애플리케이션이기도 했습니다. 더 많은 시각적 미디어가 표시되고 상호작용을 위한 스크립트 코드의 양과 크기도 증가했습니다. 훨씬 더 많은 HTTP 요청을 통해, 많은 데이터가 전송되었고, 이를 통해 HTTP/1.1 연결에 복잡성과 오버헤드가 많이 발생했습니다. 이를 설명하기 위해, Google은 2010년 초반에 실험적인 프로토콜 SPDY를 구현했습니다. 클라이언트와 서버 간 데이터를 교환하는 이 대체 방법은 브라우저와 서버 모두에서 작업하는 개발자들의 관심을 끌었습니다. SPDY는 응답성 증가를 정의하고 중복 데이터 전송 문제를 해결하여 HTTP/2 프로토콜의 기반이 됩니다.

HTTP/2 프로토콜은 HTTP/1.1과 몇가지 특징이 다릅니다.

- 텍스트 프로토콜이 아닌 이진 프로토콜입니다. 읽을 수도 없고 수동으로 만들 수 없습니다. 이러한 장애물에도 불구하고, 향상된 최적화 기술을 구현할 수 있습니다.
- 다중화 프로토콜입니다. 동일한 연결을 통해 병렬 요청을 수행할 수 있어, HTTP/1.x 프로토콜의 제약을 없애줍니다.
- 헤더를 압축합니다. 요청 집합 간에 유사한 경우가 많으므로, 전송된 데이터의 중복과 오버헤드가 제거됩니다.
- 서버가 서버 푸시라는 메커니즘으로 클라이언트 캐시에 데이터를 저장할 수 있습니다.

2015년 5월에 공식적으로 표준화된 HTTP/2는 2022년 1월 전체 웹 사이트의 46.9%로 사용량 정점에 도달했습니다([these stats](https://w3techs.com/technologies/details/ce-http2) 참조). 트래픽이 많은 웹사이트는 데이터 전송 오버헤드와 그에 따른 예산을 절약하기 위한 노력의 일환으로 가장 빠르게 채택되었습니다.

HTTP/2가 웹사이트와 애플리케이션을 변경할 필요가 없었기 때문에 빠른 채택이 가능했을 확률이 높습니다. 이를 사용하려면, 최신 브라우저와 통신하는 최신 서버만 필요했습니다. HTTP/2 채택을 높이기 위해서는 제한된 그룹 집합만 필요했고, 레거시 브라우저와 서버 버전이 갱신되면서 웹 개발자의 큰 노력 없이도 자연스럽게 사용량이 늘어났습니다.

## 차세대-HTTP/2로의 진화

HTTP의 확장성은 여전히 새로운 기능을 추가하는 데 사용되고 있습니다. 특히 2016년에 등장한 HTTP 프로토콜의 새로운 확장을 예로 들 수 있습니다.

- {{HTTPHeader("Alt-Svc")}} 지원은 좀 더 영리한 {{Glossary("CDN")}} 메커니즘을 따라, 신분 증명의 개념과 주어진 자원의 위치를 분리하도록 해줍니다.
- [클라이언트 힌트](/ko/docs/Web/HTTP/Guides/Client_hints)의 도입으로 브라우저 혹은 클라이언트가 요구사항이나 서버의 하드웨어 제약사항에 관한 정보를 사전에 미리 주고 받을 수 있게 되었습니다.
- {{HTTPHeader("Cookie")}} 헤더에 보안 관련 접두사 도입은 보안 쿠키가 변경되지 않았다는 것을 보장하는데 도움을 줍니다.

## HTTP/3 - QUIC를 통한 HTTP

HTTP의 다음 주요 버전인 HTTP/3에서는 이전 버전의 HTTP와 동일한 의미를 가지지만, 전송 계층에서 {{Glossary("TCP")}} 대신 {{Glossary("QUIC")}}를 사용합니다. 2022년 10월까지 [모든 웹사이트의 26%가 HTTP/3를 사용하고 있었습니다](https://w3techs.com/technologies/details/ce-http3).

QUIC는 HTTP 연결에 대해서 훨씬 낮은 대기 시간을 제공하도록 설계되었습니다. HTTP/2와 마찬가지로, 다중화 프로토콜이지만, HTTP/2는 단일 TCP 연결을 통해 실행되어 TCP 계층에서 처리되는 패킷 손실 감지 및 재전송이 모든 스트림을 차단할 수 있습니다. QUIC는 {{Glossary("UDP")}}를 통해 여러 스트림을 실행하고 각 스트림에 대해 독립적으로 패킷 손실 감지 및 재전송을 구현하므로, 오류가 발생하면 해당 패킷에 데이터가 있는 스트림만 차단됩니다.

{{RFC("9114")}}에 정의되어 있고, [HTTP/3은 주요 브라우저에서 지원됩니다](https://caniuse.com/http3). Chromium(및 Chrome 및 Edge와 같은 변형) 및 Firefox도 지원대상에 포함됩니다.
