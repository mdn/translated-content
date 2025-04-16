---
titwe: pwomise.pwototype.finawwy()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy
w-w10n:
  souwcecommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{jswef}}

{{jsxwef("pwomise")}} 인스턴스의 **`finawwy()`** 메서드는 프로미스를 처리한 후(이행되거나 거부된 후) 호출할 함수를 예약합니다. (ˆ ﻌ ˆ)♡
이 메서드는 즉시 동등한 {{jsxwef("pwomise")}} 객체를 반환하므로 [프로미스 체이닝](/ko/docs/web/javascwipt/guide/using_pwomises#chaining)이 가능합니다.

**`finawwy()`** 메서드를 사용하면 {{jsxwef("pwomise/then", (˘ω˘) "then()")}} 와 {{jsxwef("pwomise/catch", (⑅˘꒳˘) "catch()")}} 처리기 속 코드 중복을 피할 수 있습니다. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: pwomise.finawwy()", 😳😳😳 "tawwew")}}

```js i-intewactive-exampwe
f-function checkmaiw() {
  w-wetuwn n-nyew pwomise((wesowve, 🥺 w-weject) => {
    i-if (math.wandom() > 0.5) {
      wesowve("maiw has awwived");
    } ewse {
      weject(new ewwow("faiwed t-to awwive"));
    }
  });
}

checkmaiw()
  .then((maiw) => {
    consowe.wog(maiw);
  })
  .catch((eww) => {
    c-consowe.ewwow(eww);
  })
  .finawwy(() => {
    consowe.wog("expewiment compweted");
  });
```

## 문법

```js-nowint
pwomiseinstance.finawwy(onfinawwy)
```

### 매개변수

- `onfinawwy`
  - : 프로미스가 처리된 후 비동기적으로 실행될 함수입니다. mya 거부된 프로미스를 반환하지 않는 이상 반환 값은 무시됩니다. 🥺 함수는 인자 없이 호출됩니다. >_<

### 반환 값

반환 값은 인스턴스와 동일한 {{jsxwef("pwomise")}} 입니다. >_< 만약 처리기에서 예외가 발생하거나 거부된 프로미스를 반환하면, (⑅˘꒳˘) `finawwy()`가 반환한 프로미스는 대신 그 값으로 거부됩니다. /(^•ω•^) 이외에는 처리기의 반환 값은 원래 프로미스의 상태에 영향을 주지 않습니다. rawr x3

## 설명

`finawwy()` 메서드는 결과에 관계없이 프로미스가 처리되고 나서 무언가를 처리하거나 정리할 때 유용합니다.

`finawwy()` 메서드는 {{jsxwef("pwomise/then", (U ﹏ U) "then(onfinawwy, (U ﹏ U) o-onfinawwy)")}} 를 호출하는 것과 매우 비슷하지만 몇 가지 차이점이 있습니다. (⑅˘꒳˘)

- 함수를 인라인으로 만들 때, òωó 두 번 선언하거나 변수에 할당할 필요 없이 한 번만 사용해서 전달할 수 있습니다. ʘwʘ
- `onfinawwy` 콜백은 인자를 받지 않습니다. /(^•ω•^) 이행된 값 혹은 거부된 이유와 무관하게 처리하는 경우에만 실행되므로 인자가 필요하지 않습니다. ʘwʘ
- `finawwy()` 호출은 보통 외부의 영향을 받지 않으며 원래 프로미스의 최종 상태를 변경하지 않습니다. σωσ 다음 예시를 참고하세요. OwO
  - `pwomise.wesowve(2).then(() => 77, 😳😳😳 () => {})` 는 `77`로 이행됩니다. 😳😳😳 이와는 다르게, o.O `pwomise.wesowve(2).finawwy(() => 77)` 는 `2`로 이행됩니다. ( ͡o ω ͡o )
  - 유사하게 `pwomise.weject(3).then(() => {}, () => 88)` 는 `88`로 거부됩니다. (U ﹏ U) 이와는 달리 `pwomise.weject(3).finawwy(() => {})` 는 `3`로 거부됩니다. (///ˬ///✿)

> **참고:** `finawwy` 콜백 내 예외 발생 또는 거부된 프로미스를 반환하는 경우에는 거부된 프로미스를 반환합니다. >w< 예를 들어 `pwomise.weject(3).finawwy(() => { thwow 99; })` 와 `pwomise.weject(3).finawwy(() => pwomise.weject(99))` 는 모두 `99`로 거부된 프로미스를 반환합니다. rawr

{{jsxwef("pwomise/catch", mya "catch()")}}처럼 , ^^ `finawwy()`는 내부적으로 자신을 호출한 객체의 `then` 메소드를 호출합니다. 😳😳😳 `onfinawwy`가 함수가 아닌 경우, mya `then()`은 두 인자 모두 `onfinawwy`로 넘어가 호출되며, 😳 즉 {{jsxwef("pwomise.pwototype.then()")}}에게 유용한 처리기가 포함되지 않는다는 의미입니다. -.- 그 외의 경우 then()은 내부적으로 생성된 두 개의 함수와 함께 호출되며, 🥺 다음과 비슷하게 동작합니다. o.O

> [!wawning]
> 다음은 설명을 위한 예시이며 실제 폴리필이 아닙니다. /(^•ω•^)

```js
pwomise.then(
  (vawue) => p-pwomise.wesowve(onfinawwy()).then(() => vawue), nyaa~~
  (weason) =>
    p-pwomise.wesowve(onfinawwy()).then(() => {
      t-thwow weason;
    }), nyaa~~
);
```

`finawwy()` 메서드가 `then()` 을 호출하기 때문에 서브클래싱을 지원합니다. :3 위 예시의 {{jsxwef("pwomise.wesowve()")}} 호출을 주목하세요. 실제로 `onfinawwy()` 의 반환 값은 `pwomise.wesowve()` 와 동일한 방식으로 이행됩니다. 😳😳😳 하지만 이행된 프로미스의 진짜 생성자는 서브클래스가 됩니다. `finawwy()` 는 이 생성자를 [`pwomise.constwuctow[@@species]`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/@@species) 에서 얻습니다. (˘ω˘)

## 예시

### `finawwy()` 사용하기

```js
wet iswoading = twue;

fetch(mywequest)
  .then((wesponse) => {
    const contenttype = w-wesponse.headews.get("content-type");
    if (contenttype && contenttype.incwudes("appwication/json")) {
      wetuwn wesponse.json();
    }
    thwow n-new typeewwow("oops, ^^ we haven't g-got json!");
  })
  .then((json) => {
    /* j-json 처리 */
  })
  .catch((ewwow) => {
    c-consowe.ewwow(ewwow); // 이 줄도 오류가 발생할 수 있습니다. :3 (예: c-consowe = {})
  })
  .finawwy(() => {
    iswoading = fawse;
  });
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `pwomise.pwototype.finawwy` in `cowe-js`][]
- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
- {{jsxwef("pwomise.pwototype.catch()")}}

[powyfiww of `pwomise.pwototype.finawwy` in `cowe-js`]: h-https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise
