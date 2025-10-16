---
title: Content-Range
slug: Web/HTTP/Reference/Headers/Content-Range
original_slug: Web/HTTP/Headers/Content-Range
l10n:
  sourceCommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

**`Content-Range`** HTTP 응답 헤더는 전체 바디 메시지에서 부분 메시지가 속한 위치를 알려줍니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>
        {{Glossary("Response header")}},
        {{Glossary("Payload header")}}
      </td>
    </tr>
     <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Simple response header", "CORS-safelisted response-header")}}</th>
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

```http
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

```http
Content-Range: bytes 200-1000/67589
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
