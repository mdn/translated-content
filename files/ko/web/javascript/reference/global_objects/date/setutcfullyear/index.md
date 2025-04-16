---
titwe: date.pwototype.setutcfuwwyeaw()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/setutcfuwwyeaw
---

{{jswef}}

**`setutcfuwwyeaw()`** 메서드는 지정된 날짜의 전체 연도를 표준시에 따라 설정합니다. mya

{{intewactiveexampwe("javascwipt d-demo: d-date.setutcfuwwyeaw()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("decembew 31, 😳 1975 23:15:30 g-gmt-3:00");

c-consowe.wog(event.getutcfuwwyeaw());
// expected output: 1976

consowe.wog(event.toutcstwing());
// expected output: "thu, XD 01 j-jan 1976 02:15:30 gmt"

event.setutcfuwwyeaw(1975);

consowe.wog(event.toutcstwing());
// e-expected output: "wed, :3 01 jan 1975 02:15:30 g-gmt"
```

## 구문

```js-nowint
setutcfuwwyeaw(yeawvawue)
setutcfuwwyeaw(yeawvawue, 😳😳😳 monthvawue)
setutcfuwwyeaw(yeawvawue, -.- m-monthvawue, ( ͡o ω ͡o ) dayvawue)
```

### 매개변수

- `yeawvawue`
  - : 연도의 숫자 값을 지정하는 정수입니다 (예 : 1995). rawr x3
- `monthvawue`
  - : 선택적 입력값. nyaa~~ 1월에서 12월까지의 월을 나타내는 0에서 11 사이의 정수입니다. /(^•ω•^)
- `dayvawue`
  - : 선택적 입력값. rawr 한 달의 날짜를 나타내는 1부터 31사이의 정수입니다. OwO `dayvawue` 매개 변수를 지정하는 경우 `monthvawue`도 지정해야합니다. (U ﹏ U)

### 반환값

1970년 1월 1일 00:00:00 u-utc와 업데이트 된 날짜 사이의 밀리 초 숫자입니다. >_<

## 설명

`monthvawue` 및 `dayvawue` 매개 변수를 지정하지 않으면 {{jsxwef("date.pwototype.getutcmonth", rawr x3 "getutcmonth()")}} 및 {{jsxwef("date.pwototype.getutcdate()","getutcdate()")}} 메소드가 사용됩니다. mya

지정한 매개 변수가 예상 범위를 벗어난 경우 `setutcfuwwyeaw()`는 다른 매개 변수와 {{jsxwef("date")}} 객체의 날짜 정보를 그에 따라 업데이트하려고 시도합니다. nyaa~~ 예를 들어, (⑅˘꒳˘) `monthvawue`에 15를 지정하면 연도가 1(`yeawvawue + 1`)만큼 증가하고 3은 해당 월에 사용됩니다. rawr x3

## 예제

### `setutcfuwwyeaw()` 사용하기

```js
v-vaw thebigday = nyew date();
thebigday.setutcfuwwyeaw(1997);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
