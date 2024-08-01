---
title: Intl.Locale.prototype.getTimeZones()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Intl.Locale")}} 인스턴스의 **`getTimeZones()`** 메서드는 이 로케일에 지원되는 시간대 목록을 반환합니다.

> [!NOTE]
> 일부 브라우저의 일부 버전에서는 이 메서드가 `timeZones`라는 접근자 속성으로 구현되었습니다. 그러나 이 메서드는 접근할 때마다 새로운 배열을 반환하기 때문에 `locale.timeZones === locale.timeZones`가 `false`를 반환하는 상황을 방지하기 위해 이제 메서드로 구현되었습니다. 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 참조하세요.

## 구문

```js-nolint
getTimeZones()
```

### 매개변수

없음.

### 반환 값

연결된 `Locale`에 대해 지원되는 시간대를 나타내는 문자열 배열로, 각 값은 알파벳 순서로 정렬된 [IANA 표준 시간대 이름](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database)입니다. 로케일 식별자에 지역 하위 태그가 포함되지 않은 경우 반환되는 값은 `undefined`입니다.

## 예제

### 지원되는 시간대 얻기

주어진 `Locale`을 지원하는 시간대 목록.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getTimeZones()); // ["Africa/Cairo"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getTimeZones()); // ["Asia/Tokyo"]
```

```js
const ar = new Intl.Locale("ar");
console.log(ar.getTimeZones()); // undefined
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.Locale")}}
- Wikipedia의 [IANA 시간대 데이터베이스](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database)
