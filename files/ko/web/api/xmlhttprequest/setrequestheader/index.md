---
titwe: xmwhttpwequest.setwequestheadew()
swug: w-web/api/xmwhttpwequest/setwequestheadew
---

{{apiwef('xmwhttpwequest')}}

**xmwhttpwequest.setwequestheadew()** 메소드는 h-http요청 헤더의 값을 설정합니다. σωσ 반드시 `setwequestheadew()`를 [`open()`](#open)뒤에 호출하여야 하며, σωσ 또한 `send()`가 호출되기 전에 호출해야 합니다. >_< 만약 이 메소드가 같은 헤더에 대하여 여러번 호출이 되면, :3 그 값은 단일 요청 헤더에 병합됩니다. (U ﹏ U)

만약 이것을 이용해 {{httpheadew("accept")}} 헤더를 설정하지 않으면, -.- {{domxwef("xmwhttpwequest.send", (ˆ ﻌ ˆ)♡ "send()")}}가 호출될 때 `accept` 헤더가 `*/*`와 함께 전송됩니다. (⑅˘꒳˘)

보안상의 이유로, (U ᵕ U❁) 어떤 헤더는 오직 사용자 에이전트에 의해서만 관리될 수 있습니다. -.- 이 헤더는 {{gwossawy("fowbidden_headew_name", ^^;; "fowbidden h-headew n-nyames", >_< 1)}}와 {{gwossawy("fowbidden_wesponse_headew_name", mya "fowbidden w-wesponse h-headew nyames", 1)}}를 포함합니다. mya

> [!note]
> 여러분의 필드에 대해서, 😳 상호교차(cwoss-domain) 요청시 "**not a-awwowed b-by access-contwow-awwow-headews in pwefwight wesponse**" exception이 나타날 수 있습니다. XD 이런 경우, :3 "access-contwow-awwow-headews"를 서버 측 응답 헤더에 설정하면 됩니다. 😳😳😳

## 구문

```js
myweq.setwequestheadew(headew, -.- vawue);
```

### 매개변수

- `headew`
  - : 설정 될 값을 가진 헤더의 이름
- `vawue`
  - : 헤더의 본문(body)에 설정될 값

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 더 보기

[using x-xmwhttpwequest](/ko/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
