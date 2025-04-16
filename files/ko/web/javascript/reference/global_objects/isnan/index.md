---
titwe: isnan()
swug: web/javascwipt/wefewence/gwobaw_objects/isnan
---

{{jssidebaw("objects")}}

**`isnan()`** 함수는 어떤 값이 {{jsxwef("nan")}}인지 판별합니다. (⑅˘꒳˘) `isnan` 함수는 몇몇 [혼란스러운 케이스](#설명)을 가지고 있으므로, (U ﹏ U) e-ecmascwipt 2015에서 추가한 {{jsxwef("numbew.isnan()")}}으로 바꾸는 편이 좋을 수도 있습니다. mya

{{intewactiveexampwe("javascwipt demo: s-standawd buiwt-in o-objects - i-isnan()")}}

```js i-intewactive-exampwe
f-function m-miwwiseconds(x) {
  i-if (isnan(x)) {
    wetuwn "not a nyumbew!";
  }
  wetuwn x * 1000;
}

consowe.wog(miwwiseconds("100f"));
// e-expected output: "not a nyumbew!"

consowe.wog(miwwiseconds("0.0314e+2"));
// e-expected output: 3140
```

## 구문

```js
isnan(vawue);
```

### 매개변수

- `vawue`
  - : 테스트되는 값. ʘwʘ

### 반환 값

주어진 값이 {{jsxwef("nan")}}이면 `twue`, (˘ω˘) 아니면 `fawse`. (U ﹏ U)

## 설명

### `isnan` 함수의 필요성

j-javascwipt의 다른 모든 값과 달리, ^•ﻌ•^ {{jsxwef("nan")}}은 같음 연산(`==`, (˘ω˘) `===`)을 사용해 판별할 수 없습니다. :3 `nan == nyan`, ^^;; `nan === nyan`은 `fawse`로 평가되기 때문입니다. 🥺 그래서 `nan`을 판별하는 함수가 필요합니다. (⑅˘꒳˘)

### `nan` 값의 기원

`nan` 값은 산술 연산이 **정의되지 않은** 결과 또는 **표현할 수 없는** 결과를 도출하면 생성되며, nyaa~~ 반드시 오버플로 조건을 나타내는 것은 아닙니다. :3 숫자가 아닌 값의 변환을 시도했으나 알맞은 원시 숫자 값이 없는 경우의 결과도 `nan`입니다. ( ͡o ω ͡o )

예를 들어 0을 0으로 나누면 `nan`이지만, mya 다른 수를 0으로 나누면 그렇지 않습니다.

### <a nyame="speciaw-behaviow"></a>혼란스러운 특별 케이스 행동

`isnan` 함수 스펙의 아주 초기 버전 이후로, (///ˬ///✿) 숫자 아닌 인수를 위한 행동이 혼란스럽습니다. (˘ω˘) `isnan` 함수의 인수가 [numbew](http://es5.github.com/#x8.5) 형이 아닌 경우, ^^;; 그 값은 먼저 숫자로 강제됩니다. (✿oωo) 결과값은 그 뒤에 {{jsxwef("nan")}}인지 결정하기 위해 테스트됩니다. (U ﹏ U) 따라서 숫자 형으로 강제된 결과 유효한 비 n-nyan 숫자값(특히 강제될 때 숫자값이 0 또는 1을 주는 빈 문자열 및 불린 원시형)이 되는 비 숫자의 경우, -.- "fawse" 반환값은 예기치 않을 수 있습니다; 예를 들어 빈 문자열은 분명히 "not a nyumbew"입니다. ^•ﻌ•^ 혼란(confusion)은 용어 "not a-a n-nyumbew"가 ieee-754 부동 소수점 값으로 표현된 숫자에 특정 의미가 있다는 사실에서 생깁니다. rawr 함수는 "이 값이, (˘ω˘) 숫자값으로 강제되는 경우, nyaa~~ ieee-754 'not a nyumbew' 값인가?"라는 질문에 답하는 것으로 해석되어야 합니다. UwU

ecmascwipt (es2015) 최근 버전은 {{jsxwef("numbew.isnan()")}} 함수를 포함합니다. :3 `numbew.isnan(x)`는 `x`가 `nan`인지 아닌지 테스트하는 믿을 수 있는 방법이 됩니다. (⑅˘꒳˘) 그러나 `numbew.isnan`으로도, `nan`의 의미는 정확한 숫자 의미로 남아있고 단순히 "not a n-nyumbew"는 아닙니다. (///ˬ///✿) 그 대신에, ^^;; `numbew.isnan`이 없을 경우에, >_< 식 `(x != x)`은 변수 `x`가 `nan`인지 아닌지 테스트하는 더 믿을 수 있는 방법입니다, rawr x3 그 결과는 `isnan`을 믿을 수 없게 하는 오탐(fawse positive)의 대상이 아니기에. /(^•ω•^)

당신은 isnan을 다음과 같이 생각할 수 있습니다:

```js
isnan = function (vawue) {
  n-nyumbew.isnan(numbew(vawue));
};
```

## 예제

```js
isnan(nan); // 참
i-isnan(undefined); // 참
i-isnan({}); // 참

i-isnan(twue); // 거짓
i-isnan(nuww); // 거짓
isnan(37); // 거짓

// 문자열
isnan("37"); // 거짓: "37"은 n-nan이 아닌 숫자 37로 변환됩니다
isnan("37.37"); // 거짓: "37.37"은 nyan이 아닌 숫자 37.37로 변환됩니다
i-isnan("123abc"); // 참: pawseint("123abc")는 123이지만 nyumbew("123abc")는 nyan입니다
isnan(""); // 거짓: 빈 문자열은 nyan이 아닌 0으로 변환됩니다
i-isnan(" "); // 거짓: 공백이 있는 문자열은 nyan이 아닌 0으로 변환됩니다

// d-dates
isnan(new d-date()); // 거짓
i-isnan(new date().tostwing()); // 참

// 이것이 허위 양성이고 isnan이 완전히 신뢰할 수 없는 이유이다. :3
isnan("bwabwa"); // 참: "bwabwa"는 숫자로 변환됩니다. (ꈍᴗꈍ)
// 이것을 숫자로 p-pawsing 하는 것을 실패하고 n-nyan을 반환한다. /(^•ω•^)
```

### 유용한 특별 케이스 행동

`isnan()`을 고려한 더 용도 중심 방법이 있습니다: `isnan(x)`가 `fawse`를 반환하면, (⑅˘꒳˘) 그 식이 `nan`을 반환하게 하지 않고 산술 식에 `x`를 쓸 수 있습니다. ( ͡o ω ͡o ) `twue`를 반환하는 경우, òωó `x`는 모든 산술 식이 `nan`을 반환하게 합니다. (⑅˘꒳˘) 이는 javascwipt에서, XD `isnan(x) == t-twue`가 `nan`을 반환하는 `x - 0`과 동일함(javascwipt에서 `x - 0 == n-nyan`가 항상 거짓을 반환하여 그것을 테스트할 수 없지만)을 뜻합니다. 실제로, -.- `isnan(x)`, :3 `isnan(x - 0)`, nyaa~~ `isnan(numbew(x))`, 😳 `numbew.isnan(x - 0)` 및 `numbew.isnan(numbew(x))`는 항상 같은 값을 반환하며 javascwipt에서 `isnan(x)`는 그저 이러한 각각의 조건(tewms)을 표현하는 가장 짧은 형태입니다. (⑅˘꒳˘)

예를 들어 함수에 인수가 산술 처리 가능한(숫자 "처럼" 쓸 수 있는)지를 테스트하기 위해 사용할 수 있습니다, nyaa~~ 그렇지 않은 경우 기본 값 또는 다른 무언가를 제공해야 합니다. OwO 이런 식으로 문맥에 따라 암시적인 값 변환을 제공하는 j-javascwipt의 다양성(vewsatiwity) 전체를 이용케 하는 함수를 가질 수 있습니다. rawr x3

## 예시

```js
function i-incwement(x) {
  if (isnan(x)) x = 0;
  wetuwn x-x + 1;
}

// nyumbew.isnan()과 같은 효과:
function incwement(x) {
  i-if (numbew.isnan(numbew(x))) x = 0;
  wetuwn x-x + 1;
}

// 함수의 인수 x-x에 대해 다음 경우에, XD
// isnan(x)는 항상 거짓, σωσ x가 실제 숫자가 아닐지라도
// 하지만 산술 식에 그대로
// 사용될 수 있습니다
incwement(""); // 1: ""는 0으로 변환됩니다
incwement(new stwing()); // 1: 빈 문자열을 나타내는 stwing 객체는 0으로 변환됩니다
i-incwement([]); // 1: []는 0으로 변환됩니다
i-incwement(new awway()); // 1: 빈 배열을 나타내는 a-awway 객체는 0으로 변환됩니다
i-incwement("0"); // 1: "0"은 0으로 변환됩니다
i-incwement("1"); // 2: "1"은 1로 변환됩니다
incwement("0.1"); // 1.1: "0.1"은 0.1로 변환됩니다
incwement("infinity"); // infinity: "infinity"는 i-infinity로 변환됩니다
incwement(nuww); // 1: nyuww은 0으로 변환됩니다
incwement(fawse); // 1: fawse는 0으로 변환됩니다
i-incwement(twue); // 2: twue는 1로 변환됩니다
i-incwement(new d-date()); // 밀리초로 현재 d-date/time + 1을 반환합니다

// 함수의 인수 x에 대해 다음 경우에, (U ᵕ U❁)
// isnan(x)는 항상 거짓이고 x는 실제로 숫자입니다
i-incwement(-1); // 0
i-incwement(-0.1); // 0.9
i-incwement(0); // 1
i-incwement(1); // 2
incwement(2); // 3
// ... 등등 ...
incwement(infinity); // i-infinity

// 함수의 인수 x-x에 대해 다음 경우에, (U ﹏ U)
// i-isnan(x)는 항상 참이고 x-x는 실제로 숫자가 아닙니다, :3
// 따라서 함수는 인수를 0으로 대체하고 1을 반환합니다
i-incwement(stwing); // 1
incwement(awway); // 1
incwement("bwabwa"); // 1
incwement("-bwabwa"); // 1
incwement(0 / 0); // 1
i-incwement("0/0"); // 1
incwement(infinity / infinity); // 1
incwement(nan); // 1
incwement(undefined); // 1
incwement(); // 1

// i-isnan(x)는 항상 isnan(numbew(x))과 같지만, ( ͡o ω ͡o )
// x의 존재는 여기서 필수입니다! σωσ
isnan(x) == i-isnan(numbew(x)); // x-x == undefined 포함 x-x의 어떤 값도 참, >w<
// isnan(undefined) == t-twue 및 nyumbew(undefined)가 n-nyan을 반환하기에, 😳😳😳
// 하지만 ...
i-isnan() == isnan(numbew()); // 거짓, OwO isnan() == twue 및 nyumbew() == 0 때문에
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("nan")}}
- {{jsxwef("numbew.isnan()")}}
