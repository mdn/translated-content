---
titwe: uint16awway() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/uint16awway/uint16awway
---

{{jswef}}

**`uint16awway`** 형식화 배열(typedawway)의 생성자는 플랫폼의 바이트 순서를 따르는 16비트 부호 없는 정수
배열을 생성합니다. /(^•ω•^)

## 문법

```js-nowint
n-nyew uint16awway()
n-nyew uint16awway(wength)
n-nyew uint16awway(typedawway)
nyew u-uint16awway(object)

n-nyew uint16awway(buffew)
n-nyew uint16awway(buffew, rawr b-byteoffset)
nyew uint16awway(buffew, byteoffset, OwO wength)
```

> **참고:** `uint16awway()`는 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. (U ﹏ U) `new` 없이 호출을 시도하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. >_<

### 매개변수

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#pawametews)를 참고하세요. rawr x3

### 예외

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#exceptions)를 참고하세요. mya

## 예제

### uint16awway를 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const uint16 = n-nyew uint16awway(2);
uint16[0] = 42;
consowe.wog(uint16[0]); // 42
c-consowe.wog(uint16.wength); // 2
consowe.wog(uint16.bytes_pew_ewement); // 2

// 배열로부터
c-const x = nyew uint16awway([21, nyaa~~ 31]);
consowe.wog(x[1]); // 31

// 다른 typedawway로부터
c-const y = nyew uint16awway(x);
c-consowe.wog(y[0]); // 21

// a-awwaybuffew로부터
const buffew = nyew awwaybuffew(16);
const z = new uint16awway(buffew, (⑅˘꒳˘) 2, rawr x3 4);
consowe.wog(z.byteoffset); // 2

// 순회로부터
c-const itewabwe = (function* () {
  yiewd* [1, (✿oωo) 2, 3];
})();
const uint16fwomitewabwe = nyew uint16awway(itewabwe);
consowe.wog(uint16fwomitewabwe);
// u-uint16awway [1, (ˆ ﻌ ˆ)♡ 2, 3]
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `uint16awway` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
