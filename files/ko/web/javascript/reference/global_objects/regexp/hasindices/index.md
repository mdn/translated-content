---
title: RegExp.prototype.hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

{{jsxref("RegExp")}} 인스턴스의 **`hasIndices`** 접근자 속성은 이 정규 표현식과 함께 `d` 플래그가 사용되는지 여부를 반환합니다.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.hasIndices")}}

```js interactive-example
const regex1 = new RegExp("foo", "d");

console.log(regex1.hasIndices);
// Expected output: true

const regex2 = new RegExp("bar");

console.log(regex2.hasIndices);
// Expected output: false
```

## 설명

`d` 플래그가 사용된 경우 `RegExp.prototype.hasIndices`는 `true` 값을 가지며, 그렇지 않은 경우 `false` 값을 갖습니다. `d` 플래그는 정규 표현식 일치 결과에 각 캡처 그룹의 하위 문자열의 시작 및 끝 인덱스가 포함됨을 나타냅니다. 이 플래그는 정규 표현식의 해석이나 일치 동작을 어떤 식으로든 변경하지 않으며 일치 결과에 추가 정보만 제공합니다.

이 플래그는 주로 [`exec()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)의 반환 값에 영향을 줍니다. `d` 플래그가 있는 경우, `exec()`가 반환하는 배열에는 `exec()` 메서드의 [반환 값](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value)에 설명된 대로 추가 `indices` 속성이 있습니다. 다른 모든 정규식 관련 메서드(예: {{jsxref("String.prototype.match()")}})는 내부적으로 `exec()`을 호출하므로 정규식에 `d` 플래그가 있는 경우 인덱스도 반환합니다.

`hasIndices` 설정 접근자는 `undefined`입니다. 이 속성을 직접 변경할 수 없습니다.

## 예제

좀 더 상세한 사용 예제는 [그룹과 역참조 > 그룹과 인덱스 일치 사용하기](/ko/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups_and_match_indices)에 있습니다.

### hasIndices 사용하기

```js
const str1 = "foo bar foo";

const regex1 = /foo/dg;

console.log(regex1.hasIndices); // true

console.log(regex1.exec(str1).indices[0]); // [0, 3]
console.log(regex1.exec(str1).indices[0]); // [8, 11]

const str2 = "foo bar foo";

const regex2 = /foo/;

console.log(regex2.hasIndices); // false

console.log(regex2.exec(str2).indices); // undefined
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
