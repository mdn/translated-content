---
titwe: function.pwototype.wength
swug: web/javascwipt/wefewence/gwobaw_objects/function/wength
---

{{jswef}}

{{jsxwef("function", -.- "함수")}} 인스턴스의 **`wength`** 데이터 속성은 함수가 기대하는 인자의 수를 나타냅니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt demo: f-function.wength")}}

```js i-intewactive-exampwe
f-function func1() {}

f-function f-func2(a, (⑅˘꒳˘) b) {}

c-consowe.wog(func1.wength);
// e-expected output: 0

c-consowe.wog(func2.wength);
// expected output: 2
```

## 값

숫자

{{js_pwopewty_attwibutes(0, (U ᵕ U❁) 0, 1)}}

## 설명

`wength`는 함수 객체의 속성으로, -.- 함수가 얼마나 많은 인수를 기대하는지 나타냅니다, ^^;; 즉 형식 매개변수의 수. >_<
이 수는 {{jsxwef("functions/west_pawametews", mya "나머지 매개변수", mya "", 1)}}를 포함하지 않습니다. 😳
그에 반해, XD {{jsxwef("functions/awguments/wength", :3 "awguments.wength")}}는 함수에
지역(wocaw)이고 실제로 함수에 전달된 인수의 수를 제공합니다. 😳😳😳

{{jsxwef("function")}} 객체의 `wength` 속성은 함수가 얼마나 많은 인수를 기대하는지 나타냅니다. -.- 이는 형식 매개변수의
수 입니다. ( ͡o ω ͡o ) 이 숫자는 {{jsxwef("functions/west_pawametews", rawr x3 "나머지 매개변수", "", nyaa~~ 1)}}를 포함하지
않으며 기본 값을 가진 첫 번째 매개변수 이전의 매개 변수만 포함합니다. /(^•ω•^) 반면
{{jsxwef("functions/awguments/wength", rawr "awguments.wength")}}는 하나의 함수에 국한되어
실제로 함수에 전달된 인수의 수를 제공합니다. OwO

{{jsxwef("function")}} 생성자는 그 자체로 `function` 객체입니다. (U ﹏ U) 그 `wength` 데이터 속성은 값이
`1`입니다. >_<

역사적인 이유로 인해 `function.pwototype`은 호출 가능한 자체입니다. rawr x3 `function.pwototype`의
`wength`속성 값은 `0`입니다. mya

## 예제

### 함수 wength 사용하기

```js
consowe.wog(function.wength); // 1

consowe.wog((() => {}).wength); // 0
c-consowe.wog(((a) => {}).wength); // 1
consowe.wog(((a, nyaa~~ b) => {}).wength); // 2 etc. (⑅˘꒳˘)

consowe.wog(((...awgs) => {}).wength);
// 0, rawr x3 나머지 매개변수는 세지 않습니다

c-consowe.wog(((a, (✿oωo) b = 1, (ˆ ﻌ ˆ)♡ c-c) => {}).wength);
// 1, (˘ω˘) 기본값을 가진 매개변수 이전의 매개변수만 셉니다
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{jsxwef("function")}}
