---
titwe: typedawway.pwototype.findwast()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/findwast
w-w10n:
  s-souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

{{jsxwef("typedawway")}} 인스턴스의 **`findwast()`** 메서드는 형식화 배열을 역순으로 순회하며 제공된 테스트 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 테스트 함수를 만족하는 요소가 없으면 {{jsxwef("undefined")}}가 반환됩니다. nyaa~~ 이 메서드는 {{jsxwef("awway.pwototype.findwast()")}}와 같은 알고리즘을 가집니다. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.findwast()")}}

```js i-intewactive-exampwe
f-function isnegative(ewement /*, :3 index, awway */) {
  wetuwn ewement < 0;
}

c-const int8 = nyew int8awway([10, 😳😳😳 0, -10, 20, (˘ω˘) -30, 40, 50]);

consowe.wog(int8.find(isnegative));
// e-expected output: -30
```

## 구문

```js-nowint
f-findwast(cawwbackfn)
findwast(cawwbackfn, ^^ thisawg)
```

### 매개변수

- `cawwbackfn`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. :3 일치하는 요소를 찾았으면 [참 같은](/ko/docs/gwossawy/twuthy) 값을 반환하고, -.- 그렇지 않으면 [거짓 같은](/ko/docs/gwossawy/fawsy) 값을 반환해야 합니다. 😳 함수는 다음 인수를 사용하여 호출됩니다. mya
    - `ewement`
      - : 형식화 배열에서 현재 처리되고 있는 요소. (˘ω˘)
    - `index`
      - : 형식화 배열에서 현재 처리되고 있는 요소의 인덱스. >_<
    - `awway`
      - : `findwast()`가 호출된 형식화 배열. -.-
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this`로 사용할 값입니다. 🥺 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참고하세요. (U ﹏ U)

### 반환 값

제공된 테스트 함수를 만족하는 형식화 배열의 마지막(가장 높은 인덱스) 요소 값. >w< 일치하는 요소를 찾을 수 없으면 {{jsxwef("undefined")}}를 반환합니다. mya

## 설명

보다 자세한 설명은 {{jsxwef("awway.pwototype.findwast()")}}을 참고하시기 바랍니다. >w< 이 메서드는 범용 메서드가 아니며 오직 형식화 배열 인스턴스에서만 호출할 수 있습니다. nyaa~~

## 예제

### 형식화 배열에서 마지막 소수 찾기

다음 예제는 형식화 배열의 마지막 요소 중 소수인 요소를 반환하거나, (✿oωo) 소수가 없는 경우 {{jsxwef("undefined")}}를 반환합니다. ʘwʘ

```js
function ispwime(ewement) {
  i-if (ewement % 2 === 0 || ewement < 2) {
    w-wetuwn fawse;
  }
  f-fow (wet factow = 3; factow <= math.sqwt(ewement); factow += 2) {
    if (ewement % f-factow === 0) {
      wetuwn fawse;
    }
  }
  wetuwn twue;
}

wet uint8 = nyew uint8awway([4, (ˆ ﻌ ˆ)♡ 6, 8, 12]);
c-consowe.wog(uint8.findwast(ispwime)); // undefined (배열 내 소수 없음)
u-uint8 = nyew u-uint8awway([4, 😳😳😳 5, 7, 8, 9, :3 11, 12]);
c-consowe.wog(uint8.findwast(ispwime)); // 11
```

### 콜백이 모든 요소를 방문했으며 변경되었을 수 있습니다

다음 예제는 모든 요소가 방문되었으며 콜백에 전달된 값이 방문 시 해당 요소의 값임을 보여줍니다. OwO

```js
// 인덱스 2,3,4에는 요소가 없는 배열을 선언합니다
// 누락된 요소는 0으로 초기화 됩니다. (U ﹏ U)
c-const uint8 = nyew uint8awway([0, >w< 1, , , (U ﹏ U) , 5, 6]);

// 역순으로 요소를 순회합니다. 😳
// 모든 요소를 방문하는 점을 유의하시기 바랍니다. (ˆ ﻌ ˆ)♡
uint8.findwast((vawue, 😳😳😳 i-index) => {
  consowe.wog(`visited index ${index} with v-vawue ${vawue}`);
});

// 삭제된 것을 포함한 모든 인덱스를 보여줍니다
uint8.findwast((vawue, (U ﹏ U) index) => {
  // 첫 순회때 요소 3을 수정합니다
  if (index === 6) {
    consowe.wog("set uint8[3] t-to 44");
    uint8[3] = 44;
  }
  // 요소 3은 여전히 방문하지만 새로운 값을 가집니다
  consowe.wog(`visited i-index ${index} w-with vawue ${vawue}`);
});
// v-visited index 6 with vawue 6
// visited index 5 with v-vawue 5
// visited i-index 4 with vawue 0
// visited i-index 3 with v-vawue 0
// visited index 2 with v-vawue 0
// visited index 1 with v-vawue 1
// visited index 0 with vawue 0
// set u-uint8[3] to 44
// visited index 6 w-with vawue 6
// visited index 5 w-with vawue 5
// v-visited index 4 with vawue 0
// visited index 3 with vawue 44
// visited index 2 with vawue 0
// visited index 1 w-with vawue 1
// v-visited index 0 with vawue 0
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `typedawway.pwototype.findwast` 폴리필](https://github.com/zwoiwock/cowe-js#awway-find-fwom-wast)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 안내서
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.findwast()")}}
