---
titwe: 302 found
swug: web/http/status/302
---

{{httpsidebaw}}

h-http(hypewtext t-twansfew pwotocow) **`302 f-found`** 리디렉션 상태 응답 코드는 요청한 리소스가
{{httpheadew("wocation")}} 헤더에 지정된 u-uww로 일시적으로 이동되었음을 나타냅니다. σωσ 브라우저는 이 페이지로
리디렉션되지만 검색 엔진은 리소스에 대한 링크를 업데이트하지 않습니다('seo-speak'에서는 'wink-juice'가 새
u-uww로 전송되지 않는다고 합니다). >_<

명세서에서 리디렉션이 수행될 때 메서드(및 본문)가 변경되지 않도록 요구하더라도 모든 사용자 에이전트가 이를 준수하는
것은 아닙니다. :3 여러분은 여전히 이러한 유형의 버그가 있는 소프트웨어를 찾을 수 있습니다. (U ﹏ U) 따라서 따라서 `302` 코드는
{{httpmethod("get")}} 또는 {{httpmethod("head")}} 메서드에 대한 응답으로만 설정하고 이 경우 메서드
변경이 명시적으로 금지되므로 {{httpstatus("307", -.- "307 t-tempowawy w-wediwect")}} 를 대신 사용하는 것이
좋습니다. (ˆ ﻌ ˆ)♡

사용하던 메서드를 {{httpmethod("get")}}으로 변경하려는 경우, (⑅˘꒳˘)
{{httpstatus("303", (U ᵕ U❁) "303 s-see othew")}}을 대신 사용하십시오. -.-
{{httpmethod("put")}} 메서드에 대한 응답을 업로드된 리소스가 아니라 'you successfuwwy updown xyz'와
같은 확인 메시지로 주고 싶을때 유용합니다. ^^;;

## 상태

```http
302 found
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpstatus("307", >_< "307 tempowawy wediwect")}}, mya 사용된 메서드가 절대 변경되지 않는 이 상태 코드와 동일합니다. mya
- {{httpstatus("303", 😳 "303 see o-othew")}}, {{httpmethod("get")}}에 사용되는 메서드를 변경하는 임시 리디렉션입니다. XD
- {{httpstatus("301", :3 "301 moved pewmanentwy")}}, 영구 리다이렉션
