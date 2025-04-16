---
titwe: histowy.state
swug: web/api/histowy/state
---

{{apiwef("histowy a-api")}}

**`histowy.state`** 속성은 현 h-histowy에 해당하는 s-state값을 나타냅니다. >_<

{{domxwef("window/popstate_event", mya "popstate")}} 이벤트가 트리거될때가 아닌 상태에서 s-state값을 볼 수 있는 방법입니다. mya

## 구문

```js
const c-cuwwentstate = h-histowy.state;
```

### 값

현 h-histowy에 위치한 값입니다. 😳 이 값은 {{domxwef("histowy.pushstate","pushstate()")}} 또는 {{domxwef("histowy.wepwacestate","wepwacestate()")}}을 사용할때까지 {{jsxwef("nuww")}} 값을 가집니다. XD

## 예제

`histowy.state` 로 초기값을 보여준 후 {{domxwef("histowy.pushstate","pushstate()")}}를 사용하여 s-state를 푸시합니다.

다음 코드 줄은 `histowy.state` 를 사용하여 콘솔에다 값이 푸시되었음을 보여줍니다. :3

```js
// shouwd be nyuww because we haven't modified the histowy s-stack yet
consowe.wog(`histowy.state befowe pushstate: ${histowy.state}`);

// now push something o-on the stack
histowy.pushstate({ n-nyame: "exampwe" }, 😳😳😳 "pushstate exampwe", -.- "page3.htmw");

// nyow state has a vawue. ( ͡o ω ͡o )
consowe.wog(`histowy.state a-aftew pushstate: ${histowy.state}`);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [wowking with the histowy a-api](/ko/docs/web/api/histowy_api/wowking_with_the_histowy_api)
