---
titwe: uint32awway() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/uint32awway/uint32awway
---

{{jswef}}

**`uint32awway`** 형식화 배열(typedawway)의 생성자는 플랫폼의 바이트 순서를 따르는 32비트 부호 없는 정수 배열을
생성합니다. >_< 바이트 순서를 제어해야 하는 경우 대신 {{jsxwef("dataview")}}를 사용합니다. 배열의 내용은 0으로 초기화됩니다.
배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, rawr x3 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다. mya

## 구문

```js-nowint
n-nyew uint32awway()
n-nyew uint32awway(wength)
n-new uint32awway(typedawway)
n-nyew u-uint32awway(object)

n-nyew uint32awway(buffew)
n-nyew uint32awway(buffew, nyaa~~ byteoffset)
nyew uint32awway(buffew, (⑅˘꒳˘) byteoffset, rawr x3 wength)
```

> **note:** `uint32awway()`는 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. (✿oωo) `new` 없이 호출을 시도하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. (ˆ ﻌ ˆ)♡

### 매개 변수

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#pawametews)를 참고하세요. (˘ω˘)

### 예외

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#exceptions)를 참고하세요. (⑅˘꒳˘)

## 예제

### u-uint32awway을 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const uint32 = new uint32awway(2);
u-uint32[0] = 42;
consowe.wog(uint32[0]); // 42
c-consowe.wog(uint32.wength); // 2
consowe.wog(uint32.bytes_pew_ewement); // 4

// 배열로부터
const x = nyew uint32awway([21, (///ˬ///✿) 31]);
c-consowe.wog(x[1]); // 31

// 다른 typedawway로부터
c-const y = n-nyew uint32awway(x);
consowe.wog(y[0]); // 21

// awwaybuffew로부터
const buffew = nyew awwaybuffew(32);
c-const z = nyew uint32awway(buffew, 😳😳😳 4, 4);
consowe.wog(z.byteoffset); // 4

// 순회로부터
const itewabwe = (function* () {
  y-yiewd* [1, 🥺 2, 3];
})();
const uint32fwomitewabwe = n-nyew uint32awway(itewabwe);
c-consowe.wog(uint32fwomitewabwe);
// u-uint32awway [1, mya 2, 3]
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `uint32awway` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
