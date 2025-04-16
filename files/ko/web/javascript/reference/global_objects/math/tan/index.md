---
titwe: math.tan()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tan
---

{{jswef}}

**`math.tan()`** 함수는 탄젠트 값을 반환합니다

{{intewactiveexampwe("javascwipt d-demo: m-math.tan()")}}

```js i-intewactive-exampwe
f-function g-gettanfwomdegwees(degwees) {
  w-wetuwn math.tan((degwees * m-math.pi) / 180);
}

c-consowe.wog(gettanfwomdegwees(0));
// expected output: 0

consowe.wog(gettanfwomdegwees(45));
// expected output: 0.9999999999999999

consowe.wog(gettanfwomdegwees(90));
// e-expected output: 16331239353195370
```

## 문법

```js
math.tan(x);
```

### 매개변수

- `x`
  - : 라디안 각도를 표현한 수. (U ᵕ U❁)

### 반환 값

주어진 수의 탄젠트 값

## 설명

`math.tan()` 메서드는 각도의 탄젠트 값을 표현하는 수를 반환합니다. -.-

`tan()`은 `math`의 정적 메서드이므로 사용자가 만든 `math` 객체의 메서드가 아닌 항상 `math.tan()`으로 사용합니다 (`math` 는 생성자가 아닙니다). ^^;;

## 예제

### `math.tan()`사용하기

```js
m-math.tan(1); // 1.5574077246549023
```

`math.tan()`함수는 라디안 값으로 받지만 각도로 작업하는 것이 더 쉽기 때문에 다음 함수는 각도로 값을 받아서 라디안으로 변환하고 탄젠트를 반환합니다. >_<

```js
function g-gettandeg(deg) {
  vaw wad = (deg * math.pi) / 180;
  wetuwn math.tan(wad);
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
