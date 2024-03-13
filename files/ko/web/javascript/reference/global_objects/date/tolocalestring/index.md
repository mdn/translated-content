---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
---

{{JSRef}}

**`toLocaleString()`** 메소드는 날짜를 언어별로 구분하여 나타내는 문자열을 반환합니다. [`Intl.DateTimeFormat` API](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) 를 지원하는 구현에서 이 메소드는 단순히 `Intl.DateTimeFormat`를 호출합니다.

{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}

## 문법

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 매개변수

`locales`, `options` 인수는 함수의 동작을 사용자 정의하고 응용 프로그램에서 형식 규칙을 사용할 언어를 지정할 수 있도록 합니다.

[`Intl.DateTimeFormat` API](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)를 지원하는 구현에서, 이 파라미터들은 정확하게 [`Intl.DateTimeFormat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) 생성자 파라미터와 일치합니다. `Intl.DateTimeFormat` 를 지원하지 않는 구현은 두 매개변수를 무시하도록 요청되어, 사용된 로케일과 반환된 문자열 형식이 완전히 구현에 종속됩니다.

- `locales` {{optional_inline}}

  - : BCP 47 언어 태그 문자열 또는 이러한 문자열의 배열입니다. `Intl.DateTimeFormat()` 생성자의 매개변수 [`locales`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)와 일치합니다.

    `Intl.DateTimeFormat` 을 지원하지 않는 구현에서는 이 매개변수는 무시되고, 보통 호스트 로케일이 사용됩니다.

- `options` {{optional_inline}}

  - : 출력 형식을 조정하는 객체입니다. `Intl.DateTimeFormat()` 생성자 매개변수 [`options`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) 와 일치합니다. 만약 `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, 그리고 `fractionalSecondDigits` 가 전부 undefined이면, `year`, `month`, `day`, `hour`, `minute`, `second` 가`"numeric"` 으로 설정됩니다.

    `Intl.DateTimeFormat` 를 지원하지 않는 구현에서 이 매개변수는 무시됩니다.

이 매개변수에 대한 자세한 설명과 사용법을 알고싶으면 다음을 참조하십시오. [`Intl.DateTimeFormat()` constructor](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)

### 반환 값

언어별 표현 형식을 따른 날짜 문자열

`Intl.DateTimeFormat`를 지원하는 구현에서 안에서 `new Intl.DateTimeFormat(locales, options).format(date)` 와 동일합니다.

## 예제

### toLocaleString() 사용

로케일을 지정하지않고 기본으로 사용하는 경우, 기본 로케일과 옵션으로 포맷된 문자열이 반환됩니다.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// 인수가 없는 toLocaleString() 은 구현, 기본 로케일, 기본 타임존에 따라 달라집니다
console.log(date.toLocaleString());
// → "12/11/2012, 7:00:00 PM" en-Us 로케일 및 America/Los_Angeles 타임존에서 실행했을 때
```

### 로케일 및 옵션 인수에 대한 지원 확인

아직 `locales`, `options` 인수는 일부 브라우저에서 지원하지 않습니다. 구현에서 해당 인수를 지원하는지 확인하려면 잘못된 언어 태그가 {{jsxref("RangeError")}} 예외로 거부되는 요구사항을 사용할 수 있습니다.

```js
function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### locales 사용

이 예는 지역화된 날짜 및 시간 형식의 일부 변형을 보여줍니다. 당신의 어플리케이션의 사용자 인터페이스가 사용하는 언어(그리고 일부 대체 언어)의 형식을 얻기 위해서, 반드시 `locales` 인수를 사용하여 해당 언어를 지정해야합니다.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 아래의 형식은 로케일의 로컬 타임존을 가정한다
// America/Los_Angeles for the US

// 미국 영어는 달-일-년 순서와 AM/PM이 있는 12시간을 사용합니다
console.log(date.toLocaleString("en-US"));
// → "12/19/2012, 7:00:00 PM"

// 영국 영어는 일-달-년 순서와 AM/PM이 없는 24시간을 사용합니다
console.log(date.toLocaleString("en-GB"));
// → "20/12/2012 03:00:00"

// 한국어는 년-월-일 순서와 AM/PM이 있는 12시간을 사용합니다
console.log(date.toLocaleString("ko-KR"));
// → "2012. 12. 20. 오후 12:00:00"

// 아랍어를 사용하는 대부분의 아랍국가는 동부 아라비안 숫자를 사용합니다
console.log(date.toLocaleString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// 일본어의 경우, 어플리케이션이 일본 달력을 사용하고 싶을 수 있습니다
// 2012년의 경우 Heisei 24년 이었습니다
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// → "24/12/20 12:00:00"

// 발리어와 같이 지원되지 않을 수 있는 언어를 요청할 때, 대체 언어를 포함합니다. (이 경우에는 인도네시아어)
console.log(date.toLocaleString(["ban", "id"]));
// → "20/12/2012 11.00.00"
```

### options 사용

`toLocaleString()` 가 제공하는 결과는 `options` 인수를 사용하여 사용자 정의할 수 있습니다.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Request a weekday along with a long date
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// 어플리케이션은 UTC를 사용할 수 있고 그것을 보이게 할 수 있습니다.
options.timeZone = "UTC";
options.timeZoneName = "short";

console.log(date.toLocaleString("en-US", options));
// → "Thursday, December 20, 2012, GMT"

// en-US도 24시간 사용이 가능합니다
console.log(date.toLocaleString("en-US", { hour12: false }));
// → "12/19/2012, 19:00:00"
```

### 포맷된 날짜 값을 정적 값과 비교하지 않기

대부분의 경우, `toLocaleString()` 가 반환하는 형식은 일관됩니다. 하지만 이것은 미래에 달라질 수 있고, 모든 언어에 대해 보장되지 않습니다; 출력 변형은 설계에 따라 허용되며 사양에 따라 허용됩니다.

특히 IE 및 Edge 브라우저는 다른 텍스트와 연결될때 출력 텍스트가 자연스럽게 연결되도록, 양방향 제어 문자를 삽입합니다.

이러한 이유로, 당신은 정적 값과 `toLocaleString()` 의 결과 값을 비교할 수 있다고 기대할 수 없습니다.

```js example-bad
"1/1/2019, 01:00:00" ===
  new Date("2019-01-01T01:00:00Z").toLocaleString("en-US");
// Firefox나 다른 기타 브라우저에서 true 입니다
// IE나 Edge에서 false 입니다
```

> **Note:** See also this
> [StackOverflow thread](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results)
> for more details and examples.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Global_Objects/Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
