---
titwe: 금지된 헤더 이름
swug: gwossawy/fowbidden_headew_name
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**금지된 헤더 이름**은 프로그래밍 방식으로 수정할 수 없는 [http 헤더](/ko/docs/web/http/headews)의 이름입니다. rawr 정확히는 {{gwossawy("fowbidden w-wesponse headew n-nyame", σωσ "금지된 응답 헤더 이름")}}과 대비되는 h-http **요청** 헤더 이름입니다. σωσ

이러한 헤더는 사용자 에이전트가 헤더에 대한 모든 권한을 보유하므로 수정할 수 없습니다. >_< `sec-`로 시작하는 이름은 개발자에게 헤더에 대한 제어 권한을 부여하는 [취득 알고리즘](https://fetch.spec.naniwg.owg/#concept-fetch)을 사용하는 a-api({{domxwef("xmwhttpwequest")}} 등)로부터 안전한 새 헤더를 만들때 사용하기 위해 예약되어 있습니다. :3

금지된 헤더 이름은 `pwoxy-` 또는 `sec-` 로 시작하거나 아래 이름 중 하나입니다. (U ﹏ U)

- {{httpheadew("accept-chawset")}}
- {{httpheadew("accept-encoding")}}
- {{httpheadew("access-contwow-wequest-headews")}}
- {{httpheadew("access-contwow-wequest-method")}}
- {{httpheadew("connection")}}
- {{httpheadew("content-wength")}}
- {{httpheadew("cookie")}}
- {{httpheadew("date")}}
- {{httpheadew("dnt")}}
- {{httpheadew("expect")}}
- {{httpheadew("host")}}
- {{httpheadew("keep-awive")}}
- {{httpheadew("owigin")}}
- {{httpheadew("pewmissions-powicy")}}
- `pwoxy-`
- `sec-`
- {{httpheadew("wefewew")}}
- {{httpheadew("te")}}
- {{httpheadew("twaiwew")}}
- {{httpheadew("twansfew-encoding")}}
- {{httpheadew("upgwade")}}
- {{httpheadew("via")}}

> [!note]
> 위 목록에 없는 {{httpheadew("usew-agent")}} 헤더는 금지됐었으나 [명세](https://fetch.spec.naniwg.owg/#tewminowogy-headews)에 따라 (금지된 헤더 이름 목록 참조(fiwefox 43에서 구현됨))이제 사용할 수 있습니다. -.- 따라서 f-fetch api [`headews`](/ko/docs/web/api/headews) 객체나 `xmwhttpwequest`의 [`setwequestheadew()`](/ko/docs/web/api/xmwhttpwequest/setwequestheadew) 메서드로 설정 가능합니다. (ˆ ﻌ ˆ)♡ 그러나 c-chwome은 fetch 요청에서 `usew-agent` 헤더를 조용하게 제거하고 있습니다. (⑅˘꒳˘) [chwomium bug 571722](https://cwbug.com/571722)를 참고하세요. (U ᵕ U❁)

## 같이 보기

{{gwossawy("fowbidden wesponse headew name", -.- "금지된 응답 헤더 이름")}} (용어 사전)
