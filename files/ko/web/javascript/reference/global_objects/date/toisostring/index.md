---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
---

{{JSRef}}

**`toISOString()`** 메서드는 단순화한 확장 ISO 형식([ISO 8601](http://en.wikipedia.org/wiki/ISO_8601))의 문자열을 반환합니다. 반환값은 언제나 24글자 또는 27글자(각각 **`YYYY-MM-DDTHH:mm:ss.sssZ`** 또는 **`±YYYYYY-MM-DDTHH:mm:ss.sssZ`**)입니다. 시간대는 언제나 UTC이며 접미어 "`Z`"로 표현합니다.

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## 구문

```js
    dateObj.toISOString()
```

### 반환 값

주어진 날짜를 국제표준시 기준 [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) 형식으로 표현한 문자열.

## 예제

### `toISOString()` 사용하기

아래 예제는 비표준 문자열의 분석을 포함하고 있어 비 Mozilla 브라우저에서는 올바르게 작동하지 않을 수 있습니다.

```js
const today = new Date('05 October 2011 14:48 UTC');

console.log(today.toISOString()); // Returns 2011-10-05T14:48:00.000Z
```

## 폴리필

`toISOString`은 ECMA-262 제5판에 표준으로 자리잡았습니다. 아직 지원하지 않는 환경에서는 다음 코드를 추가해 대체할 수 있습니다.

```js
if (!Date.prototype.toISOString) {
  (function() {

    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  }());
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
