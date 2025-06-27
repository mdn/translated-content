---
title: btoa() 전역 함수
slug: Web/API/Window/btoa
original_slug: Web/API/btoa
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{APIRef("HTML DOM")}}

**`btoa()`** 메서드는 문자열의 각 문자가 이진 데이터의 바이트 단위로 처리되는 이진 문자열을 {{glossary("Base64")}}로 인코딩한 {{Glossary("ASCII")}} 문자열을 생성합니다.

이 메서드를 사용하여 통신 문제를 일으킬 수 있는 데이터를 인코딩하고 전송한 다음, {{domxref("atob", "atob()")}} 메서드를 이용하여 데이터를 다시 디코딩할 수 있습니다. 예를 들어 0부터 31까지의 ASCII 값과 같은 제어 문자를 인코딩할 수 있습니다.

## 문법

```js-nolint
btoa(stringToEncode)
```

### 매개변수

- `stringToEncode`
  - : 인코딩할 이진 문자열입니다.

### 반환 값

`stringToEncode`의 Base64 표현을 포함하는 ASCII 문자열입니다.

### 예외

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 문자열에 단일 바이트가 아닌 문자가 포함되어 있을 때 발생합니다. 자세한 내용은 아래의 "유니코드 문자열"을 참조하세요.

## 예제

```js
const encodedData = btoa("Hello, world"); // 문자열을 인코딩합니다.
const decodedData = atob(encodedData); // 문자열을 디코딩합니다.
```

## 유니코드 문자열

Base64는 설계상 이진 데이터를 입력으로 기대합니다. JavaScript 문자열의 경우, 이는 각 문자의 코드 포인트가 1바이트만 차지하는 문자열을 의미합니다. 따라서 1바이트 이상을 차지하는 문자가 포함된 문자열을 `btoa()`에 전달하면 이진 데이터로 간주하지 않으므로 오류가 발생합니다.

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); // 61은 1바이트 미만입니다.

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713은 1바이트 이상을 차지합니다.

console.log(btoa(ok)); // YQ==
console.log(btoa(notOK)); // error
```

임의의 유니코드 텍스트를 처리할 때, 이 제한을 해결하는 방법은 {{Glossary("Base64")}} 용어집 항목의 ["유니코드 문제"](/ko/docs/Glossary/Base64#the_unicode_problem) 섹션을 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`](https://github.com/zloirock/core-js)에서 사용 가능한 [`btoa`의 폴리필](https://github.com/zloirock/core-js#base64-utility-methods)
- [`data` URL들](/ko/docs/Web/URI/Reference/Schemes/data)
- {{domxref("atob","atob()")}}
- {{Glossary("Base64")}}
