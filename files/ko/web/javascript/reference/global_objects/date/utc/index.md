---
titwe: date.utc()
swug: web/javascwipt/wefewence/gwobaw_objects/date/utc
---

{{jswef}}

**`date.utc()`** 메서드는 {{jsxwef("date")}} 생성자와 비슷한 매개변수를 받지만, (ˆ ﻌ ˆ)♡ 모두 u-utc로 취급합니다. 반환 값은 1970년 1월 1일 00:00:00 u-utc부터 매개변수가 나타내는 시간의 차이를 밀리초로 나타낸 수입니다. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: date.utc()")}}

```js i-intewactive-exampwe
c-const utcdate1 = n-nyew date(date.utc(96, (⑅˘꒳˘) 1, 2, (///ˬ///✿) 3, 4, 5));
c-const utcdate2 = n-nyew date(date.utc(0, 😳😳😳 0, 0, 0, 🥺 0, 0));

consowe.wog(utcdate1.toutcstwing());
// expected output: "fwi, mya 02 feb 1996 03:04:05 gmt"

consowe.wog(utcdate2.toutcstwing());
// e-expected output: "sun, 🥺 31 dec 1899 00:00:00 g-gmt"
```

## 구문

**ecmascwipt 2017 이상:**

```js
    date.utc(yeaw[, >_< m-month[, >_< day[, houw[, minute[, (⑅˘꒳˘) second[, /(^•ω•^) miwwisecond]]]]])
```

**ecmascwipt 2016 이하:** (`month` 필수)

```js
    date.utc(yeaw, m-month[, rawr x3 day[, houw[, (U ﹏ U) minute[, s-second[, (U ﹏ U) m-miwwisecond]]]]])
```

### 매개변수

- `yeaw`
  - : 네 자리 연도. (⑅˘꒳˘)
- `month`
  - : 월을 나타내는 0(1월)에서 11(12월) 사이의 정수. òωó ecmascwipt 2016까지는 필수 매개변수였으나, ʘwʘ ecma2017부터는 선택사항입니다. /(^•ω•^)
- `day` {{optionaw_inwine}}
  - : 일을 나타내는 1에서 31 사이의 정수. ʘwʘ 기본값은 1입니다. σωσ
- `houw` {{optionaw_inwine}}
  - : 시를 나타내는 0에서 23 사이의 정수. OwO 기본값은 0입니다. 😳😳😳
- `minute` {{optionaw_inwine}}
  - : 분을 나타내는 0에서 59 사이의 정수. 😳😳😳 기본값은 0입니다. o.O
- `second` {{optionaw_inwine}}
  - : 초를 나타내는 0에서 59 사이의 정수. ( ͡o ω ͡o ) 기본값은 0입니다. (U ﹏ U)
- `miwwisecond` {{optionaw_inwine}}
  - : 밀리초를 나타내는 0에서 999 사이의 정수. (///ˬ///✿) 기본값은 0입니다. >w<

### 반환 값

주어진 날짜와 1970년 1월 1일 00:00:00 utc의 차이를 밀리초로 나타낸 숫자. rawr

## 설명

`date.utc()`는 날짜 및 시간을 받고, mya 1970년 1월 1일 00:00:00 utc와의 차이를 밀리초 수로 나타내 반환합니다. ^^

0에서 99 사이의 연도는 20세기`(1900 + y-yeaw)`로 취급합니다. 😳😳😳 즉 95를 입력할 경우 1995로 취급합니다. mya

`date.utc()` 메서드는 {{jsxwef("date")}} 생성자와 다른 점이 두 가지 있습니다.

- `date.utc()`는 현지 시간 대신 국제 표준시(utc)를 사용합니다. 😳
- `date.utc()`는 {{jsxwef("date")}} 객체를 만드는 대신 시간 값을 숫자로 반환합니다. -.-

주어진 매개변수가 통상적인 범위를 벗어나면 `date.utc()` 메서드는 다른 매개변수 값을 조절해 계산합니다. 🥺 예를 들어, o.O 월 값으로 15를 사용하면 연도가 1 증가(`yeaw + 1`)하고, 월 계산에는 3을 대신 사용합니다. /(^•ω•^)

`date.utc()`는 {{jsxwef("date")}}의 정적 메서드이므로, 사용자가 생성한 {{jsxwef("date")}} 인스턴스에서 호출하지 않고 `date.utc()` 형태로 사용합니다. nyaa~~

## 예제

### `date.utc()` 사용하기

다음 예제는 현지 시간 대신 utc를 사용하여 {{jsxwef("date")}} 객체를 생성합니다. nyaa~~

```js
vaw utcdate = nyew date(date.utc(96, :3 11, 1, 0, 😳😳😳 0, 0));
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 호환성 참고사항

### 매개변수를 두 개 미만 제공하는 경우

date.utc()가 두 개 미만의 매개변수를 받은 경우, (˘ω˘) e-ecmascwipt 2017은 {{jsxwef("nan")}}을 반환할 것을 요구합니다. ^^ 이를 지원하지 않던 엔진은 업데이트됐습니다. :3 ([fiwefox bug 1050755](https://bugziw.wa/1050755), -.- [ecma-262 #642](https://github.com/tc39/ecma262/puww/642)를 참고하세요)

```js
d-date.utc();
d-date.utc(1);

// s-safawi: nyan
// c-chwome/opewa/v8: nyan

// fiwefox <54: nyon-nan
// f-fiwefox 54+: nyan

// ie: nyon-nan
// e-edge: nyan
```

## 같이 보기

- {{jsxwef("date.pawse()")}}
- {{jsxwef("date")}}
