---
title: "SyntaxError: functions cannot be labelled"
slug: Web/JavaScript/Reference/Errors/Function_label
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript에서 "functions cannot be labelled"라는 예외는 {{jsxref("Statements/function", "함수")}} 선언 앞에 [레이블](/ko/docs/Web/JavaScript/Reference/Statements/label)이 있을 때 발생합니다.

## 메시지

```plain
SyntaxError: In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement. (V8-based)
SyntaxError: In strict mode code, functions can only be declared at top level or inside a block. (V8-based)
SyntaxError: Generators can only be declared at the top level or inside a block. (V8-based)
SyntaxError: Async functions can only be declared at the top level or inside a block. (V8-based)

SyntaxError: functions can only be labelled inside blocks (Firefox)
SyntaxError: functions cannot be labelled (Firefox)
SyntaxError: generator functions cannot be labelled (Firefox)
SyntaxError: async function declarations can't appear in single-statement context (Firefox)

SyntaxError: Unexpected keyword 'function'. Function declarations are only allowed inside block statements or at the top level of a program. (Safari)
SyntaxError: Function declarations are only allowed inside blocks or switch statements in strict mode. (Safari)
SyntaxError: Unexpected token '*'. Cannot use generator function declaration in single-statement context. (Safari)
SyntaxError: Unexpected keyword 'function'. Cannot use async function declaration in single-statement context. (Safari)
```

## 에러 타입

{{jsxref("SyntaxError")}}

## 무엇이 잘못되었을까?

함수 선언에 레이블을 붙이는 것은 허용되지 않습니다. 레이블은 선언이 아니라 문에만 적용되어야 하기 때문입니다. 이 레이블로 실제로 분기할 방법이 없습니다. 다만 레거시 JavaScript 구문 규칙 때문에, 오류가 발생하는 조건이 필요 이상으로 복잡합니다.

- [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서는 함수 선언에 레이블을 절대 붙일 수 없습니다.
- 비엄격 모드에서는 함수 선언에 레이블을 붙일 수는 있지만, 그 함수가 if 문의 유일한 문인 경우에는 허용되지 않습니다(이 자체도 권장되지 않는 기능입니다).
- 비동기 함수, 제너레이터 함수, 비동기 제너레이토 함수는 레이블을 붙일 수 없습니다.

오류 메시지는 "invalid place for a function declaration to appear"와 비슷하게 표시될 수 있는데, 파서가 레이블을 보면 그 뒤에 문이 오기를 기대하지만 함수 선언은 문이 아니기 때문입니다. 이는 오류가 레이블 뒤에 함수를 둘 수 없다는 관점인지, 함수 앞에 레이블이 올 수 없다는 관점인지에 따라 달라집니다.

## 예제

### 의도와 다르게 파싱된 객체 리터럴

실제로 레이블이 분기 대상처럼 동작하길 기대했을 수도 있지만, 일반적으로 레이블로 의도한 것은 아닙니다. 가장 흔한 경우는 실제로 객체 리터럴에서 속성 키로 사용하려는 경우입니다.

```js-nolint example-bad
const createObj = () => {
  greet: function greet() { // SyntaxError: functions cannot be labelled
    console.log("Hello");
  }
};
```

여기서 `{...}`는 실제로 객체 리터럴이 아니라 [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)의 블록 본문이므로 `greet:` 는 레이블이 됩니다. 이를 해결하려면 객체 리터럴을 괄호로 감싸야 합니다.

```js-nolint example-good
const createObj = () => ({
  greet: function greet() {
    console.log("Hello");
  },
});
```

객체 리터럴에 [메서드 구문](/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions)을 사용하면 이러한 함정을 피할 수 있습니다.

```js example-good
const createObj = () => ({
  greet() {
    console.log("Hello");
  },
});
```

## 같이 보기

- [레이블이 지정된 문](/ko/docs/Web/JavaScript/Reference/Statements/label)
- {{jsxref("Statements/function", "function")}}
- [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)
- [사용 중단 및 구식 기능](/ko/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
