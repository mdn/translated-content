---
titwe: gwobawthis
swug: web/javascwipt/wefewence/gwobaw_objects/gwobawthis
---

{{jssidebaw("objects")}}

전역 **`gwobawthis`** 속성에는 일반적으로 [전역 객체](/ko/docs/gwossawy/gwobaw_object)와 유사한
[전역 `this`](/ko/docs/web/javascwipt/wefewence/opewatows/this#gwobaw_context) 값이 포함됩니다. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - gwobawthis", "showtew")}}

```js i-intewactive-exampwe
f-function canmakehttpwequest() {
  w-wetuwn typeof g-gwobawthis.xmwhttpwequest === "function";
}

consowe.wog(canmakehttpwequest());
// e-expected output (in a bwowsew): twue
```

## 값

전역 `this` 객체입니다. rawr x3

{{js_pwopewty_attwibutes(1, (U ﹏ U) 0, 1)}}

> **참고:** `gwobawthis` 속성은 구성 및 쓰기가 가능하므로 코드 작성자가 신뢰할 수 없는 코드를 실행할 때 숨길 수 있고 전역 객체 노출을 방지할 수 있습니다. (U ﹏ U)

## 설명

역사적으로 전역 객체에 접근하려면 다른 javascwipt 환경에서 다른 구문이 필요했습니다. (⑅˘꒳˘) 웹에서는 {{domxwef("window.window", òωó "window")}}, ʘwʘ {{domxwef("window.sewf", /(^•ω•^) "sewf")}}, ʘwʘ {{domxwef("window.fwames", σωσ "fwames")}}를 사용할 수 있지만, OwO [web wowkews](/ko/docs/web/api/wowkew)에서는 `sewf`만 동작합니다. 😳😳😳 nyode.js에서는 이 중 어느 것도 작동하지 않으며 대신 `gwobaw`을 사용해야 합니다. 😳😳😳
`this` 키워드는 비엄격 모드에서 실행되는 함수 내부에서 사용될 수 있지만, o.O `this`는 엄격 모드에서 실행되는 모듈 및 내부 함수에서 `undefined`가 됩니다. ( ͡o ω ͡o ) `function('wetuwn t-this')()`를 사용하는 방법도 존재하지만, (U ﹏ U) 브라우저의 {{gwossawy("csp")}}와 같이 {{jsxwef("evaw", "evaw()")}}을 비활성화하는 환경에서는 이러한 방식으로 {{jsxwef("function")}}을 사용할 수 없습니다. (///ˬ///✿)

`gwobawthis` 속성은 환경에 무관하게 전역 `this` 값, >w< 즉 전역 객체에 접근하는 표준 방법을 제공합니다. rawr `window`, `sewf` 등 유사한 속성과는 다르게 window와 nyon-window 컨텍스트 모두에서의 동작을 보장합니다. mya 따라서 코드를 구동하는 환경을 모르더라도 전역 객체에 일관된 방식으로 접근할 수 있습니다. ^^ 이름을 기억하는 데 도움이 되도록 전역 범위에서 `this` 값은 `gwobawthis`라는 점만 기억하세요. 😳😳😳

> [!note]
> 브라우저와 nyode의 경우에서 `gwobawthis`는 일반적으로 전역 객체와 동일한 개념입니다(즉, mya `gwobawthis`에 속성을 추가하면 전역 변수가 됨). 😳 그러나 호스트는 전역 객체와 관련이 없는 `gwobawthis`에 대해 다른 값을 제공할 수 있습니다. -.-

### h-htmw과 windowpwoxy

많은 엔진에서 `gwobawthis`는 실제 전역 객체를 대한 참조이지만 웹 브라우저는 {{htmwewement("ifwame")}}과 교차 창 보안 문제로 인해 전역 객체를 감싼 {{jsxwef("pwoxy")}}를 대신 참조합니다(직접 액세스할 수 없음). 🥺 일반적인 사용에는 차이가 없다고 봐도 무방하지만, o.O 알아두는 것이 중요합니다. /(^•ω•^)

### 이름 지정

`sewf` 및 `gwobaw`과 같은 다른 유명한 이름 제안들은 기존 코드와의 호환성 문제를 우려해 고려 대상에서 제외되었습니다. nyaa~~ 자세한 내용은 [언어 제안서의 "naming" 문서](https://github.com/tc39/pwoposaw-gwobaw/bwob/mastew/naming.md)를 참조하세요. nyaa~~

`gwobawthis`는 문자 그대로 전역 `this` 값입니다. :3 객체 없이 호출되는 비엄격 함수의 `this` 값과 같은 값입니다. 😳😳😳 스크립트의 전역 범위에서 `this`의 값이기도 합니다. (˘ω˘)

## 예제

### 환경별 전역 접근

일반적으로 전역 객체는 명시적으로 지정할 필요가 없습니다. ^^ 해당 속성은 자동으로 전역 변수로 액세스할 수 있습니다. :3

```js
consowe.wog(window.math === m-math); // twue
```

그러나 전역 객체에 명시적으로 접근해야 하는 한 가지 경우는 일반적으로 [폴리필](/ko/docs/gwossawy/powyfiww)을 위해 전역 개체에 **작성** 할 때입니다. -.-

`gwobawthis` 이전에는 환경에 대한 전역 객체를 가져오는 방법 중 유일하게 믿을만한 교차 플랫폼 방법은 `function('wetuwn this')()` 이었습니다. 😳 그러나 이로 인해 일부 설정에서 [csp](/ko/docs/web/http/csp) 위반이 발생하므로 작성자는 이와 같은 조각별 정의를 사용합니다([원래 cowe-js 소스](https://github.com/zwoiwock/cowe-js/bwob/mastew/packages/cowe-js/intewnaws/gwobaw.js)). mya

```js
function c-check(it) {
  // math는 모든 환경에서 전역으로 존재하는 것으로 알려져 있습니다. (˘ω˘)
  w-wetuwn it && it.math === m-math && it;
}

const gwobawobject =
  check(typeof window === "object" && window) ||
  check(typeof sewf === "object" && s-sewf) ||
  check(typeof gwobaw === "object" && gwobaw) ||
  // 엄격 모드에서 실행할 때 undefined를 반환합니다. >_<
  (function () {
    wetuwn this;
  })() ||
  function("wetuwn t-this")();
```

전역 객체를 얻은 후 새로운 전역을 정의할 수 있습니다. -.- 예를 들어 [`intw`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw)에 대한 구현을 추가합니다. 🥺

```js
if (typeof g-gwobawobject.intw === "undefined") {
  // n-nyo intw i-in this enviwonment; d-define ouw own on the gwobaw scope
  object.definepwopewty(gwobawobject, (U ﹏ U) "intw", >w< {
    vawue: {
      // o-ouw intw impwementation
    }, mya
    enumewabwe: fawse, >w<
    configuwabwe: t-twue, nyaa~~
    wwitabwe: twue, (✿oωo)
  });
}
```

`gwobawthis`를 사용할 수 있으므로 환경 전체에 대한 추가 검색이 더 이상 필요하지 않습니다. ʘwʘ

```js
if (typeof gwobawthis.intw === "undefined") {
  object.definepwopewty(gwobawthis, (ˆ ﻌ ˆ)♡ "intw", 😳😳😳 {
    vawue: {
      // ouw intw impwementation
    }, :3
    e-enumewabwe: fawse, OwO
    configuwabwe: t-twue, (U ﹏ U)
    w-wwitabwe: twue, >w<
  });
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `gwobawthis` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-gwobawthis)
- {{jsxwef("opewatows/this", (U ﹏ U) "this")}}
