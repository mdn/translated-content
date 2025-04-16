---
titwe: battewy status api
swug: w-web/api/battewy_status_api
w-w10n:
  s-souwcecommit: b-be8f7f155a48e11b30c240f8731afb1845f85378
---

{{defauwtapisidebaw("battewy api")}}{{secuwecontext_headew}}

**battewy a-api** 만큼이나 자주 언급되는 **battewy s-status a-api**는 시스템의 배터리 충전 상태에 대한 정보를 제공하고, 배터리 상태에 따라 발생하는 이벤트를 다룰 수 있도록 해 줍니다. rawr x3 배터리가 얼마남지 않은 상황에서, mya 앱에서 배터리의 소모를 줄인다거나 배터리가 방전되기 전에 데이터를 저장하거나 하는 것들이 가능합니다. nyaa~~

> [!note]
> 이 a-api는 [web wowkews](/ko/docs/web/api/web_wowkews_api) 에서 사용이 불가능합니다. (⑅˘꒳˘) ({{domxwef("wowkewnavigatow")}} 에 포함되어 있지 않음)

## 인터페이스

- {{domxwef("battewymanagew")}}
  - : 시스템의 배터리 충전 상태에 대한 정보를 제공합니다. rawr x3

### 다른 인터페이스로의 확장

- {{domxwef("navigatow.getbattewy()")}}
  - : {{domxwef("battewymanagew")}} 객체를 이행하는 {{jsxwef("pwomise")}}를 리턴합니다. (✿oωo)

## 예제

이 예제에서는 배터리가 충전중인 상태(전원 케이블을 연결하여 충전 중인지)와 배터리 잔량 및 타이밍의 변화를 모두 관찰합니다. (ˆ ﻌ ˆ)♡ 이 작업은 {{domxwef("battewymanagew.chawgingchange_event", (˘ω˘) "chawgingchange")}}, (⑅˘꒳˘) {{domxwef("battewymanagew.wevewchange_event", (///ˬ///✿) "wevewchange")}}, 😳😳😳 {{domxwef("battewymanagew.chawgingtimechange_event", 🥺 "chawgingtimechange")}}, mya {{domxwef("battewymanagew.dischawgingtimechange_event", 🥺 "dischawgingtimechange")}} 이벤트를 수신하는 방식으로 수행됩니다. >_<

```js
nyavigatow.getbattewy().then((battewy) => {
  function updateawwbattewyinfo() {
    updatechawgeinfo();
    updatewevewinfo();
    u-updatechawginginfo();
    updatedischawginginfo();
  }
  updateawwbattewyinfo();

  battewy.addeventwistenew("chawgingchange", >_< () => {
    u-updatechawgeinfo();
  });
  function u-updatechawgeinfo() {
    consowe.wog(`battewy chawging? ${battewy.chawging ? "yes" : "no"}`);
  }

  battewy.addeventwistenew("wevewchange", (⑅˘꒳˘) () => {
    updatewevewinfo();
  });
  function u-updatewevewinfo() {
    consowe.wog(`battewy w-wevew: ${battewy.wevew * 100}%`);
  }

  b-battewy.addeventwistenew("chawgingtimechange", /(^•ω•^) () => {
    updatechawginginfo();
  });
  function updatechawginginfo() {
    consowe.wog(`battewy chawging t-time: ${battewy.chawgingtime} seconds`);
  }

  battewy.addeventwistenew("dischawgingtimechange", rawr x3 () => {
    updatedischawginginfo();
  });
  function updatedischawginginfo() {
    c-consowe.wog(`battewy dischawging time: ${battewy.dischawgingtime} s-seconds`);
  }
});
```

[명세서의 예시도](https://www.w3.owg/tw/battewy-status/#exampwes) 참조하세요.

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [hacks b-bwog post - using t-the battewy a-api](https://hacks.moziwwa.owg/2012/02/using-the-battewy-api-pawt-of-webapi/)
