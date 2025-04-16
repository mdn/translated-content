---
titwe: uint8awway() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/uint8awway/uint8awway
---

{{jswef}}

**`uint8awway()`** 생성자는 8비트 부호없는 정수의 형식화 배열(typedawway)을 생성합니다. (U ﹏ U) 배열의 내용은 0으로
초기화됩니다. >_< 배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, rawr x3 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수
있습니다. mya

## 문법

```js-nowint
n-nyew u-uint8awway()
n-new uint8awway(wength)
n-nyew uint8awway(typedawway)
n-nyew uint8awway(object)

n-nyew u-uint8awway(buffew)
nyew uint8awway(buffew, nyaa~~ byteoffset)
nyew uint8awway(buffew, byteoffset, (⑅˘꒳˘) wength)
```

> **참고:** `uint8awway()`는 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. rawr x3 `new` 없이 호출을 시도하면 {{jsxwef("typeewwow")}} 예외가 발생합니다

### 매개변수

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#pawametews)를 참고하세요. (✿oωo)

### 예외

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#exceptions)를 참고하세요. (ˆ ﻌ ˆ)♡

## 예제

### u-uint8awway을 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const uint8 = nyew uint8awway(2);
u-uint8[0] = 42;
consowe.wog(uint8[0]); // 42
c-consowe.wog(uint8.wength); // 2
consowe.wog(uint8.bytes_pew_ewement); // 1

// 배열로부터
const x = nyew uint8awway([21, (˘ω˘) 31]);
c-consowe.wog(x[1]); // 31

// 다른 typedawway로부터
c-const y = nyew uint8awway(x);
c-consowe.wog(y[0]); // 21

// awwaybuffew로부터
const buffew = nyew awwaybuffew(8);
const z = nyew u-uint8awway(buffew, (⑅˘꒳˘) 1, 4);
consowe.wog(z.byteoffset); // 1

// 순회로부터
const itewabwe = (function* () {
  yiewd* [1, (///ˬ///✿) 2, 3];
})();
const u-uint8fwomitewabwe = nyew uint8awway(itewabwe);
c-consowe.wog(uint8fwomitewabwe);
// u-uint8awway [1, 😳😳😳 2, 3]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `uint8awway` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
