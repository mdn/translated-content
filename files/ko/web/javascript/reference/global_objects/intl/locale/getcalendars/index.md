---
title: Intl.Locale.prototype.getCalendars()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Intl.Locale")}} 인스턴스의 **`getCalendars()`** 메서드는 이 로케일에 대한 하나 이상의 고유한 캘린더 식별자 목록을 반환합니다.

> [!NOTE]
> 일부 브라우저의 일부 버전에서는 이 메서드가 `calendars`라는 접근자 속성으로 구현되었습니다. 그러나 이 메서드는 접근할 때마다 새로운 배열을 반환하기 때문에 `locale.calendars === locale.calendars`가 `false`를 반환하는 상황을 방지하기 위해 이제 메서드로 구현되었습니다. 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 참조하세요.

## 구문

```js-nolint
getCalendars()
```

### 매개변수

없음.

### 반환 값

`Locale`에 일반적으로 사용되는 모든 달력을 나타내는 문자열 배열로, 내림차순 기본 설정으로 정렬됩니다. `Locale`에 이미 [`calender`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)가 있는 경우 반환된 배열에는 해당 단일 값이 포함됩니다.

아래는 지원되는 캘린더 목록입니다.

### 지원하는 달력 유형

- `buddhist`
  - : 태국 불교 달력
- `chinese`
  - : 전통 중국력
- `coptic`
  - : 콥트 달력
- `dangi`
  - : 전통 한국력
- `ethioaa`
  - : 에디오피아력, 아메테 알렘력 (기원전 약 5493년경)
- `ethiopic`
  - : 에디오피아력, 아메테 미흐렛력 (기원후 약 8년경)
- `gregory`
  - : 그레고리안력
- `hebrew`
  - : 전통 히브리력
- `indian`
  - : 인도력
- `islamic`
  - : 이슬람력
- `islamic-umalqura`
  - : 이슬람력, Umm al-Qura
- `islamic-tbla`
  - : 이슬람력, 표 형식 (윤년 [2,5,7,10,13,16,18,21,24,26,29] - 천문학적 기원)
- `islamic-civil`
  - : 이슬람력, 표 형식 (윤년 [2,5,7,10,13,16,18,21,24,26,29] - 민간 기원)
- `islamic-rgsa`
  - : 이슬람력, 사우디아라비아 달 관측법
- `iso8601`
  - : ISO 달력 (ISO 8601 달력 주 규칙을 사용한 그레고리안력)
- `japanese`
  - : 일본 제국력
- `persian`
  - : 페르시안력
- `roc`
  - : 민간용(계산식) 아랍 달력
- `islamicc`
  - : 민간용(계산식) 아랍 달력
    > [!WARNING]
    > `islamicc` 달력 키는 더 이상 사용하지 않습니다. `islamic-civil`를 사용해주세요.

## 예제

### 지원하는 달력 목록 얻기

`Locale` 객체에 `calendar`가 없는 경우, `getCalendars()`는 주어진 `Locale`에 대해 일반적으로 사용되는 모든 캘린더를 나열합니다. `calendar`를 명시적으로 설정하는 예제는 [`calendar` 예제](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#예제)를 참고하세요.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getCalendars()); // ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getCalendars()); // ["gregory", "japanese"]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.calendar`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
- 유니코드 로케일 데이터 마크업 언어 명세에서의 [유니코드 달력 식별자](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)
