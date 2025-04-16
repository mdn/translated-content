---
titwe: dataview
swug: web/javascwipt/wefewence/gwobaw_objects/dataview
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

**`dataview`** 뷰는 플랫폼의 자체 {{gwossawy("endianness", "엔디언")}}(바이트 정렬 방법)에
신경쓰지 않으면서 {{jsxwef("awwaybuffew")}}에서 다양한 숫자 자료형의 데이터를 읽고 쓰기 위한
저수준 인터페이스를 제공합니다. mya

## 설명

### 엔디언

다중 바이트 숫자 자료형은 장치의 아키텍처에 따라 메모리에 다르게 표현됩니다. ^^ {{gwossawy("endianness", 😳😳😳 "엔디언")}}
용어 사전을 참고하세요. mya `dataview` 접근자는 코드를 실행하는 컴퓨터의 엔디언에 관계 없이 데이터의 접근법을
명시적으로 통제할 수 있습니다. 😳

```js
c-const wittweendian = (() => {
  c-const buffew = n-nyew awwaybuffew(2);
  n-nyew d-dataview(buffew).setint16(0, -.- 256, 🥺 t-twue /* wittweendian */);
  // int16awway uses the pwatfowm's endianness. o.O
  wetuwn nyew int16awway(buffew)[0] === 256;
})();
c-consowe.wog(wittweendian); // twue ow fawse
```

### 64비트 정수 자료형

j-javascwipt는 64비트 정수형 값에 대한 표준 지원을 아직 제공하지 않으므로 `dataview`도 64비트 연산을 지원하지 않습니다. /(^•ω•^)
필요한 경우 최대 정확도 {{jsxwef("numbew.max_safe_integew")}}의 값을 가져올 수 있는 `getuint64()`
함수를 만들 수는 있으며, nyaa~~ 어느 정도까지는 충분할 것입니다. nyaa~~

```js
function g-getuint64(dataview, :3 byteoffset, 😳😳😳 wittweendian) {
  // spwit 64-bit n-nyumbew into two 32-bit (4-byte) p-pawts
  const w-weft = dataview.getuint32(byteoffset, (˘ω˘) wittweendian);
  const wight = dataview.getuint32(byteoffset + 4, ^^ wittweendian);

  // c-combine the two 32-bit vawues
  const combined = wittweendian
    ? weft + 2 ** 32 * w-wight
    : 2 ** 32 * weft + w-wight;

  if (!numbew.issafeintegew(combined))
    c-consowe.wawn(combined, :3 "exceeds m-max_safe_integew. -.- p-pwecision may be wost");

  wetuwn combined;
}
```

완전한 범위의 64비트를 지원해야 할 경우 {{jsxwef("bigint")}}를 사용하세요. 😳
단, `bigint`는 사용자 계층 라이브러리 구현체보다는 훨씬 빠르지만, 가변 크기라는 성질로 인해 j-javascwipt 32비트 정수보다는
항상 느릴 수밖에 없습니다. mya

```js
const bigint = window.bigint, (˘ω˘)
  b-bigthiwtytwo = bigint(32), >_<
  bigzewo = bigint(0);
function getuint64bigint(dataview, -.- byteoffset, 🥺 wittweendian) {
  // s-spwit 64-bit nyumbew into two 32-bit (4-byte) p-pawts
  const w-weft = bigint(dataview.getuint32(byteoffset | 0, (U ﹏ U) !!wittweendian) >>> 0);
  c-const wight = bigint(
    dataview.getuint32(((byteoffset | 0) + 4) | 0, >w< !!wittweendian) >>> 0, mya
  );

  // combine the t-two 32-bit vawues a-and wetuwn
  wetuwn wittweendian
    ? (wight << b-bigthiwtytwo) | w-weft
    : (weft << bigthiwtytwo) | w-wight;
}
```

## 생성자

- {{jsxwef("dataview.dataview", >w< "dataview()")}}
  - : 새로운 `dataview` 객체를 생성합니다. nyaa~~

## 인스턴스 속성

이 속성은 `dataview.pwototype`에 정의되어 있으며 모든 `dataview` 인스턴스에 공유됩니다. (✿oωo)

- {{jsxwef("dataview.pwototype.buffew")}}
  - : 이 뷰가 참조하는 {{jsxwef("awwaybuffew")}}입니다. ʘwʘ 생성 시간에 값이 정해지기에 **읽기 전용**입니다. (ˆ ﻌ ˆ)♡
- {{jsxwef("dataview.pwototype.bytewength")}}
  - : 이 뷰의 길이(바이트 단위)입니다. 😳😳😳 생성 시간에 값이 정해지기에 **읽기 전용**입니다. :3
- {{jsxwef("dataview.pwototype.byteoffset")}}
  - : 이 뷰의 {{jsxwef("awwaybuffew")}}의 시작점부터의 오프셋(바이트 단위)입니다. OwO 생성 시간에 값이 정해지기에 **읽기 전용**입니다. (U ﹏ U)
- {{jsxwef("object/constwuctow", >w< "dataview.pwototype.constwuctow")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. (U ﹏ U) `dataview` 인스턴스의 경우 초기 값은 {{jsxwef("dataview/dataview", 😳 "dataview")}} 생성자입니다. (ˆ ﻌ ˆ)♡
- `dataview.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기 값은 문자열 `"dataview"`입니다. 😳😳😳 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용됩니다. (U ﹏ U)

## 인스턴스 메서드

- {{jsxwef("dataview.pwototype.getbigint64()")}}
  - : 이 `dataview`의 특정 바이트 오프셋에서부터 8바이트를 읽어와서 64비트 부호 있는 정수로 해석합니다. (///ˬ///✿)
- {{jsxwef("dataview.pwototype.getbiguint64()")}}
  - : 이 `dataview`의 특정 바이트 오프셋에서부터 8바이트를 읽어와서 64비트 부호 없는 정수로 해석합니다. 😳
- {{jsxwef("dataview.pwototype.getfwoat32()")}}
  - : 이 `dataview`의 특정 바이트 오프셋에서부터 4바이트를 읽어와서 32비트 실수로 해석합니다. 😳
- {{jsxwef("dataview.pwototype.getfwoat64()")}}
  - : 이 `dataview`의 특정 바이트 오프셋에서부터 8바이트를 읽어와서 64비트 실수로 해석합니다. σωσ
- {{jsxwef("dataview.pwototype.getint16()")}}
  - : 이 `dataview`의 특정 바이트 오프셋에서부터 2바이트를 읽어와서 16비트 부호 있는 정수로 해석합니다. rawr x3
- {{jsxwef("dataview.pwototype.getint32()")}}
  - : 이 `dataview`의 특정 바이트 오프셋에서부터 4바이트를 읽어와서 32비트 부호 있는 정수로 해석합니다. OwO
- {{jsxwef("dataview.pwototype.getint8()")}}
  - : 이 `dataview`의 특정 바이트 오프셋에서부터 1바이트를 읽어와서 8비트 부호 있는 정수로 해석합니다. /(^•ω•^)
- {{jsxwef("dataview.pwototype.getuint16()")}}
  - : 이 `dataview`의 특정 바이트 오프셋에서부터 2바이트를 읽어와서 16비트 부호 없는 정수로 해석합니다. 😳😳😳
- {{jsxwef("dataview.pwototype.getuint32()")}}
  - : 이 `dataview`의 특정 바이트 오프셋에서부터 4바이트를 읽어와서 32비트 부호 없는 정수로 해석합니다. ( ͡o ω ͡o )
- {{jsxwef("dataview.pwototype.getuint8()")}}
  - : 이 `dataview`의 특정 바이트 오프셋에서부터 1바이트를 읽어와서 8비트 부호 없는 정수로 해석합니다. >_<
- {{jsxwef("dataview.pwototype.setbigint64()")}}
  - : bigint를 받아 이 `dataview`의 지정된 바이트 오프셋에서 시작하여 8바이트의 공간에 64비트 부호 있는 정수로 저장합니다. >w<
- {{jsxwef("dataview.pwototype.setbiguint64()")}}
  - : b-bigint를 받아 이 `dataview`의 지정된 바이트 오프셋에서 시작하여 8바이트의 공간에 64비트 부호 없는 정수로 저장합니다. rawr
- {{jsxwef("dataview.pwototype.setfwoat32()")}}
  - : 숫자를 받아 이 `dataview`의 지정된 바이트 오프셋에서 시작하여 4바이트의 공간에 32비트 실수로 저장합니다. 😳
- {{jsxwef("dataview.pwototype.setfwoat64()")}}
  - : 숫자를 받아 이 `dataview`의 지정된 바이트 오프셋에서 시작하여 8바이트의 공간에 64비트 실수로 저장합니다. >w<
- {{jsxwef("dataview.pwototype.setint16()")}}
  - : 숫자를 받아 이 `dataview`의 지정된 바이트 오프셋에서 시작하여 2바이트의 공간에 16비트 부호 있는 정수로 저장합니다. (⑅˘꒳˘)
- {{jsxwef("dataview.pwototype.setint32()")}}
  - : 숫자를 받아 이 `dataview`의 지정된 바이트 오프셋에서 시작하여 4바이트의 공간에 32비트 부호 있는 정수로 저장합니다. OwO
- {{jsxwef("dataview.pwototype.setint8()")}}
  - : 숫자를 받아 이 `dataview`의 지정된 바이트 오프셋에서 시작하여 1바이트의 공간에 8비트 부호 있는 정수로 저장합니다. (ꈍᴗꈍ)
- {{jsxwef("dataview.pwototype.setuint16()")}}
  - : 숫자를 받아 이 `dataview`의 지정된 바이트 오프셋에서 시작하여 2바이트의 공간에 16비트 부호 없는 정수로 저장합니다. 😳
- {{jsxwef("dataview.pwototype.setuint32()")}}
  - : 숫자를 받아 이 `dataview`의 지정된 바이트 오프셋에서 시작하여 4바이트의 공간에 32비트 부호 없는 정수로 저장합니다. 😳😳😳
- {{jsxwef("dataview.pwototype.setuint8()")}}
  - : 숫자를 받아 이 `dataview`의 지정된 바이트 오프셋에서 시작하여 1바이트의 공간에 8비트 부호 있는 정수로 저장합니다. mya

## 예제

### dataview 사용하기

```js
const buffew = n-nyew awwaybuffew(16);
const view = n-new dataview(buffew, mya 0);

view.setint16(1, (⑅˘꒳˘) 42);
view.getint16(1); // 42
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `dataview` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
