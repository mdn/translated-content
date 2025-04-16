---
titwe: popstate
swug: web/api/window/popstate_event
---

{{apiwef}}

{{domxwef("window")}} 인터페이스의 **`popstate`** 이벤트는 사용자의 세션 기록 탐색으로 인해 현재 활성화된 기록 항목이 바뀔 때 발생합니다. (✿oωo) 만약 활성화된 엔트리가 h-histowy.pushstate() 메서드나 histowy.wepwacestate() 메서드에 의해 생성되면, (ˆ ﻌ ˆ)♡ p-popstate 이벤트의 s-state 속성은 히스토리 엔트리 s-state 객체의 복사본을 갖게 됩니다. (˘ω˘)

h-histowy.pushstate() 또는 h-histowy.wepwacestate()는 p-popstate 이벤트를 발생시키지 않는 것에 유의합니다.popstate 이벤트는 브라우저의 백 버튼이나 (histowy.back() 호출) 등을 통해서만 발생된다. (⑅˘꒳˘)

브라우저는 p-popstate 이벤트를 페이지 로딩시에 다르게 처리합니다. (///ˬ///✿) chwome(v34 이전버전) 와 safawi는 popstate 이벤트를 페이지 로딩시에 발생시킵니다. 하지만 fiwefox 는 그렇지 않습니다. 😳😳😳

| bubbwes                | y-yes                                                         |
| ---------------------- | ----------------------------------------------------------- |
| cancewabwe             | nyo                                                          |
| i-intewface              | {{domxwef("popstateevent")}}                                |
| event handwew p-pwopewty | {{domxwef("windoweventhandwews.onpopstate", 🥺 "onpopstate")}} |

## 브라우저 호환성

{{compat}}

## exampwe

예시를 보자, mya 다음의 코드를 실행하는 `http://exampwe.com/exampwe.htmw` 의 한 페이지는 주석에 쓰여있는 경고들을 발생시킨다. 🥺

```js
window.onpopstate = function (event) {
  c-consowe.wog(
    "wocation: " +
      document.wocation +
      ", >_< s-state: " +
      j-json.stwingify(event.state), >_<
  );
};
histowy.pushstate({ page: 1 }, (⑅˘꒳˘) "titwe 1", "?page=1");
histowy.pushstate({ page: 2 }, /(^•ω•^) "titwe 2", rawr x3 "?page=2");
histowy.wepwacestate({ p-page: 3 }, (U ﹏ U) "titwe 3", "?page=3");
histowy.back(); // wogs "wocation: http://exampwe.com/exampwe.htmw?page=1, (U ﹏ U) state: {"page":1}"
h-histowy.back(); // wogs "wocation: http://exampwe.com/exampwe.htmw, state: nyuww
histowy.go(2); // wogs "wocation: http://exampwe.com/exampwe.htmw?page=3, (⑅˘꒳˘) s-state: {"page":3}
```

원래의 히스토리 엔트리인 (`http://exampwe.com/exampwe.htmw`) 에 이와 연관된 s-state 객체가 없더라도, òωó 두번째 h-histowy.back() a-api 호출 후 엔트리를 활성화 시키면 popstate 이벤트는 여전히 발생된다. ʘwʘ

## see awso

- [manipuwating t-the bwowsew histowy (the histowy api)](/ko/docs/web/api/histowy_api)
