---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
l10n:
  sourceCommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{JSRef}}

**`setMonth()`** 메서드는 현재 설정된 연도에 따라 지정된 날짜의 월을 설정합니다.

{{EmbedInteractiveExample("pages/js/date-setmonth.html")}}

## 구문

```js-nolint
setMonth(monthValue)
setMonth(monthValue, dayValue)
```

### 매개변수

- `monthValue`
  - : 연도의 시작에서 오프셋된 연도의 월을 나타내는 0 기반 정수입니다.
    그래서 0은 1월, 11은 12월, -1은 전년도의 12월, 12는 다음 해의 1월을 나타냅니다.
- `dayValue`
  - : 선택 사항. 한 달의 날짜를 나타내는 1에서 31 사이의 정수입니다.

### 반환 값

1970년 1월 1일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## 설명

`dayValue` 매개 변수를 지정하지 않으면 {{jsxref("Date.prototype.getDate()", "getDate()")}}
메서드에서 반환 된 값이 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어나면 `setMonth()`는 그에 따라 {{jsxref("Date")}} 객체의 날짜 정보를
업데이트하려고 시도합니다. 예를 들어 `monthValue`에 15를 사용하면 연도 값이 1 증가하고
월 값은 3이 됩니다.

현재 날짜가 이 메서드의 동작에 영향을 미칩니다.
개념적으로 새로운 날짜를 반환하기 위해 매개 변수로 지정된 새 달의 첫 번째 날에 해당 월의 현재 날짜로 지정된 일 수를 추가합니다.
예를 들어 현재 값이 2016년 8월 31일인 경우 setMonth의 매개 변수에 1을 넣고 함께 호출하면 2016년 3월 2일을 반환됩니다.
이는 2016년 2월에 29일이 있기 때문입니다.

## 예제

### `setMonth()` 사용하기

```js
const theBigDay = new Date();
theBigDay.setMonth(6);

// Watch out for end of month transitions
const endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
