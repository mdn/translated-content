---
title: 상속과 프로토타입
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
---

{{jsSidebar("Advanced")}}

Java 나 C++ 같이 클래스 기반의 언어를 사용하던 프로그래머는 자바스크립트가 동적인 언어라는 점과 클래스가 없다는 것에서 혼란스러워 한다. (ES2015부터 class 키워드를 지원하기 시작했으나, 문법적인 양념일 뿐이며 자바스크립트는 여전히 프로토타입 기반의 언어다.)

상속 관점에서 자바스크립트의 유일한 생성자는 객체뿐이다. 각각의 객체는 \[\[Prototype]]이라는 은닉(private) 속성을 가지는데 자신의 **프로토타입**이 되는 다른 객체를 가리킨다. 그 객체의 프로토타입 또한 프로토타입을 가지고 있고 이것이 반복되다, 결국 `null`을 프로토타입으로 가지는 오브젝트에서 끝난다. null은 더 이상의 프로토타입이 없다고 정의되며, **프로토타입 체인**의 종점 역할을 한다.

종종 이러한 점이 자바스크립트의 약점이라고 지적되지만, 프로토타입적 상속 모델은 사실 고전적인 방법보다 좀 더 강력한 방법이다. 그 말은, 예를 들자면, 프로토타입적 모델에서 고전적인 방식을 구현하는 건 꽤나 사소한 일이지만, 그 반대는 훨씬 더 어려운 일이기 때문이다.

## 프로토타입 체인을 이용한 상속

### 속성 상속

자바스크립트 객체는 속성을 저장하는 동적인 "가방"과 (**자기만의 속성**이라고 부른다) 프로토타입 객체에 대한 링크를 가진다. 객체의 어떤 속성에 접근하려할 때 그 객체 자체 속성 뿐만 아니라 객체의 프로토타입, 그 프로토타입의 프로토타입 등 프로토타입 체인의 종단에 이를 때까지 그 속성을 탐색한다.

> **Note:** ECMAScript 표준은 `someObject.[[Prototype]]`을 객체 `someObject`의 프로토타입을 지시하도록 명시하였다. ECMAScript 2015부터 `[[Prototype]]`에 조상 {{jsxref("Object.getPrototypeOf()")}}과 {{jsxref("Object.setPrototypeOf()")}}을 이용하여 접근하기 때문이다. 이것은 자바스크립트의 표준은 아니나 많은 브라우저에 구현되어 사실상의 표준이 된 속성 `__proto__`과 동일하다.

아래 코드에는 어떤 속성에 접근 하려할 때 일어나는 상황이다.

```js
// o라는 객체가 있고, 속성 'a' 와 'b'를 갖고 있다고 하자.
let f = function () {
  this.a = 1;
  this.b = 2;
};
let o = new f(); // {a: 1, b: 2}

// f 함수의 prototype 속성 값들을 추가 하자.
f.prototype.b = 3;
f.prototype.c = 4;

// f.prototype = {b: 3, c: 4}; 라고 하지 마라, 해당 코드는 prototype chain 을 망가뜨린다.
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

객체의 속성에 값을 지정하면 "자기만의 속성"이 생긴다. 단, [getter or a setter](/en/JavaScript/Guide/Obsolete_Pages/Creating_New_Objects/Defining_Getters_and_Setters)가 적용되는 속성이 상속되는 경우 예외적인 규칙이 적용된다.

### 메소드 상속

자바스크립트에 "메소드"라는건 없다. 하지만 자바스크립트는 객체의 속성으로 함수를 지정할 수 있고 속성 값을 사용하듯 쓸 수 있다. 속성 값으로 지정한 함수의 상속 역시 위에서 본 속성의 상속과 동일하다. (단 위에서 언급한 "속성의 가려짐" 대신 "_메소드 오버라이딩, method overriding_" 라는 용어를 사용한다)

상속된 함수가 실행 될 때, [`this`](/en/JavaScript/Reference/Operators/this) 라는 변수는 상속된 오브젝트를 가르킨다. 그 함수가 프로토타입의 속성으로 지정되었다고 해도 말이다.

```js
var o = {
  a: 2,
  m: function (b) {
    return this.a + 1;
  },
};

console.log(o.m()); // 3
// o.m을 호출하면 'this' 는 o를 가리킨다.

var p = Object.create(o);
// p 는 프로토타입을 o로 가지는 오브젝트이다.

p.a = 12; // p 에 'a'라는 새로운 속성을 만들었다.
console.log(p.m()); // 13
// p.m이 호출 될 때 'this' 는 'p'를 가리킨다.
// 따라서 o의 함수 m을 상속 받으며,
// 'this.a'는 p.a를 나타내며 p의 개인 속성 'a'가 된다.
```

## Javascript 에서 프로토타입을 사용하는 방법

뒤에서 일어나는 일을 좀 더 자세히 파헤쳐보자.

위에서 언급했듯이, 자바스크립트에서 함수는 속성을 가질 수 있다. 모든 함수에는 `prototype`이라는 특수한 속성이 있다. 아래의 예제 코드는 독립적이라는 것에 유의하자. (아래의 코드 이외에는 웹페이지에 다른 자바스크립트가 없다고 가정하는 것이 좋다.)

최적의 실습을 위해서 콘솔을 열고 "Console" 탭으로 이동하여 아래의 JavaScript 코드를 복사하여 붙여넣은 다음 , 엔터키를 눌러 실행할 것을 적극 권한다. (콘솔은 대부분 웹 브라우저의 Developer Tools에 포함되어있다. 자세한 내용은 [Firefox Developer Tools](/ko/docs/Tools), [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/), [Edge DevTools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide) 에서 확인할 수 있다. )

```
    function doSomething(){}
    console.log( doSomething.prototype );
    // It does not matter how you declare the function, a
    //  function in JavaScript will always have a default
    //  prototype property.
    var doSomething = function(){};
    console.log( doSomething.prototype );
```

위 내용을 토대로, 콘솔을 보면 `doSomething()` 은 기본 `prototype` 속성을 가진다. 코드를 실행한 뒤에 콘솔에서는 다음과 유사한 형태의 객체가 표시되어야한다.

```
{
    constructor: ƒ doSomething(),
    __proto__: {
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

우리는 아래에 보이는 것과 같이 `doSomething()` 프로토타입에 속성을 추가할 수 있다.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

결과:

```
{
    foo: "bar",
    constructor: ƒ doSomething(),
    __proto__: {
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

```
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
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

위에서 본 것과 같이, doSomeInstancing 객체의 `__proto__` 는 doSomething.prototype 이다.
그래서 도대체 `__proto__`는 무엇을 하는것인지 알아보자.
우리가 doSomeInstancing의 속성에 접근할때 브라우저는 우선 doSomeInstancing이 그 속성을 갖고있는지 확인한다.
만약 doSomeInstancing이 속성을 갖고있지 않다면, 브라우저는 doSomeInstancing의 `__proto__`(doSomething.prototype)가 그 속성을 갖고있는지 확인한다.
만약 doSomeInstancing의 `__proto__`가 브라우저가 찾던 속성을 갖고 있다면, doSomething의 `__proto__`가 갖고있는 그 속성을 사용한다.

그렇지 않고, doSomeInstancing의 `__proto__`가 그 속성을 갖고있지 않을때에는
doSomeInstancing의 `__proto__`의 `__proto__`가 그 속성을 갖는지 확인한다.
기본적으로, 어떠한 함수던지 그 함수의 prototype 속성의 `__proto__`는 window\.Object.prototype이다.
그러므로 브라우저는 doSomeInstancing의 `__proto__`의 `__proto__`(doSomething.prototype의 `__proto__`(다시말해, Object.prototype)) 에서 그 속성을 찾아본다.
만약 그 속성을 doSomeInstancing의 `__proto__`의 `__proto__`에서 찾을 수 없다면 그다음엔 doSomeInstancing의 `__proto__`의 `__proto__`의 `__proto__`에서 찾을것이다.
하지만 여기서 문제가 발생한다.
doSomeInstancing의 `__proto__`의 `__proto__`의 `__proto__`는 존재할 수 없다(window\.Object.prototype의 `__proto__`는 null이기 때문).
그제서야, 오직 모든 프로토타입 체인이 검사 되고 브라우저가 더이상 검사할 `__proto__`가 없을때에서야 브라우저는 우리가 찾던 값이 undefined라고 결론짓는다.

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

```
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## 객체를 생성하는 여러 방법과 프로토타입 체인 결과

### 문법 생성자로 객체 생성

```js
var o = { a: 1 };

// o 객체는 프로토타입으로 Object.prototype 을 가진다.
// 이로 인해 o.hasOwnProperty('a') 같은 코드를 사용할 수 있다.
// hasOwnProperty 라는 속성은 Object.prototype 의 속성이다.
// Object.prototype 의 프로토타입은 null 이다.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

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
```

### 생성자를 이용

자바스크립트에서 생성자는 단지 [new 연산자](/en/JavaScript/Reference/Operators/new)를 사용해 함수를 호출하면 된다.

```js
function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function (v) {
    this.vertexes.push(v);
  },
};

var g = new Graph();
// g 'vertexes' 와 'edges'를 속성으로 가지는 객체이다.
// 생성시 g.[[Prototype]]은 Graph.prototype의 값과 같은 값을 가진다.
```

### Object.create 이용

ECMAScript 5는 새로운 방법을 도입했다. [Object.create](/en/JavaScript/Reference/Global_Objects/Object/create)라는 메소드를 호출하여 새로운 객체를 만들 수 있다. 생성된 객체의 프로토타입은 이 메소드의 첫 번째 인수로 지정된다.

```js
var a = { a: 1 };
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (상속됨)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined이다. 왜냐하면 d는 Object.prototype을 상속받지 않기 때문이다.
```

### `class` 키워드 이용

ECMAScript2015에는 몇 가지 키워드가 도입되어 [class](/ko/docs/Web/JavaScript/Reference/Classes)를 구현하였다. 이런 생성 방식은 클래서 기반 언어의 개발자들에게 친숙하게 다가오나 동작 방식이 같지는 않다. 자바스크립트는 여전히 프로토타입 기반으로 남아있다. 새로 도입된 키워드는 {{jsxref("Statements/class", "class")}}, {{jsxref("Classes/constructor", "constructor")}}, {{jsxref("Classes/static", "static")}}, {{jsxref("Classes/extends", "extends")}}, 그리고 {{jsxref("Operators/super", "super")}}가 있다.

```js
"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
```

### 성능

프로토타입 체인에 걸친 속성 검색으로 성능에 나쁜 영향을 줄 수 있으며, 때때로 치명적일 수 있다. 또한 존재하지도 않는 속성에 접근하려는 시도는 항상 모든 프로토타입 체인인 전체를 탐색해서 확인하게 만든다.

객체의 속성에 걸쳐 루프를 수행 하는 경우 프로토타입 체인 전체의 **모든** 열거자 속성에 대하여 적용된다. 객체 개인 속성인지 프로토타입 체인상 어딘가에 있는지 확인하기 위해서는 Object.prototype에서 모든 오브젝트로 상속된 [`hasOwnProperty`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 메소드를 이용할 필요가 있다. 다음 코드를 통하여 구체적인 예를 확인하여 보자.

```js
console.log(g.hasOwnProperty("vertices"));
// true

console.log(g.hasOwnProperty("nope"));
// false

console.log(g.hasOwnProperty("addVertex"));
// false

console.log(g.__proto__.hasOwnProperty("addVertex"));
// true
```

[`hasOwnProperty`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 메소드만이 속성을 확인하고 프로토타입 체인 전체를 훑지 않게 할 수 있다.

참고: [`undefined`](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)인지 여부만 확인하는 것으로는 충분하지 않다. 여전히 속성이 존재할 수도 있는데 단지 그 값에 `undefined`가 할당되어 있을 수도 있기 때문이다.

### 좋지 않은 사례: 기본 프로타입의 확장 변형

Object.prototype 혹은 빌트인 프로토타입의 확장은 종종 이용되지만 오용이다.

이 기법은 Monkey patching으로 불리며 캡슐화를 망가뜨린다. Prototype.js와 같은 유명한 프레임워크에서도 사용되지만, 빌트인 타입에 비표준 기능을 추가하는 것은 좋은 생각이 아니다.

유일하게 좋은 사용 예라면, 새로운 자바스크립트 엔진에 Array.forEach등의 새로운 기능을 추가하면서 빌트인 프로토타입을 확장하는 것 정도다.

## 예

`B는 A를 상속한다`:

```js
function A(a) {
  this.varA = a;
}

// A의 정의에서 this.varA는 항상 A.prototype.varA가 가려버리는데
// prototype에 varA를 다시 넣는 이유는 무엇인가?
A.prototype = {
  varA: null, // 아무것도 안하면서 varA를 쓰는 이유가 있을까?
  // 아마도 숨겨진 클래스의 할당 구조를 최적화 하려는 것인가?
  // https://developers.google.com/speed/articles/optimizing-javascript#Initializing-instance-variables
  // 모든 객체의 varA가 동일하게 초기화 되어야 상기 링크 내용이 유효할 수 있다.
  doSomething: function () {
    // ...
  },
};

function B(a, b) {
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB: {
    value: null,
    enumerable: true,
    configurable: true,
    writable: true,
  },
  doSomething: {
    value: function () {
      // override
      A.prototype.doSomething.apply(this, arguments); // call super
      // ...
    },
    enumerable: true,
    configurable: true,
    writable: true,
  },
});
B.prototype.constructor = B;

var b = new B();
b.doSomething();
```

중요한 점은:

- `.prototype`에 타입이 정의되어 있다.
- `Object.create()`을 이용하여 상속한다.

## `prototype` `그리고 Object.getPrototypeOf`

Java나 C++에 익숙한 개발자는 클래스라는 것도 없고, 모든 것이 동적이고 실행 시 결정되는 자바스크립트의 특징 때문에 어려움을 겪을 수도 있다. 모든 것은 객체이고, 심지의 "class"를 흉내내는 방식도 단지 함수 오브젝트를 이용하는 것 뿐이다.

이미 알아챘겠지만 우리의 함수 A도 특별한 속성 prototype를 가지고 있다. 이 특별한 속성은 자바스크립트의 new 연산자와 함께 쓰인다. 프로토타입 객체는 새로 만들어진 인스턴스의 내부 `[[Prototype]]` 속성에 복사되어 참조된다. 가령, `var a1 = new A()`를 수행할 때, this를 포함하고 있는 함수을 수행하기 전, 메모리에 새로 생성된 객체를 생성한 직후 자바스크립트는 a1.`[[Prototype]] = A.prototype`를 수행한다. 그 인스턴스의 속성에 접근하려 할 때 자바스크립트는 그 객체의 개인 속성인지 우선 확인하고 그렇지 않은 경우에 `[[Prototype]]`에서 찾는다. 이것은 prototype에 정의한 모든 것은 모든 인스턴스가 효과적으로 공유한다는 뜻이며, 심지어 프로토타입의 일부를 나중에 변경하다고 해도 이미 생성되어 있는 인스턴스는 필요한 경우 그 변경 사항에 접근할 수 있다.

위의 예에서, 만일 `var a1 = new A(); var a2 = new A();` 그 후 `a1.doSomething`이 `Object.getPrototypeOf(a1).doSomething`를 가리키게 되는 것은`A.prototype.doSomething`으로 정의한 것과 같게 된다. 즉, `Object.getPrototypeOf(a1).doSomething == Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething`.

요약 하자면, prototype은 타입 정의를 위한 것이고, `Object.getPrototypeOf()`는 모든 인스턴스가 공유한다.

`[[Prototype]]`은 재귀적으로 탐색된다. 즉, `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`,`Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` 등등, 이미 발견했거나 `Object.getPrototypeOf`가 `null`을 반환할 때까지 반복된다.

따라서 다음 호출에 대하여

```js
var o = new Foo();
```

자바스크립트는 실제로 다음 작업을 수행한다.

```js
var o = new Object();
o.[[Prototype]] = Foo.prototype;
Foo.call(o);
```

(혹은 그런 비슷한 작업, 내부 구현은 다를 수 있다) 그리고 나중에 다음을 수행하면

```js
o.someProp;
```

자바스크립트는 o가 속성 someProp을 가졌는지 확인하고, 아니면 `Object.getPrototypeOf(o).someProp`, 또 아니면 `Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp` 등으로 계속 된다.

## 프로토타입 상속의 종류

프로토타입 상속에는 3가지 종류가 있다 : 위임형 상속, 연결형 상속, 함수형 상속.

### 위임형 상속(Delegation inheritance)

위임형 상속에서 프로토타입 객체는 다른 객체의 기반이 된다. 위임 프로토타입을 상속받을 경우 새 객체는 해당 프로토타입에 대한 참조를 가지고 있다.

새 객체의 속성에 접근할 때, 해당 객체가 직접적으로 속성을 소유하고 있는지 먼저 체크한다. 없다면 다음 순서로 `[[Prototype]]`을 체크한다. 이 과정은 프로토타입 체인을 따라서 모든 객체의 프로토타입 체인의 최상위에 있는 객체인 `Object.prototype`에 도달할 때 까지 반복된다.

메소드를 위임 상속할 경우 모든 객체가 각 메소드에에 대해 하나의 코드를 공유하므로 메모리를 절약할 수 있다.

Javascript에서 이를 구현하는 방법은 여러가지가 있는데 ES6에서는 아래와 같은 방식이 흔하다:

```js
class Greeter {
  constructor(name) {
    this.name = name || "John Doe";
  }
  hello() {
    return `Hello, my name is ${this.name}`;
  }
}

const george = new Greeter("George");
const msg = george.hello();
console.log(msg); // Hello, my name is George
```

`Object.create(null)`. 을 통해 프로토타입을 {{jsxref("null")}}로 지정하여 속성 위임 없이 객체를 생성할 수 있다..

이 방법의 큰 단점 중 하나는 상태를 저장하는데 그리 좋은 방법이 아니라는 것이다. 객체나 배열의 상태를 변경하게 되면 같은 프로토타입을 공유하는 모든 객체의 상태가 변경된다.

상태 변경이 전파되는 것을 막으려면 각 객체마다 상태 값의 복사본을 만들어야 한다.

### 연결형 상속(Concatenative inheritance)

연결형 상속은 한 객체의 속성을 다른 객체에 모두 복사함으로써 상속을 구현하는 방법이다.

이 상속법은 Javascript 객체의 동적 확장성을 이용한 방법이다. 객체 복사는 속성의 초기값을 저장하기 위한 좋은 방법이다: 이 방식은 {{jsxref("Object.assign()")}}을 통해 구현하는 것이 보통이며 ES6 이전에 Lodash, Underscore, jQuery등의 라이브러리들이 `.extend()` 와 비슷한 메소드로 제공한 방법이다.

```js
const proto = {
  hello: function hello() {
    return `Hello, my name is ${this.name}`;
  },
};

const george = Object.assign({}, proto, { name: "George" });
const msg = george.hello();
console.log(msg); // Hello, my name is George
```

연결형 상속은 매우 좋은 방법이며 클로져와 같이 사용한다면 훨씬 효과적인 상속 방식입니다..

### 함수형 상속(Functional inheritance)

함수형 상속(Functional inheritance)이라는 단어는 Douglas Crockford가 자신의 저서 "JavaScript: The Good Parts"에서 창조한 단어이다. 이 방법은 새 속성들을 연결형 상속으로 쌓되 상속 기능을 Factory 함수로 만들어 사용하는 방식이다.

기존의 객체를 확장하는데 쓰이는 함수를 일반적으로 믹스인 함수라 칭한다. 객체 확장에 함수를 사용하는 가장 큰 이점은 Private Data를 클로져를 통해 캡슐화 시킬 수 있다는 점이다.

다르게 말하자면 Private 상태를 지정할 수 있다는 의미이다.

특정 함수를 통할 필요 없이 public 접근이 가능한 속성에 대해 접근 제한을 거는 것은 문제가 있다. 따라서 private 클로져에 속성 값을 숨겨야 하며 이는 아래와 같이 구현한다:

```js
// import Events from 'eventemitter3';

const rawMixin = function () {
  const attrs = {};
  return Object.assign(
    this,
    {
      set(name, value) {
        attrs[name] = value;
        this.emit("change", {
          prop: name,
          value: value,
        });
      },
      get(name) {
        return attrs[name];
      },
    },
    Events.prototype,
  );
};

const mixinModel = (target) => rawMixin.call(target);
const george = { name: "george" };
const model = mixinModel(george);
model.on("change", (data) => console.log(data));
model.set("name", "Sam");
/*
{
  prop: 'name',
  value: 'Sam'
}
*/
```

`attrs` 을 public 속성에서 private 영역으로 옮겨서 public API를 통한 접근을 차단할 수 있다. // 접근할 수 있는 유일한 방법은 Privileged 메소드 뿐이다. Privileged 메소드는 클로져 영역에 정의된 함수로 private data에 접근 가능한 함수들을 일컫는다.

위 예제를 보면 믹스인 함수 `rawMixin()`.에 대한 래퍼로 `mixinModel()` 을 선언한 것을 알 수 있다. 이는 예제에서 {{jsxref("Function.prototype.call()")}} 을 사용했듯이 함수 내에서 `this`의 값을 설정해야 하기 때문이다. Wrapper를 생략하고 호출자가 알아서 하도록 놔둘 수 있지만 그럴 경우 혼동될 가능성이 있다.

## 결론

복잡한 코드를 작성하여 이용하기 전에 프로토타입 기반의 상속 모델을 이해하는 것이 **중요하다**. 또한 프로토타입 체인의 길이는 성능을 저해하지 않도록 줄이는 방법을 고안해야 한다. 또한 빌트인 프로토타입은 새로운 자바스크립트 기능과 호환성을 갖기 위한 이유가 아닌 이상 **절대** 확장해서는 안된다.
