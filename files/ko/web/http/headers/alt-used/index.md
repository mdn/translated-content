---
title: Alt-Used
slug: Web/HTTP/Headers/Alt-Used
l10n:
  sourceCommit: fc0c4abc28e313cb71e7e2a393833fe88ed673ae
---

{{HTTPSidebar}}

{{HTTPHeader("Alt-Used")}} HTTP 헤더는 {{HTTPHeader("Host")}} HTTP 헤더 필드가 원본의 포트와 호스트를 식별하는 것처럼, 사용 중인 대체 서비스를 식별하기 위해 요청에서 사용됩니다.

이는 프로토콜이 사용 중인 후에 이 정보를 도입하는 것은 문제가 있는 것으로 입증되었기 때문에, 대체 서비스가 루프를 감지하고, 로드 밸런싱을 위해 트래픽을 구분하고, 일반적으로 트래픽의 의도된 목적지를 식별할 수 있도록 하기 위한 것입니다.

클라이언트가 요청에 대체 서비스를 사용하는 경우, {{HTTPHeader("Alt-Used")}} HTTP 헤더를 사용하여 서버에 이를 표시할 수 있습니다.

## 구문

```http
Alt-Used: <host>:<port>
```

## 지시어

- \<host>
  - : 서버의 도메인 이름입니다.
- \<port> {{optional_inline}}
  - : 서버가 수신 대기 중인 TCP 포트 번호입니다.

## 예제

```http
Alt-Used: alternate.example.net
```

<!-- ## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}} -->

## 같이 보기

- {{HTTPHeader("Alt-Svc")}}
- {{HTTPHeader("Host")}}
