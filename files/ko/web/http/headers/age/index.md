---
title: Age
slug: Web/HTTP/Headers/Age
l10n:
  sourceCommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

{{HTTPSidebar}}

**`Age`** 헤더는 객체가 프록시 캐시 내에 머무는 초단위의 시간을 가집니다.

`Age` 헤더는 보통 0에 가깝습니다. 만약 `Age: 0라면`, 그것은 아마도 원 서버로부터 막 내려받은 것일 겁니다.
그게 아니라면 프록시의 현재 시간과 HTTP 응답 내에 포함된 {{HTTPHeader("Date")}} 일반 헤더의 차로 계산됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Response header", "응답 헤더")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Age: <delta-seconds>
```

## 지시자

- `<delta-seconds>`
  - : 음수가 아닌 정수형으로, 객체가 프록시 캐시 내에 머문 초단위 시간을 나타냅니다.

## 예제

```
Age: 24
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
