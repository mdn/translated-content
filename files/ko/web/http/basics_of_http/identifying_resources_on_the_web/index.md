---
title: 웹의 리소스 식별하기
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
---

{{HTTPSidebar}}
HTTP 요청 대상을 "리소스"라고 하며 리소스의 특성은 더 이상 정의되지 않습니다. 리소스는 문서, 사진 등으로 그 어떤 것이든 될 수 있습니다. 각 리소스는 리소스 식별을 위해 HTTP 전체에서 사용되는 {{Glossary("URI")}}(Uniform Resource Identifier)로 식별됩니다.

## URL과 URN

### URL

가장 일반적인 URI 형식은 **웹 주소**로 알려진 {{Glossary("URL")}}(Uniform Resource Locator)입니다.

```
https://developer.mozilla.org
https://developer.mozilla.org/ko/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

이러한 URL 중 하나를 브라우저의 주소 표시줄에 입력하여 URL과 연결되는 페이지(리소스)를 로드할 수 있도록 지시할 수 있습니다.
URL은 여러 부분으로 구성되는데, 일부는 필수 사항이고 나머지는 선택 사항입니다. 더 복잡한 예는 다음과 같습니다.

```
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URN

URN(Uniform Resource Name)은 특정 네임스페이스에서 이름으로 리소스를 식별하는 URI입니다.

```
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

두 URN은 다음을 나타냅니다.

- George Orwell의 책, Nineteen Eighty-Four
- IETF 명세 7230, Hypertext Transfer Protocol (HTTP/1.1): 메시지 구문과 라우팅

## URI(Uniform Resource Identifier) 구문

### 스키마 또는 프로토콜

- ![Protocol](mdn-url-protocol@x2.png)
  - : `http://`는 프로토콜로, 브라우저가 사용해야 하는 프로토콜을 나타냅니다. 일반적으로 프로토콜은 HTTP이거나 보안 버전인 HTTPS입니다. 웹은 이 두 가지 중 하나를 사용하지만, 브라우저는 메일 클라이언트를 여는 `mailto:` 또는 파일 전송을 처리하는 `ftp:`와 같은 다른 프로토콜을 처리하는 방법도 알고 있으므로 이러한 프로토콜을 보더라도 놀라지 않으셔도됩니다. 일반적인 스키마는 다음과 같습니다.

| 스키마      | 설명                                                         |
| ----------- | ------------------------------------------------------------ |
| data        | [Data URL](/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)       |
| file        | 호스트별 파일 이름                                           |
| ftp         | {{Glossary("FTP","File Transfer Protocol")}}                 |
| http/https  | [하이퍼 텍스트 전송 프로토콜 (보안)](/ko/docs/Glossary/HTTP) |
| javascript  | URL내 JavaScript 코드                                        |
| mailto      | 전자 메일 주소                                               |
| ssh         | 보안 쉘                                                      |
| tel         | 전화                                                         |
| urn         | 통합 자원 이름                                               |
| view-source | 리소스의 소스코드                                            |
| ws/wss      | [웹 소켓 연결 (보안)](/ko/docs/Web/API/WebSockets_API)       |

### 도메인 이름

- ![Domaine Name](mdn-url-domain@x2.png)
  - : `www.example.com`은 네임스페이스를 관리하는 도메인 이름 또는 기관이며 요청 중인 웹 서버를 나타냅니다. 대신 {{Glossary("IP address", "IP 주소")}}를 직접 사용하는 것도 가능하지만, 편의성이 떨어지므로 웹에서는 자주 사용되지 않습니다.

### 포트

- ![Port](mdn-url-port@x2.png)
  - : 이 경우 포트는 `:80`입니다. 포트는 웹 서버의 리소스에 액세스하는 데 사용되는 기술적인 "게이트"를 나타냅니다. 웹 서버가 HTTP 프로토콜의 표준 포트(HTTP의 경우 80, HTTPS의 경우 443)를 사용하여 리소스에 접근하는 경우엔 일반적으로 포트가 생략됩니다. 표준 포트를 사용하지 않는다면 필수로 입력해주어야 합니다.

### 경로

- ![Path to the file](mdn-url-path@x2.png)
  - : `/path/to/myfile.html`은 웹 서버의 리소스 경로입니다. 초기 웹에서는 이와 같은 경로가 웹 서버의 물리적 파일 위치를 나타냈습니다. 하지만 요즘에는 물리적 파일을 나타내는것이 아닌 웹 서버에서 처리를 요청하는것에 가깝습니다.

### 쿼리

- ![Parameters](mdn-url-parameters@x2.png)
  - : `?key1=value1&key2=value2`는 웹 서버에 제공되는 추가 매개변수입니다. 이러한 매개변수는 `&` 기호로 구분된 키/값 쌍의 목록입니다. 웹 서버는 이러한 매개변수를 사용하여 리소스를 사용자에게 반환하기 전에 추가적인 작업을 수행할 수 있습니다. 각 웹 서버에는 매개변수를 사용하는 고유한 규칙이 있으며 특정 웹 서버가 매개변수를 처리하는 방법을 알 수 있는 유일한 방법은 웹 서버 소유자에게 문의하는 것입니다.

### 프레그먼트(Fragment)

- ![Anchor](mdn-url-anchor@x2.png)
  - : `#SomewhereInTheDocument`는 리소스 자체의 다른 부분에 대한 앵커입니다. 앵커는 리소스 내부의 일종의 "북마크"를 나타내며 브라우저에 해당 "북마크된" 지점에 있는 콘텐츠를 표시하도록 지시합니다. 예를 들어 HTML 문서에서 브라우저는 앵커가 정의된 지점으로 스크롤합니다. 비디오 또는 오디오 문서에서 브라우저는 앵커가 나타내는 시간으로 이동하려고 시도합니다. 프래그먼트 식별자라고도 하는 # 뒤의 부분은 요청과 함께 서버로 전송되지 않습니다.

## 사용 일람

{{Glossary("HTML")}} 콘텐츠에서 URL을 사용할 때 일반적으로 스키마 중의 일부만 사용해야 합니다. 하위 리소스, 즉 더 큰 문서의 일부로 로드되는 파일을 참조할 때는 HTTP 및 HTTPS 스키마만 사용해야 합니다. 점점 더 많은 브라우저에서 보안상의 이유로 FTP를 사용하여 하위 리소스를 로드하는 지원을 제거하고 있습니다.
일부 브라우저는 FTP 콘텐츠 로드를 다른 응용 프로그램에 위임할 수 있지만 최상위 수준(예: 브라우저의 URL 표시줄 또는 링크 대상에 직접 입력)에서 여전히 FTP를 사용할 수 있습니다.

## 예제

```
https://developer.mozilla.org/ko/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## 명세서

{{Specifications}}

## 같이 보기

- [What is a URL?](/ko/docs/Learn/Common_questions/What_is_a_URL)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
