---
title: "RangeError: precision is out of range"
slug: Web/JavaScript/Reference/Errors/Precision_range
---

{{jsSidebar("Errors")}}

## 메시지

```
    RangeError: precision {0} out of range (Firefox)
    RangeError: toExponential() argument must be between 0 and 20 (Chrome)
    RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
    RangeError: toPrecision() argument must be between 1 and 21 (Chrome)
```

## 에러 형식

{{jsxref("RangeError")}}

## 무엇이 잘못되었을까?

아래의 메소드들 중 하나에서, 실행 인자(argument)가 정확도의 범위를 벗어났습니다. :

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}

이 메소드들에게 허용된 범위는 0부터 20 (또는 21)까지 입니다. 하지만, ECMAScript 스펙은 아래의 범위까지 확장하여 허용하고 있습니다.

| Method                                         | Firefox (SpiderMonkey) | Chrome, Opera (V8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxref("Number.prototype.toExponential()")}} | 0 부터 100             | 0 부터 20          |
| {{jsxref("Number.prototype.toFixed()")}}       | -20 부터 100           | 0 부터 20          |
| {{jsxref("Number.prototype.toPrecision()")}}   | 1 부터 100             | 1 부터 21          |

## 예

### 유효하지 않은 경우

```js example-bad
(77.1234).toExponential(-1); // RangeError
(77.1234).toExponential(101); // RangeError

(2.34).toFixed(-100); // RangeError
(2.34).toFixed(1001); // RangeError

(1234.5).toPrecision(-1); // RangeError
(1234.5).toPrecision(101); // RangeError
```

### 유효한 경우

```js example-good
(77.1234).toExponential(4); // 7.7123e+1
(77.1234).toExponential(2); // 7.71e+1

(2.34).toFixed(1); // 2.3
(2.35).toFixed(1); // 2.4 (note that it rounds up in this case)

(5.123456).toPrecision(5); // 5.1235
(5.123456).toPrecision(2); // 5.1
(5.123456).toPrecision(1); // 5
```

## 참조

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
