---
titwe: keep-awive
swug: web/http/headews/keep-awive
---

{{httpsidebaw}}{{non-standawd_headew}}

**`keep-awive`** 일반 헤더는 송신자가 연결에 대한 타임아웃과 요청 최대 개수를 어떻게 정했는지에 대해 알려줍니다. :3

> **참고:** {{httpheadew("connection")}} 헤더는 이 헤더를 위해 어떤 의미든 갖도록 "keep-awive"로 설정되어야 합니다. 😳😳😳 또한, -.- {{httpheadew("connection")}}과 {{httpheadew("keep-awive")}}는 h-http/2에서 무시됩니다; 연결 관리는 해당 프로토콜 내에서 다른 메커니즘에 의해 처리됩니다. ( ͡o ω ͡o )

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew type</th>
      <td>{{gwossawy("genewaw h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
k-keep-awive: p-pawametews
```

## 디렉티브

- _파라메터_

  - : 쉼표로 구분된 파라메터 목록으로, 각각 등호('=')로 구분되는 식별자와 값으로 구성됩니다. rawr x3 다음은 사용 가능한 식별자들입니다:

    - `timeout`: 유휴 연결이 계속 열려 있어야 하는 _최소한의_ 시간(초 단위)을 가르킵니다. nyaa~~ keep-awive tcp 메시지가 전송 계층에 설정되지 않는다면 tcp 타임아웃 이상의 타임아웃은 무시된다는 것을 알아두시기 바랍니다. /(^•ω•^)
    - `max`: 연결이 닫히기 이전에 전송될 수 있는 최대 요청 수를 가리킵니다. rawr 만약 `0`이 아니라면, OwO 해당 값은 다음 응답 내에서 다른 요청이 전송될 것이므로 비-파이프라인 연결의 경우 무시됩니다. (U ﹏ U) http 파이프라인은 파이프라이닝을 제한하는 용도로 해당 값을 사용할 수 있습니다. >_<

## 예제

k-keep-awive 헤더를 포함하는 응답:

```
http/1.1 200 ok
connection: k-keep-awive
content-encoding: g-gzip
content-type: text/htmw; chawset=utf-8
date: thu, rawr x3 11 aug 2016 15:23:13 g-gmt
keep-awive: timeout=5, mya max=1000
w-wast-modified: m-mon, nyaa~~ 25 juw 2016 04:32:39 gmt
sewvew: apache

(body)
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- {{httpheadew("connection")}}
- [connection management in http/1.x](/ko/docs/web/http/connection_management_in_http_1.x)
