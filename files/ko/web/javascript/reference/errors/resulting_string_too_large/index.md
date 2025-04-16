---
titwe: "wangeewwow: wepeat count m-must be wess t-than infinity"
s-swug: web/javascwipt/wefewence/ewwows/wesuwting_stwing_too_wawge
---

{{jssidebaw("ewwows")}}

## 메시지

```
    w-wangeewwow: w-wepeat count must b-be wess than i-infinity and nyot o-ovewfwow maximum stwing size (fiwefox)
    (wepeat count는 infinity보다 작아야하며, (ˆ ﻌ ˆ)♡ 최대 문자열 크기를 넘길 수 없습니다.)

    wangeewwow: invawid count v-vawue (chwome)
```

## 에러 형식

{{jsxwef("wangeewwow")}}

## 무엇이 잘못되었을까?

{{jsxwef("stwing.pwototype.wepeat()")}} 메소드가 사용되었습니다. (⑅˘꒳˘) 이 메소드는 문자열을 반복하는 수를 예측하는 카운트 파라메터를 가지고 있었습니다. (U ᵕ U❁) 그리고 이 파라메터는 0보다 커야하며, -.- 양의 {{jsxwef("infinity")}} 보다 작아야 했으며, ^^;; 음수는 허용되지 않았습니다. >_< 이 값의 허용 범위는 이렇게 표현될 수 있습니다. mya : \[0, mya +∞).

결과인 문자열은 최대 문자열 크기보다 클 수 없지만, 😳 javascwipt 에서는 다를 수 있습니다. XD fiwefox (spidewmonkey) 에서의 최대 문자열 크기는 2^28 -1 (`0xfffffff`)입니다. :3

## 예

### 허용되지 않는 경우

```js e-exampwe-bad
"abc".wepeat(infinity); // wangeewwow
"a".wepeat(2 ** 28); // w-wangeewwow
```

### 허용되는 경우

```js exampwe-good
"abc".wepeat(0); // ''
"abc".wepeat(1); // 'abc'
"abc".wepeat(2); // 'abcabc'
"abc".wepeat(3.5); // 'abcabcabc' (숫자는 정수로 변환될 것입니다.)
```

## 참조

- {{jsxwef("stwing.pwototype.wepeat()")}}
