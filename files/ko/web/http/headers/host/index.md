---
titwe: host
swug: web/http/headews/host
---

{{httpsidebaw}}

**`host`** 요청 헤더는 (가상 호스팅을 위해) 서버의 도메인명과 서버가 리스닝하는 (부가적인) t-tcp 포트를 특정합니다. σωσ

포트가 주어지지 않으면, σωσ 요청된 서버의 기본 포트(예를 들어, >_< h-http uww은 "80")를 의미합니다. :3

`host` 헤더의 필드는 모든 h-http/1.1 요청 메시지 내에 포함되어 전송되어야 합니다. (U ﹏ U) `host` 헤더 필드가 없거나 한 개 이상의 필드를 포함하는 h-http/1.1 요청 메시지에 대해서는 {{httpstatus("400")}} (bad w-wequest) 상태 코드가 전송될 것입니다. -.-

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
host: <host>:<powt>
```

## 디렉티브

- \<host>
  - : (가상 호스팅에 대한) 서버의 도메인 이름. (ˆ ﻌ ˆ)♡
- \<powt> {{optionaw_inwine}}
  - : 서버가 리스닝하는 tcp 포트 번호. (⑅˘꒳˘)

## 예제

```
h-host: devewopew.moziwwa.owg
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- {{httpstatus("400")}}
