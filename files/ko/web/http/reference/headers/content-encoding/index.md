---
title: Content-Encoding
slug: Web/HTTP/Reference/Headers/Content-Encoding
original_slug: Web/HTTP/Headers/Content-Encoding
---

**`Content-Encoding`** 개체 헤더는 미디어 타입을 압축하기 위해 사용됩니다. 이 헤더가 존재하면, 그 값은 개체 본문에 어떤 추가적인 컨텐츠 인코딩이 적용될지를 나타냅니다. 그것은 `Content-Type` 헤더에 의해 참조되는 미디어 타입을 얻도록 디코드하는 방법을 클라이언트가 알게 해줍니다.

가능한 더 많은 데이터를 압축하기 위해 이 필드의 사용이 권고되지만, jpeg 이미지와 같은 어떤 유형의 리소스들은 이미 압축되어 때때로 추가적인 압축이 별 소용이 없고 페이로드를 더 길게 만들수도 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: identity
Content-Encoding: br
```

## 디렉티브

- `gzip`
  - : 32비트 CRC를 지닌, [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77)을 사용하는 포맷. 이는 본래 UNIX _gzip_ 프로그램의 포맷입니다. HTTP/1.1 표준 역시 이 컨텐츠 인코딩을 지원하는 서버는 호환성 목적으로, `x-gzip` 별칭의 인지가 권고됩니다.
- `compress`
  - : [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) 알고리즘을 사용하는 포맷. 그 값의 이름은 이 알고리즘을 구현한 UNIX _compress_ 프로그램으로부터 가져왔습니다.
    대부분의 UNIX 배포판으로부터 사라져 왔던 압축 프로그램처럼, 이 content-encoding은 (2013년에 만료된)특허권 이슈로 오늘날의 브라우저에서 사용되지 않습니다.
- `deflate`
  - : ([RFC 1951](https://tools.ietf.org/html/rfc1952)에 정의된) [_deflate_](http://en.wikipedia.org/wiki/DEFLATE) 압축 알고리즘을 이용한, ([RFC 1950](https://tools.ietf.org/html/rfc1950)에 정의된) [zlib](http://en.wikipedia.org/wiki/Zlib) 스트럭쳐를 사용합니다.
- `identity`
  - : identity 함수를 나타냅니다(즉, 압축 없음 혹은 변경 없음). 이 토큰은, 명시적으로 지정된 경우를 제외하고, 항상 수용 가능하다고 여겨집니다.
- `br`
  - : [Brotli](https://en.wikipedia.org/wiki/Brotli) 알고리즘을 사용하는 포맷.

## 예제

### gzip을 이용해 압축하기

클라이언트 측에서, HTTP 요청 내에 함께 전송될 압축 스킴 목록을 알릴 수 있습니다. {{HTTPHeader("Accept-Encoding")}} 헤더는 컨텐츠 인코딩 협상을 위해 사용됩니다.

```
Accept-Encoding: gzip, deflate
```

서버는 사용한 스킴을 `Content-Encoding` 응답 헤더에 표시하여 응답합니다.

```
Content-Encoding: gzip
```

서버는 어떤 압축 방법도 사용하도록 강요받지 않는다는 것을 알아두시기 바랍니다. 압축은 서버 설정과 사용되는 서버 모듈에 상당히 의존적입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
