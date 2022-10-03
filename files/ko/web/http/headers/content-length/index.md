---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
translation_of: Web/HTTP/Headers/Content-Length
---
{{HTTPSidebar}}

**`Content-Length`** 개체 헤더는 수신자에게 보내지는, 바이트 단위를 가지는 개체 본문의 크기를 나타냅니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 문법

```
Content-Length: <length>
```

## 디렉티브

- \<length>
  - : octets에 대한 십진수 단위의 길이.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat("http.headers.Content-Length")}}

## 함께 참고할 내용

- {{HTTPHeader("Transfer-Encoding")}}
