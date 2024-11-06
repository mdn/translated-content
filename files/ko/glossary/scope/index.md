---
title: 스코프
slug: Glossary/Scope
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**스코프**는 컨텍스트는 {{glossary("value","값")}}과 "표현식"이 "표현"되거나 참조 될 수 있는 현재 실행되는 컨텍스트를 의미합니다. 만약 {{glossary("variable", "변수")}} 또는 표현식이 "해당 스코프"내에 있지 않다면, 사용할 수 없습니다. 스코프는 또한 계층적인 구조를 가지기 때문에, 하위 스코프는 상위 스코프에 접근할 수 있지만 반대는 불가하다.

**{{glossary("함수")}}** 는 **{{glossary("JavaScript")}}** 에서 **클로저** 역할을 하기 때문에 스코프를 생성하므로 함수 내에 정의된 변수는 외부 함수나 다른 함수 내에서는 접근 할 수 없습니다. 예를 들어 다음과 같은 상황은 유효하지 않습니다.

JavaScript는 다음과 같은 종류의 스코프가 있습니다.

- 전역 범위: 스크립트 모드에서 실행되는 모든 코드의 기본 범위입니다.
- 모듈 범위: 모듈 모드에서 실행되는 코드의 범위입니다.
- 함수 범위: {{glossary("function")}}로 생성된 범위입니다.

또한, [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) or [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const)로 선언된 변수는 추가 범위에 속할 수 있습니다.

- 블록 범위: 중괄호 쌍([블록](/ko/docs/Web/JavaScript/Reference/Statements/block))으로 생성된 범위입니다.

{{glossary("function", "함수")}}는 범위를 생성합니다. 예를 들면, 함수 내에서만 정의된 변수는 함수 외부나 다른 함수 내에서 접근할 수 없습니다. 다음 예는 유효하지 않습니다.

```js example-bad
function exampleFunction() {
  const x = "declared inside function"; // 변수 x는 안에서만 사용 가능합니다.
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
```

그러나, 다음 코드는 변수가 함수 외부에서 선언되어 전역 변수가 되기 때문에 유효합니다.

```js example-good
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```

Blocks only scope `let` and `const` declarations, but not `var` declarations.
블록 `let` 및 `const` 선언만 차단하고 `var` 선언은 차단하지 않습니다.

```js example-good
{
  var x = 1;
}
console.log(x); // 1
```

```js example-bad
{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined
```

## 같이 보기

- 위키백과의 [스코프 (컴퓨터 과학)](<https://en.wikipedia.org/wiki/Scope_(computer_science)>)
