---
title: URI 스킴
short-title: 스킴
slug: Web/URI/Reference/Schemes
l10n:
  sourceCommit: 44373c3805ba65db7542af75b664dc6fdce2aec0
---

URI의 **스킴**은 `:` 문자 앞에 오는 첫 번째 부분입니다.
이 스킴은 브라우저가 리소스를 가져올 때 사용해야 하는 프로토콜을 지정합니다.
또한 스킴은 URI의 나머지 구조와 해석 방식에 영향을 미칠 수 있습니다.

## 구문

```url
protocol:
```

- `protocol`
  - : 사용할 프로토콜을 식별하는 문자 시퀀스입니다.
    알파벳과 숫자 및 `+`, `-`, `.` 문자만으로 구성되어야 합니다.
    일반적으로 사용되는 스킴은 다음과 같습니다.
    - [`blob`](/ko/docs/Web/URI/Reference/Schemes/blob)
      - : Binary Large Object의 약자로, 메모리에 저장된 이진 대형 객체를 가리키는 포인터입니다.
    - [`data`](/ko/docs/Web/URI/Reference/Schemes/data)
      - : 데이터가 URL 내에 직접 포함된 형태입니다.
    - `file`
      - : 컴퓨터 시스템 별 파일 이름을 나타냅니다.
    - `ftp`
      - : {{Glossary("FTP","File Transfer Protocol")}}
    - `http` / `https`
      - : [하이퍼텍스트 전송 프로토콜](/ko/docs/Web/HTTP) (및 보안 연결)
    - [`javascript`](/ko/docs/Web/URI/Reference/Schemes/javascript)
      - : URL 내에 포함된 JavaScript 코드를 실행합니다.
    - `mailto`
      - : 메일 주소를 나타냅니다.
    - [`resource`](/ko/docs/Web/URI/Reference/Schemes/resource) {{Non-standard_inline}}
      - : Firefox 및 Firefox 브라우저 확장 기능에서 내부 리소스를 불러올 때 사용됩니다.
    - `ssh`
      - : 보안 셸 연결을 나타냅니다.
    - `tel`
      - : 전화번호를 나타냅니다.
    - [`urn`](/ko/docs/Web/URI/Reference/Schemes/urn)
      - : 통합 자원 이름을 나타냅니다.
    - `view-source`
      - : 리소스의 소스 코드를 표시합니다.
    - `ws` / `wss`
      - : [웹 소켓 연결](/ko/docs/Web/API/WebSockets_API) (및 보안 연결)

## 설명

다음 URL을 예로 들어보겠습니다.

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`http`는 URL의 스킴으로, 브라우저가 어떤 프로토콜을 사용해야 하는지를 나타냅니다. 일반적으로 HTTP 프로토콜 또는 보안 버전인 HTTPS가 사용됩니다. 웹에서는 `http`나 `https`가 필요하지만, 브라우저는 `mailto:`(메일 클라이언트를 열 때)나 `ftp:`(파일 전송용)처럼 다른 스킴을 사용하는 URI도 열 수 있습니다.

{{Glossary("HTML")}} 콘텐츠에서 URL을 사용할 때는 일반적으로 이러한 URL 스킴 중 일부만 사용합니다. 하위 리소스 즉, 더 큰 문서의 일부로 함께 로드되는 파일을 참조할 때는 HTTP와 HTTPS 스킴만 사용하는 것이 좋습니다. 보안상의 이유로, 최근 브라우저들은 하위 리소스를 불러올 때 FTP 사용 지원을 점차 제거하고 있습니다.

FTP는 여전히 최상위 수준(브라우저 주소창에 직접 입력하거나 링크의 대상일 경우)에서는 사용할 수 있습니다. 다만, 일부 브라우저는 FTP를 다른 애플리케이션에 위임할 수도 있습니다.

## 예제

### 다양한 URI 스킴

다음 예제는 URI 스킴에 따라 달라지는 URI 형식을 보여줍니다.

```url
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## 명세서

{{Specifications}}

## 같이 보기

- [URI](/ko/docs/Web/URI)
- [데이터 URI](/ko/docs/Web/URI/Reference/Schemes/data)
- [리소스 URL](/ko/docs/Web/URI/Reference/Schemes/resource)
- [IANA URI 스킴 목록](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
