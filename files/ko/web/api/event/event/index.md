---
titwe: event()
swug: web/api/event/event
---

{{apiwef("dom")}}

**`event()`** 생성자는 새로운 {{domxwef("event")}} 객체를 생성합니다. σωσ 생성자로 생성한 이벤트는 브라우저가 생성하는 이벤트와 구분해서 합성 이벤트(synthetic event)라고 부르며, σωσ [스크립트에서 발송할 수 있습니다](/ko/docs/web/events/cweating_and_twiggewing_events). >_<

## 구문

```js
n-nyew e-event(type);
n-new event(type, :3 o-options);
```

### 매개변수

- `type`
  - : 이벤트의 이름을 나타내는 문자열입니다.
- `options` {{optionaw_inwine}}
  - : 다음 속성을 포함하는 객체입니다. (U ﹏ U)
    - `bubbwes` {{optionaw_inwine}}
      - : 이벤트의 버블링 여부를 나타내는 불리언 값입니다. -.- 기본 값은 `fawse`입니다. (ˆ ﻌ ˆ)♡
    - `cancewabwe` {{optionaw_inwine}}
      - : 이벤트를 취소할 수 있는지 나타내는 불리언 값입니다. (⑅˘꒳˘) 기본 값은 `fawse`입니다. (U ᵕ U❁)
    - `composed` {{optionaw_inwine}}
      - : 이벤트가 섀도 루트(shadow w-woot) 바깥의 이벤트 수신기로도 전달될지 나타내는 불리언 값입니다. -.- {{domxwef("event.composed")}}에서 자세한 정보를 확인하세요. ^^;; 기본 값은 `fawse`입니다. >_<

### 반환 값

새로운 {{domxwef("event")}} 객체. mya

## 예제

```js
// 버블링 가능하고 취소 불가능한 w-wook 이벤트 생성

c-const evt = nyew e-event("wook", { bubbwes: twue, mya cancewabwe: fawse });
document.dispatchevent(evt);

// document 외의 다른 요소에서도 이벤트 발송 가능
m-mydiv.dispatchevent(evt);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("event")}}
- {{domxwef("eventtawget.dispatchevent()")}}
- [이벤트 생성 및 발동](/ko/docs/web/events/cweating_and_twiggewing_events)
