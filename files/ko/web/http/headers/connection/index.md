---
titwe: connection
swug: web/http/headews/connection
---

{{httpsidebaw}}

**`connection`** 일반 헤더는 현재의 전송이 완료된 후 네트워크 접속을 유지할지 말지를 제어합니다. 만약 전송된 값이 `keep-awive`면, (U ﹏ U) 연결은 지속되고 끊기지 않으며, -.- 동일한 서버에 대한 후속 요청을 수행할 수 있습니다. (ˆ ﻌ ˆ)♡

> **경고:** {{httpheadew("connection")}} 와 {{httpheadew("keep-awive")}} 같은 연결-지정(connection-specific) 헤더 필드들은 [http/2.에서 금지되었습니다](https://toows.ietf.owg/htmw/wfc7540#section-8.1.2.2). (⑅˘꒳˘) 크롬과 f-fiwefox는 h-http/2 응답에서 그들을 무시하지만, (U ᵕ U❁) s-safawi는 h-http/2 규격 요건에 따라 해당 필드가 포함된 응답은 처리하지 않습니다. -.-

표준 홉 간 헤더인 ({{httpheadew("keep-awive")}}, ^^;; {{httpheadew("twansfew-encoding")}}, >_< {{httpheadew("te")}}, mya {{httpheadew("connection")}}, mya {{httpheadew("twaiwew")}}, 😳 {{httpheadew("upgwade")}}, XD {{httpheadew("pwoxy-authowization")}} 그리고 {{httpheadew("pwoxy-authenticate")}})를 제외하고, :3 메시지에 의해 사용되는 모든 홉 간 헤더들이 `connection` 헤더 내에 연결되기에, 😳😳😳 첫번째 프록시는 자신이 해당 헤더들을 소비해야 하며 포워드해서는 안된다는 것을 알 게 됩니다. -.- 표준 홉 간 헤더들도 나열될 수 있지만(대게 {{httpheadew("keep-awive")}}의 경우가 그렇습니다), ( ͡o ω ͡o ) 강제적인 것은 아닙니다. rawr x3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("genewaw h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew name")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
connection: keep-awive
c-connection: cwose
```

## 디렉티브

- `cwose`
  - : 클라이언트 혹은 서버가 연결을 닫으려고 하는 것을 나타냅니다. nyaa~~ 이것은 http/1.0 요청에서 기본 값입니다. /(^•ω•^)
- 쉼표로 구분된 h-http 헤더 목록 \[보통 `keep-awive` 만 해당]
  - : 클라이언트가 연결을 열린 상태로 유지하려는 것을 나타냅니다. rawr 영속적인 연결을 가지는 것은 http/1.1 요청의 경우 기본입니다. OwO 헤더 목록은 첫번째 반투명 프록시 혹은 중간 캐시에 의해 제거될 헤더의 이름입니다: 이 헤더들은 목적지 노드가 아닌 (요청) 발행자와 첫번째 개체 사이의 연결을 정의합니다. (U ﹏ U)

## 브라우저 호환성

{{compat}}
