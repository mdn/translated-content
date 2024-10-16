---
title: RegExp.prototype.unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`unicodeSets`** 접근자 속성은 {{jsxref("RegExp")}} 인스턴스의 속성으로, 이 정규 표현식에 `v` 플래그가 사용되었는지 여부를 반환합니다.

## 설명

`RegExp.prototype.unicodeSets`는 `v` 플래그가 사용된 경우 `true` 값을 가지며, 그렇지 않으면 `false`입니다. `v` 플래그는 [`u`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) 플래그의 업그레이드 버전으로, 더 많은 유니코드 관련 기능을 활성화합니다. ("v"는 알파벳에서 "u" 다음 글자입니다.) `u`와 `v`는 동일한 정규식을 호환되지 않는 방식으로 해석하기 때문에, 두 플래그를 모두 사용하면 {{jsxref("SyntaxError")}}가 발생합니다. `v` 플래그를 사용하면 `u` 플래그 설명에 언급된 모든 기능과 함께 다음과 같은 추가 기능을 사용할 수 있습니다.

- [`\p`](/ko/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) 이스케이프 시퀀스를 문자뿐만 아니라 문자열의 속성과도 일치시키는 데 사용할 수 있습니다.
- [문자 클래스](/ko/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) 구문이 업그레이드되어 교집합, 합집합, 차집합 구문을 허용하며, 여러 유니코드 문자와 일치시킬 수 있습니다.
- 문자 클래스 보수 구문 `[^...]`은 일치 결과를 부정하는 대신 보수 클래스를 구성하여 대소문자 구분 없는 일치에서 일부 혼란스러운 동작을 피합니다. 자세한 내용은 [보수 클래스와 대소문자 구분 없는 일치](/ko/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching)를 참조하세요.

`u` 모드에서 유효했던 일부 정규식은 `v` 모드에서 유효하지 않습니다. 특히 문자 클래스 구문이 다르고 일부 문자는 더 이상 문자 그대로 나타날 수 없습니다. 자세한 내용은 [`v` 모드 문자 클래스](/ko/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)를 참조하세요.

> [!NOTE] > `v` 모드는 문자소를 단일 문자로 해석하지 않습니다. 여전히 다수의 코드 포인트입니다. 예를 들어, `/[🇺🇳]/v`는 여전히 `"🇺"`와 일치할 수 있습니다.

`unicodeSets`의 설정자는 `undefined`입니다. 이 속성을 직접 변경할 수 없습니다.

## 예제

### unicodeSets 속성 사용하기

```js
const regex = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v;

console.log(regex.unicodeSets); // true
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
- {{jsxref("RegExp.prototype.unicode")}}
- [문자열의 표기법 및 속성을 설정하는 RegExp v 플래그](https://v8.dev/features/regexp-v-flag) - v8.dev (2022)
