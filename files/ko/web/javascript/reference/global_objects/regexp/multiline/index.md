---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`multiline`** 접근자 속성은 `m` 플래그가 정규표현식에 사용되었는지 여부를 나타냅니다.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.multiline", "taller")}}

```js interactive-example
const regex1 = new RegExp("^football");
const regex2 = new RegExp("^football", "m");

console.log(regex1.multiline);
// Expected output: false

console.log(regex2.multiline);
// Expected output: true

console.log(regex1.test("rugby\nfootball"));
// Expected output: false

console.log(regex2.test("rugby\nfootball"));
// Expected output: true
```

## 설명

`m` 플래그가 사용된 경우 `RegExp.prototype.multiline`은 `true` 값을 가지며,
그렇지 않으면 `false` 값을 갖습니다. `m` 플래그는 여러 줄 입력 문자열을 여러 줄로 처리해야 함을 나타냅니다.
예를 들어, `m`이 사용되면 `^`와 `$`는 전체 문자열의 시작 또는 끝에서만 일치하는 것에서
문자열 내의 모든 줄의 시작 또는 끝에서 일치하는 것으로 변경됩니다.

`multiline`의 set 접근자는 `undefined`, 즉 정의되지 않았습니다. 이 속성은 직접 변경할 수 없습니다.

## 예제

### multiline 사용하기

```js
const regex = /foo/m;

console.log(regex.multiline); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
