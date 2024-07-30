---
title: 교차 출처 리소스 공유 (CORS)
slug: Web/HTTP/CORS
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

**교차 출처 리소스 공유**(Cross-Origin Resource Sharing, {{Glossary("CORS")}})는 브라우저가 자신의 출처가 아닌 다른 어떤 {{glossary("origin", "출처")}}(도메인, 스킴 혹은 포트)로부터 자원을 로딩하는 것을 허용하도록 서버가 허가 해주는 {{Glossary("HTTP")}} 헤더 기반 메커니즘입니다. 또한 CORS 는 교차 출처 리소스를 호스팅하는 서버가 실제 요청을 허가할 것인지 확인하기 위해 브라우저가 보내는 "사전 요청(프리플라이트, Preflight)" 메커니즘에 의존합니다. 이 사전 요청에서 브라우저는 실제 요청에서 사용할 HTTP 메서드와 헤더들에 대한 정보가 표시된 헤더에 담아 보냅니다.

교차 출처 요청의 예시: `https://domain-a.com` 에서 제공되는 프론트엔드 JavaScript 코드가 {{domxref("Window/fetch", "fetch()")}}를 사용하여 `https://domain-b.com/data.json` 에 요청하는 경우.

보안 상의 이유로 브라우저는 스크립트에서 시작한 교차 출처 HTTP 요청을 제한합니다. 예를 들어, `fetch()` 와 {{domxref("XMLHttpRequest")}} 는 [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)을 따릅니다. 이는 이러한 API를 사용하는 웹 애플리케이션이 애플리케이션이 로드된 동일한 출처에서만 리소스를 요청할 수 있으며, 다른 출처의 응답에 올바른 CORS 헤더가 포함되어 있지 않는 한 그렇지 못하다는 것을 의미합니다.

![Diagrammatic representation of CORS mechanism](cors_principle.png)

CORS 메커니즘은 브라우저와 서버 간의 안전한 교차 출처 요청 및 데이터 전송을 지원합니다. 브라우저는 교차 출처 HTTP 요청의 위험을 완화하기 위해 `fetch()` 나 `XMLHttpRequest` 같은 API에서 CORS를 사용합니다.

## 어떤 요청이 CORS를 사용합니까?

이 [교차 출처 공유 표준](https://fetch.spec.whatwg.org/#http-cors-protocol)은 다음과 같은 경우에 교차 출처 HTTP 요청을 가능하게 합니다.

- 위에서 언급한 `fetch()` 또는 `XMLHttpRequest`의 호출.
- 웹 폰트(CSS 내 `@font-face`에서 교차 도메인 폰트 사용 시), [서버가 교차 출처로만 로드될 수 있고 허가된 웹사이트에서만 사용할 수 있는 TrueType 폰트를 배포할 수 있게 합니다.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL 텍스쳐](/ko/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}}를 사용해 캔버스에 그린 이미지/비디오 프레임.
- [이미지로부터 추출하는 CSS Shapes.](/ko/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)

교차 출처 리소스 공유에 대한 일반적인 글이며 필요한 HTTP 헤더에 대한 논의도 포함하고 있습니다.

## 기능적 개요

교차 출처 리소스 공유 표준은 서버가 웹 브라우저에서 해당 정보를 읽는 것이 허용된 출처를 설명할 수 있도록 새로운 [HTTP 헤더](/ko/docs/Web/HTTP/Headers)를 추가함으로써 동작합니다. 추가적으로, 서버 데이터에 부수 효과(side effect)를 일으킬 수 있는 HTTP 요청 방법(특히 {{HTTPMethod("GET")}} 이외의 HTTP 메서드 또는 특정 [MIME 타입](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)을 사용하는 {{HTTPMethod("POST")}})에 대해서, CORS 명세는 브라우저가 HTTP {{HTTPMethod("OPTIONS")}} 메서드로 서버에서 지원하는 메서드들을 요구하는 요청을 "사전 전달(프리플라이트)"한 다음, 서버로부터 "승인"을 받은 후 실제 요청을 보내도록 지시합니다. 또한 서버는 요청과 함께 "자격 증명"(예를 들어 [쿠키](/ko/docs/Web/HTTP/Cookies) 및 [HTTP 인증](/ko/docs/Web/HTTP/Authentication))을 전송해야 하는지 여부를 클라이언트에게 알릴 수 있습니다.

CORS 실패는 오류를 발생시키지만, 보안상의 이유로 오류에 대한 세부 사항은 JavaScript에 제공되지 않습니다. 코드가 알 수 있는 것은 오류가 발생했다는 것뿐입니다. 무엇이 구체적으로 잘못되었는지를 확인하려면 브라우저의 콘솔에서 세부 사항을 살펴봐야 합니다.

다음 섹션에서는 다양한 시나리오를 논의하고, 사용되는 HTTP 헤더에 대한 세부 사항을 제공합니다.

## 접근 제어 시나리오 예제

교차 출처 리소스 공유가 동작하는 방식을 보여주는 세 가지 시나리오를 제시하겠습니다. 모든 예제는 지원하는 브라우저에서 교차 출처 요청을 생성할 수 있는 {{domxref("Window/fetch", "fetch()")}}를 사용합니다.

### 단순 요청(Simple requests)

일부 요청은 CORS 사전 요청을 트리거하지 않습니다. 이러한 요청은 구식 [CORS 사양](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology)에서는 "단순 요청"이라고 불렸으나, 현재 CORS 정의하는 [Fetch 사양](https://fetch.spec.whatwg.org/)에서는 이 용어를 사용하지 않습니다.

이러한 동기는 HTML 4.0의 {{HTMLElement("form")}} 요소(교차 사이트 {{domxref("Window/fetch", "fetch()")}} 와 {{domxref("XMLHttpRequest")}} 보다 이전에 존재한 요소)가 어떤 출처로든 단순 요청을 제출할 수 있다는 것입니다. 따라서 서버 쓰기를 수행하는 모든 사람은 이미 {{Glossary("CSRF", "사이트 간 요청 위조(Cross Site Request Forgery, CSRF)")}}로부터 보호하고 있어야 합니다. 이러한 가정 하에서, CSRF 의 위협은 폼 제출의 위협과 다르지 않기 때문에 서버는 폼 제출처럼 보이는 요청을 받기 위해 사전 요청에 응답하는 옵트-인(opt-in)을 할 필요가 없습니다. 그러나 서버는 여전히 {{HTTPHeader("Access-Control-Allow-Origin")}} 을 사용하여 스크립트와 응답을 공유하도록 옵트-인 해야 합니다.

단순 요청은 다음 조건을 모두 충족하는 요청입니다.

- 다음 중 하나의 메서드

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- 유저 에이전트가 자동으로 설정한 헤더(예를들어, {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}, [Fetch 명세에서 "forbidden header name"으로 정의한 헤더](https://fetch.spec.whatwg.org/#forbidden-header-name)) 외에, 수동으로 설정할 수 있는 헤더는 오직 [Fetch 명세에서 "CORS-safelisted request-header"로 정의한 헤더](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) 뿐입니다.

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (아래의 추가 요구 사항에 유의하세요.)
  - {{HTTPHeader("Range")}} (오직 [단순 범위 헤더 값](https://fetch.spec.whatwg.org/#simple-range-header-value), 예를 들어 `bytes=256-` 혹은 `bytes=127-255`)

- {{HTTPHeader("Content-Type")}} 헤더에 지정된 {{Glossary("MIME type","미디어 타입")}}에 대해 허용된 타입/서브타입 조합은 다음과 같습니다.

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- 요청이 {{domxref("XMLHttpRequest")}} 객체를 사용하여 이루어진 경우, 요청에 사용된 {{domxref("XMLHttpRequest.upload")}} 속성에 의해 반환된 객체에 이벤트 리스너가 등록되지 않습니다. 즉, {{domxref("XMLHttpRequest")}} 인스턴스 `xhr`이 있다면 업로드를 모니터링하기 위한 이벤트 리스너를 추가하는 `xhr.upload.addEventListener()`를 호출하는 코드가 존재하지 않는다는 것입니다.
- 요청에 {{domxref("ReadableStream")}} 객체가 사용되지 않습니다.

> [!NOTE]
> WebKit Nightly 와 Safari Technology Preview 는 Accept, Accept-Language, Content-Language 헤더에 허용되는 값에 추가적인 제약을 가합니다. 이러한 헤더 중 하나라도 "비표준" 값을 갖는 경우, WebKit/Safari 는 해당 요청을 "단순 요청"으로 간주하지 않습니다. WebKit/Safari 에서 어떤 값을 "비표준"으로 간주하는지는 다음의 WebKit 버그 외에는 문서화되어 있지 않습니다:
>
> - [Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://bugs.webkit.org/show_bug.cgi?id=165178)
> - [Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://bugs.webkit.org/show_bug.cgi?id=165566)
> - [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://bugs.webkit.org/show_bug.cgi?id=166363)
>
> 이 부분은 CORS 명세가 아니기 때문에 다른 브라우저에는 이러한 추가 제한 사항이 없습니다.

예를 들어 `https://foo.example`의 웹 콘텐츠가 `https://bar.other` 도메인에서 JSON 콘텐츠를 가져오고자 한다고 가정해봅시다. 이러한 종류의 코드는 `foo.example`에 배포된 JavaScript에서 사용될 수 있습니다.

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

이 작업은 클라이언트와 서버 간의 간단한 교환을 수행하며, 권한 처리를 위해 CORS 헤더를 사용합니다.

![Diagram of simple CORS GET request](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

이 경우 브라우저가 서버로 보내는 내용을 살펴보겠습니다.

```http
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
```

주목할 요청 헤더는 {{HTTPHeader("Origin")}} 으로, 요청이 `https://foo.example` 에서 왔음을 나타냅니다.

이제 서버가 어떻게 응답하는지 살펴보겠습니다.

```http
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

서버는 {{HTTPHeader("Access-Control-Allow-Origin")}} 헤더에 **모든** 출처에서 해당 리소스에 접근할 수 있음을 의미하는 `Access-Control-Allow-Origin: *` 을 반환합니다.

```http
Access-Control-Allow-Origin: *
```

이 {{HTTPHeader("Origin")}} 및 {{HTTPHeader("Access-Control-Allow-Origin")}} 헤더 패턴은 접근 제어 프로토콜의 가장 간단한 사용법입니다. 만약 `https://bar.other` 의 리소스 소유자가 해당 리소스의 접근을 오직 `https://foo.example` 출처에서 오는 요청(즉, `https://foo.example` 이외의 도메인에서는 교차 출처 방식으로 해당 리소스에 접근할 수 없음)으로만 제한하길 원한다면 다음과 같이 응답을 보낼 것입니다.

```http
Access-Control-Allow-Origin: https://foo.example
```

> **참고:** [자격 증명](#requests_with_credentials)이 포함된 요청에 응답할 때, 서버는 Access-Control-Allow-Origin 헤더의 값으로 "\*" 와일드카드를 지정하는 대신 특정 출처를 **반드시** 지정해야 합니다.

### 사전 요청(Preflighted requests)

[단순 요청](#simple_requests)과 달리 "사전 전송(preflighted)" 요청의 경우 실제 요청을 보내는 것이 안전한지 판단하기 위해 브라우저가 먼저 {{HTTPMethod("OPTIONS")}} 메서드를 사용해 다른 출처의 리소스에 HTTP 요청을 보냅니다. 이러한 교차 출처 요청은 사용자 데이터에 영향을 미칠 수 있기 때문에 사전에 전송됩니다.

다음은 사전 요청이 필요한 요청의 예시입니다.

```js
const fetchPromise = fetch("https://bar.other/doc", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "text/xml",
    "X-PINGOTHER": "pingpong",
  },
  body: "<person><name>Arun</name></person>",
});

fetchPromise.then((response) => {
  console.log(response.status);
});
```

위 예제는 `POST` 요청과 함께 보낼 XML 바디를 만듭니다. 또한, 비표준 HTTP `X-PINGOTHER` 요청 헤더가 설정됩니다. 이러한 헤더는 HTTP/1.1의 일부가 아니지만 일반적으로 웹 애플리케이션에 유용합니다. 요청이 `Content-Type` 헤더에 `text/xml` 을 사용하고, 사용자 지정 헤더가 설정되어 있기 때문에 이 요청은 사전 요청됩니다.

![Diagram of a request that is preflighted](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> **참고:** 아래 설명한 바와 같이 실제 `POST` 요청에는 `Access-Control-Request-*` 헤더가 포함되지 않습니다. 이 헤더들은 오직 `OPTIONS` 요청에만 필요합니다.

클라이언트와 서버 간의 전체 통신을 살펴보겠습니다. 첫 번째 통신은 사전 요청과 그에 대한 응답입니다.

```http
OPTIONS /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother

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

위 첫 번째 블록은 {{HTTPMethod("OPTIONS")}} 메서드를 사용한 사전 요청을 나타냅니다. 브라우저는 위 JavaScript 코드 스니펫(snippet)에서 사용한 요청 파라미터를 기준으로 사전 요청이 필요하다고 결정합니다. 이 사전 요청을 통해 서버는 실제 요청 파라미터로 요청을 보내는 것이 적절한지 응답할 수 있습니다. OPTIONS 는 서버로부터 추가 정보를 얻기 위해 사용되는 HTTP/1.1 메서드이며 리소스를 변경할 수 없는 {{Glossary("Safe/HTTP", "안전한")}} 메서드입니다. OPTIONS 요청과 함께 두 개의 다른 요청 헤더가 전송됩니다.

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

{{HTTPHeader("Access-Control-Request-Method")}} 헤더는 사전 요청의 일부로써 서버에게 실제 요청이 전송될 때 `POST` 요청 메서드를 사용할 것임을 알립니다. {{HTTPHeader("Access-Control-Request-Headers")}} 헤더는 실제 요청이 전송될 때 사용자 정의 헤더 `X-PINGOTHER` 와 `Content-Type` 를 사용할 것임을 서버에게 알립니다. 이제 서버는 이러한 조건 하에서 요청을 수락할 수 있는지 여부를 결정할 기회를 갖게 됩니다.

위 두 번째 블록은 서버가 반환하는 응답으로, 요청 메서드(`POST`)와 요청 헤더(`X-PINGOTHER`)가 허용된다는 것을 나타냅니다. 이어지는 내용을 자세히 살펴보겠습니다.

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

서버는 `Access-Control-Allow-Origin: https://foo.example` 헤더로 응답하여 요청을 보낸 출처 도메인만 접근 가능하도록 제한합니다. 또한 `Access-Control-Allow-Methods` 헤더로 응답하여 `POST` 와 `GET` 메서드가 해당 리소스를 요청하는 데 유효한 메서드임을 나타냅니다(이 헤더는 {{HTTPHeader("Allow")}} 응답 헤더와 유사하지만, 접근 제어 맥락 내에서 엄격하게 사용됩니다).

서버는 또한 `Access-Control-Allow-Headers` 헤더에 "`X-PINGOTHER, Content-Type`" 값을 설정하여 보내 이 헤더들이 실제 요청에 사용할 수 있는 허용된 헤더임을 확인해줍니다. `Access-Control-Allow-Methods` 와 마찬가지로 `Access-Control-Allow-Headers` 는 허용 가능한 헤더의 쉼표로 구분합니다.

마지막으로, {{HTTPHeader("Access-Control-Max-Age")}} 는 또 다른 사전 요청을 보내지 않도록 사전 요청에 대한 응답을 얼마나 오래동안 캐시할 수 있는지 초 단위 시간 값을 제공합니다. 기본 값은 5초입니다. 현재 최대 캐시 시간은 86400초(= 24시간)입니다. 각 브라우저는 `Access-Control-Max-Age` 가 이를 초과할 때 우선되는 [최대 내부 값](/ko/docs/Web/HTTP/Headers/Access-Control-Max-Age)을 가집니다.

사전 요청이 한번 완료되면 실제 요청이 전송됩니다.

```http
POST /doc HTTP/1.1
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

[Some XML payload]
```

#### 사전 요청과 리다이렉트

현재 모든 브라우저가 사전 요청 후 리디렉션하는 것을 지원하지 않습니다. 사전 요청 후 리다이렉트가 발생하면 일부 브라우저는 다음과 같은 오류 메시지를 띄웁니다.

> 요청이 `https://example.com/foo` 로 리디렉션되었습니다. 이는 사전 요청이 필요한 교차 출처 요청에 대해 허용되지 않습니다.
> 요청은 사전 요청이 필요합니다. 이는 교차 출처 리디렉트를 허용되지 않습니다.

CORS 프로토콜은 원래 그러한 동작(리다이렉트)을 필요했지만, [이후 더 이상 필요하지 않도록 변경되었습니다](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). 그러나 모든 브라우저가 변경 사항을 구현하지는 않았기 때문에, 따라서 원래 필요했었던 동작(리다이렉트)이 여전히 보입니다.

브라우저가 명세를 따라잡을 때까지 다음 중 하나 또는 둘 다 수행하여 이 제한을 해결할 수 있습니다.

- 사전 요청을 피하거나 리디렉션을 피하기 위해(혹은 둘 다) 서버 측 동작을 변경
- 사전 요청을 발생시키지 않는 [단순 요청](#simple_requests)으로 변경

위 방법이 가능하지 않은 경우 다른 방법도 있습니다.

1. 실제 사전 요청이 도달할 URL 을 판별하기 위해 Fetch API 의 {{domxref("Response.url")}} 또는 {{domxref("XMLHttpRequest.responseURL")}}을 사용해 [단순 요청](#simple_requests)을 만듭니다.
2. 첫 번째 단계에서 `Response.url` 혹은 `XMLHttpRequest.responseURL` 로부터 얻은 URL을 사용하여 또 다른 요청(실제 요청)을 만듭니다.

그러나 `Authorization` 헤더가 포함되어 있어 사전 요청을 트리거 한 요청이라면 위 단계를 통해 이 제한을 우회할 수 없습니다. 그리고 요청이 이뤄지는 서버에 대한 제어가 없다면 전혀 우회할 수 없습니다.

### 자격 증명을 포함한 요청

> **참고:** 다른 도메인으로 자격 증명 요청을 할 때, 서드파티 쿠키 정책이 여전히 적용됩니다. 이 정책은 서버와 클라이언트에서 설명된 모든 설정과 관계없이 항상 적용됩니다.

{{domxref("Window/fetch", "fetch()")}} 혹은 {{domxref("XMLHttpRequest")}} 와 CORS 을 통해 제공된 가장 흥미로운 기능은 [HTTP 쿠키](/ko/docs/Web/HTTP/Cookies)와 HTTP 인증 정보를 인식하는 "자격 증명이 포함된" 요청을 할 수 있다는 것입니다. 기본적으로 교차 출처 `fetch()` 또는 `XMLHttpRequest` 호출에서는 브라우저가 자격 증명을 전송하지 **않습니다.**

`fetch()` 요청에 자격 증명을 포함하려면, [`credentials`](/ko/docs/Web/API/RequestInit#credentials) 옵션을 `"include"` 로 설정하십시오.

`XMLHttpRequest` 요청에 자격 증명을 포함하려면, {{domxref("XMLHttpRequest.withCredentials")}} 속성을 `true` 로 설정하십시오.

이 예시에서 `https://foo.example` 에서 로드된 콘텐츠는 `https://bar.other` 의 리소스에 쿠키가 포함된 GET 메서드 단순 요청을 보냅니다. foo.example 의 콘텐츠는 다음과 같은 JavaScript 코드를 포함할 수 있습니다.

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

이 코드는 {{domxref("Request")}} 객체를 생성하고, 생성자에서 `credentials` 옵션을 `"include"` 로 설정한 다음 이 요청을 `fetch()` 에 전달합니다. 이는 `GET` 메서드 단순 요청이기 때문에 사전 요청이 수행되지 않지만, 브라우저는 {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` 헤더가 없는 응답을 **거부**하고, 호출한 웹 콘텐츠에 응답을 제공하지 **않습니다.**

![Diagram of a simple GET request with Access-Control-Allow-Credentials](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

다음은 클라이언트와 서버 간의 샘플 교환입니다.

```http
GET /resources/credentialed-content/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Referer: https://foo.example/examples/credential.html
Origin: https://foo.example
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

비록 요청의 `Cookie` 헤더가 `https://bar.other` 을 위한 쿠키를 포함하고 있지만, 이 예에서 설명한 것처럼 bar.other 가 {{HTTPHeader("Access-Control-Allow-Credentials")}} 헤더에 `true` 값을 포함하여 응답하지 않으면, 응답은 무시되고 웹 콘텐츠에 제공되지 않습니다.

#### 사전 요청과 자격 증명

CORS 사전 요청에는 자격 증명이 절대로 포함되지 않아야 합니다. 사전 요청에 대한 응답은 실제 요청이 자격 증명과 함께 수행될 수 있음을 나타내기 위해 `Access-Control-Allow-Credentials: true` 를 명시해야 합니다.

> [!NOTE]
> 알부 기업 인증 서비스는 사전 요청할 때 TLS 클라이언트 인증서을 보내는 것을 요청합니다. 이는 [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials) 사양에 어긋나는 동작입니다.
>
> 파이어폭스(Firefox)87 는 `network.cors_preflight.allow_client_cert` 을 `true` 으로 설정하여 이 비표준 동작을 활성화하는 것을 허용합니다.([Firefox bug 1511151](https://bugzil.la/1511151)) 현재 Chromium 기반 브라우저는 CORS 사전 요청에서 항상 TLS 클라이언트 인증서를 전송합니다 ([Chrome bug 775438](https://crbug.com/775438)).

#### 자격 증명이 포함된 요청과 와일드카드

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
