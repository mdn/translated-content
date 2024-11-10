---
title: Intl.Locale.prototype.caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Intl.Locale")}} 인스턴스의 **`caseFirst`** 접근자 속성은 이 로케일의 데이터 정렬 규칙에 대/소문자가 고려되는지 여부를 반환합니다.

## 설명

로케일의 데이터 정렬 규칙은 해당 로케일에서 문자열이 정렬되는 방식을 결정하는 데 사용됩니다. 특정 로케일은 데이터 정렬 과정에서 문자의 대소문자를 사용합니다. 이 추가 규칙은 {{jsxref("Intl.Locale")}} 객체의 `caseFirst` 속성으로 표현할 수 있습니다.

아래 요약된 표와 같이 `caseFirst` 속성에는 3가지 값이 있습니다.

### `caseFirst` 값

| 값      | 설명                              |
| ------- | --------------------------------- |
| `upper` | 소문자보다 대문자를 앞서 정렬.    |
| `lower` | 대문자보다 소문자를 앞서 정렬.    |
| `false` | 정렬에 특별한 대소문자 구분 없음. |

## 예제

### 로케일 문자열을 통한 caseFirst 값 설정하기

[유니코드 로케일 문자열 명세](https://www.unicode.org/reports/tr35/)에서 `caseFirst`가 나타내는 값은 키 `kf`에 해당합니다. `kf`는 로케일 문자열 "확장 하위 태그"로 취급됩니다. 이러한 하위 태그는 로케일에 대한 추가 데이터를 더하며, `-u` 확장 키를 사용하여 로케일 식별자에 추가됩니다. 따라서 `caseFirst` 값을 `Locale` 생성자에 전달되는 초기 로케일 식별자 문자열에 추가할 수 있습니다. `caseFirst` 값을 추가하려면 먼저 문자열에 `-u` 확장 키를 추가합니다. 다음으로 `caseFirst` 값을 추가하고 있음을 나타내는 `-kf` 확장 키를 추가합니다. 마지막으로 `caseFirst` 값을 문자열에 추가합니다.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // Prints "upper"
```

### 구성 객체 인수를 통한 caseFirst 값 설정하기

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자에는 확장 유형을 전달하는 데 사용할 수 있는 선택적 구성 객체 인수가 있습니다. 구성 객체의 `caseFirst` 속성을 원하는 `caseFirst` 값으로 설정한 다음 생성자에 전달합니다.

```js
const locale = new Intl.Locale("en-Latn-US", { caseFirst: "lower" });
console.log(locale.caseFirst); // Prints "lower"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.Locale")}}
- [유니코드 Unicode case first collation spec](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
