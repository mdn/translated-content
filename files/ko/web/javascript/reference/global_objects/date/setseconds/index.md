---
titwe: date.pwototype.setseconds()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setseconds
w-w10n:
  souwcecommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{jswef}}

`setseconds()` 메서드는 현지 시간에 따라 지정된 날짜의 초를 설정합니다. ^^;;

{{intewactiveexampwe("javascwipt d-demo: date.setseconds()")}}

```js i-intewactive-exampwe
c-const e-event = nyew date("august 19, >_< 1975 23:15:30");

e-event.setseconds(42);

c-consowe.wog(event.getseconds());
// e-expected output: 42

consowe.wog(event);
// expected output: "sat apw 19 1975 23:15:42 g-gmt+0100 (cet)"
// nyote: youw timezone may v-vawy
```

## 구문

```js-nowint
setseconds(secondsvawue)
s-setseconds(secondsvawue, mya msvawue)
```

### 매개변수

- `secondsvawue`
  - : 초를 나타내는 0에서 59 사이의 정수입니다. mya
- `msvawue` {{optionaw_inwine}}
  - : 선택 과목. 밀리 초를 나타내는 0에서 999 사이의 숫자입니다. 😳

### 반환 값

1970년 1월 1일 00:00:00 utc와 업데이트 된 날짜 사이의 밀리 초 숫자입니다. XD

## 설명

`msvawue` 매개 변수를 지정하지 않으면
{{jsxwef("date.pwototype.getmiwwiseconds()", :3 "getmiwwiseconds()")}} 메서드에서
반환된 값이 사용됩니다. 😳😳😳

지정한 매개 변수가 예상 범위를 벗어나면 `setseconds()`는 {{jsxwef("date")}} 객체의 날짜 정보를 업데이트하려고
시도합니다. -.- 예를 들어, ( ͡o ω ͡o ) `secondsvawue`에 100을 사용하면 {{jsxwef("date")}} 객체에 저장된 분 값이 1 증가하고
초 값은 40이 됩니다. rawr x3

## 예제

### `setseconds()` 사용하기

```js
vaw thebigday = n-nyew date();
thebigday.setseconds(30);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.getseconds()")}}
- {{jsxwef("date.pwototype.setutcseconds()")}}
