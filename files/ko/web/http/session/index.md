---
title: 전형적인 HTTP 세션
slug: Web/HTTP/Session
---

{{HTTPSidebar}}

HTTP와 같은 클라이언트-서버 프로토콜에서, 세션은 다음의 세 가지 과정으로 이루어집니다.

1. 클라이언트가 TCP 연결을 수립합니다(또는 전송 계층이 TCP가 아닌 다른 적당한 연결로).
2. 클라이언트는 요청을 전송한 뒤 응답을 기다립니다.
3. 서버는 요청에 대해 처리하고 그에 대한 응답을 상태 코드 그리고 요청에 부합하는 데이터와 함께 돌려보냅니다.

HTTP/1.1부터는 세번째 과정 이후 클라이언트가 해당 시점에 또 다른 요청을 보낼 수 있도록 연결을 더 이상 닫지 않습니다. 그러므로 두번째, 세번째 과정이 몇 번에 걸쳐 일어날 수 있습니다.

## 연결 수립

클라이언트-서버 프로토콜에, 클라이언트는 연결을 수립합니다. HTTP에서 연결을 여는 것은 보통의 경우 TCP인 기본적인 전송 계층 내에서 연결을 수립하는 것을 뜻합니다.

TCP를 이용할 경우, 컴퓨터 상의 HTTP 서버를 위한 기본 포트는 80인데 8000 혹은 8080처럼 다른 포트들도 자주 사용되곤 합니다. 요청을 위한 페이지 URL은 도메인 이름과 포트 번호 둘 다 포함하지만 포트 번호가 80일 경우 생략 가능합니다. 좀 더 자세한 내용은 [웹 리소스 식별](/ko/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)을 참고하시기 바랍니다.

> **참고:** **기억하세요** 클라이언트-서버 모델은 서버로 하여금 명시적인 요청없이 클라이언트로 데이터를 전송하는 것을 허용하지 않습니다. 이런 문제에 대한 해결책으로, 웹 개발자들은 몇 가지 기술을 사용합니다: {{domxref("XMLHTTPRequest")}} 혹은 {{domxref("Fetch")}} API를 통해 주기적으로 서버에 핑하기, HTML [웹소켓 API](/ko/docs/Web/API/WebSockets_API), 혹은 그와 유사한 프로토콜 사용

## 클라이언트 요청 전송

연결이 한번 수립되고 나면 사용자-에이전트는 요청을 보낼 수 있습니다(사용자-에이전트는 일반적으로 웹 브라우저를 말하지만, 예를 들자면 crawler와 같이 무엇이든 될 수 있습니다). 클라이언트 요청은 세 가지 블록으로 나누어진 CRLF(라인 피드를 따르는 캐리지 리턴)로 구분된 텍스트 지시자들로 이루어집니다.

1. 첫번째 줄은 파라메터가 따르는 요청 메서드를 포함합니다.

   - 문서의 경로, 즉 프로토콜과 도메인 이름을 제외한 절대 URL
   - 사용중인 HTTP 프로토콜 버전

2. 바로 다음 줄들은 각각 특정 헤더를 나타내는데 데이터의 종류가 적합한지(예를 들어, 언어는 무엇인지, MIME 타입은 무엇인지 등) 혹은 서버의 동작을 수정하는 몇 가지 데이터(예를 들어 이미 캐시되어 있는 경우 응답을 전송하지 않는다든지 하는) 등에 관한 몇 가지 정보를 서버에게 제공합니다. 이런 HTTP 헤더들은 빈 줄로 끝나는 블록을 형성합니다.
3. 마지막 블록은 부가적인 데이터 블록으로. 더 많은 데이터를 포함하며 주로 POST 메서드에 의해 사용됩니다.

### 요청 예제

develper.mozilla.org. [http://developer.mozilla.org/](/)의 최상위 페이지를 가져오도록 요청하고, 가능하다면 서버에게 사용자-에이전트가 해당 페이지에 대해 프랑스어로 된 페이지를 원한다고 알려줍니다.

```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

헤더 블록으로부터 데이터 블록을 구분짓는 첫번째 빈줄에 주목하세요. 헤더 중에 `Content-Length:` 헤더가 없으므로, 데이터 블록은 비어있고 서버는 헤더의 마지막을 나타내는 빈 줄을 받는 즉시 요청을 처리할 수 있습니다.

다음은 결과 전송 형식입니다.

```
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### 요청 메서드

HTTP는 주어진 자원에 대해 실행되길 바라는 동작을 가리키는 [요청 메서드](/ko/docs/Web/HTTP/Methods) 집합을 정의합니다. 그것들이 명사가 될 수 있으지라도, 이 요청 메서드들은 때때로 HTTP 동사로써 참조됩니다. 일반적으로 대부분의 요청은 `GET과` `POST입니다`.

- {{HTTPMethod("GET")}} 메서드는 지정된 자원의 표시를 요청합니다. `GET`을 사용하는 요청은 데이터를 가져오는 것 외에는 할 수 없습니다.
- {{HTTPMethod("POST")}} 메서드는 서버에 데이터를 전송하여 서버가 상태를 바꾸도록 만듭니다. 이것은 [HTML Forms](/ko/docs/Web/Guide/HTML/Forms)에서 자주 사용되는 메서드입니다.

## 서버 응답의 구조

연결된 에이전트가 자신의 요청을 전송하고 난 뒤에, 웹 서버가 그것을 처리하고 최종적으로 응답을 돌려보내게 됩니다. 클라이언트 요청과 유사하게 서버 응답은 세 개의 다른 블록으로 나누어진 CRLF로 구분된 텍스트 지시자들로 형성됩니다.

1. 상태 줄인 첫번째 줄은 상태 요청(그리고 인간이 읽을 수 있는 텍스트 내에서의 의미)이 따르도록 사용된 HTTP 버전의 acknowledgment로 구성됩니다.
2. 다음 줄들은 각각 특정 HTTP 헤더를 나타는데, 전송되는 데이터에 관한 정보(이를테면, 타입, 데이터 크기, 사용된 압축 알고리즘, 캐시에 대한 힌트 등)를 클라이언트에게 제공합니다. 클라이언트의 요청에 대한 HTTP 헤더 블록과 유사하게, 이 HTTP 헤더들은 빈 줄로 끝나는 블록을 형성합니다.
3. 마지막 블록은 데이터 블록으로 (존재한다면) 데이터를 포함합니다.

### 응답 예제

웹 페이지의 성공적인 수신

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
```

요청 자원이 영구적으로 옮겨졌다는 내용의 알림

```
HTTP/1.1 301 Moved Permanently
Server: Apache/2.2.3 (Red Hat)
Content-Type: text/html; charset=iso-8859-1
Date: Sat, 09 Oct 2010 14:30:24 GMT
Location: https://developer.mozilla.org/ (this is the new link to the resource; it is expected that the user-agent will fetch it)
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
X-Cache-Info: caching
X-Cache-Info: caching
Content-Length: 325 (the content contains a default page to display if the user-agent is not able to follow the link)

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>301 Moved Permanently</title>
</head><body>
<h1>Moved Permanently</h1>
<p>The document has moved <a href="https://developer.mozilla.org/">here</a>.</p>
<hr>
<address>Apache/2.2.3 (Red Hat) Server at developer.mozilla.org Port 80</address>
</body></html>
```

요청된 자원이 존재하지 않는다는 내용의 알림

```
HTTP/1.1 404 Not Found
Date: Sat, 09 Oct 2010 14:33:02 GMT
Server: Apache
Last-Modified: Tue, 01 May 2007 14:24:39 GMT
ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
Accept-Ranges: bytes
Content-Length: 10732
Content-Type: text/html

<!DOCTYPE html... (contains a site-customized page helping the user to find the missing resource)
```

### 응답 상태 코드

[HTTP 응답 상태 코드](/ko/docs/Web/HTTP/Status)는 특정 HTTP 요청이 성공적으로 끝났는지 아닌지를 가르킵니다. 응답은 다섯가지 계층 내로 그룹화됩니다: 정보를 제공하는 응답, 성공적인 응답, 리다이렉트, 클라이언트 오류, 그리고 서버 오류.

- {{HTTPStatus(200)}}: 성공. 요청이 성공했다는 것을 의미합니다.
- {{HTTPStatus(301)}}: 영구적으로 옮겨짐. 이 응답 코드는 요청된 자원의 URI가 변경되었다는 것을 의미합니다.
- {{HTTPStatus(404)}}: 찾을 수 없음. 서버가 요청된 자원을 찾을 수 없음을 의미합니다.

## 함께 참고할 내용

- [웹 리소스 식별](/ko/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
- [HTTP 헤더](/ko/docs/Web/HTTP/Headers)
- [HTTP 요청 메서드](/ko/docs/Web/HTTP/Methods)
- [HTTP 응답 상태 코드](/ko/docs/Web/HTTP/Status)
