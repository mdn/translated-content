---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`unicode`** 접근자 속성은 {{jsxref("RegExp")}} 인스턴스의 속성으로, 이 정규 표현식에 `u` 플래그가 사용되었는지 여부를 반환합니다.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.unicode", "taller")}}

```js interactive-example
const regex1 = new RegExp("\u{61}");
const regex2 = new RegExp("\u{61}", "u");

console.log(regex1.unicode);
// Expected output: false

console.log(regex2.unicode);
// Expected output: true

console.log(regex1.source);
// Expected output: "a"

console.log(regex2.source);
// Expected output: "a"
```

## 설명

`RegExp.prototype.unicode`는 `u` 플래그가 사용된 경우 `true` 값을 가지며, 그렇지 않으면 `false`입니다. `u` 플래그는 다양한 유니코드 관련 기능을 활성화합니다. "u" 플래그를 사용할때는 정규 표현식은 아래와 같이 동작합니다.

- 모든 [유니코드 코드 포인트 이스케이프](/ko/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`)는 단순 이스케이프가 아닌 유니코드로 해석됩니다. 예를 들어, `/\u{61}/u`는 `"a"`와 일치하지만, `/\u{61}/` (`u` 플래그 없이)는 `"u".repeat(61)`와 일치하며, 여기서 `\u`는 단일 `u`와 동일합니다.
- 서로게이트 쌍은 두 개의 별개 문자가 아닌 하나의 전체 문자로 해석됩니다. 예를 들어, `/[😄]/u`는 `"😄"`와만 일치하고 `"\ud83d"`와는 일치하지 않습니다.
- [`lastIndex`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)가 자동으로 진행될 때(예: [`exec()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)를 호출할 때), 유니코드 정규식은 UTF-16 코드 단위 대신 유니코드 코드 포인트로 진행합니다.

구문 오류를 방지하기 위한 다른 구문 분석 동작의 변경 사항도 있습니다(이는 정규식 구문에 대한 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)와 유사합니다). 이러한 구문들은 모두 [웹 호환성을 위해 유지되지만 사용하지 않는 기능](/ko/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)이며, 이에 의존해서는 안 됩니다.

`unicode`의 설정자는 `undefined`입니다. 이 속성을 직접 변경할 수 없습니다.

### 유니코드 인식 모드

유니코드 미인식 모드라고 할 때, 우리는 정규식이 `u` 또는 [`v`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) 플래그를 가지고 있음을 의미합니다. 이 경우 정규식은 유니코드 관련 기능([유니코드 문자 클래스 이스케이프](/ko/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) 등)을 활성화하고 훨씬 더 엄격한 구문 규칙을 가집니다. `u`와 `v`는 동일한 정규식을 서로 호환되지 않는 방식으로 해석하기 때문에, 두 플래그를 모두 사용하면 {{jsxref("SyntaxError")}}가 발생합니다.

마찬가지로, 정규식이 유니코드 미인식 모드라면 `u`나 `v` 플래그가 없음을 의미합니다. 이 경우 정규식은 UTF-16 코드 단위의 시퀀스로 해석되며, 구문 오류가 되지 않는 많은 레거시 구문이 있습니다.

## 예제

### unicode 속성 사용하기

```js
const regex = /\u{61}/u;

console.log(regex.unicode); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
