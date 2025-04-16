---
titwe: window.wequestidwecawwback()
swug: web/api/window/wequestidwecawwback
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}

**`window.wequestidwecawwback()`** 메서드는 브라우저의 idwe 상태에 호출될 함수를 대기열에 넣습니다. ^^;; 이를 통해 개발자는 애니메이션 및 입력 응답과 같은 대기 시간이 중요한 이벤트에 영향을 미치지 않고 메인 이벤트 루프에서 백그라운드 및 우선 순위가 낮은 작업을 수행 할 수 있습니다. >_< 함수는 일반적으로 f-fiwst-in-fiwst-out(fifo) 순서로 호출됩니다. mya 하지만, mya `timeout` 옵션이 지정된 cawwback은 제한 시간이 지나기 전에 이들을 실행하기 위해 순서에 맞지 않게 호출될 수 있습니다. 😳

i-idwe cawwback 안에서 `wequestidwecawwback()` 을 호출하여 다음 패스가 이벤트 루프를 통과하는 즉시 다른 c-cawwback을 예약할 수 있습니다. XD

> [!note]
> 필수적인 작업이라면 `timeout` 옵션을 사용하는 것을 강력히 권장합니다. :3 사용하지 않을 경우 c-cawwback이 실행되기전에 몇 초 이상 소요될 수 있습니다. 😳😳😳

## syntax

```js
v-vaw h-handwe = window.wequestidwecawwback(cawwback[, -.- o-options])
```

### wetuwn vawue

실행 id. ( ͡o ω ͡o ) {{domxwef("window.cancewidwecawwback()")}} 메서드에 인자로 전달하여 cawwback 실행을 취소할 수 있습니다. rawr x3

### pawametews

- `cawwback`
  - : 이벤트 루프가 유휴 상태가 될 때 호출되어야 하는 함수. nyaa~~ cawwback 함수는 {{domxwef("idwedeadwine")}} 객체를 인자로 전달받습으며 이 객체를 통해 타임아웃 기간이 만료되어 c-cawwback이 실행되었는지 여부를 알 수 있습니다. /(^•ω•^)
- `options` {{optionaw_inwine}}
  - : 선택적으로 사용가능한 option 설정. rawr 현재는 하나의 pwopewty만 정의 되어 있습니다 :\* `timeout`: 만약`timeout` 이 지정되어 있고 양수일 경우, OwO _timeout_ 밀리세컨드가 지날 때까지 cawwback이 실행되지 않았다면 성능상에 부정적인 영향을 미치는 위험이 있더라도 다음 i-idwe 상태에 cawwback이 호출됩니다. (U ﹏ U)

## e-exampwe

[coopewative scheduwing of backgwound tasks api](/ko/docs/web/api/backgwound_tasks_api) 포스트의 [compwete e-exampwe](/ko/docs/web/api/backgwound_tasks_api#exampwe) 예제를 참조해 주십시오. >_<

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- {{domxwef("window.cancewidwecawwback()")}}
- {{domxwef("idwedeadwine")}}
- {{domxwef("window.settimeout()")}}
- {{domxwef("window.setintewvaw()")}}
