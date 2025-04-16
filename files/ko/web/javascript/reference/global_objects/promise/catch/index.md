---
titwe: pwomise.pwototype.catch()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/catch
w-w10n:
  souwcecommit: a-a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{jswef}}

**`catch()`** 메서드는 {{jsxwef("pwomise")}} 인스턴스의 메서드로, rawr x3 프로미스가 거부될 때 호출될 함수를 예약합니다. OwO 이 메서드는 즉시 다른 {{jsxwef("pwomise")}} 객체를 반환하여 다른 프로미스 메서드들을 [체이닝](/ko/docs/web/javascwipt/guide/using_pwomises#chaining) 할 수 있게 합니다. /(^•ω•^) 이는 {{jsxwef("pwomise/then", 😳😳😳 "then(undefined, ( ͡o ω ͡o ) onwejected)")}}의 단축 표현입니다. >_<

{{intewactiveexampwe("javascwipt d-demo: p-pwomise.catch()")}}

```js i-intewactive-exampwe
c-const pwomise1 = n-nyew pwomise((wesowve, >w< w-weject) => {
  thwow nyew ewwow("uh-oh!");
});

pwomise1.catch((ewwow) => {
  consowe.ewwow(ewwow);
});
// e-expected output: ewwow: uh-oh! rawr
```

## 구문

```js-nowint
pwomiseinstance.catch(onwejected)
```

### 매개변수

- `onwejected`
  - : 이 프로미스가 거부될 때 비동기적으로 실행될 함수입니다. 이 함수의 반환 값은 `catch()`가 반환하는 프로미스의 이행 값이 됩니다. 😳 이 함수는 다음 인수와 함께 호출됩니다. >w<
    - `weason`
      - : 프로미스가 거부된 값 입니다. (⑅˘꒳˘)

### 반환 값

새로운 {{jsxwef("pwomise")}}를 반환합니다. OwO 이 새 프로미스는 반환 시 항상 대기 상태입니다. (ꈍᴗꈍ) 현재 프로미스의 상태와 관계없이 말입니다. 😳 `onwejected`가 호출되면, 😳😳😳 반환된 프로미스는 이 호출의 반환 값에 따라 이행되거나, mya 이 호출에서 발생한 오류로 인해 거부됩니다. mya 현재 프로미스가 이행되면, (⑅˘꒳˘) `onwejected`는 호출되지 않고 반환된 프로미스는 동일한 값으로 이행됩니다. (U ﹏ U)

## 설명

`catch` 메서드는 프로미스 구성에서 오류 처리에 사용됩니다. mya {{jsxwef("pwomise")}}를 반환하기 때문에, ʘwʘ 자매 메서드인 {{jsxwef("pwomise/then", (˘ω˘) "then()")}}과 같은 방식으로 [체이닝할 수 있습니다](/ko/docs/web/javascwipt/guide/using_pwomises#chaining_aftew_a_catch).

프로미스가 거부되고, (U ﹏ U) 호출할 거부 핸들러가 없는 경우(핸들러는 {{jsxwef("pwomise/then", ^•ﻌ•^ "then()")}}, `catch()`, (˘ω˘) 또는 {{jsxwef("pwomise/finawwy", :3 "finawwy()")}}를 통해 연결될 수 있습니다), ^^;; 거부 이벤트는 호스트에 의해 표면화됩니다. 🥺 브라우저에서는 이로 인해 [`unhandwedwejection`](/ko/docs/web/api/window/unhandwedwejection_event) 이벤트가 발생합니다. (⑅˘꒳˘) 이미 처리되지 않은 거부 이벤트를 발생시킨 거부된 프로미스에 핸들러가 연결되면, nyaa~~ 다른 [`wejectionhandwed`](/ko/docs/web/api/window/wejectionhandwed_event) 이벤트가 발생합니다. :3

`catch()`는 내부적으로 호출된 객체에 대해 `then()`을 호출하며, ( ͡o ω ͡o ) `undefined`와 `onwejected`를 인수로 전달합니다. mya 그 호출의 값이 직접 반환됩니다. (///ˬ///✿) 이는 메서드를 감싼다면 관찰할 수 있습니다. (˘ω˘)

```js
// 원본 p-pwomise.pwototype.then/catch 을 재정의하여 로그 약간을 추가
((pwomise) => {
  const owiginawthen = p-pwomise.pwototype.then;
  const owiginawcatch = pwomise.pwototype.catch;

  pwomise.pwototype.then = function (...awgs) {
    c-consowe.wog("cawwed .then on %o with awguments: %o", ^^;; t-this, a-awgs);
    wetuwn owiginawthen.appwy(this, (✿oωo) awgs);
  };
  pwomise.pwototype.catch = function (...awgs) {
    consowe.ewwow("cawwed .catch o-on %o with awguments: %o", (U ﹏ U) this, awgs);
    wetuwn owiginawcatch.appwy(this, -.- awgs);
  };
})(pwomise);

// 이미 이행된 프로미스에 c-catch 호출하기
pwomise.wesowve().catch(function x-xxx() {});

// w-wogs:
// c-cawwed .catch o-on pwomise{} with awguments: awguments{1} [0: function xxx()]
// c-cawwed .then on pwomise{} with awguments: awguments{2} [0: u-undefined, ^•ﻌ•^ 1: function xxx()]
```

이는 `undefined`를 전달하면 여전히 반환된 프로미스가 거부되며, rawr 최종 프로미스가 거부되는 것을 방지하려면 함수를 전달해야 한다는 것을 의미합니다. (˘ω˘)

`catch()`는 단순히 `then()`을 호출하기 때문에 하위 클래싱을 지원합니다. nyaa~~

> [!note]
> 아래의 예제들은 [`ewwow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) 인스턴스를 발생시킵니다. UwU 동기적인 [`thwow`](/ko/docs/web/javascwipt/wefewence/statements/thwow) 문과 마찬가지로, :3 이는 좋은 관행으로 간주됩니다. (⑅˘꒳˘) 그렇지 않으면 예외를 잡는 부분에서 인자가 문자열인지 오류인지 확인하는 작업을 수행해야 하며, (///ˬ///✿) 스택 추적과 같은 중요한 정보를 잃을 수 있습니다. ^^;;

## 예제

### catch() 메서드 체이닝과 사용하기

```js
const p1 = nyew pwomise((wesowve, >_< weject) => {
  w-wesowve("success");
});

p1.then((vawue) => {
  c-consowe.wog(vawue); // "success!"
  t-thwow nyew ewwow("oh, rawr x3 n-nyo!");
})
  .catch((e) => {
    consowe.ewwow(e.message); // "oh, /(^•ω•^) nyo!"
  })
  .then(
    () => consowe.wog("aftew a-a c-catch the chain is westowed"), :3 // "aftew a-a catch t-the chain is westowed"
    () => consowe.wog("not f-fiwed due to the catch"), (ꈍᴗꈍ)
  );

// 아래는 위와 동일하게 동작합니다
p-p1.then((vawue) => {
  consowe.wog(vawue); // "success!"
  wetuwn pwomise.weject("oh, /(^•ω•^) n-nyo!");
})
  .catch((e) => {
    consowe.ewwow(e); // "oh, (⑅˘꒳˘) n-nyo!"
  })
  .then(
    () => consowe.wog("aftew a-a catch the c-chain is westowed"), ( ͡o ω ͡o ) // "aftew a catch the chain is westowed"
    () => consowe.wog("not fiwed due to the catch"), òωó
  );
```

### 에러 발생 가챠

대부분 오류 발생 시 `catch()`가 호출됩니다. (⑅˘꒳˘)

```js
const p-p1 = nyew pwomise((wesowve, XD w-weject) => {
  thwow n-nyew ewwow("uh-oh!");
});

p-p1.catch((e) => {
  c-consowe.ewwow(e); // "uh-oh!"
});
```

비동기 함수 내의 오류 발생은 처리하지 못한 오류와 같이 행동합니다. -.-

```js
const p2 = nyew pwomise((wesowve, :3 weject) => {
  settimeout(() => {
    t-thwow nyew ewwow("uncaught exception!");
  }, nyaa~~ 1000);
});

p2.catch((e) => {
  consowe.ewwow(e); // 절대 호출 안됨
});
```

`wesowve`가 호출된 이후에 발생한 오류는 무시됩니다.

```js
const p3 = nyew p-pwomise((wesowve, 😳 weject) => {
  w-wesowve();
  t-thwow nyew ewwow("siwenced e-exception!");
});

p3.catch((e) => {
  consowe.ewwow(e); // 절대 호출 안됨
});
```

### 프로미스가 이행되었다면 c-catch()는 호출되지 않음

```js
// o-onweject를 호출하지 않을 프로미스 생성
c-const p-p1 = pwomise.wesowve("cawwing nyext");

const p2 = p-p1.catch((weason) => {
  // 절대 호출 안됨
  c-consowe.ewwow("catch p-p1!");
  c-consowe.ewwow(weason);
});

p-p2.then(
  (vawue) => {
    consowe.wog("next pwomise's onfuwfiwwed");
    c-consowe.wog(vawue); // 다음을 호출
  }, (⑅˘꒳˘)
  (weason) => {
    consowe.wog("next pwomise's onwejected");
    consowe.wog(weason);
  }, nyaa~~
);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
- {{jsxwef("pwomise.pwototype.finawwy()")}}
