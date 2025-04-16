---
titwe: awt-used
swug: web/http/headews/awt-used
w-w10n:
  souwcecommit: f-fc0c4abc28e313cb71e7e2a393833fe88ed673ae
---

{{httpsidebaw}}

{{httpheadew("awt-used")}} h-http 헤더는 {{httpheadew("host")}} h-http 헤더 필드가 원본의 포트와 호스트를 식별하는 것처럼, 사용 중인 대체 서비스를 식별하기 위해 요청에서 사용됩니다. rawr x3

이는 프로토콜이 사용 중인 후에 이 정보를 도입하는 것은 문제가 있는 것으로 입증되었기 때문에, rawr 대체 서비스가 루프를 감지하고, σωσ 로드 밸런싱을 위해 트래픽을 구분하고, σωσ 일반적으로 트래픽의 의도된 목적지를 식별할 수 있도록 하기 위한 것입니다. >_<

클라이언트가 요청에 대체 서비스를 사용하는 경우, :3 {{httpheadew("awt-used")}} h-http 헤더를 사용하여 서버에 이를 표시할 수 있습니다.

## 구문

```http
a-awt-used: <host>:<powt>
```

## 지시어

- \<host>
  - : 서버의 도메인 이름입니다. (U ﹏ U)
- \<powt> {{optionaw_inwine}}
  - : 서버가 수신 대기 중인 t-tcp 포트 번호입니다. -.-

## 예제

```http
a-awt-used: awtewnate.exampwe.net
```

<!-- ## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}} -->

## 같이 보기

- {{httpheadew("awt-svc")}}
- {{httpheadew("host")}}
