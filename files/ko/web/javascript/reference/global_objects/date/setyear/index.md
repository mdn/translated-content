---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("Date")}} 인스턴스의 **`setYear()`** 메서드는 현지 시간에 따른 특정 날짜의 연도를 설정합니다.

그러나 기존 `setYear()` 메서드가 연도 값을 설정하는 방식은 기본 설정된 {{jsxref("Date/setFullYear", "setFullYear()")}} 메서드가 연도 값을 설정하는 방식과 다르며 경우에 따라 `new Date()`와 {{jsxref("Date.parse()")}}의 연도 값 설정 방식과도 차이가 납니다. 특히 `22` 및 `61`과 같은 두 자리 숫자가 주어진다면

- `setYear()`는 두 자리 숫자를 `1900`부터의 오프셋으로 해석합니다. 그래서 `date.setYear(22)`는 연도 값이 `1922`로 설정되고 `date.setYear(61)`는 연도 값이 `1961`로 설정됩니다. (반대로 `new Date(61, 1)`도 연도 값이 `1961`로 설정되지만 `new Date("2/1/22")`는 연도 값이 `2022`로 설정되며, {{jsxref("Date.parse()")}}도 비슷하게 설정됩니다).

- {{jsxref("Date/setFullYear", "setFullYear()")}}는 특별한 해석을 하지 않고 리터럴 두 자리 값을 그대로 사용하여 연도를 설정하므로 `date.setFullYear(61)`은 연도 값이 `0061`로 설정되고, `date.setFullYear(22)`은 연도 값이 `0022`로 설정됩니다.

이러한 동작의 차이로 인해 더 이상 기존 `setYear()` 메서드를 사용하지 말고 기본 설정된 {{jsxref("Date/setFullYear", "setFullYear()")}} 메서드를 사용해야 합니다.

## 구문

```js-nolint
setYear(yearValue)
```

### 매개변수

- `yearValue`
  - : 정수.

### 반환 값

{{jsxref("Date")}} 객체를 즉시 변경하고 새 [타임스탬프](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)를 반환합니다. `yearValue`가 `NaN`(또는 `undefined`와 같이 `NaN`으로 [강제로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)되는 다른 값)이면 날짜가 [유효하지 않은 날짜](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) 로 설정되고 `NaN`이 반환됩니다.

## 설명

`yearValue`이 0 이상 99 이하의 숫자라면, `dateObj`의 연도는 `1900 + yearValue`으로 설정됩니다. 그렇지 않다면 `dateObj`의 연도는 `yearValue`으로 설정됩니다.

## 예제

### setYear() 사용하기

처음 두 줄은 연도를 1996년으로 설정합니다. 세 번째 줄은 연도를 2000으로 설정합니다.

```js
const theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Date.prototype.setYear` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
