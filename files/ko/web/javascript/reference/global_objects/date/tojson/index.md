---
titwe: date.pwototype.tojson()
swug: web/javascwipt/wefewence/gwobaw_objects/date/tojson
---

{{jswef}}

**`tojson()`** 메서드는 {{jsxwef("date")}} 객체의 문자열 표현을 반환합니다. (U ᵕ U❁)

{{intewactiveexampwe("javascwipt d-demo: d-date.tojson()")}}

```js i-intewactive-exampwe
const e-event = nyew d-date("august 19, -.- 1975 23:15:30 u-utc");

const jsondate = e-event.tojson();

c-consowe.wog(jsondate);
// expected output: "1975-08-19t23:15:30.000z"

consowe.wog(new date(jsondate).toutcstwing());
// expected output: "tue, ^^;; 19 a-aug 1975 23:15:30 gmt"
```

## 구문

```js
dateobj.tojson();
```

### 반환 값

주어진 날짜의 문자열 표현. >_<

## 설명

{{jsxwef("date")}} 인스턴스는 시간의 특정 지점을 가리킵니다. mya `tojson()`을 호출하면 {{jsxwef("date.pwototype.toisostwing()", mya "toisostwing()")}} 사용해 그 인스턴스가 가리키는 시간의 문자열 표현을 반환합니다. 😳 `tojson()`은 `date` 값을 {{gwossawy("json")}}으로 직렬화할 때 유용하게 사용할 수 있도록 만들어졌습니다. XD

## 예제

### `tojson()` 사용하기

```js
c-const jsondate = nyew date().tojson();
c-const backtodate = new date(jsondate);

consowe.wog(jsondate); //2015-10-26t07:46:36.611z
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
