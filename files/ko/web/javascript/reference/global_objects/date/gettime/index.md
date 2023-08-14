---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
---

{{JSRef}}

**getTime()** 메서드는 표준시에 따라 지정된 날짜의 시간에 해당하는 숫자 값을 반환합니다.

이 메서드를 사용하면 다른 {{jsxref ( "Date")}} 객체에 날짜와 시간을 지정할 수 있습니다. 이 메소드는 기능적으로 {{jsxref("Date.valueof", "valueOf()")}} 메소드와 동일합니다.

## Syntax

```js
dateObj.getTime();
```

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜 사이의 경과 시간 (밀리 초)을 나타내는 숫자입니다.

## Examples

### 날짜 복사에 getTime () 사용

동일한 시간 값으로 날짜 객체를 생성합니다.

```js
// 월은 0부터 시작하여 생일은 1995 년 1 월 10 일이됩니다.
var birthday = new Date(1994, 12, 10);
var copy = new Date();
copy.setTime(birthday.getTime());
```

### 측정 실행 시간

새로 생성 된 {{jsxref ( "Date")}} 객체에서 두 개의 연속 getTime () 호출을 뺀 후에이 두 호출 사이의 시간 범위를 지정하십시오. 일부 작업의 실행 시간을 계산하는 데 사용할 수 있습니다. 불필요한 {{jsxref ( "Date")}} 객체를 인스턴스화하지 않으려면 {{jsxref("Date.now()")}}를 참조하십시오.

```js
var end, start;

start = new Date();
for (var i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log("Operation took " + (end.getTime() - start.getTime()) + " msec");
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
