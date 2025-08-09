---
title: Nullish coalescing assignment (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

**널 병합 할당 연산자(`??=`)** 또는 **논리적 널 할당**은 왼쪽 피연산자가 [nullish](/ko/docs/Glossary/Nullish)([null](/ko/docs/Web/JavaScript/Reference/Operators/null) 또는 [undefined](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined))일 때, 오른쪽 피연산자를 평가하여 왼쪽에 할당합니다.

{{InteractiveExample("JavaScript Demo: Nullish coalescing assignment (??=) operator")}}

```js interactive-example
const a = { duration: 50 };

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50
```

## 구문

```js-nolint
x ??= y
```

## 설명

널 병합 할당은 [short-circuits](/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting)을 수행합니다.
즉, `x ??= y` 는 `x ?? (x = y)`와 같지만 `x`는 오직 한 번만 평가됩니다.

왼쪽 피연산자가 [nullish](/ko/docs/Glossary/Nullish) ([null](/ko/docs/Web/JavaScript/Reference/Operators/null) 또는 [undefined](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined))가 아닌 경우, 할당은 수행되지 않습니다.
예를 들어, 아래 코드에서는 x 가 const로 선언됐음에도 불구하고 에러를 발생시키지 않습니다.

```js
const x = 1;
x ??= 2;
```

아래 코드에서도 setter 함수는 호출되지 않습니다.

```js
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("Setter called");
  },
};

x.value ??= 2;
```

실제로, `x` 가 [nullish](/ko/docs/Glossary/Nullish)가 아닌 경우 y는 평가조차 되지 않습니다.

```js
const x = 1;
x ??= console.log("y evaluated");
// Logs nothing
```

## 예제

### 널 병합 할당 사용하기

널 병합 할당 연산자(`??=`)를 사용하여 객체 속성에 기본 값을 적용할 수 있습니다.
[구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Destructuring_assignment)과 [기본 값](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value)을 사용하는 방식과는 다르게, 속성 값이 [nullish](/ko/docs/Glossary/Nullish) ([null](/ko/docs/Web/JavaScript/Reference/Operators/null) 또는 [undefined](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined))인 경우에도 기본 값을 지정할 수 있습니다.

```js
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- [Nullish coalescing operator (`??`)](/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{Glossary("Nullish")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
