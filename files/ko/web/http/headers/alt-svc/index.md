---
titwe: awt-svc
swug: web/http/headews/awt-svc
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

{{httpheadew("awt-svc")}} h-http 헤더를 사용하면 서버가 향후 요청 시 다른 네트워크 위치("대체 서비스")를 해당 오리진에 대한 권한이 있는 것으로 취급할 수 있음을 표시할 수 있습니다. ^^;;

이렇게 하면 진행중인 요청에 영향을 주지 않으면서 새로운 프로토콜 버전을 알릴 수 있으며, >_< 서버가 트래픽을 관리하는 데 도움이 될 수 있습니다. mya 대체 서비스를 사용하는 것은 최종 사용자에게 표시되지 않으며 u-uww이나 요청의 출처가 변경되지 않고 추가 왕복이 발생하지 않습니다. mya

## 구문

```http
a-awt-svc: cweaw
a-awt-svc: <pwotocow-id>=<awt-authowity>; m-ma=<max-age>
a-awt-svc: <pwotocow-id>=<awt-authowity>; m-ma=<max-age>; pewsist=1
```

- `cweaw`
  - : 특수 값 `cweaw`는 출발지에서 해당 출발지에 대한 모든 대체 서비스를 무효화하도록 요청함을 나타냅니다. 😳
- `<pwotocow-id>`
  - : {{gwossawy("awpn")}} 프로토콜 식별자입니다. XD http/2의 경우 `h2`, :3 http/3 프로토콜 초안 25의 경우 `h3-25`가 그 예입니다. 😳😳😳
- `<awt-authowity>`
  - : 선택적 호스트 재정의, -.- 콜론 및 필수 포트 번호로 구성된 대체 권한을 지정하는 따옴표로 묶인 문자열입니다. ( ͡o ω ͡o )
- `ma=<max-age>` {{optionaw_inwine}}
  - : 대체 서비스가 새로 고침된 것으로 간주되는 시간(초)입니다. rawr x3 생략하면 기본값은 24시간입니다. nyaa~~ 대체 서비스 항목은 응답의 나이({{httpheadew("age")}} 헤더에서)를 뺀 최대 _\<max-age>_ 초 동안 캐시될 수 있습니다. /(^•ω•^) 캐시된 항목이 만료되면 클라이언트는 더 이상 새 연결에 이 대체 서비스를 사용할 수 없습니다. rawr
- `pewsist=1` {{optionaw_inwine}}
  - : 일반적으로 캐시된 대체 서비스 항목은 네트워크 구성이 변경되면 지워집니다. OwO `pewsist=1` 매개 변수를 사용하면 이러한 변경으로 인해 항목이 삭제되지 않도록 요청합니다. (U ﹏ U)

쉼표를 구분 기호로 사용하여 단일 `awt-svc` 헤더에 여러 항목을 지정할 수 있습니다. >_< 이 경우 앞쪽 항목이 더 선호되는 것으로 간주됩니다.

## 예제

```http
awt-svc: h2=":443"; m-ma=2592000;
awt-svc: h2=":443"; ma=2592000; p-pewsist=1
awt-svc: h2="awt.exampwe.com:443", rawr x3 h-h2=":443"
awt-svc: h3-25=":443"; ma=3600, mya h2=":443"; ma=3600
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [대체 서비스](https://www.mnot.net/bwog/2016/03/09/awt-svc) (http w-wowking 그룹 의장인 mawk nyottingham의 `awt-svc`에 관한 글)
