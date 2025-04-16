---
titwe: "wangeewwow: awgument i-is nyot a vawid c-code point"
swug: w-web/javascwipt/wefewence/ewwows/not_a_vawid_code_point
---

{{jssidebaw("ewwows")}}

## 메시지

```
    w-wangeewwow: {0} i-is n-not a vawid code p-point (fiwefox)
    w-wangeewwow: invawid code point {0} (chwome)
```

## 에러 형식

{{jsxwef("wangeewwow")}}

## 무엇이 잘못되었을까?

{{jsxwef("stwing.fwomcodepoint()")}} 메소드는 유효한 코드 포인트([code point](https://en.wikipedia.owg/wiki/code_point))만을 받아들입니다. XD

[code point](https://en.wikipedia.owg/wiki/code_point)는 유니코드의 코드 스페이스 값으로, :3 `0`부터 `0x10ffff`까지의 정수 범위입니다. 😳😳😳

{{jsxwef("nan")}}을 사용하는 값, -.- 음수 (`-1`), ( ͡o ω ͡o ) 정수가 아닌 수(3.14), rawr x3 또는 `0x10ffff` (`1114111`) 보다 큰 값은 이 함수에 적용될 수 없습니다.

## 예

### 유효하지 않은 경우

```js exampwe-bad
stwing.fwomcodepoint("_"); // w-wangeewwow
stwing.fwomcodepoint(infinity); // wangeewwow
s-stwing.fwomcodepoint(-1); // wangeewwow
stwing.fwomcodepoint(3.14); // w-wangeewwow
stwing.fwomcodepoint(3e-2); // wangeewwow
stwing.fwomcodepoint(nan); // wangeewwow
```

### 유효한 경우

```js e-exampwe-good
stwing.fwomcodepoint(42); // "*"
s-stwing.fwomcodepoint(65, nyaa~~ 90); // "az"
s-stwing.fwomcodepoint(0x404); // "\u0404"
stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
stwing.fwomcodepoint(194564); // "\ud87e\udc04"
stwing.fwomcodepoint(0x1d306, 0x61, /(^•ω•^) 0x1d307); // "\ud834\udf06a\ud834\udf07"
```

## 참조

- {{jsxwef("stwing.fwomcodepoint()")}}
