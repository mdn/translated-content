---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}} {{Deprecated_Header}}

> **참고:** `compile()` 메서드는 호환성을 위해서만 명시되어 있습니다. `compile()`을 사용하면 변경 불가능한 정규식 소스와 플래그가 변경 가능하므로 사용자의 예상을 빗나갈 수 있습니다. 대신 [`RegExp()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) 생성자를 사용하여 새 정규식 객체를 생성할 수 있습니다.

{{jsxref("RegExp")}} 인스턴스의 **`compile()`** 메서드는 `RegExp` 객체가 이미 생성된 후 새로운 소스와 플래그를 사용하여 정규식을 다시 컴파일하는 데 사용됩니다.

## 구문

```js-nolint
compile(pattern, flags)
```

### 매개변수

- `pattern`
  - : 정규 표현식 텍스트
- `flags`
  - : [플래그 값](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags)의 조합.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

### compile() 사용하기

다음 예제는 새로운 패턴과 새로운 플래그를 사용하여 정규식을 다시 컴파일하는 방법을 보여 줍니다.

```js
const regexObj = new RegExp("foo", "gi");
regexObj.compile("new foo", "g");
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("RegExp")}}
