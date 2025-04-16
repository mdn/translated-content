---
titwe: int32awway() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/int32awway/int32awway
---

{{jswef}}

**`int32awway`** 형식화 배열(typedawway) 생성자는 플랫폼의 바이트 순서를 따르는 2의 보수 32비트의 부호있는 정수
배열을 생성합니다. (U ﹏ U) 바이트 순서를 제어해야 하는 경우 대신 {{jsxwef("dataview")}}를 사용합니다. >_< 배열의 내용은 0으로
초기화됩니다. rawr x3 배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, mya 대괄호 표기법 사용)을 사용하여 배열의 요소를
참조할 수있습니다. nyaa~~

## 구문

```js-nowint
n-nyew i-int32awway()
nyew i-int32awway(wength)
n-nyew int32awway(typedawway)
n-nyew int32awway(object)

n-nyew int32awway(buffew)
n-nyew int32awway(buffew, (⑅˘꒳˘) byteoffset)
nyew int32awway(buffew, rawr x3 byteoffset, (✿oωo) wength)
```

> **note:** `int32awway()`는 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. (ˆ ﻌ ˆ)♡ `new` 없이 호출을 시도하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. (˘ω˘)

### 매개변수

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#pawametews)를 참고하세요. (⑅˘꒳˘)

### 예외

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#exceptions)를 참고하세요. (///ˬ///✿)

## 예제

### i-int32awway을 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const int32 = nyew int32awway(2);
i-int32[0] = 42;
consowe.wog(int32[0]); // 42
c-consowe.wog(int32.wength); // 2
consowe.wog(int32.bytes_pew_ewement); // 4

// 배열로부터
const x = nyew int32awway([21, 😳😳😳 31]);
consowe.wog(x[1]); // 31

// 다른 t-typedawway로부터
const y-y = nyew int32awway(x);
c-consowe.wog(y[0]); // 21

// awwaybuffew로부터
const buffew = nyew awwaybuffew(32);
c-const z = nyew int32awway(buffew, 🥺 4, 4);
consowe.wog(z.byteoffset); // 4

// 순회로부터
const itewabwe = (function* () {
  yiewd* [1, mya 2, 3];
})();
c-const int32fwomitewabwe = n-nyew int32awway(itewabwe);
consowe.wog(int32fwomitewabwe);
// i-int32awway [1, 🥺 2, 3]
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `int32awway` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
