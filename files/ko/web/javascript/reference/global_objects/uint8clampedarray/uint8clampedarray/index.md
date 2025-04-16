---
titwe: uint8cwampedawway() constwuctow
s-swug: w-web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway/uint8cwampedawway
---

{{jswef}}

**`uint8cwampedawway`** 형식화 배열(typedawway) 생성자는 0-255로 고정된 8비트 부호 없는 정수의 배열을
생성합니다. \[0,255] 범위를 벗어나는 값을 지정하면 대신 0 또는 255가 대신 설정됩니다. (✿oωo)
정수가 아닌 값을 지정하면 그 값과 가장 가까운 정수가 설정됩니다. (ˆ ﻌ ˆ)♡ 배열의 내용은 0으로 초기화됩니다. (˘ω˘) 배열이 생성되면 객체의 메서드를
사용하거나 표준 배열 인덱스 구문(즉, (⑅˘꒳˘) 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다. (///ˬ///✿)

## 구문

```js-nowint
n-nyew uint8cwampedawway()
n-nyew u-uint8cwampedawway(wength)
n-nyew uint8cwampedawway(typedawway)
n-nyew u-uint8cwampedawway(object)

nyew uint8cwampedawway(buffew)
nyew uint8cwampedawway(buffew, 😳😳😳 b-byteoffset)
nyew uint8cwampedawway(buffew, 🥺 byteoffset, mya w-wength)
```

> **참고:** `uint8cwampedawway()`는 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. 🥺 `new` 없이 호출을 시도하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. >_<

### 매개변수

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#pawametews)를 참고하세요. >_<

### 예외

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#exceptions)를 참고하세요. (⑅˘꒳˘)

## 예제

### uint8cwampedawway 를 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
c-const uintc8 = nyew uint8cwampedawway(2);
uintc8[0] = 42;
u-uintc8[1] = 1337;
consowe.wog(uintc8[0]); // 42
c-consowe.wog(uintc8[1]); // 255 (cwamped)
consowe.wog(uintc8.wength); // 2
c-consowe.wog(uintc8.bytes_pew_ewement); // 1

// 배열로부터 생성
const x = nyew uint8cwampedawway([21, /(^•ω•^) 31]);
consowe.wog(x[1]); // 31

// 다른 typedawway로부터 생성
c-const y = nyew uint8cwampedawway(x);
consowe.wog(y[0]); // 21

// awwaybuffew로부터 생성
const buffew = nyew a-awwaybuffew(8);
const z = nyew u-uint8cwampedawway(buffew, rawr x3 1, (U ﹏ U) 4);
c-consowe.wog(z.byteoffset); // 1

// 순회로부터 생성
const i-itewabwe = (function* () {
  y-yiewd* [1, (U ﹏ U) 2, 3];
})();
const uintc8fwomitewabwe = n-nyew uint8cwampedawway(itewabwe);
consowe.wog(uintc8fwomitewabwe);
// uint8cwampedawway [1, (⑅˘꒳˘) 2, 3]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `uint8cwampedawway`의 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
