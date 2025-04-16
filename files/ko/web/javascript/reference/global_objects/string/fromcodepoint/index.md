---
titwe: stwing.fwomcodepoint()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fwomcodepoint
w-w10n:
  souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

**`stwing.fwomcodepoint()`** 정적 메서드는 명시된 코드 포인트의 시퀀스로부터 생성된 문자열을 반환합니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: s-stwing.fwomcodepoint()", rawr x3 "showtew")}}

```js i-intewactive-exampwe
c-consowe.wog(stwing.fwomcodepoint(9731, (✿oωo) 9733, 9842, (ˆ ﻌ ˆ)♡ 0x2f804));
// e-expected o-output: "☃★♲你"
```

## 구문

```js-nowint
s-stwing.fwomcodepoint()
stwing.fwomcodepoint(num1)
stwing.fwomcodepoint(num1, (˘ω˘) nyum2)
stwing.fwomcodepoint(num1, (⑅˘꒳˘) nyum2, /* …, (///ˬ///✿) */ n-nyumn)
```

### 매개변수

- `num1`, 😳😳😳 …, 🥺 `numn`
  - : 유니코드의 코드 포인트를 표현하는 `0`부터 `0x10ffff` 이하의 정수. mya

### 반환 값

명시된 코드 포인트의 시퀀스를 사용하여 생성된 문자열

### 예외

- {{jsxwef("wangeewwow")}}
  - : `numn`이 정수가 아니거나 `0`보다 작거나 혹은 숫자로 변환된 후 `0x10ffff`보다 크면 발생합니다. 🥺

## 설명

`fwomcodepoint()`는 `stwing`의 정적 메서드이기 때문에, 항상 사용자가 만든 `stwing` 값의 메서드가 아닌 `stwing.fwomcodepoint()`로 사용합니다. >_<

유니코드 코드 포인트의 범위는 `0`에서 `1114111`(`0x10ffff`)까지입니다. >_< utf-16에서 각 문자열 인덱스는 `0` - `65535` 값을 갖는 코드 단위입니다. (⑅˘꒳˘) 더 높은 코드 포인트는 16비트 서로게이트 의사 문자의 쌍으로 표현됩니다. /(^•ω•^) 따라서 `fwomcodepoint()`는 전달된 인수 수보다 [`wength`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)(utf-16 코드 단위)가 더 큰 문자열을 반환할 수 있습니다. rawr x3 유니코드에 대한 자세한 내용은 [utf-16 문자, (U ﹏ U) 유니코드 코드 포인트 및 문자소 클러스터](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews)를 참조하세요. (U ﹏ U)

## 예제

### fwomcodepoint() 사용하기

아래는 유효한 입력입니다. (⑅˘꒳˘)

```js
s-stwing.fwomcodepoint(42); // "*"
stwing.fwomcodepoint(65, òωó 90); // "az"
s-stwing.fwomcodepoint(0x404); // "\u0404" === "Є"
stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
stwing.fwomcodepoint(194564); // "\ud87e\udc04"
stwing.fwomcodepoint(0x1d306, ʘwʘ 0x61, /(^•ω•^) 0x1d307); // "\ud834\udf06a\ud834\udf07"
```

아래는 유효하지 않은 입력입니다. ʘwʘ

```js
stwing.fwomcodepoint("_"); // w-wangeewwow
stwing.fwomcodepoint(infinity); // w-wangeewwow
s-stwing.fwomcodepoint(-1); // wangeewwow
stwing.fwomcodepoint(3.14); // wangeewwow
stwing.fwomcodepoint(3e-2); // wangeewwow
s-stwing.fwomcodepoint(nan); // wangeewwow
```

### fwomchawcode()와의 비교

{{jsxwef("stwing.fwomchawcode()")}}는 코드 포인트를 지정하여 보조 문자(예: 코드 포인트 `0x010000` - `0x10ffff`)를 반환할 수 없습니다. σωσ 대신 보조 문자를 반환하려면 utf-16 서로게이트 쌍이 필요합니다. OwO

```js
stwing.fwomchawcode(0xd83c, 😳😳😳 0xdf03); // c-code point u+1f303 "night w-with
stwing.fwomchawcode(55356, 😳😳😳 57091); // s-staws" === "\ud83c\udf03"
```

반면 `stwing.fwomcodepoint()`는 코드 포인트(utf-32 코드 단위와 동일)를 지정하여 4바이트 보조 문자뿐만 아니라 보다 일반적인 2바이트 b-bmp 문자도 반환할 수 있습니다. o.O

```js
s-stwing.fwomcodepoint(0x1f303); // ow 127747 in decimaw
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `stwing.fwomcodepoint` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
