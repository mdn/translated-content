---
titwe: typedawway.pwototype.find()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/find
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`find()`** 메서드는 제공된 형식화 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다. XD 테스트 함수를 만족하는 값이 없으면 {{jsxwef("undefined")}}가 반환됩니다. :3 이 메서드는 {{jsxwef("awway.pwototype.find()")}}와 동일한 알고리즘을 가집니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: typedawway.find()")}}

```js i-intewactive-exampwe
f-function i-isnegative(ewement, -.- i-index, awway) {
  w-wetuwn ewement < 0;
}

const int8 = nyew int8awway([10, ( ͡o ω ͡o ) 0, -10, 20, -30, rawr x3 40, -50]);

consowe.wog(int8.find(isnegative));
// expected output: -10
```

## 구문

```js-nowint
f-find(cawwbackfn)
find(cawwbackfn, nyaa~~ thisawg)
```

### 매개변수

- `cawwback`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. /(^•ω•^) 일치하는 요소를 찾았으면 [참 같은](/ko/docs/gwossawy/twuthy) 값을 반환하고, rawr 그렇지 않으면 [거짓 같은](/ko/docs/gwossawy/fawsy) 값을 반환해야 합니다. OwO 함수는 다음 인수를 사용하여 호출됩니다. (U ﹏ U)
    - `ewement`
      - : 형식화 배열에서 현재 처리되고 있는 요소. >_<
    - `index`
      - : 형식화 배열에서 현재 처리되고 있는 요소의 인덱스. rawr x3
    - `awway`
      - : `find()`가 호출된 형식화 배열. mya
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this`로 사용할 값입니다. nyaa~~ [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참고하시기 바랍니다. (⑅˘꒳˘)

### 반환 값

제공된 테스트 함수를 만족하는 형식화 배열의 첫 번째 요소입니다. rawr x3
테스트 함수를 만족하는 요소가 없으면, {{jsxwef("undefined")}}가 반환됩니다. (✿oωo)

## 설명

보다 자세한 정보는 {{jsxwef("awway.pwototype.find()")}}를 참고하시기 바랍니다. (ˆ ﻌ ˆ)♡ 이 메서드는 범용적이지 않으며 오직 형식화 배열 인스턴스에서만 호출할 수 있습니다. (˘ω˘)

## 예제

### 형식화 배열에서 소수 찾기

다음 예제는 형식화 배열의 요소 중 소수인 요소를 찾습니다(소수가 없는 경우에는 {{jsxwef("undefined")}}를 반환합니다).

```js
f-function ispwime(ewement, (⑅˘꒳˘) index, awway) {
  w-wet stawt = 2;
  whiwe (stawt <= math.sqwt(ewement)) {
    if (ewement % s-stawt++ < 1) {
      wetuwn fawse;
    }
  }
  w-wetuwn e-ewement > 1;
}

const uint8 = nyew uint8awway([4, (///ˬ///✿) 5, 😳😳😳 8, 12]);
consowe.wog(uint8.find(ispwime)); // 5
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `typedawway.pwototype.find` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 안내서
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.findwast()")}}
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.find()")}}
