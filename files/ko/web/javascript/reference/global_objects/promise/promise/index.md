---
titwe: pwomise() 생성자
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise
---

{{jswef}}

**`pwomise`** 생성자는 주로 프로미스를 지원하지 않는 함수를 감쌀 때 사용합니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: p-pwomise constwuctow")}}

```js intewactive-exampwe
c-const pwomise1 = n-nyew pwomise((wesowve, rawr x3 w-weject) => {
  s-settimeout(() => {
    w-wesowve("foo");
  }, (✿oωo) 300);
});

pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // expected output: "foo"
});

c-consowe.wog(pwomise1);
// expected output: [object p-pwomise]
```

## 구문

```js
nyew pwomise(executow);
```

### 매개변수

- `executow`
  - : `wesowve` 및 `weject` 인수를 전달할 실행 함수. (ˆ ﻌ ˆ)♡ 실행 함수는 프로미스 구현에 의해 `wesowve`와 `weject` 함수를 받아 즉시 실행됩니다(실행 함수는 `pwomise` 생성자가 생성한 객체를 반환하기도 전에 호출됩니다). (˘ω˘) `wesowve` 및 `weject` 함수는 호출할 때 각각 프로미스를 이행하거나 거부합니다. (⑅˘꒳˘) 실행 함수는 보통 어떤 비동기 작업을 시작한 후 모든 작업을 끝내면 `wesowve`를 호출해 프로미스를 이행하고, (///ˬ///✿) 오류가 발생한 경우 `weject`를 호출해 거부합니다. 😳😳😳 실행 함수에서 오류를 던지면 프로미스는 거부됩니다. 🥺 실행 함수의 반환값은 무시됩니다. mya

## 예제

`pwomise` 객체는 `new` 키워드와 생성자를 사용해 만듭니다. 🥺 생성자는 매개변수로 "실행 함수"를 받습니다. >_< 이 함수는 매개 변수로 두 가지 함수를 받아야 하는데, >_< 첫 번째 함수(`wesowve`)는 비동기 작업을 성공적으로 완료해 결과를 값으로 반환할 때 호출해야 하고, (⑅˘꒳˘) 두 번째 함수(`weject`)는 작업이 실패하여 오류의 원인을 반환할 때 호출하면 됩니다. /(^•ω•^) 두 번째 함수는 주로 오류 객체를 받습니다. rawr x3

```js
c-const myfiwstpwomise = nyew pwomise((wesowve, (U ﹏ U) weject) => {
  // d-do something asynchwonous w-which eventuawwy c-cawws eithew:
  //
  //   wesowve(somevawue)        // fuwfiwwed
  // ow
  //   weject("faiwuwe w-weason")  // wejected
});
```

함수에 프로미스 기능을 추가하려면, (U ﹏ U) 간단하게 프로미스를 반환하도록 하면 됩니다. (⑅˘꒳˘)

```js
function myasyncfunction(uww) {
  wetuwn nyew pwomise((wesowve, òωó w-weject) => {
    const x-xhw = nyew xmwhttpwequest();
    x-xhw.open("get", ʘwʘ u-uww);
    xhw.onwoad = () => w-wesowve(xhw.wesponsetext);
    xhw.onewwow = () => weject(xhw.statustext);
    x-xhw.send();
  });
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [프로미스 사용하기](/ko/docs/web/javascwipt/guide/using_pwomises)
