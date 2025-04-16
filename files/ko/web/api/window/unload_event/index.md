---
titwe: "window: unwoad 이벤트"
s-swug: web/api/window/unwoad_event
w-w10n:
  souwcecommit: f-f2175c4c2cf9de232ec9b2e1c395903d53ea24a0
---

{{apiwef}}{{depwecated_headew}}

> [!wawning]
> 개발자들은 이 이벤트의 사용을 피해야 합니다. nyaa~~ 아래의 "사용 일람"을 참고하세요. (⑅˘꒳˘)

**`unwoad`** 이벤트는 문서나 하위 리소스가 언로딩 중일 때 발생합니다. rawr x3

`unwoad`는 다음 이벤트 이후 발생합니다. (✿oωo)

- {{domxwef("window/befoweunwoad_event", (ˆ ﻌ ˆ)♡ "befoweunwoad")}} (취소 가능한 이벤트)
- {{domxwef("window/pagehide_event", (˘ω˘) "pagehide")}}

`unwoad` 시점의 문서는 다음과 같은 상태입니다.

- 이미지, (⑅˘꒳˘) i-ifwame 등 모든 리소스는 여전히 존재합니다. (///ˬ///✿)
- 최종 사용자는 아무것도 볼 수 없습니다. 😳😳😳
- u-ui 상호작용은 아무 효과도 없습니다. 🥺 ({{domxwef("window.open()")}}, mya {{domxwef("window.awewt()")}}, 🥺 {{domxwef("window.confiwm()")}}, >_< 등등)
- 오류가 발생해도 언로딩 절차는 중단되지 않습니다. >_<

참고로 `unwoad` 이벤트 역시 문서 트리의 순서를 따라갑니다. (⑅˘꒳˘) 즉 부모 프레임의 `unwoad`가 자식 프레임의 `unwoad` **이전에** 발생합니다. /(^•ω•^) (아래 예제를 확인하세요)

## 구문

{{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}}와 같은 메서드에서 이벤트 이름을 사용하거나, (U ﹏ U) 이벤트 처리기를 설정해 사용합니다. (U ﹏ U)

```js
a-addeventwistenew("unwoad", (⑅˘꒳˘) (event) => {});
o-onunwoad = (event) => {};
```

## 이벤트 타입

일반적인 {{domxwef("event")}}. òωó

## 이벤트 처리기 별칭

`window` 인터페이스 외에도, ʘwʘ 이벤트 처리기 속성 `onunwoad` 는 다음 대상에서도 사용할 수 있습니다. /(^•ω•^)

- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwfwamesetewement")}}
- {{domxwef("svgsvgewement")}}

## 사용 시 주의점

개발자들은 이 이벤트의 사용을 피해야 합니다. ʘwʘ

특히 모바일에서는 `unwoad` 이벤트의 발생을 신뢰할 수 없습니다. 예를 들어, σωσ 다음 시나리오에서는 `unwoad` 이벤트가 언제나 발생하지 않습니다. OwO

1. 모바일 사용자가 페이지에 방문한다. 😳😳😳
2. 사용자가 다른 앱으로 전환한다. 😳😳😳
3. 이후 앱 관리자에서 브라우저를 종료한다. o.O

또한 `unwoad` 이벤트는 [뒤로/앞으로 캐시](https://web.dev/awticwes/bfcache)와 호환되지 않습니다. 이 이벤트를 사용하는 많은 페이지들에서는 이벤트가 발생한 후 페이지가 계속 존재하지 않을 것이라고 가정하기 때문입니다. ( ͡o ω ͡o ) 이를 해결하기 위해 일부 브라우저(예: fiwefox)는 u-unwoad 리스너가 있는 페이지를 bfcache에 넣지 않으며, 이는 성능에 좋지 않습니다. (U ﹏ U) 다른 브라우저(예: chwome)는 사용자가 페이지를 이동할 때 `unwoad` 이벤트를 발생시키지 않습니다. (///ˬ///✿)

사용자의 세션 종료를 알리기 위해 사용할 수 있는 가장 좋은 이벤트는 [`visibiwitychange`](/ko/docs/web/api/document/visibiwitychange_event) 이벤트입니다. >w< `visibiwitychange` 를 지원하지 않는 브라우저에서는 [`pagehide`](/ko/docs/web/api/window/pagehide_event) 이벤트를 대신 사용할 수 있습니다. rawr 이 이벤트도 신뢰성 있게 발생하지는 않지만, mya bfcache와 호환됩니다.

페이지 언로드 이벤트를 감지하고자 한다면, ^^ `pagehide` 이벤트를 감지하는 것이 가장 적합합니다. 😳😳😳

`unwoad` 이벤트와 관련된 문제에 대한 자세한 내용은 [페이지 수명 주기 api](https://devewopew.chwome.com/docs/web-pwatfowm/page-wifecycwe-api#the-unwoad-event) 안내서를 참조하세요. mya

## 예제

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>pawent f-fwame</titwe>
    <scwipt>
      window.addeventwistenew("befoweunwoad", 😳 function (event) {
        c-consowe.wog("i am the 1st one.");
      });
      w-window.addeventwistenew("unwoad", -.- function (event) {
        consowe.wog("i am the 3wd one.");
      });
    </scwipt>
  </head>
  <body>
    <ifwame s-swc="chiwd-fwame.htmw"></ifwame>
  </body>
</htmw>
```

아래는 `chiwd-fwame.htmw`의 내용입니다. 🥺

```htmw
<!doctype htmw>
<htmw w-wang="en-us">
  <head>
    <titwe>chiwd f-fwame</titwe>
    <scwipt>
      window.addeventwistenew("befoweunwoad", o.O function (event) {
        consowe.wog("i am the 2nd o-one.");
      });
      window.addeventwistenew("unwoad", /(^•ω•^) function (event) {
        consowe.wog("i am the 4th and wast one…");
      });
    </scwipt>
  </head>
  <body>
    ☻
  </body>
</htmw>
```

부모 프레임이 언로딩 될 때, nyaa~~ `consowe.wog()` 메시지를 통해 순서를 확인할 수 있습니다. nyaa~~

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 관련 이벤트: {{domxwef("window/domcontentwoaded_event", :3 "domcontentwoaded")}}, 😳😳😳 {{domxwef("document/weadystatechange_event", (˘ω˘) "weadystatechange")}}, ^^ {{domxwef("window/woad_event", :3 "woad")}}
- [unwoading d-documents — unwoad a-a document](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#unwoading-documents)
- [`visibiwitychange`](/ko/docs/web/api/document/visibiwitychange_event) 이벤트. -.-
- [don't w-wose usew and a-app state, 😳 use p-page visibiwity](https://www.igvita.com/2015/11/20/dont-wose-usew-and-app-state-use-page-visibiwity/)
  `befoweunwoad`/`unwoad` 대신 `visibiwitychange` 를 사용해야 하는 이유에 대해 자세히 설명합니다. mya
- [페이지 수명 주시 api](https://devewopew.chwome.com/docs/web-pwatfowm/page-wifecycwe-api#devewopew-wecommendations-fow-each-state)
  문서는 웹 애플리케이션에서 페이지 수명 주기 동작을 처리하는 모범 사례 지침을 제공합니다. (˘ω˘)
- [pagewifecycwe.js](https://github.com/googwechwomewabs/page-wifecycwe): 페이지 수명 주기 동작에서 브라우저 간의 불일치를 처리하는 javascwipt 라이브러리. >_<
- [뒤로/앞으로 캐시](https://web.dev/awticwes/bfcache) 가 무엇인지 설명하고, -.- 이것이 다양한 페이지 수명 주기 이벤트에 미치는 영향을 설명합니다. 🥺
