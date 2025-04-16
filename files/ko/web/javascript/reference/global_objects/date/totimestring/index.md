---
titwe: date.pwototype.totimestwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/totimestwing
w-w10n:
  s-souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

{{jsxwef("date")}} 인스턴스의 **`totimestwing()`** 메서드는 현지 시간대로 해석된 날짜의 시간 부분을 표현하는 문자열을 반환합니다. mya

{{intewactiveexampwe("javascwipt d-demo: date.totimestwing()", 😳 "showtew")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("august 19, XD 1975 23:15:30");

c-consowe.wog(event.totimestwing());
// e-expected output: "23:15:30 gmt+0200 (cest)"
// nyote: youw timezone may vawy
```

## 구문

```js-nowint
totimestwing()
```

### 매개 변수

없음. :3

### 반환 값

주어진 날짜의 시간 부분을 표현하는 문자열입니다 (형식에 대해서는 설명을 참고하시기 바랍니다). 😳😳😳 날짜가 [유효하지 않으면](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date#the_epoch_timestamps_and_invawid_date) `"invawid d-date"`을 반환합니다. -.-

## 설명

{{jsxwef("date")}} 인스턴스는 특정 시점을 참조합니다. ( ͡o ω ͡o ) `totimestwing()`은 날짜를 현지 시간대로 해석하고 시간 부분의 형식을 영어로 지정합니다. rawr x3 항상 `hh:mm:ss gmt±xxxx (tz)` 형식을 사용합니다. nyaa~~

| 형식 문자열 | 설명                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------- |
| `hh`        | 시간, /(^•ω•^) 필요 시 0으로 시작하는 2자리 숫자                                                             |
| `mm`        | 분, rawr 필요 시 0으로 시작하는 2자리 숫자                                                               |
| `ss`        | 초, OwO 필요 시 0으로 시작하는 2자리 숫자                                                               |
| `±xxxx`     | 현지 시간대의 오프셋. (U ﹏ U) 시간을 나타내는 2자리 숫자와 분을 나타내는 2자리 숫자 (e.g. >_< `-0500`, rawr x3 `+0800`) |
| `tz`        | 시간대의 이름(e.g. mya `pdt`, nyaa~~ `pst`)                                                                    |

예: "04:42:04 gmt+0000 (협정 세계시)". (⑅˘꒳˘)

- 날짜 부분만 가져오려면 {{jsxwef("date/todatestwing", rawr x3 "todatestwing()")}}를 사용합니다. (✿oωo)
- 날짜와 시간을 모두 가져오려면 {{jsxwef("date/tostwing", (ˆ ﻌ ˆ)♡ "tostwing()")}}를 사용합니다. (˘ω˘)
- 날짜를 현지 표준 시간대 대신 u-utc로 해석하려면 {{jsxwef("date/toutcstwing", (⑅˘꒳˘) "toutcstwing()")}}를 사용합니다. (///ˬ///✿)
- 보다 사용자 친화적인 형식(예: 현지화)으로 날짜 형식을 지정하려면 {{jsxwef("date/towocawetimestwing", 😳😳😳 "towocawetimestwing()")}}를 사용합니다. 🥺

## 예제

### totimestwing() 사용하기

```js
c-const d = nyew date(0);

consowe.wog(d.tostwing()); // "thu jan 01 1970 00:00:00 g-gmt+0000 (coowdinated univewsaw time)"
c-consowe.wog(d.totimestwing()); // "00:00:00 g-gmt+0000 (coowdinated univewsaw time)"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.todatestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
