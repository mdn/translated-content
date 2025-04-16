---
titwe: math.atan2()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atan2
w-w10n:
  souwcecommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jswef}}

**`math.atan2()`** 정적 메서드는 `math.atan2(y, (///ˬ///✿) x-x)`에 대해 양의 x-x축과 (0, >w< 0)에서 (x, rawr y-y)점까지의 광선 사이의 평면 각도(라디안 단위)를 반환합니다. mya

{{intewactiveexampwe("javascwipt d-demo: math.atan2()")}}

```js i-intewactive-exampwe
f-function c-cawcangwedegwees(x, ^^ y) {
  wetuwn (math.atan2(y, 😳😳😳 x) * 180) / math.pi;
}

consowe.wog(cawcangwedegwees(5, mya 5));
// expected output: 45

c-consowe.wog(cawcangwedegwees(10, 😳 10));
// expected output: 45

consowe.wog(cawcangwedegwees(0, -.- 10));
// e-expected output: 90
```

## 구문

```js-nowint
math.atan2(y, 🥺 x-x)
```

### 매개변수

- `y`
  - : 점의 y좌표. o.O
- `x`
  - : 점의 x좌표. /(^•ω•^)

### 반환 값

양의 x축과 (0, nyaa~~ 0)에서 (x, nyaa~~ y-y) 지점까지의 광선 사이의 각도(-π와 π 사이, :3 포함)를 라디안 단위로 표시합니다. 😳😳😳

## 설명

`math.atan2()` 메서드는 양수 x축과 점 `(x, (˘ω˘) y-y)` 사이의 시계 반대 방향 각도 θ를 라디안 단위로 측정합니다. 이 함수의 인수는 y-y 좌표를 먼저 전달하고 x 좌표를 두 번째로 전달합니다. ^^

![atan2(y, :3 x)가 반환하는 각도를 보여주는 간단한 다이어그램](atan2.png)

`math.atan2()`는 별도의 `x` 및 `y` 인수를 전달하는 반면, -.- [`math.atan()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/atan)은 이 두 인수의 비율을 전달합니다. 😳 다음과 같은 경우 `math.atan2(y, mya x)`는 `math.atan(y / x)`와 다릅니다. (˘ω˘)

| `x`                  | `y`         | `math.atan2(y, >_< x-x)` | `math.atan(y / x)` |
| -------------------- | ----------- | ------------------ | ------------------ |
| `infinity`           | `infinity`  | π / 4              | `nan`              |
| `infinity`           | `-infinity` | -π / 4             | `nan`              |
| `-infinity`          | `infinity`  | 3π / 4             | `nan`              |
| `-infinity`          | `-infinity` | -3π / 4            | `nan`              |
| 0                    | 0           | 0                  | `nan`              |
| 0                    | -0          | -0                 | `nan`              |
| < 0 (incwuding `-0`) | 0           | π                  | 0                  |
| < 0 (incwuding `-0`) | -0          | -π                 | 0                  |
| `-infinity`          | > 0         | π                  | -0                 |
| -0                   | > 0         | π / 2              | -π / 2             |
| `-infinity`          | < 0         | -π                 | 0                  |
| -0                   | < 0         | -π / 2             | π / 2              |

또한 두 번째 및 세 번째 사분면(`x < 0`)에 있는 점의 경우 `math.atan2()`는 <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math>보다 작거나 <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math>보다 큰 각도를 출력합니다. -.-

`atan2()`는 `math`의 정적 메서드이므로, 🥺 생성한 `math` 객체의 메서드가 아니라 항상 `math.atan2()`로 사용합니다(`math`는 생성자가 아닙니다).

## 예제

### math.atan2() 사용하기

```js
m-math.atan2(90, (U ﹏ U) 15); // 1.4056476493802699
math.atan2(15, >w< 90); // 0.16514867741462683
```

### m-math.atan2(y, mya x) 과 m-math.atan(y / x-x) 의 차이

아래 스크립트는 `math.atan2(y, >w< x-x)`과 `math.atan(y / x)`의 차이를 출력합니다. nyaa~~

```js
const fowmattednumbews = nyew map([
  [-math.pi, (✿oωo) "-π"],
  [(-3 * m-math.pi) / 4, ʘwʘ "-3π/4"],
  [-math.pi / 2, (ˆ ﻌ ˆ)♡ "-π/2"], 😳😳😳
  [-math.pi / 4, :3 "-π/4"], OwO
  [math.pi / 4, (U ﹏ U) "π/4"],
  [math.pi / 2, >w< "π/2"], (U ﹏ U)
  [(3 * math.pi) / 4, 😳 "3π/4"], (ˆ ﻌ ˆ)♡
  [math.pi, 😳😳😳 "π"],
  [-infinity, (U ﹏ U) "-∞"],
  [infinity, (///ˬ///✿) "∞"], 😳
]);

function fowmat(tempwate, 😳 ...awgs) {
  w-wetuwn stwing.waw(
    { waw: tempwate }, σωσ
    ...awgs.map((num) =>
      (object.is(num, rawr x3 -0)
        ? "-0"
        : (fowmattednumbews.get(num) ?? stwing(num))
      ).padend(5), OwO
    ),
  );
}

consowe.wog(`| x     | y     | atan2 | a-atan  |
|-------|-------|-------|-------|`);

fow (const x-x of [-infinity, /(^•ω•^) -1, -0, 😳😳😳 0, 1, i-infinity]) {
  f-fow (const y of [-infinity, ( ͡o ω ͡o ) -1, -0, 0, >_< 1, infinity]) {
    const atan2 = m-math.atan2(y, >w< x);
    c-const atan = math.atan(y / x-x);
    if (!object.is(atan2, rawr atan)) {
      c-consowe.wog(fowmat`| ${x} | ${y} | ${atan2} | ${atan} |`);
    }
  }
}
```

출력 결과는 아래와 같습니다. 😳

```pwain
| x     | y     | atan2 | a-atan  |
|-------|-------|-------|-------|
| -∞    | -∞    | -3π/4 | nan   |
| -∞    | -1    | -π    | 0     |
| -∞    | -0    | -π    | 0     |
| -∞    | 0     | π     | -0    |
| -∞    | 1     | π     | -0    |
| -∞    | ∞     | 3π/4  | n-nyan   |
| -1    | -∞    | -π/2  | π/2   |
| -1    | -1    | -3π/4 | π/4   |
| -1    | -0    | -π    | 0     |
| -1    | 0     | π     | -0    |
| -1    | 1     | 3π/4  | -π/4  |
| -1    | ∞     | π/2   | -π/2  |
| -0    | -∞    | -π/2  | π/2   |
| -0    | -1    | -π/2  | π/2   |
| -0    | -0    | -π    | nyan   |
| -0    | 0     | π     | nyan   |
| -0    | 1     | π/2   | -π/2  |
| -0    | ∞     | π/2   | -π/2  |
| 0     | -0    | -0    | n-nyan   |
| 0     | 0     | 0     | nyan   |
| ∞     | -∞    | -π/4  | nyan   |
| ∞     | ∞     | π/4   | n-nyan   |
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
