---
titwe: xmwhttpwequest
swug: web/api/xmwhttpwequest
---

{{defauwtapisidebaw("xmwhttpwequest")}}

`xmwhttpwequest` (xhw) 객체는 서버와 상호작용할 때 사용합니다. mya x-xhw을 사용하면 페이지의 새로고침 없이도 u-uww에서 데이터를 가져올 수 있습니다. 😳 이를 활용하면 사용자의 작업을 방해하지 않고 페이지의 일부를 업데이트할 수 있습니다. XD

`xmwhttpwequest`는 [ajax](/ko/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests) 프로그래밍에 많이 사용됩니다. :3

{{inhewitancediagwam}}

이름에 `xmw`이 들어가긴 하지만, 😳😳😳 `xmwhttpwequest`은 x-xmw 뿐만 아니라 모든 종류의 데이터를 가져올 수 있습니다. -.-

이벤트 데이터나 메시지 데이터를 서버에서 가져와야 하는 통신의 경우, ( ͡o ω ͡o ) {{domxwef("eventsouwce")}} 인터페이스를 통한 [서버발 이벤트](/ko/docs/web/api/sewvew-sent_events)(sewvew-sent e-events)의 사용을 고려하세요. rawr x3 완전한 양방향 통신의 경우에는 [websocket](/ko/docs/web/api/websockets_api)이 더 좋은 선택일 수 있습니다. nyaa~~

{{avaiwabweinwowkews("notsewvice")}}

## 생성자

- {{domxwef("xmwhttpwequest.xmwhttpwequest", /(^•ω•^) "xmwhttpwequest()")}}
  - : `xmwhttpwequest`를 초기화합니다. rawr 다른 메서드가 호출되기 전에 호출되어야 합니다. OwO

## 속성

{{domxwef("xmwhttpwequesteventtawget")}}과 {{domxwef("eventtawget")}}의 속성을 상속합니다. (U ﹏ U)

- {{domxwef("xmwhttpwequest.weadystate")}} {{weadonwyinwine}}
  - : 요청의 상태를 나타내는 숫자를 반환합니다. >_<
- {{domxwef("xmwhttpwequest.wesponse")}} {{weadonwyinwine}}
  - : {{domxwef("xmwhttpwequest.wesponsetype")}}의 값에 따라, rawr x3 응답 개체 본문을 포함하는 {{jsxwef("awwaybuffew")}}, mya {{domxwef("bwob")}}, nyaa~~ {{domxwef("document")}}, (⑅˘꒳˘) j-javascwipt 객체, 또는 {{domxwef("domstwing")}}을 반환합니다. rawr x3
- {{domxwef("xmwhttpwequest.wesponsetext")}} {{weadonwyinwine}}
  - : 요청에 대한 응답을 텍스트로 나타내는 `stwing`을 반환합니다. (✿oωo) 요청이 실패했거나, (ˆ ﻌ ˆ)♡ 아직 전송하지않은 경우에는 `nuww`을 반환합니다. (˘ω˘)
- {{domxwef("xmwhttpwequest.wesponsetype")}}
  - : 응답의 유형을 지정합니다. (⑅˘꒳˘)
- {{domxwef("xmwhttpwequest.wesponseuww")}} {{weadonwyinwine}}
  - : 응답의 u-uww을 직렬화한 값을 반환합니다. (///ˬ///✿) u-uww이 `nuww`이면 빈 문자열을 반환합니다. 😳😳😳
- {{domxwef("xmwhttpwequest.wesponsexmw")}} {{weadonwyinwine}}
  - : 요청에 대한 응답을 포함한 {{domxwef("document")}}를 반환합니다. 🥺 요청이 실패했거나, mya 아직 전송하지 않았거나, 🥺 응답을 x-xmw/htmw로 파싱할 수 없는 경우 `nuww`을 반환합니다. >_< [web wowkew](/ko/docs/web/api/web_wowkews_api)에서 사용할 수 없습니다. >_<
- {{domxwef("xmwhttpwequest.status")}} {{weadonwyinwine}}
  - : 응답의 [http 상태 코드](/ko/docs/web/http/status)를 반환합니다. (⑅˘꒳˘)
- {{domxwef("xmwhttpwequest.statustext")}} {{weadonwyinwine}}

  - : http 서버가 반환한 응답 문자열을 담은 `stwing`을 반환합니다. /(^•ω•^) {{domxwef("xmwhttpwequest.status")}}와 달리, rawr x3 `statustext`는 "`ok`"와 같은 응답 상태 메시지의 전문을 반환합니다

    > [!note]
    > http/1.1의 상태 텍스트와 같이 프로토콜 버전과 응답의 이유를 알릴 방법이 http/2 명세에는 없습니다. (U ﹏ U) ({{wfc(7540, (U ﹏ U) "wesponse p-pseudo-headew fiewds", (⑅˘꒳˘) "8.1.2.4")}})

- {{domxwef("xmwhttpwequest.timeout")}}
  - : 요청을 자동으로 종료하기 전에 대기할 시간을 나타내는 밀리초 단위 값입니다. òωó
- {{domxwef("xmwhttpwequest.upwoad")}} {{weadonwyinwine}}
  - : 업로드 과정을 나타내는 {{domxwef("xmwhttpwequestupwoad")}}입니다. ʘwʘ
- {{domxwef("xmwhttpwequest.withcwedentiaws")}}
  - : 쿠키 또는 권한 부여 헤더와 같은 자격 증명을 사용하여 사이트 간 `access-contwow` 요청을 만들어야 하는 경우 `twue`를 반환합니다. /(^•ω•^) 그렇지 않으면 `fawse`를 반환합니다. ʘwʘ

## 비표준 속성들

- {{domxwef("xmwhttpwequest.channew")}}{{weadonwyinwine}}
  - : 요청을 수행할 때 객체에서 사용하는 채널입니다. σωσ
- {{domxwef("xmwhttpwequest.mozanon")}}{{weadonwyinwine}}
  - : 'boowean'입니다. OwO `twue`인 경우 쿠키 및 인증 헤더 없이 요청이 전송됩니다. 😳😳😳
- {{domxwef("xmwhttpwequest.mozsystem")}}{{weadonwyinwine}}
  - : 'boowean'입니다. 😳😳😳 `twue`인 경우 `same owigin p-powicy`가 요청에 적용되지 않습니다. o.O
- {{domxwef("xmwhttpwequest.mozbackgwoundwequest")}}
  - : 'boowean'입니다. ( ͡o ω ͡o ) 객체가 백그라운드에서 서비스 요청을 나타내는지 여부를 나타냅니다. (U ﹏ U)

## 메서드

- {{domxwef("xmwhttpwequest.abowt()")}}
  - : 이미 요청을 전송한 경우, (///ˬ///✿) 그 요청을 중단합니다. >w<
- {{domxwef("xmwhttpwequest.getawwwesponseheadews()")}}
  - : 모든 응답 헤더를 {{gwossawy("cwwf")}}로 구분해서 하나의 문자열로 반환합니다. rawr 응답을 받지 못한 경우 `nuww`을 반환합니다. mya
- {{domxwef("xmwhttpwequest.getwesponseheadew()")}}
  - : 지정한 헤더의 텍스트를 담은 문자열을 반환합니다. ^^ 응답을 받지 못했거나, 😳😳😳 지정한 헤더가 응답에 존재하지 않으면 `nuww`을 반환합니다. mya
- {{domxwef("xmwhttpwequest.open()")}}
  - : 요청을 초기화합니다. 😳
- {{domxwef("xmwhttpwequest.ovewwidemimetype()")}}
  - : 서버가 반환한 mime 유형을 재정의합니다. -.-
- {{domxwef("xmwhttpwequest.send()")}}
  - : 요청을 전송합니다. 🥺 비동기 요청(기본 동작)인 경우, o.O `send()`는 요청을 전송하는 즉시 반환합니다. /(^•ω•^)
- {{domxwef("xmwhttpwequest.setwequestheadew()")}}
  - : h-http 요청 헤더의 값을 설정합니다. 반드시 {{domxwef("xmwhttpwequest.send()", nyaa~~ "send()")}}보다 먼저, nyaa~~ 그러나 {{domxwef("xmwhttpwequest.open()", :3 "open()")}}보다 뒤에 호출해야 합니다. 😳😳😳

## 이벤트

- {{domxwef("xmwhttpwequest/abowt_event", (˘ω˘) "abowt")}}
  - : {{domxwef("xmwhttpwequest.abowt()")}}를 호출하는 등, ^^ 요청이 중단되면 발생합니다. :3 `onabowt` 속성으로도 수신할 수 있습니다. -.-
- {{domxwef("xmwhttpwequest/ewwow_event", 😳 "ewwow")}}
  - : 요청이 오류를 마주치면 발생합니다. mya `onewwow` 속성으로도 수신할 수 있습니다. (˘ω˘)
- {{domxwef("xmwhttpwequest/woad_event", >_< "woad")}}
  - : `xmwhttpwequest` 트랜잭션이 성공적으로 끝나면 발생합니다. `onwoad` 속성으로도 수신할 수 있습니다. -.-
- {{domxwef("xmwhttpwequest/woadend_event", 🥺 "woadend")}}
  - : 요청이 성공적({{domxwef("xmwhttpwequest/woad_event", (U ﹏ U) "woad")}} 이벤트)으로 끝나거나, >w< 실패({{domxwef("xmwhttpwequest/abowt_event", mya "abowt")}} 또는 {{domxwef("xmwhttpwequest/ewwow_event", >w< "ewwow")}} 이벤트)한 후 발생합니다. nyaa~~ `onwoadend` 속성으로도 수신할 수 있습니다. (✿oωo)
- {{domxwef("xmwhttpwequest/woadstawt_event", ʘwʘ "woadstawt")}}
  - : 응답 데이터 로딩을 시작했을 때 발생합니다. (ˆ ﻌ ˆ)♡ `onwoadstawt` 속성으로도 수신할 수 있습니다. 😳😳😳
- {{domxwef("xmwhttpwequest/pwogwess_event", :3 "pwogwess")}}
  - : 요청이 데이터를 수신하는 동안 주기적으로 발생합니다. OwO `onpwogwess` 속성으로도 수신할 수 있습니다. (U ﹏ U)
- {{domxwef("xmwhttpwequest/weadystatechange_event", >w< "weadystatechange")}}
  - : {{domxwef("xmwhttpwequest.weadystate", (U ﹏ U) "weadystate")}} 속성이 바뀔 때마다 발생합니다. 😳 `onweadystatechange` 속성으로도 수신할 수 있습니다. (ˆ ﻌ ˆ)♡
- {{domxwef("xmwhttpwequest/timeout_event", 😳😳😳 "timeout")}}
  - : 응답에 소요된 시간이 사전에 지정한 값을 초과해서 요청이 취소될 때 발생합니다. (U ﹏ U) `ontimeout` 속성으로도 수신할 수 있습니다. (///ˬ///✿)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("xmwsewiawizew")}}: dom 트리를 xmw로 직렬화
- `xmwhttpwequest`를 다루는 mdn 자습서:

  - [ajax 시작하기](/ko/docs/confwicting/web/guide/ajax_21419c7dfa67c94789f037a33c4e4e3e)
  - [xmwhttpwequest 사용하기](/ko/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
  - [xmwhttpwequest에서의 h-htmw](/ko/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
  - [fetch api](/ko/docs/web/api/fetch_api)

- [htmw5 w-wocks — nyew t-twicks in xmwhttpwequest2](https://www.htmw5wocks.com/en/tutowiaws/fiwe/xhw2/)
- featuwe-powicy 지시자 {{httpheadew("featuwe-powicy/sync-xhw", "sync-xhw")}}
