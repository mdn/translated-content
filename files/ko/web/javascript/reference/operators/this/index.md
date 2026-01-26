---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{jsSidebar("Operators")}}

`this` 키워드는 코드 조각이 실행되는 컨텍스트를 가리킵니다(예: 함수 본문). 가장 일반적으로는 객체 메서드에서 사용되며, 이때 `this`는 그 메서드가 속한 객체를 가리킵니다. 이를 통해 동일한 메서드를 서로 다른 객체에서 재사용할 수 있습니다.

JavaScript에서 `this`의 값은 함수가 정의 시점이 아니라 함수가 어떤 방식으로 호출({{glossary("binding")}}) 되었는지에 따라 달라집니다. 일반 함수가 객체의 메서드로 호출될 때(`obj.method()`), `this`는 해당 객체를 가리킵니다. 객체에 연결되지 않은 독립된 함수(`func()`)로 호출될 때는 일반적으로 [전역 객체](/ko/docs/Glossary/Global_object)(비엄격 모드)를 참조하거나 `undefined`([엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode))를 참조합니다. {{jsxref("Function.prototype.bind()")}} 메서드는 `this` 바인딩이 고정된 함수를 생성할 수 있으며, {{jsxref("Function.prototype.apply()")}}와 {{jsxref("Function.prototype.call()")}}로 특정 호출에 대한 `this` 값을 설정할 수 있습니다.

[화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)는 `this`를 처리하는 방식이 다릅니다. 화살표 함수는 정의될 때의 상위 스코프로부터 `this`를 상속받습니다. 이런 동작 때문에 화살표 함수는 콜백 함수나 컨텍스트를 유지해야 하는 상황에서 특히 유용합니다. 그러나 화살표 함수는 자체적인 `this` 바인딩을 갖지 않습니다. 따라서 `bind()`, `apply()`, `call()` 메서드로 `this` 값을 설정할 수 없으며, 객체 메서드 안에서 현재 객체를 가리키지도 않습니다.

{{InteractiveExample("JavaScript Demo: Expressions - this")}}

```js interactive-example
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// Expected output: 42
```

## 구문

```js
this;
```

### 값

비엄격 모드에서 `this`는 항상 객체를 참조합니다. 엄격모드에서는 어떤 값이든 될 수 있습니다. 값이 어떻게 결정되는지에 대한 자세한 내용은 아래 설명을 참고하세요.

## 설명

`this` 값은 함수, 클래스, 전역 컨텍스트 중 어디에서 사용되는지에 따라 달라집니다.

### 함수 컨텍스트

함수 안에서 `this`의 값은 함수가 어떻게 호출되는지에 따라 달라집니다. `this`를 함수의 숨겨진 매개변수라고 생각해보세요. 함수 정의에 선언된 매개변수처럼, `this`도 함수 본문이 평가될 때 언어가 자동적으로 생성하는 바인딩입니다.

일반 함수(화살표 함수, 바인딩된 함수 등은 제외)의 경우, `this`의 값은 함수가 호출된 객체입니다. 다시 말해, 함수 호출이 `obj.f()` 형태라면, `this`는 `obj`를 가리킵니다. 예를 들어,

```js
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
```

함수가 동일하다는 점에 주목하세요. 그러나 어떻게 호출되느냐에 따라 `this`의 값은 달라집니다. 이는 함수 매개변수가 동작하는 방식과 유사합니다.

`this`의 값은 해당 함수를 자신의 속성으로 가진 객체가 아니라, 함수를 호출하는 데 사용된 객체입니다. 이 사실은 [프로토타입 체인](/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) 상위에 있는 객체의 메서드를 호출해 보면 확인할 수 있습니다.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

`this`의 값은 함수가 처음부터 객체에 정의되어 있었다고 하더라도, 항상 함수가 호출되는 방식에 따라 변화됩니다.

```js
const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }
```

메서드가 호출될 때 사용된 값이 원시 값이라면, `this`도 원시 값이 됩니다. 단, 함수가 엄격 모드일 경우에만 해당됩니다.

```js
function getThisStrict() {
  "use strict"; // 엄격모드 입력
  return this;
}

// 이 코드는 시연을 위한 것으로, 내장 프로토타입을 변경해서는 안됩니다.
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

함수가 어떤 객체를 통해 접근되지 않고 호출되면, `this`는 `undefined`가 됩니다. 단, 함수가 엄격 모드일 경우에만 해당됩니다.

```js
console.log(typeof getThisStrict()); // "undefined"
```

비엄격 모드에서는 [`this` 치환(this substitution)](/ko/docs/Web/JavaScript/Reference/Strict_mode#javascript_보안)이라는 특별한 과정이 있어 `this`의 값이 항상 객체가 되도록 보장됩니다.

- 함수의 `this`가 `undefined`나 `null`로 설정된 상태에서 호출되면, `this`는 {{jsxref("globalThis")}}로 치환됩니다.
- 함수의 `this`가 원시 값으로 설정된 상태에서 호출되면, `this`는 해당 원시 값의 래퍼 객체로 치환됩니다.

```js
function getThis() {
  return this;
}

// 이 코드는 시연을 위한 것으로, 내장 프로토타입을 변경해서는 안됩니다.
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

일반적인 함수 호출에서는 `this`가 함수의 접두사(점(.) 앞의 부분)를 통해 매개변수처럼 암묵적으로 전달됩니다. 또한 {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}}, {{jsxref("Reflect.apply()")}} 메서드를 사용하여 `this` 값을 명시적으로 설정할 수도 있습니다. {{jsxref("Function.prototype.bind()")}}를 사용하면, 함수가 어떻게 호출되든 변하지 않는 특정 `this` 값을 가진 새 함수를 생성할 수 있습니다. 이때, 함수가 비엄격 모드라면 앞서 설명한 `this` 치환 규칙이 여전히 적용됩니다.

#### 콜백

함수가 콜백으로 전달될 때, `this`의 값은 콜백이 어떻게 호출되는지에 따라 달라집니다. 이 호출 방식은 API를 구현한 사람이 결정합니다. 콜백은 일반적으로 어떤 객체에도 붙이지 않고 직접 호출되므로, `this` 값이 `undefined`로 전달되는 경우가 많습니다. 즉, 함수가 비엄격 모드라면, `this`는 전역 객체({{jsxref("globalThis")}})를 가리키게 됩니다. 이러한 경우는 [배열의 순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드), [`Promise()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) 생성자 등이 해당합니다.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

일부 API에서는 콜백을 호출할 때 사용할 `this` 값을 설정할 수 있습니다. 예를 들어, 모든 배열 순회 메서드와 {{jsxref("Set.prototype.forEach()")}} 같은 관련 메서드는 선택적인 `thisArg` 매개변수를 받아 `this` 값을 지정할 수 있습니다.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

때때로 콜백은 `undefined`가 아닌 다른 `this` 값과 함께 호출되기도 합니다. 예를 들어, {{jsxref("JSON.parse()")}}의 `reviver` 매개변수와 {{jsxref("JSON.stringify()")}}의 `replacer` 매개변수는 모두 파싱 혹은 직렬화 되는 해당 속성이 속한 객체를 `this`로 설정한 상태에서 호출됩니다.

#### 화살표 함수

화살표 함수에서는 `this`가 외부 렉시컬 컨텍스트의 `this` 값을 유지합니다. 다시 말해, 화살표 함수의 본문을 평가할 때, 자바스크립트는 새로운 `this` 바인딩을 생성하지 않습니다.

예를 들어, 전역 코드에서는 [전역 컨텍스트](#전역_컨텍스트) 바인딩 때문에, 엄격 모드 여부와 상관없이 `this`는 항상 `globalThis`가 됩니다.

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

화살표 함수는 주변 스코프의 `this` 값에 대한 [클로저](/ko/docs/Web/JavaScript/Guide/Closures)를 생성합니다. 즉, 화살표 함수는 마치 "자동 바인딩"된 것처럼 동작합니다. 함수가 어떻게 호출되든, `this`는 함수가 생성될 때의 값에 고정됩니다. (위 예에서는 전역 객체) 같은 원리가 다른 함수 안에서 생성된 화살표 함수에도 적용됩니다. 이 경우에도 `this`는 외부 렉시컬 컨텍스트를 그대로 유지합니다. [아래 예제를 확인해보세요](/ko/docs/Web/JavaScript/Reference/Operators/this#화살표_함수에서의_this).

또한, 화살표 함수를 `call()`, `bind()`, `apply()`로 호출하더라도, `thisArg` 매개변수는 무시됩니다. 이때 다른 인수는 여전히 전달할 수 있습니다.

```js
const obj = { name: "obj" };

// call을 이용한 this 값 설정 시도
console.log(foo.call(obj) === globalObject); // true

// bind을 이용한 this 값 설정 시도
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### 생성자

함수가 생성자로 사용될 때({{jsxref("Operators/new", "new")}} 키워드와 함께), `this`는 생성 중인 새로운 객체에 바인딩됩니다. 이때, 생성자 함수가 어떤 객체의 속성으로 접근되었는지는 상관없습니다. `this`의 값은 `new` 표현식의 값이 되지만, 생성자 함수가 다른 비원시 값을 반환하면 그 값이 대신 반환됩니다.

```js
function C() {
  this.a = 37;
}

let o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // 38
```

두 번째 예제(`C2`)에서, 생성 중에 객체가 반환되었기 때문에, `this`가 바인딩되었던 새 객체는 버려집니다. (즉, `this.a = 37;` 구문은 사실상 무의미합니다. 엄밀히 말하면 실행은 되지만, 외부에 영향 없이 제거될 수 있습니다.)

#### super

함수가 `super.method()` 형태로 호출될 때, `method` 함수 내부의 `this`는 `super.method()` 호출 주변의 `this` 값과 동일합니다. 대부분 이 `this` 값은 `super`가 참조하는 객체와 같지 않습니다. 이는 `super.method`가 위에서 설명한 일반 객체 멤버 접근과 달리, 특수한 문법이며 다른 바인딩 규칙을 가지기 때문입니다. 자세한 예제는 [`super`에서 메서드 호출](/ko/docs/Web/JavaScript/Reference/Operators/super#super에서_메서드_호출)을 참고하세요.

### 클래스 컨텍스트

[클래스](/ko/docs/Web/JavaScript/Reference/Classes)는 정적 컨텍스트와 인스턴스 컨텍스트 두 가지로 나눌 수 있습니다. [생성자](/ko/docs/Web/JavaScript/Reference/Classes/constructor), 메서드, 인스턴스 필드 초기화([public](/ko/docs/Web/JavaScript/Reference/Classes/Public_class_fields) 또는 [private](/ko/docs/Web/JavaScript/Reference/Classes/Private_elements))는 인스턴스 컨텍스트에 속합니다. [정적 메서드](/ko/docs/Web/JavaScript/Reference/Classes/static), 정적 필드 초기화, [정적 초기화 블록](/ko/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)은 정적 컨텍스트에 속합니다. 각 컨텍스트에서 `this`의 값은 서로 다릅니다.

클래스 생성자는 항상 `new`와 함께 호출되므로, 동작은 일반 [함수 생성자](/ko/docs/Web/JavaScript/Reference/Operators/this#생성자)와 같습니다. `this` 값은 생성 중인 새로운 인스턴스를 가리킵니다. 클래스 메서드는 객체 리터럴의 메서드처럼 동작합니다. `this` 값은 메서드가 접근된 객체입니다. 메서드가 다른 객체로 전달되지 않는 한, `this`는 일반적으로 클래스의 인스턴스입니다.

정적 메서드는 `this`의 속성이 아니라 클래스 자체의 속성입니다. 따라서 일반적으로 클래스에서 접근하며, `this`는 클래스 자체(또는 서브클래스)를 가리킵니다. 정적 초기화 블록도 `this`가 현재 클래스로 설정된 상태에서 평가됩니다.

필드 초기화도 클래스 컨텍스트에서 평가됩니다. 인스턴스 필드는 `this`가 생성 중인 인스턴스로 설정되어 평가됩니다. 정적 필드는 `this`가 현재 클래스로 설정되어 평가됩니다. 따라서 필드 초기화에 사용된 화살표 함수는, [인스턴스 필드에서는 인스턴스에 바인딩되고 정적 필드에서는 클래스에 바인딩됩니다.](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions#메서드로_사용할_수_없습니다)

```js
class C {
  instanceField = this;
  static staticField = this;
}

const c = new C();
console.log(c.instanceField === c); // true
console.log(C.staticField === C); // true
```

### 파생 클래스 생성자

부모 클래스 생성자와 달리, 파생 클래스(자식 클래스) 생성자에는 초기 `this` 바인딩이 없습니다. [`super()`](/ko/docs/Web/JavaScript/Reference/Operators/super)를 호출하면 생성자 안에서 `this` 바인딩이 생성되며, 사실상 아래 코드를 평가하는 것과 동일한 효과를 가집니다. (`Base`는 부모 클래스입니다.)

```js-nolint
this = new Base();
```

> [!WARNING]
> `super()`를 호출하기 전에 `this`를 참조하는 것은 에러를 발생시킵니다.

파생 클래스의 생성자는 `super()`를 호출하기 전에 반환해서는 안 됩니다. 단, 생성자가 객체를 반환하여 `this` 값이 대체되거나, 클래스에 생성자가 아예 없는 경우는 예외입니다.

```js
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}
class Bad extends Base {
  constructor() {}
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError: 파생 클래스에서는 this에 접근하거나 생성자에서 값을 반환하기 전에 반드시 super 생성자를 호출해야 합니다.
```

### 전역 컨텍스트

전역 실행 컨텍스트(함수나 클래스 외부, [블록](/ko/docs/Web/JavaScript/Reference/Statements/block) 안이나 전역 스코프에서 정의된 [화살표 함수](/ko/docs/Web/JavaScript/Reference/Operators/this#생성자) 안 포함)에서 `this`의 값은 스크립트가 실행되는 실행 컨텍스트에 따라 달라집니다. [콜백](/ko/docs/Web/JavaScript/Reference/Operators/this#콜백)과 마찬가지로, `this` 값은 런타임 환경(호출자)에 의해 결정됩니다.

스크립트 최상위 수준에서는, 엄격 모드 여부와 상관없이 `this`는 항상 {{jsxref("globalThis")}}를 가리킵니다. 이는 일반적으로 전역 객체와 동일합니다. 예를 들어 HTML [`<script>`](/ko/docs/Web/HTML/Reference/Elements/script) 요소 안에서 스크립트를 실행하면 `this === window`가 됩니다.

> [!NOTE]
> `globalThis`는 일반적으로 전역 객체와 동일한 개념입니다. 즉, `globalThis`에 프로퍼티를 추가하면 전역 변수가 됩니다. 브라우저와 Node.js에서는 이 규칙이 적용됩니다. 하지만 호스트 환경에 따라, 전역 객체와 관련 없는 다른 값을 `globalThis`로 제공할 수도 있습니다.

```js
// 웹 브라우저에서는 window 객체가 전역 객체
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

소스가 [모듈](/ko/docs/Web/JavaScript/Guide/Modules)로 로드된 경우(HTML에서는 `<script>` 태그에 `type="module"`을 추가), 최상위 수준에서 `this`는 항상 `undefined`입니다.

소스가 [`eval()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)로 실행될 경우, [직접 eval](/ko/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)에서는 `this`가 포함하고 있는 컨텍스트와 동일합니다. 간접 eval에서는 this가 `globalThis`와 동일하게 됩니다(마치 별도의 전역 스크립트에서 실행된 것처럼).

```js
function test() {
  // 직접 eval
  console.log(eval("this") === this);
  // 간접 eval, 비엄격 모드
  console.log(eval?.("this") === globalThis);
  // 간접 eval, 엄격모드
  console.log(eval?.("'use strict'; this") === globalThis);
}

test.call({ name: "obj" }); // Logs 3 "true"
```

일부 소스 코드는 겉보기에는 전역 스코프처럼 보이지만, 실제로는 실행될 때 함수 안에 감싸져 있습니다. 예를 들어, Node.js의 CommonJS 모듈은 함수로 감싸져 실행되며, 이때 `this` 값은 `module.exports`로 설정됩니다. [이벤트 핸들러 속성](/ko/docs/Web/JavaScript/Reference/Operators/this#인라인_이벤트_핸들러에서_this)도 실행될 때 `this`가 해당 속성이 붙은 요소를 가리키도록 설정됩니다.

객체 리터럴 자체는 `this` 스코프를 생성하지 않습니다. 오직 객체 안에 정의된 함수(메서드)만 가집니다. 따라서 객체 리터럴 내에서 `this`를 사용하면, 주변 스코프에서 상속된 값을 참조하게 됩니다.

```js
const obj = {
  a: this,
};

console.log(obj.a === window); // true
```

## 예제

### 함수 컨텍스트에서의 this

`this` 매개변수의 값은 함수가 정의되는 시점이 아니라 호출되는 방식에 따라 달라집니다.

```js
// 'call'이나 'apply'의 첫 번째 인수로 객체를 전달하면
// 그 객체가 this로 바인딩됩니다.
const obj = { a: "Custom" };

// var로 선언된 변수는 globalThis의 프로퍼티가 됩니다.
var a = "Global";

function whatsThis() {
  return this.a; // this는 함수가 어떻게 호출되느냐에 따라 달라집니다.
}

whatsThis(); // 'Global'; 비엄격 모드에서는 this가 기본적으로 globalThis를 가리킵니다.
obj.whatsThis = whatsThis;
obj.whatsThis(); // 'Custom'; this가 obj에 바인딩되기 때문입니다.
```

`call()`과 `apply()`를 사용하면 `this`의 값을 명시적인 매개변수처럼 전달할 수 있습니다.

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

const o = { a: 1, b: 3 };

// 첫 번째 인자는 암묵적인 this 매개변수로 바인딩됩니다.
// 남은 인자들은 명시된 매개변수로 바인딩됩니다.
add.call(o, 5, 7); // 16

// 첫 번째 인자는 암묵적인 this 매개변수로 바인딩됩니다.
// 두 번째 인수는 배열이며, 배열의 각 요소가 함수의 명시적 매개변수에 바인딩됩니다.
add.apply(o, [10, 20]); // 34
```

### this와 객체 변환

비엄격 모드에서는, 함수가 객체가 아닌 값을 `this`로 호출하면, `this` 값이 객체로 치환됩니다. `null`과 `undefined`는 `globalThis`로 변환됩니다. 숫자, 문자열 같은 원시 값(`7`, `'foo'`)은 관련 생성자를 사용해 객체로 변환됩니다. 따라서 숫자 `7`은 {{jsxref("Number")}} 래퍼 클래스로 변환되고 문자열 `'foo'`는 {{jsxref("String")}} 래퍼 클래스로 변환됩니다.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### bind() 메서드

[`f.bind(someObject)`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)를 호출하면, `f`와 같은 함수 본문과 스코프를 가진 새 함수가 생성됩니다. 다만, 이 새 함수에서 `this`의 값은 함수가 어떻게 호출되든 상관없이 `bind`의 첫 번째 인수로 영구적으로 바인딩됩니다.

```js
function f() {
  return this.a;
}

const g = f.bind({ a: "azerty" });
console.log(g()); // azerty

const h = g.bind({ a: "yoo" }); // bind는 단 한번만 동작합니다!
console.log(h()); // azerty

const o = { a: 37, f, g, h };
console.log(o.a, o.f(), o.g(), o.h()); // 37 37 azerty azerty
```

### 화살표 함수에서의 this

화살표 함수는 자신을 감싸고 있는 실행 컨텍스트의 `this` 값을 클로저로 캡처합니다. 다음 예제에서는 `obj`를 만들고, 그 안에 `getThisGetter`라는 메서드를 정의합니다. 이 메서드는 `this` 값을 반환하는 함수를 리턴합니다. 반환된 함수는 화살표 함수로 만들어지므로, 그 `this`는 항상 자신을 감싸고 있는 함수의 `this`에 고정됩니다. `getThisGetter` 내부의 `this` 값은 함수 호출 시점에서 설정할 수 있으며, 그 값이 반환되는 화살표 함수의 `this` 값에도 영향을 미칩니다. 여기서 `getThisGetter`는 비엄격 함수라고 가정합니다. 즉, 비엄격 스크립트 안에 포함되어 있으며, 클래스나 엄격 모드 함수 안에 중첩되어 있지 않습니다.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

우리는 `getThisGetter`를 `obj`의 메서드로 호출할 수 있으며, 이 경우 함수 내부의 `this`는 `obj`에 바인딩됩니다. 반환된 함수는 변수 `fn`에 할당됩니다. 이제 `fn`을 호출하면, 반환되는 `this` 값은 여전히 `getThisGetter` 호출 시 설정된 `obj`으로 고정됩니다. 만약 반환된 함수가 화살표 함수가 아니라면, 이러한 호출에서는 `this` 값이 `globalThis`가 됩니다. 그 이유는 `getThisGetter`가 비엄격 함수이기 때문입니다.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

하지만 메서드를 호출하지 않고 `obj`에서 분리할 경우 주의해야 합니다. `getThisGetter`는 여전히 `this` 값이 호출 방식에 따라 달라지는 메서드이기 때문입니다. 아래 예제에서 `fn2()()`를 호출하면 `globalThis`가 반환됩니다. 그 이유는 `fn2()`가 어떤 객체에도 속하지 않은 상태에서 호출되므로, `this`가 `globalThis`를 따르기 때문입니다.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

이러한 동작 방식은 콜백 함수를 정의할 때 매우 유용합니다. 일반적으로 각 함수 표현식은 자신만의 `this` 바인딩을 생성하며, 상위 스코프의 `this` 값을 가립니다. 하지만 화살표 함수를 사용하면, `this` 값에 신경 쓰지 않아도 되고, 실제로 `this`가 필요한 경우에만 (예: 클래스 메서드 안) 바인딩을 생성하면 됩니다. [`setTimeout()` 예제를 참고하세요.](/ko/docs/Web/API/Window/setTimeout#this_문제)

### getter와 setter의 this

getter와 setter에서의 `this`는 프로퍼티가 정의된 객체가 아니라, 해당 프로퍼티에 접근한 객체를 기준으로 결정됩니다. 즉, getter나 setter로 사용되는 함수의 `this`는 프로퍼티를 읽거나 쓰는 대상 객체에 바인딩됩니다.

```js
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  },
};

Object.defineProperty(o, "sum", {
  get: sum,
  enumerable: true,
  configurable: true,
});

console.log(o.average, o.sum); // 2, 6
```

### DOM 이벤트 핸들러에서의 this

함수가 이벤트 핸들러로 사용될 때, 그 함수의 `this`는 리스너가 등록된 DOM 요소에 바인딩됩니다. (단, 일부 브라우저에서는 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 이외의 방법으로 동적으로 추가된 리스너에 대해서는 이 규칙을 따르지 않을 수 있습니다.)

```js
// 리스너로 호출하면 관련 객체를 파란색으로 바꿈
function bluify(e) {
  // 항상 true
  console.log(this === e.currentTarget);
  // currentTarget과 target이 같은 객체면 true
  console.log(this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// 문서 내 모든 요소의 목록
var elements = document.getElementsByTagName("*");

// 어떤 요소를 클릭하면 파랗게 변하도록
// bluify를 클릭 리스너로 등록
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}
```

### 인라인 이벤트 핸들러에서의 this

코드가 인라인 [이벤트 핸들러 속성](/ko/docs/Web/HTML/Reference/Attributes)에서 호출될 경우, 그 함수의 `this`는 리스너가 붙은 DOM 요소에 바인딩됩니다.

```html
<button onclick="alert(this.tagName.toLowerCase());">this 표시</button>
```

위의 경고창은 `button`을 보여줍니다. 다만 바깥쪽 코드만 `this`를 이런 방식으로 설정합니다.

```html
<button onclick="alert((function() { return this; })());">
  내부 this 표시
</button>
```

이 경우, 내부 함수의 `this` 매개변수는 `globalThis`에 바인딩됩니다. (즉, 비엄격 모드에서 호출 시 `this`가 전달되지 않으면 기본적으로 사용되는 객체입니다.)

### 클래스에서의 바인딩 메서드

일반 함수와 마찬가지로, 클래스 메서드 안의 `this` 값도 어떻게 호출되느냐에 따라 달라집니다. 경우에 따라, 클래스 내부의 `this`가 항상 클래스 인스턴스를 가리키도록 이 동작을 오버라이딩 하는 것이 유용할 수 있습니다. 이를 위해서는 생성자 안에서 클래스 메서드를 bind 하면 됩니다.

```js
class Car {
  constructor() {
    // 차이를 보기 위해 sayHi는 그대로 두고, sayBye만 bind 합니다.
    this.sayBye = this.sayBye.bind(this);
  }

  sayHi() {
    console.log(`Hello from ${this.name}`);
  }

  sayBye() {
    console.log(`Bye from ${this.name}`);
  }

  get name() {
    return "Ferrari";
  }
}

class Bird {
  get name() {
    return "Tweety";
  }
}

const car = new Car();
const bird = new Bird();

// 메서드 안에서의 'this' 값은 메서드를 호출한 객체(caller)에 따라 달라집니다.
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// 하지만 bind 된 메서드는 'this' 값이 호출한 객체와 상관없이 고정됩니다.
bird.sayBye = car.sayBye;
bird.sayBye(); // Bye from Ferrari
```

> [!NOTE]
> 클래스는 항상 엄격모드에서 동작합니다. 따라서 메서드가 `undefined`인 `this`로 호출되면, 그 메서드가 `this`의 프로퍼티에 접근하려는 순간 오류가 발생합니다.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError가 발생합니다. 엄격모드에서 this는 undefined이고, sayHi 메서드가 this.name에 접근하려고 하기 때문입니다.
> ```

하지만 주의해야 할 점은, 자동으로 바인딩된 메서드는 클래스 속성으로 [화살표 함수를 사용할 때와 같은 문제가 있다는 것입니다](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions#메서드로_사용할_수_없습니다). 즉, 클래스의 각 인스턴스가 메서드의 자기 복사본을 가지게 되므로 메모리 사용량이 증가합니다. 따라서 반드시 필요한 경우에만 사용해야 합니다. 또 하나의 방법으로는 [`Intl.NumberFormat.prototype.format()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#map과_함께_format_사용하기)의 구현 방식을 흉내 낼 수 있습니다. 즉, 프로퍼티를 getter로 정의하여 접근할 때 바인딩된 함수를 반환하고 저장하도록 하면, 그 함수는 단 한 번만 생성되고, 필요할 때만 생성되게 할 수 있습니다.

### with 구문에서의 this

[`with`](/ko/docs/Web/JavaScript/Reference/Statements/with) 문은 더 이상 권장되지 않고(엄격모드에서는 사용할 수도 없지만), 여전히 일반적인 `this` 바인딩 규칙의 예외로 작동합니다. 만약 `with` 문 안에서 어떤 함수를 호출했을 때 그 함수가 스코프 객체의 프로퍼티라면, `this` 값은 해당 스코프 객체에 바인딩됩니다. 마치 함수 호출 앞에 `obj.` 접두사가 붙어 있는 것처럼 동작하는 것입니다.

```js
const obj = {
  foo() {
    return this;
  },
};

with (obj) {
  console.log(foo() === obj); // true
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("globalThis")}}
