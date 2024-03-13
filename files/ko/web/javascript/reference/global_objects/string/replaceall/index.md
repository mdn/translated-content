---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`replaceAll()`** 메서드는 `pattern`의 모든 일치 항목이 `replacement`로 대체된 새 문자열을 반환합니다. `pattern`은 문자열 또는 {{jsxref("RegExp")}}일 수 있으며 `replacement`는 각 일치 항목에 대해 호출되는 문자열 또는 함수일 수 있습니다. 원래 문자열은 변경되지 않습니다.

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

## 구문

```js-nolint
replaceAll(pattern, replacement)
```

## 매개변수

- `pattern`

  - : 문자열이거나 {{jsxref("Symbol/replace", "Symbol.replace")}} 메서드가 있는 객체일 수 있습니다. 일반적인 예로 [정규식](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)이 있습니다. `Symbol.replace` 메서드가 없는 모든 값은 문자열로 강제 변환됩니다.

    `pattern`[이 정규식](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes)이면 전역(`g`) 플래그가 설정되어 있어야 합니다. 그렇지 않으면 {{jsxref("TypeError")}}가 발생합니다.

- `replacement`
  - : 문자열이거나 함수일 수 있습니다. 교체는 [`String.prototype.replace()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)와 동일한 의미 체계를 갖습니다.

### 반환 값

패턴의 모든 일치 항목이 교체자로 대체된 새 문자열입니다.

### 예외

- {{jsxref("TypeError")}}
  - : `pattern`[이 정규식](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes) 이지만, 전역(`g`) 플래그가 설정되지 않은 경우 발생합니다([`flags`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) 속성에 "g"가 포함되지 않음).

## 설명

이 메서드는 호출된 문자열 값을 변경하지 않고 새 문자열을 반환합니다.

[`replace()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)와 달리 이 메서드는 첫 번째 문자열뿐만 아니라 문자열의 모든 항목을 바꿉니다. 특수 문자를 이스케이프하지 않고 [`RegExp()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) 생성자를 호출하면 의도하지 않게 의미 체계가 변경될 수 있으므로 문자열이 정적이라고 확신하지 못할 때 특히 유용합니다.

```js
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function safeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}

const report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(safeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."
```

`pattern`이 [`Symbol.replace`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) 메서드(`RegExp` 객체 포함)가 있는 객체인 경우 대상 문자열과 `replacement`를 인수로 하여 해당 메서드를 호출합니다. 반환 값은 `replaceAll()`의 반환 값이고, 이 경우 `replaceAll()`의 동작은 `@@replace` 메서드에 의해 완전히 인코딩되므로 `replace()`와 동일한 결과를 갖게 됩니다(정규식이 전역이라는 추가 입력 유효성 검사는 제외).

`pattern`이 빈 문자열인 경우엔 [`split()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 동작과 유사하게 모든 UTF-16 코드 단위 사이에 교체자가 삽입됩니다.

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

regex 속성(특히 [sticky](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) 플래그)이 `replaceAll()`과 상호 작용하는 방식에 대한 자세한 내용은 [`RegExp.prototype[@@replace]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)를 참조하세요.

## 예제

### replaceAll() 사용

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### 비전역 정규식 오류

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

아래는 잘 작동합니다.

```js example-good
"aabbcc".replaceAll(/b/g, ".");
("aa..cc");
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `String.prototype.replaceAll` 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replace", "String.prototype.replace()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
