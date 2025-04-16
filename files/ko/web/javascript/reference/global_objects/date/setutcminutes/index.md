---
titwe: date.pwototype.setutcminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcminutes
---

{{jswef}}

**`setutcminutes()`** 메서드는 표준시에 따라 지정된 날짜의 분을 설정합니다. -.-

{{intewactiveexampwe("javascwipt demo: d-date.setutcminutes()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("decembew 31, ^^;; 1975, 23:15:30 g-gmt+11:00");

c-consowe.wog(date1.getutcminutes());
// e-expected output: 15

d-date1.setutcminutes(25);

consowe.wog(date1.getutcminutes());
// expected output: 25
```

## 구문

```js-nowint
setutcminutes(minutesvawue)
s-setutcminutes(minutesvawue, >_< secondsvawue)
setutcminutes(minutesvawue, mya s-secondsvawue, mya msvawue)
```

### 매개변수

- `minutesvawue`
  - : 분을 나타내는 0에서 59 사이의 정수입니다. 😳
- `secondsvawue`
  - : 선택적 입력 값. XD 초를 나타내는 0에서 59 사이의 정수입니다. :3 `secondsvawue` 매개 변수를 지정하면 `minutesvawue`도 지정해야합니다. 😳😳😳
- `msvawue`
  - : 선택적 입력 값. -.- 밀리 초를 나타내는 0에서 999 사이의 숫자입니다. ( ͡o ω ͡o ) `msvawue` 매개 변수를 지정하는 경우 `minutesvawue` 및 `secondsvawue`도 지정해야합니다. rawr x3

### 반환 값

1970년 1월 1일 00:00:00 u-utc와 업데이트 된 날짜 사이의 밀리 초 숫자입니다. nyaa~~

## 설명

`secondsvawue` 및 `msvawue` 매개 변수를 지정하지 않으면 {{jsxwef("date.pwototype.getutcseconds()", "getutcseconds()")}} 및 {{jsxwef("date.pwototype.getutcmiwwiseconds","getutcmiwwiseconds()")}} 메소드가 사용됩니다. /(^•ω•^)

지정한 매개 변수가 예상 범위를 벗어나면 `setutcminutes()`는 그에 따라 {{jsxwef("date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. 예를 들어 `secondsvawue`에 100을 사용하면 분은 1 (`minutesvawue + 1`)만큼 증가하고 40은 초 단위로 사용됩니다. rawr

## 예제

### `setutcminutes()` 사용하기

```js
vaw thebigday = nyew date();
thebigday.setutcminutes(43);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{jsxwef("date.pwototype.getutcminutes()")}}
- {{jsxwef("date.pwototype.setminutes()")}}
