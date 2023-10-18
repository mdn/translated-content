---
title: 논리적 AND (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
---

{{jsSidebar("Operators")}}

**논리적 AND (`&&`)** (논리적 연결) 연산자는 모든 불리언 피연산자가 `true`가 되었을 때 해당 피연산자의 집합은`true`가
됩니다.

보다 일반적으로 왼쪽에서 오른쪽으로 평가할 때 연산자는 처음으로 만나는 {{Glossary("falsy", "거짓 같은")}} 피연산자의
값을 반환합니다. 혹은 모두 {{Glossary("truthy", "참 같은 값")}}이라면 마지막 피연산자의 값을 반환합니다.

{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}

## 구문

```js-nolint
expr1 && expr2
```

## 설명

논리적 AND (`&&`)은 피연산자를 왼쪽에서 오른쪽으로 평가하면서 첫 {{Glossary("falsy", "거짓 같은")}} 피연산자를
만나면 즉시 그 값을 반환합니다. 만약 모든 값이 {{Glossary("truthy", "참 같은 값")}}이라면 마지막 피연산자의 값이
반환됩니다.

만약 어떤 값이 `true`로 변환 가능하다면 그 값은 소위 {{Glossary("truthy", "참 같은 값(truthy)")}}이라
합니다. 만약 어떤 값이 `false`로 변환 가능하다면 그 값은 소위 {{Glossary("falsy", "거짓 같은 값(falsy)")}}
이라고 합니다.

거짓으로 변환될 수 있는 표현식의 예제는 아래와 같습니다.

- `false`;
- `null`;
- `NaN`;
- `0`;
- 빈 문자열 (`""` or `''` or ` `` `);
- `undefined`.

AND 연산자는 불리언이 아닌 값을 보존하고 다음과 같이 반환합니다.

```js
result = "" && "foo"; // result 에 ""(빈 문자열)이 할당됩니다
result = 2 && 0; // result 에 0 이 할당됩니다
result = "foo" && 4; // result 에 4 가 할당됩니다.
```

`&&` 연산자는 불리언이 아닌 피연산자와 함께 사용할 수 있지만, 반환 값은 항상 [원시형 불리언](/ko/docs/Web/JavaScript/Data_structures#boolean_타입)으로
변환할 수 있기 때문에 불리언 연산자로 간주합니다. 반환값이나 어떠한 일반적인 표현식을 명시적으로 해당 불리언 값으로 변환하려면 이중
[`NOT 연산자`](/ko/docs/Web/JavaScript/Reference/Operators/Logical_NOT)를 사용하거나
{{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 생성자를 사용하시기 바랍니다.

### 단락 평가

논리적 AND 표현식은 단락(short-circuit, 혹은 단축) 연산자입니다. 각 피연산자는 불리언으로 변환되므로, 어떤 변환이
`false`로 판별되면 AND 연산자는 그 즉시 멈추고 거짓으로 판별된 피연산자의 원래의 값을 반환합니다. 나머지 피연산자는
평가하지 **않습니다**.

아래 유사 코드를 고려해보세요.

```
(some falsy expression) && expr
```

첫 번째 피연산자 `(some falsy expression)`은 {{Glossary("falsy", "거짓 같은 값")}}으로 평가되기
때문에, `expr` 부분은 **절대 평가되지 않습니다**. 만약 `expr`이 함수라면 해당 함수는 절대 실행되지 않습니다.

아래 예제를 참고하세요.

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(A() && B());
// 함수 A를 호춣했기 때문에 "called A" 로그가 콘솔에 남습니다.
// && 은 false 를 평가해서 (함수 A는 false를 반한합니다) false이 콘솔에 로깅됩니다.
// AND 연산자는 단락 평가가 가능하기 때문에 함수 B를 무시합니다.
```

### 연산자 우선순위

AND 연산자는 OR 연산자보다 높은 우선 순위를 가지며, 이는 `&&` 연산자가 `||` 연산자보다 먼저 실행된다는 것을 의미합니다.
([연산자 우선순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)참고).

```js
true || (false && false); // returns true
true && (false || false); // returns false
2 === 3 || (4 < 0 && 1 === 1); // returns false
```

## 예제

### AND 사용하기

다음 코드는 `&&`(논리적 AND) 연산자의 예를 보여줍니다.

```js
a1 = true && true; // t && t returns true
a2 = true && false; // t && f returns false
a3 = false && true; // f && t returns false
a4 = false && 3 === 4; // f && f returns false
a5 = "Cat" && "Dog"; // t && t returns "Dog"
a6 = false && "Cat"; // f && t returns false
a7 = "Cat" && false; // t && f returns false
a8 = "" && false; // f && f returns ""
a9 = false && ""; // f && f returns false
```

### 불리언을 위한 변환 규칙

#### AND를 OR로 변환하기

**불리언**을 포함하는 아래 연산은

```js
bCondition1 && bCondition2;
```

언제나 아래와 같습니다.

```js
!(!bCondition1 || !bCondition2);
```

#### OR을 AND로 변환하기

**불리언**을 포함하는 다음 연산은

```js
bCondition1 || bCondition2;
```

언제나 아래와 같습니다.

```js
!(!bCondition1 && !bCondition2);
```

### 중첩된 괄호 제거

논리적 표현식은 왼쪽에서 오른쪽으로 평가되기 때문에 특정 규칙을 따르는 경우 복잡한 식에서 괄호를 제거할 수 있습니다.

**불리언**을 포함하는 다음 복합적 연산은

```js
bCondition1 || (bCondition2 && bCondition3);
```

언제나 다음과 같습니다.

```js
bCondition1 || (bCondition2 && bCondition3);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
