---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{JSRef}}

**`Math.atan2()`** 정적 메서드는 `Math.atan2(y, x)`에 대해 양의 x축과 (0, 0)에서 (x, y)점까지의 광선 사이의 평면 각도(라디안 단위)를 반환합니다.

{{InteractiveExample("JavaScript Demo: Math.atan2()")}}

```js interactive-example
function calcAngleDegrees(x, y) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

console.log(calcAngleDegrees(5, 5));
// Expected output: 45

console.log(calcAngleDegrees(10, 10));
// Expected output: 45

console.log(calcAngleDegrees(0, 10));
// Expected output: 90
```

## 구문

```js-nolint
Math.atan2(y, x)
```

### 매개변수

- `y`
  - : 점의 y좌표.
- `x`
  - : 점의 x좌표.

### 반환 값

양의 x축과 (0, 0)에서 (x, y) 지점까지의 광선 사이의 각도(-π와 π 사이, 포함)를 라디안 단위로 표시합니다.

## 설명

`Math.atan2()` 메서드는 양수 x축과 점 `(x, y)` 사이의 시계 반대 방향 각도 θ를 라디안 단위로 측정합니다. 이 함수의 인수는 y 좌표를 먼저 전달하고 x 좌표를 두 번째로 전달합니다.

![atan2(y, x)가 반환하는 각도를 보여주는 간단한 다이어그램](atan2.png)

`Math.atan2()`는 별도의 `x` 및 `y` 인수를 전달하는 반면, [`Math.atan()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/atan)은 이 두 인수의 비율을 전달합니다. 다음과 같은 경우 `Math.atan2(y, x)`는 `Math.atan(y / x)`와 다릅니다.

| `x`                  | `y`         | `Math.atan2(y, x)` | `Math.atan(y / x)` |
| -------------------- | ----------- | ------------------ | ------------------ |
| `Infinity`           | `Infinity`  | π / 4              | `NaN`              |
| `Infinity`           | `-Infinity` | -π / 4             | `NaN`              |
| `-Infinity`          | `Infinity`  | 3π / 4             | `NaN`              |
| `-Infinity`          | `-Infinity` | -3π / 4            | `NaN`              |
| 0                    | 0           | 0                  | `NaN`              |
| 0                    | -0          | -0                 | `NaN`              |
| < 0 (including `-0`) | 0           | π                  | 0                  |
| < 0 (including `-0`) | -0          | -π                 | 0                  |
| `-Infinity`          | > 0         | π                  | -0                 |
| -0                   | > 0         | π / 2              | -π / 2             |
| `-Infinity`          | < 0         | -π                 | 0                  |
| -0                   | < 0         | -π / 2             | π / 2              |

또한 두 번째 및 세 번째 사분면(`x < 0`)에 있는 점의 경우 `Math.atan2()`는 <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math>보다 작거나 <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math>보다 큰 각도를 출력합니다.

`atan2()`는 `Math`의 정적 메서드이므로, 생성한 `Math` 객체의 메서드가 아니라 항상 `Math.atan2()`로 사용합니다(`Math`는 생성자가 아닙니다).

## 예제

### Math.atan2() 사용하기

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683
```

### Math.atan2(y, x) 과 Math.atan(y / x) 의 차이

아래 스크립트는 `Math.atan2(y, x)`과 `Math.atan(y / x)`의 차이를 출력합니다.

```js
const formattedNumbers = new Map([
  [-Math.PI, "-π"],
  [(-3 * Math.PI) / 4, "-3π/4"],
  [-Math.PI / 2, "-π/2"],
  [-Math.PI / 4, "-π/4"],
  [Math.PI / 4, "π/4"],
  [Math.PI / 2, "π/2"],
  [(3 * Math.PI) / 4, "3π/4"],
  [Math.PI, "π"],
  [-Infinity, "-∞"],
  [Infinity, "∞"],
]);

function format(template, ...args) {
  return String.raw(
    { raw: template },
    ...args.map((num) =>
      (Object.is(num, -0)
        ? "-0"
        : (formattedNumbers.get(num) ?? String(num))
      ).padEnd(5),
    ),
  );
}

console.log(`| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|`);

for (const x of [-Infinity, -1, -0, 0, 1, Infinity]) {
  for (const y of [-Infinity, -1, -0, 0, 1, Infinity]) {
    const atan2 = Math.atan2(y, x);
    const atan = Math.atan(y / x);
    if (!Object.is(atan2, atan)) {
      console.log(format`| ${x} | ${y} | ${atan2} | ${atan} |`);
    }
  }
}
```

출력 결과는 아래와 같습니다.

```plain
| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|
| -∞    | -∞    | -3π/4 | NaN   |
| -∞    | -1    | -π    | 0     |
| -∞    | -0    | -π    | 0     |
| -∞    | 0     | π     | -0    |
| -∞    | 1     | π     | -0    |
| -∞    | ∞     | 3π/4  | NaN   |
| -1    | -∞    | -π/2  | π/2   |
| -1    | -1    | -3π/4 | π/4   |
| -1    | -0    | -π    | 0     |
| -1    | 0     | π     | -0    |
| -1    | 1     | 3π/4  | -π/4  |
| -1    | ∞     | π/2   | -π/2  |
| -0    | -∞    | -π/2  | π/2   |
| -0    | -1    | -π/2  | π/2   |
| -0    | -0    | -π    | NaN   |
| -0    | 0     | π     | NaN   |
| -0    | 1     | π/2   | -π/2  |
| -0    | ∞     | π/2   | -π/2  |
| 0     | -0    | -0    | NaN   |
| 0     | 0     | 0     | NaN   |
| ∞     | -∞    | -π/4  | NaN   |
| ∞     | ∞     | π/4   | NaN   |
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
