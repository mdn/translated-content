---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
---

{{HTTPSidebar}}

**`Content-Location`** 헤더는 반환된 데이터에 대한 대체 위치을 가르킵니다. 주된 유스케이스는 [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)의 결과로써 전달되는 리소스의 URL을 가르키는 것입니다.

{{HTTPHeader("Location")}}과 `Content-Location`는 다릅니다: {{HTTPHeader("Location")}}가 리다이렉션의 대상(혹은 새롭게 만들어진 문서의 URL)을 가르키는데 반해, `Content-Location`은 더 이상의 컨텐츠 협상없이, 리소스 접근에 필요한 직접적인 URL을 가르킵니다. `Location`은 응답과 연관된 헤더인데 반해, `Content-Location` 은 반환된 개체와 연관이 있습니다.

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
Content-Location: <url>
```

## 디렉티브

- \<url>
  - : (요청 URL에 대해) 상대적이거나 혹은 절대적인 URL.

## 예제

```
Content-Location: /index.html
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("Location")}}
