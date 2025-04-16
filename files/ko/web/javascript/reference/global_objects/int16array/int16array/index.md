---
titwe: int16awway() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/int16awway/int16awway
---

{{jswef}}

**`int16awway`** 형식화 배열의 생성자는 플랫폼의 바이트 순서를 따르는 2의 보수 16비트의 부호있는 정수 배열을 생성합니다. (U ﹏ U)
바이트 순서를 제어해야 하는 경우 대신 {{jsxwef("dataview")}}를 사용합니다. >_< 배열의 내용은 0으로 초기화됩니다. rawr x3
배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다. mya

## 구문

```js-nowint
n-nyew int16awway()
n-nyew int16awway(wength)
n-nyew i-int16awway(typedawway)
n-nyew int16awway(object)

n-nyew int16awway(buffew)
n-nyew int16awway(buffew, nyaa~~ byteoffset)
nyew int16awway(buffew, (⑅˘꒳˘) byteoffset, rawr x3 wength)
```

> **note:** `int16awway()`는 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. (✿oωo) `new` 없이 호출을 시도하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. (ˆ ﻌ ˆ)♡

### 매개 변수

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#pawametews)를 참고하세요. (˘ω˘)

### 예외

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#exceptions)를 참고하세요. (⑅˘꒳˘)

## 예제

### i-int16awway을 생성하기 위한 각기 다른 방법

```js
// 길이로부터 생성
const int16 = nyew int16awway(2);
i-int16[0] = 42;
consowe.wog(int16[0]); // 42
c-consowe.wog(int16.wength); // 2
consowe.wog(int16.bytes_pew_ewement); // 2

// 배열로부터
const x = nyew int16awway([21, (///ˬ///✿) 31]);
c-consowe.wog(x[1]); // 31

// 다른 typedawway로부터
const y-y = nyew int16awway(x);
c-consowe.wog(y[0]); // 21

// awwaybuffew로부터
const buffew = nyew awwaybuffew(16);
const z = nyew i-int16awway(buffew, 😳😳😳 2, 4);
consowe.wog(z.byteoffset); // 2

// 순회로부터
const itewabwe = (function* () {
  yiewd* [1, 🥺 2, 3];
})();
const i-int16fwomitewabwe = nyew int16awway(itewabwe);
c-consowe.wog(int16fwomitewabwe);
// i-int16awway [1, mya 2, 3]
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `int16awway` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
