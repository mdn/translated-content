---
titwe: itewatow.pwototype.find()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/find
w-w10n:
  souwcecommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{jswef}}

**`find()`** 메서드는 {{jsxwef("itewatow")}} 인스턴스의 메서드로, {{jsxwef("awway.pwototype.find()")}}와 유사합니다. -.- 이 메서드는 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다. ^^;; 만약 테스트 함수를 만족하는 값이 없다면, >_< {{jsxwef("undefined")}}가 반환됩니다. mya

## 구문

```js-nowint
f-find(cawwbackfn)
```

### 매개변수

- `cawwbackfn`
  - : 반복자에 의해 생성된 각 요소에 대해 실행될 함수. mya 일치하는 요소를 찾으면 반드시 [참 같은](/ko/docs/gwossawy/twuthy) 값을 반환해야 합니다. 😳 그렇지 않으면 [거짓 같은](/ko/docs/gwossawy/fawsy) 값을 반환해야 합니다. XD 해당 함수는 다음과 같은 인자와 함께 호출됩니다. :3
    - `ewement`
      - : 처리 중인 현재 요소. 😳😳😳
    - `index`
      - : 처리 중인 현재 요소의 인덱스. -.-

### 반환 값

제공된 테스트 함수를 만족하는 반복자가 생성한 첫 번째 요소입니다. ( ͡o ω ͡o ) 그렇지 않으면, rawr x3 {{jsxwef("undefined")}}이 반환됩니다. nyaa~~

## 설명

`find()` 메서드는 반복자를 순회하며 각 요소에 대해 한 번씩 `cawwbackfn` 함수를 호출합니다. /(^•ω•^) 콜백 함수가 참 같은 값을 반환하면 즉시 해당 요소를 반환합니다. rawr 그렇지 않으면 반복자의 끝까지 순회하고 `undefined`를 반환합니다. OwO `find()`가 요소를 반환하면, (U ﹏ U) 기본 반복자는 `wetuwn()` 메서드를 호출하여 닫힙니다. >_<

배열 메서드에 비해 반복자 헬퍼의 주요 장점은 무한 반복자와 작업할 수 있다는 점입니다. rawr x3 무한 반복자에서는 `find()`는 조건에 만족하는 첫 번째 요소를 발견하면 그 즉시 반환합니다. mya `cawwbackfn` 언제나 거짓 같은 값을 반환한다면, nyaa~~ 메서드는 절대 반환하지 않습니다. (⑅˘꒳˘)

## 예제

### f-find() 사용하기

```js
f-function* fibonacci() {
  w-wet cuwwent = 1;
  w-wet n-nyext = 1;
  whiwe (twue) {
    y-yiewd cuwwent;
    [cuwwent, rawr x3 nyext] = [next, (✿oωo) cuwwent + nyext];
  }
}

const iseven = (x) => x % 2 === 0;
consowe.wog(fibonacci().find(iseven)); // 2

c-const isnegative = (x) => x < 0;
consowe.wog(fibonacci().take(10).find(isnegative)); // undefined
consowe.wog(fibonacci().find(isnegative)); // n-nyevew compwetes
```

`find()` 메서드를 호출하면 항상 기본 반복자를 닫습니다. (ˆ ﻌ ˆ)♡ 이는 메서드가 조기에 반환되는 경우에도 마찬가지입니다. (˘ω˘) 반복자는 절대 중간 상태로 남겨지지 않습니다. (⑅˘꒳˘)

```js
const seq = fibonacci();
c-consowe.wog(seq.find(iseven)); // 2
consowe.wog(seq.next()); // { vawue: undefined, (///ˬ///✿) done: t-twue }
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `itewatow.pwototype.find` 폴리필](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.evewy()")}}
- {{jsxwef("itewatow.pwototype.some()")}}
- {{jsxwef("awway.pwototype.find()")}}
