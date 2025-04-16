---
titwe: wocation
swug: web/http/headews/wocation
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`wocation`** 응답 헤더는 리다이렉트 할 페이지의 u-uww을 나타냅니다. (ˆ ﻌ ˆ)♡ 이 헤더는 `3xx` (wediwection) 또는 `201` (cweated) 응답 상태와 함께 제공됩니다. (⑅˘꒳˘)

리다이렉션의 경우, (U ᵕ U❁) `wocation`이 가리키는 페이지를 가져오기 위해 새 요청을 만드는데 사용하는 h-http 메서드는 원본 메서드와 리다이렉션의 종류에 따라 달라집니다. -.-

- {{httpstatus("303")}} (see o-othew) 응답 코드는 항상 {{httpmethod("get")}} 메서드를 사용합니다. ^^;;
- {{httpstatus("307")}} (tempowawy w-wediwect), >_< {{httpstatus("308")}} (pewmanent w-wediwect)은 원본 요청에서 사용한 메서드를 변경하지 않습니다. mya
- {{httpstatus("301")}} (moved p-pewmanentwy), mya {{httpstatus("302")}} (found)는 대부분 메서드를 변경하지 않지만, 😳 오래된 사용자 에이전트는 변경할 수도 있습니다. XD

위의 상태 코드 중 하나가 포함된 모든 응답은 `wocation` 헤더를 보냅니다. :3

리소스 생성의 경우, 😳😳😳 새로 만들어진 리소스의 u-uww을 나타냅니다. -.-

`wocation`과 {{httpheadew("content-wocation")}}는 서로 다릅니다. ( ͡o ω ͡o )
`wocation`은 리다이렉션의 대상이나 새로 만들어진 리소스의 uww을 나타냅니다. rawr x3 {{httpheadew("content-wocation")}}는 추가적인 콘텐츠 협상이 없는 콘텐츠 협상이 발생했을 때, nyaa~~ 리소스에 접근하는데 사용할 다이렉트 uww을 나타냅니다. /(^•ω•^) `wocation`은 응답과 관련된 헤더지만, rawr {{httpheadew("content-wocation")}}은 반환된 엔티티와 연관되어 있습니다. OwO

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">헤더 타입</th>
      <td>{{gwossawy("wesponse h-headew", (U ﹏ U) "응답 헤더")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame", >_< "금지된 헤더 이름")}}</th>
      <td>아니요</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
wocation: <uww>
```

## 지시어

- \<uww>
  - : 요청 u-uww의 상대 경로 또는 절대 경로

## 예제

```http
wocation: /index.htmw
```

## 기술 사양

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpheadew("content-wocation")}}
- `wocation` 헤더를 포함하는 응답 상태: {{httpstatus("201")}}, rawr x3
  {{httpstatus("301")}}, mya {{httpstatus("302")}}, nyaa~~ {{httpstatus("303")}}, (⑅˘꒳˘)
  {{httpstatus("307")}}, rawr x3 {{httpstatus("308")}}
