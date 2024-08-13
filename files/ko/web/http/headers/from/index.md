---
title: From
slug: Web/HTTP/Headers/From
---

{{HTTPSidebar}}

**`From`** 요청 헤더는 요청한 사용자 에이전트를 제어하는 인간 사용자의 인터넷 이메일을 포함합니다.

만약 당신이 (예를 들어 크롤러와 같은) 로보틱 사용자 에이전트를 실행하고 있다면, `From` 헤더를 반드시 전송해야 하며, 로봇이 한도를 초과하거나 원하지 않으며, 유효하지 않은 요청을 전송하고 있는 경우처럼 서버 상에 문제를 일으키고 있다면 당신에게 해당 이메일로 연락이 가능해야 합니다.

> [!WARNING]
> 접근 제어 혹은 인증을 위해 `From` 헤더를 사용해서는 안됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
From: <email>
```

## 디렉티브

- \<email>
  - : 기계가 사용 가능한 이메일 주소.

## 예제

```
From: webmaster@example.org
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("Host")}}
