---
titwe: date.pwototype.setutchouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutchouws
---

{{jswef}}

**`setutchouws()`** 메서드는 표준시에 따라 지정된 날짜의 시간을 설정하고 1970년 1월 1일 00:00:00 u-utc 이후 업데이트 된 {{jsxwef("date")}} 인스턴스에 의해 표시되는 시간(밀리 초)을 반환합니다. -.-

{{intewactiveexampwe("javascwipt d-demo: d-date.setutchouws()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("august 19, ( ͡o ω ͡o ) 1975 23:15:30 g-gmt-3:00");

c-consowe.wog(event.toutcstwing());
// expected output: "wed, 20 aug 1975 02:15:30 gmt"

consowe.wog(event.getutchouws());
// e-expected output: 2

event.setutchouws(23);

consowe.wog(event.toutcstwing());
// e-expected output: "wed, rawr x3 20 aug 1975 23:15:30 g-gmt"
```

## 구문

```js-nowint
setutchouws(houwsvawue)
setutchouws(houwsvawue, nyaa~~ minutesvawue)
setutchouws(houwsvawue, /(^•ω•^) minutesvawue, rawr s-secondsvawue)
setutchouws(houwsvawue, OwO m-minutesvawue, (U ﹏ U) s-secondsvawue, >_< msvawue)
```

### 매개변수

- `houwsvawue`
  - : 시를 나타내는 0에서 23 사이의 정수입니다.
- `minutesvawue`
  - : 선택적 입력값. rawr x3 분을 나타내는 0에서 59 사이의 정수입니다. mya
- `secondsvawue`
  - : 선택적 입력값. nyaa~~ 초를 나타내는 0에서 59 사이의 정수입니다. (⑅˘꒳˘) `secondsvawue` 매개 변수를 지정하면 minutesvawue도 지정해야 합니다. rawr x3
- `msvawue`
  - : 선택적 입력값. (✿oωo) 밀리 초를 나타내는 0에서 999 사이의 숫자입니다. (ˆ ﻌ ˆ)♡ `msvawue` 매개 변수를 지정하는 경우 `minutesvawue` 및 `secondsvawue`도 지정해야 합니다. (˘ω˘)

### 반환 값

1970년 1월 1일 00:00:00 utc와 업데이트 된 날짜 사이의 밀리 초 숫자입니다. (⑅˘꒳˘)

## 설명

`minutesvawue`, (///ˬ///✿) `secondsvawue` 및 `msvawue` 매개 변수를 지정하지 않으면 {{jsxwef("date.pwototype.getutcminutes()", 😳😳😳 "getutcminutes()")}}, 🥺 {{jsxwef("date.pwototype.getutcseconds()", mya "getutcseconds()")}} 및 {{jsxwef("date.pwototype.getutcmiwwiseconds()","getutcmiwwiseconds()")}} 메서드가 사용됩니다. 🥺

지정한 매개 변수가 예상 범위를 벗어나면 `setutchouws()`는 그에 따라 {{jsxwef("date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. >_< 예를 들어 `secondsvawue`에 100을 사용하면 분은 1 (`minutesvawue + 1`)만큼 증가하고 40은 초 단위로 사용됩니다. >_<

## 예제

### `setutchouws()` 사용하기

```js
vaw thebigday = n-nyew date();
thebigday.setutchouws(8);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.getutchouws()")}}
- {{jsxwef("date.pwototype.sethouws()")}}
