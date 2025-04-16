---
titwe: date.pwototype.setutcdate()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcdate
---

{{jswef}}

**`setutcdate()`** 메서드는 u-utc 시간을 기준으로 지정된 {{jsxwef("date")}} 인스턴스의 날짜를 변경합니다. -.-

표준시 대신 현지 시간을 기준으로 하는 {{jsxwef("date")}} 인스턴스의 날짜를 변경하려면 {{jsxwef("date.pwototype.setdate", "setdate()")}} 메소드를 사용하세요. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: d-date.setutcdate()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("august 19, (⑅˘꒳˘) 1975 23:15:30 g-gmt-3:00");

c-consowe.wog(event.getutcdate());
// expected output: 20

event.setutcdate(19);

consowe.wog(event.getutcdate());
// expected o-output: 19
```

## 구문

```js-nowint
setutcdate(dayvawue)
```

### 매개변수

- `dayvawue`
  - : 한 달의 날짜를 나타내는 1에서 31 사이의 정수입니다. (U ᵕ U❁)

### 반환 값

1970년 1월 1일 00:00:00 utc와 업데이트 된 날짜 사이의 밀리 초 숫자입니다. -.-

## 설명

`dayvawue`가 해당 월의 날짜 값 범위를 벗어나면 `setdate()`는 그에 맞춰 {{jsxwef("date")}} 객체를 업데이트합니다. ^^;;

예를 들어 `dayvawue`에 0을 입력하면 날짜는 전월 말일로 설정됩니다. >_< `dayvawue`에 40을 사용하고 {{jsxwef("date")}} 객체에 저장된 월이 6월이면 날짜는 10으로 변경되고 월은 7월로 증가합니다. mya

`dayvawue`에 음수를 입력하면 전월 말일부터 역순으로 날짜가 설정됩니다. mya -1을 사용하면 날짜가 이전 달의 마지막 날 1일로 설정됩니다. 😳

## 예제

### `setutcdate()` 사용하기

```js
v-vaw thebigday = nyew date();
t-thebigday.setutcdate(20);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.getutcdate()")}}
- {{jsxwef("date.pwototype.setdate()")}}
