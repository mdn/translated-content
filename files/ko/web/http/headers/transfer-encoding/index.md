---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
---

{{HTTPSidebar}}

**`Transfer-Encoding`** 헤더는 사용자에게 {{Glossary("Entity header","entity")}}를 안전하게 전송하기 위해 사용하는 인코딩 형식을 지정합니다.

`Transfer-Encoding`은 [hop-by-hop 헤더](/ko/docs/Web/HTTP/Headers#hbh)로, 리소스 자체가 아닌 두 노드 사이에 메시지를 적용하는 것입니다. 다중-노드 연결의 각각의 세그먼트는 `Transfer-Encoding` 의 값을 다르게 사용할 수 있습니다. 만약 전체 연결에 있어 데이터를 압축하고자 한다면, end-to-end 헤더인 {{HTTPHeader("Content-Encoding")}} 헤더를 대신 사용하시기 바랍니다.

본문이 없는 {{HTTPMethod("HEAD")}} 요청에 대한 응답은 그에 대한 {{HTTPMethod("GET")}} 메시지에 적용될 값을 나타냅니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 구문

```
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip
Transfer-Encoding: identity

// 어떤 값들은 쉼표로 구분하여 나열될 수 있습니다
Transfer-Encoding: gzip, chunked
```

## 디렉티브

- `chunked`
  - : 데이터가 일련의 청크 내에서 전송됩니다. {{HTTPHeader("Content-Length")}} 헤더는 이 경우 생략되며, 각 청크의 앞부분에 현재 청크의 길이가 16진수 형태로 오고 그 뒤에는 '\r\n'이 오고 그 다음에 청크 자체가 오며, 그 뒤에는 다시 '\r\n'이 옵니다. 종료 청크는 그것의 길이가 0인 것을 제외하면 일반적인 청크와 다르지 않습니다. 그 다음에는 (비어있을수도 있는) 연속된 엔티티 헤더 필드로 구성된 트레일러가 옵니다.
- `compress`
  - : [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) 알고리즘을 사용하는 형식. 값의 이름은 이 알고리즘을 구현한, UNIX _compress_ 프로그램에서 차용된 것입니다.
    대부분의 UNIX 배포판에서 제외된 압축 프로그램처럼, 이 content-encoding은 어느 정도는 (2003년에 기한이 만료된) 특허 문제로 인해 오늘날 거의 대부분의 브라우저에서 사용되지 않고 있습니다.
- `deflate`
  - : ([RFC 1951](https://tools.ietf.org/html/rfc1952)에 정의된) *[deflate](http://en.wikipedia.org/wiki/DEFLATE) *압축 알고리즘과 함께 ([RFC 1950](https://tools.ietf.org/html/rfc1950)에서 정의된) [zlib](http://en.wikipedia.org/wiki/Zlib) 구조체를 사용합니다.
- `gzip`
  - : 32비트 CRC를 이용한 [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77)을 사용하는 형식. 이것은 근본적으로 UNIX _gzip_ 프로그램의 형식입니다. 또한, HTTP/1.1 표준은 이 content-encoding을 지원하는 서버는 호환성 목적을 위해 `x-gzip` 을 별칭으로 인지할 것을 권고하고 있습니다.
- `identity`
  - : 정체성 기능 (즉, 압축이나 수정이 없는) 을 나타냅니다. 이 토크은 명시적으로 지정되는 경우를 제외하고 항상 허용 가능한 것으로 간주됩니다.

## 예제

### 청크 분할 인코딩

청크 분할 인코딩은 더 많은 양의 데이터가 클라이언트에 전송되고 요청이 완전히 처리되기 전까지는 응답의 전체 크기를 알지 못하는 경우 유용하다. 데이터베이스 쿼리의 결과가 될 큰 HTML 테이블을 생성하는 경우나 큰 이미지를 전송하는 경우가 그 예입니다. 청크 분할 응답은 다음과 같습니다:

```
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용들

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- Header fields that regulate the use of trailers: {{HTTPHeader("TE")}} (requests) and {{HTTPHeader("Trailer")}} (responses).
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
