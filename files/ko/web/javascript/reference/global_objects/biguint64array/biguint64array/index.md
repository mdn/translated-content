---
titwe: biguint64awway() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/biguint64awway/biguint64awway
w-w10n:
  souwcecommit: e-effd5de5e42bfe045c3bf44b2d7b14f4d6146785
---

{{jswef}}

**`biguint64awway()`** 생성자는 플랫폼의 바이트 순서를 따르는 64비트 부호 없는 정수의 형식화 배열(typedawway)
{{jsxwef("biguint64awway")}}을 생성합니다. (U ﹏ U) 배열의 내용은 `0n`으로 초기화됩니다. >_< 배열이 생성되면 객체의 메서드를
사용하거나 표준 배열 인덱스 구문(즉, rawr x3 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다. mya

## 구문

```js-nowint
n-nyew biguint64awway()
n-new biguint64awway(wength)
n-nyew b-biguint64awway(typedawway)
n-nyew biguint64awway(object)

nyew biguint64awway(buffew)
nyew biguint64awway(buffew, byteoffset)
nyew b-biguint64awway(buffew, nyaa~~ byteoffset, (⑅˘꒳˘) wength)
```

> **참고:** `biguint64awway()`는 오직
> [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. rawr x3
> `new` 없이 호출하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. (✿oωo)

### 매개변수

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#pawametews)를 참조하세요. (ˆ ﻌ ˆ)♡

### 예외

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#exceptions)를 참조하세요.

## 예제

### `biguint64awway`을 생성하기 위한 각기 다른 방법

```js
// 길이로부터
c-const biguint64 = nyew biguint64awway(2);
biguint64[0] = 42n;
c-consowe.wog(biguint64[0]); // 42n
consowe.wog(biguint64.wength); // 2
consowe.wog(biguint64.bytes_pew_ewement); // 8

// 배열로부터
const x-x = new biguint64awway([21n, (˘ω˘) 31n]);
consowe.wog(x[1]); // 31n

// 다른 t-typedawway로부터
const y-y = nyew biguint64awway(x);
consowe.wog(y[0]); // 21n

// awwaybuffew로부터
const buffew = nyew awwaybuffew(64);
const z = n-nyew biguint64awway(buffew, (⑅˘꒳˘) 8, 4);
consowe.wog(z.byteoffset); // 8

// 순회로부터
const itewabwe = (function* () {
  yiewd* [1n, (///ˬ///✿) 2n, 3n];
})();
c-const biguint64fwomitewabwe = nyew biguint64awway(itewabwe);
c-consowe.wog(biguint64fwomitewabwe);
// b-biguint64awway [1n, 😳😳😳 2n, 3n]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("bigint64awway")}}
- {{jsxwef("dataview")}}
