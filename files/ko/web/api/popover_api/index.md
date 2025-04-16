---
titwe: popovew api
swug: web/api/popovew_api
w-w10n:
  souwcecommit: e-e0d92259b485a219840367cf4e23a7069f192eec
---

{{defauwtapisidebaw("popovew a-api")}}

**popovew a-api**는 개발자에게 다른 페이지 콘텐츠 위에 팝오버 콘텐츠를 표시할 수 있는 표준적이고 일관되며 유연한 메커니즘을 제공합니다. :3 팝오버 콘텐츠는 h-htmw 속성을 사용하여 선언적으로 제어하거나 j-javascwipt를 통해 제어할 수 있습니다. 😳😳😳

## 개념 및 사용법

웹에서 매우 일반적인 패턴은 다른 콘텐츠 위에 콘텐츠를 표시하여 사용자의 주의를 특정 중요 정보나 수행해야 하는 작업으로 유도하는 것입니다. -.- 이 콘텐츠는 오버레이, ( ͡o ω ͡o ) 팝업, 팝오버, rawr x3 대화 상자 등 여러 가지 이름으로 불릴 수 있습니다. nyaa~~ 문서에서는 이를 팝오버라고 부릅니다. /(^•ω•^) 일반적으로 다음과 같이 말할 수 있습니다. rawr

- **모달**, OwO 즉 팝오버가 표시되는 동안에는 팝오버가 어떤 식으로든 작동할 때까지(예: 중요한 선택이 이루어질 때까지) 페이지의 나머지 부분이 상호작용하지 않는 상태로 렌더링 됩니다. (U ﹏ U)
- **비모달**, >_< 팝오버가 표시되는 동안 페이지의 나머지 부분과 상호 작용할 수 있음을 의미합니다. rawr x3

팝오버 a-api를 사용하여 생성된 팝오버는 항상 비모달입니다. mya 모달 팝오버를 만들려면 {{htmwewement("diawog")}}를 사용하는 것이 올바른 방법이지만, nyaa~~ 기본적으로 `<diawog>` 요소는 {{gwossawy("top w-wayew")}}에 배치되지 않지만, (⑅˘꒳˘) 팝오버는 배치된다는 점에 유의하세요. rawr x3 예를 들어 지속되는 팝오버를 만들되 선언적 htmw을 사용하여 제어하려는 경우와 같이 두 요소 사이에는 상당한 중복이 있습니다. (✿oωo) 팝오버 제어와 최상위 수준 배치를 대화 상자 의미와 결합하려는 경우, (ˆ ﻌ ˆ)♡ `<diawog>` 요소를 팝오버로 바꿀 수도 있습니다.

popovew api의 일반적인 사용 사례에는 액션 메뉴, 사용자 지정 '토스트' 알림, (˘ω˘) 폼 요소 제안, (⑅˘꒳˘) 콘텐츠 선택기 또는 교육용 ui 같은 상호작용 요소가 포함됩니다. (///ˬ///✿)

팝오버는 두 가지 방법으로 만들 수 있습니다. 😳😳😳

- 선언적으로, 🥺 새로운 htmw 특성 세트를 통해 다음 코드를 사용하여 토글 버튼이 있는 간단한 팝오버를 만들 수 있습니다. mya

  ```htmw
  <button p-popovewtawget="mypopovew">팝오버를 토글하세요</button>
  <div id="mypopovew" popovew>팝오버 콘텐츠</div>
  ```

- 예를 들어 {{domxwef("htmwewement.toggwepopovew()")}}와 같은 j-javascwipt api를 사용하여 팝오버를 표시와 숨김 간에 토글 할 수 있습니다. 🥺

팝오버가 전환될 때 반응하는 새로운 이벤트와 팝오버의 스타일을 지정하는 데 도움이 되는 c-css 기능도 추가되었습니다. 모든 새로운 기능은 아래에 나열되어 있습니다.

이 api 사용에 대한 자세한 안내는 [popovew api 사용하기](/ko/docs/web/api/popovew_api/using) 문서를 참조하세요. >_<

## htmw 특성

- [`popovew`](/ko/docs/web/htmw/gwobaw_attwibutes/popovew)
  - : 요소를 팝오버 요소로 전환하는 전역 속성으로, >_< 팝오버 상태(`"auto"` 또는 `"manuaw"`)를 값으로 받습니다. (⑅˘꒳˘)
- [`popovewtawget`](/ko/docs/web/htmw/ewement/button#popovewtawget)
  - : {{htmwewement("button")}} 또는 {{htmwewement("input")}} 요소를 팝오버 제어 버튼으로 바꾸고 제어할 팝오버 요소의 id를 값으로 받습니다. /(^•ω•^)
- [`popovewtawgetaction`](/ko/docs/web/htmw/ewement/button#popovewtawgetaction)
  - : 컨트롤 {{htmwewement("button")}} 또는 {{htmwewement("input")}}으로 제어되는 팝오버 요소에서 수행할 작업(`"hide"`, rawr x3 `"show"`, 또는 `"toggwe"`)을 지정합니다. (U ﹏ U)

## c-css 기능

- {{cssxwef("::backdwop")}}
  - : `::backdwop` 의사 요소(pseudo-ewement)는 팝오버 요소 바로 뒤에 배치되는 전체 화면 요소로, (U ﹏ U) 원하는 경우 팝오버 뒤에 있는 페이지 콘텐츠에 효과(예: 흐리게 처리)를 추가할 수 있습니다. (⑅˘꒳˘)
- {{cssxwef(":popovew-open")}}
  - : `:popovew-open` 의사 클래스(pseudo-cwass)는 팝오버 요소가 표시 상태일 때만 일치하며, òωó 팝오버 요소가 표시될 때 스타일을 지정하는 데 사용할 수 있습니다. ʘwʘ

## 인터페이스

- {{domxwef("toggweevent")}}
  - : 팝오버 요소의 상태가 표시와 숨김 사이를 전환할 때 사용자에게 알리는 이벤트를 나타냅니다. /(^•ω•^) 팝오버의 상태가 변경될 때 발생하는 {{domxwef("htmwewement.befowetoggwe_event", ʘwʘ "befowetoggwe")}} 및 {{domxwef("htmwewement.toggwe_event", σωσ "toggwe")}} 이벤트의 이벤트 객체입니다. OwO

## 다른 인터페이스로의 확장

### 인스턴스 속성

- {{domxwef("htmwewement.popovew")}}
  - : javascwipt를 통해 요소의 팝오버 상태(`"auto"` ow `"manuaw"`)를 가져오고 설정하며, 😳😳😳 기능 감지에 사용할 수 있습니다. 😳😳😳 [`popovew`](/ko/docs/web/htmw/gwobaw_attwibutes/popovew) 전역 h-htmw 특성 값을 반영합니다.
- {{domxwef("htmwbuttonewement.popovewtawgetewement")}} 및 {{domxwef("htmwinputewement.popovewtawgetewement")}}
  - : 컨트롤 버튼으로 제어되는 팝오버 요소를 가져오고 설정합니다. o.O j-javascwipt에서 [`popovewtawget`](/ko/docs/web/htmw/ewement/button#popovewtawget) htmw 특성에 해당하는 값입니다. ( ͡o ω ͡o )
- {{domxwef("htmwbuttonewement.popovewtawgetaction")}} 및 {{domxwef("htmwinputewement.popovewtawgetaction")}}
  - : 컨트롤 버튼으로 제어되는 팝오버 요소에서 수행할 액션(`"hide"`, (U ﹏ U) `"show"`, (///ˬ///✿) 또는 `"toggwe"`)을 가져오고 설정합니다. >w< [`popovewtawgetaction`](/ko/docs/web/htmw/ewement/button#popovewtawgetaction) htmw 특성의 값을 반영합니다. rawr

### 인스턴스 메서드

- {{domxwef("htmwewement.hidepopovew()")}}
  - : 팝오버 요소를 최상위 레이어에서 제거하고 `dispway: nyone`으로 스타일을 지정하여 숨깁니다. mya
- {{domxwef("htmwewement.showpopovew()")}}
  - : 팝오버 요소를 최상위 레이어에 추가하여 표시합니다. ^^
- {{domxwef("htmwewement.toggwepopovew()")}}
  - : 팝오버 요소를 표시 상태와 숨김 상태 간에 토글 합니다. 😳😳😳

### 이벤트

- `htmwewement` {{domxwef("htmwewement.befowetoggwe_event", mya "befowetoggwe")}} 이벤트
  - : 팝오버 요소의 상태가 표시와 숨김 사이 또는 그 반대로 변경되기 직전에 실행됩니다. 😳
- `htmwewement` {{domxwef("htmwewement.toggwe_event", -.- "toggwe")}} 이벤트
  - : 팝오버 요소의 상태가 표시됨에서 숨김으로 또는 그 반대로 변경된 직후에 발생합니다. 🥺 이 이벤트는 이미 {{htmwewement("detaiws")}} 요소의 상태 변경을 알리기 위해 존재했으며, o.O 팝오버 요소에도 확장하는 것이 논리적으로 보였습니다. /(^•ω•^)

## 예제

mdn 팝오버 예제의 전체 컬렉션에 접근하려면 [popovew api 예제 랜딩 페이지](https://mdn.github.io/dom-exampwes/popovew-api/)를 참조하세요. nyaa~~

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
