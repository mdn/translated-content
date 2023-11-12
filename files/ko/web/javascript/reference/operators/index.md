---
title: 식 및 연산자
slug: Web/JavaScript/Reference/Operators
---

{{jsSidebar("Operators")}}

이 장은 JavaScript의 모든 연산자, 식 및 키워드를 나열합니다.

## 항목별 식 및 연산자

알파벳순 목록은 왼쪽 사이드바를 보세요.

### 기본 식

기본 키워드 및 JavaScript의 일반 식.

- {{JSxRef("Operators/this", "this")}}
  - : `this` 키워드는 실행 문맥의 특별한 속성을 가리킵니다.
- {{JSxRef("Operators/function", "function")}}
  - : `function` 키워드는 함수를 정의합니다.
- {{JSxRef("Operators/class", "class")}}
  - : `class` 키워드는 클래스를 정의합니다.
- {{JSxRef("Operators/function*", "function*")}}
  - : `function*` 키워드는 생성기 함수 식을 정의합니다.
- {{JSxRef("Operators/yield", "yield")}}
  - : 생성기 함수를 일시정지 및 재개합니다.
- {{JSxRef("Operators/yield*", "yield*")}}
  - : 다른 생성기 함수 또는 순회가능 객체로 위임합니다.
- {{JSxRef("Operators/async_function", "async function")}}
  - : `async function`은 비동기 함수 표현식을 정의합니다.
- {{JSxRef("Operators/await", "await")}}
  - : 비동기 함수를 일시 중지했다가 다시 시작하고 promise의 resolution/rejection을 기다립니다.
- {{JSxRef("Global_Objects/Array", "[]")}}
  - : 배열 초기자 및 리터럴 구문.
- {{JSxRef("Operators/Object_initializer", "{}")}}
  - : 객체 초기자 및 리터럴 구문.
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
  - : 정규식 리터럴 구문.
- {{JSxRef("Operators/Grouping", "( )")}}
  - : 그룹 연산자.

### 좌변 식

좌변값은 할당 대상입니다.

- {{JSxRef("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : 속성 접근자는 객체의 속성 또는 메서드에 대한 접근 방법을 제공합니다.
    (`object.property`, `object["property"]`)
- {{JSxRef("Operators/new", "new")}}
  - : `new` 연산자는 생성자의 인스턴스를 만듭니다.
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
  - : 생성자 문맥에서, `new.target`은 {{jsxref("Operators/new", "new")}}에 의해 호출된 생성자를 말합니다.
- {{JSxRef("Operators/super", "super")}}
  - : `super` 키워드는 부모 생성자를 호출합니다.
- {{JSxRef("Operators/Spread_syntax", "...obj")}}
  - : 전개 연산자는 (함수 호출 시) 매개변수 여럿이나, (배열 리터럴에서) 다수의 요소를 필요로 하는 곳에서 표현식을 확장합니다.

### 증가 및 감소

접두/접미 증감 연산자입니다.

- {{JSxRef("Operators/Increment", "A++")}}
  - : 접미 증가 연산자.
- {{JSxRef("Operators/Decrement", "A--")}}
  - : 접미 감소 연산자.
- {{JSxRef("Operators/Increment", "++A")}}
  - : 접두 증가 연산자.
- {{JSxRef("Operators/Decrement", "--A")}}
  - : 접두 감소 연산자.

### 단항 연산자

단항 연산은 피연산자가 하나뿐인 연산입니다.

- {{JSxRef("Operators/delete", "delete")}}
  - : `delete` 연산자는 객체에서 속성을 지웁니다.
- {{JSxRef("Operators/void", "void")}}
  - : `void` 연산자는 식의 반환값을 버립니다.
- {{JSxRef("Operators/typeof", "typeof")}}
  - : `typeof` 연산자는 주어진 객체의 형을 판별합니다.
- {{JSxRef("Operators/Unary_plus", "+")}}
  - : 단항 더하기 연산자는 피연산자를 숫자로 변환합니다.
- {{JSxRef("Operators/Unary_negation", "-")}}
  - : 단항 부정 연산자는 피연산자를 숫자로 변환한 뒤 부호를 바꿉니다.
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
  - : 비트 NOT 연산자.
- {{JSxRef("Operators/Logical_NOT", "!")}}
  - : 논리 NOT 연산자.

### 산술 연산자

산술 연산자는 피연산자로 숫자 값(리터럴이나 변수)을 취하고 숫자 값 하나를 반환합니다.

- {{JSxRef("Operators/Addition", "+")}}
  - : 더하기 연산자.
- {{JSxRef("Operators/Subtraction", "-")}}
  - : 빼기 연산자.
- {{JSxRef("Operators/Division", "/")}}
  - : 나누기 연산자.
- {{JSxRef("Operators/Multiplication", "*")}}
  - : 곱하기 연산자.
- {{JSxRef("Operators/Remainder", "%")}}
  - : 나머지 연산자.

<!---->

- {{JSxRef("Operators/Exponentiation", "**")}}
  - : 거듭제곱 연산자.

### 관계 연산자

비교 연산자는 피연산자를 비교하고, 비교가 참인지 여부를 나타내는 {{jsxref("Boolean")}} 값을 반환합니다.

- {{JSxRef("Operators/in", "in")}}
  - : `in` 연산자는 객체에 주어진 속성이 있는지를 결정합니다.
- {{JSxRef("Operators/instanceof", "instanceof")}}
  - : `instanceof` 연산자는 객체가 다른 객체의 인스턴스인지 판별합니다.
- {{JSxRef("Operators/Less_than", "&lt;")}}
  - : 작음 연산자.
- {{JSxRef("Operators/Greater_than", "&gt;")}}
  - : 큼 연산자.
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
  - : 작거나 같음 연산자.
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
  - : 크거나 같음 연산자.

<div class="note"><p><strong>참고: =></strong> 는 연산자가 아니고, <a href="/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions">화살표 함수</a>의 표기법입니다.</p></div>

### 같음 연산자

같음 연산자의 평가 결과는 항상 {{jsxref("Boolean")}} 형으로 비교가 참인지 나타냅니다.

- {{JSxRef("Operators/Equality", "==")}}
  - : 동등 연산자.
- {{JSxRef("Operators/Inequality", "!=")}}
  - : 부등 연산자.
- {{JSxRef("Operators/Strict_equality", "===")}}
  - : 일치 연산자.
- {{JSxRef("Operators/Strict_inequality", "!==")}}
  - : 불일치 연산자.

### 비트 시프트 연산자

피연산자의 모든 비트를 시프트하는 연산.

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
  - : 비트 좌로 시프트 연산자.
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
  - : 비트 우로 시프트 연산자.
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : 비트 부호 없는 우로 시프트 연산자.

### 이진 비트 연산자

비트 연산자는 피연산자를 32비트 집합(0과 1)으로 다루고 표준 JavaScript 숫자 값을 반환합니다.

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
  - : 비트 AND.
- {{JSxRef("Operators/Bitwise_OR", "|")}}
  - : 비트 OR.
- {{JSxRef("Operators/Bitwise_XOR", "^")}}
  - : 비트 XOR.

### 이진 논리 연산자

논리 연산자는 보통 사용될 때 불리언(논리) 값으로 사용되고, 불리언 값을 반환합니다.

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
  - : 논리 AND.
- {{JSxRef("Operators/Logical_OR", "||")}}
  - : 논리 OR.
- {{JSxRef("Operators/Nullish_coalescing_operator", "??")}}
  - : Nullish 통합 연산자.

### 조건부(삼항) 연산자

<dl><dt>{{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}</dt></dl>

조건부 연산자는 조건의 논리값에 따라 두 값 중 하나를 반환합니다.

### 선택적 연결 연산자

- {{JSxRef("Operators/Optional_chaining", "?.")}}
  - : 선택적 연결 연산자는 참조가 [nullish](/ko/docs/Glossary/nullish) ([`null`](/ko/docs/Web/JavaScript/Reference/Global_Objects/null) 또는 [`undefined`](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)) 인 경우 오류를 발생시키는 대신 `undefined`를 반환합니다.

### 할당 연산자

할당 연산자는 값을 그 우변 피연산자의 값에 따라 좌변 피연산자에 할당합니다.

- {{JSxRef("Operators/Assignment", "=")}}
  - : 할당 연산자.
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
  - : 곱셈 할당.
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
  - : 거듭제곱 할당.
- {{JSxRef("Operators/Division_assignment", "/=")}}
  - : 나눗셈 할당.
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
  - : 나머지 할당.
- {{JSxRef("Operators/Addition_assignment", "+=")}}
  - : 덧셈 할당.
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
  - : 뺄셈 할당
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : 좌로 이동 할당.
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : 우로 이동 할당.
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : 부호 없는 우로 이동 할당.
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : 비트 AND 할당.
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
  - : 비트 XOR 할당.
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
  - : 비트 OR 할당.
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : 논리적 AND 할당.
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
  - : 논리적 OR 할당.
- {{JSxRef("Operators/Logical_nullish_assignment", "??=")}}
  - : 논리적 nullish 할당.
- {{JSxRef("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{JSxRef("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : 구조 분해 할당은 배열 또는 객체의 속성을 배열 또는 객체 리터럴과 비슷해 보이는 구문을 사용하여 변수에 할당할 수 있게 합니다.

### 쉼표 연산자

- {{jsxref("Operators/Comma_Operator", ",")}}
  - : 쉼표 연산자는 여러 식을 단문으로 평가되게 하고 마지막 식의 결과를 반환합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [연산자 우선순위](/ko/docs/Web/JavaScript/Reference/Operators/연산자_우선순위)
