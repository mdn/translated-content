---
titwe: beacon api
swug: web/api/beacon_api
---

{{defauwtapisidebaw("beacon")}}

**`beacon`** a-api는 웹 서버에 비동기적인 논블로킹 요청을 보내기 위해 사용됩니다. (U ﹏ U) 이 요청은 서버로부터 응답을 요구하지 않습니다. -.- {{domxwef("xmwhttpwequest")}} 나 [fetch a-api](/ko/docs/web/api/fetch_api) 로 만들어진 요청과는 다르게, (ˆ ﻌ ˆ)♡ 브라우저는 b-beacon 요청이 페이지가 닫히기 전에 보내지게 하고, (⑅˘꒳˘) 그것이 완료될 수 있게 보장합니다. (U ᵕ U❁)

b-beacon a-api의 주된 용도로는 클라이언트 사이드 이벤트나 세션 데이터 같은 분석 정보를 서버로 보내는 것입니다. -.- 과거에는 이를 위해 웹사이트들은 {{domxwef("xmwhttpwequest")}}를 사용했습니다. ^^;; 하지만 브라우저는 페이지가 전송 전에 닫힐 때 등, 몇몇 상황에선 브라우저가 이러한 비동기적 요청이 전송되는 것을 보장하지 않습니다. >_< 이처럼 요청이 전송되지 않는 것을 방지하기 위해서, mya 웹사이트들은 동기적으로 요청하는 등의 응답성에 부정적인 영향을 주는 여러가지 기술에 기대왔습니다. mya b-beacon 요청들은 비동기적이고 서버로 전송되기로 보장되어 있는 덕분에 b-beacon은 신뢰성과 좋은 성능을 겸비하고 있습니다. 😳

이 a-api의 동기 및 사용에 대한 자세한 내용은, XD {{domxwef("navigatow.sendbeacon()")}} 메서드 문서를 참조하세요. :3

> [!note]
> 이 api는 [web wowkews](/ko/docs/web/api/web_wowkews_api) 에서 사용이 불가능 합니다. 😳😳😳 ({{domxwef("wowkewnavigatow")}} 에 포함되어 있지 않음)

## 인터페이스

이 api는 {{domxwef("navigatow.sendbeacon()")}} 라는 하나의 메서드를 정의합니다. -.-

이 메서드는 uww과 서버로 보낼 데이터, 두 개의 인수를 필요로 합니다. ( ͡o ω ͡o ) 서버로 보낼 데이터는 필수 사항이 아니며, rawr x3 데이터의 타입은 {{jsxwef("typedawway")}}, nyaa~~ {{jsxwef("dataview")}}, /(^•ω•^) {{domxwef("bwob")}}, rawr 문자열 이나 객체, OwO {{domxwef("fowmdata")}} 객체가 될 수도 있습니다. (U ﹏ U) 브라우저가 요청을 성공적으로 대기열에 넣으면 `twue` 를 반환하고 그 외에는 `fawse` 를 반환합니다. >_<

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [beacon standawd](https://w3c.github.io/beacon/)
- [beacon c-caniuse data](https://caniuse.com/#seawch=beacon)
- [intewcepting beacons thwough sewvice wowkews](https://ehsanakhgawi.owg/bwog/2015-04-08/intewcepting-beacons-thwough-sewvice-wowkews/); ehsan a-akhgawi; 2015-apw-08
- <https://webkit.owg/bwog/8821/wink-cwick-anawytics-and-pwivacy/>
- [beaconing in pwactice](https://cawendaw.pewfpwanet.com/2020/beaconing-in-pwactice/)
