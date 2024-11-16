---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> 마지막 일치 상태를 전역적으로 노출하는 모든 `RegExp` 정적 속성은 더 이상 사용되지 않습니다. 자세한 내용은 [더 이상 사용되지 않는 RegExp 기능](/ko/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)을 참고하세요.

**`RegExp.lastMatch`** 정적 접근자 속성은 마지막 일치한 부분 문자열을 반환합니다. `RegExp["$&"]`는 이 속성의 별칭입니다.

## 설명

`lastMatch`는 {{jsxref("RegExp")}}의 정적 속성이기 때문에, 생성한 `RegExp` 객체의 속성으로 사용하는 것보다는 항상 `RegExp.lastMatch` 또는 `RegExp["$&"]`로 사용해야 합니다.

`lastMatch`의 값은 `RegExp`(`RegExp` 하위 클래스 제외) 인스턴스가 일치에 성공할 때마다 갱신됩니다. 일치하는 항목이 없으면 `lastMatch`는 빈 문자열입니다. `lastMatch`의 설정 접근자는 `undefined`이므로 이 속성을 직접 변경할 수 없습니다.

`&`는 유효한 식별자 부분이 아니므로 점 속성 접근자(`RegExp.$&`)와 함께 약칭을 사용할 수 없으며 이로 인해 {{jsxref("SyntaxError")}}가 발생합니다. 대신 [대괄호 표기법](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors)을 사용하시기 바랍니다.

`$&`는 {{jsxref("String.prototype.replace()")}}의 대체 문자열에도 사용할 수 있지만, 이는 `RegExp["$&"]` 레거시 속성과는 관련이 없습니다.

## 예제

### lastMatch와 $& 사용하기

```js
const re = /hi/g;
re.test("hi there!");
RegExp.lastMatch; // "hi"
RegExp["$&"]; // "hi"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("RegExp/input", "RegExp.input ($_)")}}
- {{jsxref("RegExp/lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp/leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp/rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp/n", "RegExp.$1, …, RegExp.$9")}}
