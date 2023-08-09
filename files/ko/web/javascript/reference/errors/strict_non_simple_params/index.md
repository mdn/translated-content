---
title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters'
slug: Web/JavaScript/Reference/Errors/Strict_non_simple_params
---

{{jsSidebar("Errors")}}

## Message

```
    Firefox:
    SyntaxError: "use strict" not allowed in function with default parameter
    SyntaxError: "use strict" not allowed in function with rest parameter
    SyntaxError: "use strict" not allowed in function with destructuring parameter

    Chrome:
    SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
```

## Error type

{{jsxref("SyntaxError")}}.

## 무엇이 잘못 되었을까요?

`"use strict"` 지시문은 다음 매개변수 중 한 개가 있는 함수의 맨 위에 작성됩니다:

- {{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}

`"use strict"` 지시문은 ECMAScript 동작에 따라 이러한 함수의 맨 위에 허용되지 않습니다.

## Examples

### 기능 명세서

다음은 함수 `sum` 에는 기본 매개 변수 `a=1` 및 `b=2`가 있는 경우입니다:

```js example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  'use strict';
  return a + b;
}
```

함수가 [strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode) 모드에 있어야 하고 전체 스크립트 또는 포함된 함수가 [strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode)에 있어도 괜찮으면 함수 외부에서 `"use strict"` 지시문을 이동할 수 있습니다:

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### 함수 표현식

함수 표현식은 또 다른 해결방법을 사용할 수 있습니다:

```js example-bad
var sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  'use strict';
  return a + b;
};
```

이것은 다음 표현식으로 변환 될 수 있습니다:

```js example-good
var sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### 화살표 함수

화살표 함수가 `this`에 접근해야 하는 경우에는, 둘러싼 함수로 화살표 함수를 사용할 수 있습니다:

```js example-bad
var callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  'use strict';
  return this.run(args);
};
```

이것은 다음 표현식과 같이 변환될 수 있습니다:

```js example-good
var callback = (() => {
  "use strict";
  return (...args) => {
    return this.run(args);
  };
})();
```

## 같이 보기

- {{jsxref("Strict_mode", "Strict mode", "", 1)}}
- {{jsxref("Statements/function", "function statement", "", 1)}}
- {{jsxref("Operators/function", "function expression", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}
