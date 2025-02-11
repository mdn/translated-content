---
title: Intl.DateTimeFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Intl.DateTimeFormat")}} 인스턴스의 **`formatRange()`** 메서드는
이 `Intl.DateTimeFormat` 객체를 인스턴스화할 때 제공되는
로케일과 옵션을 기반으로 가장 간결한 방식으로
날짜 범위의 형식을 맞춥니다.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.formatRange()", "taller")}}

```js interactive-example
const options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const options2 = { year: "2-digit", month: "numeric", day: "numeric" };

const startDate = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
const endDate = new Date(Date.UTC(2008, 0, 10, 11, 0, 0));

const dateTimeFormat = new Intl.DateTimeFormat("en", options1);
console.log(dateTimeFormat.formatRange(startDate, endDate));
// Expected output: "Wednesday, January 10, 2007 – Thursday, January 10, 2008"

const dateTimeFormat2 = new Intl.DateTimeFormat("en", options2);
console.log(dateTimeFormat2.formatRange(startDate, endDate));
// Expected output: "1/10/07 – 1/10/08"
```

## 구문

```js-nolint
formatRange(startDate, endDate)
```

### 매개변수

- `startDate`
  - : 날짜 범위의 시작을 나타내는 {{jsxref("Date")}} 객체입니다.
- `endDate`
  - : 날짜 범위의 끝을 나타내는 {{jsxref("Date")}} 객체입니다.

### 반환 값

{{jsxref("Intl.DateTimeFormat")}} 객체의 로케일 및 서식 옵션에 따라 형식이 맞춰진 지정된 날짜 범위를 나타내는 문자열입니다.

## 예제

### 기본적인 formatRange 사용

이 메서드는 두 개의 {{jsxref("Date")}}를 받아서 {{jsxref("Intl.DateTimeFormat")}}을 초기화 할 때 주어진 `locales`와 `options`을 기반으로 가장 간결한 방법으로 날짜 범위의 형식을 맞춥니다.

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT
const date3 = new Date(Date.UTC(1906, 0, 20, 10, 0, 0)); // Sat, 20 Jan 1906 10:00:00 GMT

const fmt1 = new Intl.DateTimeFormat("en", {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});
console.log(fmt1.format(date1)); // '1/10/06, 10:00 AM'
console.log(fmt1.formatRange(date1, date2)); // '1/10/06, 10:00 – 11:00 AM'
console.log(fmt1.formatRange(date1, date3)); // '1/10/06, 10:00 AM – 1/20/07, 10:00 AM'

const fmt2 = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
console.log(fmt2.format(date1)); // 'Jan 10, 1906'
console.log(fmt2.formatRange(date1, date2)); // 'Jan 10, 1906'
console.log(fmt2.formatRange(date1, date3)); // 'Jan 10 – 20, 1906'
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.DateTimeFormat")}}
