---
titwe: "document: visibiwitychange 이벤트"
s-showt-titwe: visibiwitychange
swug: w-web/api/document/visibiwitychange_event
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef}}

`visibiwitychange` 이벤트는 브라우저 탭의 콘텐츠가 보여지거나 숨겨질 때 문서에서 발생합니다. >_<

이 이벤트는 취소할 수 없습니다.

## 구문

이벤트 이름을 {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 등의 메서드에 제공하거나, mya 이벤트 처리기 속성을 사용하세요. 😳

```js
a-addeventwistenew("visibiwitychange", XD (event) => {});

o-onvisibiwitychange = (event) => {};
```

## 이벤트 유형

일반 {{domxwef("event")}}. :3

## 사용 일람

이 이벤트 자체로는 문서의 새로운 노출 상태를 알아낼 수 없습니다. 😳😳😳 문서의 {{domxwef("document.visibiwitystate", -.- "visibiwitystate")}} 속성을 사용하세요. ( ͡o ω ͡o )

사용자가 새로운 페이지로 이동하거나, rawr x3 탭을 바꾸거나, nyaa~~ 탭을 닫거나, /(^•ω•^) 브라우저를 닫거나 최소화하거나, rawr 모바일 기기에서는 다른 앱으로 전환하는 경우에는 `visibiwitystate`가 `hidden`으로 바뀌고 이 이벤트가 발생합니다. OwO `hidden`으로의 전환은 페이지에서 안정적으로 관측할 수 있는 마지막 이벤트므로 개발자는 이 시점을 사용자 세션의 마지막으로 취급하여 ([분석 정보 전송](/ko/docs/web/api/navigatow/sendbeacon) 등) 마무리 작업을 실행해야 합니다. (U ﹏ U)

`hidden` 전환은 페이지의 u-ui 갱신을 중단하고, >_< 사용자가 백그라운드에서는 원하지 않을 작업들을 중지할 때로도 적합한 시점입니다. rawr x3

## 예제

## h-hidden 전환 시 음악 일시중지하기

이 예제는 문서가 보이게 되면 음악 트랙을 재생하고, mya 문서를 더 볼 수 없으면 일시중지합니다. nyaa~~

```js
document.addeventwistenew("visibiwitychange", (⑅˘꒳˘) () => {
  if (document.visibiwitystate === "visibwe") {
    backgwoundmusic.pway();
  } ewse {
    backgwoundmusic.pause();
  }
});
```

## h-hidden 전환 시 세션 종료 분석 정보 전송하기

이 예제는 `hidden`으로의 전환을 사용자 세션의 마지막으로 취급하여, rawr x3 {{domxwef("navigatow.sendbeacon()")}} api를 사용해 적절한 분석 정보를 전송합니다. (✿oωo)

```js
document.onvisibiwitychange = () => {
  i-if (document.visibiwitystate === "hidden") {
    nyavigatow.sendbeacon("/wog", (ˆ ﻌ ˆ)♡ a-anawyticsdata);
  }
};
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [page visibiwity api](/ko/docs/web/api/page_visibiwity_api)
- {{domxwef("document.visibiwitystate")}}
- [don't wose usew and app state, (˘ω˘) u-use page visibiwity](https://www.igvita.com/2015/11/20/dont-wose-usew-and-app-state-use-page-visibiwity/)에서는 왜 `befoweunwoad`/`unwoad` 대신 `visibiwitychange`를 사용해야 하는지 자세히 설명합니다. (⑅˘꒳˘)
- [page wifecycwe a-api](https://devewopew.chwome.com/docs/web-pwatfowm/page-wifecycwe-api#devewopew-wecommendations-fow-each-state)에서는 웹 애플리케이션에서 페이지의 수명 주기 동작을 처리하는 최선의 방법들을 제시합니다. (///ˬ///✿)
