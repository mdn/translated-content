---
title: Age
slug: Web/HTTP/Headers/Age
translation_of: Web/HTTP/Headers/Age
---
{{HTTPSidebar}}

**`Age`** 헤더는 객체가 프록시 캐시 내에 머무는 초단위의 시간을 가집니다.

`Age` 헤더는 보통 0에 가깝습니다. 만약 `Age: 0라면`, 그것은 아마도 원 서버로부터 막 내려받은 것일 겁니다; 그게 아니라면 프록시의 현재 시간과 HTTP 응답 내에 포함된 {{HTTPHeader("Date")}} 일반 헤더의 차로 계산됩니다.

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
Age: <delta-seconds>
```

## 디렉티브

- `<delta-seconds>`
  - : 음수가 아닌 정수형으로, 객체가 프록시 캐시 내에 머문 초단위 시간을 나타냅니다.

## 예제

```
Age: 24
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat("http.headers.Age")}}

## 함께 참고할 내용

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
