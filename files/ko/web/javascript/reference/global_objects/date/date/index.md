---
title: Date() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
---

{{JSRef}}

**`Date`** 생성자는 시간의 특정 지점을 나타내는 `Date` 객체를 플랫폼에 종속되지 않는 형태로 생성합니다.
`Date` 객체는 1970년 1월 1일 UTC(국제표준시) 자정으로부터 지난 시간을 밀리초로 나타내는 UNIX 타임스탬프를
담습니다.

{{InteractiveExample("JavaScript Demo: Date Constructor")}}

```js interactive-example
const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date("1995-12-17T03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// Expected output: false

console.log(date1 - date2);
// Expected output: 0
```

## 구문

```js
new Date();
new Date(value);
new Date(dateString);
new Date(dateObject);

new Date(year, monthIndex);
new Date(year, monthIndex, day);
new Date(year, monthIndex, day, hours);
new Date(year, monthIndex, day, hours, minutes);
new Date(year, monthIndex, day, hours, minutes, seconds);
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);

Date();
```

> [!NOTE]
> 새로운 `Date` 객체를 생성하는 방법은 {{jsxref("operators/new", "new")}} 연산자를
> 사용하는 것이 유일합니다. `now = Date()`처럼 `Date`를 직접 호출하면 새로운
> `Date` 객체가 아니라 문자열을 반환합니다.

### 매개변수

`Date()` 생성자는 네 가지 형태로 사용할 수 있습니다.

#### 매개변수 없음

매개변수를 제공하지 않으면, 생성 순간의 날짜와 시간을 나타내는 `Date` 객체를 생성합니다.

#### UNIX 타임스탬프 값

- `value`
  - : [UNIX 타임스탬프](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16),
    즉 1970년 1월 1일 00:00:00 UTC(UNIX 시간)부터의 시간을 밀리초 단위로 표현하되 윤초는 무시한 정수 값입니다.
    대부분의 UNIX 타임스탬프 함수는 초 단위까지만 정확함을 유의하세요.

#### 타임스탬프 문자열

- `dateString`
  - : {{jsxref("Date.parse()")}} 메서드가 인식할 수 있는 형태로 나타낸 날짜 문자열입니다.
    [IETF 호환 RFC 2822 타임스탬프](https://datatracker.ietf.org/doc/html/rfc2822#page-14)와,
    [ISO8601의 특정 버전](https://www.ecma-international.org/ecma-262/11.0/#sec-date.parse)을 인식할 수
    있습니다.

    > [!NOTE]
    > `Date` 생성자(및 동일한 동작의 `Date.parse()`)를 사용한 날짜
    > 파싱은 동작이 일관적이지 못하고 브라우저끼리 차이가 존재하므로 사용하지 않는 것이 좋습니다.
    >
    > - [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822)
    >   형식 문자열은 관례적으로만 지원하는 것 뿐입니다.
    > - ISO 8601 형식 문자열은 시간 정보 없는 문자열(`"1970-01-01"`
    >   등)을 현지 시간이 아닌 UTC 기준으로 처리하는 점에서 표준과 다릅니다.

#### 타임스탬프 객체

- `dateObject`
  - : 기존의 `Date` 객체입니다. 이는 기존 객체와 동일한 날짜와 시간을 가진 복사본을 만듭니다.
    `valueOf()` 메소드가 호출되지 않는다는 점을 제외하면 `new Date(dateObject.valueOf())`와 동일합니다.

매개변수가 하나만 전달될 때, `Date` 인스턴스는 특별하게 취급됩니다. 그 외의 모든 값은 [원시 값으로 변환](/ko/docs/Web/JavaScript/Guide/Data_structures#%ED%83%80%EC%9E%85_%EA%B0%95%EC%A0%9C_%EB%B3%80%ED%99%98)됩니다. 결과가 문자열이면 날짜 문자열로 분석되고, 그렇지 않으면 숫자로 강제 변환되어 타임스탬프로 취급됩니다.

#### 개별 날짜 및 시간 구성 요소

최소한 연도와 월이 주어졌을 때, `Date()`의 이 형태는 `Date` 객체를 생성할 때 모든 구성
요소(연, 월, 일, 시, 분, 초, 밀리초)를 모두 매개변수에서 가져옵니다. 누락한 요소에는 가장 낮은
값(`day`는 1, 나머지는 0)을 사용합니다. 모든 매개변수 값은 UTC가 아닌 현지 시간으로 취급합니다.

- `year`
  - : 연도를 나타내는 정수 값입니다.`0`부터 `99`까지는 `1900`부터 `1999`로 처리합니다. 다른 모든 값은
    그대로 사용합니다.
    [예제](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#two_digit_years_map_to_1900_%E2%80%93_1999)를 참고하세요.
- `monthIndex`
  - : 월을 나타내는 정수 값입니다. 1월을 나타내는 `0`부터 12월을 나타내는 `11`까지 사용할 수
    있습니다.
- `day` {{optional_inline}}
  - : 일을 나타내는 정수 값입니다. 기본값은 `1`입니다.
- `hours` {{optional_inline}}
  - : 시를 나타내는 정수 값입니다. 기본 값은 자정을 나타내는
    `0`입니다.
- `minutes` {{optional_inline}}
  - : 분을 나타내는 정수 값입니다. 기본 값은 정각을 나타내는
    `0`입니다.
- `seconds` {{optional_inline}}
  - : 초를 나타내는 정수 값입니다. 기본 값은
    `0`초입니다.
- `milliseconds` {{optional_inline}}
  - : 밀리초를 나타내는 정수 값입니다. 기본 값은
    `0`밀리초입니다.

### 반환 값

`new Date()` (즉, `Date()` 생성자)를 호출하면 새로운 [`Date`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date) 객체를 반환합니다. 유효하지 않은 날짜 문자열로 호출하거나, 생성될 날짜의 타임스탬프가 `-8,640,000,000,000,000` 미만 또는 `8,640,000,000,000,000` 밀리초를 초과하는 경우, [유효하지 않은 날짜(Invalid Date)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)를 반환합니다. (이 객체는 `toString()` 호출 시 `"Invalid Date"`를, `valueOf()` 호출 시 `NaN`을 반환합니다.)

`new` 키워드 없이 `Date()` 함수를 호출하면 `new Date().toString()`과 동일하게 현재 날짜와 시간을 나타내는 문자열을 반환합니다. 이때 전달된 모든 인수는 무시됩니다.

## 설명

### 시간 정밀도 감소

타이밍 공격 및 [핑거프린팅](/ko/docs/Glossary/Fingerprinting)에 대한 보호 기능을 제공하기 위해 `new Date()`의 정밀도가 브라우저 설정에 따라 반올림될 수 있습니다. Firefox의 경우 `privacy.reduceTimerPrecision` 설정이 기본적으로 활성화되어 있으며 기본값은 2ms입니다. `privacy.resistFingerprinting`을 활성화하면 정밀도는 100ms 또는 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 값 중 더 큰 값이 됩니다.

예를 들어, 시간 정밀도 감소가 적용된 상태에서 `new Date().getTime()`의 결과는 항상 2의 배수이며, `privacy.resistFingerprinting`이 활성화된 경우 100의 배수(또는 설정된 마이크로초의 배수)가 됩니다.

```js
// Firefox 60에서 감소된 시간 정밀도 (2ms)
new Date().getTime();
// 결과 예시:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// privacy.resistFingerprinting이 활성화된 경우
new Date().getTime();
// 결과 예시:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## 예제

### Date 객체를 만드는 여러가지 방법

아래 예제는 JavaScript 날짜를 생성하는 몇 가지 방법을 보입니다.

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // 비권장: 모든 런타임에서 동작하지 않을 수 있음
const birthday = new Date("1995-12-17T03:24:00"); // 표준화된 방식이며 안정적으로 동작함
const birthday = new Date(1995, 11, 17); // 월은 0부터 시작함 (11은 12월)
const birthday = new Date(1995, 11, 17, 3, 24, 0);
const birthday = new Date(628021800000); // epoch 타임스탬프 전달
```

### Date, 문자열, 숫자가 아닌 값을 전달하는 경우

`Date()` 생성자에 `Date` 인스턴스가 아닌 매개변수를 하나만 전달하면, 해당 값은 원시 값으로 강제 변환된 후 문자열인지 확인하는 과정을 거칩니다. 예를 들어, `new Date(undefined)`는 `new Date()`와 결과가 다릅니다.

```js
console.log(new Date(undefined)); // Invalid Date
```

이는 `undefined`가 이미 원시 값(primitive)이지만 문자열이 아니기 때문에 숫자로 강제 변환되는데, 그 결과가 `NaN`이 되어 유효하지 않은 타임스탬프로 취급되기 때문입니다. 반면, `null`은 `0`으로 변환됩니다.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[배열(Array)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)은 `Array.prototype.toString()`을 통해 요소를 쉼표로 연결한 문자열로 변환됩니다. 하지만 요소가 두 개 이상인 배열이 변환된 문자열은 유효한 ISO 8601 날짜 형식이 아니므로, 이를 해석하는 방식은 브라우저 엔진마다 다를 수 있습니다. **따라서 `Date()` 생성자에 배열을 전달하지 마세요.**

```js
console.log(new Date(["2020-06-19", "17:13"]));
// Chrome: "2020-06-19,17:13"을 인식하여 2020-06-19T17:13:00.000Z 반환
// Firefox: "Invalid Date" 반환
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date")}}
