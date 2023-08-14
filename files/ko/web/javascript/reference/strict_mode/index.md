---
title: Strict mode
slug: Web/JavaScript/Reference/Strict_mode
---

{{JsSidebar("More")}}

> **Callout:** 가끔 엄격하지 않은 기본값을 " **[느슨한 모드](/ko/docs/Glossary/Sloppy_mode)**(sloppy mode)"라고 부르기도 합니다. 공식적인 용어는 아니지만 혹시 모르니 알아두세요.

[ECMAScript 5](http://www.ecma-international.org/publications/standards/Ecma-262.htm) 에서 소개된 JavaScript 의 엄격모드는 JavaScript 의 제한된 버전을 선택하여 암묵적인 "**[느슨한 모드](/ko/docs/Glossary/Sloppy_mode)**(sloppy mode)" 를 해제하기 위한 방법입니다. 엄격 모드는 단지 부분적인 것이 아니며, 이것은 _고의적으로_ 일반 코드와 다른 시멘틱을 가지고 있습니다. 엄격모드를 지원하지 않는 브라우저에서는 엄격 모드의 코드가 다른 방식으로 동작할 것입니다, 그 때문에 엄격 모드가 적절하게 적용된 피쳐 테스트 없이 엄격 모드에 의존하면 안됩니다. 엄격 모드의 코드와 비-엄격 모드의 코드는 공존할 수 있으며, 때문에 스크립트의 엄격 모드를 취사 선택하는 것이 점진적으로 가능하게 되었습니다.

엄격 모드는 평범한 JavaScript 시멘틱스에 몇가지 변경이 일어나게 합니다.

1. 기존에는 조용히 무시되던 에러들을 throwing합니다.
2. JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
3. 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.

코드를 JavaScript의 변형이 제한된 환경에서 동작하도록 하고 싶다면, 엄격 모드로의 변환([transitioning to strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode))을 참고하세요.

## 엄격모드 적용하기

엄격모드는 _전체 스크립트_ 또는 *부분 함수*에 적용가능합니다. 단, `{}` 괄호로 묶여진 블럭문에는 적용되지 않습니다. 컨텍스트와 같은곳에 적용을 시도하면 동작하지 않습니다. `eval` 코드, `Function` 코드, 이벤트 핸들러 속성, {{domxref("WindowTimers.setTimeout()")}} 과 연관된 함수들에 전달된 문자열이 전체 스크립트이며 여기에서 엄격모드가 예상대로 동작합니다.

### 스크립트 엄격 모드

엄격모드를 전체 스크립트에 적용하기 위해, 정확한 구문 `"use strict";`(또는 `'use strict';`) 을 다른 구문 작성 전에 삽입합니다.

```js
// 전체 스크립트 엄격 모드 구문
"use strict";
var v = "Hi!  I'm a strict mode script!";
```

이 구문은 이미 [유명한 웹사이트](https://bugzilla.mozilla.org/show_bug.cgi?id=627531)에서 [문제를 일으킨 전적](https://bugzilla.mozilla.org/show_bug.cgi?id=579119)이 있습니다. 상충되지 않는 스크립트들 끼리 맹목적인 연결이 불가능하기 때문입니다. 엄격 모드의 스크립트와 비-엄격 모드의 스크립트의 연결은 심사숙고 하시기를 바랍니다. 이렇게 되면 전체 연결은 엄격으로 보입니다! 엄격 모드에 다른 엄격모드 들을 결합하는 것은 괜찮습니다. 그리고, 비-엄격 스크립트 사이의 결합도 괜찮습니다. 분명한건, 스크립트를 결합하는 것이 절대 이상적인 것이 아니라는 것이지만, 그래야 한다면 함수를 기준으로 엄격모드 사용을 고려하시기 바랍니다.

또한 함수 내부의 전체 스크립트 내용에 접근할 수 있으며, 엄격모드를 사용하는 외부 함수를 가질 수 있습니다. 이는 결합 문제를 없애주기도 하지만, 이것이 스코프 바깥에 위치한 어떤 전역 변수든 확실하게 밖으로 추출할 수 있음을 의미합니다 .

### 함수에 strict mode 적용

마찬가지로, 함수에 strict mode를 적용하기 위해, 함수 본문 처음에 다음의 구문을 넣습니다. `"use strict";` (또는 `'use strict';`).

```js
function strict() {
  // 함수-레벨 strict mode 문법
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() {
  return "I'm not strict.";
}
```

### 모듈에 strict mode 적용

ECMAScript 2015 는 [JavaScript 모듈](/ko/docs/Web/JavaScript/Reference/Statements/export)을 소개했습니다. 따라서, 이는 엄격 모드를 적용할 수 있는 3번 째 방법입니다. JavaScript 모듈의 전체 컨텐츠는 엄격 모드 시작을 위한 구문 없이도 자동으로 엄격모드입니다.

```js
function strict() {
  // 모듈이기때문에 기본적으로 엄격합니다
}
export default strict;
```

## 엄격한 모드 변경

엄격한 모드는 구문과 런타임 동작을 모두 변경합니다.
일반적으로 이러한 유형의 변화가 발생합니다: 변환 실수를 오류로 해석하거나(문법 오류 또는 런타임에 오류 발생), 특정 이름의 특정 용도에 대한 특정 변수를 계산하는 방법을 단순화하며, `eval` 과 `arguments` 를 단순화하고,"안전한 "자바 스크립트를 작성하도록 돕고, 미래 ECMAScript의 진화에 대비합니다.

### 실수를 에러로 바꾸는 것

엄격한 모드는 일부 이전에 허용되었던 실수를 오류로 바꿔 놓습니다. 자바 스크립트는 초보 개발자에게 쉬운 것이 되도록 설계되었으며, 때로는 오류를 일으킬만한 동작을 에러없이 시행합니다. 때때로 이것은 즉각적인 문제를 해결하지만, 때때로 이것은 더 심각한 문제를 만들어 냅니다. 엄격한 모드는 이러한 실수를 오류로 처리해서 그것을 발견하고 즉시 고칠 수 있도록 합니다.

첫째로, 엄격모드는 실수로 글로벌 변수를 생성하는 것을 불가능하게 만듭니다. 일반적인 JavaScript에서 변수를 잘못 입력하면 전역 객체에 대한 새 속성이 만들어지고 그대로 "동작" (미래의 오류가 발생할 수 있음: modern 자바 스크립트처럼) 합니다. 전역 변수를 생성하는 할당은 엄격 모드에선 오류를 발생시킵니다.

```js
"use strict";
// 전역 변수 mistypedVariable 이 존재한다고 가정
mistypedVaraible = 17; // 변수의 오타때문에 이 라인에서 ReferenceError 를 발생시킴
```

둘째로, 엄격모드는 예외를 발생시키는 실패를 조용히 넘어가는 대신 작업을 만듭니다. 예를 들어, `NaN` 은 쓸 수 없는 전역 변수입니다. `NaN` 에 할당하는 일반적인 코드는 아무 것도 하지 않습니다. 개발자도 아무런 실패 피드백을 받지 않습니다. 엄격 모드에서 `NaN` 에 할당하는 것은 예외를 발생시킵니다. 일반 코드에서 조용히 넘어가는 모든 실패에 대해 (쓸 수 없는 전역 또는 프로퍼티에 할당, getter-only 프로퍼티에 할당, [확장 불가](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) 객체에 새 프로퍼티 할당) 엄격 모드에서는 예외를 발생시킵니다.

```js
"use strict";

// 쓸 수 없는 프로퍼티에 할당
var undefined = 5; // TypeError 발생
var Infinity = 5; // TypeError 발생

// 쓸 수 없는 프로퍼티에 할당
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // TypeError 발생

// getter-only 프로퍼티에 할당
var obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // TypeError 발생

// 확장 불가 객체에 새 프로퍼티 할당
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // TypeError 발생
```

셋째로, 엄격 모드는 삭제할 수 없는 프로퍼티를 삭제하려할 때 예외를 발생시킵니다(시도가 어떤 효과도 없을 때).

```js
"use strict";
delete Object.prototype; // TypeError 발생
```

넷째로, Gecko 34 이전의 엄격모드는 객체 리터럴의 모든 프로퍼티의 이름이 유니크해도록 요구합니다. 일반 코드는 프로퍼티의 값이 나중에 정해진 프로퍼티 이름으로 중복할 것입니다. 하지만 마지막 인스턴스 만 변경했기 때문에 코드를 수정하여 마지막 인스턴스를 변경하는 것 이외의 속성 값을 변경하면 복제는 버그의 벡터가됩니다. 엄격모드에서는 프로퍼티 이름을 중복하는 것은 구문 에러입니다.

> **Note:** ECMAScript 2015부터는 에러가 아닙니다. ([Firefox bug 1041128](https://bugzil.la/1041128)).

```js
"use strict";
var o = { p: 1, p: 2 }; // !!! 구문 에러
```

다섯째로, 엄격모드는 유니크한 함수 파라미터 이름을 요구합니다. 일반 코드에서는 마지막으로 중복된 인수가 이전에 지정된 인수를 숨깁니다. 이러한 이전의 인수들은 `arguments[i]` 를 통해 여전히 남아 있을 수 있으므로, 완전히 접근 불가한 것이 아닙니다. 여전히, 이런 숨김 처리는 이치에 맞지 않으며 원했던 것이 아닐 수 있습니다(예를 들면 오타를 숨길 수도 있습니다). 따라서 엄격 모드에서는 중복 인수명은 구문 에러입니다.

```js
function sum(a, a, c) {
  // !!! 구문 에러
  "use strict";
  return a + b + c; // 코드가 실행되면 잘못된 것임
}
```

여섯째로, ECMAScript 5 에서의 엄격 모드는 8진 구문을 금지합니다. 8진 구문은 ES5의 문법이 아니지만, 모든 브라우저에서 앞에 0을 붙여 지원됩니다(`0644 === 420` 와 `"\045" === "%"`). ECMAScript 2015 에서는 접두사 "`0o`"를 붙여 8진수를 지원합니다.

```js
var a = 0o10; // ES6: 8진수
```

초보 개발자들은 가끔 앞에 붙은 0 이 무의미하다고 생각하여, 이를 정렬용으로 사용합니다 — 하지만 이는 숫자의 의미를 바꿔버립니다! 이 8진수 문법은 거의 무용하며 잘못 사용될 수 있으므로 엄격모드에서 이 구문은 에러입니다.

```js
"use strict";
var sum =
  015 + // !!! 구문 에러
  197 +
  142;
```

일곱째로, ECMAScript 6 의 엄격모드는 {{Glossary("primitive")}} 값에 프로퍼티를 설정하는 것을 금지합니다. 엄격모드가 아닐 때에는 프로퍼티 설정이 간단하게 무시되지만(no-op), 엄격모드에서는 {{jsxref("TypeError")}} 를 발생시킵니다.

```js
(function () {
  "use strict";

  false.true = ""; // TypeError
  (14).sailing = "home"; // TypeError
  "with".you = "far away"; // TypeError
})();
```

### 변수 사용 단순화

엄격모드는 코드상의 변수 이름을 특정 변수 정의로 매핑하는 방법을 단순화합니다. 많은 컴파일러 최적화는 변수 X 가 어떤 위치에 저장되어 있는지를 말해주는 능력에 의존하고 있습니다. 이는 자바스크립트 코드를 완전히 최적화하는데 중요합니다. 자바스크립트는 때때로 이름을 코드상의 변수 정의로 기본 매핑하는 것을 런타임때까지 실행이 불가하게합니다. 엄격모드는 이것이 발생하는 대부분의 경우를 제거하여 컴파일러가 엄격모드 코드를 더 잘 최적화 할 수 있게합니다.

첫째로, 엄격모드는 `with` 를 사용하지 못하게합니다. `with` 사용의 문제는 런타임중에 블록안의 모든 이름이 전달된 객체의 프로퍼티나 인근 (또는 심지어 전역) 스코프 내의 변수로 매핑될 수도 있다는 것입니다. 이는 사전에 아는 것이 불가합니다. 엄격 모드는 `with` 를 구문 에러로 만들어, `with` 의 이름이 런타임에 알 수 없는 위치를 참조하지 않도록합니다.

```js
"use strict";
var x = 17;
with (obj) {
  // !!! 구문 에러
  // 엄격모드가 아니라면, 이는 var x 가 되어야 하나요,
  // obj.x 가 되어야 하나요?
  // 일반적으로는 코드를 실행하지 않고 이를 말하는 것은 불가하므로,
  // 이름을 최적화 할 수 없습니다.
  x;
}
```

이름이 짧은 변수에 객체를 할당한 후, 변수에 해당하는 프로퍼티에 접근하는 간단한 대안은 `with` 를 대체할 준비가 되었습니다.

둘째로, [엄격모드 코드의 `eval` 은 새로운 변수를 주위 스코프에 추가하지 않습니다](http://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). 일반적인 코드에서 `eval("var x;")` 는 변수 `x` 를 주위 함수나 전역 스코프에 추가합니다. 이는, 일반적으로 `eval` 호출을 포함하는 함수에서 인수나 지역 변수를 참조하지 않는 모든 이름은 런타임에 특정 정의에 반드시 매핑되어야 함을 의미합니다(`eval` 이 외부 변수를 숨기는 새로운 변수를 추가했기 때문입니다). 엄격모드에서 `eval` 은 evaluated 된 코드에서만 변수를 생성하므로, 외부 변수나 일부 로컬 변수에 참조하는지에 영향을 주지 않습니다.

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x");
console.assert(x === 17);
console.assert(evalX === 42);
```

이와 관련해서, `eval` 함수가 엄격모드 코드 내에서 `eval(...)` 형태의 표현으로 적용되었다면, 코드는 엄격모드 코드로 evaluated 됩니다. 코드는 명시적으로 엄격모드를 적용할 수 있지만, 필수적인 것은 아닙니다.

```js
function strict1(str) {
  "use strict";
  return eval(str); // str 은 엄격모드 코드로 다뤄짐
}
function strict2(f, str) {
  "use strict";
  return f(str); // eval(...) 이 아님:
  // str 은 엄격모드를 적용한 경우에만 엄격함
}
function nonstrict(str) {
  return eval(str); // str 은 엄격모드를 적용한 경우에만 엄격함
}

strict1("'엄격모드 코드!'");
strict1("'use strict'; '엄격모드 코드!'");
strict2(eval, "'느슨한 코드.'");
strict2(eval, "'use strict'; '엄격모드 코드!'");
nonstrict("'느슨한 코드.'");
nonstrict("'use strict'; '엄격모드 코드!'");
```

따라서 엄격모드 `eval` 코드 내의 이름은 엄격모드 코드 내의 이름이 `eval` 의 결과로 evaluated 되지 않은 것과 동일하게 동작합니다.

셋째로, 엄격모드는 일반 이름을 제거하는 것을 금지합니다. 엄격 모드에서 `delete name` 은 구문 에러입니다.

```js
"use strict";

var x;
delete x; // !!! 구문 에러

eval("var y; delete y;"); // !!! syntax error
```

### `eval` 과 `arguments` 를 더 간단하게 하기

엄격모드는 `arguments` 와 `eval` 을 덜 기괴하고 마법적으로 만듭니다. 둘은 일반 코드에서 상당히 많은 마법적인 동작들을 갖고 있습니다: 바인딩을 추가하거나 삭제하고 바인딩 값을 변경하기위한 `eval`, 명명된 인수를 앨리어스하는 인덱싱된 프로퍼티 `arguments`. 엄격모드는 ECMAScript 의 미래 버전까지는 모든 수정이 이루지지는 않겠지만 `eval` 과 `arguments` 를 키워드로 다루기 위한 훌륭한 큰 걸음을 내딛었습니다.

첫째로, 변수명 eval 과 arguments 는 언어 문법에 바운드되거나 할당될 수 없습니다. 다음 시도들은 모두 구문 에러입니다.

```js
"use strict";
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) {} };
var eval;
try {
} catch (arguments) {}
function x(eval) {}
function arguments() {}
var y = function eval() {};
var f = new Function("arguments", "'use strict'; return 17;");
```

둘째로, 엄격모드 코드는 `arguments` 객체가 생성한 프로퍼티를 앨리어스하지 않습니다. 함수의 첫 번째 인수가 `arg` 인 일반 코드에서는 `arg` 를 설정하는 것은 `arguments[0]` 를 설정하기도 하며, 그 반대도 그렇습니다(인수가 제공되지 않거나, `arguments[0]` 이 삭제된 경우는 제외). 엄격모드 함수의 `arguments` 객체는 함수가 호출될 때 원본 인수들을 저장합니다. `arguments[i]` 는 명명된 인수에 해당하는 값을 추적하지 않으며, 명명된 인수도 `arguments[i]` 에 해당하는 값을 추적하지 않습니다.

```js
function f(a) {
  "use strict";
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```

셋째로, `arguments.callee` 는 더 이상 지원되지 않습니다. 일반 코드의 `arguments.callee` 는 바깥 함수를 참조합니다. 이런 유즈 케이스는 중요하지 않습니다. 간단히 바깥 함수의 이름을 사용하면됩니다. 더욱이, `arguments.callee` 는 인라인 함수와 같은 최적화를 상당히 방해하므로, `arguments.callee` 가 접근하는 함수는 인라인이 아닌 함수를 참조하도록 제공해야 했습니다. 엄격모드 함수의 `arguments.callee` 는 삭제할 수 없는 프로퍼티이며, 설정이나 반환할때 에러를 발생합니다.

```js
"use strict";
var f = function () {
  return arguments.callee;
};
f(); // TypeError
```

### JavaScript "보안"

엄격모드는 "보안된" 자바스크립트를 작성하기 쉽게 해줍니다. 일부 웹사이트들은 사용자가 다른 사용자들을 대신하여 웹사이트에서 실행시키는자바스크립트를 작성하는 방법을 제공합니다. 브라우저에서 자바스크립트는 사용자의 개인정보에 접근할수 있기 때문에, 자바스크립트는 금지된 기능에 대한 검열을 하기위해 반드시 실행전에 부분적으로 변경되어야 합니다. 자바스크립트의 유연성으로 인해 많은 런타임 체크없이 이것을 수행하는것은 사실상 불가능합니다. 특정 언어의 기능들이 너무 광범위하여 런타임 검사 수행은 상당한 성능비용이 생깁니다. 엄격모드의 작은 수정과 사용자가 제출한 자바스크립트가 엄격모드가 되면 특정 방식으로 호출되므로 런타임 검사의 필요성이 크게 줄어 듭니다.

첫째, 엄격모드에서는 `this` 로 함수에 전달된 값은 강제로 객체가 되지 않습니다 (a.k.a. "boxed"). 보통 함수의 경우, `this` 는 언제나 객체입니다: 객체값 `this` 와 함께 호출된 경우 제공된 객체이거나 ; 부울값, 문자 또는 숫자 `this` 로 호출된 경우 그 값은 Boxed 입니다; 또는 `undefined` 또는 `null` `this` 로 호출되면 전역객체입니다. (특정된 `this` 명세를 위해서는 [`call`](/en-US/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/en-US/Web/JavaScript/Reference/Global_Objects/Function/apply), 또는 [`bind`](/en-US/Web/JavaScript/Reference/Global_Objects/Function/bind) 를 사용하십시요) 자동 박싱은 성능 비용뿐 아니라 전역 객체가 브라우저에 노출되는것은 보안상 위험합니다. 전역객체들은 자바스크립트 환경의 "보안" 기능에 접근하는것을 제공하기때문에 제한되어야 합니다. 따라서 엄격모드의 함수는, 정의된 `this` 는 박스드 객체가 되지 않으며, 정의되지 않은경우 `this` 는 `undefined` 가 됩니다:

```js
"use strict";
function fun() {
  return this;
}
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
```

즉, 브라우저에서 엄격모드의 함수내 에서는 더 이상 `window` 객체를 `this` 를 통해 참조할 수 없습니다.

둘째로, 엄격모드에서는 ECMAScript의 일반적으로 구현된 확장을 통해 자바스크립트 스택을 "걷는"것이 불가능합니다. 이러한 일반적인 확장 코드는, 함수 `fun` 이 호출되는 중간에, `fun.caller` 는 가장 최근에 `fun` 을 호출한 함수이고 `fun.arguments` 는 `fun`을 호출하기 위한 인수입니다. "권한있는"함수와 (잠재적으로 보안되지 않은) 인수에 접근을 허용하기때문에 두가지 확장 모두 자바스크립트의 "보안" 문제가 됩니다. `fun` 이 엄격모드인경우, both `fun.caller` 와 `fun.arguments` 모두 설정 또는 검색될때 삭제 불가능한 속성이 됩니다.

```js
function restricted() {
  "use strict";
  restricted.caller; // throws a TypeError
  restricted.arguments; // throws a TypeError
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();
```

셋째, 엄격모드의 `인수` 는 더이상 해당 함수의 호출 변수에 대한 접근을 제공하지 않습니다. 일부 이전 ECMAScript에서 `arguments.caller` 해당 함수에 별명이 지정된 객체였습니다. 이것은 함수의 추상화를 통해 권한이 있는 값을 숨길수 있는 기능을 차단하여 [보안의 위협](http://stuff.mit.edu/iap/2008/facebook/)이 됩니다; 이것은 또한 대부분의 최적화를 배제시킵니다. 이러한 이유로 최신 브라우저들은 이를 구현하지 않습니다. 하지만 이것들의 이전 기능들 때문에, 엄격모드함수에서 `arguments.caller` 설정이나 검색시 삭제 불가능한 요소가 됩니다:

```js
"use strict";
function fun(a, b) {
  "use strict";
  var v = 12;
  return arguments.caller; //TypeError 가 발생.
}
fun(1, 2); // doesn't expose v (or a or b)
```

### 미래의 ECMAScript 버전을 위한 준비

새롭게 선보일 ECMAScript 버전은 새로운 구문을 소개할 것이고, ECMAScript5에서의 엄격 모드는 변환을 쉽게 하기 위해 몇 가지의 제한을 적용할 것으로 예상되고 있습니다. 만약 이 변화들이 엄격 모드에서의 제한을 기반으로 한다면, 더 바꾸기 쉬워질 것입니다.

첫번째로, 엄격 모드에서의 식별자 후보들은 예약어가 됩니다. 이 예약어들은 `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, `yield`입니다. 그럼, 엄격 모드에서는 이 예약어와 똑같은 이름을 사용하거나, 변수명 또는 아규먼트명으로도 사용할 수 없습니다.

```js
function package(protected) {
  // !!!
  "use strict";
  var implements; // !!!

  // !!!
  interface: while (true) {
    break interface; // !!!
  }

  function private() {} // !!!
}
function fun(static) {
  "use strict";
} // !!!
```

Mozilla의 특별 지시 두 가지 : 먼저, 코드가 JavaScript 1.7 또는 그보다 높고 (예를 들어, 크롬 코드 또는 `<script type="">` 를 바로 사용할 때) 엄격 모드의 코드라면, `let` 와 `yield`는 처음 소개되었을 때의 그 기능을 가진다. 그러나 웹에서의 엄격 모드 코드는, `<script src="">`나 `<script>...</script>`로 로딩되지, `let`/`yield`를 식별자로 사용할 수가 없을 것이다. 그리고 나서는, ES5 가 `class`, `enum`, `export`, `extends`, `import`, and `super` 와 같은 예약어들을 무조건 리저브함에도 불구하고, 먼저 Firefox 5 Mozilla 는 그것들을 엄격 모드에서만 리저브한다.

다음은, 엄격 모드는 스크립트나 함수의 탑 레벨이 아닌 곳에서의 함수 내용 정의를 제한합니다. ([strict mode prohibits function statements not at the top level of a script or function](http://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/)). 브라우저에서 일반적인 코드는 함수 내용 정의가 "어디에서든" 허용됩니다. _이것은 ES5의 부분이 아닙니다!(심지어 ES3도 아니다.)_ 이건 다른 브라우저에서 공존할 수 없는 시멘틱의 확장입니다. 앞으로의 ECMAScript 에디션은 바라건대, 스크립트나 함수의 탑 레벨이 아닌 곳에서의 함수 내용 정의를 위해, 새로운 시멘틱을 명시할 것입니다. 엄격 모드에서 이러한 함수 정의를 금지하는 것([Prohibiting such function statements in strict mode](http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls))은 앞으로 출시될 ECMAScript의 사양을 위한 "준비"입니다. :

```js
"use strict";
if (true) {
  function f() {} // !!! syntax error
  f();
}

for (var i = 0; i < 5; i++) {
  function f2() {} // !!! syntax error
  f2();
}

function baz() {
  // kosher
  function eit() {} // also kosher
}
```

이 규제는 엄밀히 말하면 엄격 모드가 아닌데, 저런 함수 표현식들은 기본 ECMAScript5의 확장이기 때문입니다. 그러나 이것이 ECMAScript 협회가 권장하는 방식이며, 브라우저들이 이를 지원할 것입니다.

## 브라우저에서의 엄격 모드

현재 주류의 브라우저들은 엄격 모드를 지원하고 있습니다. 하지만, 아직도 현실에서 사용되는 수 많은 브라우저의 버전들은 엄격 모드를 부분적으로만 지원하거나([Browser versions used in the wild that only have partial support for strict mode](http://caniuse.com/use-strict)), 아예 지원을 하지 않고 있기 때문에, 맹목적으로 여기에 의지할 수는 없습니다. (예를 들면, Internet Explorer 10 버전 이하!) _엄격 모드는 시멘틱을 바꿉니다._ 이 변화들에 의지하는 것은 실수와 엄격 모드를 지원하지 않는 브라우저의 에러를 야기할 것입니다. 엄격 모드를 사용하는 데에 주의하는 것을 익히세요, 그리고 피쳐 테스트로 엄격 모드를 사용하기에 적절한 부분인지 확인하고 보완하세요. 마지막으로, _엄격 모드를 지원하는 브라우저와 그렇지 않은 브라우저에서 작성한 코드의 테스트를 확실히 하도록 하세요._

## 명세서

{{Specifications}}

## 함께 보기

- [Where's Walden? » New ES5 strict mode support: now with poison pills!](http://whereswalden.com/2010/09/08/new-es5-strict-mode-support-now-with-poison-pills/)
- [Where's Walden? » New ES5 strict mode requirement: function statements not at top level of a program or function are prohibited](http://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/)
- [Where's Walden? » New ES5 strict mode support: new vars created by strict mode eval code are local to that code only](http://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/)
- [JavaScript "use strict" tutorial for beginners.](http://qnimate.com/javascript-strict-mode-in-nutshell/)
- [John Resig - ECMAScript 5 Strict Mode, JSON, and More](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
- [ECMA-262-5 in detail. Chapter 2. Strict Mode.](http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/)
- [Strict mode compatibility table](http://kangax.github.io/compat-table/es5/#Strict_mode)
- [Transitioning to strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
