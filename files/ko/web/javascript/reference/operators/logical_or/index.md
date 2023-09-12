---
title: Logical OR (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Operators")}}

**논리적 OR (`||`)** (논리적 분리) 연산자는 피연산자 중 하나 이상이 참인 경우에만 참입니다. 일반적으로 불리언(논리적) 값과 함께 사용되며, 이 경우에는 불리언 값을 반환합니다. 그러나 `||` 연산자는 실제로 지정된 피 연산자 중 하나의 값을 반환하므로, 이 연산자를 불리언이 아닌 값과 함께 사용하면 불리언이 아닌 값이 반환됩니다.

{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}

## 문법

```js-nolint
x || y
```

## 설명

만약 `x`를 `true`로 반환할 수 있으면 `x`를 반환하고, 그렇지 않으면 `y`를 반환합니다.

값을 `true`로 변환할 수 있는 경우, 해당 값은 소위 {{Glossary("truthy")}}하다고 할 수 있습니다. 값을 `false`로 변환할 수 있으면, 해당 값을 {{Glossary("falsy")}}하다고 할 수 있습니다.

false로 변환할 수 있는 표현식의 예는 다음과 같습니다.

- `null`;
- `NaN`;
- `0`;
- 빈 문자열 (`""` 또는 `''` 또는 ` `` `);
- `undefined`.

`||` 연산자는 불리언 값이 아닌 피연산자와 함께 사용할 수 있지만, 반환 값은 항상 [불리언 원시 값](/ko/docs/Web/JavaScript/Data_structures#boolean_type)으로 변환할 수 있으므로 불리언 연산자로 간주할 수 있습니다. 반환 값(또는 일반적으로 모든 표현식)을 해당 불리언 값으로 명시적으로 변환하려면 이중 [{{JSxRef("Operators/Logical_NOT", "NOT operator", "", 1)}}] 또는 {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 생성자를 사용합니다.

### 단락 회로 평가

The logical OR expression is evaluated left to right, it is tested for possible
"short-circuit" evaluation using the following rule:

`(some truthy expression) || expr` is short-circuit evaluated to
the truthy expression.

Short circuit means that the `expr` part above is **not
evaluated**, hence any side effects of doing so do not take effect (e.g., if
`expr` is a function call, the calling never takes place). This
happens because the value of the operator is already determined after the evaluation of
the first operand. See example:

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
// Logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)
```

### Operator precedence

The following expressions might seem equivalent, but they are not, because the
`&&` operator is executed before the `||` operator
(see [operator precedence](/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // returns true, because && is executed first
(true || false) && false; // returns false, because grouping has the highest precedence
```

## Examples

### Using OR

The following code shows examples of the `||` (logical OR) operator.

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

> **Note:** If you use this operator to provide a default value to some
> variable, be aware that any _falsy_ value will not be used. If you only need to
> filter out [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null) or {{jsxref("undefined")}}, consider using
> [the nullish coalescing operator](/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing).

### Conversion rules for booleans

#### Converting AND to OR

The following operation involving **booleans**:

```js-nolint
bCondition1 && bCondition2
```

is always equal to:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Converting OR to AND

The following operation involving **booleans**:

```js-nolint
bCondition1 || bCondition2
```

is always equal to:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Removing nested parentheses

As logical expressions are evaluated left to right, it is always possible to remove
parentheses from a complex expression following some rules.

The following composite operation involving **booleans**:

```js-nolint
bCondition1 && (bCondition2 || bCondition3)
```

is always equal to:

```js-nolint
!(!bCondition1 || !bCondition2 && !bCondition3)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Nullish coalescing operator (`??`)](/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
