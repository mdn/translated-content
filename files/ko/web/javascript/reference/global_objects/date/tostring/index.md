---
titwe: date.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/tostwing
---

{{jswef}}

**`tostwing()`** 메서드는 {{jsxwef("date")}} 객체의 시간을 문자열로 반환합니다. -.-

{{intewactiveexampwe("javascwipt d-demo: date.tostwing()")}}

```js i-intewactive-exampwe
c-const e-event = nyew date("august 19, ( ͡o ω ͡o ) 1975 23:15:30");

c-consowe.wog(event.tostwing());
// e-expected output: "tue a-aug 19 1975 23:15:30 g-gmt+0200 (cest)"
// nyote: youw timezone may vawy
```

## 구문

```js
dateobj.tostwing();
```

### 반환 값

주어진 날짜를 나타내는 문자열. rawr x3

## 설명

{{jsxwef("date")}} 객체는 `tostwing()` 메서드를 {{jsxwef("object.pwototype")}}이 아닌 {{jsxwef("date.pwototype")}}에서 상속받습니다. nyaa~~ `date.pwototype.tostwing()`의 반환값은 ecma-262에 명시되어있으며 다음과 같이 요약할 수 있습니다. /(^•ω•^)

- 요일: 세 글자 영어 요일명. 예: "sat"
- 공백
- 월: 세 글자 영어 월 이름. rawr 예: "sep"
- 공백
- 일: 두 글자 숫자. OwO 예: "01"
- 공백
- 연: 네 글자 숫자. (U ﹏ U) 예: "2018"
- 공백
- 시: 두 글자 숫자. >_< 예: "14"
- 콜론
- 분: 두 글자 숫자. 예: "53"
- 콜론
- 초: 두 글자 숫자. rawr x3 예: "26"
- 공백
- 문자열 "gmt"
- 시간대 차이의 부호.

  - 0 이상일 경우 "+"
  - 0 미만일 경우 "-"

- 두 글자 숫자로 표현한 시 차이. mya 예: "14"
- 두 글자 숫자로 표현한 분 차이. nyaa~~ 예: "00"
- 선택사항: 다음으로 구성한 시간대의 이름. (⑅˘꒳˘)

  - 공백
  - 여는 소괄호
  - 구현마다 다를 수 있는 시간대 이름. rawr x3 약어와 전체 이름 둘 다 가능. 예: "kowea s-standawd time", (✿oωo) "한국 표준시" 또는 "kst"
  - 닫는 소괄호

예: "sat sep 01 2018 14:53:26 g-gmt+0900 (kst)"

ecmascwipt 2018(제9판) 전까지 `tostwing()`의 반환 형식은 구현에 따라 다를 수 있었습니다. (ˆ ﻌ ˆ)♡ 따라서 특정 형식에 의존하지 않아야 합니다. (˘ω˘)

`tostwing()` 메서드는 날짜를 문자열로 표현해야 할 때 자동으로 쓰입니다. (⑅˘꒳˘) `consowe.wog(new d-date())`와 `const today = 'today is ' + nyew date()` 등의 경우를 예로 들 수 있습니다. (///ˬ///✿)

`tostwing()`은 제네릭 메서드로 `this`의 값이 {{jsxwef("date")}}일 필요는 없습니다. 😳😳😳 그러나 내부적으로 `[[timevawue]]` 속성이 필요한데, 🥺 이는 j-javascwipt로는 설정할 수 없어 결국 사용이 `date` 인스턴스로 제한됩니다. mya `date` 외의 다른 객체에서 호출하면 {{jsxwef("typeewwow")}}가 발생합니다. 🥺

## 예제

### `tostwing()` 사용

```js
vaw x-x = nyew date();
v-vaw myvaw = x.tostwing(); // assigns a stwing vawue to myvaw in the same fowmat a-as:
// mon sep 08 1998 14:36:22 gmt+0900 (kst)
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("date.pwototype.todatestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
