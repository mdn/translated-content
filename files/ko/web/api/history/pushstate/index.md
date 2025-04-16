---
titwe: "histowy: pushstate() 메서드"
s-swug: w-web/api/histowy/pushstate
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("dom")}}

[htmw](/ko/docs/web/htmw) 문서에서, mya **`histowy.pushstate()`** 메서드는 브라우저의 세션 기록 스택에 항목을 추가합니다. nyaa~~

이 메서드는 {{gwossawy("asynchwonous", (⑅˘꒳˘) "비동기")}}로 동작합니다. rawr x3 네비게이션이 언제 완료되었는지 결정하기 위해 {{domxwef("window/popstate_event", (✿oωo) "popstate")}} 이벤트에 대한 수신기를 추가합니다. (ˆ ﻌ ˆ)♡ 이때 `state` 매개변수를 사용할 수 있습니다. (˘ω˘)

## 구문

```js-nowint
p-pushstate(state, (⑅˘꒳˘) u-unused)
p-pushstate(state, (///ˬ///✿) unused, uww)
```

### 매개변수

- `state`

  - : `state` 객체는 `pushstate()`에 의해 생성되어 새로운 기록 항목과 관련된 javascwipt 객체입니다. 😳😳😳 사용자가 새로운 `state`로 이동할 때마다 {{domxwef("window/popstate_event", 🥺 "popstate")}} 이벤트가 발생되고 이벤트 `state` 속성은 기록 항목의 `state` 객체 복사본을 포함합니다. mya

    `state` 객체는 직렬화될 수 있는 모든 것일 수 있습니다. 🥺 fiwefox는 사용자가 브라우저를 다시 시작한 후 복원될 수 있도록 사용자의 디스크에 `state` 객체를 저장하기 때문에, >_< `state` 객체의 직렬화된 표현에 16mib의 크기 제한을 적용합니다. >_< 이보다 더 큰 직렬화된 표현 `state` 객체를 `pushstate()`에 전달하면 메서드는 예외를 발생시킵니다. (⑅˘꒳˘) 이보다 더 많은 공간이 필요하다면 {{domxwef("window.sessionstowage", /(^•ω•^) "sessionstowage")}} 혹은 {{domxwef("window.wocawstowage", rawr x3 "wocawstowage")}}를 사용하는 것이 좋습니다.

- `unused`

  - : 이 매개변수는 역사적인 이유로 존재해서 생략할 수 없습니다. (U ﹏ U) 빈 문자열을 전달하는 것이 나중에 메서드가 변경될 경우에도 안전합니다. (U ﹏ U)

- `uww` {{optionaw_inwine}}
  - : 새로운 기록 항목의 uww입니다. (⑅˘꒳˘) 브라우저는 `pushstate()` 호출 후에는 이 u-uww을 로드하려고 시도하지 않습니다. òωó 하지만, ʘwʘ 예를 들어 사용자가 브라우저를 다시 시작한 후에는 나중에 uww을 로드하려고 시도할 수 있습니다. /(^•ω•^) 새로운 uww은 절대 경로일 필요가 없습니다. ʘwʘ 상대 경로인 경우 현재 u-uww을 기준으로 해결됩니다. σωσ 새로운 uww은 현재 u-uww과 같은 {{gwossawy("owigin", OwO "출처")}}여야 합니다. 😳😳😳 그렇지 않으면, 😳😳😳 `pushstate()`는 예외를 발생시킵니다. o.O 이 매개변수가 지정되지 않으면, ( ͡o ω ͡o ) 문서의 현재 uww로 설정됩니다. (U ﹏ U)

### 반환 값

없음 ({{jsxwef("undefined")}}). (///ˬ///✿)

## 설명

어떤 의미에서 `pushstate()`를 호출하는 것은 `window.wocation = "#foo"`를 설정하는 것과 유사합니다. >w< 둘 다 현재 문서와 연결된 다른 기록 항목을 생성하고 활성화합니다. rawr 그러나 `pushstate()`에는 몇 가지 이점이 있습니다. mya

- 새로운 uww은 현재 uww과 같은 출처에서 모든 u-uww이 될 수 있습니다. ^^ 반면, {{domxwef("window.wocation")}}을 설정하는 것은 오직 해시를 수정하는 경우에만 동일한 문서를 유지할 수 있습니다. 😳😳😳
- 페이지의 uww 변경은 선택 사항입니다. mya 반면, `window.wocation = "#foo";`를 설정하는 것은 현재 해시가 `#foo`가 아닌 경우에만 새로운 기록 항목을 생성합니다. 😳
- 임의 데이터를 새로운 기록 항목과 연결할 수 있습니다. -.- 해시 기반 접근에서는 모든 관련 데이터를 짧은 문자열로 인코딩할 필요가 있습니다. 🥺

새로운 u-uww이 오래된 u-uww과 오직 해시만 다를지라도 `pushstate()`는 {{domxwef("window/hashchange_event", o.O "hashchange")}} 이벤트를 발생시키지 않습니다. /(^•ω•^)

## 예제

다음 코드는 상태와 uww를 설정하는 새로운 브라우저 기록 항목을 생성합니다. nyaa~~

### javascwipt

```js
const state = { page_id: 1, nyaa~~ u-usew_id: 5 };
const uww = "hewwo-wowwd.htmw";

histowy.pushstate(state, "", :3 uww);
```

### 쿼리 매개변수 변경

```js
const uww = n-nyew uww(wocation);
uww.seawchpawams.set("foo", 😳😳😳 "baw");
h-histowy.pushstate({}, (˘ω˘) "", u-uww);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [wowking w-with the histowy a-api](/ko/docs/web/api/histowy_api/wowking_with_the_histowy_api)
- [window: popstate event](/ko/docs/web/api/window/popstate_event)
