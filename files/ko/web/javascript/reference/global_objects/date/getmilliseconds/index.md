---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
---

{{JSRef}}

**`getMilliseconds()`** 메서드는 `Date` 인스턴스의 밀리초를 현지 시간 기준으로 반환합니다.

{{EmbedInteractiveExample("pages/js/date-getmilliseconds.html")}}

## 구문

```js
dateObj.getMilliseconds();
```

### 반환 값

주어진 날짜의 현지 시간 기준 밀리초를 나타내는 0에서 999 사이의 정수.

## 예제

### `getMilliseconds()` 사용하기

다음 예제에서는 현재 시간의 밀리초를 변수 `milliseconds`에 할당합니다.

```js
var today = new Date();
var milliseconds = today.getMilliseconds();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
