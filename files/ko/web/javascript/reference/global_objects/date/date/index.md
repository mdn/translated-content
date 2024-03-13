---
title: Date() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
---

{{JSRef}}

**`Date`** 생성자는 시간의 특정 지점을 나타내는 `Date` 객체를 플랫폼에 종속되지 않는 형태로 생성합니다.
`Date` 객체는 1970년 1월 1일 UTC(국제표준시) 자정으로부터 지난 시간을 밀리초로 나타내는 UNIX 타임스탬프를
담습니다.

{{EmbedInteractiveExample("pages/js/date-constructor.html")}}

## 구문

```js
new Date();
new Date(value);
new Date(dateString);

new Date(year, monthIndex);
new Date(year, monthIndex, day);
new Date(year, monthIndex, day, hours);
new Date(year, monthIndex, day, hours, minutes);
new Date(year, monthIndex, day, hours, minutes, seconds);
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);
```

> **참고:** 새로운 `Date<` 객체를 생성하는 방법은 {{jsxref("operators/new", "new")}} 연산자를
> 사용하는 것이 유일합니다. `now = Date()<`처럼 `Date<`를 직접 호출하면 새로운
> `Date<` 객체가 아니라 문자열을 반환합니다.

### 매개변수

`Date()` 생성자는 네 가지 형태로 사용할 수 있습니다.

#### 매개변수 없음

매개변수를 제공하지 않으면, 생성 순간의 날짜와 시간을 나타내는 `Date` 객체를 생성합니다.

#### UNIX 타임스탬프 값

- `value`
  - : [UNIX 타임스탬프](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16),
    즉 1970년 1월 1일 00:00:00 UTC(UNIX 시간)부터의 시간을 밀리초 단위로 표현하되 윤초는 무시한 정수 값입니다.
    대부분의 UNIX 타임스탬프 함수는 초 단위까지만 정확함을 유의하세요.

#### 타임스탬프 문자열

- `dateString`

  - : {{jsxref("Date.parse()")}} 메서드가 인식할 수 있는 형태로 나타낸 날짜 문자열입니다.
    [IETF 호환 RFC 2822 타임스탬프](https://datatracker.ietf.org/doc/html/rfc2822#page-14)와,
    [ISO8601의 특정 버전](https://www.ecma-international.org/ecma-262/11.0/#sec-date.parse)을 인식할 수
    있습니다.

    > **참고:** `Date` 생성자(및 동일한 동작의 `Date.parse()`)를 사용한 날짜
    > 파싱은 동작이 일관적이지 못하고 브라우저끼리 차이가 존재하므로 사용하지 않는 것이 좋습니다.
    >
    > - [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822)
    >   형식 문자열은 관례적으로만 지원하는 것 뿐입니다.
    > - ISO 8601 형식 문자열은 시간 정보 없는 문자열(`"1970-01-01"`
    >   등)을 현지 시간이 아닌 UTC 기준으로 처리하는 점에서 표준과 다릅니다.

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

## 예제

### Date 객체를 만드는 여러가지 방법

아래 예제는 JavaScript 날짜를 생성하는 몇 가지 방법을 보입니다.

> **참고:** `Date` 생성자(및 동일한 동작의 `Date.parse()`)를 사용한 날짜 파싱은
> 동작이 일관적이지 못하고 브라우저끼리 차이가 존재하므로 사용하지 않는 것이 좋습니다.

```js
let today = new Date();
let birthday = new Date("December 17, 1995 03:24:00");
let birthday = new Date("1995-12-17T03:24:00");
let birthday = new Date(1995, 11, 17); // 월은 0부터 시작
let birthday = new Date(1995, 11, 17, 3, 24, 0);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date")}}
