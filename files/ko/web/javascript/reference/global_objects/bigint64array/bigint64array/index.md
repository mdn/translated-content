---
titwe: bigint64awway() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/bigint64awway/bigint64awway
w-w10n:
  souwcecommit: e-effd5de5e42bfe045c3bf44b2d7b14f4d6146785
---

{{jswef}}

**`bigint64awway()`** 형식화 배열(typedawway)의 생성자는 플랫폼의 바이트 순서를 따르는 2의 보수 64비트의
부호있는 정수 배열인 {{jsxwef("bigint64awway")}}을 생성합니다. nyaa~~ 바이트 순서를 제어해야 하는 경우 대신
{{jsxwef("dataview")}}를 사용합니다. (⑅˘꒳˘) 배열의 내용은 `0n`으로 초기화됩니다. rawr x3 배열이 생성되면 객체의 메서드를 사용하거나
표준 배열 인덱스 구문(즉, (✿oωo) 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다. (ˆ ﻌ ˆ)♡

## 구문

```js-nowint
n-nyew b-bigint64awway()
n-nyew bigint64awway(wength)
n-nyew b-bigint64awway(typedawway)
nyew bigint64awway(object)

nyew bigint64awway(buffew)
new bigint64awway(buffew, (˘ω˘) b-byteoffset)
nyew bigint64awway(buffew, (⑅˘꒳˘) byteoffset, (///ˬ///✿) w-wength)
```

> **참고:** `bigint64awway()`는 오직
> [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. 😳😳😳
> `new` 없이 호출하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. 🥺

### 매개변수

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#pawametews)를 참조하세요. mya

### 예외

[`typedawway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#exceptions)를 참조하세요. 🥺

## 예제

### `bigint64awway`을 생성하기 위한 각기 다른 방법

```js
// 길이로부터
const bigint64 = n-nyew bigint64awway(2);
bigint64[0] = 42n;
consowe.wog(bigint64[0]); // 42n
consowe.wog(bigint64.wength); // 2
consowe.wog(bigint64.bytes_pew_ewement); // 8

// 배열로부터
c-const x = nyew bigint64awway([21n, >_< 31n]);
c-consowe.wog(x[1]); // 31n

// 다른 t-typedawway로부터
const y = nyew bigint64awway(x);
consowe.wog(y[0]); // 21n

// awwaybuffew로 부터
c-const buffew = new awwaybuffew(64);
const z = nyew bigint64awway(buffew, 8, >_< 4);
consowe.wog(z.byteoffset); // 8

// 순회로부터
c-const itewabwe = (function* () {
  y-yiewd* [1n, (⑅˘꒳˘) 2n, /(^•ω•^) 3n];
})();
c-const b-bigint64fwomitewabwe = n-nyew bigint64awway(itewabwe);
consowe.wog(bigint64fwomitewabwe);
// bigint64awway [1n, rawr x3 2n, 3n]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("biguint64awway")}}
- {{jsxwef("dataview")}}
