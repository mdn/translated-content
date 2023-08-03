---
title: 교차 출처 리소스 공유 (CORS)
slug: Web/HTTP/CORS
---

**교차 출처 리소스 공유**(Cross-Origin Resource Sharing, {{Glossary("CORS")}})는 추가 {{Glossary("HTTP")}} 헤더를 사용하여, 한 {{glossary("origin", "출처")}}에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다. 웹 애플리케이션은 리소스가 자신의 출처(도메인, 프로토콜, 포트)와 다를 때 교차 출처 HTTP 요청을 실행합니다.

교차 출처 요청의 예시: `https://domain-a.com`의 프론트 엔드 JavaScript 코드가 {{domxref("XMLHttpRequest")}}를 사용하여 `https://domain-b.com/data.json`을 요청하는 경우.

보안 상의 이유로, 브라우저는 스크립트에서 시작한 교차 출처 HTTP 요청을 제한합니다. 예를 들어, `XMLHttpRequest`와 [Fetch API](/ko/docs/Web/API/Fetch_API)는 [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)을 따릅니다. 즉, 이 API를 사용하는 웹 애플리케이션은 자신의 출처와 동일한 리소스만 불러올 수 있으며, 다른 출처의 리소스를 불러오려면 그 출처에서 올바른 CORS 헤더를 포함한 응답을 반환해야 합니다.![](cors_principle.png)

CORS 체제는 브라우저와 서버 간의 안전한 교차 출처 요청 및 데이터 전송을 지원합니다. 최신 브라우저는 `XMLHttpRequest` 또는 [Fetch](/ko/docs/Web/API/Fetch_API)와 같은 API에서 CORS를 사용하여 교차 출처 HTTP 요청의 위험을 완화합니다.

## 이 글은 누가 읽어야 하나요?

모든 사람이요, 진짜로.

명확히 말하자면, 이 글은 **웹 관리자**, **서버 개발자** 그리고 **프론트엔드 개발자**를 위한 것입니다. 최신 브라우저는 헤더와 정책 집행을 포함한 클라이언트 측 교차 출처 공유를 처리합니다. 그러나 CORS 표준에 맞춘다는 것은 서버에서도 새로운 요청과 응답 헤더를 처리해야 한다는 것입니다. 서버 개발자에게는 [(PHP 코드 조각과 함께 하는) 서버 관점의 교차 출처 공유](/ko/docs/Web/HTTP/CORS)를 다루고 있는 다른 글로 보충하면 도움이 될 것입니다.

## 어떤 요청이 CORS를 사용하나요?

[교차 출처 공유 표준](https://fetch.spec.whatwg.org/#http-cors-protocol)은 다음과 같은 경우에 사이트간 HTTP 요청을 허용합니다.

- 위에서 논의한 바와 같이, {{domxref("XMLHttpRequest")}}와 [Fetch API](/ko/docs/Web/API/Fetch_API) 호출.
- 웹 폰트(CSS 내 `@font-face`에서 교차 도메인 폰트 사용 시), [so that servers can deploy TrueType fonts that can only be cross-site loaded and used by web sites that are permitted to do so.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL 텍스쳐](/ko/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}}를 사용해 캔버스에 그린 이미지/비디오 프레임.
- [이미지로부터 추출하는 CSS Shapes.](/ko/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)

이 글은 교차 출처 리소스 공유에 대한 일반적인 논의이며 필요한 HTTP 헤더에 대한 내용도 포함하고 있습니다.

## 기능적 개요

교차 출처 리소스 공유 표준은 웹 브라우저에서 해당 정보를 읽는 것이 허용된 출처를 서버에서 설명할 수 있는 새로운 [HTTP 헤더](/ko/docs/Web/HTTP/Headers)를 추가함으로써 동작합니다. 추가적으로, 서버 데이터에 부수 효과(side effect)를 일으킬 수 있는 HTTP 요청 메서드({{HTTPMethod("GET")}}을 제외한 HTTP 메서드)에 대해, CORS 명세는 브라우저가 요청을 {{HTTPMethod("OPTIONS")}} 메서드로 "프리플라이트"(preflight, 사전 전달)하여 지원하는 메서드를 요청하고, 서버의 "허가"가 떨어지면 실제 요청을 보내도록 요구하고 있습니다. 또한 서버는 클라이언트에게 요청에 "인증정보"([쿠키](/ko/docs/Web/HTTP/Cookies), [HTTP 인증](/ko/docs/Web/HTTP/Authentication))를 함께 보내야 한다고 알려줄 수도 있습니다.

CORS 실패는 오류의 원인이지만, 보안상의 이유로 JavaScript에서는 오류의 상세 정보에 접근할 수 없으며, 알 수 있는 것은 오류가 발생했다는 사실 뿐입니다. 정확히 어떤 것이 실패했는지 알아내려면 브라우저의 콘솔을 봐야 합니다.

이후 항목에서는 시나리오와 함께, 사용한 HTTP 헤더의 상세 내용을 다룹니다.

## 접근 제어 시나리오 예제

교차 출처 리소스 공유가 동작하는 방식을 보여주는 세 가지 시나리오를 제시하겠습니다. 모든 예제는 지원하는 브라우저에서 교차 출처 요청을 생성할 수 있는 {{domxref("XMLHttpRequest")}}를 사용합니다.

서버 관점의 교차 출처 리소스 공유에 대한 논의는 (PHP 코드와 함께 하는) [서버 사이드 접근 제어 (CORS)](/ko/docs/Web/HTTP/CORS) 문서에서 확인할 수 있습니다.

### 단순 요청(Simple requests)

일부요청은 [CORS preflight](/ko/docs/Glossary/Preflight_request) 를 트리거하지 않습니다. `Fetch` 명세(CORS를 정의한)는 이 용어를 사용하지 않지만, 이 기사에서는 "simple requests"라고 하겠습니다. "simple requests"는 **다음 조건을 모두 충족하는 요청입니다:**

- 다음 중 하나의 메서드

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- 유저 에이전트가 자동으로 설정 한 헤더 (예를들어, {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}, [Fetch 명세에서 "forbidden header name"으로 정의한 헤더](https://fetch.spec.whatwg.org/#forbidden-header-name))외에, 수동으로 설정할 수 있는 헤더는 오직 [Fetch 명세에서 "CORS-safelisted request-header"로 정의한 헤더](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) 뿐입니다.

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (아래의 추가 요구 사항에 유의하세요.)

- {{HTTPHeader("Content-Type")}} 헤더는 다음의 값들만 허용됩니다.

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- 요청에 사용된 {{domxref("XMLHttpRequestUpload")}} 객체에는 이벤트 리스너가 등록되어 있지 않습니다. 이들은 {{domxref("XMLHttpRequest.upload")}} 프로퍼티를 사용하여 접근합니다..
- 요청에 {{domxref("ReadableStream")}} 객체가 사용되지 않습니다.

> **참고:** 이는 웹 컨텐츠가 이미 발행할 수 있는 것과 동일한 종류의 cross-site 요청입니다. 서버가 적절한 헤더를 전송하지 않으면 요청자에게 응답 데이터가 공개되지 않습니다. 따라서 cross-site 요청 위조를 방지하는 사이트는 HTTP 접근 제어를 두려워 할 만한 부분이 없습니다.

> **참고:** **주의:** WebKit Nightly 와 Safari Technology Preview 는 {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Content-Language")}} 헤더에서 허용되는 값에 대한 추가 제약이 있습니다. 이러한 헤더 중 하나에 "nonstandard" 값이 존재하면, WebKit/Safari 는 더이상 요청을 "simple request"로 간주하지 않습니다. 다음 Webkit 버그 외에 WebKit/Safari 가 "nonstandard" 으로 간주하는 값은 문서화되어 있지 않습니다.
>
> - [Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://bugs.webkit.org/show_bug.cgi?id=165178)
> - [Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://bugs.webkit.org/show_bug.cgi?id=165566)
> - [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://bugs.webkit.org/show_bug.cgi?id=166363)
>
> 이 부분은 명세가 아니기 때문에 다른 브라우저에는 이러한 추가 제한 사항이 없습니다.

예를들어, `https://foo.example` 의 웹 컨텐츠가 `https://bar.other` 도메인의 컨텐츠를 호출하길 원합니다. `foo.example`에 배포된 자바스크립트에는 아래와 같은 코드가 사용될 수 있습니다.

```
const xhr = new XMLHttpRequest();
const url = 'https://bar.other/resources/public-data/';

xhr.open('GET', url);
xhr.onreadystatechange = someHandler;
xhr.send();
```

클라이언트와 서버간에 간단한 통신을 하고, CORS 헤더를 사용하여 권한을 처리합니다.

![](simple-req-updated.png)

이 경우 브라우저가 서버로 전송하는 내용을 살펴보고, 서버의 응답을 확인합니다.

```
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
```

요청 헤더의 {{HTTPHeader("Origin")}}을 보면, `https://foo.example`로부터 요청이 왔다는 것을 알 수 있습니다.

```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[…XML Data…]
```

서버는 이에 대한 응답으로 {{HTTPHeader("Access-Control-Allow-Origin")}} 헤더를 다시 전송합니다. 가장 간단한 접근 제어 프로토콜은 {{HTTPHeader("Origin")}} 헤더와 {{HTTPHeader("Access-Control-Allow-Origin")}} 을 사용하는 것입니다. 이 경우 서버는 `Access-Control-Allow-Origin: *`, 으로 응답해야 하며, 이는 **모든** 도메인에서 접근할 수 있음을 의미합니다. `https://bar.other` 의 리소스 소유자가 _오직_ `https://foo.example` 의 요청만 리소스에 대한 접근을 허용하려는 경우 다음을 전송합니다.

```
Access-Control-Allow-Origin: https://foo.example
```

이제 `https://foo.example` 이외의 도메인은 cross-site 방식으로 리소스에 접근할 수 없습니다. 리소스에 대한 접근을 허용하려면, `Access-Control-Allow-Origin` 헤더에는 요청의 `Origin` 헤더에서 전송된 값이 포함되어야 합니다.

### 프리플라이트 요청

"preflighted" request는 위에서 논의한 ["simple requests"](/ko/docs/Web/HTTP/CORS#단순_요청simple_requests) 와는 달리, 먼저 {{HTTPMethod("OPTIONS")}} 메서드를 통해 다른 도메인의 리소스로 HTTP 요청을 보내 실제 요청이 전송하기에 안전한지 확인합니다. cross-origin 요청은 유저 데이터에 영향을 줄 수 있기 때문에 이와같이 미리 전송(preflighted)합니다.

다음은 preflighted 할 요청의 예제입니다.

```
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://bar.other/resources/post-here/');
xhr.setRequestHeader('Ping-Other', 'pingpong');
xhr.setRequestHeader('Content-Type', 'application/xml');
xhr.onreadystatechange = handler;
xhr.send('<person><name>Arun</name></person>');
```

위의 예제는 `POST` 요청과 함께 함께 보낼 XML body를 만듭니다. 또한 비표준 HTTP `Ping-Other` 요청 헤더가 설정됩니다. 이러한 헤더는 HTTP/1.1의 일부가 아니지만 일반적으로 웹 응용 프로그램에 유용합니다. Content-Type 이 `application/xml`이고, 사용자 정의 헤더가 설정되었기 때문에 이 요청은 preflighted 처리됩니다.

![](preflight_correct.png)

(참고: 아래 설명 된 것처럼 실제 `POST` 요청에는 `Access-Control-Request-*` 헤더가 포함되지 않습니다. `OPTIONS` 요청에만 필요합니다.)

클라이언트와 서버간의 완전한 통신을 살펴보겠습니다. 첫 번째 통신은 *preflight request/response*입니다.

```
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type


HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

preflight request가 완료되면 실제 요청을 전송합니다.

```
POST /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: https://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: https://foo.example
Pragma: no-cache
Cache-Control: no-cache

<person><name>Arun</name></person>


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain

[Some GZIP'd payload]
```

첫 번째 예제의 1 - 10 행은 {{HTTPMethod("OPTIONS")}} 메서드를 사용한 preflight request를 나타냅니다. 브라우저는 위의 자바스크립트 코드 스니펫이 사용중인 요청 파라미터를 기반으로 전송해야 합니다. 그렇게 해야 서버가 실제 요청 파라미터로 요청을 보낼 수 있는지 여부에 응답할 수 있습니다. OPTIONS는 서버에서 추가 정보를 판별하는데 사용하는 HTTP/1.1 메서드입니다. 또한 {{Glossary("safe")}} 메서드이기 때문에, 리소스를 변경하는데 사용할 수 없습니다. OPTIONS 요청과 함께 두 개의 다른 요청 헤더가 전송됩니다. (10, 11행)

```
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

{{HTTPHeader("Access-Control-Request-Method")}} 헤더는 preflight request의 일부로, 실제 요청을 전송할 때 `POST` 메서드로 전송된다는 것을 알려줍니다. {{HTTPHeader("Access-Control-Request-Headers")}} 헤더는 실제 요청을 전송 할 때 `X-PINGOTHER` 와 `Content-Type` 사용자 정의 헤더와 함께 전송된다는 것을 서버에 알려줍니다. 이제 서버는 이러한 상황에서 요청을 수락할지 결정할 수 있습니다.

위의 13 - 22 행은 서버가 요청 메서드와 (`POST`) 요청 헤더를 (`X-PINGOTHER`) 받을 수 있음을 나타내는 응답입니다. 특히 16 - 19행을 살펴보겠습니다.

```
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

서버는 `Access-Control-Allow-Methods` 로 응답하고 `POST` 와 `GET` 이 리소스를 쿼리하는데 유용한 메서드라고 가르쳐줍니다. 이 헤더는 {{HTTPHeader("Allow")}} 응답 헤더와 유사하지만, 접근 제어 컨텍스트 내에서 엄격하게 사용됩니다.

또한 `Access-Control-Allow-Headers` 의 값을 "`X-PINGOTHER, Content-Type`" 으로 전송하여 실제 요청에 헤더를 사용할 수 있음을 확인합니다. `Access-Control-Allow-Methods`와 마찬가지로 `Access-Control-Allow-Headers` 는 쉼표로 구분된 허용 가능한 헤더 목록입니다.

마지막으로{{HTTPHeader("Access-Control-Max-Age")}}는 다른 preflight request를 보내지 않고, preflight request에 대한 응답을 캐시할 수 있는 시간(초)을 제공합니다. 위의 코드는 86400 초(24시간) 입니다. 각 브라우저의 [최대 캐싱 시간](/ko/docs/Web/HTTP/Headers/Access-Control-Max-Age)은 `Access-Control-Max-Age` 가 클수록 우선순위가 높습니다.

#### Preflighted requests 와 리다이렉트

모든 브라우저가 preflighted request 후 리다이렉트를 지원하지는 않습니다. preflighted request 후 리다이렉트가 발생하면 일부 브라우저는 다음과 같은 오류 메시지를 띄웁니다.

> 요청이 'https\://example.com/foo'로 리다이렉트 되었으며, preflight가 필요한 cross-origin 요청은 허용되지 않습니다.

> 요청에 preflight가 필요합니다. preflight는 cross-origin 리다이렉트를 허용하지 않습니다.

CORS 프로토콜은 본래 그 동작(리다이렉트)이 필요했지만, [이후 더 이상 필요하지 않도록 변경되었습니다](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). 그러나 모든 브라우저가 변경 사항을 구현하지는 않았기 때문에, 본래의 필요한 동작은 여전히 나타납니다.

브라우저가 명세를 따라잡을 때 까지 다음 중 하나 혹은 둘 다를 수행하여 이 제한을 해결할 수 있습니다.

- preflight 리다이렉트를 방지하기 위해 서버측 동작을 변경
- preflight를 발생시키지 않는 [simple request](#simple_requests) 가 되도록 요청을 변경

이것이 가능하지 않은 경우 다른 방법도 있습니다.

1. Fetch API를 통해 {{domxref("Response.url")}} 이나 {{domxref("XMLHttpRequest.responseURL")}}를 사용하여 [simple request](#simple_requests) 를 작성합니다. 이 simple request를 이용하여 실제 preflighted request가 끝나는 URL을 판별하세요.
2. 첫 번째 단계에서 `Response.url` 혹은 `XMLHttpRequest.responseURL` 로부터 얻은 URL을 사용하여 또 다른 요청(실제 요청)을 만듭니다.

그러나 요청에 `Authorization` 헤더가 있기 때문에 preflight를 트리거하는 요청일 경우에, 위의 단계를 사용하여 제한을 제거할 수 없습니다. 또한 요청이 있는 서버를 제어하지 않으면 문제를 해결할 수 없습니다.

### 자격 증명을 포함한 요청

{{domxref("XMLHttpRequest")}} 혹은 [Fetch](/ko/docs/Web/API/Fetch_API) 를 사용할 때 CORS 에 의해 드러나는 가장 흥미로운 기능은 "credentialed" requests 입니다. credentialed requests는 [HTTP cookies](/ko/docs/Web/HTTP/Cookies) 와 HTTP Authentication 정보를 인식합니다. 기본적으로 cross-site `XMLHttpRequest` 나 [Fetch](/ko/docs/Web/API/Fetch_API) 호출에서 브라우저는 자격 증명을 보내지 **않습니다.** `XMLHttpRequest` 객체나 {{domxref("Request")}} 생성자가 호출될 때 특정 플래그를 설정해야 합니다.

이 예제에서 원래 `http://foo.example` 에서 불러온 컨텐츠는 쿠키를 설정하는 `http://bar.other` 리소스에 simple GET request를 작성합니다. foo.example의 내용은 다음과 같은 자바스크립트를 포함할 수 있습니다.

```
const invocation = new XMLHttpRequest();
const url = 'http://bar.other/resources/credentialed-content/';

function callOtherDomain() {
  if (invocation) {
    invocation.open('GET', url, true);
    invocation.withCredentials = true;
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
```

7행은 쿠키와 함께 호출하기위한 {{domxref("XMLHttpRequest")}} 의 플래그를 보여줍니다. 이 플래그는 `withCredentials` 라고 불리며 부울 값을 갖습니다. 기본적으로 호출은 쿠키 없이 이루어집니다. 이것은 simple `GET` request이기 때문에 preflighted 되지 않습니다. 그러나 브라우저는 {{HTTPHeader("Access-Control-Allow-Credentials")}}: `true` 헤더가 없는 응답을 **거부합니다**. 따라서 호출된 웹 컨텐츠에 응답을 제공하지 **않습니다.**

![](cred-req-updated.png)

클라이언트와 서버간의 통신 예제는 다음과 같습니다.

```
GET /resources/credentialed-content/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Referer: http://foo.example/examples/credential.html
Origin: http://foo.example
Cookie: pageAccess=2


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 106
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain


[text/plain payload]
```

10행에는 `http://bar.other`의 컨텐츠를 대상으로 하는 쿠키가 포함되어 있습니다. 하지만 17행의 {{HTTPHeader("Access-Control-Allow-Credentials")}}: `true` 로 응답하지 않으면, 응답은 무시되고 웹 컨텐츠는 제공되지 않습니다.

#### 실행 전 요청 및 자격 증명

CORS 실행 전 요청에는 자격 증명이 포함되지 않아야 합니다. 실행 전 요청에 대한 *응답*은 `Access-Control-Allow-Credentials: true`를 지정하여 자격 증명으로 실제 요청을 수행할 수 있음을 나타내야 합니다.

> **참고:** #### 참고일부 엔터프라이즈 인증 서비스는 `cors-protocol-and-credentials` 사양을 위반하여 실행 전 요청에서 TLS 클라이언트 인증서를 보내도록 요구합니다.Firefox 87에서는 기본 설정을 지정하여 이 비준수 동작을 활성화할 수 있습니다: `network.cors_preflight.allow_client_cert`을 `true`로 설정 ([Firefox bug 1511151](https://bugzil.la/1511151)). Chromium 기반 브라우저는 현재 항상 CORS 실행 전 요청에서 TLS 클라이언트 인증서를 보냅니다([Chrome bug 775438](https://bugs.chromium.org/p/chromium/issues/detail?id=775438)).

#### 자격증명 요청 및 와일드카드(Credentialed requests and wildcards)

자격 증명 요청에 응답할 때 서버는 **반드시** "`*`" 와일드카드를 지정하는 대신 `Access-Control-Allow-Origin` 헤더 값에 출처를 지정해야 합니다.

위 예제의 요청 헤더에 `Cookie` 헤더가 포함되어 있기 때문에 `Access-Control-Allow-Origin` 헤더의 값이 "\*"인 경우 요청이 실패합니다. 위 요청은 `Access-Control-Allow-Origin` 헤더가 "`*`" 와일드 카드가 아니라 "`http://foo.example`" 본래 주소이기 때문에 자격증명 인식 컨텐츠는 웹 호출 컨텐츠로 리턴됩니다.

위 예제의 `Set-Cookie` 응답 헤더는 추가 쿠키를 설정합니다. 실패한 경우 사용한 API에 따라 예외가 발생합니다.

#### Third-party cookies

CORS 응답에 설정된 쿠키에는 일반적인 third-party cookie 정책이 적용됩니다. 위의 예제는 `foo.example`에서 페이지를 불러지만 20행의 쿠키는 `bar.other` 가 전송합니다. 때문에 사용자의 브라우저 설정이 모든 third-party cookies를 거부하도록 되어 있다면, 이 쿠키는 저장되지 않습니다.

## HTTP 응답 헤더

이 섹션에서는 Cross-Origin 리소스 공유 명세에 정의된 대로 서버가 접근 제어 요청을 위해 보내는 HTTP 응답 헤더가 나열되어 있습니다. The previous section gives an overview of these in action.

### Access-Control-Allow-Origin

리턴된 리소스에는 다음 구문과 함께 하나의 {{HTTPHeader("Access-Control-Allow-Origin")}} 헤더가 있을 수 있습니다.

```
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` 은 단일 출처를 지정하여 브라우저가 해당 출처가 리소스에 접근하도록 허용합니다. 또는 자격 증명이 **없는** 요청의 경우 "`*`" 와일드 카드는 브라우저의 origin에 상관없이 모든 리소스에 접근하도록 허용합니다.

예를들어 `https://mozilla.org` 의 코드가 리소스에 접근 할 수 있도록 하려면 다음과 같이 지정할 수 있습니다.

```
Access-Control-Allow-Origin: https://mozilla.org
```

서버가 "`*`" 와일드카드 대신에 하나의 origin을 지정하는 경우, 서버는 {{HTTPHeader("Vary")}} 응답 헤더에 `Origin` 을 포함해야 합니다. 이 origin은 화이트 리스트의 일부로 요청 origin에 따라 동적으로 변경될 수 있습니다. 서버 응답이 {{HTTPHeader("Origin")}} 요청 헤더에 따라 다르다는것을 클라이언트에 알려줍니다.

### Access-Control-Expose-Headers

{{HTTPHeader("Access-Control-Expose-Headers")}} 헤더를 사용하면 브라우저가 접근할 수 있는 헤더를 서버의 화이트리스트에 추가할 수 있습니다.

```
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

예를들면 다음과 같습니다.

```
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

`X-My-Custom-Header` 와 `X-Another-Custom-Header` 헤더가 브라우저에 드러납니다.

### Access-Control-Max-Age

{{HTTPHeader("Access-Control-Max-Age")}} 헤더는 preflight request 요청 결과를 캐시할 수 있는 시간을 나타냅니다. preflight request 예제는 위를 참조하세요.

```
Access-Control-Max-Age: <delta-seconds>
```

`delta-seconds` 파라미터는 결과를 캐시할 수 있는 시간(초)를 나타냅니다.

### Access-Control-Allow-Credentials

{{HTTPHeader("Access-Control-Allow-Credentials")}} 헤더는 `credentials` 플래그가 true일 때 요청에 대한 응답을 표시할 수 있는지를 나타냅니다. preflight request에 대한 응답의 일부로 사용하는 경우, credentials을 사용하여 실제 요청을 수행할 수 있는지를 나타냅니다. simple `GET` requests는 preflighted되지 않으므로 credentials이 있는 리소스를 요청하면, 이 헤더가 리소스와 함께 반환되지 않습니다. 이 헤더가 없으면 브라우저에서 응답을 무시하고 웹 컨텐츠로 반환되지 않는다는 점을 주의하세요.

```
Access-Control-Allow-Credentials: true
```

[Credentialed requests](#requests_with_credentials) 은 위에 설명되어 있습니다.

### Access-Control-Allow-Methods

{{HTTPHeader("Access-Control-Allow-Methods")}} 헤더는 리소스에 접근할 때 허용되는 메서드를 지정합니다. 이 헤더는 preflight request에 대한 응답으로 사용됩니다. 요청이 preflighted 되는 조건은 위에 설명되어 있습니다.

```
Access-Control-Allow-Methods: <method>[, <method>]*
```

이 헤더를 브라우저로 전송하는 예제를 포함하여 [preflight request 의 예제는](#preflighted_requests), 위에 나와 있습니다.

### Access-Control-Allow-Headers

[preflight request](#preflighted_requests) 에 대한 응답으로 {{HTTPHeader("Access-Control-Allow-Headers")}} 헤더가 사용됩니다. 실제 요청시 사용할 수 있는 HTTP 헤더를 나타냅니다.

```
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## HTTP 요청 헤더

이 섹션에는 cross-origin 공유 기능을 사용하기 위해 클라이언트가 HTTP 요청을 발행할 때 사용할 수 있는 헤더가 나열되어 있습니다. 이 헤더는 서버를 호출할 때 설정됩니다. cross-site {{domxref("XMLHttpRequest")}} 기능을 사용하는 개발자는 프로그래밍 방식으로 cross-origin 공유 요청 헤더를 설정할 필요가 없습니다.

### Origin

{{HTTPHeader("Origin")}} 헤더는 cross-site 접근 요청 또는 preflight request의 출처를 나타냅니다.

```
Origin: <origin>
```

origin 은 요청이 시작된 서버를 나타내는 URI 입니다. 경로 정보는 포함하지 않고, 오직 서버 이름만 포함합니다.

> **참고:** `origin` 값은 `null` 또는 URI 가 올 수 있습니다.

접근 제어 요청에는 **항상** {{HTTPHeader("Origin")}} 헤더가 전송됩니다.

### Access-Control-Request-Method

{{HTTPHeader("Access-Control-Request-Method")}} 헤더는 실제 요청에서 어떤 HTTP 메서드를 사용할지 서버에게 알려주기 위해, preflight request 할 때에 사용됩니다.

```
Access-Control-Request-Method: <method>
```

이 사용법의 예제는 [위에서](#preflighted_requests) 찾을 수 있습니다.

### Access-Control-Request-Headers

{{HTTPHeader("Access-Control-Request-Headers")}} 헤더는 실제 요청에서 어떤 HTTP 헤더를 사용할지 서버에게 알려주기 위해, preflight request 할 때에 사용됩니다.

```
Access-Control-Request-Headers: <field-name>[, <field-name>]*
```

이 사용법의 예제는 [위에서](#preflighted_requests) 찾을 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CORS errors](/ko/docs/Web/HTTP/CORS/Errors)
- [Enable CORS: I want to add CORS support to my server](https://enable-cors.org/server.html)
- {{domxref("XMLHttpRequest")}}
- [Fetch API](/ko/docs/Web/API/Fetch_API)
- [Will it CORS?](https://httptoolkit.tech/will-it-cors) - an interactive CORS explainer & generator
- [Using CORS with All (Modern) Browsers](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [How to run Chrome browser without CORS](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Stack Overflow answer with "how to" info for dealing with common problems](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - How to avoid the CORS preflight
  - How to use a CORS proxy to get around _"No Access-Control-Allow-Origin header"_
  - How to fix _"Access-Control-Allow-Origin header must not be the wildcard"_
