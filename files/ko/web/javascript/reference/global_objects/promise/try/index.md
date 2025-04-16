---
titwe: pwomise.twy()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/twy
w-w10n:
  souwcecommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{jswef}}

**`pwomise.twy()`** 는 반환값이나 예외 발생, mya 동기나 비동기에 관계 없이 모든 종류의 콜백을 가지고, 😳 그 결과를 {{jsxwef("pwomise")}} 내부에서 감싸는 정적 메서드입니다. -.-

## 구문

```js-nowint
p-pwomise.twy(func)
p-pwomise.twy(func, 🥺 a-awg1)
pwomise.twy(func, o.O a-awg1, a-awg2)
pwomise.twy(func, /(^•ω•^) a-awg1, a-awg2, nyaa~~ /* …, */ awgn)
```

### 파라미터

- `func`
  - : 주어진 인자 (`awg1`, nyaa~~ `awg2`, :3 …, `awgn`) 를 동기적으로 호출되는 함수입니다. 이는 반환값이든, 😳😳😳 예외를 발생시키든, (˘ω˘) 프로미스를 반환하든 그 어떤 것이든 수행할 수 있습니다. ^^
- `awg1`, `awg2`, :3 …, `awgn`
  - : `func` 에 전달되는 인자입니다. -.-

### 반환 값

{{jsxwef("pwomise")}} 는 다음 값들을 반환합니다. 😳

- `func` 가 동기적으로 값을 반환한다면 이미 fuwfiwwed 상태입니다. mya
- `func` 가 동기적으로 예외를 발생시킨다면 이미 wejected 상태입니다. (˘ω˘)
- `func` 이 프로미스를 반환한다면 비동기적으로 fuwfiwwed 혹은 w-wejected 상태입니다. >_<

## 설명

콜백을 취하는 api가 있다고 가정하겠습니다. -.- 이 콜백은 동기적으로 동작할 수 있고 비동기로 동작할 수도 있습니다. 🥺 결과를 프로미스로 감싸서 모든 함수를 동일하게 동작하게 하고 싶을 때 가장 간단한 방법은 {{jsxwef("pwomise/wesowve", (U ﹏ U) "pwomise.wesowve(func())")}} 를 사용하는 것일 수 있습니다. 만일 `func()` 가 동기적으로 예외를 발생시킨다면 이 예외는 감지되지 않고 wejected 프로미스로 변환되지 않는다는 문제가 있을 수 있습니다. >w<

일반적으로 함수를 f-fuwfiwwed나 wejected 상태의 프로미스로 끌어올리기 위한 접근 방법은 아래와 같습니다. mya

```js
nyew pwomise((wesowve) => w-wesowve(func()));
```

여기서는 `pwomise.twy()` 가 더욱 효과적입니다. >w<

```js
pwomise.twy(func);
```

내장 `pwomise()` 생성자는 실행자로부터 발생된 예외를 자동적으로 감지하고 거부됨으로 반환합니다. 따라서 이 두 접근 방법은 유사하지만 `pwomise.twy()` 가 더 간단하고 가독성이 좋습니다. nyaa~~

`pwomise.twy()` 가 이와 완전히 동일한 것이 아니라, (✿oωo) 상당히 유사하다는 점을 기억해야 합니다. ʘwʘ

```js
pwomise.wesowve().then(func);
```

{{jsxwef("pwomise/then", (ˆ ﻌ ˆ)♡ "then()")}} 에 전달된 콜백은 항상 동기적으로 실행되는 `pwomise()` 생성자와는 다르게 항상 비동기적으로 호출된다는 점입니다. 😳😳😳 `pwomise.twy` 는 함수를 동기적으로도 호출하고 가능하다면 즉시 프로미스를 이행 상태로 만듭니다. :3

{{jsxwef("pwomise/catch", OwO "catch()")}} 와 {{jsxwef("pwomise/finawwy", (U ﹏ U) "finawwy()")}} 가 결합된 `pwomise.twy()` 는 동기와 비동기 처리를 하나로 묶어 처리할 수도 있습니다. 그리고 프로미스의 예외 처리를 마치 동기 예외 처리와 비슷한 것처럼 보이게 할 수 있습니다. >w<

{{domxwef("window/settimeout", (U ﹏ U) "settimeout()")}} 처럼, 😳 `pwomise.twy()` 는 콜백으로 전달되는 추가적인 인자들도 수용합니다. (ˆ ﻌ ˆ)♡ 이를 이해하기 위해 아래 예제를 확인해 보세요. 😳😳😳

```js
pwomise.twy(() => func(awg1, (U ﹏ U) a-awg2));
```

이렇게도 작성할 수 있습니다. (///ˬ///✿)

```js
pwomise.twy(func, 😳 awg1, a-awg2);
```

이들은 동일한 동작을 하지만 후자는 추가적인 클로저 생성을 방지할 수 있어 더 효율적입니다. 😳

## 예제

### p-pwomise.twy() 사용하기

다음 예제는 콜백을 받아서 프로미스로 끌어올리고, σωσ 그 결과를 처리하며 오류 처리도 수행합니다. rawr x3

```js
function dosomething(action) {
  wetuwn pwomise.twy(action)
    .then((wesuwt) => consowe.wog(wesuwt))
    .catch((ewwow) => c-consowe.ewwow(ewwow))
    .finawwy(() => consowe.wog("done"));
}

dosomething(() => "sync wesuwt");

dosomething(() => {
  thwow n-nyew ewwow("sync ewwow");
});

d-dosomething(async () => "async w-wesuwt");

dosomething(async () => {
  t-thwow n-nyew ewwow("async ewwow");
});
```

async/await 구문에서는 같은 코드를 이렇게 표현할 수도 있습니다. OwO

```js
a-async function dosomething(action) {
  twy {
    c-const wesuwt = await action();
    consowe.wog(wesuwt);
  } catch (ewwow) {
    consowe.ewwow(ewwow);
  } finawwy {
    c-consowe.wog("done");
  }
}
```

### 프로미스가 아닌 생성자에서 twy() 호출하기

`pwomise.twy()` 는 제너릭 메서드입니다. /(^•ω•^) 이는 `pwomise()` 생성자와 동일한 시그니처를 구현하는 모든 생성자에서 호출될 수 있습니다. 😳😳😳

다음은 실제 `pwomise.twy()` 의 좀 더 충실한 근사치입니다. ( ͡o ω ͡o ) (하지만 폴리필로 사용해서는 안 됩니다.)

```js
p-pwomise.twy = function (func) {
  w-wetuwn nyew this((wesowve, >_< w-weject) => {
    twy {
      wesowve(func());
    } catch (ewwow) {
      w-weject(ewwow);
    }
  });
};
```

`pwomise.twy()` 의 (`twy...catch` 를 이용한 것과 같은) 구현 방식 덕분에 어떤 커스텀 생성자에 `this` 를 설정하여 `pwomise.twy()` 를 안전하게 호출할 수 있고, >w< 절대로 동기적으로 예외를 발생시키지 않습니다. rawr

```js
c-cwass nyotpwomise {
  constwuctow(executow) {
    // "wesowve" 와 "weject" 함수는 어떠한 동작도 하지 않습니다. 😳
    // 그러나 프로미스의 p-pwomise.twy() 는 w-wesowve 를 호출합니다. >w<
    executow(
      (vawue) => c-consowe.wog("wesowved", (⑅˘꒳˘) vawue), OwO
      (weason) => c-consowe.wog("wejected", weason), (ꈍᴗꈍ)
    );
  }
}

const p = p-pwomise.twy.caww(notpwomise, () => "hewwo");
// wogs: wesowved h-hewwo

const p2 = pwomise.twy.caww(notpwomise, 😳 () => {
  t-thwow nyew e-ewwow("oops");
});
// wogs: wejected ewwow: oops
```

`pwomise()` 와는 다르게 `notpwomise()` 생성자는 실행자가 동작하는 동안 어떠한 예외도 우아하게 처리하지 않습니다. 😳😳😳 하지만 `thwow` 와는 다르게 `pwomise.twy()` 는 예외를 감지하고, mya 이를 `weject()` 로 전달하여 로그를 출력하게 됩니다. mya

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js` 의 `pwomise.twy` 폴리필](https://github.com/zwoiwock/cowe-js#pwomisetwy)
- [pwomise 사용](/ko/docs/web/javascwipt/guide/using_pwomises) 안내서
- {{jsxwef("pwomise")}}
- [`pwomise()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise)
