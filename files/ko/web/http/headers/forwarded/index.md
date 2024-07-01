---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
---

{{HTTPSidebar}}

**`Forwarded`** 헤더는 클라이언트에서 접하고 있는 프록시 서버들이 요청에 대한 연결에 연관되어 있는 상황에서 해당 연결이 변경되거나 잃어버리게 되었을 때, 해당되는 정보를 가지고 있습니다.

이 헤더를 대체하는 실질적인 표준 버전은 {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}}, 그리고 {{HTTPHeader("X-Forwarded-Proto")}} 입니다.

이 헤더는 디버깅, 통계, 그리고 위치 기반 컨텐츠에서 사용되며 클라이언트의 IP 주소와 같은 민감한 개인 정보를 노출하도록 디자인 되었습니다. 따라서 이 헤더를 사용할 경우에는 사용자의 정보를 노출시키지 않도록 반드시 주의해야합니다.

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
Forwarded: by=<identifier>; for=<identifier>; host=<host>; proto=<http|https>
```

## 지시자

- \<identifier>

  - : 식별자는 프록시를 사용할 때, 대체되거나 잃어버린 정보를 밝힙니다. 이것은 다음과 같을 수 있습니다:

    - IP 주소(v4 또는 v6, 추가로 포트, 그리고 IPv6는 따옴표와 대괄호로 쌓여있습니다),
    - 애매한 식별자(예를 들면, "\_hidden" 또는 "\_secret"),
    - 또는 알 수 없는 개체를 진행하고자 했을 때 (그리고 당신이 계속 만들어진 요청이 전달되기를 원한다고 알려줄 때) "unknown" or "unknown".

- by=\<identifier>
  - : 요청이 프록시 서버에 들어왔을 때의 인터페이스.
- for=\<identifier>
  - : 요청을 시작한 클라이언트와 프록시 체인에서 뒤이은 프록시.
- host=\<host>
  - : {{HTTPHeader("Host")}} 요청 헤더 영역은 프록시에게서 받는다.
- proto=\<http|https>
  - : 요청을 만들기 위해서 어떠한 프로토콜(보통 "http" 또는 "https")이 사용되었는지 알려준다.

## 예제

### `Forwarded` 헤더 사용

```
Forwarded: for="_mdn"

# case insensitive
Forwarded: For="[2001:db8:cafe::17]:4711"

# separated by semicolon
Forwarded: for=192.0.2.60; proto=http; by=203.0.113.43

# multiple values can be appended using a comma
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### `X-Forwarded-For` 에서 `Forwarded` 로의 전환

만약 어플리케이션(서버 또는 프록시)이 표준화된 `Forwared` 헤더를 지원한다면, {{HTTPHeader("X-Forwarded-For")}} 헤더는 대체될 수 있습니다. IPv6 주소는 `Forwarded`에서 따옴표와 대괄호로 감싸질 수 있다는 것을 알아두세요.

```
X-Forwarded-For: 123.34.567.89
Forwarded: for=123.34.567.89

X-Forwarded-For: 192.0.2.43, 2001:db8:cafe::17
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
```

## 기술 사양

| 기술 사양                         | 제목                     |
| --------------------------------- | ------------------------ |
| {{RFC("7239", "Forwarded", "4")}} | Forwarded HTTP Extension |

## 함께 참고할 내용

- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}} – provides information about the proxy itself, not about the client connecting to it.
