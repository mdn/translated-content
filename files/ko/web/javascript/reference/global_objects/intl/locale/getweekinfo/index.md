---
title: Intl.Locale.prototype.getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Intl.Locale")}} 인스턴스의 **`getWeekInfo()`** 메서드는 이 로케일에 대한 `firstDay`, `weekend` 및 `minimalDays` 속성을 가진 `weekInfo` 객체를 반환합니다.

> [!NOTE]
> 일부 브라우저의 일부 버전에서는 이 메서드가 `weekInfo`라는 접근자 속성으로 구현되었습니다. 그러나 이 메서드는 접근할 때마다 새로운 객체를 반환하기 때문에 `locale.weekInfo === locale.weekInfo`가 `false`를 반환하는 상황을 방지하기 위해 이제 메서드로 구현되었습니다. 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 참조하세요.

## 구문

```js-nolint
getWeekInfo()
```

### 매개변수

없음.

### 반환 값

[UTS 35의 주 요소](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements)에 지정된 로케일 데이터와 관련된 주 정보를 나타내는 객체입니다. 다음과 같은 속성이 있습니다.

- `firstDay`
  - : 로케일의 첫 번째 요일을 나타내는 정수입니다. `1`(월요일) 또는 `7`(일요일)이 될 수 있습니다.
- `weekend`
  - : 로케일의 주말 요일을 나타내는 정수 배열로, 여기서 `1`은 월요일, `7`은 일요일입니다.
- `minimalDays`
  - : 달력용도로 사용되며, 월 또는 연도의 첫 주에 필요한 최소 일수를 나타내는 1에서 7 사이의 정수입니다.

## 예제

### 주 정보 획득하기

주어진 `Locale`을 위한 주 정보를 반환합니다.

```js
const he = new Intl.Locale("he");
console.log(he.getWeekInfo()); // { firstDay: 7, weekend: [5, 6], minimalDays: 1 }

const af = new Intl.Locale("af");
console.log(af.getWeekInfo()); // { firstDay: 7, weekend: [6, 7], minimalDays: 1 }

const enGB = new Intl.Locale("en-GB");
console.log(enGB.getWeekInfo()); // { firstDay: 1, weekend: [6, 7], minimalDays: 4 }

const msBN = new Intl.Locale("ms-BN");
console.log(msBN.getWeekInfo()); // { firstDay: 7, weekend: [5, 7], minimalDays: 1 }
// 브루네이의 주말은 금요일과 일요일이지 토요일은 아닙니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.Locale")}}
