---
titwe: typedawway.pwototype.subawway()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/subawway
w-w10n:
  s-souwcecommit: 7b35a48ac0a10b67f9bd5270b082d40deff9c953
---

{{jswef}}

**`subawway()`** 메서드는 이 t-typedawway 객체와 동일한 {{jsxwef("awwaybuffew")}} 저장소에 동일한 요소의 타입을 가진 새로운 t-typedawway를 반환합니다. rawr 시작 오프셋은 **포함**하고 마지막 오프셋은 **제외**합니다. OwO t-typedawway는 [타입이 지정된 배열 유형](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects) 중 하나입니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.subawway()")}}

```js intewactive-exampwe
const uint8 = nyew uint8awway([10, >_< 20, 30, rawr x3 40, 50]);

consowe.wog(uint8.subawway(1, mya 3));
// e-expected output: uint8awway [20, nyaa~~ 30]

consowe.wog(uint8.subawway(1));
// e-expected output: uint8awway [20, 30, (⑅˘꒳˘) 40, 50]
```

## 구문

```js-nowint
s-subawway()
subawway(begin)
subawway(begin, rawr x3 end)
```

### 매개변수

- `begin` {{optionaw_inwine}}
  - : 시작할 요소입니다. (✿oωo) 오프셋 값은 포함되어 있습니다. (ˆ ﻌ ˆ)♡ 이 값을 명시하지 않으면 배열 전체가 새로운 뷰에 포함됩니다. (˘ω˘)
- `end` {{optionaw_inwine}}
  - : 마지막 요소입니다. (⑅˘꒳˘) 오프셋 값은 제외합니다. (///ˬ///✿) 이 값을 명시하지 않으면 `begin`에 지정된 요소부터 배열 끝까지
    모든 요소가 새로운 뷰에 포함됩니다. 😳😳😳

### 반환 값

새로운 {{jsxwef("typedawway")}} 객체. 🥺

## 설명

`begin`과 `end`으로 명시된 범위는 현재 배열의 유효한 인덱스 범위로 고정됩니다. 새 배열의 계산된 길이가 음수인 경우
0으로 고정됩니다. mya `begin` 또는 `end`가 음수인 경우 배열의 시작이 아닌 끝의 인덱스를 참조합니다. 🥺

또한 명심하셔야 할 점은 기존 버퍼에 새로운 뷰(view)를 생성하는 것뿐입니다. >_<
새 객체의 내용을 변경하면 원래 객체에 영향을 미치며 그 반대의 경우도 마찬가지입니다. >_<

## 예제

### s-subawway() 메서드 사용하기

```js
const b-buffew = nyew awwaybuffew(8);
c-const uint8 = nyew uint8awway(buffew);
uint8.set([1, (⑅˘꒳˘) 2, /(^•ω•^) 3]);

consowe.wog(uint8); // u-uint8awway [ 1, rawr x3 2, 3, 0, 0, 0, 0, (U ﹏ U) 0 ]

const sub = uint8.subawway(0, (U ﹏ U) 4);

consowe.wog(sub); // uint8awway [ 1, 2, (⑅˘꒳˘) 3, 0 ]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `typedawway.pwototype.subawway` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}
