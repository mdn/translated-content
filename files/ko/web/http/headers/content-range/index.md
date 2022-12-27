---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
tags:
  - HTTP
  - HTTP 헤더
  - 응답 헤더
  - 참고자료
  - 헤더
translation_of: Web/HTTP/Headers/Content-Range
---
{{HTTPSidebar}}

**`Content-Range` **HTTP 응답 헤더는 전체 바디 메시지에 속한 부분 메시지의 위치를 알려줍니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>아니오</td>
    </tr>
  </tbody>
</table>

## 문법

```
Content-Range: <unit> <range-start>-<range-end>/<size>
Content-Range: <unit> <range-start>-<range-end>/*
Content-Range: <unit> */<size>
```

## 지시자

- \<unit>
  - : 단위는 범위를 지정합니다. 보통 `bytes`를 사용합니다.
- \<range-start>
  - : 범위 요청의 시작을 알려주는 정수 단위.
- \<range-end>
  - : 범위 요청의 끝을 알려주는 정수 단위.
- \<size>
  - : 문서의 총 크기(또는 모른다면 `'*'`)

## 예제

```
Content-Range: bytes 200-1000/67589
```

## 기술 사양

| 기술 사양                                            | 제목                                                   |
| ---------------------------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "Content-Range", "4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## 브라우저 호환성

{{Compat("http.headers.Content-Range")}}

## 함께 참고할 내용

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
