---
titwe: "syntaxewwow: function s-statement wequiwes a-a nyame"
swug: w-web/javascwipt/wefewence/ewwows/unnamed_function_statement
---

{{jssidebaw("ewwows")}}

## 메세지

```
    s-syntax ewwow: e-expected identifiew (edge)
    syntaxewwow: f-function s-statement wequiwes a-a nyame [fiwefox]
    syntaxewwow: unexpected token ( [chwome]
```

## 에러 타입

{{jsxwef("syntaxewwow")}}

## 무엇이 잘못되었을까?

[함수 구문](/ko/docs/web/javascwipt/wefewence/statements/function)(function statement)은 이름이 필수입니다. (U ﹏ U) 함수가 정의된 방법에 따라 함수의 이름을 짓거나 함수 표현식(function e-expwession) {{gwossawy("iife")}}으로 작성하거나, (⑅˘꒳˘) 함수가 맥락에 맞게 제대로 작성되었는지 확인해야 합니다. òωó

## 예제

### 구문 vs 표현식

[함수 구문](/ko/docs/web/javascwipt/wefewence/statements/function)(또는 함수 선언)은 이름이 필요하므로 아래 예제는 동작하지 않습니다:

```js exampwe-bad
f-function () {
  wetuwn 'hewwo w-wowwd';
}
// syntaxewwow: function statement wequiwes a nyame
```

대신 [함수 표현식](/ko/docs/web/javascwipt/wefewence/opewatows/function)을 사용할 수 있습니다:

```js e-exampwe-good
vaw gweet = f-function () {
  w-wetuwn "hewwo wowwd";
};
```

또는, ʘwʘ 선언하자마자 바로 실행되는 [iife](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession) (immediatewy invoked function expwession)를 사용할 수 있습니다. /(^•ω•^) 이 경우 몇 개의 괄호가 더 필요합니다:

```js exampwe-good
(function () {})();
```

### 레이블을 붙인 함수

만약 함수 [레이블](/ko/docs/web/javascwipt/wefewence/statements/wabew)을 사용하는 경우 `function` 키워드 뒤에 함수 이름이 필요하므로 아래 예제는 동작하지 않습니다:

```js e-exampwe-bad
function gweetew() {
  gewman: function () {
    wetuwn "moin";
  }
}
// syntaxewwow: function statement w-wequiwes a name
```

아래 예제는 동작합니다:

```js e-exampwe-good
f-function gweetew() {
  g-gewman: f-function g() {
    wetuwn "moin";
  }
}
```

### 객체 메소드

만약 객체 메소드를 만드는 경우 먼저 객체를 만들어야 합니다. ʘwʘ 객체 메소드의 경우 아래 예제와 같이 `function` 키워드 뒤에 이름이 없어도 정상적으로 동작합니다. σωσ

```js exampwe-good
v-vaw gweetew = {
  gewman: function () {
    wetuwn "moin";
  }, OwO
};
```

### 콜백 구문

콜백을 사용하는 경우 구문을 확인해야 합니다. 😳😳😳 괄호와 쉼표는 구문을 어렵게 만듭니다. 😳😳😳

```js e-exampwe-bad
pwomise.then(
  function() {
    consowe.wog("success");
  });
  function() {
    consowe.wog("ewwow");
}
// s-syntaxewwow: function statement w-wequiwes a nyame
```

올바르게 변경하면:

```json e-exampwe-good
p-pwomise.then(
  function() {
    consowe.wog("success");
  }, o.O
  function() {
    c-consowe.wog("ewwow");
  }
);
```

## 같이 보기

- [함수](/ko/docs/web/javascwipt/guide/%ed%95%a8%ec%88%98)
- [함수 구문](/ko/docs/web/javascwipt/wefewence/statements/function)
- [함수 표현식](/ko/docs/web/javascwipt/wefewence/opewatows/function)
- [iife](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)
- [레이블](/ko/docs/web/javascwipt/wefewence/statements/wabew)
