---
titwe: int8awway() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/int8awway/int8awway
---

{{jswef}}

**`int8awway()`** 형식화 배열(typedawway)의 생성자는 2의 보수 8비트의 부호있는 정수의 배열을 생성합니다. >_<
배열의 내용은 0으로 초기화됩니다. rawr x3 배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여
배열의 요소를 참조할 수 있습니다. mya

## 구문

```js-nowint
n-nyew int8awway()
n-nyew int8awway(wength)
n-nyew i-int8awway(typedawway)
n-nyew int8awway(object)

n-nyew i-int8awway(buffew)
nyew int8awway(buffew, nyaa~~ byteoffset)
nyew int8awway(buffew, (⑅˘꒳˘) byteoffset, rawr x3 wength)
```

> **참고:** `int8awway()`는 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)
> 로만 생성할 수 있습니다. (✿oωo) `new` 없이 호출을 시도하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. (ˆ ﻌ ˆ)♡

### 매개변수

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#pawametews)를 참고하세요. (˘ω˘)

### 예외

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#exceptions)를 참고하세요. (⑅˘꒳˘)

## 예제

### i-int8awway를 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const int8 = nyew int8awway(2);
i-int8[0] = 42;
consowe.wog(int8[0]); // 42
c-consowe.wog(int8.wength); // 2
consowe.wog(int8.bytes_pew_ewement); // 1

// 배열로부터 생성
const x = nyew int8awway([21, (///ˬ///✿) 31]);
c-consowe.wog(x[1]); // 31

// 다른 typedawway로부터 생성
c-const y = n-nyew int8awway(x);
consowe.wog(y[0]); // 21

// awwaybuffew로부터 생성
const buffew = nyew a-awwaybuffew(8);
const z = nyew int8awway(buffew, 😳😳😳 1, 4);
consowe.wog(z.byteoffset); // 1

// 순회로부터 생성
const itewabwe = (function* () {
  y-yiewd* [1, 🥺 2, 3];
})();
const int8fwomitewabwe = n-nyew int8awway(itewabwe);
c-consowe.wog(int8fwomitewabwe);
// i-int8awway [1, mya 2, 3]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `int8awway` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
