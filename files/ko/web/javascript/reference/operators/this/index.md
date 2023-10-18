---
title: this
slug: Web/JavaScript/Reference/Operators/this
---

{{jsSidebar("Operators")}}

JavaScript에서 **함수의 `this` 키워드**는 다른 언어와 조금 다르게 동작합니다. 또한 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)와 비엄격 모드에서도 일부 차이가 있습니다.

대부분의 경우 `this`의 값은 함수를 호출한 방법에 의해 결정됩니다. 실행중에는 할당으로 설정할 수 없고 함수를 호출할 때 마다 다를 수 있습니다. ES5는 {{jsxref('Operators/this', "함수를 어떻게 호출했는지 상관하지 않고 <code>this</code> 값을 설정할 수 있는")}} {{jsxref("Function.prototype.bind()", "bind")}} 메서드를 도입했고, ES2015는 스스로의 `this` 바인딩을 제공하지 않는 [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)를 추가했습니다(이는 렉시컬 컨텍스트안의 `this`값을 유지합니다).

{{EmbedInteractiveExample("pages/js/expressions-this.html")}}

## 구문

```js
this;
```

### 값

실행 컨텍스트(global, function 또는 eval)의 프로퍼티는 비엄격 모드에서 항상 객체를 참조하며, 엄격 모드에서는 어떠한 값이든 될 수 있습니다.

## 전역 문맥

전역 실행 맥락에서 `this`는 엄격 모드 여부에 관계 없이 전역 객체를 참조합니다.

```js
// 웹 브라우저에서는 window 객체가 전역 객체
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

> **노트:** global {{jsxref("globalThis")}} 프로퍼티를 사용하여 코드가 실행중인 현재 컨텍스트와 관계없이 항상 전역 객체를 얻을 수 있습니다.

## 함수 문맥

함수 내부에서 `this`의 값은 함수를 호출한 방법에 의해 좌우됩니다.

### 단순 호출

다음 예제는 엄격 모드가 아니며 `this`의 값이 호출에 의해 설정되지 않으므로, 기본값으로 브라우저에서는 {{domxref("Window", "window")}}인 전역 객체를 참조합니다.

```js
function f1() {
  return this;
}

// 브라우저
f1() === window; // true

// Node.js
f1() === global; // true
```

반면에 엄격 모드에서 `this` 값은 실행 문맥에 진입하며 설정되는 값을 유지하므로 다음 예시에서 보여지는 것 처럼 `this`는 `undefined`로 남아있습니다.

```js
function f2() {
  "use strict"; // 엄격 모드 참고
  return this;
}

f2() === undefined; // true
```

<div class="blockIndicator note"><p>두번째 예제에서 <code>f2</code>를 객체의 메서드나 속성(예: <code>window.f2()</code>)으로써가 아닌 직접 호출했기 때문에 <code>this</code>는 {{jsxref("undefined")}}여야 합니다. 그러나 엄격 모드를 처음 지원하기 시작한 초기 브라우저에서는 구현하지 않았고, <code>window</code> 객체를 잘못 반환했습니다.</p></div>

`this`의 값을 한 문맥에서 다른 문맥으로 넘기려면 다음 예시와 같이 {{jsxref("Function.prototype.call()", "call()")}}이나 {{jsxref("Function.prototype.apply", "apply()")}}를 사용하세요.

**예시 1**

```js
// call 또는 apply의 첫 번째 인자로 객체가 전달될 수 있으며 this가 그 객체에 묶임
var obj = { a: "Custom" };

// 변수를 선언하고 변수에 프로퍼티로 전역 window를 할당
var a = "Global";

function whatsThis() {
  return this.a; // 함수 호출 방식에 따라 값이 달라짐
}

whatsThis(); // this는 'Global'. 함수 내에서 설정되지 않았으므로 global/window 객체로 초기값을 설정한다.
whatsThis.call(obj); // this는 'Custom'. 함수 내에서 obj로 설정한다.
whatsThis.apply(obj); // this는 'Custom'. 함수 내에서 obj로 설정한다.
```

**예시 2**

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// 첫 번째 인자는 'this'로 사용할 객체이고,
// 이어지는 인자들은 함수 호출에서 인수로 전달된다.
add.call(o, 5, 7); // 16

// 첫 번째 인자는 'this'로 사용할 객체이고,
// 두 번째 인자는 함수 호출에서 인수로 사용될 멤버들이 위치한 배열이다.
add.apply(o, [10, 20]); // 34
```

비엄격 모드에서 `this`로 전달된 값이 객체가 아닌 경우, `call`과 `apply`는 이를 객체로 변환하기 위한 시도를 합니다. `null`과 `undefined` 값은 전역 객체가 됩니다. `7`이나 `'foo'`와 같은 원시값은 관련된 생성자를 사용해 객체로 변환되며, 따라서 원시 숫자 `7`은 `new Number(7)`에 의해 객체로 변환되고 문자열 `'foo'`는 `new String('foo')`에 의해 객체로 변환됩니다.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object global]
```

### `bind` 메서드

ECMAScript 5는 {{jsxref("Function.prototype.bind")}}를 도입했습니다. `f.bind(someObject)`를 호출하면 `f`와 같은 본문(코드)과 범위를 가졌지만 this는 원본 함수를 가진 새로운 함수를 생성합니다. 새 함수의 `this`는 호출 방식과 상관없이 영구적으로`bind()`의 첫 번째 매개변수로 고정됩니다.

```js
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var h = g.bind({ a: "yoo" }); // bind는 한 번만 동작함!
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

### 화살표 함수

[화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)에서 `this`는 자신을 감싼 정적 범위입니다. 전역 코드에서는 전역 객체를 가리킵니다.

```js
var globalObject = this;
var foo = () => this;
console.log(foo() === globalObject); // true
```

<div class="blockIndicator note"><p><strong>참고</strong>: 화살표 함수를 <code>call()</code>, <code>bind()</code>, <code>apply()</code>를 사용해 호출할 때 <code>this</code>의 값을 정해주더라도 무시합니다. 사용할 매개변수를 정해주는 건 문제 없지만, 첫 번째 매개변수(<code>thisArg</code>)는 <code>null</code>을 지정해야 합니다.</p></div>

```js
// 객체로서 메서드 호출
var obj = { func: foo };
console.log(obj.func() === globalObject); // true

// call을 사용한 this 설정 시도
console.log(foo.call(obj) === globalObject); // true

// bind를 사용한 this 설정 시도
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

어떤 방법을 사용하든 `foo`의 `this`는 생성 시점의 것으로 설정됩니다(위 예시에서는 global 객체). 다른 함수 내에서 생성된 화살표 함수에도 동일하게 적용됩니다. `this`는 싸여진 렉시컬 컨텍스트의 것으로 유지됩니다.

```js
// this를 반환하는 메소드 bar를 갖는 obj를 생성합니다.
// 반환된 함수는 화살표 함수로 생성되었으므로,
// this는 감싸진 함수의 this로 영구적으로 묶입니다.
// bar의 값은 호출에서 설정될 수 있으며, 이는 반환된 함수의 값을 설정하는 것입니다.
var obj = {
  bar: function () {
    var x = () => this;
    return x;
  },
};

// obj의 메소드로써 bar를 호출하고, this를 obj로 설정
// 반환된 함수로의 참조를 fn에 할당
var fn = obj.bar();

// this 설정 없이 fn을 호출하면,
// 기본값으로 global 객체 또는 엄격 모드에서는 undefined
console.log(fn() === obj); // true

// 호출 없이 obj의 메소드를 참조한다면 주의하세요.
var fn2 = obj.bar;
// 화살표 함수의 this를 bar 메소드 내부에서 호출하면
// fn2의 this를 따르므로 window를 반환할것입니다.
console.log(fn2()() == window); // true
```

위 예시에서, `obj.bar`에 할당된 함수(익명 함수 A라고 지칭)는 화살표 함수로 생성된 다른 함수(익명 함수 B라고 지칭)를 반환합니다. 결과로써 함수 B가 호출될 때 B의 `this`는 영구적으로 `obj.bar`(함수 A)의 `this`로 설정됩니다. 반환됨 함수(함수 B)가 호출될 때, `this`는 항상 초기에 설정된 값일 것입니다. 위 코드 예시에서, 함수 B의 `this`는 함수 A의 `this`인 `obj`로 설정되므로, 일반적으로 `this`를 `undefined`나 global 객체로 설정하는 방식으로 호출할 때도(또는 이전 예시에서처럼 global 실행 컨텍스트에서 다른 방법을 사용할 때에도) obj의 설정은 유지됩니다.

### 객체의 메서드로서

함수를 어떤 객체의 메서드로 호출하면 `this`의 값은 그 객체를 사용합니다.

다음 예제에서 `o.f()`를 실행할 때 `o` 객체가 함수 내부의 `this`와 연결됩니다.

```js
var o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};

console.log(o.f()); // 37
```

이 행동이 함수가 정의된 방법이나 위치에 전혀 영향을 받지 않는 것에 유의해라. 이전 예제에서, `o` 의 정의 중 `f` 함수를 구성원으로 내부에 정의 하였다. 그러나, 간단하게 함수를 먼저 정의하고 나중에 `o.f`를 추가할 수 있다. 이렇게 하면 동일한 동작 결과 이다 :

```js
var o = { prop: 37 };

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // logs 37
```

이는 함수가 `o`의 멤버 `f`로 부터 호출 된 것만이 중요하다는 것을 보여준다.

마찬가지로, 이 `this` 바인딩은 가장 즉각으로 멤버 대상에 영향을 받는다. 다음 예제에서, 함수를 실행할 때, 객체 `o.b`의 메소드 `g` 로서 호출한다. 이것이 실행되는 동안, 함수 내부의 `this`는 `o.b`를 나타낸다. 객체는 그 자신이 `o`의 멤버 중 하나라는 사실은 중요하지 않다. 가장 즉각적인 참조가 중요한 것이다.

```js
o.b = { g: independent, prop: 42 };
console.log(o.b.g()); // logs 42
```

#### 객체의 프로토타입 체인에서의 `this`

같은 개념으로 객체의 프로토타입 체인 어딘가에 정의한 메서드도 마찬가지입니다. 메서드가 어떤 객체의 프로토타입 체인 위에 존재하면, `this`의 값은 그 객체가 메서드를 가진 것 마냥 설정됩니다.

```js
var o = {
  f: function () {
    return this.a + this.b;
  },
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

이 예제에서, `f` 속성을 가지고 있지 않은 변수 `p` 가 할당된 객체는, 프로토타입으로 부터 상속받는다. 그러나 그것은 결국 `o` 에서 `f` 이름을 가진 멤버를 찾는 되는 문제가 되지 않는다; `p.f` 를 찾아 참조하기 시작하므로, 함수 내부의 `this` 는 `p` 처럼 나타나는 객체 값을 취한다. 즉, `f` 는 `p` 의 메소드로서 호출된 이후로, `this` 는 `p` 를 나타낸다. 이것은 JavaScript 의 프로토타입 상속의 흥미로운 기능이다.

#### 접근자와 설정자의 `this`

다시 한 번 같은 개념으로, 함수를 접근자와 설정자에서 호출하더라도 동일합니다. 접근자나 설정자로 사용하는 함수의 `this`는 접근하거나 설정하는 속성을 가진 객체로 묶입니다.

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

### 생성자로서

함수를 {{jsxref("Operators/new", "new")}} 키워드와 함께 생성자로 사용하면 `this`는 새로 생긴 객체에 묶입니다.

<div class="blockIndicator note"><p>While the default for a constructor is to return the object referenced by <code>this</code>, it can instead return some other object (if the return value isn't an object, then the <code>this</code> object is returned).</p></div>

```js
/*
 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 */

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // 38
```

### DOM 이벤트 처리기로서

함수를 이벤트 처리기로 사용하면 this는 이벤트를 발사한 요소로 설정됩니다. 일부 브라우저는 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 외의 다른 방법으로 추가한 처리기에 대해선 이 규칙을 따르지 않습니다.

```js
// 처리기로 호출하면 관련 객체를 파랗게 만듦
function bluify(e) {
  // 언제나 true
  console.log(this === e.currentTarget);
  // currentTarget과 target이 같은 객체면 true
  console.log(this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// 문서 내 모든 요소의 목록
var elements = document.getElementsByTagName("*");

// 어떤 요소를 클릭하면 파랗게 변하도록
// bluify를 클릭 처리기로 등록
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}
```

### 인라인 이벤트 핸들러에서

코드를 인라인 이벤트 처리기로 사용하면 `this`는 처리기를 배치한 DOM 요소로 설정됩니다.

```js
<button onclick="alert(this.tagName.toLowerCase());">this 표시</button>
```

위의 경고창은 `button`을 보여줍니다. 다만 바깥쪽 코드만 `this`를 이런 방식으로 설정합니다.

```js
<button onclick="alert((function() { return this; })());">
  내부 this 표시
</button>
```

위의 경우, 내부 함수의 this는 정해지지 않았으므로 전역/`window` 객체를 반환합니다. 즉 비엄격 모드에서 `this`를 설정하지 않은 경우의 기본값입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)
