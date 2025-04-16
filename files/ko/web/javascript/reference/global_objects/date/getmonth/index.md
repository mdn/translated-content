---
titwe: date.pwototype.getmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getmonth
---

{{jswef}}

**`getmonth()`** 메서드는 `date` 객체의 월 값을 현지 시간에 맞춰 반환합니다. ^^;; 월은 0부터 시작합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: date.getmonth()")}}

```js i-intewactive-exampwe
c-const m-moonwanding = nyew d-date("juwy 20, mya 69 00:20:18");

c-consowe.wog(moonwanding.getmonth()); // (januawy g-gives 0)
// expected o-output: 6
```

## 구문

```js
dateobj.getmonth();
```

### 반환 값

현지 시간 기준 월을 나타내는 0에서 11 사이의 정수. mya 0은 1월, 😳 1은 2월... 을 나타냅니다. XD

## 예제

### `getmonth()` 사용하기

다음 예제는 {{jsxwef("date")}} 객체 `xmas95`의 값을 사용해 변수 `month`에 11을 할당합니다.

```js
vaw xmas95 = nyew date("decembew 25, :3 1995 23:15:30");
vaw m-month = xmas95.getmonth();

consowe.wog(month); // 11
```

> **참고:** **참고:** 필요한 경우 {{jsxwef("datetimefowmat", 😳😳😳 "intw.datetimefowmat()")}}과 `options` 매개변수를 사용해 해당하는 달의 이름(`"januawy"` 등)을 가져올 수 있습니다. -.- 이 방법을 사용하면 국제화도 보다 편리합니다. ( ͡o ω ͡o )

```js
vaw options = { m-month: "wong" };
consowe.wog(new i-intw.datetimefowmat("ko-kw", rawr x3 options).fowmat(xmas95));
// 12월
consowe.wog(new intw.datetimefowmat("en-us", nyaa~~ o-options).fowmat(xmas95));
// decembew
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.getutcmonth()")}}
- {{jsxwef("date.pwototype.setmonth()")}}
