---
title: 데이터 URI
slug: Web/HTTP/Basics_of_HTTP/Data_URLs
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{HTTPSidebar}}

**데이터 URL**, `data:` 스킴이 접두어로 붙은 URL은 컨텐츠 작성자가 작은 파일을 문서 내에 인라인으로 삽입할 수 있도록 해줍니다. WHATWG에 의해 해당 이름이 없어질 때까지 이전에는 "데이터 URI"로 알려졌습니다.

> **참고:** 데이터 URL은 탐색을 담당하는 설정 객체의 출처를 상속받지 않고 최신 브라우저에서 고유하고 불투명한 출처로 처리됩니다.

## 구문

데이터 URI는 접두사(`data:`), 데이터의 타입을 가리키는 [MIME 타입](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types), 텍스트가 아닌 경우 사용될 부가적인 `base64` 토큰 그리고 데이터 자체 총 네가지 부분으로 구성됩니다.

```plain
data:[<mediatype>][;base64],<data>
```

`mediatype`이란, [MIME type](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)을 말합니다(JPEG 이미지의 경우 `'image/jpeg'`). 만약 생략된다면, 기본 값으로 `text/plain;charset=US-ASCII`이 사용됩니다.

데이터에 [RFC 3986에 예약된 문자로 정의된 문자](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2)가 포함되어 있거나, 공백 문자, 개행 문자 또는 기타 인쇄할 수 없는 문자가 포함되어 있는 경우, 해당 문자는 [URL 인코딩](https://en.wikipedia.org/wiki/URL_encoding)된 문자여야 합니다.

데이터가 텍스트인 경우, 단순히 텍스트를 (포함된 문서 유형에 따라 적합한 엔티티 혹은 이스케이프를 사용하여) 포함할 수 있습니다. 그게 아니라면, base64로 인코딩된 이진 데이터를 포함하기 위해 `base64`를 지정할 수 있습니다. MIME 유형에 대한 자세한 내용은 [여기](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 및 [여기](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)에서 확인할 수 있습니다.

몇 가지 예제입니다.

- `data:,Hello%2C%20World!`
  - : 간단한 text/plain 데이터 `Hello, World!`, 쉼표는 `%2C`로 [URl 인코딩](https://en.wikipedia.org/wiki/URL_encoding)되고 공백 문자는 `%20`으로 표시됩니다.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : 위 예제의 base64 인코딩 버전
- `data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E`
  - : `<h1>Hello, World!</h1>`인 HTML 문서
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : `<script>alert('hi');</script>` 자바스크립트 경고문을 실행하는 HTML 문서입니다. 닫기 스크립트 태그가 필요하다는 것을 기억하세요.

## base64 포맷으로 데이터 인코딩하기

Base64는 이진 데이터를 {{Glossary("ASCII")}} 문자열 형식으로 기수-64 표현으로 변환하여 나타내는 이진-텍스트 인코딩 체계 그룹입니다. ASCII 문자로만 구성되므로 base64 문자열은 일반적으로 URL로부터 안전하므로 데이터 URL에서 데이터를 인코딩하는 데 사용할 수 있습니다.

### JavaScript에 인코딩하기

Web API에는 [Base64](/ko/docs/Glossary/Base64)로 인코딩하거나 디코딩하는 기본 메서드가 있습니다.

### Unix System에 인코딩하기

Linux 및 macOS 시스템의 Base64 인코딩은 명령줄 `base64`(또는 대안으로 `-m` 인수가 포함된 `uuencode` 유틸리티)를 사용하여 수행할 수 있습니다.

```bash
echo -n hello|base64
# 콘솔에 찍히는 결과: aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# 콘솔에 찍히는 결과: aGVsbG8=

base64 a.txt>b.txt
# b.txt에 찍히는 결과: aGVsbG8=
```

### Windows에 인코딩하기

Windows에서는 PowerShell의 [Convert.ToBase64String](https://docs.microsoft.com/dotnet/api/system.convert.tobase64string?view=net-5.0)을 사용하여 Base64 인코딩을 수행할 수 있습니다.

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# b.txt에 찍히는 결과: aGVsbG8=
```

또는, GNU/Linux 셸(예, [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux))은 `base64` 유틸리티를 제공합니다.

```bash
bash$ echo -n hello | base64
# 콘솔에 찍히는 결과: aGVsbG8=
```

## 일반적인 문제점

이 섹션에서는 `데이터` URL를 만들고 사용할 때 일반적으로 발생하는 문제점들에 대해 설명합니다.

```html
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

내용이 다음과 같은 HTML 리소스를 나타냅니다.

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- 구문
  - : `데이터` URL를 위한 문법은 매우 간단하지만, "data" 세그먼트 앞에 콤마를 넣는 것을 쉽게 잊거나 데이터를 base64 형식으로 부정확하게 인코딩하는 경우가 있습니다.
- HTML 내에 포맷시키기
  - : `데이터` URL는 동봉된 문서의 너비에 비례할 가능성이 높은 파일 내에 파일을 제공하게 됩니다. URL로 `데이터`를 공백 문자(라인 피드, 탭 혹은 스페이스)을 사용해 포맷이 가능해야 하지만 [base64 인코딩을 사용할 때](hhttps://bugzil.la/73026#c12) 일어나는 실질적인 문제가 있습니다.
- 길이 제한
  - : 브라우저들은 데이터의 개별적인 최대 길이를 제공해야 할 의무가 없습니다. 예를 들어, Opera 11 브라우저는 URL을 65535자로 제한하여, `data` URL을 65529 문자로 제한합니다.(MIME 타입을 지정하지 않고 plain `data`를 사용한다면, 소스가 아닌 인코딩된 데이터의 길이는 65529자가 됩니다). Firefox 버전 97 이상에서는 최대 32MB의 `data` URL을 지원합니다(97 이전에는 한도가 256MB에 비슷했습니다). Chromium 객체는 512MB가 넘는 URL에, Webkit(Safari)은 2048MB가 넘는 URL에 적용됩니다.
- 오류 처리의 부족
  - : 미디어 내의 유효하지 않은 매개변수들 또는 '`base64`'를 지정할 때 오타들은 무시되지만 오류가 발생하지는 않습니다.
- 쿼리 문자열에 대한 미지원 등
  - : 데이터 URL의 데이터 일부는 불명확해서 데이터 URL를 이용해 쿼리 문자열(`<url>?parameter-data` 문법을 이용한 페이지 특정의 파라메터)을 사용하려는 시도는 URL이 나타내는 데이터 내에 쿼리 문자열을 포함하게 됩니다.
- 보안 이슈
  - : 많은 보안 문제(예, 피싱)가 데이터 URL과 연관되어 있으며, 브라우저의 최상위 수준에서 해당 URL로 이동합니다. 이 문제를 완화하기 위해 `data:` URL에 대한 최상위 탐색은 모든 최신 브라우저에서 차단됩니다. 자세한 내용은 [Mozilla 보안 팀의 이 블로그 포스트](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/)를 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Base64](/ko/docs/Glossary/Base64)
- [URL 인코딩](https://en.wikipedia.org/wiki/URL_encoding)
- {{domxref("atob","atob()")}}
- {{domxref("btoa","btoa()")}}
- [CSS `url()`](/ko/docs/Web/CSS/uri)
- [URI](/ko/docs/Glossary/URI)
