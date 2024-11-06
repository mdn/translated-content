---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`global`** 접근자 속성은 `g` 플래그가 정규표현식에 사용되었는지 여부를 나타냅니다.

{{EmbedInteractiveExample("pages/js/regexp-prototype-global.html")}}

## 설명

`g` 플래그가 사용된 경우 `RegExp.prototype.global`의 값은 `true`이고, 그렇지 않으면 `false`입니다.
`g` 플래그는 정규식이 문자열에서 가능한 모든 일치 항목에 대해 테스트되어야 함을 나타냅니다.
[`exec()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)를 호출할 때마다
[`lastIndex`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 속성이
업데이트되므로 다음 `exec()` 호출은 다음 문자에서 시작됩니다.

[`String.prototype.matchAll()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) 및 [`String.prototype.replaceAll()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)과 같은 일부 메서드는 매개변수가 정규식인 경우 전역(global)인지 여부를 확인합니다.
정규식의 [`@@match`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match) 및 [`@@replace`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) 메서드([`String.prototype.match()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match) 및 [`String.prototype.replace()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)에 의해 호출됨)도 정규식이 전역일 때 다른 동작을 갖습니다.

`global`의 set 접근자는 `undefined`, 즉 정의되지 않았습니다. 이 속성은 직접 변경할 수 없습니다.

## 예제

### global 사용하기

```js
const regex = /foo/g;
console.log(regex.global); // true

const str = "fooexamplefoo";
const str1 = str.replace(regex, "");
console.log(str1); // example

const regex1 = /foo/;
const str2 = str.replace(regex1, "");
console.log(str2); // examplefoo
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
