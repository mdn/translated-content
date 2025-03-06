---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
---

{{HTTPSidebar}}

**`Accept-Encoding`** 요청 HTTP 헤더는, 보통 압축 알고리즘인, 클라이언트가 이해 가능한 컨텐츠 인코딩이 무엇인지를 알려줍니다. [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)을 사용하여, 서버는 제안된 내용 중 하나를 선택하고 사용하며 {{HTTPHeader("Content-Encoding")}} 응답 헤더를 이용해 선택된 것을 클라이언트에게 알려줍니다.

클라이언트와 서버 모두 동일한 압축 알고리즘을 지원한다고 해도, 식별 값 또한 수용 가능하다면, 서버는 응답의 본문을 압축하지 않으려고 할 수 있습니다. 두 가지 일반적인 경우가 이런 일을 초래합니다:

- 전송되어야 할 데이터가 이미 압축되어 있고 두번째 압축이 전송해야 할 데이터를 더 작게 만들지 못할 경우가 있습니다. 이런 경우는 이미지 포맷 압축에 해당되는 경우가 많습니다;
- 서버에 과부하가 걸리고 압축 요구사항에 의해 초래된 연산의 오버헤드를 감당할 수 없는 경우가 있습니다. 일반적으로, Microsoft는 서버가 자신의 연산력의 80% 이상을 사용하는 경우 압축하지 않을 것을 권고하고 있습니다.

부호화(encoding)되지 않았음을 의미하는, `identity` 값이 식별에 대한 다른 명시적인 설정 값 없이 `identity;q=0` or a `*;q=0`에 의해 명시적으로 숨겨지지 않는 한, 서버는 {{HTTPStatus("406")}} `Acceptable` 오류를 회신해서는 결코 안됩니다.

> **참고:** **Notes:**- IANA 레지스트리는 [공식적인 컨텐츠 인코딩의 전체 목록](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)을 운영 중입니다.
>
> - 두 개의 다른 컨텐츠 인코딩, `bzip`과 `bzip2`이 표준은 아니지만 때때로 사용되기도 합니다. 그들은 두 개의 UNIX 프로그램에 의해 사용되는 알고리즘을 구현합니다. 첫번째 알고리즘은 특허 라이선스 문제 때문에 더 이상 유지되지 않는다는 것을 알아두시기 바랍니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 문법

```
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: identity
Accept-Encoding: *

// Multiple algorithms, weighted with the {{Glossary("Quality Values", "quality value")}} syntax:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## 디렉티브

- `gzip`
  - : 32비트 CRC와 함께 [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77)를 사용하는 압축 포맷.
- `compress`
  - : [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) 알고리즘을 사용하는 압축 포맷.
- `deflate`
  - : *[deflate](http://en.wikipedia.org/wiki/DEFLATE) *압축 알고리즘과 함께 [zlib](http://en.wikipedia.org/wiki/Zlib) 구조를 사용하는 압축 포맷.
- `br`
  - : [Brotli](https://en.wikipedia.org/wiki/Brotli) 알고리즘을 사용하는 압축 포맷.
- `identity`
  - : 식별 함수(압축하지 않거나 수정하지 않은 경우)를 가리킵니다. 이 값은 존재하지 않은 경우에도 항상 수용 가능하다고 여겨집니다.
- `*`
  - : 헤더 내에 아직 나열되지 않은 컨텐츠 인코딩이라도 일치됩니다. 헤더가 존재하지 않을 경우, 기본값이 됩니다. 그것이 모든 알고리즘이 지원된다는 것을 의미하지는 않습니다; 단지 표현된 선호 대상이 없다는 것을 의미합니다.
- `;q=` (q값 가중치)
  - : *weight*라고 부르는 상대적인 [퀄리티 값](/ko/docs/Glossary/Quality_value)을 사용하여 표현한 선호도에 따라 배치된 값입니다.

## 예제

```
Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- HTTP [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)
- 컨텐츠 협상의 결과를 이용한 헤더: {{HTTPHeader("Content-Encoding")}}
- 다른 유사한 헤더들: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
