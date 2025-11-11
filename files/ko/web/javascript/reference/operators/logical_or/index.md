---
title: Logical OR (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Operators")}}

**논리적 OR (`||`)** (논리적 분리) 연산자는 피연산자 중 하나 이상이 참인 경우에만 참입니다. 일반적으로 불리언(논리적) 값과 함께 사용되며, 이 경우에는 불리언 값을 반환합니다. 그러나 `||` 연산자는 실제로 지정된 피연산자 중 하나의 값을 반환하므로, 이 연산자를 불리언이 아닌 값과 함께 사용하면 불리언이 아닌 값이 반환됩니다.

{{InteractiveExample("JavaScript Demo: Expressions - Logical OR", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// Expected output: true
```

## 문법

```js-nolint
x || y
```

## 구문

만약 `x`를 `true`로 반환할 수 있으면 `x`를 반환하고, 그렇지 않으면 `y`를 반환합니다.

값을 `true`로 변환할 수 있는 경우, 해당 값은 소위 {{Glossary("truthy")}}하다고 할 수 있습니다. 값을 `false`로 변환할 수 있으면, 해당 값을 {{Glossary("falsy")}}하다고 할 수 있습니다.

false로 변환할 수 있는 표현식의 예는 다음과 같습니다.

- `null`;
- `NaN`;
- `0`;
- 빈 문자열 (`""` 또는 `''` 또는 ` `` `);
- `undefined`.

`||` 연산자는 불리언 값이 아닌 피연산자와 함께 사용할 수 있지만, 반환 값은 항상 [불리언 원시 값](/ko/docs/Web/JavaScript/Guide/Data_structures#boolean_type)으로 변환할 수 있으므로 불리언 연산자로 간주할 수 있습니다. 반환 값(또는 일반적으로 모든 표현식)을 해당 불리언 값으로 명시적으로 변환하려면 이중 [{{JSxRef("Operators/Logical_NOT", "NOT operator", "", 1)}}] 또는 {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 생성자를 사용합니다.

### 단락 평가

논리적 OR 표현식은 왼쪽에서 오른쪽으로 평가되며, 다음 규칙을 사용하여 "단락" 평가가 가능한지 테스트합니다.

`(some truthy expression) || expr`은 참 같은 값(truthy) 표현식으로 단락 평가됩니다.

단락은 위의 `expr` 부분이 **평가되지 않으므로** 이로 인한 부작용이 발생하지 않음을 의미합니다. (예: `expr`이 함수 호출인 경우 호출이 수행되지 않음) 이는 첫 번째 피연산자를 평가한 후에 피연산자 값이 이미 결정되었기 때문에 발생합니다. 아래 예제를 참조하세요.

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(B() || A());
// 함수 호출로 인해 "called B"를 콘솔에 출력합니다.
// 그런 다음 true(연산자의 결과 값)를 기록합니다.
```

### 연산자 우선순위

다음 표현식은 동일해 보일 수 있지만, `&&` 연산자가 `||` 연산자보다 먼저 실행되기 때문에 동일하지 않습니다. ([연산자 우선순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence)를 참조).

```js-nolint
true || false && false; // &&이 먼저 실행되어 true를 반환합니다.
(true || false) && false; // 그룹화가 가장 우선순위가 높으므로, false를 반환합니다.
```

## 예제

### OR 사용하기

다음 코드는 `||` (논리적 OR) 연산자의 예를 보여줍니다.

```js
true || true; // t || t returns true
false || true; // f || t returns true
true || false; // t || f returns true
false || 3 === 4; // f || f returns false
"Cat" || "Dog"; // t || t returns "Cat"
false || "Cat"; // f || t returns "Cat"
"Cat" || false; // t || f returns "Cat"
"" || false; // f || f returns false
false || ""; // f || f returns ""
false || varObject; // f || object returns varObject
```

> [!NOTE]
> 이 연산자를 사용하여 일부 변수에 기본값을 제공하는 경우, 거짓 같은 값(falsy)은 사용되지 않으므로 주의해야 합니다.
> [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null) 또는 {{jsxref("undefined")}}만 필터링해야 하는 경우, [널 병합 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)를 사용하는 것이 좋습니다.

### 불리언에 대한 변환 규칙

#### AND를 OR로 변환하기

**불리언**을 포함하는 아래 연산은

```js-nolint
bCondition1 && bCondition2
```

항상 아래와 같습니다.

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### OR을 AND로 변환하기

**불리언**을 포함하는 아래의 연산은

```js-nolint
bCondition1 || bCondition2
```

항상 아래와 같습니다.

```js-nolint
!(!bCondition1 && !bCondition2)
```

### 중첩된 괄호 제거

논리적 표현식은 왼쪽에서 오른쪽으로 평가되기 때문에 특정 규칙을 따르는 경우 복잡한 식에서 괄호를 제거할 수 있습니다.

**불리언**을 포함하는 다음 복합적인 연산은

```js-nolint
bCondition1 && (bCondition2 || bCondition3)
```

언제나 다음과 같습니다.

```js-nolint
!(!bCondition1 || !bCondition2 && !bCondition3)
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Nullish coalescing operator (`??`)](/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
