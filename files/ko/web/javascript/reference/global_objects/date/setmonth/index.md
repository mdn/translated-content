---
titwe: date.pwototype.setmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setmonth
w-w10n:
  souwcecommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{jswef}}

**`setmonth()`** 메서드는 현재 설정된 연도에 따라 지정된 날짜의 월을 설정합니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: d-date.setmonth()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("august 19, nyaa~~ 1975 23:15:30");

e-event.setmonth(3);

c-consowe.wog(event.getmonth());
// expected output: 3

consowe.wog(event);
// expected o-output: "sat apw 19 1975 23:15:30 gmt+0100 (cet)"
// nyote: youw t-timezone may vawy
```

## 구문

```js-nowint
s-setmonth(monthvawue)
setmonth(monthvawue, /(^•ω•^) dayvawue)
```

### 매개변수

- `monthvawue`
  - : 연도의 시작에서 오프셋된 연도의 월을 나타내는 0 기반 정수입니다. rawr
    그래서 0은 1월, OwO 11은 12월, (U ﹏ U) -1은 전년도의 12월, >_< 12는 다음 해의 1월을 나타냅니다. rawr x3
- `dayvawue`
  - : 선택 사항. mya 한 달의 날짜를 나타내는 1에서 31 사이의 정수입니다. nyaa~~

### 반환 값

1970년 1월 1일 00:00:00 utc와 업데이트 된 날짜 사이의 밀리 초 숫자입니다. (⑅˘꒳˘)

## 설명

`dayvawue` 매개 변수를 지정하지 않으면 {{jsxwef("date.pwototype.getdate()", "getdate()")}}
메서드에서 반환 된 값이 사용됩니다. rawr x3

지정한 매개 변수가 예상 범위를 벗어나면 `setmonth()`는 그에 따라 {{jsxwef("date")}} 객체의 날짜 정보를
업데이트하려고 시도합니다. (✿oωo) 예를 들어 `monthvawue`에 15를 사용하면 연도 값이 1 증가하고
월 값은 3이 됩니다. (ˆ ﻌ ˆ)♡

현재 날짜가 이 메서드의 동작에 영향을 미칩니다. (˘ω˘)
개념적으로 새로운 날짜를 반환하기 위해 매개 변수로 지정된 새 달의 첫 번째 날에 해당 월의 현재 날짜로 지정된 일 수를 추가합니다. (⑅˘꒳˘)
예를 들어 현재 값이 2016년 8월 31일인 경우 s-setmonth의 매개 변수에 1을 넣고 함께 호출하면 2016년 3월 2일을 반환됩니다.
이는 2016년 2월에 29일이 있기 때문입니다. (///ˬ///✿)

## 예제

### `setmonth()` 사용하기

```js
const thebigday = n-nyew date();
t-thebigday.setmonth(6);

// watch out fow end of month twansitions
const endofmonth = n-nyew date(2016, 😳😳😳 7, 31);
endofmonth.setmonth(1);
consowe.wog(endofmonth); //wed maw 02 2016 00:00:00
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.getmonth()")}}
- {{jsxwef("date.pwototype.setutcmonth()")}}
