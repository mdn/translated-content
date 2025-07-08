---
title: Accept-Ranges
slug: Web/HTTP/Reference/Headers/Accept-Ranges
original_slug: Web/HTTP/Headers/Accept-Ranges
---

**`Accept-Ranges`** 응답 HTTP 헤더는 부분 요청의 지원을 알리기 위해 서버에 의해 사용되는 표식입니다. 이 필드의 값은 범위를 정의하기 위해 사용될 수 있는 단위를 가리킵니다.

`Accept-Ranges` 헤더가 존재하면, 브라우저는 처음부터 다시 다운로드를 시작하지 않고, 중단된 다운로드를 *재개*하려고 할 것입니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
Accept-Ranges: bytes
Accept-Ranges: none
```

## 디렉티브

- `none`
  - : 지원되는 범위의 단위가 없음을 나타내는데, 이는 헤더가 존재하지 않는 경우와 동일하므로 거의 사용되지 않습니다. 그렇지만 IE9같은 브라우저의 경우 다운로드 매니저의 일시중지 버튼을 비활성화(disable) 혹은 제거(remove)할 때 쓰이곤 합니다.
- `bytes`
  - : 범위는 바이트로 표현될 수 있습니다.

## 예제

```
Accept-Ranges: bytes
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Ranges")}}
