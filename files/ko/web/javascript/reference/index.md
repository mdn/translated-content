---
title: JavaScript 참고서
slug: Web/JavaScript/Reference
---

{{JsSidebar}}

이 페이지는 JavaScript 언어에 대한 정보 보관소입니다.
[이 참고서에 대해 더 읽어보세요](/ko/docs/Web/JavaScript/Reference/About).

## 내장 객체

[JavaScript 표준 내장 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects)와 그 메서드 및 속성입니다.

### 값 속성

- {{JSxRef("globalThis")}}
- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}

### 함수 속성

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}

### 기초 객체

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### 오류 객체

- {{JSxRef("Error")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}
- {{JSxRef("AggregateError")}}

### 숫자와 날짜

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### 텍스트 처리

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### 인덱스 콜렉션

- {{JSxRef("Array")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}

### 키 콜렉션

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### 구조화된 데이터

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("DataView")}}
- {{JSxRef("JSON")}}

### 메모리 관리

- {{JSxRef("WeakRef")}}
- {{JsxRef("FinalizationRegistry")}}

### 제어 추상화

- {{JSxRef("Promise")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Generator")}}
- {{JSxRef("AsyncGenerator")}}
- {{JSxRef("AsyncFunction")}}

### 리플렉션

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### 국제화

- {{JSxRef("Intl")}}
- {{JSxRef("Global_Objects/Intl/Collator", "Intl.Collator")}}
- {{JSxRef("Global_Objects/Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{JSxRef("Global_Objects/Intl/DisplayNames", "Intl.DisplayNames")}}
- {{JSxRef("Global_Objects/Intl/ListFormat", "Intl.ListFormat")}}
- {{JSxRef("Global_Objects/Intl/Locale", "Intl.Locale")}}
- {{JSxRef("Global_Objects/Intl/NumberFormat", "Intl.NumberFormat")}}
- {{JSxRef("Global_Objects/Intl/PluralRules", "Intl.PluralRules")}}
- {{JSxRef("Global_Objects/Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
- {{JSxRef("Global_Objects/Intl/Segmenter", "Intl.Segmenter")}}

## 명령문

[JavaScript 명령문과 선언문](/ko/docs/Web/JavaScript/Reference/Statements)입니다.

### 흐름 제어

- {{jsxref("Statements/block", "블록", "", 1)}}
- {{jsxref("Statements/Empty", "빈 명령문", "", 1)}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### 선언

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### 함수와 클래스

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/class", "class")}}

### 순회와 반복

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for_each...in", "for each...in")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### 기타

- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "label")}}
- {{jsxref("Statements/with", "with")}}

## 표현식 및 연산자

[JavaScript 표현식과 연산자](/ko/docs/Web/JavaScript/Reference/Operators)입니다.

### 일차 표현식

- {{JSxRef("Operators/this", "this")}}
- {{JSxRef("Operators/function", "function")}}
- {{JSxRef("Operators/class", "class")}}
- {{JSxRef("Operators/function*", "function*")}}
- {{JSxRef("Operators/yield", "yield")}}
- {{JSxRef("Operators/yield*", "yield*")}}
- {{JSxRef("Operators/async_function", "async function")}}
- {{JSxRef("Operators/async_function*", "async function*")}}
- {{JSxRef("Operators/await", "await")}}
- {{JSxRef("Global_Objects/Array", "[]")}}
- {{JSxRef("Operators/Object_initializer", "{}")}}
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
- {{JSxRef("Operators/Grouping", "( )")}}
- [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null)

### 좌변 표현식

- {{JSxRef("Operators/Property_accessors", "Property accessors", "", 1)}}
- [`?.` (Optional chaining)](/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- {{JSxRef("Operators/new", "new")}}
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
- {{JSxRef("Operators/import%2Emeta", "import.meta")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### 증감

- {{JSxRef("Operators/Increment", "A++")}}
- {{JSxRef("Operators/Decrement", "A--")}}
- {{JSxRef("Operators/Increment", "++A")}}
- {{JSxRef("Operators/Decrement", "--A")}}

### 단항 연산자

- {{JSxRef("Operators/delete", "delete")}}
- {{JSxRef("Operators/void", "void")}}
- {{JSxRef("Operators/typeof", "typeof")}}
- {{JSxRef("Operators/Unary_plus", "+")}}
- {{JSxRef("Operators/Unary_negation", "-")}}
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
- {{JSxRef("Operators/Logical_NOT", "!")}}

### 산술 연산자

- {{JSxRef("Operators/Addition", "+")}}
- {{JSxRef("Operators/Subtraction", "-")}}
- {{JSxRef("Operators/Division", "/")}}
- {{JSxRef("Operators/Multiplication", "*")}}
- {{JSxRef("Operators/Remainder", "%")}}
- {{JSxRef("Operators/Exponentiation", "**")}}

### 관계 연산자

- {{JSxRef("Operators/in", "in")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators/Less_than", "&lt;")}}
- {{JSxRef("Operators/Greater_than", "&gt;")}}
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}

### 동일 연산자

- {{JSxRef("Operators/Equality", "==")}}
- {{JSxRef("Operators/Inequality", "!=")}}
- {{JSxRef("Operators/Strict_equality", "===")}}
- {{JSxRef("Operators/Strict_inequality", "!==")}}

### 비트 시프트 연산자

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### 이진 비트 연산자

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
- {{JSxRef("Operators/Bitwise_OR", "|")}}
- {{JSxRef("Operators/Bitwise_XOR", "^")}}

### 이진 논리 연산자

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
- {{JSxRef("Operators/Logical_OR", "||")}}
- {{JSxRef("Operators/Nullish_coalescing_operator", "??")}}

### 조건(삼항) 연산자

- {{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}

### 할당 연산자

- {{JSxRef("Operators/Assignment", "=")}}
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
- {{JSxRef("Operators/Division_assignment", "/=")}}
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
- {{JSxRef("Operators/Addition_assignment", "+=")}}
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
- {{JSxRef("Operators/Logical_nullish_assignment", "??=")}}
- {{JSxRef("Operators/Destructuring_assignment", "[a, b] = arr")}}
- {{JSxRef("Operators/Destructuring_assignment", "{ a, b } = obj")}}

### 쉼표 연산자

- {{JSxRef("Operators/Comma_Operator", ",")}}

## 함수

이 장은 응용 프로그램을 개발할 때 [JavaScript 함수](/ko/docs/Web/JavaScript/Reference/Functions)를 사용하는
법을 설명합니다.

- [`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments)
- [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [기본 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## 추가 참고 페이지

- [어휘 구문](/ko/docs/Web/JavaScript/Reference/Lexical_grammar)
- [자료형과 자료 구조](/ko/docs/Web/JavaScript/Data_structures)
- [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)
- [사라진 기능](/ko/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
