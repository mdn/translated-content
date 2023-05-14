---
title: Transitioning to strict mode(엄격모드로 전환)
slug: conflicting/Web/JavaScript/Reference/Strict_mode
original_slug: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
---
{{jsSidebar("More")}}ECMAScript 5에서 [strict mode](/en-US/docs/JavaScript/Strict_mode)이 도입이 되었다. 이제는 모든 주요 브라우저에서 사용이 가능하다(IE10 포함) 웹 브라우저가 엄격한 코드를 해석하도록 만들어준다. (소스 코드의 맨 위에 `'use strict'`를 추가하는 것만으로), 기존 코드 기반을 엄격 모드로 전환하는 것은 좀 더 많은 작업을 한다.이 글은 개발자의 안내서에 초점이 맞춰져있다.

## Gradual transition

Strict 모드는 점진적으로 전환 할 수 있도록 설계되었다. 개별 파일을 개별적으로 변경하거나 코드를 엄격 모드에서 함수 단위로 전환 할 수도 있다.

## strict 와 non-strict의 차이점

### Syntax errors

`'use strict';` 를 추가하게 되면, 아래의 경우에는 스크립트가 실행되기 전에{{jsxref("SyntaxError")}} 에러를 던진다.

- Octal syntax `var n = 023;`
- [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement
- Using [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) on a variable name `delete myVariable`;
- Using [`eval`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) or [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) as variable or function argument name
- Using one of the newly [reserved keywords](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) (in prevision for ECMAScript 2015): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, and `yield`
- Declaring function in blocks `if (a < b) { function f() {} }`
- Obvious errors

  - Declaring twice the same name for a property name in an object literal `{a: 1, b: 3, a: 7}` This is no longer the case in ECMAScript 2015 ([Firefox bug 1041128](https://bugzil.la/1041128)).
  - Declaring two function parameters with the same name `function f(a, b, b) {}`

우리들의 명백한 에러나 나쁜 실수들이 드러나기 때문에 이러한 에러들은 좋다. 이러한 것들은 코드가 실행되기 전에 실행이 된다.

### New runtime errors

JavaScript는 컨테스트에서 조용한 실패에 익숙해져 있다. Strict mode는 이 같은 경우에는 던졌다. 만약 너의 코드베이스에 이 같은 경우가 포함되어있다면, 잘못된 것이 있는지 확인하기 위해 테스트가 필요할 것이다. 다시 한번, 함수 세분화된 단계에서 발생할 수 있다.

#### 값을 선언되지 않은 변수로 설정하기

```js
function f(x) {
  'use strict';
  var a = 12;
  b = a + x * 35; // error!
}
f(42);
```

이것은 예상된 효과가 드문 전역객체의 변수를 변경하는 데 사용된다. 만약에 정말로 전역객체의 변수를 부여하고 싶다면, 그것을 인수, 그것을 argument로 넘기고 property로 명시적 할당을 한다.

```js
var global = this; // in the top-level context, "this" always
                   // refers to the global object
function f(x) {
  'use strict';
  var a = 12;
  global.b = a + x * 35;
}
f(42);
```

#### 구성할 수 없는 속성을 삭제하려고 한다.

```js
'use strict';
delete Object.prototype; // error!
```

비-엄격모드에서는 조용한 실패였으나 사용자의 기대에는 맞지 않다.

#### 중독 된 인수 및 함수 속성

엄격모드에서 `arguments.callee`, `arguments.caller`, `anyFunction.caller`, or `anyFunction.arguments` 접근하려고 하면 에러를 던진다. 합법적인 사용 사례는 다음과 같은 함수를 다시 사용하는 것이다 :

```js
// example taken from vanillajs: http://vanilla-js.com/
var s = document.getElementById('thing').style;
s.opacity = 1;
(function() {
  if ((s.opacity-=.1) < 0)
    s.display = 'none';
  else
    setTimeout(arguments.callee, 40);
})();
```

이것을다음과 같이 재 작성할 수 있다 :

```js
'use strict';
var s = document.getElementById('thing').style;
s.opacity = 1;
(function fadeOut() { // name the function
  if((s.opacity-=.1) < 0)
    s.display = 'none';
  else
    setTimeout(fadeOut, 40); // use the name of the function
})();
```

### 문법적 차이

매우 미묘한 차이점들이 있다. 테스트 단위가 이런 종류의 미묘한 차이를 잡지 못할 수 있다. 이러한 차이점이 너의 코드의 의미에 영향을 주지 않도록, 코드 기반을 신중하게 검토해야 할 것이다. 다행히도,이 세심한 검토는 함수 세분성을 점차적으로 줄일 수 있다.

#### 함수내부에서 불리는 `this`

`f()` 라는 함수가 있을 때, `this` 값은 당연히 전역객체이다. stict mode에서는 `undefined` 이다. 값은 원시값이고, 함수가 [`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 나 [`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 화 함께 불리게 된다면 값은 이것은 하나의 객체이다.(또는 `undefined` , `null` 인 전역객체). stict mode에서, 값은 변환이나 대체없이 직접 전달된다.

#### `arguments` 명명 된 함수 인수를 별명으로 지정하지 않습니다.

비-엄격모드에서, `arguments`객체의 값을 수정하면 해당 명명 된 인수가 수정된다. 이로 인해 자바 스크립트 엔진에 대한 최적화가 복잡해지고 코드를 읽기 / 이해하기가 더 어려워졌다. 엄격모드에서, arguments 객체는 명명 된 인수와 동일한 값으로 만들어지고 초기화되지만 arguments 객체 또는 명명 된 인수에 대한 변경 사항은 서로 반영되지 않는다.

#### `eval`바꾸기

엄격모드에서, `eval` 은 그것이 불린 범위안에서 새로운 변수를 만들지 않는다. 또한 물론 엄격모드에서, 문자열은 엄격모드 규칙으로 평가된다. 아무 문제가 없는지 확인하기 위해서는 철저한 테스트를 수행해야 한다. 정말로 필요하지 않다면 eval을 사용하지 않는 것이 실용적인 해결책이 될 수 있다.

## Strictness-neutral code

A potential "downside" of moving strict code to strict mode is that the semantics may be different in legacy browsers which do not implement strict mode. In some rare occasions (like bad concatenation or minification), your code also may not run in the mode you wrote and tested it in. Here are the rules to make your code strictness-neutral:

1. 코드를 엄격하게 작성하고 (위의 "New runtime errors" 섹션의) 엄격한 오류가 발생하지 않았는지 확인하십시오.
2. semantic 차이점으로 부터 멀리하라

    1. `eval`: 당신이 하는 일을 안다면, 그것을 사용해라
    2. `arguments`: 함수의 첫 번째 줄로 이름을 통해 항상 함수 인수에 액세스하거나 인수 객체의 복사본을 수행합니다 :
        `var args = Array.prototype.slice.call(arguments)`
    3. `this`: `this` 당신이 만든 대상을 가리킬 때 사용해라

## See also

- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
