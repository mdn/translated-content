---
title: "SyntaxError: missing = in const declaration"
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
---

{{jsSidebar("Errors")}}

## 메시지

```
    SyntaxError: Const must be initalized (Edge)
    SyntaxError: missing = in const declaration (Firefox)
    SyntaxError: Missing initializer in const declaration (Chrome)
```

## 에러 유형

{{jsxref("SyntaxError")}}

## 무엇이 잘못되었나요?

상수는 일반적인 실행 중에 프로그램에 의해 변경될 수 없는 값입니다. 상수는 재할당되거나 재선언될 수 없습니다. 자바스크립트에서 상수는 [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const) 키워드를 사용해 선언됩니다. 상수는 이니셜라이저가 필요합니다. 다시말해, 한 문장 안에 선언과 동시에 초기화가 이루어져야 합니다 (따라서 추후 수정 불가).

## 예제

### const 이니셜라이저가 빠진 경우

`var` 또는 `let`과 달리, `const` 선언에서는 반드시 값을 정의해야 합니다.

```js example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### 에러 수정

해당 에러를 수정하기 위해서 여러가지 방법이 존재합니다. 문제 상황에서 상수를 사용해 무엇을 하려 했는지 확인해보세요.

#### 상수 값 추가

선언과 같은 문장에 상수 값을 정의합니다.

```js example-good
const COLUMNS = 80;
```

#### `const`, `let`, `var`?

상수를 선언할 목적이 아니었다면 `const`를 사용하지 마세요. `let` 키워드를 이용한 블록범위 변수, 또는 `var` 키워드를 이용한 전역 변수를 사용할 수 있습니다. 두 가지 경우 모두 초기값을 요구하지 않습니다.

```js example-good
let columns;
```

## 같이 보기

- [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/ko/docs/Web/JavaScript/Reference/Statements/var)
