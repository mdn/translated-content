---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
l10n:
  sourceCommit: c4e3558ee1045803df4a685f11f94dca273cd5fe
---

{{JSRef}}

**`flags`** 접근자 속성은 현재 정규식 객체의 [플래그](/ko/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)를 나타냅니다.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.flags")}}

```js interactive-example
// Outputs RegExp flags in alphabetical order

console.log(/foo/gi.flags);
// Expected output: "gi"

console.log(/bar/muy.flags);
// Expected output: "muy"
```

## 설명

`RegExp.prototype.flags`는 문자열입니다. `flags` 속성의 플래그는 왼쪽에서 오른쪽으로 알파벳 순으로 정렬됩니다(예를 들어 `"dgimsuy"`). 실제로 다른 플래그 접근자([`hasIndices`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices), [`global`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global), 등등)를 하나씩 호출하고 결과를 연결합니다.

내장된 모든 함수는 개별 플래그 접근자를 읽는 대신 `flags` 속성을 읽습니다.

`flags`의 set 접근자는 정의되지 않았습니다. 이 속성을 직접 변경할 수 없습니다.

## 예제

### flags 사용하기

```js-nolint
/foo/ig.flags; // "gi"
/bar/myu.flags; // "muy"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `RegExp.prototype.flags` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{JSxRef("RegExp.prototype.source")}}
