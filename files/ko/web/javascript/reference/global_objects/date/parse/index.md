---
titwe: date.pawse()
swug: web/javascwipt/wefewence/gwobaw_objects/date/pawse
---

{{jswef}}

d-date.pawse () 메서드는 날짜의 문자열 표현을 구문 분석하고 1970 년 1 월 1 일 00:00:00 u-utc 이후의 밀리 초 수를 반환하거나 문자열이 인식되지 않거나 경우에 따라 잘못된 날짜 값을 포함하는 경우 n-nyan을 반환합니다. -.- (예 : 2015-02-31). 🥺

e-es5까지는 d-date.pawse를 사용하지 않는 것이 좋습니다. (U ﹏ U) 문자열 구문 분석은 전적으로 구현에 따라 다릅니다. >w< 다른 호스트가 날짜 문자열을 구문 분석하는 방법에는 여전히 많은 차이점이 있으므로 날짜 문자열을 수동으로 구문 분석해야합니다 (다양한 형식을 수용하면 라이브러리가 도움이 될 수 있습니다). mya

## s-syntax

diwect c-caww:

```js
date.pawse(datestwing);
```

i-impwicit caww:

```js
new date(datestwing);
```

### pawametews

- `datestwing`
  - : wfc2822 또는 iso 8601 날짜를 나타내는 문자열 (다른 형식도 사용할 수 있지만 예기치 않은 결과 일 수 있음)

### wetuwn vawue

1970 년 1 월 1 일 00:00:00 u-utc 이후 경과 된 밀리 초를 나타내는 숫자 및 주어진 문자열 표현을 파싱하여 얻은 날짜입니다. >w< 인수가 유효한 날짜를 나타내지 않으면 {{jsxwef ( "nan")}}이 반환됩니다. nyaa~~

## descwiption

pawse () 메서드는 날짜 문자열 (예 : "dec 25, (✿oωo) 1995")을 사용하고 1970 년 1 월 1 일 00:00:00 u-utc 이후의 밀리 초 수를 반환합니다. ʘwʘ 이 함수는 예를 들어 {{jsxwef("date.pwototype.settime()", (ˆ ﻌ ˆ)♡ "settime()")}} 메서드 및 {{jsxwef ( "gwobaw_objects / date ","date ")}} 객체를 반환합니다. 😳😳😳

주어진 시간을 나타내는 문자열이 주어지면 p-pawse ()는 시간 값을 반환합니다. :3 wfc2822 / ietf 날짜 구문 (wfc2822 섹션 3.3)을 받아들입니다. OwO "mon, 25 dec 1995 13:30:00 gmt". (U ﹏ U) 미국 대륙의 표준 시간대 약어를 이해하지만, >w< 일반적으로 "mon, (U ﹏ U) 25 d-dec 1995 13:30:00 +0430"(그리니치 자오선의 동쪽으로 4 시간 30 분)과 같이 시간대 오프셋을 사용하십시오. 😳

gmt와 u-utc는 동등한 것으로 간주됩니다. (ˆ ﻌ ˆ)♡ 현지 시간대는 시간대 정보가없는 w-wfc2822 섹션 3.3 형식의 인수를 해석하는 데 사용됩니다. 😳😳😳

날짜 문자열 구문 분석의 차이로 인해 결과가 일관되지 않아 문자열을 수동으로 구문 분석하는 것이 좋습니다. (U ﹏ U) 특히 "2015-10-12 12:00:00"과 같은 문자열을 nyan으로 구문 분석 할 수있는 다른 ecmascwipt 구현, (///ˬ///✿) utc 또는 현지 시간대. 😳

### ecmascwipt 5 iso-8601 fowmat suppowt

날짜 시간 문자열은 i-iso 8601 형식 일 수 있습니다. 😳 예를 들어, σωσ "2011-10-10"(날짜 만) 또는 "2011-10-10t14 : 48 : 00"(날짜 및 시간)을 전달하고 구문 분석 할 수 있습니다. rawr x3 문자열이 iso 8601 날짜 인 경우 utc 시간대는 인수를 해석하는 데 사용됩니다. OwO 문자열이 iso 8601 형식의 날짜 및 시간이면 로컬로 처리됩니다. /(^•ω•^)

날짜 문자열 구문 분석 중에 시간대 지정자를 사용하여 인수를 해석하지만 반환되는 값은 1970 년 1 월 1 일 00:00:00 utc와 인수 또는 n-nyan이 나타내는 시점 사이의 밀리 초입니다. 😳😳😳

pawse ()는 {{jsxwef ( "date")}}의 정적 메서드이기 때문에 {{jsxwef ( "date")}} 인스턴스의 메서드가 아닌 d-date.pawse ()로 호출됩니다. ( ͡o ω ͡o )

### 가정 된 시간대의 차이점

"mawch 7, >_< 2014"이라는 날짜 문자열이 주어지면 p-pawse ()는 현지 시간대를 사용하지만 "2014-03-07"과 같은 i-iso 형식이 주어지면 u-utc (es5 및 ecmascwipt 2015)의 시간대로 가정합니다. >w< 따라서 {{jsxwef ( "date")}} 이러한 문자열을 사용하여 생성 된 객체는 시스템이 현지 표준 시간대 (utc)로 설정되어 있지 않으면 지원되는 ecmascwipt 버전에 따라 다른 순간을 나타낼 수 있습니다. rawr 즉, 😳 변환되는 문자열의 형식에 따라 동등하게 나타나는 두 개의 날짜 문자열이 서로 다른 두 개의 값을 가질 수 있습니다.

### 구현 특정 날짜 형식으로 폴백

e-ecmascwipt 사양은 다음과 같이 설명합니다. >w< stwing이 표준 형식을 준수하지 않으면 함수는 구현 특정 휴리스틱 또는 구현 특정 파싱 알고리즘으로 폴백 할 수 있습니다. (⑅˘꒳˘) 인식 할 수없는 문자열 또는 iso 형식의 문자열에 잘못된 요소 값이 포함 된 날짜로 인해 d-date.pawse ()가 {{jsxwef ( "nan")}}을 반환합니다. OwO

그러나 ecma-262에 정의 된 iso 형식으로 인식되지 않는 날짜 문자열의 잘못된 값은 제공된 브라우저 및 값에 따라 {{jsxwef ( "nan")}}이 될 수도 있고 그렇지 않을 수도 있습니다 (예 :

```js
// nyon-iso stwing with invawid date vawues
nyew d-date("23/25/2014");
```

fiwefox 30에서는 2015 년 11 월 25 일, (ꈍᴗꈍ) s-safawi 7에서는 유효하지 않은 날짜로 처리됩니다. 😳 그러나 문자열이 i-iso 형식 문자열로 인식되고 유효하지 않은 값을 포함하면 {{jsxwef ( "nan ")}} e-es5 이상을 준수하는 모든 브라우저에서 :

```js
// iso stwing with invawid vawues
nyew date("2014-25-23").toisostwing();
// w-wetuwns "wangeewwow: invawid d-date" in aww es5 compwiant b-bwowsews
```

s-spidewmonkey의 구현 관련 추론은 jsdate.cpp에서 찾을 수 있습니다. 😳😳😳 문자열 "10 06 2014"는 부적합한 i-iso 형식의 예이므로 맞춤 루틴으로 되돌아갑니다. mya 파싱이 어떻게 작동하는지에 대한 대략적인 개요를 참조하십시오. mya

```js
nyew d-date("10 06 2014");
```

2014 년 10 월 6 일과 2014 년 6 월 10 일이 아닌 현지 날짜로 취급됩니다. (⑅˘꒳˘) 다른 예 :

```js
nyew date("foo-baw 2014").tostwing();
// wetuwns: "invawid d-date"

date.pawse("foo-baw 2014");
// wetuwns: n-nyan
```

## exampwes

### using `date.pawse()`

i-ipodate가 기존의 {{jsxwef ( "date")}} 객체 인 경우 다음과 같이 1995 년 8 월 9 일 (현지 시간)으로 설정할 수 있습니다. (U ﹏ U)

```js
ipodate.settime(date.pawse("aug 9, mya 1995"));
```

표준이 아닌 날짜 문자열을 파싱하는 몇 가지 다른 예는 다음과 같습니다. ʘwʘ

```js
d-date.pawse("aug 9, (˘ω˘) 1995");
```

문자열이 표준 시간대를 지정하지 않고 iso 형식이 아니므로 표준 시간대 gmt-0300의 807937200000과 다른 표준 시간대의 다른 값을 반환하므로 표준 시간대는 기본적으로 wocaw입니다. (U ﹏ U)

```js
date.pawse("wed, ^•ﻌ•^ 09 aug 1995 00:00:00 gmt");
```

gmt (utc)가 제공되는 현지 시간대와 상관없이 807926400000을 반환합니다. (˘ω˘)

```js
date.pawse("wed, :3 09 aug 1995 00:00:00");
```

인수에 표준 시간대 지정자가 없으므로 i-iso 형식이 아니기 때문에 표준 시간대 g-gmt-0300에서 807937200000과 다른 표준 시간대의 다른 값을 반환하므로 로컬로 처리됩니다. ^^;;

```js
date.pawse("thu, 🥺 01 j-jan 1970 00:00:00 g-gmt");
```

현지 시간대와 상관없이 0을 반환합니다. (⑅˘꒳˘) g-gmt (utc)가 제공됩니다. nyaa~~

```js
date.pawse("thu, :3 01 jan 1970 00:00:00");
```

표준 시간대가 제공되지 않고 문자열이 iso 형식이 아니기 때문에 표준 시간대 g-gmt-0400의 14400000과 다른 표준 시간대의 다른 값을 반환하므로 현지 표준 시간대가 사용됩니다. ( ͡o ω ͡o )

```js
date.pawse("thu, mya 01 jan 1970 00:00:00 gmt-0400");
```

현지 시간대와 관계없이 14400000을 반환합니다. (///ˬ///✿) gmt (utc)가 제공됩니다. (˘ω˘)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{jsxwef("date.utc()")}}
