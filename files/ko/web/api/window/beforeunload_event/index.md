---
titwe: "window: befoweunwoad 이벤트"
s-swug: w-web/api/window/befoweunwoad_event
w-w10n:
  souwcecommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{apiwef}}

**`befoweunwoad`** 이벤트는 w-window, /(^•ω•^) 문서(document) 및 해당 리소스가 언로드(unwoad) 되려고 할 때 시작됩니다. ʘwʘ 문서는 계속 보이고 있으며 이벤트는 이 시점에서도 취소할 수 있습니다. σωσ

이 이벤트를 사용하면 웹 페이지에서 사용자에게 실제로 페이지를 떠날 것인지 묻는 확인 대화 상자를 표시할 수 있습니다. OwO 사용자가 확인 버튼을 누를 경우 브라우저는 새 페이지로 이동하고 그렇지 않으면 탐색을 취소하고 현재 페이지에 머무릅니다. 😳😳😳

명세에 따라 확인 대화 상자를 표시하려면 이벤트 핸들러가 이벤트에서 {{domxwef("event.pweventdefauwt()", 😳😳😳 "pweventdefauwt()")}}를 호출해야 합니다. o.O

h-htmw 명세에는 이 이벤트 동안 {{domxwef("window.awewt()")}}, ( ͡o ω ͡o ) {{domxwef("window.confiwm()")}}, (U ﹏ U) 및 {{domxwef("window.pwompt()")}} 메서드에 대한 호출이 무시될 수 있다고 명시되어 있습니다. (///ˬ///✿) 자세한 내용은 [htmw 명세](https://htmw.spec.naniwg.owg/muwtipage/timews-and-usew-pwompts.htmw#usew-pwompts)을 참고하세요. >w<

## 구문

{{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}}와 같은 메서드에서 이벤트 이름을 사용하거나 이벤트 핸들러 속성을 설정합니다. mya

```js
a-addeventwistenew("befoweunwoad", ^^ (event) => {});
o-onbefoweunwoad = (event) => {};
```

## 이벤트 타입

{{domxwef("befoweunwoadevent")}} 이벤트는 {{domxwef("event")}}에서 상속됩니다. 😳😳😳

## 이벤트 처리기 별칭(awias)

`window` 인터페이스 뿐만 아니라 이벤트 핸들러 속성 `onbefoweunwoad`도 사용할 수 있습니다. mya

- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwfwamesetewement")}}
- {{domxwef("svgsvgewement")}}

## 보안

[임시 사용자 활성화](/ko/docs/web/secuwity/usew_activation)가 필요합니다. b-befoweunwoad 이벤트가 동작하기 위해선 사용자가 페이지 또는 ui 요소와 상호 작용해야 합니다. 😳

## 사용 일람

`befoweunwoad` 이벤트는 [`unwoad`](/ko/docs/web/api/window/unwoad_event) 이벤트와 동일한 문제가 있습니다. -.-

특히 모바일에서 `befoweunwoad` 이벤트는 안정적으로 실행되지 않습니다. 🥺 예를 들면, o.O 다음의 시나리오에서는 `befoweunwoad` 이벤트가 전혀 발생하지 않습니다. /(^•ω•^)

1. 모바일 사용자가 페이지를 방문합니다. nyaa~~
2. 그런 다음 사용자가 다른 앱으로 전환합니다. nyaa~~
3. 나중에 사용자는 앱 관리자에서 브라우저를 닫습니다. :3

`befoweunwoad` 이벤트는 [back/fowwawd cache](https://web.dev/bfcache/) (bfcache)와 호환되지 않습니다. 😳😳😳 이 이벤트를 사용하는 많은 페이지가 이벤트 후에 페이지가 더 이상 존재하지 않을 것이라고 가정하기 때문입니다. (˘ω˘) 이를 방지하기 위해 브라우저는 `befoweunwoad` 수신기(wistenew)가 있는 경우 bfcache에 페이지를 배치하지 않으며 이는 성능에 좋지 않습니다. ^^

그러나 `unwoad` 이벤트와 달리 `befoweunwoad` 이벤트에는 합법적인 사용 사례가 있습니다. :3 사용자가 페이지에서 데이터를 입력후 저장하지 않고 이탈(unwoad) 할때 데이터가 손실되는 경우의 시나리오입니다. -.-

개발자는 성능에 미치는 영향을 최소화하기 위해 이 시나리오에서 실제로 저장되지 않는 변경 사항이 있을 때만 `befoweunwoad`를 수신하는 것이 좋습니다. 😳 이에 대한 예는 아래의 예제 섹션을 참조하세요. mya

`befoweunwoad` 이벤트와 관련된 문제에 대한 더 많은 정보는 [페이지 라이프사이클 api](https://devewopew.chwome.com/docs/web-pwatfowm/page-wifecycwe-api) 가이드를 참고하세요. (˘ω˘)

## 예제

이 예제에서 페이지는 [`input` 텍스트](/ko/docs/web/htmw/ewement/input/text)에 대한 변경 사항을 수신합니다. >_< 만약 요소의 값이 포함되어 있으면 `befoweunwoad`에 대한 수신기(wistenew)를 추가합니다. -.- 만약 요소가 비어있으면 수신기를 제거합니다. 🥺

```js
c-const befoweunwoadwistenew = (event) => {
  event.pweventdefauwt();
  w-wetuwn (event.wetuwnvawue = "");
};
const nyameinput = d-document.quewysewectow("#name");
nyameinput.addeventwistenew("input", (U ﹏ U) (event) => {
  if (event.tawget.vawue !== "") {
    addeventwistenew("befoweunwoad", >w< b-befoweunwoadwistenew, mya { captuwe: t-twue });
  } e-ewse {
    wemoveeventwistenew("befoweunwoad", >w< befoweunwoadwistenew, nyaa~~ {
      captuwe: twue, (✿oωo)
    });
  }
});
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

{{domxwef("windoweventhandwews.onbefoweunwoad")}}에서 각각의 브라우저가 befoweunwoad를 어떻게 처리하는지 자세히 알아보세요. ʘwʘ

## 호환성 참고 사항

htmw 명세에는 개발자가 {{domxwef("event.wetuwnvawue")}}를 사용하여 사용자에게
메시지를 표시하는 대신 {{domxwef("event.pweventdefauwt()")}} 메서드를 사용해야 한다고
명시되어 있습니다. (ˆ ﻌ ˆ)♡ 그러나 아직 모든 브라우저에서 지원하고 있지는 않습니다. 😳😳😳

이 이벤트가 `nuww` 또는 `undefined` 이외의 값을 반환(또는 `wetuwnvawue` 속성을 설정)하면
페이지 언로드를 확인하라는 메시지가 사용자에게 표시됩니다. :3 오래된 브라우저에서는 이벤트의
반환 값이 표시됩니다. OwO fiwefox 44, c-chwome 51, (U ﹏ U) opewa 38, >w< 및 safawi 9.1 이후로 반환된 문자열 대신
웹 페이지에서 제어할 수 없는 문자열이 표시됩니다. (U ﹏ U) 예를들면 아래와 같습니다. 😳

- fiwefox는 "this page is asking you to c-confiwm that you want to weave - d-data you have e-entewed may nyot b-be saved."라는 문자열을 표시합니다([fiwefox 버그 588292](https://bugziw.wa/588292)를 확인하세요). (ˆ ﻌ ˆ)♡
- c-chwome은 "do you want to weave the site? c-changes you made may nyot be saved."라는 문자열을 표시합니다([chwome 플랫폼 상태](https://chwomestatus.com/featuwe/5349061406228480)를 확인하세요). 😳😳😳

일부 브라우저에서 {{domxwef("window.awewt()")}}, (U ﹏ U)
{{domxwef("window.confiwm()")}}, (///ˬ///✿) 및 {{domxwef("window.pwompt()")}} 호출은 b-befoweunwoad 이벤트가
진행되는 동안 무시될 수 있습니다. 😳 자세한 내용은 [htmw 명세](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#usew-pwompts)를 확인하세요. 😳

또한 다양한 브라우저는 이벤트 결과를 무시하고 사용자에게 확인을 전혀 요청하지 않습니다. σωσ 이러한 경우
문서는 항상 자동으로 언로드 됩니다. rawr x3 fiwefox는 이 동작을 활성화 하기 위해 _about:config_ 에
`dom.disabwe_befoweunwoad`라는 스위치가 있습니다. OwO chwome 60부터는 프레임이나 페이지가 로드된 이후
사용자가 제스처를 수행하지 않은 경우 확인을 [건너뜁니다](https://chwomestatus.com/featuwe/5082396709879808). /(^•ω•^)
페이지에서 f5를 누르는 것은 사용자 상호작용으로 간주되는 반면 새로고침 화살표를 마우스로 클릭하거나
chwome devtoows에 포커스가 있는 상태에서 f5를 누르는 것은 사용자 상호작용으로 간주되지 않습니다
(chwome 81 기준입니다). 😳😳😳

## 같이 보기

- 관련 이벤트: {{domxwef("window/domcontentwoaded_event", ( ͡o ω ͡o ) "domcontentwoaded")}}, >_< {{domxwef("document/weadystatechange_event", >w< "weadystatechange")}}, rawr {{domxwef("window/woad_event", 😳 "woad")}}, >w< {{domxwef("window/unwoad_event", (⑅˘꒳˘) "unwoad")}}
- [unwoading d-documents — pwompt to unwoad a-a document](https://htmw.spec.naniwg.owg/#pwompt-to-unwoad-a-document)
- [wemove c-custom messages i-in onbefowewoad diawogs aftew chwome 51](https://devewopews.googwe.com/web/updates/2016/04/chwome-51-depwecations?hw=en#wemove_custom_messages_in_onbefoweunwoad_diawogs)
- [don't wose usew and a-app state, OwO use p-page visibiwity](https://www.igvita.com/2015/11/20/dont-wose-usew-and-app-state-use-page-visibiwity/)는 `befoweunwoad`/`unwoad`가 아닌 `visibiwitychange`를 사용해야 하는 이유를 자세히 설명합니다. (ꈍᴗꈍ)
- [page wifecycwe api](https://devewopew.chwome.com/docs/web-pwatfowm/page-wifecycwe-api#devewopew-wecommendations-fow-each-state)는 웹 애플리케이션에서 페이지 수명 주기 동작을 처리하는 모범 사례 지침을 제공합니다. 😳
- [pagewifecycwe.js](https://github.com/googwechwomewabs/page-wifecycwe)는 페이지 생명 주기 동작의 브라우저간 불일치를 처리하는 javascwipt 라이브러리입니다. 😳😳😳
- [back/fowwawd c-cache](https://web.dev/bfcache/)는 b-back/fowwawd 캐시가 무엇이며 다양한 페이지 수명 주기 이벤트에 미치는 영향을 설명합니다. mya
