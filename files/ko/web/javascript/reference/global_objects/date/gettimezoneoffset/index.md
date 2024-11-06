---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
---

{{JSRef}}

**getTimezoneOffset()** 메소드는 현재 로케일 (즉, 호스트 시스템 설정)에 대한 시간대 오프셋 (UTC)을 분 단위로 반환합니다.

## Syntax

```js
dateObj.getTimezoneOffset();
```

### Return value

현재 호스트 설정을 기반으로하는 날짜에 대한 시간대 오프셋 (UTC) (분)을 나타내는 숫자입니다.

## Description

시간대 오프셋은 UTC와 현지 시간의 차이 (분)입니다. 이것은 로컬 시간대가 UTC보다 뒤떨어져 있으면 오프셋이 양수이고 앞에있을 경우 음수임을 의미합니다. 예를 들어, 시간대 UTC + 10 : 00 (오스트레일리아 동부 표준시, 블라디보스토크 시간, 차모로 표준시)의 경우 -600이 반환됩니다.

반환 된 표준 시간대 오프셋은 호출 된 날짜에 적용되는 오프셋입니다. 호스트 시스템이 일광 절약 시간으로 구성된 경우 오프셋은 Date가 나타내는 날짜와 시간에 따라 변경되고 일광 절약 시간이 적용됩니다.

## Examples

### Using `getTimezoneOffset()`

```js
// 호스트 장치의 현재 시간대 오프셋 가져 오기
var x = new Date();
var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;

// 2016 년 국제 노동절 (5 월 1 일)에 대한 시간대 오프셋 가져 오기
var labourDay = new Date(2016, 4, 1);
var labourDayOffset = labourDay.getTimezoneOffset() / 60;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
