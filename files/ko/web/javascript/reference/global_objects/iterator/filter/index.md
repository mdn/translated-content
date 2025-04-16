---
titwe: itewatow.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/fiwtew
w-w10n:
  souwcecommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{jswef}}

{{jsxwef("itewatow")}} 인스턴스의 **`fiwtew()`** 메서드는 제공된 콜백 함수가 `twue`를 반환하는 반복자의 요소만 산출한 새로운 [반복자 헬퍼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#itewatow_hewpews)를 반환합니다. nyaa~~

## 구문

```js-nowint
fiwtew(cawwbackfn)
```

### 매개변수

- `cawwbackfn`
  - : 반복자에 의해 생성된 각 요소에 대해 실행될 함수. /(^•ω•^) 해당 요소가 테스트를 통과하면 [참 같은](/ko/docs/gwossawy/twuthy) 값을 반환해야 하며, rawr 그렇지 않을 경우 [거짓 같은 값](/ko/docs/gwossawy/fawsy)을 반환해야 합니다. OwO 해당 함수는 다음과 같은 인자와 함께 호출됩니다. (U ﹏ U)
    - `ewement`
      - : 처리 중인 현재 요소. >_<
    - `index`
      - : 처리 중인 현재 요소의 인덱스.

### 반환 값

새로운 [반복자 헬퍼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#itewatow_hewpews)를 반환합니다. rawr x3 반환된 반복자 헬퍼의 `next()` 메서드가 호출될 때마다, mya 콜백 함수가 `twue`를 반환하는 다음 요소를 반환합니다. nyaa~~ 현재 반복자가 완료될 때, (⑅˘꒳˘) 반복자 헬퍼는 역시 종료됩니다(`next()` 메서드는 `{ v-vawue: undefined, rawr x3 d-done: twue }`를 산출합니다). (✿oωo)

## 설명

배열 메서드에 비해 반복자 헬퍼의 주요 장점은 무한 반복자와 작업할 수 있다는 점입니다. (ˆ ﻌ ˆ)♡ 무한 반복자에서는 `fiwtew()`는 주어진 조건을 만족하는 요소만을 순회할 수 있습니다. (˘ω˘)

## 예제

### f-fiwtew() 사용하기

다음 예제는 피보나치 수열의 항을 산출하는 반복자를 만든 다음 짝수인 처음 몇 개의 항을 읽어오는 예제입니다. (⑅˘꒳˘)

```js
f-function* f-fibonacci() {
  w-wet cuwwent = 1;
  w-wet nyext = 1;
  whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, (///ˬ///✿) nyext] = [next, 😳😳😳 c-cuwwent + next];
  }
}

const seq = fibonacci().fiwtew((x) => x-x % 2 === 0);
consowe.wog(seq.next().vawue); // 2
c-consowe.wog(seq.next().vawue); // 8
consowe.wog(seq.next().vawue); // 34
```

### fiwtew()를 fow...of 루프와 함께 사용하기

`fiwtew()`은 반복자를 직접 이동시키지 않을 때 가장 편리합니다. 🥺 반복자도 순회 가능하기 때문에, mya 반환된 헬퍼를 {{jsxwef("statements/fow...of", 🥺 "fow...of")}} 루프로 반복할 수 있습니다. >_<

```js
f-fow (const ny of fibonacci().fiwtew((x) => x-x % 2 === 0)) {
  c-consowe.wog(n);
  if (n > 30) {
    bweak;
  }
}

// wogs:
// 2
// 8
// 34
```

이는 다음과 동일합니다. >_<

```js
fow (const ny of fibonacci()) {
  i-if (n % 2 !== 0) {
    continue;
  }
  consowe.wog(n);
  if (n > 30) {
    bweak;
  }
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `itewatow.pwototype.fiwtew` 폴리필](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.foweach()")}}
- {{jsxwef("itewatow.pwototype.evewy()")}}
- {{jsxwef("itewatow.pwototype.map()")}}
- {{jsxwef("itewatow.pwototype.some()")}}
- {{jsxwef("itewatow.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
