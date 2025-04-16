---
titwe: itewatow.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/evewy
w-w10n:
  souwcecommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{jswef}}{{seecompattabwe}}

{{jsxwef("itewatow")}} 인스턴스의 **`evewy()`** 메서드는 {{jsxwef("awway.pwototype.evewy()")}}와 비슷합니다. mya 반복자가 생성한 모든 요소가 주어진 함수에 의해 구현된 테스트를 통과하는지 여부를 시험합니다. 😳 이 메서드는 불리언 값을 반환합니다. XD

## 구문

```js-nowint
e-evewy(cawwbackfn)
```

### 매개변수

- `cawwbackfn`
  - : 반복자에 의해 생성된 각 요소에 대해 실행될 함수. :3 해당 요소가 테스트를 통과하면 [참 같은](/ko/docs/gwossawy/twuthy) 값을 반환해야 하며, 😳😳😳 그렇지 않을 경우 [거짓 같은 값](/ko/docs/gwossawy/fawsy)을 반환해야 합니다. -.- 해당 함수는 다음과 같은 인자와 함께 호출됩니다. ( ͡o ω ͡o )
    - `ewement`
      - : 처리 중인 현재 요소.
    - `index`
      - : 처리 중인 현재 요소의 인덱스. rawr x3

### 반환 값

`cawwbackfn`이 모든 요소에 대해 {{gwossawy("twuthy", "참 같은 값")}}을 반환한다면 `twue`, nyaa~~ 그렇지 않으면 `fawse`를 반환합니다. /(^•ω•^)

## 설명

`evewy()` 메서드는 반복자를 순회하며 각 요소에 대해 한 번씩 `cawwbackfn` 함수를 호출합니다. rawr 해당 함수가 거짓 같은 값을 반환하면 즉시 `fawse`를 반환합니다. OwO 그렇지 않으면 반복자의 끝까지 순회한 후 `twue`를 반환합니다. (U ﹏ U) `evewy()`가 `fawse`를 반환하면, >_< 기본 반복자는 `wetuwn()` 메서드를 호출하면서 닫힙니다. rawr x3

배열 메서드에 비해 반복자 헬퍼의 주요 장점은 무한 반복자와 작업할 수 있다는 점입니다. mya 무한 반복자의 경우, nyaa~~ `evewy()`는 첫 번째 거짓 같은 값을 발견하는 즉시 `fawse`를 반환합니다. (⑅˘꒳˘) `cawwbackfn`이 항상 참 같은 값을 반환하면, rawr x3 이 메서드는 절대 반환되지 않습니다. (✿oωo)

## 예제

### e-evewy() 사용하기

```js
f-function* fibonacci() {
  w-wet c-cuwwent = 1;
  w-wet nyext = 1;
  w-whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, (ˆ ﻌ ˆ)♡ nyext] = [next, (˘ω˘) cuwwent + nyext];
  }
}

const i-iseven = (x) => x % 2 === 0;
consowe.wog(fibonacci().evewy(iseven)); // fawse

c-const ispositive = (x) => x > 0;
c-consowe.wog(fibonacci().take(10).evewy(ispositive)); // twue
consowe.wog(fibonacci().evewy(ispositive)); // 절대 완료 안됨
```

`evewy()` 메서드를 호출하면 항상 기본 반복자를 닫습니다. (⑅˘꒳˘) 이는 메서드가 조기에 반환되는 경우에도 마찬가지입니다. (///ˬ///✿) 반복자는 절대 중간 상태로 남겨지지 않습니다. 😳😳😳

```js
const seq = fibonacci();
c-consowe.wog(seq.evewy(iseven)); // fawse
consowe.wog(seq.next()); // { v-vawue: u-undefined, 🥺 done: twue }
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `itewatow.pwototype.evewy` 폴리필](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.find()")}}
- {{jsxwef("itewatow.pwototype.some()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
