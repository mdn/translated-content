---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
---

{{jsSidebar("Errors")}}

## 메시지

```
    RangeError: invalid date (Firefox)
    RangeError: invalid time value (Chrome)
    RangeError: Provided date is not in valid range (Chrome)
```

## 에러 종류

{{jsxref("RangeError")}}

## 무엇이 잘못 된 걸까?

유효하지 않은 String이 {{jsxref("Date")}} 나 {{jsxref("Date.parse()")}}에 입력되었습니다.

## 예시

### 올바르지 않은 사용 예시

인식 할 수 없는 string이나 잘못된 요소 값을 포함하는 ISO 형식의 날짜 string은 일반적으로 {{jsxref ( "NaN")}}을 반환합니다. 그러나 구현 방식에 따라 ISO 형식 string을 따르지 않는 경우 `RangeError: invalid date`가 표시 될 수 있습니다. Firefox의 경우:

```js example-bad
new Date("foo-bar 2014");
new Date("2014-25-23").toISOString();
new Date("foo-bar 2014").toString();
```

그러나 이 경우, Firefox에서는 {{jsxref("NaN")}} 을 반환합니다:

```js example-bad
Date.parse("foo-bar 2014"); // NaN
```

더 자세한 사항은 {{jsxref("Date.parse()")}} 문서를 참고하세요.

### 올바른 사용 예시

```js example-good
new Date("05 October 2011 14:48 UTC");
```

## 더 보기

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
