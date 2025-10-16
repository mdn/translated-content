---
title: Intl.Locale.prototype.getTextInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Intl.Locale")}} 인스턴스의 **`getTextInfo()`** 메서드는 이 로케일에 대해 `ltr`(왼쪽에서 오른쪽) 또는 `rtl`(오른쪽에서 왼쪽)을 가리키는 문자 순서를 반환합니다.

> [!NOTE]
> 일부 브라우저의 일부 버전에서는 이 메서드가 `textInfo`라는 접근자 속성으로 구현되었습니다. 그러나 접근할 때마다 새로운 객체를 반환하기 때문에 `locale.textInfo === locale.textInfo`가 `false`를 반환하는 상황을 방지하기 위해 이제 메서드로 구현되었습니다. 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 참조하세요.

## 구문

```js-nolint
getTextInfo()
```

### 매개변수

없음.

### 반환 값

[UTS 35의 레이아웃 요소](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements)에 지정된 로케일 데이터와 관련된 텍스트 입력설정 정보를 나타내는 객체입니다. 다음과 같은 속성이 있습니다.

- `direction`
  - 로케일의 텍스트 방향을 나타내는 문자열입니다. `"ltr"`(왼쪽에서 오른쪽) 또는 `"rtl"`(오른쪽에서 왼쪽) 중 하나 일 수 있습니다.

## 예제

### text info 얻기

주어진 `Locale`에 대해 지원하는 텍스트 방향을 반환합니다.

```js
const ar = new Intl.Locale("ar");
console.log(ar.getTextInfo()); // { direction: "rtl" }
console.log(ar.getTextInfo().direction); // "rtl"
```

```js
const es = new Intl.Locale("es");
console.log(es.getTextInfo()); // { direction: "ltr" }
console.log(es.getTextInfo().direction); // "ltr"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.Locale")}}
