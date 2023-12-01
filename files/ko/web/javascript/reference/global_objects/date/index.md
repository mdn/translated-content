---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
---

{{JSRef}}

JavaScript **`Date`** 객체는 시간의 한 점을 플랫폼에 종속되지 않는 형태로 나타냅니다.
`Date` 객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값을 담습니다.

> **참고:** TC39에서 새로운 날짜/시간 API인 [Temporal](https://tc39.es/proposal-temporal/docs/index.html)을 작업 중입니다. [Igalia 블로그](https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/)에서 더 알아보세요. 아직 프로덕션에는 적합하지 않습니다!

## 설명

### ECMAScript 시간과 타임스탬프

JavaScript 날짜의 기반은 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 나타낸 것으로, 날짜와 시간의 컴퓨터
기록물을 대부분 차지하고 있는 **UNIX 시간**(UNIX epoch, 1970년 1월 1일 자정과의 시간 차이를 초 단위로
나타냄)과는 다릅니다.

> **참고:** `Date` 객체의 중심을 구성하는 시간 값은 UTC 기준이지만, 날짜와 시간 등 구성 요소를
> 가져오는 메서드는 모두 현지(호스트 시스템의 위치)의 시간대를 사용한다는 것을 기억해야 합니다.

`Date`의 최대 값은 JavaScript에서의 안전한 최대 정수와 같지 않습니다.
({{jsxref("Number.MAX_SAFE_INTEGER")}}는 9,007,199,254,740,991입니다.) 대신, ECMA-262는 1970년 1월 1일 UTC에서
±100,000,000일(1억일)을 표준 `Date` 객체의 최대 범위로 규정하고 있습니다. 이는 기원전 271821년 4월 20일부터
서력 275760년 9월 13일까지에 해당하는 범위로, ±8,640,000,000,000,000 밀리초와 같습니다.

### 날짜 형식과 시간대 변환

날짜를 얻거나 시간대끼리 변환하는 메서드가 다수 존재하며, 그 중 특히 유용한 함수는 날짜 및 시간을 국제 표준 시간인
협정 세계시(UTC)로 반환하는 함수입니다. (UTC는 그리니치 시간대라고도 불리는데, 기준 시간대가 영국의 런던 인근인
그리니치를 지나는 경선이기 때문입니다.) 사용자의 장치는 현지 시간을 제공합니다.

{{jsxref("Date.getDay", "getDay()")}}와 {{jsxref("Date.setHours", "setHours()")}}처럼 구성 요소를 현지 시간 기준으로
읽고 쓰는 메서드에는 {{jsxref("Date.getUTCDay", "getUTCDay()")}}와 {{jsxref("Date.setUTCHours", "setUTCHours()")}}처럼
UTC를 기준으로 하는 읽기/쓰기 메서드도 존재합니다.

## 생성자

- {{jsxref("Date/Date", "Date()")}}
  - : 함수로 호출할 경우 `new Date().toString()`과 동일하게 현재 날짜와 시간을 나타내는 문자열을 반환합니다.
- {{jsxref("Date/Date", "new Date()")}}
  - : 생성자로 호출할 경우 새로운 `Date` 객체를 반환합니다.

## 정적 메서드

- {{jsxref("Date.now()")}}
  - : 1970년 1월 1일 00:00:00 UTC로부터 지난 시간을 밀리초 단위의 숫자 값으로 반환합니다. 윤초는 무시합니다.
- {{jsxref("Date.parse()")}}

  - : 날짜를 나타내는 문자열을 분석한 후, 해당 날짜와 1970년 1월 1일 00:00:00 UTC의 시간 차이를 밀리초 단위의 숫자 값으로 반환합니다.

    > **참고:** `Date.parse()`를 사용한 날짜 분석은 브라우저 간 차이 및 일관적이지 못한 동작을
    > 가지고 있으므로 사용하지 않는 것이 좋습니다.

- {{jsxref("Date.UTC()")}}
  - : 생성자가 받을 수 있는 제일 많은 매개변수(구성요소 각각, 2개 \~ 7개)를 동일하게 받아서, 1970년 1월 1일 00:00:00 UTC의
    시간 차이를 밀리초 단위의 숫자 값으로 반환합니다. 윤초는 무시합니다.

## 인스턴스 메서드

- {{jsxref("Date.prototype.getDate()")}}
  - : `Date`에서 현지 시간 기준 일(`1`–`31`)을 반환합니다.
- {{jsxref("Date.prototype.getDay()")}}
  - : `Date`에서 현지 시간 기준 요일(`0`–`6`)을 반환합니다.
- {{jsxref("Date.prototype.getFullYear()")}}
  - : `Date`에서 현지 시간 기준 연도(네 자리 연도면 네 자리로)를 반환합니다.
- {{jsxref("Date.prototype.getHours()")}}
  - : `Date`에서 현지 시간 기준 시(`0`–`23`)를 반환합니다.
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : `Date`에서 현지 시간 기준 밀리초(`0`–`999`)를 반환합니다.
- {{jsxref("Date.prototype.getMinutes()")}}
  - : `Date`에서 현지 시간 기준 분(`0`–`59`)을 반환합니다.
- {{jsxref("Date.prototype.getMonth()")}}
  - : `Date`에서 현지 시간 기준 월(`0`–`11`)을 반환합니다.
- {{jsxref("Date.prototype.getSeconds()")}}
  - : `Date`에서 현지 시간 기준 초(`0`–`59`)를 반환합니다.
- {{jsxref("Date.prototype.getTime()")}}
  - : 1970년 1월 1일 00:00:00 UTC로부터의 경과시간을 밀리초 단위로 반환합니다. `Date`가 기준
    시간 이전을 나타낼 경우 음수 값을 반환합니다.
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : 현지 시간대와 UTC의 차이를 분 단위로 반환합니다.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : `Date`에서 국제 시간 기준 일(`1`–`31`)을 반환합니다.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : `Date`에서 국제 시간 기준 요일(`0`–`6`)을 반환합니다.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : `Date`에서 국제 시간 기준 연도(네 자리 연도면 네 자리로)를 반환합니다.
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : `Date`에서 국제 시간 기준 시(`0`–`23`)를 반환합니다.
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : `Date`에서 국제 시간 기준 밀리초(`0`–`999`)를 반환합니다.
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : `Date`에서 국제 시간 기준 분(`0`–`59`)을 반환합니다.
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : `Date`에서 국제 시간 기준 월(`0`–`11`)을 반환합니다.
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : `Date`에서 국제 시간 기준 초(`0`–`59`)를 반환합니다.
- {{jsxref("Date.prototype.setDate()")}}
  - : 현지 시간 기준으로 일을 설정합니다.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : 현지 시간 기준으로 연도(네 자리 연도면 네 자리로)를 설정합니다.
- {{jsxref("Date.prototype.setHours()")}}
  - : 현지 시간 기준으로 시를 설정합니다.
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : 현지 시간 기준으로 밀리초를 설정합니다.
- {{jsxref("Date.prototype.setMinutes()")}}
  - : 현지 시간 기준으로 분을 설정합니다.
- {{jsxref("Date.prototype.setMonth()")}}
  - : 현지 시간 기준으로 월을 설정합니다.
- {{jsxref("Date.prototype.setSeconds()")}}
  - : 현지 시간 기준으로 초를 설정합니다.
- {{jsxref("Date.prototype.setTime()")}}
  - : `Date`가 나타낼 시간을 1970년 1월 1일 00:00:00 UTC로부터의 경과시간(밀리초)으로 설정합니다. 기준 이전의 시간은 음수 값을 사용해 설정할 수 있습니다.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : 국제 시간 기준으로 일을 설정합니다.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : 국제 시간 기준으로 연도(네 자리 연도면 네 자리로)를 설정합니다.
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : 국제 시간 기준으로 시를 설정합니다.
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : 국제 시간 기준으로 밀리초를 설정합니다.
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : 국제 시간 기준으로 분을 설정합니다.
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : 국제 시간 기준으로 월을 설정합니다.
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : 국제 시간 기준으로 초를 설정합니다.
- {{jsxref("Date.prototype.toDateString()")}}
  - : `Date`의 날짜 부분만 나타내는, 사람이 읽을 수 있는 문자열을 반환합니다.
- {{jsxref("Date.prototype.toISOString()")}}
  - : `Date`를 나타내는 문자열을 ISO 8601 확장 형식에 맞춰 반환합니다.
- {{jsxref("Date.prototype.toJSON()")}}
  - : {{jsxref("Date.prototype.toISOString()", "toISOString()")}}을 사용해서 {{jsxref("Date")}}를 나타내는 문자열을
    반환합니다. {{jsxref("JSON.stringify()")}}에서 사용합니다.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : `Date`의 날짜 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환합니다.
- {{jsxref("Date.prototype.toLocaleFormat()")}}
  - : 형식 문자열을 사용해서 `Date`를 나타내는 문자열을 생성합니다.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : `Date`를 나타내는 문자열을 현재 지역의 형식으로 반환합니다.
    {{jsxref("Object.prototype.toLocaleString()")}} 메서드를 재정의합니다.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : `Date`의 시간 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환합니다.
- {{jsxref("Date.prototype.toString()")}}
  - : `Date`를 나타내는 시간 문자열을 반환합니다. {{jsxref("Object.prototype.toString()")}} 메서드를
    재정의합니다.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : `Date`의 시간 부분만 나타내는, 사람이 읽을 수 있는 문자열을 반환합니다.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : `Date`를 나타내는 문자열을 UTC 기준으로 반환합니다.
- {{jsxref("Date.prototype.valueOf()")}}
  - : {{jsxref("Date")}} 객체의 원시 값을 반환합니다. {{jsxref("Object.prototype.valueOf()")}} 메서드를 재정의합니다.

## 예제

### Date 객체를 만드는 여러가지 방법

아래 예제는 JavaScript 날짜를 생성하는 몇 가지 방법을 보입니다.

> **참고:** `Date` 생성자(및 동일한 동작의 `Date.parse()`)를 사용한 날짜 분석은
> 동작이 일관적이지 못하고 브라우저끼리 차이가 존재하므로 사용하지 않는 것이 좋습니다.

```js
let today = new Date();
let birthday = new Date("December 17, 1995 03:24:00");
let birthday = new Date("1995-12-17T03:24:00");
let birthday = new Date(1995, 11, 17); // 월은 0부터 시작
let birthday = new Date(1995, 11, 17, 3, 24, 0);
```

### 두 자리 연도는 1900년대로

`Date`의 연도에 `0`부터 `99`까지의 정수를 제공하면 `1900`부터
`1999`로 처리합니다. 다른 모든 값은 그대로 사용합니다.

1900년대가 아닌, 실제 `0` \~ `99`년을 지정해야 하면 {{jsxref("Date.prototype.setFullYear()")}}와
{{jsxref("Date.prototype.getFullYear()")}} 메서드를 사용해야 합니다.

```js
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0900 (대한민국 표준시)

// 구형 메서드: 여기서도 98을 1998로 처리
date.setYear(98); // Sun Feb 01 1998 00:00:00 GMT+0900 (대한민국 표준시)

date.setFullYear(98); // Sat Feb 01 0098 00:00:00 GMT+0827 (대한민국 표준시)
```

### 경과시간 계산

다음은 두 개의 JavaScript 날짜의 간격을 밀리초로 나타내는 예제입니다.

연, 월, 일(서머타임)의 길이가 계속해서 달라지므로, 두 시간의 간격을 시/분/초보다 큰 단위로 나타낼 땐 여러가지 문제가
생기므로 이 방법을 시도하기 전에 관련 문제를 먼저 자세히 알아보세요.

```js
// Date 객체 사용법
let start = Date.now();

// 시간이 오래 걸리는 어떤 작업
doSomethingForALongTime();
let end = Date.now();
let elapsed = end - start; // 밀리초로 나타낸 경과시간
```

```js
// 내장 메서드 사용법
let start = new Date();

// 시간이 오래 걸리는 어떤 작업
doSomethingForALongTime();
let end = new Date();
let elapsed = end.getTime() - start.getTime(); // 밀리초로 나타낸 경과시간
```

```js
// 임의의 함수를 테스트하고, 호출에 걸린 시간을 출력하려면
function printElapsedTime(fTest) {
  let nStartTime = Date.now(),
    vReturn = fTest(),
    nEndTime = Date.now();

  console.log(`Elapsed time: ${String(nEndTime - nStartTime)} milliseconds`);
  return vReturn;
}

let yourFunctionReturn = printElapsedTime(yourFunction);
```

> **참고:** {{domxref("Window.performance", "Web Performance API", "", 1)}}의 고해상도 시간 기능을
> 지원하는 브라우저에서는 {{domxref("Performance.now()")}}를 사용해서 {{jsxref("Date.now()")}}보다 더 안정적이고
> 정확한 경과 시간을 알아낼 수 있습니다.

### ECMAScript 시간으로부터 경과한 시간을 초 단위로 가져오기

```js
let seconds = Math.floor(Date.now() / 1000);
```

여기서는 정수만 반환하는 것이 중요하므로, 단순히 나누기만 해서는 충분하지 않습니다. 그리고 실제로 "지나간" 초를
반환해야 하므로 {{jsxref("Math.round()")}}를 사용하지 않고 {{jsxref("Math.floor()")}}를 사용합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date/Date", "Date()")}} 생성자
