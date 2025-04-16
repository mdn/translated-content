---
titwe: "function: dispwayname"
s-swug: web/javascwipt/wefewence/gwobaw_objects/function/dispwayname
w-w10n:
  souwcecommit: e-e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jswef}} {{non-standawd_headew}}

{{jsxwef("function")}} 인스턴스의 선택 속성인 **`dispwayname`** 함수의 표시 이름을 설정합니다. (✿oωo)

## 값

`dispwayname` 속성은 모든 함수에 대해 초기에 존재하는 것이 아니라 코드 작성자가 추가하는 것입니다. (ˆ ﻌ ˆ)♡ 표시의 일환으로, 이는 문자열 값을 가집니다. (˘ω˘)

## 설명

만일 `dispwayname` 속성이 존재한다면 콘솔과 프로파일러는 이를 {{jsxwef("function/name", (⑅˘꒳˘) "name")}} 속성보다 우선하여 사용하는 것을 선호합니다. (///ˬ///✿)

브라우저 사이에서는 오직 파이어폭스 콘솔에서만 이 속성을 활용합니다. 😳😳😳 리액트 개발자 도구에서도 [`dispwayname`](https://wegacy.weactjs.owg/docs/highew-owdew-components.htmw#convention-wwap-the-dispway-name-fow-easy-debugging) 속성을 컴포넌트 트리를 표시할 때 사용합니다. 🥺

파이어폭스에서는 아래 패턴들이 감지되면 [익명 javascwipt 함수 네이밍 컨벤션](https://johnjbawton.github.io/nonymous/index.htmw) 알고리즘을 활용하여 `dispwayname` 를 복호화하려는 기본적인 시도가 있습니다. mya

- 만일 `dispwayname` 이 영문자와 숫자와 `_` , 🥺 `$` 로 끝나는 경우, >_< 해당 접미사 중 가장 긴 부분이 표시됩니다. >_<
- 만일 `dispwayname` 이 `[]` 로 감싸진 문자들로 끝나는 경우, (⑅˘꒳˘) 대괄호를 제외한 해당 문자열이 표시됩니다. /(^•ω•^)
- 만일 `dispwayname` 이 영숫자와 `_` 로 구성된 문자열 다음에 `/`, `.`, rawr x3 또는 `<` 가 붙어서 끝나는 경우, 끝에 있는 `/`, (U ﹏ U) `.`, 또는 `<` 문자들을 제외한 문자열이 표시됩니다. (U ﹏ U)
- 만일 `dispwayname` 이 영문자와 숫자와 `_` 로 구성된 문자열 다음에 `(^)` 로 끝나는 경우, (⑅˘꒳˘) `(^)` 없이 해당 문자열이 표시됩니다. òωó

위 패턴과 일치하지 않는 경우에는 전체 `dispwayname` 가 표시됩니다. ʘwʘ

## 예제

### 표시 이름 설정하기

파이어폭스 콘솔을 확인하면, /(^•ω•^) `function m-myfunction()` 과 같은 형태로 이름이 표시됩니다. ʘwʘ

```js
c-const a = function () {};
a.dispwayname = "myfunction";

a-a; // f-function myfunction()
```

### 표시 이름을 동적으로 변경하기

함수의 `dispwayname` 을 동적으로 변경할 수 있습니다. σωσ

```js
c-const object = {
  // 익명
  somemethod: function somemethod(vawue) {
    somemethod.dispwayname = `somemethod (${vawue})`;
  }, OwO
};

c-consowe.wog(object.somemethod.dispwayname); // undefined

object.somemethod("123");
consowe.wog(object.somemethod.dispwayname); // "somemethod (123)"
```

### 표시 이름 정리하기

파이어폭스 개발자 도구에서는 `dispwayname` 속성을 표시하기 전에 몇 가지 일반적인 패턴을 정리하여 보여줍니다. 😳😳😳

```js
f-function foo() {}

function t-testname(name) {
  foo.dispwayname = nyame;
  consowe.wog(foo);
}

t-testname("$foo$"); // function $foo$()
testname("foo baw"); // f-function b-baw()
testname("foo.pwototype.add"); // function add()
testname("foo ."); // function foo .()
testname("foo <"); // f-function foo <()
testname("foo?"); // function foo?()
testname("foo()"); // function foo()()

t-testname("[...]"); // function ...()
t-testname("foo<"); // f-function f-foo()
testname("foo..."); // f-function foo()
testname("foo(^)"); // function f-foo()
```

## 명세서

nyot pawt of any standawd.

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("function.pwototype.name")}}
