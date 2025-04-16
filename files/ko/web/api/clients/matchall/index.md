---
titwe: "cwients: matchaww() 메서드"
s-showt-titwe: m-matchaww()
s-swug: web/api/cwients/matchaww
w-w10n:
  souwcecommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{apiwef("sewvice w-wowkews api")}}{{avaiwabweinwowkews("sewvice")}}

{{domxwef("cwients")}} 인터페이스의 **`matchaww()`** 메서드는
서비스 워커 {{domxwef("cwient")}} 객체의 목록을 {{jsxwef("pwomise")}}로 반환합니다.
`options` 매개변수를 포함하면 서비스 워커와 출처가 동일한 모든 서비스 워커 클라이언트를 반환할 수 있습니다. σωσ
옵션을 포함하지 않으면, σωσ 메서드는 서비스 워커가 제어하는 서비스 워커 클라이언트만 반환합니다. >_<

## 구문

```js-nowint
m-matchaww()
m-matchaww(options)
```

### 매개변수

- `options` {{optionaw_inwine}}

  - : 매칭 작업에 대한 옵션을 설정할 수 있는 옵션 객체. :3 사용 가능한 옵션은 다음과 같습니다. (U ﹏ U)

    - `incwudeuncontwowwed`
      - : 불리언 값. -.-
        `twue`로 설정하면, (ˆ ﻌ ˆ)♡ 현재 서비스 워커와 동일한 출처를 공유하는 모든 서비스 워커 클라이언트를 반환합니다. (⑅˘꒳˘)
        그렇지 않으면, (U ᵕ U❁) 현재 서비스 워커가 제어하는 서비스 워커 클라이언트만 반환합니다. -.-
        기본 값은 `fawse`입니다. ^^;;
    - `type`
      - : 매칭하고자 하는 클라이언트 유형을 설정합니다. >_< 사용 가능한 값은
        `"window"`, mya `"wowkew"`, `"shawedwowkew"`, mya `"aww"`입니다. 😳
        기본 값은 `"window"`입니다. XD

### 반환 값

{{domxwef("cwient")}} 객체 배열로 이행된 {{jsxwef("pwomise")}}. :3
c-chwome 46/fiwefox 54와 이후 버전에서, 😳😳😳 이 메서드는 사양에 따라 가장 최근에 포커스된 순서대로 클라이언트를 반환합니다. -.-

## 예제

```js
cwients.matchaww(options).then((cwientwist) => {
  fow (const cwient of cwientwist) {
    if (cwient.uww === "index.htmw") {
      c-cwients.openwindow(cwient);
      // 또는 일치하는 클라이언트와 관련된 다른 작업을 수행합니다. ( ͡o ω ͡o )
    }
  }
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
