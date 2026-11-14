---
title: Date() 생성자
short-title: Date()
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

**`Date()`** 생성자는 {{jsxref("Date")}} 객체를 생성합니다. 함수로 호출하면 현재 시간을 나타내는 문자열을 반환합니다.

{{InteractiveExample("JavaScript Demo: Date() constructor")}}

```js interactive-example
const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date("1995-12-17T03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1.getTime() === date2.getTime());
// 예상 출력: true
```

## 구문

```js-nolint
new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

Date()
```

> [!NOTE]
> `Date()`는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)를 사용하거나 사용하지 않고 호출할 수 있지만, 그 결과는 서로 다릅니다. [반환 값](#반환_값)을 참고하세요.

### 매개변수

`Date()` 생성자는 다섯 가지 기본 형태로 사용할 수 있습니다.

#### 매개변수 없음

매개변수를 제공하지 않으면 새로 생성된 `Date` 객체는 생성 시점의 현재 날짜와 시간을 나타냅니다. 반환된 날짜의 [타임스탬프](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)는 {{jsxref("Date.now()")}}가 반환하는 숫자와 같습니다.

#### 시간 값 또는 타임스탬프 숫자

- `value`
  - : [타임스탬프](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)를 나타내는 정수 값입니다. 타임스탬프는 [에포크](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)라고도 하는 1970년 1월 1일 00:00:00 UTC부터 경과한 밀리초 수입니다.

#### 날짜 문자열

- `dateString`
  - : 날짜를 나타내는 문자열 값으로, {{jsxref("Date.parse()")}}에 구현된 것과 동일한 알고리즘으로 파싱하고 해석합니다. 여러 형식을 사용할 때의 주의 사항은 [날짜 시간 문자열 형식](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format)을 참고하세요.

#### 날짜 객체

- `dateObject`
  - : 기존 `Date` 객체입니다. 기존 `Date` 객체와 동일한 날짜와 시간을 가진 복사본을 만듭니다. `valueOf()` 메서드를 호출하지 않는다는 점을 제외하면 `new Date(dateObject.valueOf())`와 동일합니다.

`Date()` 생성자에 매개변수를 하나만 전달하면 `Date` 인스턴스는 특별하게 취급됩니다. 그 외의 모든 값은 [원시 값으로 변환](/ko/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion)됩니다. 결과가 문자열이면 날짜 문자열로 파싱합니다. 그렇지 않으면 변환된 원시 값을 다시 숫자로 강제 변환하여 타임스탬프로 취급합니다.

#### 개별 날짜 및 시간 구성 요소 값

최소한 연도와 월이 주어지면 이 형태의 `Date()`는 모든 구성 요소 값(연, 월, 일, 시, 분, 초, 밀리초)을 다음 매개변수에서 가져온 `Date` 객체를 반환합니다. 누락된 필드에는 가능한 가장 낮은 값(`day`는 `1`, 나머지 구성 요소는 `0`)을 사용합니다. 모든 매개변수 값은 UTC가 아닌 현지 시간대를 기준으로 해석합니다. {{jsxref("Date.UTC()")}}는 비슷한 매개변수를 받지만 구성 요소를 UTC로 해석하고 타임스탬프를 반환합니다.

매개변수가 정해진 범위의 상한을 초과하면 초과분을 상위 단위로 올려 처리합니다. 예를 들어, `monthIndex`에 `11`보다 큰 값을 전달하면 그에 따라 연도가 증가하고, `minutes`에 `59`보다 큰 값을 전달하면 그에 따라 `hours`가 증가합니다. 따라서 `new Date(1990, 12, 1)`은 1991년 1월 1일을 반환하고, `new Date(2020, 5, 19, 25, 65)`는 2020년 6월 20일 오전 2시 5분을 반환합니다.

마찬가지로 매개변수가 범위의 하한에 못 미치면 상위 단위에서 빌려 처리합니다. 예를 들어, `new Date(2020, 5, 0)`은 2020년 5월 31일을 반환합니다.

- `year`
  - : 연도를 나타내는 정수 값입니다. `0`부터 `99`까지의 값은 `1900`년부터 `1999`년에 대응합니다. 그 외의 값은 실제 연도를 나타냅니다. [예제](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years)를 참고하세요.
- `monthIndex`
  - : 월을 나타내는 정수 값으로, 1월을 나타내는 `0`부터 12월을 나타내는 `11`까지입니다.
- `day` {{optional_inline}}
  - : 해당 월의 날짜를 나타내는 정수 값입니다. 기본 값은 `1`입니다.
- `hours` {{optional_inline}}
  - : 하루 중 시를 나타내는 `0`부터 `23`까지의 정수 값입니다. 기본 값은 `0`입니다.
- `minutes` {{optional_inline}}
  - : 시간의 분 부분을 나타내는 정수 값입니다. 기본 값은 `0`입니다.
- `seconds` {{optional_inline}}
  - : 시간의 초 부분을 나타내는 정수 값입니다. 기본 값은 `0`입니다.
- `milliseconds` {{optional_inline}}
  - : 시간의 밀리초 부분을 나타내는 정수 값입니다. 기본 값은 `0`입니다.

### 반환 값

`new Date()`(`Date()` 생성자)를 호출하면 [`Date`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date) 객체를 반환합니다. 유효하지 않은 날짜 문자열로 호출하거나 생성할 날짜의 타임스탬프가 `-8,640,000,000,000,000`밀리초 미만 또는 `8,640,000,000,000,000`밀리초 초과이면 [유효하지 않은 날짜](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)를 반환합니다. 이는 {{jsxref("Date/toString", "toString()")}} 메서드가 `"Invalid Date"`를 반환하고 {{jsxref("Date/valueOf", "valueOf()")}} 메서드가 `NaN`을 반환하는 `Date` 객체입니다.

`new` 키워드 없이 `Date()` 함수를 호출하면 `new Date().toString()`과 동일하게 현재 날짜와 시간을 나타내는 문자열을 반환합니다. `new` 키워드 없이 `Date()` 함수를 호출할 때 전달한 인수는 모두 무시됩니다. 유효하지 않은 날짜 문자열이나 임의의 객체 또는 다른 원시 값을 인수로 전달하더라도 항상 현재 날짜와 시간을 나타내는 문자열을 반환합니다.

## 설명

### 시간 정밀도 감소

타이밍 공격과 [핑거프린팅](/ko/docs/Glossary/Fingerprinting)으로부터 보호하기 위해 브라우저 설정에 따라 `new Date()`의 정밀도가 감소할 수 있습니다.

생성자에 타임스탬프, 날짜 문자열, 날짜 객체 또는 날짜 구성 요소 값을 전달하면 브라우저는 전달된 시간에 타이머 반올림을 적용하지 않습니다.

인수 없이 호출하면 생성자는 {{jsxref("Date.now()")}}와 같은 방식으로 현재 시간을 가져옵니다. 추가적인 부정확성을 더하지 않고 읽어 온 시계 값의 정밀도를 그대로 따릅니다.

## 예제

### Date 객체를 만드는 여러 가지 방법

다음 예제는 JavaScript 날짜를 생성하는 몇 가지 방법을 보여줍니다.

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // 비권장: 모든 런타임에서 동작하지 않을 수 있음
const birthday = new Date("1995-12-17T03:24:00"); // 표준화된 방식이며 안정적으로 동작함
const birthday = new Date(1995, 11, 17); // 월은 0부터 시작함
const birthday = new Date(1995, 11, 17, 3, 24, 0);
const birthday = new Date(628021800000); // 에포크 타임스탬프 전달
```

### Date, 문자열, 숫자가 아닌 값을 전달하는 경우

`Date()` 생성자에 `Date` 인스턴스가 아닌 매개변수를 하나만 전달하면 해당 값을 원시 값으로 강제 변환한 다음 문자열인지 확인합니다. 예를 들어, `new Date(undefined)`는 `new Date()`와 결과가 다릅니다.

```js
console.log(new Date(undefined)); // Invalid Date
```

이는 `undefined`가 이미 원시 값이지만 문자열은 아니므로 숫자로 강제 변환되기 때문입니다. 변환 결과는 [`NaN`](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN)이므로 유효한 타임스탬프가 아닙니다. 반면 `null`은 `0`으로 강제 변환됩니다.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)은 요소를 쉼표로 연결하는 [`Array.prototype.toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)을 통해 문자열로 강제 변환됩니다. 그러나 요소가 둘 이상인 배열을 변환한 문자열은 유효한 ISO 8601 날짜 문자열이 아니므로 파싱 동작은 구현에 따라 결정됩니다. **`Date()` 생성자에 배열을 전달하지 마세요.**

```js
console.log(new Date(["2020-06-19", "17:13"]));
// Chrome: "2020-06-19,17:13"을 인식하므로 2020-06-19T17:13:00.000Z
// Firefox: "Invalid Date"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date")}}
