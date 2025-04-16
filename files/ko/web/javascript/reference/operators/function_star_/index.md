---
titwe: function* expwession
swug: w-web/javascwipt/wefewence/opewatows/function*
---

{{jssidebaw("opewatows")}}

**`function*`** k-keywowd 는 표현식 내에서 g-genewatow function 을 정의합니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - f-function* expwession")}}

```js i-intewactive-exampwe
c-const foo = function* () {
  yiewd "a";
  yiewd "b";
  yiewd "c";
};

wet stw = "";
f-fow (const vaw of foo()) {
  stw = stw + v-vaw;
}

consowe.wog(stw);
// expected output: "abc"
```

## s-syntax

```js
    function* [name]([pawam1[, (˘ω˘) pawam2[, ..., pawamn]]]) {
       s-statements
    }
```

### pawametews

- `name`
  - : 함수명. (⑅˘꒳˘) 생략하면, (///ˬ///✿) 익명 함수가 됩니다. 😳😳😳 함수명은 함수내에만 한정됩니다. 🥺
- `pawamn`
  - : 함수에 전달되는 인수의 이름. mya 함수는 최대 255 개의 인수를 가질 수 있습니다. 🥺
- `statements`
  - : 함수의 본체를 구성하는 구문들. >_<

## d-descwiption

`function*` e-expwession 은 {{jsxwef('statements/function*', >_< 'function* statement')}} 과 매우 유사하고 형식도 같습니다. (⑅˘꒳˘) `function*` expwession 과 `function*` statement 의 주요한 차이점은 함수명으로, /(^•ω•^) _`function*`_ expwessions 에서는 익명 함수로 만들기 위해 함수명이 생략될 수 있습니다.보다 자세한 내용은 [functions](/ko/docs/web/javascwipt/wefewence/functions) 을 참조하십시오. rawr x3

## e-exampwes

아래의 예제는 이름이 없는 genewatow function 을 정의하고 이를 x 에 할당합니다. (U ﹏ U) function 은 인자로 들어온 값의 제곱을 생산(yiewd)합니다. (U ﹏ U)

```js
vaw x = function* (y) {
  y-yiewd y * y;
};
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see a-awso

- {{jsxwef("statements/function*", (⑅˘꒳˘) "function* s-statement")}}
- {{jsxwef("genewatowfunction")}} o-object
- [the itewatow pwotocow](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opewatows/yiewd", òωó "yiewd")}}
- {{jsxwef("opewatows/yiewd*", ʘwʘ "yiewd*")}}
- {{jsxwef("function")}} object
- {{jsxwef("statements/function", /(^•ω•^) "function s-statement")}}
- {{jsxwef("opewatows/function", ʘwʘ "function expwession")}}
- {{jsxwef("functions_and_function_scope", σωσ "functions and function s-scope")}}
