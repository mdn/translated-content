---
title: 상속과 프로토타입
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: 7a58753bcf70d274dfe3a0385e4c3861d0df3dd4
---

{{jsSidebar("Advanced")}}

Java 나 C++ 같이 클래스 기반의 언어를 사용하던 프로그래머는 자바스크립트가 동적인 언어라는 점과 클래스가 없다는 것에서 혼란스러워 한다.

상속 관점에서 자바스크립트의 유일한 생성자는 객체뿐이다. 각각의 객체는 \[\[Prototype]]이라는 은닉(private) 속성을 가지는데 자신의 **프로토타입**이 되는 다른 객체를 가리킨다. 그 객체의 프로토타입 또한 프로토타입을 가지고 있고 이것이 반복되다, 결국 `null`을 프로토타입으로 가지는 오브젝트에서 끝난다. null은 더 이상의 프로토타입이 없다고 정의되며, **프로토타입 체인**의 종점 역할을 한다. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like [static dispatching](https://en.wikipedia.org/wiki/Static_dispatch) do not exist in JavaScript.

종종 이러한 점이 자바스크립트의 약점이라고 지적되지만, 프로토타입적 상속 모델은 사실 고전적인 방법보다 좀 더 강력한 방법이다. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how [classes](/en-US/docs/Web/JavaScript/Reference/Classes) are implemented.

Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern. While classes abstract most of the prototypical mechanism away, understanding how prototypes work under the hood is still useful.

## 프로토타입 체인을 이용한 상속

### 속성 상속

자바스크립트 객체는 속성을 저장하는 동적인 "가방"과 (**자기만의 속성**이라고 부른다) 프로토타입 객체에 대한 링크를 가진다. 객체의 어떤 속성에 접근하려할 때 그 객체 자체 속성 뿐만 아니라 객체의 프로토타입, 그 프로토타입의 프로토타입 등 프로토타입 체인의 종단에 이를 때까지 그 속성을 탐색한다.

> **Note:** ECMAScript 표준은 `someObject.[[Prototype]]`을 객체 `someObject`의 프로토타입을 지시하도록 명시하였다. ECMAScript 2015부터 `[[Prototype]]`에 조상 {{jsxref("Object.getPrototypeOf()")}}과 {{jsxref("Object.setPrototypeOf()")}}을 이용하여 접근하기 때문이다. 이것은 자바스크립트의 표준은 아니나 많은 브라우저에 구현되어 사실상의 표준이 된 속성 `__proto__`과 동일하다.
To prevent confusion while keeping it succinct, in our notation we will avoid using `obj.__proto__` but use `obj.[[Prototype]]` instead. This corresponds to `Object.getPrototypeOf(obj)`.
>
> It should not be confused with the `func.prototype` property of functions, which instead specifies the `[[Prototype]]` to be assigned to all _instances_ of objects created by the given function when used as a constructor. We will discuss the `prototype` property of constructor functions in [a later section](#constructors).

There are several ways to specify the `[[Prototype]]` of an object, which are listed in [a later section](#different_ways_of_creating_and_mutating_prototype_chains). For now, we will use the [`__proto__` syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) for illustration. It's worth noting that the `{ __proto__: ... }` syntax is different from the `obj.__proto__` accessor: the former is standard and not deprecated.

In an object literal like `{ a: 1, b: 2, __proto__: c }`, the value `c` (which has to be either `null` or another object) will become the `[[Prototype]]` of the object represented by the literal, while the other keys like `a` and `b` will become the _own properties_ of the object. This syntax reads very naturally, since `[[Prototype]]` is just an "internal property" of the object.

아래 코드에는 어떤 속성에 접근 하려할 때 일어나는 상황이다.

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]]은 속성 'b'와 'c'를 가지고 있다.
// o.[[Prototype]].[[Prototype]] 은 Object.prototype 이다.
// 마지막으로 o.[[Prototype]].[[Prototype]].[[Prototype]]은 null이다.
// null은 프로토타입의 종단을 말하며 정의에 의해서 추가 [[Prototype]]은 없다.
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// o는 'a'라는 속성을 가지는가? 그렇다. 속성의 값은 1이다.

console.log(o.b); // 2
// o는 'b'라는 속성을 가지는가? 그렇다. 속성의 값은 2이다.
// 프로토타입 역시 'b'라는 속성을 가지지만 이 값은 쓰이지 않는다. 이것을 "속성의 가려짐(property shadowing)" 이라고 부른다.

console.log(o.c); // 4
// o는 'c'라는 속성을 가지는가? 아니다. 프로토타입을 확인해보자.
// o.[[Prototype]]은 'c'라는 속성을 가지는가? 가지고 값은 4이다.

console.log(o.d); // undefined
// o는 'd'라는 속성을 가지는가? 아니다. 프로토타입을 확인해보자.
// o.[[Prototype]]은 'd'라는 속성을 가지는가? 아니다. 다시 프로토타입을 확인해보자.
// o.[[Prototype]].[[Prototype]]은 null이다. 찾는 것을 그만두자.
// 속성이 발견되지 않았기 때문에 undefined를 반환한다.
```

객체의 속성에 값을 지정하면 "자기만의 속성"이 생긴다. 단, [getter or setter](/ko/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)가 적용되는 속성이 상속되는 경우 예외적인 규칙이 적용된다.

Similarly, you can create longer prototype chains, and a property will be sought on all of them.

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

console.log(o.d); // 5
```

### 메소드 상속

자바스크립트에 "[methods](/ko/docs/Glossary/Method)"라는건 없다. 하지만 자바스크립트는 객체의 속성으로 함수를 지정할 수 있고 속성 값을 사용하듯 쓸 수 있다. 속성 값으로 지정한 함수의 상속 역시 위에서 본 속성의 상속과 동일하다. (단 위에서 언급한 "속성의 가려짐" 대신 "_메소드 오버라이딩, method overriding_" 라는 용어를 사용한다)

상속된 함수가 실행 될 때, [`this`](/ko/JavaScript/Reference/Operators/this) 라는 변수는 상속된 오브젝트를 가르킨다. 그 함수가 프로토타입의 속성으로 지정되었다고 해도 말이다.

```js
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// When calling parent.method in this case, 'this' refers to parent

// child is an object that inherits from parent
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// When child.method is called, 'this' refers to child.
// So when child inherits the method of parent,
// The property 'value' is sought on child. However, since child
// doesn't have an own property called 'value', the property is
// found on the [[Prototype]], which is parent.value.

child.value = 4; // assign the value 4 to the property 'value' on child.
// This shadows the 'value' property on parent.
// The child object now looks like:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Since child now has the 'value' property, 'this.value' means
// child.value instead
```

## Constructors

The power of prototypes is that we can reuse a set of properties if they should be present on every instance — especially for methods. Suppose we are to create a series of boxes, where each box is an object that contains a value which can be accessed through a `getValue` function. A naive implementation would be:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

This is subpar, because each instance has its own function property that does the same thing, which is redundant and unnecessary. Instead, we can move `getValue` to the `[[Prototype]]` of all boxes:

```js
const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];
```

This way, all boxes' `getValue` method will refer to the same function, lowering memory usage. However, manually binding the `__proto__` for every object creation is still very inconvenient. This is when we would use a _constructor_ function, which automatically sets the `[[Prototype]]` for every object manufactured. Constructors are functions called with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new).

```js
// A constructor function
function Box(value) {
  this.value = value;
}

// Properties all boxes created from the Box() constructor
// will have
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
```

We say that `new Box(1)` is an _instance_ created from the `Box` constructor function. `Box.prototype` is not much different from the `boxPrototype` object we created previously — it's just a plain object. Every instance created from a constructor function will automatically have the constructor's [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property as its `[[Prototype]]` — that is, `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` by default has one own property: [`constructor`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), which references the constructor function itself — that is, `Box.prototype.constructor === Box`. This allows one to access the original constructor from any instance.

> **Note:** If a non-primitive is returned from the constructor function, that value will become the result of the `new` expression. In this case the `[[Prototype]]` may not be correctly bound — but this should not happen much in practice.

The above constructor function can be rewritten in [classes](/en-US/docs/Web/JavaScript/Reference/Classes) as:

```js
class Box {
  constructor(value) {
    this.value = value;
  }

  // Methods are created on Box.prototype
  getValue() {
    return this.value;
  }
}
```

Classes are syntax sugar over constructor functions, which means you can still manipulate `Box.prototype` to change the behavior of all instances. However, because classes are designed to be an abstraction over the underlying prototype mechanism, we will use the more-lightweight constructor function syntax for this tutorial to fully demonstrate how prototypes work.

Because `Box.prototype` references the same object as the `[[Prototype]]` of all instances, we can change the behavior of all instances by mutating `Box.prototype`.

```js
function Box(value) {
  this.value = value;
}
Box.prototype.getValue = function () {
  return this.value;
};
const box = new Box(1);

// Mutate Box.prototype after an instance has already been created
Box.prototype.getValue = function () {
  return this.value + 1;
};
box.getValue(); // 2
```

A corollary is, _re-assigning_ `Constructor.prototype` (`Constructor.prototype = ...`) is a bad idea for two reasons:

- The `[[Prototype]]` of instances created before the reassignment is now referencing a different object from the `[[Prototype]]` of instances created after the reassignment — mutating one's `[[Prototype]]` no longer mutates the other.
- Unless you manually re-set the `constructor` property, the constructor function can no longer be traced from `instance.constructor`, which may break user expectation. Some built-in operations will read the `constructor` property as well, and if it is not set, they may not work as expected.

`Constructor.prototype` is only useful when constructing instances. It has nothing to do with `Constructor.[[Prototype]]`, which is the constructor function's _own_ prototype, which is `Function.prototype` — that is, `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implicit constructors of literals

Some literal syntaxes in JavaScript create instances that implicitly set the `[[Prototype]]`. For example:

```js
// Object literals (without the `__proto__` key) automatically
// have `Object.prototype` as their `[[Prototype]]`
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // true

// Array literals automatically have `Array.prototype` as their `[[Prototype]]`
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // true

// RegExp literals automatically have `RegExp.prototype` as their `[[Prototype]]`
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // true
```

We can "de-sugar" them into their constructor form.

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

For example, "array methods" like [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) are simply methods defined on `Array.prototype`, which is why they are automatically available on all array instances.

> **Warning:** There is one misfeature that used to be prevalent — extending `Object.prototype` or one of the other built-in prototypes. An example of this misfeature is, defining `Array.prototype.myMethod = function () {...}` and then using `myMethod` on all array instances.
>
> This misfeature is called _monkey patching_. Doing monkey patching risks forward compatibility, because if the language adds this method in the future but with a different signature, your code will break. It has led to incidents like the [SmooshGate](https://developer.chrome.com/blog/smooshgate/), and can be a great nuisance for the language to advance since JavaScript tries to "not break the web".
>
> The **only** good reason for extending a built-in prototype is to backport the features of newer JavaScript engines, like `Array.prototype.forEach`.

It may be interesting to note that due to historical reasons, some built-in constructors' `prototype` property are instances themselves. For example, `Number.prototype` is a number 0, `Array.prototype` is an empty array, and `RegExp.prototype` is `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself
```

However, this is not the case for user-defined constructors, nor for modern constructors like `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Building longer inheritance chains

The `Constructor.prototype` property will become the `[[Prototype]]` of the constructor's instances, as-is — including `Constructor.prototype`'s own `[[Prototype]]`. By default, `Constructor.prototype` is a _plain object_ — that is, `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. The only exception is `Object.prototype` itself, whose `[[Prototype]]` is `null` — that is, `Object.getPrototypeOf(Object.prototype) === null`. Therefore, a typical constructor will build the following prototype chain:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

To build longer prototype chains, we can set the `[[Prototype]]` of `Constructor.prototype` via the [`Object.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) function.

```js
function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

In class terms, this is equivalent to using the [`extends`](/en-US/docs/Web/JavaScript/Reference/Classes/extends) syntax.

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

You may also see some legacy code using {{jsxref("Object.create()")}} to build the inheritance chain. However, because this reassigns the `prototype` property and removes the [`constructor`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) property, it can be more error-prone, while performance gains may not be apparent if the constructors haven't created any instances yet.

```js example-bad
function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
```

## Javascript 에서 프로토타입을 사용하는 방법

뒤에서 일어나는 일을 좀 더 자세히 파헤쳐보자.

위에서 언급했듯이, 자바스크립트에서 함수는 속성을 가질 수 있다. 모든 함수에는 `prototype`이라는 특수한 속성이 있다. 아래의 예제 코드는 독립적이라는 것에 유의하자. (아래의 코드 이외에는 웹페이지에 다른 자바스크립트가 없다고 가정하는 것이 좋다.)

최적의 실습을 위해서 콘솔을 열고 "Console" 탭으로 이동하여 아래의 JavaScript 코드를 복사하여 붙여넣은 다음 , 엔터키를 눌러 실행할 것을 적극 권한다. (콘솔은 대부분 웹 브라우저의 Developer Tools에 포함되어있다. 자세한 내용은 [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/), [Edge DevTools](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/)에서 확인할 수 있다. )

```js
function doSomething() {}
console.log(doSomething.prototype);
// It does not matter how you declare the function; a
// function in JavaScript will always have a default
// prototype property — with one exception: an arrow
// function doesn't have a default prototype property:
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);
```

위 내용을 토대로, 콘솔을 보면 `doSomething()` 은 기본 `prototype` 속성을 가진다. 코드를 실행한 뒤에 콘솔에서는 다음과 유사한 형태의 객체가 표시되어야한다.

```plain
{
  constructor: ƒ doSomething(),
  [[Prototype]]: {
    constructor: ƒ Object(),
    hasOwnProperty: ƒ hasOwnProperty(),
    isPrototypeOf: ƒ isPrototypeOf(),
    propertyIsEnumerable: ƒ propertyIsEnumerable(),
    toLocaleString: ƒ toLocaleString(),
    toString: ƒ toString(),
    valueOf: ƒ valueOf()
  }
}
```

> **Note:** The Chrome console uses `[[Prototype]]` to denote the object's prototype, following the spec's terms; Firefox uses `<prototype>`. For consistency we will use `[[Prototype]]`.

우리는 아래에 보이는 것과 같이 `doSomething()` 프로토타입에 속성을 추가할 수 있다.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

결과:

```plain
{
  foo: "bar",
  constructor: ƒ doSomething(),
  [[Prototype]]: {
    constructor: ƒ Object(),
    hasOwnProperty: ƒ hasOwnProperty(),
    isPrototypeOf: ƒ isPrototypeOf(),
    propertyIsEnumerable: ƒ propertyIsEnumerable(),
    toLocaleString: ƒ toLocaleString(),
    toString: ƒ toString(),
    valueOf: ƒ valueOf()
  }
}
```

이제 `new` 연산자를 사용해서 프로토타입 기반의 `doSomething()` 인스턴스를 생성할 수 있다. new 연산자를 사용하려면 함수 호출 형식에 `new` 접두사를 붙이기만하면 된다. `new` 연산자로 함수를 호출하면 해당 함수의 인스턴스 객체를 반환받는다. 그러면 속성들을 이 객체에 추가할 수 있다.

다음의 코드를 실행해보자.

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

실행하고나면 결과는 다음과 비슷할 것이다.

```plain
{
  prop: "some value",
  [[Prototype]]: {
    foo: "bar",
    constructor: ƒ doSomething(),
    [[Prototype]]: {
      constructor: ƒ Object(),
      hasOwnProperty: ƒ hasOwnProperty(),
      isPrototypeOf: ƒ isPrototypeOf(),
      propertyIsEnumerable: ƒ propertyIsEnumerable(),
      toLocaleString: ƒ toLocaleString(),
      toString: ƒ toString(),
      valueOf: ƒ valueOf()
    }
  }
}
```

위에서 본 것과 같이, `doSomeInstancing` 객체의 `[[Prototype]]`는 `doSomething.prototype`이다. 그래서 도대체 `[[Prototype]]`는 무엇을 하는것인지 알아보자. 우리가 `doSomeInstancing`의 속성에 접근할때 브라우저는 우선 `doSomeInstancing`이 그 속성을 갖고있는지 확인한다.

만약 `doSomeInstancing`이 속성을 갖고있지 않다면, 브라우저는 `doSomeInstancing`의 `[[Prototype]]`(`doSomething.prototype`)가 그 속성을 갖고있는지 확인한다.
만약 `doSomeInstancing`의 `[[Prototype]]`가 브라우저가 찾던 속성을 갖고 있다면, `doSomething`의 `[[Prototype]]`가 갖고있는 그 속성을 사용한다.

그렇지 않고, `doSomeInstancing`의 `[[Prototype]]`가 그 속성을 갖고있지 않을때에는
`doSomeInstancing`의 `[[Prototype]]`의 `[[Prototype]]`가 그 속성을 갖는지 확인한다.
기본적으로, 어떠한 함수던지 그 함수의 `prototype` 속성의 `[[Prototype]]`는 `Object.prototype`이다.
그러므로 브라우저는 `doSomeInstancing`의 `[[Prototype]]`의 `[[Prototype]]`(doSomething.prototype의 `[[Prototype]]`(다시말해, `Object.prototype`)) 에서 그 속성을 찾아본다.
만약 그 속성을 `doSomeInstancing`의 `[[Prototype]]`의 `[[Prototype]]`에서 찾을 수 없다면 그다음엔 `doSomeInstancing`의 `[[Prototype]]`의 `[[Prototype]]`의 `[[Prototype]]`에서 찾을것이다.
하지만 여기서 문제가 발생한다.
doSomeInstancing의 `[[Prototype]]`의 `[[Prototype]]`의 `[[Prototype]]`는 존재할 수 없다(Object.prototype의 `[[Prototype]]`는 null이기 때문).
그제서야, 오직 모든 프로토타입 체인이 검사 되고 브라우저가 더이상 검사할 `[[Prototype]]`가 없을때에서야 브라우저는 우리가 찾던 값이 `undefined`라고 결론짓는다.

콘솔에 코드를 조금 더 추가해보자.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
```

이 코드의 결과는 아래와 같다.

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## 객체를 생성하는 여러 방법과 프로토타입 체인 결과

We have encountered many ways to create objects and change their prototype chains. We will systematically summarize the different ways, comparing each approach's pros and cons.

### 문법 생성자로 객체 생성

```js
const o = { a: 1 };
// o 객체는 프로토타입으로 Object.prototype 을 가진다.
// 이로 인해 o.hasOwnProperty('a') 같은 코드를 사용할 수 있다.
// hasOwnProperty 라는 속성은 Object.prototype 의 속성이다.
// Object.prototype 의 프로토타입은 null 이다.
// o ---> Object.prototype ---> null

const a = ["yo", "whadup", "?"];
// Array.prototype을 상속받은 배열도 마찬가지다.
// (이번에는 indexOf, forEach 등의 메소드를 가진다)
// 프로토타입 체인은 다음과 같다.
// a ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
// 함수는 Function.prototype 을 상속받는다.
// (이 프로토타입은 call, bind 같은 메소드를 가진다)
// f ---> Function.prototype ---> Object.prototype ---> null

const p = { b: 2, __proto__: o };
// It is possible to point the newly created object's [[Prototype]] to
// another object via the __proto__ literal property. (Not to be confused
// with Object.prototype.__proto__ accessors)
// p ---> o ---> Object.prototype ---> null
```

<table class="standard-table">
  <caption>
    Pros and cons of using the <code>__proto__</code> key in <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object initializers</a>
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
        Supported in all modern engines. Pointing the <code>__proto__</code>
        key to something that is not an object only fails silently without
        throwing an exception. Contrary to the
        {{jsxref("Object/proto", "Object.prototype.__proto__")}} setter,
        <code>__proto__</code> in object literal initializers is standardized
        and optimized, and can even be more performant than
        {{jsxref("Object.create")}}. Declaring extra own properties on the
        object at creation is more ergonomic than
        {{jsxref("Object.create")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        Not supported in IE10 and below. Likely to be confused with
        {{jsxref("Object/proto", "Object.prototype.__proto__")}} accessors for
        people unaware of the difference.
      </td>
    </tr>
  </tbody>
</table>

### 생성자를 이용

자바스크립트에서 생성자는 단지 [new 연산자](/en/JavaScript/Reference/Operators/new)를 사용해 함수를 호출하면 된다.

```js
function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g 'vertexes' 와 'edges'를 속성으로 가지는 객체이다.
// 생성시 g.[[Prototype]]은 Graph.prototype의 값과 같은 값을 가진다.
```

<table class="standard-table">
  <caption>
    Pros and cons of using constructor functions
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
        Supported in all engines — going all the way back to IE 5.5. Also, it
        is very fast, very standard, and very JIT-optimizable.
      </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        <ul>
          <li>In order to use this method, the function in question must be
          initialized. During this initialization, the constructor may store
          unique information that must be generated per-object. This unique
          information would only be generated once, potentially leading to
          problems.</li>
          <li>The initialization of the constructor may put unwanted methods onto
          the object.</li>
        </ul>
        <p>Both of those are generally not problems in practice.</p>
      </td>
    </tr>
  </tbody>
</table>

### Object.create 이용

[Object.create](/en/JavaScript/Reference/Global_Objects/Object/create)라는 메소드를 호출하여 새로운 객체를 만들 수 있다. 생성된 객체의 프로토타입은 이 메소드의 첫 번째 인수로 지정된다.

```js
const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (상속됨)

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null (d is an object that has null directly as its prototype)
console.log(d.hasOwnProperty); // undefined이다. 왜냐하면 d는 Object.prototype을 상속받지 않기 때문이다.
```

<table class="standard-table">
  <caption>
    Pros and cons of {{jsxref("Object.create")}}
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
        Supported in all modern engines. Allows directly setting
        <code>[[Prototype]]</code> of an object at creation time, which permits
        the runtime to further optimize the object. Also allows the creation of
        objects without a prototype, using <code>Object.create(null)</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        Not supported in IE8 and below. However, as Microsoft has discontinued
        extended support for systems running IE8 and below, that should not be a
        concern for most applications. Additionally, the slow object
        initialization can be a performance black hole if using the second
        argument, because each object-descriptor property has its own separate
        descriptor object. When dealing with hundreds of thousands of object
        descriptors in the form of objects, that lag time might become a serious
        issue.
      </td>
    </tr>
  </tbody>
</table>

### `class` 키워드 이용

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = "Filled rectangle";
    this.color = color;
  }
}

const filledRectangle = new FilledRectangle(5, 10, "blue");
// filledRectangle ---> FilledRectangle.prototype ---> Rectangle.prototype ---> Object.prototype ---> null
```

<table class="standard-table">
  <caption>
    Pros and cons of classes
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
        Supported in all modern engines. Very high readability and maintainability.
        <a href="/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields">Private properties</a>
        are a feature with no trivial replacement in prototypical inheritance.
      </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        Classes, especially with private properties, are less optimized than
        traditional ones (although engine implementors are working to improve
        this). Not supported in older environments and transpilers are usually
        needed to use classes in production.
      </td>
    </tr>
  </tbody>
</table>

### With Object.setPrototypeOf()

While all methods above will set the prototype chain at object creation time, [`Object.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) allows mutating the `[[Prototype]]` internal property of an existing object.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

<table class="standard-table">
  <caption>
    Pros and cons of {{jsxref("Object.setPrototypeOf")}}
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
        Supported in all modern engines. Allows the dynamic manipulation of an
        object's prototype and can even force a prototype on a prototype-less
        object created with <code>Object.create(null)</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        Ill-performing. Should be avoided if it's possible to set the prototype
        at object creation time. Many engines optimize the prototype and try to
        guess the location of the method in memory when calling an instance in
        advance; but setting the prototype dynamically disrupts all those
        optimizations. It might cause some engines to recompile your code for
        de-optimization, to make it work according to the specs. Not supported
        in IE8 and below.
      </td>
    </tr>
  </tbody>
</table>

### With the \_\_proto\_\_ accessor

All objects inherit the [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) setter, which can be used to set the `[[Prototype]]` of an existing object (if the `__proto__` key is not overridden on the object).

> **Warning:** `Object.prototype.__proto__` accessors are **non-standard** and deprecated. You should almost always use `Object.setPrototypeOf` instead.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

<table class="standard-table">
  <caption>
    Pros and cons of setting the
    {{jsxref("Object/proto","__proto__")}} property
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
        Supported in all modern engines. Setting
        {{jsxref("Object/proto","__proto__")}} to something that
        is not an object only fails silently. It does not throw an exception.
      </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        Non-performant and deprecated. Many engines optimize the prototype and
        try to guess the location of the method in the memory when calling an
        instance in advance; but setting the prototype dynamically disrupts all
        those optimizations and can even force some engines to recompile for
        de-optimization of your code, to make it work according to the specs.
        Not supported in IE10 and below. The {{jsxref("Object/proto","__proto__")}}
        setter is normative optional, so it may not work across all platforms.
        You should almost always use {{jsxref("Object.setPrototypeOf")}}
        instead.
      </td>
    </tr>
  </tbody>
</table>

### 성능

프로토타입 체인에 걸친 속성 검색으로 성능에 나쁜 영향을 줄 수 있으며, 때때로 치명적일 수 있다. 또한 존재하지도 않는 속성에 접근하려는 시도는 항상 모든 프로토타입 체인인 전체를 탐색해서 확인하게 만든다.

Also, when iterating over the properties of an object, **every** enumerable property that is on the prototype chain will be enumerated. To check whether an object has a property defined on _itself_ and not somewhere on its prototype chain, it is necessary to use the [`hasOwnProperty`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) or [`Object.hasOwn`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) methods. All objects, except those with `null` as `[[Prototype]]`, inherit [`hasOwnProperty`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) from `Object.prototype` — unless it has been overridden further down the prototype chain. To give you a concrete example, let's take the above graph example code to illustrate it:

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g ---> Graph.prototype ---> Object.prototype ---> null

g.hasOwnProperty("vertices"); // true
Object.hasOwn(g, "vertices"); // true

g.hasOwnProperty("nope"); // false
Object.hasOwn(g, "nope"); // false

g.hasOwnProperty("addVertex"); // false
Object.hasOwn(g, "addVertex"); // false

Object.getPrototypeOf(g).hasOwnProperty("addVertex"); // true
```

Note: It is **not** enough to check whether a property is [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined). The property might very well exist, but its value just happens to be set to `undefined`.

## 결론

JavaScript may be a bit confusing for developers coming from Java or C++, as it's all dynamic, all runtime, and it has no static types at all. Everything is either an object (instance) or a function (constructor), and even functions themselves are instances of the `Function` constructor. Even the "classes" as syntax constructs are just constructor functions at runtime.

All constructor functions in JavaScript have a special property called `prototype`, which works with the `new` operator. The reference to the prototype object is copied to the internal `[[Prototype]]` property of the new instance. For example, when you do `const a1 = new A()`, JavaScript (after creating the object in memory and before running function `A()` with `this` defined to it) sets `a1.[[Prototype]] = A.prototype`. When you then access properties of the instance, JavaScript first checks whether they exist on that object directly, and if not, it looks in `[[Prototype]]`. `[[Prototype]]` is looked at _recursively_, i.e. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` etc., until it's found or `Object.getPrototypeOf` returns `null`. This means that all properties defined on `prototype` are effectively shared by all instances, and you can even later change parts of `prototype` and have the changes appear in all existing instances.

If, in the example above, you do `const a1 = new A(); const a2 = new A();`, then `a1.doSomething` would actually refer to `Object.getPrototypeOf(a1).doSomething` — which is the same as the `A.prototype.doSomething` you defined, i.e. `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

It is essential to understand the prototypal inheritance model before writing complex code that makes use of it. Also, be aware of the length of the prototype chains in your code and break them up if necessary to avoid possible performance problems. Further, the native prototypes should **never** be extended unless it is for the sake of compatibility with newer JavaScript features.
