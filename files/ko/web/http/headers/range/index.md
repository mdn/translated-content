---
title: Range
slug: Web/HTTP/Headers/Range
---

{{HTTPSidebar}}

**`Range`** HTTP 요청 헤더는 서버에게 문서의 일부분만 돌려주어야 한다는 것을 알려줍니다. `Range` 헤더를 통해 여러 부분을 한번에 요청할 수 있으며, 서버는 이러한 범위에 대해 문서의 여러 부분을 돌려보내줄 것입니다. 만약 서버가 돌려 보낸다면, {{HTTPStatus("206")}} `Partial Content`를 응답으로 사용할 것입니다. 만약 범위가 유효하지 않다면, 서버는 {{HTTPStatus("416")}} `Range Not Satisfiable` 에러를 보낼 것입니다. 또한 서버는 `Range` 헤더를 무시하고 {{HTTPStatus("200")}} 상태 코드와 함께 전체 문서를 돌려줄 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>아니오</td>
    </tr>
  </tbody>
</table>

## 문법

```
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
```

## 지시자

- \<unit>
  - : 범위를 결정하는 단위. 보통 `bytes`.
- \<range-start>
  - : 범위 요청의 시작 지점을 알리는 단위를 뜻하는 정수.
- \<range-end>
  - : 요청한 범위의 끝을 알리는 단위를 의미하는 정수. 이 값은 옵션으로 사용할 수 있으며, 생략한다면 문서의 끝부분을 요청의 끝으로 사용함.

## 예제

```
Range: bytes=200-1000, 2000-6576, 19000-
```

## 기술 사양

| 기술 사양                       | 제목                                                   |
| ------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "Range", "3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
