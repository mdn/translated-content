---
title: Expires
slug: Web/HTTP/Reference/Headers/Expires
original_slug: Web/HTTP/Headers/Expires
---

**`Expires`** 헤더는 응답이 더 이상 신선하지 않다고 판단할 날짜/시간을 포함합니다.

0과 같은, 유효하지 않은 날짜는 과거의 시간을 나타내어 리소스가 이미 만료되었음을 의미합니다.

응답 내에 "max-age" 혹은 "s-max-age" 디렉티브를 지닌 {{HTTPHeader("Cache-Control")}} 헤더가 존재할 경우, `Expires` 헤더는 무시됩니다.

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
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 문법

```
Expires: <http-date>
```

## 디렉티브

- \<http-date>
  - : HTTP-date timestamp.

## 예제

```
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
