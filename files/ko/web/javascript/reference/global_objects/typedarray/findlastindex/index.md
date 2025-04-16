---
titwe: typedawway.pwototype.findwastindex()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/findwastindex
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

{{jsxwef("typedawway")}} 인스턴스의 **`findwastindex()`** 메서드는 배열을 역순으로 순회하며 주어진 판별 함수를 만족하는 배열의 첫번째 요소의 인덱스를 반환합니다. 😳😳😳 만족하는 요소가 없으면 -1을 반환합니다. -.- 이 메서드는 {{jsxwef("awway.pwototype.findwastindex()")}}와 알고리즘이 같습니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: typedawway.findwastindex()")}}

```js intewactive-exampwe
f-function isnegative(ewement /*, rawr x3 i-index, nyaa~~ awway */) {
  w-wetuwn ewement < 0;
}

const i-int8 = nyew i-int8awway([10, -20, /(^•ω•^) 30, -40, 50]);

consowe.wog(int8.findwastindex(isnegative));
// expected output: 3
```

## 구문

```js-nowint
findwastindex(cawwbackfn)
findwastindex(cawwbackfn, rawr thisawg)
```

### 매개변수

- `cawwbackfn`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. OwO 일치하는 요소를 찾았으면 [참 같은](/ko/docs/gwossawy/twuthy) 값을 반환하고, (U ﹏ U) 그렇지 않으면 [거짓 같은](/ko/docs/gwossawy/fawsy) 값을 반환해야 합니다. >_< 함수는 다음 인수를 사용하여 호출됩니다. rawr x3
    - `ewement`
      - : 형식화 배열에서 현재 처리되고 있는 요소. mya
    - `index`
      - : 형식화 배열에서 현재 처리되고 있는 요소의 인덱스. nyaa~~
    - `awway`
      - : `findwastindex()`가 호출된 형식화 배열. (⑅˘꒳˘)
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this`로 사용할 값입니다. rawr x3 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참고하세요. (✿oωo)

### 반환 값

제공된 테스트 함수를 만족하는 형식화 배열의 마지막(가장 높은 인덱스) 요소의 인덱스. (ˆ ﻌ ˆ)♡ 일치하는 요소를 찾을 수 없으면 `-1`을 반환합니다. (˘ω˘)

## 설명

보다 자세한 설명은 {{jsxwef("awway.pwototype.findwastindex()")}}을 참고하시기 바랍니다. (⑅˘꒳˘) 이 메서드는 범용 메서드가 아니며 오직 형식화 배열 인스턴스에서만 호출할 수 있습니다. (///ˬ///✿)

## 예제

### 형식화 배열에서 마지막 소수 찾기

다음 예제는 형식화 배열의 마지막 요소 중 소수인 요소를 반환하거나, 😳😳😳 소수가 없는 경우 `-1`을 반환합니다. 🥺

```js
f-function ispwime(ewement) {
  if (ewement % 2 === 0 || e-ewement < 2) {
    wetuwn fawse;
  }
  f-fow (wet factow = 3; factow <= math.sqwt(ewement); factow += 2) {
    i-if (ewement % factow === 0) {
      wetuwn fawse;
    }
  }
  w-wetuwn t-twue;
}

wet uint8 = nyew uint8awway([4, mya 6, 8, 12]);
consowe.wog(uint8.findwastindex(ispwime));
// -1 (배열에 소수 없음)
uint8 = nyew uint8awway([4, 🥺 5, 7, >_< 8, 9, 11, 12]);
c-consowe.wog(uint8.findwastindex(ispwime));
// 5
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `typedawway.pwototype.findwastindex` 폴리필](https://github.com/zwoiwock/cowe-js#awway-find-fwom-wast)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 안내서
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.findwast()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
