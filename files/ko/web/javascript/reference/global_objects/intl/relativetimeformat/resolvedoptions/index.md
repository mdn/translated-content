---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Intl.RelativeTimeFormat")}} 인스턴스의 **`resolvedOptions()`** 메서드는 이 `Intl.RelativeTimeFormat` 객체의 초기화 중 계산된 상대 시간 형식 옵션과 로케일을 반영하는 속성을 가진 새 객체를 반환합니다.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat.prototype.resolvedOptions")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" });
const options1 = rtf1.resolvedOptions();

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
const options2 = rtf2.resolvedOptions();

console.log(`${options1.locale}, ${options1.style}, ${options1.numeric}`);
// Expected output: "en, narrow, always"

console.log(`${options2.locale}, ${options2.style}, ${options2.numeric}`);
// Expected output: "es, long, auto"
```

## 구문

```js-nolint
resolvedOptions()
```

### 매개변수

없음.

### 반환 값

주어진 {{jsxref("Intl.RelativeTimeFormat")}} 객체를 초기화하는 동안 계산된 로케일 및 숫자 형식 옵션을 반영하는 속성을 가진 새 객체.

## 설명

결과 객체는 다음의 속성을 가집니다.

- `locale`
  - : 실제로 사용된 로케일에 대한 BCP 47 언어 태그입니다. 이 로케일로 이어지는 입력 BCP 47 언어 태그에 유니코드 확장 값이 요청된 경우, 이 로케일에 대해 요청되고 지원되는 키-값 쌍이 `locale`에 포함됩니다.
- `style`
  - : 국제화된 메시지의 길이입니다. 가능한 값은 다음과 같습니다.
    - `"long"` (기본 값, 예를 들어 `in 1 month`)
    - `"short"` (예를 들어 `in 1 mo.`),
    - 혹은 `"narrow"` (예를 들어 `in 1 mo.`). 좁은 스타일은 일부 로케일의 경우 짧은 스타일과 유사할 수 있습니다.

- `numeric`
  - : 출력 메시지의 형식입니다. 아래 값이 올 수 있습니다.
    - `"always"` (기본 값, 예를 들어 `1 day ago`),
    - 혹은 `"auto"` (예를 들어 `yesterday`). `"auto"` 값을 사용하면 출력에 항상 숫자 값을 사용할 필요가 없습니다.

- `numberingSystem`
  - : 유니코드 확장 키 `"nu"`를 사용하는 요청된 값 혹은 기본 값으로 채워진 값입니다.

## 예제

### resolvedOptions() 메서드 사용하기

```js
const de = new Intl.RelativeTimeFormat("de-DE");
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de-DE"
usedOptions.style; // "long"
usedOptions.numeric; // "always"
usedOptions.numberingSystem; // "latn"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.RelativeTimeFormat")}}
