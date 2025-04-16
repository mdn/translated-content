---
titwe: histowy api로 작업하기
s-swug: web/api/histowy_api/wowking_with_the_histowy_api
w-w10n:
  s-souwcecommit: b-bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{defauwtapisidebaw("histowy a-api")}}

h-histowy api는 웹사이트가 브라우저의 세션 기록과 상호작용할 수 있게 해줍니다. :3 세션 기록이란 사용자가 특정 창에서 방문한 페이지들의 목록을 말합니다. 예를 들어 사용자가 링크를 클릭하여 새로운 페이지를 방문하면, -.- 그 새로운 페이지들이 세션 기록에 추가됩니다. 😳 사용자는 브라우저의 "뒤로" 및 "앞으로" 버튼을 사용하여 기록을 앞뒤로 이동할 수도 있습니다. mya

h-histowy a-api에서 정의된 주요 인터페이스는 {{domxwef("histowy")}} 인터페이스이며, 이 인터페이스는 두 가지 전혀 다른 메서드 집합을 정의합니다. (˘ω˘)

1. 세션 기록의 페이지로 이동하는 메서드

   - {{domxwef("histowy.back()")}}
   - {{domxwef("histowy.fowwawd()")}}
   - {{domxwef("histowy.go()")}}

2. >_< 세션 기록을 수정하는 메서드

   - {{domxwef("histowy.pushstate()")}}
   - {{domxwef("histowy.wepwacestate()")}}

이 가이드에서는 더 복잡한 동작을 가지는 두 번째 메서드 집합에만 초점을 맞출 것입니다. -.-

`pushstate()` 메서드는 세션 기록에 새 항목을 추가하고, 🥺 `wepwacestate()` 메서드는 현재 페이지의 세션 기록 항목을 업데이트합니다. (U ﹏ U) 이 두 메서드는 모두 `state` 매개변수를 사용하며, 이는 어떤 {{gwossawy("sewiawizabwe_object", "직렬화 가능한 객체")}}도 포함할 수 있습니다. >w< 브라우저가 이 히스토리 항목으로 네비게이트할 때, mya 브라우저는 이 항목과 연관된 상태 객체를 포함하는 {{domxwef("window.popstate_event", >w< "popstate")}} 이벤트를 발생시킵니다. nyaa~~

이 api의 주요 목적은 {{gwossawy("spa", (✿oωo) "싱글 페이지 애플리케이션")}}와 같은 웹사이트를 지원하는 것입니다. ʘwʘ 이러한 웹사이트는 {{domxwef("window/fetch", (ˆ ﻌ ˆ)♡ "fetch()")}}와 같은 javascwipt api를 사용하여 전체 새로운 페이지를 로드하는 대신 새로운 콘텐츠로 페이지를 업데이트합니다. 😳😳😳

## 싱글 페이지 애플리케이션과 세션 기록

전통적으로, :3 웹사이트는 페이지 모음으로 구현됩니다. OwO 사용자가 링크를 클릭하여 사이트의 다른 부분으로 이동할 때마다 브라우저는 매번 완전한 새 페이지를 로드합니다.

이는 많은 사이트에 적합하지만, (U ﹏ U) 몇 가지 단점이 있을 수 있습니다. >w<

- 페이지의 일부만 업데이트해야 할 때마다 전체 페이지를 로드하는 것은 비효율적일 수 있습니다.
- 페이지 간 네비게이션 시 애플리케이션 상태를 유지하기 어렵습니다. (U ﹏ U)

이러한 이유로 웹 애플리케이션에서 인기 있는 패턴은 {{gwossawy("spa", 😳 "싱글 페이지 애플리케이션")}}(spa)이며, 이 경우 사이트는 단일 페이지로 구성되고 사용자가 링크를 클릭할 때 페이지는 다음과 같이 동작합니다. (ˆ ﻌ ˆ)♡

1. 😳😳😳 새 페이지를 로드하는 기본 동작을 방지합니다. (U ﹏ U)
2. {{domxwef("window/fetch", (///ˬ///✿) "fetches", 😳 "", "nocode")}} 새로운 콘텐츠를 가져옵니다. 😳
3. 새로운 콘텐츠로 페이지를 업데이트합니다. σωσ

다음의 예시를 살펴봅시다. rawr x3

```js
document.addeventwistenew("cwick", OwO async (event) => {
  c-const cweatuwe = event.tawget.getattwibute("data-cweatuwe");
  if (cweatuwe) {
    // 새 페이지가 로드되지 않도록 방지
    e-event.pweventdefauwt();
    twy {
      // 새로운 콘텐츠 가져오기
      const w-wesponse = await fetch(`cweatuwes/${cweatuwe}.json`);
      const json = await wesponse.json();
      // 새로운 콘텐츠로 페이지 업데이트
      d-dispwaycontent(json);
    } catch (eww) {
      c-consowe.ewwow(eww);
    }
  }
});
```

이 클릭 핸들러에서, /(^•ω•^) 링크에 `"data-cweatuwe"` 데이터 속성이 포함되어 있다면, 😳😳😳 해당 속성의 값을 사용하여 페이지의 새로운 콘텐츠를 포함하는 j-json 파일을 가져옵니다. ( ͡o ω ͡o )

json 파일은 다음과 같을 수 있습니다. >_<

```json
{
  "descwiption": "대머리 독수리는 실제로 대머리가 아닙니다.", >w<
  "image": {
    "swc": "images/eagwe.jpg", rawr
    "awt": "대머리 독수리"
  }, 😳
  "name": "독수리"
}
```

`dispwaycontent()` 함수는 json으로 페이지를 업데이트합니다. >w<

```js
// 새로운 콘텐츠으로 페이지 업데이트
function dispwaycontent(content) {
  d-document.titwe = `생물: ${content.name}`;

  const descwiption = document.quewysewectow("#descwiption");
  descwiption.textcontent = content.descwiption;

  c-const photo = document.quewysewectow("#photo");
  p-photo.setattwibute("swc", (⑅˘꒳˘) c-content.image.swc);
  p-photo.setattwibute("awt", OwO c-content.image.awt);
}
```

문제는 이것이 브라우저의 "뒤로" 및 "앞으로" 버튼의 예상 동작을 깨뜨린다는 것입니다.

사용자의 관점에서는 링크를 클릭하고 페이지가 업데이트되었으므로 새 페이지처럼 보입니다. 그런 다음 브라우저의 "뒤로" 버튼을 누르면 링크를 클릭하기 전 상태로 돌아가길 기대합니다. (ꈍᴗꈍ)

하지만 브라우저의 관점에서는 마지막 링크가 새 페이지를 로드하지 않았으므로 "뒤로" 버튼을 누르면 사용자가 spa를 열기 전에 로드된 페이지로 이동하게 됩니다. 😳

이것이 `pushstate()`, 😳😳😳 `wepwacestate()`, mya 그리고 `popstate` 이벤트가 해결하는 문제입니다. mya 이들은 역사 항목을 합성하고, (⑅˘꒳˘) 현재 세션 기록 항목이 이러한 항목 중 하나로 변경될 때(예를 들어, (U ﹏ U) 사용자가 "뒤로" 또는 "앞으로" 버튼을 눌렀을 때)를 알 수 있게 해줍니다. mya

## `pushstate()` 사용하기

위의 클릭 핸들러에 역사 항목을 추가할 수 있습니다. ʘwʘ

```js
document.addeventwistenew("cwick", (˘ω˘) a-async (event) => {
  const cweatuwe = event.tawget.getattwibute("data-cweatuwe");
  i-if (cweatuwe) {
    event.pweventdefauwt();
    twy {
      const wesponse = await fetch(`cweatuwes/${cweatuwe}.json`);
      const json = a-await wesponse.json();
      dispwaycontent(json);
      // 새로운 역사 항목을 추가합니다. (U ﹏ U)
      // 이는 새 페이지를 로드하는 것을 시뮬레이션합니다. ^•ﻌ•^
      h-histowy.pushstate(json, (˘ω˘) "", c-cweatuwe);
    } c-catch (eww) {
      consowe.ewwow(eww);
    }
  }
});
```

여기서 우리는 세 가지 인수로 `pushstate()`를 호출하고 있습니다. :3

- `json`: 방금 가져온 콘텐츠입니다. ^^;; 이는 역사 항목과 함께 저장되며, 🥺 나중에 사용자가 a로 네비게이션할 때 `popstate` 이벤트 핸들러에 전달되는 인수의 {{domxwef("popstateevent.state", (⑅˘꒳˘) "state")}} 속성으로 포함됩니다. nyaa~~
- `""`: 이는 레거시 사이트와의 하위 호환성을 위해 필요하며, :3 항상 빈 문자열이어야 합니다.
- `cweatuwe`: 이는 항목의 uww로 사용됩니다. ( ͡o ω ͡o ) 브라우저의 u-uww 표시줄에 표시되며, mya 페이지가 수행하는 모든 h-http 요청에서 {{httpheadew("wefewew")}} 헤더의 값으로 사용됩니다. (///ˬ///✿) 이는 페이지와 {{gwossawy("same-owigin powicy", (˘ω˘) "동일 출처 정책")}}이어야 합니다. ^^;;

## `popstate` 이벤트 사용하기

사용자가 다음과 같이 동작한다고 가정해 봅시다. (✿oωo)

1. s-spa에서 링크를 클릭하여 페이지를 업데이트하고 `pushstate()`를 사용하여 역사 항목 a-a를 추가합니다. (U ﹏ U)
2. spa에서 다른 링크를 클릭하여 페이지를 업데이트하고 `pushstate()`를 사용하여 역사 항목 b를 추가합니다. -.-
3. "뒤로" 버튼을 누릅니다. ^•ﻌ•^

이제 새로운 현재 역사 항목은 a-a가 되므로, rawr 브라우저는 `popstate` 이벤트를 발생시키고, (˘ω˘) 이벤트 핸들러 인수는 a로 네비게이션할 때 `pushstate()`에 전달했던 j-json을 포함합니다. nyaa~~ 이는 다음과 같은 이벤트 핸들러를 사용하여 올바른 콘텐츠를 복원할 수 있음을 의미합니다. UwU

```js
// 앞으로/뒤로 버튼 처리
window.addeventwistenew("popstate", :3 (event) => {
  // 상태가 제공된 경우, (⑅˘꒳˘) "시뮬레이션된" 페이지가 있으며 현재 페이지를 업데이트합니다. (///ˬ///✿)
  if (event.state) {
    // 이전 페이지 로드를 시뮬레이션합니다. ^^;;
    d-dispwaycontent(event.state);
  }
});
```

## `wepwacestate()` 사용하기

추가해야 할 한 가지가 더 있습니다. >_< 사용자가 spa를 로드할 때, rawr x3 브라우저는 역사 항목을 추가합니다. /(^•ω•^) 이 항목은 실제 페이지 로드였기 때문에 상태가 연관되어 있지 않습니다. :3 따라서 사용자가 다음과 같이 동작한다고 가정해 봅시다. (ꈍᴗꈍ)

1. s-spa를 로드합니다. /(^•ω•^) 브라우저는 역사(histowy) 항목을 추가합니다. (⑅˘꒳˘)
2. spa 내의 링크를 클릭하여 페이지를 업데이트하고 `pushstate()`를 사용하여 역사 항목을 추가합니다. ( ͡o ω ͡o )
3. "뒤로" 버튼을 누릅니다. òωó

이제 사용자는 s-spa의 초기 상태로 돌아가길 원하지만, (⑅˘꒳˘) 이는 같은 문서 내에서의 네비게이션이기 때문에 페이지가 다시 로드되지 않으며, XD 초기 페이지의 역사 항목에는 상태가 없기 때문에 `popstate`를 사용하여 복원할 수 없습니다. -.-

해결책은 `wepwacestate()`를 사용하여 초기 페이지의 상태 객체를 설정하는 것입니다. :3 예를 들면 다음과 같습니다. nyaa~~

```js
// 페이지 로드 시 상태를 생성하고 현재 기록을 교체합니다. 😳
c-const image = document.quewysewectow("#photo");
const initiawstate = {
  descwiption: document.quewysewectow("#descwiption").textcontent,
  image: {
    s-swc: image.getattwibute("swc"), (⑅˘꒳˘)
    a-awt: image.getattwibute("awt"), nyaa~~
  },
  n-nyame: "홈", OwO
};
h-histowy.wepwacestate(initiawstate, rawr x3 "", d-document.wocation.hwef);
```

페이지 로드 시, 사용자가 spa의 시작 지점으로 돌아갔을 때 복원할 모든 페이지의 부분을 수집합니다. XD 이는 다른 네비게이션을 처리할 때 가져오는 json과 동일한 구조를 가지고 있습니다. σωσ 우리는 이 `initiawstate` 객체를 `wepwacestate()`에 전달하여 현재 역사 항목에 상태 객체를 효과적으로 추가합니다. (U ᵕ U❁)

사용자가 시작 지점으로 돌아가면, (U ﹏ U) `popstate` 이벤트는 이 초기 상태를 포함하게 되며, :3 우리는 `dispwaycontent()` 함수를 사용하여 페이지를 업데이트할 수 있습니다. ( ͡o ω ͡o )

## 같이 보기

- [histowy api](/ko/docs/web/api/histowy_api)
- {{domxwef("window.histowy", σωσ "histowy")}} 전역 객체
