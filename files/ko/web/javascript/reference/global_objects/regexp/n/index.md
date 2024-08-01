---
title: RegExp.$1, …, RegExp.$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> 마지막 일치 상태를 전역적으로 노출하는 모든 `RegExp` 정적 속성은 더 이상 사용되지 않습니다. 자세한 내용은 [더 이상 사용되지 않는 RegExp 기능](/ko/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)을 참고하세요.

**`RegExp.$1, …, RegExp.$9`** 정적 접근자 속성은 괄호 안의 하위 문자열 일치 항목을 반환합니다.

## 설명

`$1`–`$9`는 {{jsxref("RegExp")}}의 정적 속성이기 때문에, 생성한 `RegExp` 객체의 속성으로 사용하는 것보다는 항상`RegExp.$1`, `RegExp.$2` 등으로 사용해야 합니다.

`$1, …, $9`의 값은 `RegExp`(`RegExp` 하위 클래스 제외) 인스턴스가 일치에 성공할 때마다 갱신됩니다. 일치하는 항목이 없거나 마지막 일치가 대응되는 캡쳐 그룹이 없으면 각각의 속성은 빈 문자열입니다. 각각의 속성의 설정 접근자는 `undefined`이므로 이 속성을 직접 변경할 수 없습니다.

괄호로 묶을 수 있는 하위 문자열의 개수는 제한이 없지만 `RegExp` 객체는 처음 9개만 보유할 수 있습니다. 반환된 배열의 인덱스를 통해 괄호로 묶인 모든 하위 문자열에 접근할 수 있습니다.

`$1, …, $9`는 {{jsxref("String.prototype.replace()")}}의 대체 문자열에도 사용할 수 있지만, 이는 `RegExp.$n` 레거시 속성과는 관련이 없습니다.

## 예제

### RegExp.prototype.test()와 함께 $n 사용하기

아래 스크립트는 일반적인 문자열 내에서 숫자를 잡아내기 위해 {{jsxref("RegExp.prototype.test()")}} 메서드를 사용합니다.

```js
const str = "Test 24";
const number = /(\d+)/.test(str) ? RegExp.$1 : "0";
number; // "24"
```

`re.test(str)` 호출과 `RegExp.$n` 속성 사이에 다른 정규식을 사용하는 작업은 부작용이 있을 수 있습니다. 이러한 특수 속성 접근은 즉시 수행해야 하며, 그렇지 않으면 예상치 못한 결과가 발생할 수 있다는 점을 주의하시기 바랍니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("RegExp/input", "RegExp.input ($_)")}}
- {{jsxref("RegExp/lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp/lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp/leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp/rightContext", "RegExp.rightContext ($')")}}
