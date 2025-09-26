---
title: Intl.Locale.prototype.baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

{{jsxref("Intl.Locale")}} 인스턴스의 **`baseName`** 접근자 속성은 이 로케일의 문자열 표현의 하위 문자열을 반환하며, 언어, 사용 가능한 경우 지역 및 스크립트 등 이 로케일의 핵심 정보를 포함합니다.

## 설명

`baseName`은 [unicode_language_id 문법](https://www.unicode.org/reports/tr35/#Identifiers)의 `language ["-" script] ["-" region] *("-" variant)` 하위 시퀀스를 반환합니다. 로케일 식별자 문자열 또는 옵션 객체를 통해 생성자에서 명시적으로 지정된 정보만 포함됩니다.

`baseName`의 설정 접근자는 `undefined`입니다. 이 속성을 직접 변경할 수 없습니다.

## 예제

### 기본적인 예제

```js
const myLoc = new Intl.Locale("fr-Latn-CA"); // 로케일을 Canadian French로 설정합니다
console.log(myLoc.toString()); // "fr-Latn-CA-u-ca-gregory"가 출력됩니다.
console.log(myLoc.baseName); // "fr-Latn-CA"가 출력됩니다.
```

### 입력 문자열 옵션 예제

```js
// 언어를 일본어로, 지역을 일본어로 설정

// 달력은 그레고리안력으로, 시간 주기를 24시간으로 설정
const japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // "ja-JP-u-ca-gregory-hc-h24" 출력
console.log(japan.baseName); // "ja-JP" 출력
```

### 입력 문자열을 옵션으로 재정의하는 예제

```js
// 네덜런드어와 벨기에 지역을 가리키는 문자열을 입력합니다.

// 그러나 옵션 객체는 지역을 재정의하고 이를 네덜란드로 설정합니다.
const dutch = new Intl.Locale("nl-Latn-BE", { region: "NL" });

console.log(dutch.baseName); // "nl-Latn-NL"를 출력합니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.Locale")}}
