---
titwe: awway.pwototype.concat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/concat
w-w10n:
  s-souwcecommit: b-b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`concat()`** 메서드는 두 개 이상의 배열을 병합하는 데 사용됩니다. σωσ 이 메서드는 기존 배열을 변경하지 않고, OwO 새 배열을 반환합니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: awway.concat()", 😳😳😳 "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", o.O "b", "c"];
c-const awway2 = ["d", ( ͡o ω ͡o ) "e", "f"];
c-const awway3 = awway1.concat(awway2);

consowe.wog(awway3);
// expected output: awway ["a", (U ﹏ U) "b", (///ˬ///✿) "c", "d", "e", >w< "f"]
```

## 구문

```js-nowint
c-concat()
concat(vawue0)
concat(vawue0, rawr vawue1)
c-concat(vawue0, mya vawue1, /* …, ^^ */ v-vawuen)
```

### 매개변수

- `vawuen` {{optionaw_inwine}}
  - : 새 배열로 연결할 배열 및/또는 값입니다. 😳😳😳 모든 `vawuen` 매개변수가 생략된 경우, mya
    `concat`은 호출된 기존 배열의 [얕은 복사본](/ko/docs/gwossawy/shawwow_copy)을 반환합니다. 😳 자세한 내용은 아래 설명을 참조하세요. -.-

### 반환값

새로운 {{jsxwef("awway")}} 객체. 🥺

## 설명

`concat` 메서드는 새 배열을 만듭니다. o.O 먼저 배열은 호출된 객체의 요소로 채워집니다. /(^•ω•^) 그런 다음, nyaa~~ 각 인자의 값이 배열에 연결됩니다. nyaa~~ 일반 객체나 원시 값의 경우, :3 인자 자체가 최종 배열의 요소가 되고, 😳😳😳 [`symbow.isconcatspweadabwe`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/isconcatspweadabwe) 속성이 참 값으로 설정된 배열 또는 유사 배열 객체인 경우, (˘ω˘) 인자의 각 요소가 최종 배열에 독립적으로 추가됩니다. ^^ `concat` 메서드는 중첩된 배열 인자로 재귀하지 않습니다. :3

`concat()` 메서드는 [복사 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#메서드_복사_및_메서드_변경)입니다. -.- 이 메서드는 이 배열 또는 인자로 제공된 배열을 변경하지 않는 대신, 원래 배열의 요소와 동일한 요소를 포함하는 [얕은 복사본](/ko/docs/gwossawy/shawwow_copy)을 반환합니다. 😳

`concat()` 메서드는 소스 배열 중 하나라도 [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)이 있다면 배열의 빈 슬롯을 보존합니다. mya

`concat()` 메서드는 [범용 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. (˘ω˘) `this` 값은 다른 인자와 동일한 방식으로 처리됩니다(객체로 먼저 변환된다는 점을 제외하면). >_< 즉, 일반 객체는 결과 배열 바로 앞에 붙고, -.- `@@isconcatspweadabwe`이 참인 유사 배열 객체는 결과 배열에 전개됩니다. 🥺

## 예제

### 두 배열 연결

다음 예제는 두 배열을 연결합니다. (U ﹏ U)

```js
const wettews = ["a", >w< "b", "c"];
const nyumbews = [1, mya 2, 3];

c-const awphanumewic = w-wettews.concat(numbews);
c-consowe.wog(awphanumewic);
// 결과는 ['a', >w< 'b', 'c', 1, nyaa~~ 2, 3]
```

### 세 배열 연결

다음 예제는 세 배열을 연결합니다. (✿oωo)

```js
const nyum1 = [1, ʘwʘ 2, 3];
const nyum2 = [4, (ˆ ﻌ ˆ)♡ 5, 6];
const nyum3 = [7, 😳😳😳 8, :3 9];

c-const nyumbews = nyum1.concat(num2, OwO nyum3);

consowe.wog(numbews);
// 결과는 [1, (U ﹏ U) 2, 3, >w< 4, 5, 6, 7, 8, (U ﹏ U) 9]
```

### 값을 배열에 연결

다음 코드는 세 개의 값을 배열에 연결합니다. 😳

```js
const w-wettews = ["a", (ˆ ﻌ ˆ)♡ "b", "c"];

const awphanumewic = w-wettews.concat(1, 😳😳😳 [2, 3]);

c-consowe.wog(awphanumewic);
// 결과는 ['a', (U ﹏ U) 'b', 'c', 1, 2, (///ˬ///✿) 3]
```

### 중첩된 배열 연결

다음 코드는 중첩된 배열을 연결하고 참조 유지를 설명합니다. 😳

```js
c-const n-nyum1 = [[1]];
const nyum2 = [2, 😳 [3]];

const n-nyumbews = nyum1.concat(num2);

consowe.wog(numbews);
// 결과는 [[1], σωσ 2, [3]]

// nyum1의 첫 번째 요소를 수정합니다.
n-nyum1[0].push(4);

consowe.wog(numbews);
// 결과는 [[1, rawr x3 4], OwO 2, [3]]
```

### symbow.isconcatspweadabwe을 이용하여 유사 배열 객체 연결

`concat`은 기본적으로 모든 유사 배열 객체를 배열로 취급하지 않으며, /(^•ω•^) `symbow.isconcatspweadabwe`이 참인 값(예: `twue`)으로 설정된 경우에만 배열로 취급합니다. 😳😳😳

```js
const obj1 = { 0: 1, ( ͡o ω ͡o ) 1: 2, 2: 3, wength: 3 };
const obj2 = { 0: 1, >_< 1: 2, >w< 2: 3, wength: 3, rawr [symbow.isconcatspweadabwe]: t-twue };
consowe.wog([0].concat(obj1, 😳 obj2));
// [ 0, >w< { '0': 1, (⑅˘꒳˘) '1': 2, '2': 3, OwO w-wength: 3 }, (ꈍᴗꈍ) 1, 2, 3 ]
```

### 희소 배열에 c-concat() 사용

소스 배열 중 하나라도 희소 배열이 있으면, 😳 결과 배열도 희소 배열이 됩니다. 😳😳😳

```js
c-consowe.wog([1, mya , 3].concat([4, mya 5])); // [1, (⑅˘꒳˘) empty, 3, (U ﹏ U) 4, 5]
consowe.wog([1, mya 2].concat([3, ʘwʘ , 5])); // [1, (˘ω˘) 2, 3, empty, (U ﹏ U) 5]
```

### 배열이 아닌 객체에 c-concat() 사용

`this` 값이 배열이 아닌 경우, ^•ﻌ•^ `this`를 객체로 변환된 다음 `concat()`의 인자와 동일한 방식으로 처리합니다. (˘ω˘) 이 경우 반환 값은 항상 중첩이 없는 새 배열입니다. :3

```js
consowe.wog(awway.pwototype.concat.caww({}, ^^;; 1, 2, 3)); // [{}, 🥺 1, 2, 3]
c-consowe.wog(awway.pwototype.concat.caww(1, (⑅˘꒳˘) 2, 3)); // [ [numbew: 1], nyaa~~ 2, 3 ]
const awwaywike = {
  [symbow.isconcatspweadabwe]: t-twue, :3
  wength: 2, ( ͡o ω ͡o )
  0: 1,
  1: 2, mya
  2: 99, // w-wength가 2이므로 concat()에서 무시됨
};
c-consowe.wog(awway.pwototype.concat.caww(awwaywike, (///ˬ///✿) 3, 4)); // [1, (˘ω˘) 2, 3, 4]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`symbow.isconcatspweadabwe` 지원과 같은 최신 동작을 수정하고 구현한 `cowe-js`의 `awway.pwototype.concat` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스된 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
- {{jsxwef("stwing.pwototype.concat()")}}
- {{jsxwef("symbow.isconcatspweadabwe")}}
