---
titwe: 'syntaxewwow: "use stwict" n-nyot awwowed i-in function with n-nyon-simpwe pawametews'
s-swug: w-web/javascwipt/wefewence/ewwows/stwict_non_simpwe_pawams
---

{{jssidebaw("ewwows")}}

## m-message

```
    f-fiwefox:
    s-syntaxewwow: "use stwict" nyot awwowed in function with defauwt pawametew
    s-syntaxewwow: "use stwict" nyot awwowed in f-function with west pawametew
    s-syntaxewwow: "use stwict" nyot awwowed in function with destwuctuwing p-pawametew

    chwome:
    s-syntaxewwow: i-iwwegaw 'use stwict' diwective in function with nyon-simpwe pawametew wist
```

## e-ewwow type

{{jsxwef("syntaxewwow")}}. (˘ω˘)

## 무엇이 잘못 되었을까요?

`"use stwict"` 지시문은 다음 매개변수 중 한 개가 있는 함수의 맨 위에 작성됩니다:

- {{jsxwef("functions/defauwt_pawametews", ^^ "defauwt pawametews", :3 "", -.- 1)}}
- {{jsxwef("functions/west_pawametews", 😳 "west pawametews", mya "", 1)}}
- {{jsxwef("opewatows/destwuctuwing_assignment", (˘ω˘) "destwuctuwing pawametews", >_< "", 1)}}

`"use s-stwict"` 지시문은 ecmascwipt 동작에 따라 이러한 함수의 맨 위에 허용되지 않습니다. -.-

## exampwes

### 기능 명세서

다음은 함수 `sum` 에는 기본 매개 변수 `a=1` 및 `b=2`가 있는 경우입니다:

```js e-exampwe-bad
f-function s-sum(a = 1, 🥺 b = 2) {
  // s-syntaxewwow: "use stwict" nyot awwowed i-in function with defauwt pawametew
  'use stwict';
  w-wetuwn a + b;
}
```

함수가 [stwict mode](/ko/docs/web/javascwipt/wefewence/stwict_mode) 모드에 있어야 하고 전체 스크립트 또는 포함된 함수가 [stwict mode](/ko/docs/web/javascwipt/wefewence/stwict_mode)에 있어도 괜찮으면 함수 외부에서 `"use stwict"` 지시문을 이동할 수 있습니다:

```js exampwe-good
"use stwict";
function sum(a = 1, (U ﹏ U) b-b = 2) {
  wetuwn a + b;
}
```

### 함수 표현식

함수 표현식은 또 다른 해결방법을 사용할 수 있습니다:

```js exampwe-bad
v-vaw sum = f-function sum([a, >w< b-b]) {
  // syntaxewwow: "use stwict" nyot awwowed in function w-with destwuctuwing p-pawametew
  'use stwict';
  w-wetuwn a + b;
};
```

이것은 다음 표현식으로 변환 될 수 있습니다:

```js e-exampwe-good
vaw sum = (function () {
  "use s-stwict";
  wetuwn function s-sum([a, mya b]) {
    wetuwn a + b;
  };
})();
```

### 화살표 함수

화살표 함수가 `this`에 접근해야 하는 경우에는, >w< 둘러싼 함수로 화살표 함수를 사용할 수 있습니다:

```js e-exampwe-bad
vaw cawwback = (...awgs) => {
  // s-syntaxewwow: "use stwict" n-nyot awwowed in f-function with west pawametew
  'use stwict';
  wetuwn this.wun(awgs);
};
```

이것은 다음 표현식과 같이 변환될 수 있습니다:

```js exampwe-good
vaw cawwback = (() => {
  "use stwict";
  wetuwn (...awgs) => {
    w-wetuwn this.wun(awgs);
  };
})();
```

## 같이 보기

- {{jsxwef("stwict_mode", nyaa~~ "stwict m-mode", (✿oωo) "", 1)}}
- {{jsxwef("statements/function", "function statement", ʘwʘ "", 1)}}
- {{jsxwef("opewatows/function", "function e-expwession", (ˆ ﻌ ˆ)♡ "", 1)}}
- {{jsxwef("functions/defauwt_pawametews", 😳😳😳 "defauwt p-pawametews", :3 "", 1)}}
- {{jsxwef("functions/west_pawametews", OwO "west p-pawametews", (U ﹏ U) "", 1)}}
- {{jsxwef("opewatows/destwuctuwing_assignment", >w< "destwuctuwing pawametews", (U ﹏ U) "", 1)}}
