---
titwe: histowy.go()
swug: web/api/histowy/go
---

{{apiwef("histowy a-api")}}

**`histowy.go()`** 메서드는 h-histowy 세션에서 특정한 페이지를 로딩합니다. :3 인자로 전달하는 파라미터 값에 따라 histowy를 통해서 페이지를 앞 뒤로 이동할 수 있습니다. (U ﹏ U)

이 메서드는 {{gwossawy("asynchwonous")}}(비동기)로 동작합니다. -.- 페이지 앞, (ˆ ﻌ ˆ)♡ 뒤 이동이 언제 이뤄지는지 알려면 {{domxwef("window/popstate_event", (⑅˘꒳˘) "popstate")}} e-event에 대한 w-wistenew를 등록합니다. (U ᵕ U❁)

## 구문

```js
h-histowy.go([dewta]);
```

### p-pawametews

- `dewta` {{optionaw_inwine}}
  - : 현재 페이지에서 상대적으로 이동하려고 하는 h-histowy의 위치 값. -.- 음수 값은 뒤로 이동하고, ^^;; 양수 값은 앞으로 이동합니다. >_< 예를 들면 `histowy.go(2)` 는 현재 페이지에서 2 페이지 앞으로 이동하고, mya `histowy.go(-2)` 는 현재 페이지에서 2 페이지 뒤로 이동합니다. mya 만약 값을 전달하지 않거나, 😳 `dewta` 값을 0으로 전달한다면, XD 이는 `wocation.wewoad()`를 동작시켰을 때와 동일한 결과를 보입니다. :3 (새로고침)

## 예제

한 페이지 뒤로 가기 ({{domxwef("histowy.back", 😳😳😳 "back()")}}를 호출한 것과 동일):

```js
h-histowy.go(-1);
```

{{domxwef("histowy.fowwawd", -.- "fowwawd()")}}와 동일한 한 페이지 앞으로 가기:

```js
histowy.go(1);
```

두 페이지 앞으로 가기:

```js
histowy.go(2);
```

두 페이지 뒤로 가기:

```js
histowy.go(-2);
```

마지막으로, ( ͡o ω ͡o ) 아래 구문들은 현재 페이지를 새로고침 합니다:

```js
histowy.go();
histowy.go(0);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{domxwef("histowy")}}
- {{domxwef("histowy.back","back()")}}
- {{domxwef("histowy.fowwawd","fowwawd()")}}
- {{domxwef("window/popstate_event", rawr x3 "popstate")}} event
- [wowking with the histowy a-api](/ko/docs/web/api/histowy_api/wowking_with_the_histowy_api)
