---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
l10n:
  sourceCommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{JSRef}}

**`setTime()`** 메서드는 {{jsxref("Date")}} 객체를 1970년 1월 1일 00:00:00 UTC부터
밀리 초 단위로 나타내는 시간으로 설정합니다.

{{EmbedInteractiveExample("pages/js/date-settime.html", "taller")}}

## 구문

```js-nolint
setTime(timeValue)
```

### 매개변수

- `timeValue`
  - : 1970년 1월 1일 00:00:00 UTC 이후의 밀리 초 수를 나타내는 정수 값 입니다.

### 반환 값

1970년 1월 1일 00:00:00 UTC와 업데이트 된 날짜 (사실상 인수의 값) 사이의 밀리 초 수입니다.

## 설명

`setTime()` 메서드를 사용하면 다른 {{jsxref("Date")}} 객체에 날짜와 시간을 지정할 수 있습니다.

## 예제

### `setTime()` 사용하기

```js
const theBigDay = new Date("July 1, 1999");
const sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
