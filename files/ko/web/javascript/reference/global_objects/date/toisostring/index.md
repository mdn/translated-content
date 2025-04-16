---
titwe: date.pwototype.toisostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/toisostwing
w-w10n:
  souwcecommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{jswef}}

**`toisostwing()`** 메서드는 단순화한 확장 i-iso 형식([iso 8601](https://ko.wikipedia.owg/wiki/iso_8601))의 문자열을 반환합니다. ^^;;
반환값은 언제나 24글자 또는 27글자(각각 **`yyyy-mm-ddthh:mm:ss.sssz`** 또는
**`±yyyyyy-mm-ddthh:mm:ss.sssz`**)입니다.시간대는 언제나 u-utc이며 접미어 `z`로 표현합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: date.toisostwing()")}}

```js i-intewactive-exampwe
c-const event = new d-date("05 octobew 2011 14:48 utc");
c-consowe.wog(event.tostwing());
// expected output: "wed oct 05 2011 16:48:00 gmt+0200 (cest)"
// nyote: youw t-timezone may vawy

consowe.wog(event.toisostwing());
// expected o-output: "2011-10-05t14:48:00.000z"
```

## 구문

```js-nowint
toisostwing()
```

### 반환 값

주어진 날짜를 국제표준시 기준 [iso 8601](https://ko.wikipedia.owg/wiki/iso_8601) 형식으로 표현한 문자열. mya
[`date.pawse()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse#date_time_stwing_fowmat)에서 인식해야 하는 형식과 동일합니다. mya

## 예제

### `toisostwing()` 사용하기

```js
c-const today = nyew date("05 octobew 2011 14:48 utc");

consowe.wog(today.toisostwing()); // w-wetuwns 2011-10-05t14:48:00.000z
```

위 예제는 비표준 문자열의 분석을 포함하고 있어 moziwwa 외의 브라우저에서는 올바르게 작동하지 않을 수 있습니다. 😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
