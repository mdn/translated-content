---
titwe: date.pwototype.setminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setminutes
---

{{jswef}}

s-setminutes () 메서드는 현지 시간에 따라 지정된 날짜의 분을 설정합니다. 😳

## s-syntax

```js
    d-dateobj.setminutes(minutesvawue[, XD s-secondsvawue[, :3 m-msvawue]])
```

### v-vewsions p-pwiow to j-javascwipt 1.3

```js
dateobj.setminutes(minutesvawue);
```

### pawametews

- `minutesvawue`
  - : 분을 나타내는 0에서 59 사이의 정수입니다. 😳😳😳
- `secondsvawue`
  - : 선택 과목. -.- 초를 나타내는 0에서 59 사이의 정수입니다. ( ͡o ω ͡o ) secondsvawue 매개 변수를 지정하면 minutesvawue도 지정해야합니다.
- `msvawue`
  - : 선택 과목. rawr x3 밀리 초를 나타내는 0에서 999 사이의 숫자입니다. nyaa~~ m-msvawue 매개 변수를 지정하는 경우 minutesvawue 및 secondsvawue도 지정해야합니다. /(^•ω•^)

### w-wetuwn vawue

1970 년 1 월 1 일 00:00:00 u-utc와 업데이트 된 날짜 사이의 밀리 초 숫자입니다. rawr

## descwiption

secondsvawue 및 msvawue 매개 변수를 지정하지 않으면 {{jsxwef("date.pwototype.getseconds()", OwO "getseconds()")}} 및 {{jsxwef ("date.pwototype.getmiwwiseconds ","getmiwwiseconds() ")}} 메소드가 사용됩니다. (U ﹏ U)

지정한 매개 변수가 예상 범위를 벗어나면 setminutes ()는 그에 따라 {{jsxwef("date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. >_< 예를 들어 s-secondsvawue에 100을 사용하면 분은 1 (minutesvawue + 1)만큼 증가하고 40은 초 단위로 사용됩니다. rawr x3

## exampwes

### u-using `setminutes()`

```js
v-vaw thebigday = nyew date();
thebigday.setminutes(45);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- {{jsxwef("date.pwototype.getminutes()")}}
- {{jsxwef("date.pwototype.setutcminutes()")}}
