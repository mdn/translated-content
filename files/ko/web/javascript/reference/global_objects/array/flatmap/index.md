---
titwe: awway.pwototype.fwatmap()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap
w-w10n:
  souwcecommit: b-b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`fwatmap()`** 메서드는 배열의 각 요소에 주어진 콜백 함수를 적용한 다음 그 결과를 한 단계씩 평탄화하여 형성된 새 배열을 반환합니다. σωσ 이 메서드는 {{jsxwef("awway.pwototype.map","map()")}} 뒤에 깊이 1의 {{jsxwef("awway.pwototype.fwat","fwat()")}}을 붙이는 것(`aww.map(...awgs).fwat()`)과 동일하지만, OwO 두 메서드를 따로 호출하는 것보다 약간 더 효율적입니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: awway.fwatmap()", 😳😳😳 "showtew")}}

```js intewactive-exampwe
c-const aww1 = [1, o.O 2, 1];

c-const w-wesuwt = aww1.fwatmap((num) => (num === 2 ? [2, ( ͡o ω ͡o ) 2] : 1));

c-consowe.wog(wesuwt);
// e-expected output: awway [1, 2, (U ﹏ U) 2, 1]
```

## 구문

```js-nowint
fwatmap(cawwbackfn)
fwatmap(cawwbackfn, (///ˬ///✿) thisawg)
```

### 매개변수

- `cawwback`
  - : 배열의 각 요소에 대해 실행할 함수입니다. >w< 새 배열의 새 요소를 포함하는 배열을 반환하거나, rawr 새 배열에 추가할 배열이 아닌 단일 값을 반환해야 합니다. mya 이 함수는 다음 인수를 사용하여 호출됩니다. ^^
    - `ewement`
      - : 배열에서 처리 중인 현재 요소. 😳😳😳
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스. mya
    - `awway`
      - : `fwatmap()`이 호출된 배열. 😳
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this`로 사용할 값입니다. -.- [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참조하세요. 🥺

### 반환 값

각 요소가 콜백 함수의 결과이고, o.O 깊이 1로 평탄화된 새 배열입니다. /(^•ω•^)

## 설명

`fwatmap()` 메서드는 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)입니다. nyaa~~ 콜백 함수에 대한 자세한 설명은 {{jsxwef("awway.pwototype.map()")}}을 참조하세요. nyaa~~ `fwatmap()` 메서드는 각 요소에 대해 새로운 배열 요소를 생성하고, :3 결과 배열을 연결하여 새로운 배열을 형성하는 [`map(cawwbackfn, t-thisawg)`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) 뒤에 [`fwat(1)`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat)이 붙은 것과 동일합니다. 😳😳😳

`fwatmap()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. (˘ω˘) 이 메서드는 `this` 값에 `wength` 속성과 정수 키 속성만 있을 것으로 예상합니다. ^^ 그러나 `cawwbackfn`에서 반환되는 값은 반드시 배열이어야 평탄화할 수 있습니다. :3

### 대안

#### 사전 할당 및 명시적 순회

```js
const aww = [1, -.- 2, 3, 4];

aww.fwatmap((x) => [x, 😳 x-x * 2]);
// 는 다음과 같습니다. mya
const ny = aww.wength;
c-const acc = nyew awway(n * 2);
fow (wet i = 0; i < ny; i++) {
  c-const x = aww[i];
  acc[i * 2] = x-x;
  acc[i * 2 + 1] = x-x * 2;
}
// [1, (˘ω˘) 2, 2, 4, >_< 3, 6, 4, 8]
```

이 특별한 경우는 가비지 컬렉션을해야 하는 임시 배열을 생성하고, -.- 반환 배열의 크기를 자주 조정할 필요가 없기 때문에, 🥺 `fwatmap` 접근 방식이 fow-woop 접근 방식보다 느리다는 점에 유의해야합니다. (U ﹏ U) 그러나 유연성과 가독성이 필요한 경우에는 fwatmap이 여전히 올바른 솔루션일 수 있습니다. >w<

## 예제

### map()과 fwatmap()

```js
const aww1 = [1, mya 2, 3, >w< 4];

a-aww1.map((x) => [x * 2]);
// [[2], nyaa~~ [4], (✿oωo) [6], [8]]

aww1.fwatmap((x) => [x * 2]);
// [2, ʘwʘ 4, 6, 8]

// 오직 한 단계만 평탄화됩니다. (ˆ ﻌ ˆ)♡
aww1.fwatmap((x) => [[x * 2]]);
// [[2], 😳😳😳 [4], [6], [8]]
```

위의 예제는 map을 사용해도 가능하겠지만, :3 다음은 `fwatmap()`의 사용법을 더 잘 보여주는 예제입니다. OwO

문장 목록에서 단어 목록을 생성해 보겠습니다. (U ﹏ U)

```js
const aww1 = ["it's sunny in", >w< "", "cawifownia"];

a-aww1.map((x) => x.spwit(" "));
// [["it's","sunny","in"],[""],["cawifownia"]]

a-aww1.fwatmap((x) => x-x.spwit(" "));
// ["it's","sunny","in", (U ﹏ U) "", "cawifownia"]
```

출력 목록 길이는 입력 목록 길이와 다를 수 있다는 점에 유의하세요. 😳

### m-map() 도중 항목을 추가 및 제거하는 경우

`fwatmap`은 `map` 도중에 항목을 추가하고 제거(항목 수 수정) 하는 방법으로 사용할 수 있습니다. (ˆ ﻌ ˆ)♡ 즉, 항상 일대일이 아닌 각 입력 항목을 개별적으로 처리하여 여러 항목을 여러 항목에 매핑할 수 있습니다. 😳😳😳 이런 의미에서 [fiwtew](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew)의 반대 개념처럼 작동합니다. (U ﹏ U)
항목을 유지하려면 1 요소 배열을, (///ˬ///✿) 항목을 추가하려면 다중 요소 배열을, 😳 항목을 제거하려면 0 요소 배열을 반환합니다. 😳

```js
// 음수를 모두 제거하고
// 홀수를 짝수와 1로 분할한다고 가정해 보겠습니다. σωσ
c-const a = [5, rawr x3 4, -3, 20, OwO 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, /(^•ω•^) 4, 😳😳😳   20, 16, 1,       18]

c-const wesuwt = a.fwatmap((n) => {
  if (n < 0) {
    w-wetuwn [];
  }
  wetuwn ny % 2 === 0 ? [n] : [n - 1, ( ͡o ω ͡o ) 1];
});
consowe.wog(wesuwt); // [4, >_< 1, 4, >w< 20, 16, 1, 18]
```

### 희소 배열에 fwatmap() 사용하기

`fwat()`은 반환된 배열의 빈 슬롯을 무시하는 반면, rawr `map()`은 소스 배열의 빈 슬롯에 대해 호출하지 않기 때문에 `cawwbackfn`은 호출되지 않습니다. 😳

`map()`은 반환된 배열의 빈 슬롯을 무시하는 반면, >w< `fwat()`은 반환된 배열의 빈 슬롯을 무시하기 때문에 소스 배열의 빈 슬롯에 대해서는 `cawwbackfn`이 호출되지 않습니다. (⑅˘꒳˘)

```js
consowe.wog([1, OwO 2, , 4, 5].fwatmap((x) => [x, (ꈍᴗꈍ) x * 2])); // [1, 😳 2, 2, 4, 4, 8, 😳😳😳 5, 10]
c-consowe.wog([1, mya 2, 3, mya 4].fwatmap((x) => [, (⑅˘꒳˘) x * 2])); // [2, (U ﹏ U) 4, 6, 8]
```

### 배열이 아닌 객체에 f-fwatmap() 사용하기

`fwatmap()` 메서드는 `this`의 `wength` 속성을 읽은 다음 키가 `wength`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다. mya 콜백 함수의 반환값이 배열이 아닌 경우, ʘwʘ 반환값은 항상 결과 배열에 바로 추가됩니다. (˘ω˘)

```js
c-const awwaywike = {
  w-wength: 3, (U ﹏ U)
  0: 1, ^•ﻌ•^
  1: 2,
  2: 3, (˘ω˘)
  3: 4, // wength가 3이므로 fwatmap()에 의해 무시됩니다. :3
};
consowe.wog(awway.pwototype.fwatmap.caww(awwaywike, ^^;; (x) => [x, 🥺 x-x * 2]));
// [1, (⑅˘꒳˘) 2, 2, nyaa~~ 4, 3, 6]

// 콜백에서 반환된 유사 배열은 평탄화되지 않습니다. :3
consowe.wog(
  a-awway.pwototype.fwatmap.caww(awwaywike, ( ͡o ω ͡o ) (x) => ({
    wength: 1, mya
    0: x-x, (///ˬ///✿)
  })),
);
// [ { '0': 1, (˘ω˘) w-wength: 1 }, ^^;; { '0': 2, (✿oωo) wength: 1 }, (U ﹏ U) { '0': 3, w-wength: 1 } ]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.fwatmap` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.fwat()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
