---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
---

{{JSRef}}

**`Intl.DateTimeFormat`**은 언어에 맞는 날짜 및 시간 서식을 적용하기 위한 객체입니다.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html")}}

## 생성자

- {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : 새로운 `Intl.DateTimeFormat` 객체를 생성합니다.

## 정적 메서드

- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : 매개변수로 제공한 로케일 목록 중, 런타임이 현재 지원하는 로케일 항목을 배열로 반환합니다.

## 인스턴스 메서드

- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
  - : `DateTimeFormat` 객체의 로케일과 서식 옵션에 맞춰 날짜를 서식화해 반환합니다.
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
  - : 날짜 서식 문자열의 각 부분을 분해하여 토큰 객체로 만들고 {{jsxref("Array")}}로 반환합니다. 로케일에 따라 다른 사용자 지정 서식을 적용할 때 사용할 수 있습니다.
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
  - : `DateTimeFormat` 객체를 초기화할 때 할당된 로케일 및 서식 옵션의 계산 값을 나타내는 객체를 반환합니다.
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
  - : 두 개의 [Dates](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)를 받은 후, 현재 할당된 로케일과 옵션 내에서 가장 간결한 형태로 두 날짜의 범위를 나타내는 문자열을 반환합니다.
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
  - : 두 개의 [Dates](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)를 받은 후, 현재 할당된 로케일과 옵션 내에서 가장 간결한 형태로 두 날짜의 범위를 나타내는 문자열을 생성합니다. 문자열의 각 부분을 분해하여 토큰 객체로 만들고 {{jsxref("Array")}}로 반환합니다.

## 예제

### `DateTimeFormat` 사용하기

로케일을 지정하지 않고 사용하면 기본 로케일과 기본 옵션의 서식을 적용한 문자열을 반환합니다.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 매개변수 없이 toLocaleString()을 호출한 결과는
// 구현체, 기본 로케일, 기본 시간대에 다라 달라짐
console.log(new Intl.DateTimeFormat().format(date));
// → ko-KR 로케일(언어)과 Asia/Seoul 시간대(UTC+0900)에서 "2012. 12. 20."
```

### 로케일 지정하기

다음 예제는 지역화된 숫자 서식 방법을 보여줍니다. 사용자의 언어에 적합한 서식을 적용하려면 `locales` 매개변수로 해당 언어(필요한 경우 대체 언어까지)를 제공하는 걸 잊지 마세요.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 아래 결과는 모두 Asia/Seoul 시간대를 사용한 결과 (UTC+0900, 한국 표준시)

// 한국어에서 날짜 표기는 연월일 순서
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// → "2012. 12. 20."

// 미국 영어에서 날짜 표기는 월일년 순서
console.log(new Intl.DateTimeFormat("en-US").format(date));
// → "12/20/2012"

// 영국 영어에서 날짜 표기는 일월년 순서
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// → "20/12/2012"

// 대부분의 아랍어 국가에서는 진짜 아라비아 숫자 사용
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// → "٢٠‏/١٢‏/٢٠١٢"

// 일본어의 경우 어플리케이션에 연호를 사용해야 할 수도 있음
// 2012년은 헤이세이 24년
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// → "24/12/20"

// 발리어와 같이 지원되지 않을 수도 있는 언어를 지정할 때는
// 다음과 같이 대체 언어를 지정할 수 있음. 아래의 경우 대체 언어는 인도어
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// → "20/12/2012"
```

### 옵션 지정하기

`options` 매개변수를 지정하면 날짜와 시간 서식 결과를 원하는 형태로 바꿀 수 있습니다.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 긴 날짜 서식에 더해 요일 요청
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// → "Donnerstag, 20. Dezember 2012"

// 어플리케이션이 GMT를 사용해야 하고, 그 점을 명시해야 할 때
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// → "Thursday, December 20, 2012, GMT"

// 좀 더 자세한 설정이 필요하면
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// → "2:00:00 pm AEDT"

// 미국에서도 24시간제가 필요할 때
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// → "12/19/2012, 19:00:00"

// 옵션을 지정하면서 로케일은 브라우저 기본값을 사용하고 싶을 땐 'default' 지정
console.log(new Intl.DateTimeFormat("default", options).format(date));
// → "2012. 12. 19. 19시 0분 0초"

// 오전/오후 시간 표시가 필요할 때
options = { hour: "numeric", dayPeriod: "short" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// → 10 at night
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl")}}
