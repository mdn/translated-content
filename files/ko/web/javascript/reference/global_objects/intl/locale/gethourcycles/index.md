---
title: Intl.Locale.prototype.getHourCycles()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Intl.Locale")}} 인스턴스의 **`getHourCycles()`** 메서드는 이 로케일에 해당하는 하나 이상의 고유한 시간 주기 식별자 목록을 반환합니다.

> [!NOTE]
> 일부 브라우저의 일부 버전에서는 이 메서드가 `hourCycles`라는 접근자 속성으로 구현되었습니다. 그러나 이 메서드는 접근할 때마다 새로운 배열을 반환하기 때문에 `locale.hourCycles === locale.hourCycles`가 `false`를 반환하는 상황을 방지하기 위해 현재는 메서드로 구현되어 있습니다. 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 참조하세요.

## 구문

```js-nolint
getHourCycles()
```

### 매개변수

없음.

### 반환 값

`Locale`에 일반적으로 사용되는 모든 시간 주기 유형을 나타내는 문자열 배열로, 내림차순 기본 설정으로 정렬됩니다. `Locale`에 이미 [`hourCycle`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)이 있는 경우 반환된 배열에는 해당 단일 값이 포함됩니다.

아래는 지원되는 시간 주기 유형 목록입니다.

### 지원되는 시간 주기 유형

- `h12`
  - 1-12를 사용하는 시간 체계, 패턴의 'h'에 해당합니다. 자정을 오전 12:00에 시작하는 12시간 시계입니다. 미국 등지에서 사용합니다.
- `h23`
  - 0-23을 사용하는 시간 체계, 패턴의 'H'에 해당합니다. 자정이 0:00시에 시작되는 24시간 시계입니다.
- `h11`
  - 0-11을 사용하는 시간 체계, 패턴에서 'K'에 해당합니다. 자정이 오전 0:00시에 시작되는 12시간 시계입니다. 주로 일본에서 사용합니다.
- `h24`
  - 1-24를 사용하는 시간 체계, 패턴의 'k'에 해당합니다. 자정이 24:00부터 시작되는 24시간 시계입니다. 어디에서도 사용되지 않습니다.

## 예제

### 지원하는 시간 주기 획득하기

`Locale` 객체에 `hourCycle`가 없는 경우, `getHourCycles()`는 주어진 `Locale`에 대해 일반적으로 사용되는 모든 콜레이션 유형을 나열합니다. `hourCycle`를 명시적으로 설정하는 예제는 [`hourCycle` 예제](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#examples)를 참고하시기 바랍니다.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getHourCycles()); // ["h12"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getHourCycles()); // ["h23"]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.hourCycle`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
- 유니코드 로케일 마크업 언어 명세에서 [유니코드 시간 주기 식별자](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
