---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
---

{{JSRef}}

**`Date.UTC()`** 메서드는 {{jsxref("Date")}} 생성자와 비슷한 매개변수를 받지만, 모두 UTC로 취급합니다. 반환 값은 1970년 1월 1일 00:00:00 UTC부터 매개변수가 나타내는 시간의 차이를 밀리초로 나타낸 수입니다.

{{EmbedInteractiveExample("pages/js/date-utc.html")}}

## 구문

**ECMAScript 2017 이상:**

```js
    Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]])
```

**ECMAScript 2016 이하:** (`month` 필수)

```js
    Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
```

### 매개변수

- `year`
  - : 네 자리 연도.
- `month`
  - : 월을 나타내는 0(1월)에서 11(12월) 사이의 정수. ECMAScript 2016까지는 필수 매개변수였으나, ECMA2017부터는 선택사항입니다.
- `day` {{optional_inline}}
  - : 일을 나타내는 1에서 31 사이의 정수. 기본값은 1입니다.
- `hour` {{optional_inline}}
  - : 시를 나타내는 0에서 23 사이의 정수. 기본값은 0입니다.
- `minute` {{optional_inline}}
  - : 분을 나타내는 0에서 59 사이의 정수. 기본값은 0입니다.
- `second` {{optional_inline}}
  - : 초를 나타내는 0에서 59 사이의 정수. 기본값은 0입니다.
- `millisecond` {{optional_inline}}
  - : 밀리초를 나타내는 0에서 999 사이의 정수. 기본값은 0입니다.

### 반환 값

주어진 날짜와 1970년 1월 1일 00:00:00 UTC의 차이를 밀리초로 나타낸 숫자.

## 설명

`Date.UTC()`는 날짜 및 시간을 받고, 1970년 1월 1일 00:00:00 UTC와의 차이를 밀리초 수로 나타내 반환합니다.

0에서 99 사이의 연도는 20세기`(1900 + year)`로 취급합니다. 즉 95를 입력할 경우 1995로 취급합니다.

`Date.UTC()` 메서드는 {{jsxref("Date")}} 생성자와 다른 점이 두 가지 있습니다.

- `Date.UTC()`는 현지 시간 대신 국제 표준시(UTC)를 사용합니다.
- `Date.UTC()`는 {{jsxref("Date")}} 객체를 만드는 대신 시간 값을 숫자로 반환합니다.

주어진 매개변수가 통상적인 범위를 벗어나면 `Date.UTC()` 메서드는 다른 매개변수 값을 조절해 계산합니다. 예를 들어, 월 값으로 15를 사용하면 연도가 1 증가(`year + 1`)하고, 월 계산에는 3을 대신 사용합니다.

`Date.UTC()`는 {{jsxref("Date")}}의 정적 메서드이므로, 사용자가 생성한 {{jsxref("Date")}} 인스턴스에서 호출하지 않고 `Date.UTC()` 형태로 사용합니다.

## 예제

### `Date.UTC()` 사용하기

다음 예제는 현지 시간 대신 UTC를 사용하여 {{jsxref("Date")}} 객체를 생성합니다.

```js
var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 호환성 참고사항

### 매개변수를 두 개 미만 제공하는 경우

Date.UTC()가 두 개 미만의 매개변수를 받은 경우, ECMAScript 2017은 {{jsxref("NaN")}}을 반환할 것을 요구합니다. 이를 지원하지 않던 엔진은 업데이트됐습니다. ([Firefox bug 1050755](https://bugzil.la/1050755), [ecma-262 #642](https://github.com/tc39/ecma262/pull/642)를 참고하세요)

```js
Date.UTC();
Date.UTC(1);

// Safari: NaN
// Chrome/Opera/V8: NaN

// Firefox <54: non-NaN
// Firefox 54+: NaN

// IE: non-NaN
// Edge: NaN
```

## 같이 보기

- {{jsxref("Date.parse()")}}
- {{jsxref("Date")}}
