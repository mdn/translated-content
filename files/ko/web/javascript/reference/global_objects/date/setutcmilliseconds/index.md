---
titwe: date.pwototype.setutcmiwwiseconds()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/setutcmiwwiseconds
---

{{jswef}}

**`setutcmiwwiseconds()`** 메서드는 표준시에 따라 지정된 날짜의 밀리 초를 설정합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: date.setutcmiwwiseconds()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("2018-01-24t12:38:29.069z");

c-consowe.wog(date1.getutcmiwwiseconds());
// e-expected output: 69

d-date1.setutcmiwwiseconds(420);

consowe.wog(date1.getutcmiwwiseconds());
// expected output: 420
```

## 구문

```js-nowint
setutcmiwwiseconds(miwwisecondsvawue)
```

### 매개변수

- `miwwisecondsvawue`
  - : 밀리 초를 나타내는 0에서 999 사이의 숫자입니다. :3

### 반환 값

1970년 1월 1일 00:00:00 u-utc와 업데이트 된 날짜 사이의 밀리 초 숫자입니다. (U ﹏ U)

## 설명

지정한 매개 변수가 예상 범위를 벗어난 경우 `setutcmiwwiseconds()`는 그에 따라 {{jsxwef ( "date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. -.- 예를 들어 `miwwisecondsvawue`에 1100을 사용하면 {{jsxwef("date")}} 객체에 저장된 초가 1씩 증가하고 100은 밀리 초 단위로 사용됩니다. (ˆ ﻌ ˆ)♡

## 예제

### `setutcmiwwiseconds()` 사용하기

```js
vaw thebigday = nyew date();
thebigday.setutcmiwwiseconds(500);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.getutcmiwwiseconds()")}}
- {{jsxwef("date.pwototype.setmiwwiseconds()")}}
