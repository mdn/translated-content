---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
l10n:
  sourceCommit: 580a62d0d68d5b35dd624c8f23be79698cfb78c2
---

{{JSRef}}

{{jsxref("Date")}} 인스턴스의 **`toLocaleTimeString()`** 메서드는 현지 표준 시간대 날짜의 시간 부분을 언어에 맞춰 표현한 문자열을 반환합니다. [`Intl.DateTimeFormat` API](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)를 지원하는 구현에서 이 메서드는 단순히 `Intl.DateTimeFormat`을 호출합니다.

`toLocaleTimeString`을 호출할 때마다 방대한 현지화 문자열 데이터베이스에서 검색을 수행해야 하므로 비효율적일 수 있습니다. 메서드가 동일한 인수를 사용하여 여러 번 호출되는 경우 `DateTimeFormat` 객체가 전달된 인수를 기억하고 데이터베이스의 일부를 캐시하기로 결정할 수 있으므로 {{jsxref("Intl.DateTimeFormat")}} 객체를 생성하고 그 {{jsxref("Intl/DateTimeFormat/format", "format()")}} 메서드를 사용하는 것이 더 좋습니다. 이렇게 함으로써 향후 `format` 호출에서 보다 제한된 컨텍스트 내에서 현지화 문자열을 검색할 수 있습니다.

{{InteractiveExample("JavaScript Demo: Date.toLocaleTimeString()")}}

```js interactive-example
// Depending on timezone, your results will vary
const event = new Date("August 19, 1975 23:15:30 GMT+00:00");

console.log(event.toLocaleTimeString("en-US"));
// Expected output: "1:15:30 AM"

console.log(event.toLocaleTimeString("it-IT"));
// Expected output: "01:15:30"

console.log(event.toLocaleTimeString("ar-EG"));
// Expected output: "١٢:١٥:٣٠ ص"
```

## 구문

```js-nolint
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### 매개변수

`locales` 및 `options` 매개변수는 함수의 동작을 사용자 정의하고 애플리케이션에서 형식 지정 규칙을 사용할 언어를 지정할 수 있도록 합니다.

[`Intl.DateTimeFormat` API](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)를 지원하는 구현체에서 이러한 매개변수는 [`Intl.DateTimeFormat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) 생성자 매개변수와 정확히 대응합니다. `Intl.DateTimeFormat`을 지원하지 않는 구현체는 두 매개변수를 모두 무시하도록 요청하므로 사용되는 로케일과 반환되는 문자열의 형식은 전적으로 구현체에 따라 달라집니다.

- `locales` {{optional_inline}}

  - : BCP 47 언어 태그가 포함된 문자열 또는 이러한 문자열의 배열입니다. `Intl.DateTimeFormat()` 생성자의 매개변수인 [`locales`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)과 대응됩니다.

    `Intl.DateTimeFormat`을 지원하지 않는 구현체에서는 이 매개변수를 무시하고 일반적으로 호스트의 로케일이 사용됩니다.

- `options` {{optional_inline}}

  - : 출력 형식을 조정하는 객체입니다. `Intl.DateTimeFormat()` 생성자의 매개변수 [`options`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)과 대응됩니다. `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`가 모두 정의되지 않았다면 `hour`, `minute`, `second`는 `"numeric"`으로 설정됩니다.

    `Intl.DateTimeFormat`을 지원하지 않는 구현체에서는 이 매개변수를 무시합니다.

이 매개변수 사용 방법에 대한 자세한 내용은 [`Intl.DateTimeFormat()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)를 참조하시기 바랍니다.

### 반환 값

언어별 규칙에 따라 지정된 날짜의 시간 부분을 나타내는 문자열입니다.

`Intl.DateTimeFormat`를 구현한 구현체에서는 `new Intl.DateTimeFormat(locales, options).format(date)`과 동일하며, 여기서 `options`은 위에서 설명한 대로 정규화됩니다.

> [!NOTE]
> 대부분의 경우 `toLocaleTimeString()`에서 반환되는 형식은 일관적입니다. 그러나 결과는 시간, 언어 및 구현체에 따라 달라질 수 있습니다. 또한 설계에 따라 다양한 결과가 있으며 명세에서 허용됩니다. `toLocaleTimeString()`의 결과를 정적 값과 비교해서는 안 됩니다.

## 예제

### toLocaleTimeString() 사용하기

기본적으로 `locale`을 지정하지 않고 이 메서드를 사용하면 기본 로케일과 기본 옵션으로 형식이 지정된 문자열이 반환됩니다.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// 인수 없는 toLocaleTimeString()는 구현체, 기본 로케일, 기본 시간대에 의존합니다.
console.log(date.toLocaleTimeString());
// America/Los_Angeles 시간대, en-US 로케일에서 실행시켰을 경우 "7:00:00 PM" 입니다.
```

### locales 및 options 매개변수 지원 여부 확인

`locales` 및 `options` 매개변수는 국제화 API 지원이 선택 사항이고 일부 시스템에는 필요한 데이터가 없을 수 있기 때문에 모든 구현체에서 지원되지 않을 수 있습니다. 국제화를 지원하지 않는 구현체의 경우 `toLocaleTimeString()`은 항상 시스템의 로케일을 사용하므로 사용자가 원하는 로케일이 아닐 수 있습니다. `locales` 및 `options` 매개 변수를 지원하는 모든 구현은 {{jsxref("Intl")}}를 지원해야 하므로, 아래 코드로 지원 여부를 확인할 수 있습니다.

```js
function toLocaleTimeStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### locales 사용하기

이 예는 현지화된 시간 형식의 몇 가지 변형을 보여줍니다. 애플리케이션의 사용자 인터페이스에서 사용되는 언어의 형식을 가져오려면 `locales` 인수를 사용하여 해당 언어(및 일부 대체 언어)를 지정해야 합니다.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 아래 형식은 현지 시간대가 US의 America/Los_Angeles 라고 가정합니다

// US English는 AM/PM과 함께 12시간 단위를 사용합니다.
console.log(date.toLocaleTimeString("en-US"));
// "7:00:00 PM"

// British English는 AM/PM 없이 24시간 단위를 사용합니다.
console.log(date.toLocaleTimeString("en-GB"));
// "03:00:00"

// 한국어는 AM/PM과 함께 12시간 단위를 사용합니다.
console.log(date.toLocaleTimeString("ko-KR"));
// "오후 12:00:00"

// 다수가 아랍어를 말하는 국가에서 아랍어는 실제 아랍 숫자를 사용합니다
console.log(date.toLocaleTimeString("ar-EG"));
// "٧:٠٠:٠٠ م"

// 발리어와 같이 요청하는 언어를 지원하지 않지만 인도네이사어로 대체 언어를 지정할 경우
console.log(date.toLocaleTimeString(["ban", "id"]));
// "11.00.00"
```

### options 사용하기

`toLocaleTimeString()`의 결과는 아래와 같이 `options` 매개변수를 사용하여 사용자 맞춤 설정할 수 있습니다.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 어플리케이션은 UTC를 사용하고 이를 명시화하기를 원할 수도 있습니다.
const options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// "3:00:00 AM GMT"

// 가끔씩은 US도 24시간 단위가 필요할 수 있습니다.
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// "19:00:00"

// 기본 로케일을 사용하는 옵션을 사용했을때 오직 시와 분을 보여줍니다. 빈 배열을 사용합니다.
console.log(
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
);
// "20:01"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
