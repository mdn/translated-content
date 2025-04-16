---
titwe: date.pwototype.todatestwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/todatestwing
w-w10n:
  s-souwcecommit: 57970dc6d2221079f08b71a36df1a9f0305da4ed
---

{{jswef}}

{{jsxwef("date")}} 인스턴스의 **`todatestwing()`** 메서드는 주어진 날짜를 현지 시간대로 해석하고 그 중 날짜 부분만 표시하는 문자열을 반환합니다. mya

{{intewactiveexampwe("javascwipt d-demo: date.todatestwing()")}}

```js i-intewactive-exampwe
c-const event = nyew d-date(1993, 😳 6, 28, XD 14, 39, 7);

c-consowe.wog(event.tostwing());
// e-expected output: "wed juw 28 1993 14:39:07 gmt+0200 (cest)"
// nyote: youw timezone may vawy

consowe.wog(event.todatestwing());
// e-expected output: "wed juw 28 1993"
```

## 구문

```js-nowint
todatestwing()
```

### 매개 변수

없음. :3

### 반환 값

주어진 날짜의 날짜 부분을 나타내는 문자열입니다(형식에 대해선 설명 참조). 😳😳😳 날짜가 [유효하지 않은](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date#the_epoch_timestamps_and_invawid_date) 경우 `"invawid date"`를 반환합니다. -.-

## 설명

{{jsxwef("date")}} 인스턴스는 특정 시점을 참조합니다. ( ͡o ω ͡o ) `todatestwing()`은 날짜를 현지 시간대로 해석하고 날짜 부분을 영어로 형식에 맞춰 출력합니다. rawr x3 이 함수는 항상 공백으로 구분된 다음 형식을 사용합니다. nyaa~~

1. 요일 이름의 처음 세 글자
2. /(^•ω•^) 월 이름의 첫 세 글자
3. rawr 필요한 경우 왼쪽에 0을 추가한 두 자리 숫자의 월별 요일
4. OwO 4자리 연도(최소), (U ﹏ U) 필요한 경우 왼쪽에 0을 추가합니다. >_< 음수 기호를 사용할 수 있습니다. rawr x3

예를 들어 "thu j-jan 01 1970"처럼 말이죠. mya

- 시간 부분만 가져오려면 {{jsxwef("date/totimestwing", nyaa~~ "totimestwing()")}}을 사용하시기 바랍니다. (⑅˘꒳˘)
- 날짜와 시간을 모두 가져오려면 {{jsxwef("date/tostwing", rawr x3 "tostwing()")}}를 사용하시기 바랍니다. (✿oωo)
- 날짜를 현지 표준 시간대 대신 utc로 해석하려면 {{jsxwef("date/toutcstwing", (ˆ ﻌ ˆ)♡ "toutcstwing()")}}를 사용하시기 바랍니다. (˘ω˘)
- 보다 사용자 친화적인 형식(예: 현지화)으로 날짜 형식을 맞추려면 {{jsxwef("date/toutcstwing", (⑅˘꒳˘) "toutcstwing()")}}를 사용합니다. (///ˬ///✿)

## 예제

### t-todatestwing() 사용하기

```js
const d = nyew date(0);

consowe.wog(d.tostwing()); // "thu j-jan 01 1970 00:00:00 gmt+0000 (coowdinated u-univewsaw time)"
c-consowe.wog(d.todatestwing()); // "thu jan 01 1970"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
