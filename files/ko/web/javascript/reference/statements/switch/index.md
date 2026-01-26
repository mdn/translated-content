---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

**`switch`** 문은 [표현식](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators)을 평가하고, 그 결과값과 일치하는 `case` 절을 찾아 해당 절부터 `break` 문을 만날 때까지의 [문](/ko/docs/Web/JavaScript/Reference/Statements)을 실행합니다. 일치하는 `case`가 없으면 `default` 절이 실행됩니다.

{{InteractiveExample("JavaScript Demo: switch statement", "taller")}}

```js interactive-example
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // 예상 출력: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

## 구문

```js-nolint
switch (expression) {
  case caseExpression1:
    statements
  case caseExpression2:
    statements
  // …
  case caseExpressionN:
    statements
  default:
    statements
}
```

- `expression`
  - : 각 `case` 절과 대조할 표현식입니다.
- `caseExpressionN` {{optional_inline}}
  - : `expression`과 비교되는 `case` 절의 값입니다. `expression`의 값이 어떤 `caseExpressionN`과 일치하면, 해당 `case` 절 이후의 첫 번째 **문(statement)** 부터 `switch` 문 끝 또는 `break` 문을 만날 때까지 실행이 시작됩니다.
- `default` {{optional_inline}}
  - : 기본 절입니다. `expression`이 어떤 `case`와도 일치하지 않으면 이 절이 실행됩니다. `switch` 문에는 하나의 `default` 절만 존재할 수 있습니다.

## 설명

`switch` 문은 먼저 주어진 표현식을 평가합니다. 그 결과와 동일한 값을 가지는 `case` 절을 [엄격한 동등 비교](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality)를 통해 찾은 뒤, 해당 절로 제어 흐름을 이동시켜 그 절 이후의 **문(statement)** 들을 실행합니다.

각 `case` 절의 표현식은 필요할 때만 평가됩니다. 일치하는 절이 이미 발견되면, 이후의 `case` 절 표현식은 [폴스루](#breaking_and_fall-through)로 도달하더라도 평가되지 않습니다.

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// 1만 로그에 출력
```

일치하는 `case` 절이 없으면, 프로그램은 선택적으로 정의된 `default` 절로 제어를 이동하여 이후 **문(statement)** 을 실행합니다.
`default` 절이 없으면 `switch` 문을 빠져나와 다음 **문(statement)** 부터 실행을 계속합니다.
`default` 절은 보통 마지막에 위치하지만 반드시 그럴 필요는 없으며, 하나만 사용할 수 있습니다.
둘 이상의 `default` 절이 있으면 {{jsxref("SyntaxError")}}가 발생합니다.

### 중단과 폴스루

`switch` 문 본문 내에서 [`break`](/ko/docs/Web/JavaScript/Reference/Statements/break) 문을 사용하면, 해당 `case` 절의 실행을 마친 후 `switch` 문을 빠져나옵니다. 일반적으로 여러 `case` 절 사이 문장을 모두 실행한 뒤 종료할 때 사용됩니다.

`break` 가 없으면 실행은 다음 `case` 절로 이어지며, `default` 절까지 진행될 수 있습니다. 이러한 동작을 "폴스루(fall-through)"라고 합니다.

```js
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // foo의 값이 이 기준과 일치합니다; 여기서부터 실행이 시작됩니다
    console.log(0);
  // break를 잊었습니다! 폴스루가 동작됩니다.
  case 1: // 'case 0:'에 break 문이 없으므로 이 case도 실행됩니다
    console.log(1);
    break; // break를 만났습니다. 'case 2:'로 계속되지 않습니다
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// 0과 1이 로그에 출력됩니다
```

적절한 상황에서는 다른 제어 흐름 문장도 `switch` 문에서 벗어나는 효과가 있습니다. 예를 들어 `switch` 문이 함수 내에 포함되어 있는 경우, [`return`](/ko/docs/Web/JavaScript/Reference/Statements/return) 문은 함수 본문의 실행을 종료하므로 `switch` 문도 종료합니다. `switch` 문이 반복문 내에 포함되어 있는 경우, [`continue`](/ko/docs/Web/JavaScript/Reference/Statements/continue) 문은 `switch` 문을 중지하고 반복문의 다음 반복으로 건너뜁니다.

### 렉시컬 스코핑

`case`와 `default` 절은 [레이블(label)](/ko/docs/Web/JavaScript/Reference/Statements/label)과 같습니다: 제어 흐름이 도달 가능한 위치를 나타냅니다. 그러나 그들 자체는 렉시컬 [스코프](/ko/docs/Glossary/Scope)를 생성하지 않습니다(또한 위에서 설명한 대로 자동으로 벗어나지도 않습니다). 예를 들어:

```js-nolint example-bad
const action = "say_hello";
switch (action) {
  case "say_hello":
    const message = "hello";
    console.log(message);
    break;
  case "say_hi":
    const message = "hi";
    console.log(message);
    break;
  default:
    console.log("Empty action received.");
}
```

이 예제는 "Uncaught SyntaxError: Identifier 'message' has already been declared" 오류를 출력합니다. 첫 번째 `const message = 'hello';`선언이 두 번째 `const message = 'hi';` 선언과 충돌하기 때문입니다. 이는 각각 별도의 case 절 내에 있더라도 발생합니다. 궁극적으로 이는 두 `const` 선언 모두 `switch` 본문에 의해 생성된 동일한 블록 스코프 내에 있기 때문입니다.

이를 해결하려면 `case` 절에서 `let`이나 `const` 선언을 사용해야 할 때마다 블록으로 묶어야 합니다.

```js
const action = "say_hello";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}
```

이 코드는 이제 오류 없이 콘솔에 `hello`를 출력합니다.

## 예제

### switch 사용하기

다음 예제에서, `expr`이 `Bananas`로 평가되면 프로그램은 값을 `case 'Bananas'`와 일치시키고 관련 **문(statement)** 을 실행합니다. `break`를 만나면 프로그램은 `switch`에서 벗어나 `switch` 다음의 **문(statement)** 을 실행합니다. `break`가 생략되었다면 `case 'Cherries'`의 **문(statement)** 도 실행됩니다.

```js
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");
```

### 두 case 절 사이에 default 절 두기

일치하는 항목이 없으면, `default` 절부터 실행이 시작되고 그 이후의 모든 **문(statement)** 이 실행됩니다.

```js
const foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // 이 break를 만났으므로 'default:'로 계속되지 않습니다
  default:
    console.log("default");
  // 폴스루
  case 1:
    console.log("1");
}
```

`default`를 다른 모든 `case` 절 앞에 두어도 작동합니다.

### 폴스루를 전략적으로 활용하기

이 방법은 `case` 절 아래에 `break`가 없을 경우, 해당 `case`가 기준을 충족하는지 여부에 관계없이 실행이 다음 `case` 절로 계속된다는 사실을 활용합니다.

다음은 네 가지 다른 값이 정확히 동일한 작업을 수행하는 단일 동작 순차 `case` 문의 예입니다.

```js
const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}
```

다음은 제공된 정수에 따라 다른 출력을 받을 수 있는 다중 동작 순차 `case` 절의 예입니다. 이는 `case` 절을 배치한 순서대로 순회하며 반드시 숫자 순서대로 정렬되어 있을 필요는 없습니다. JavaScript에서는 숫자뿐만 아니라, 문자열도 `case` 문에 함께 사용할 수 있습니다.

```js
const foo = 1;
let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
```

이 예제의 출력:

| 값                                                           | 로그 텍스트                       |
| ------------------------------------------------------------ | --------------------------------- |
| `foo`가 `NaN`이거나 `1`, `2`, `3`, `4`, `5`, 또는 `0`이 아님 | Please pick a number from 0 to 5! |
| `0`                                                          | Output: So What Is Your Name?     |
| `1`                                                          | Output: What Is Your Name?        |
| `2`                                                          | Output: Your Name?                |
| `3`                                                          | Output: Name?                     |
| `4`                                                          | Output: ?                         |
| `5`                                                          | Output: !                         |

### if...else 체인의 대안

개발 중에 종종 [`if...else`](/ko/docs/Web/JavaScript/Reference/Statements/if...else) 문을 연달아 작성하는 자신을 발견하게 될 수도 있습니다.

```js
if ("fetch" in globalThis) {
  // fetch로 리소스 가져오기
} else if ("XMLHttpRequest" in globalThis) {
  // XMLHttpRequest로 리소스 가져오기
} else {
  // 일부 사용자 정의 AJAX 로직으로 리소스 가져오기
}
```

이 패턴은 꼭 `===` 비교만을 수행하는 것은 아니지만, `switch` 구조로도 충분히 변환할 수 있습니다.

```js
switch (true) {
  case "fetch" in globalThis:
    // fetch로 리소스 가져오기
    break;
  case "XMLHttpRequest" in globalThis:
    // XMLHttpRequest로 리소스 가져오기
    break;
  default:
    // 일부 사용자 정의 AJAX 로직으로 리소스 가져오기
    break;
}
```

`if...else`의 대안으로서의 `switch (true)` 패턴은 특히 폴스루 동작을 활용하려는 경우에 유용합니다.

```js
switch (true) {
  case isSquare(shape):
    console.log("This shape is a square.");
  // 폴스루, 정사각형은 직사각형이기도 하기 때문입니다!
  case isRectangle(shape):
    console.log("This shape is a rectangle.");
  case isQuadrilateral(shape):
    console.log("This shape is a quadrilateral.");
    break;
  case isCircle(shape):
    console.log("This shape is a circle.");
    break;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/if...else", "if...else")}}
