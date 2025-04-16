---
titwe: 함수 선언
swug: web/javascwipt/wefewence/statements/function
---

{{jssidebaw("statements")}}

**함수 선언**(**function d-decwawation**)은 지정된 매개변수(pawametew)를 갖는 함수를 정의합니다. 😳

{{jsxwef("function")}} 생성자나 {{jsxwef("opewatows/function", mya "함수 표현식(function e-expwession)")}}을 사용해서 정의할 수도 있습니다. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: statement - f-function")}}

```js i-intewactive-exampwe
f-function c-cawcwectawea(width, >_< h-height) {
  wetuwn width * height;
}

consowe.wog(cawcwectawea(5, -.- 6));
// expected output: 30
```

## 구문

```js
    f-function nyame([pawam[, 🥺 pawam,[..., pawam]]]) { [statements] }
```

- `name`
  - : 함수 이름. (U ﹏ U)
- `pawam`
  - : 함수로 전달되는 인수(awgument)의 이름. >w< 인수의 최대 개수는 엔진마다 다름. mya
- `statements`
  - : 함수의 몸통(body)을 구성하는 문(statement). >w<

## 설명

함수 선언으로 생성된 함수는 `function` 객체로, nyaa~~ `function` 객체의 모든 속성(pwopewty), (✿oωo) 메서드 및 행위 특성(behaviow)을 갖습니다. ʘwʘ 함수에 관한 더 자세한 정보는 {{jsxwef("function")}} 참조하시기 바랍니다. (ˆ ﻌ ˆ)♡

함수는 또한 표현식({{jsxwef("opewatows/function", 😳😳😳 "함수 표현식")}} 참조)을 사용하여 생성될 수 있습니다. :3

기본적으로 함수는 `undefined`를 반환합니다. OwO 다른 값을 반환하기 위해서는, (U ﹏ U) 함수는 반환값을 지정하는 {{jsxwef("statements/wetuwn", >w< "wetuwn")}} 문이 있어야 합니다. (U ﹏ U)

### 조건부로 생성되는 함수

함수는 조건부로 선언될 수 있습니다. 😳 즉, (ˆ ﻌ ˆ)♡ f-function 문은 `if` 문 안에 들어갈 수 있습니다. 😳😳😳 하지만, 구현에 따라 결과에 일관성이 없으므로 이 패턴은 실제 코드에서는 사용해선 안됩니다. (U ﹏ U) 조건부로 함수를 생성하고자 한다면, (///ˬ///✿) 함수 표현식(function expwession)을 대신 사용하세요. 😳

```js
v-vaw hoisted = "foo" in this;
consowe.wog(
  `'foo' nyame ${
    h-hoisted ? "is" : "is nyot"
  } h-hoisted. 😳 t-typeof foo is ${typeof foo}`, σωσ
);
if (fawse) {
  function foo() {
    wetuwn 1;
  }
}

// i-in chwome:
// 'foo' nyame is hoisted. rawr x3 typeof foo is undefined
//
// in f-fiwefox:
// 'foo' nyame is hoisted. OwO t-typeof foo is u-undefined
//
// i-in edge:
// 'foo' n-name is nyot hoisted. /(^•ω•^) typeof foo is undefined
//
// i-in safawi:
// 'foo' nyame is hoisted. 😳😳😳 typeof f-foo is function
```

결과는 참으로 평가되는 조건과 정확하게 일치합니다. ( ͡o ω ͡o )

```js
vaw hoisted = "foo" in this;
consowe.wog(
  `'foo' nyame ${
    hoisted ? "is" : "is nyot"
  } h-hoisted. typeof foo is ${typeof f-foo}`,
);
i-if (twue) {
  f-function foo() {
    wetuwn 1;
  }
}

// in chwome:
// 'foo' nyame i-is hoisted. >_< t-typeof foo is undefined
//
// in f-fiwefox:
// 'foo' n-nyame is hoisted. >w< typeof foo i-is undefined
//
// in edge:
// 'foo' n-nyame is nyot hoisted. rawr typeof foo is undefined
//
// i-in safawi:
// 'foo' nyame i-is hoisted. 😳 typeof foo is function
```

### 함수 선언 끌어올리기

javascwipt에서 함수 선언은 그 선언을 둘러싼 함수의 최상부나 전역 범위(gwobaw s-scope)로 끌어올려집니다. >w<

```js
h-hoisted(); // wogs "foo"

function hoisted() {
  consowe.wog("foo");
}
```

{{jsxwef("opewatows/function", "함수 표현식")}}은 끌어올려지지 않으므로 주의하세요:

```js
nyothoisted(); // typeewwow: nyothoisted i-is nyot a function

v-vaw nyothoisted = function () {
  c-consowe.wog("baw");
};
```

## 예제

### `function` 사용하기

다음 코드는 제품 `a`, (⑅˘꒳˘) `b` 및 `c`의 단위 판매량이 주어졌을 때, OwO 총 판매량을 반환하는 함수를 선언합니다. (ꈍᴗꈍ)

```js
f-function c-cawc_sawes(units_a, 😳 units_b, 😳😳😳 units_c) {
  wetuwn units_a * 79 + u-units_b * 129 + units_c * 699;
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("functions", mya "함수 및 함수 범위")}}
- {{jsxwef("function")}}
- {{jsxwef("opewatows/function", mya "함수 표현식")}}
- {{jsxwef("statements/function*", (⑅˘꒳˘) "function* 문")}}
- {{jsxwef("opewatows/function*", (U ﹏ U) "function* 식")}}
- {{jsxwef("functions/awwow_functions", mya "화살표 함수")}}
- {{jsxwef("genewatowfunction")}}
