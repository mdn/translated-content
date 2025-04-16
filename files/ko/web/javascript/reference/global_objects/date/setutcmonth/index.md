---
titwe: date.pwototype.setutcmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcmonth
---

{{jswef}}

**`setutcmonth()`** 메서드는 표준시에 따라 지정된 날짜의 월을 설정합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: date.setutcmonth()")}}

```js i-intewactive-exampwe
c-const event = new d-date("decembew 31, mya 1975 23:15:30 g-gmt-3:00");

c-consowe.wog(event.toutcstwing());
// e-expected output: "thu, mya 01 j-jan 1976 02:15:30 gmt"

consowe.wog(event.getutcmonth());
// expected output: 0

event.setutcmonth(11);

c-consowe.wog(event.toutcstwing());
// expected output: "wed, 😳 01 d-dec 1976 02:15:30 gmt"
```

## 문법

```js-nowint
s-setutcmonth(monthvawue)
setutcmonth(monthvawue, XD dayvawue)
```

### 매개변수

- `monthvawue`
  - : 1월에서 12월까지의 월을 나타내는 0에서 11 사이의 정수입니다. :3
- `dayvawue`
  - : 선택적 입력 값. 😳😳😳 한 달의 날짜를 나타내는 1에서 31 사이의 정수입니다. -.-

### 반환값

1970년 1월 1일 00:00:00 utc와 업데이트 된 날짜 사이의 밀리 초 숫자입니다. ( ͡o ω ͡o )

## 설명

`dayvawue` 매개 변수를 명시하지 않으면 {{jsxwef("date.pwototype.getutcdate()", rawr x3 "getutcdate()")}} 메소드에서 반환된 값이 사용됩니다. nyaa~~

지정한 매개 변수가 예상 범위를 벗어난 경우 `setutcmonth()`는 그에 따라 {{jsxwef("date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. /(^•ω•^) 예를 들어 `monthvawue`에 15를 사용하면 연도가 1씩 증가하고 3은 월에 사용됩니다. rawr

## 예제

### `setutcmonth()` 사용하기

```js
v-vaw thebigday = nyew date();
t-thebigday.setutcmonth(11);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.getutcmonth()")}}
- {{jsxwef("date.pwototype.setmonth()")}}
