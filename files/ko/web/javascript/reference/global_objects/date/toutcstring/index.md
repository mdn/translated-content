---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
---

{{JSRef}}

**`toUTCString()`** 메서드는 날짜를 문자열로 변환하여 UTC 시단대로 해석합니다. `toGMTString()`은 이 메서드의 별칭입니다.

[rfc7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1)에 기반하고 [ECMA-262 toUTCString](https://tc39.es/ecma262/#sec-date.prototype.toutcstring)에 따라 음수 값을 가질 수 있습니다.

{{EmbedInteractiveExample("pages/js/date-toutcstring.html","shorter")}}

## 구문

```js-nolint
toUTCString()
```

### 반환 값

UTC 시간대를 사용하여 지정된 날짜를 나타내는 문자열입니다.

## 설명

`toUTCString()`에 의하여 반환된 값은 `Www, dd Mmm yyyy hh:mm:ss GMT` 형식의 문자열입니다, 아래와 같습니다.

| 문자열 형식 | 설명                                                         |
| ----------- | ------------------------------------------------------------ |
| `Www`       | 요일, 세 글자로 (예를 들어 `Sun`, `Mon`)                     |
| `dd`        | 월일, 필요한 경우 선두가 0인 두 자리 숫자로 표시             |
| `Mmm`       | 달, 세 글자로 (예를 들어 `Jan`, `Feb`)                       |
| `yyyy`      | 연도, 필요한 경우 선행 0이 포함된 네 자리 이상의 숫자로 표시 |
| `hh`        | 시간, 필요한 경우 선행 0인 두 자리 숫자로 표시               |
| `mm`        | 분, 필요한 경우 선행 0인 두 자리 숫자로 표시                 |
| `ss`        | 초, 필요한 경우 선행 0인 두 자리 숫자로 표시                 |

### 별칭

JavaScript의 `Date` API는 Java의 `java.util.Date` 라이브러리의 영감을 받았습니다 (1997년 Java 1.1 이후로 사실상 유산이 될지라도). 특히 JavaScript의 날짜는 항상 UTC 시간에 의해 작동하는 반면, [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time)는 [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)와 동일하지 않기 때문에, Java의 `Date` 클래스에는 `toGMTString`이라는 형편없는 이름의 메서드가 있었습니다. 웹 호환성의 이유로 `toGMTSring`은 `toUTCString`의 별칭으로 남아 있으며, 이들은 정확히 동일한 함수 개체를 참조합니다. 아래와 같습니다.

```js
Date.prototype.toGMTString.name === "toUTCString";
```

## 예제

### toUTCString() 사용

```js
const today = new Date("Wed, 14 Jun 2017 00:00:00 PDT");
const UTCstring = today.toUTCString(); // Wed, 14 Jun 2017 07:00:00 GMT
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
