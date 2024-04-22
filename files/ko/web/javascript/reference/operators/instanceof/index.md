---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
---

{{jsSidebar("Operators")}}

**`instanceof` 연산자**는 생성자의 `prototype` 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별합니다.

{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}

## 구문

```js
object instanceof constructor;
```

### 매개변수

- `object`
  - : 판별할 객체.
- `constructor`
  - : 판별 목표 함수.

## 설명

`instanceof` 연산자는 `object`의 프로토타입 체인에 `constructor.prototype`이 존재하는지 판별합니다.

```js
// 생성자 정의
function C() {}
function D() {}

var o = new C();

// true, 왜냐하면 Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, 왜냐하면 D.prototype이 o 객체의 프로토타입 체인에 없음
o instanceof D;

o instanceof Object; // true, 왜냐하면
C.prototype instanceof Object; // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, 왜냐하면 C.prototype이
// 더 이상 o의 프로토타입 체인에 없음
o instanceof C;

D.prototype = new C(); // C를 D의 [[Prototype]] 링크로 추가
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true, 왜냐하면 이제 C.prototype이 o3의 프로토타입 체인에 존재
```

`instanceof` 의 값은 생성자 `prototype` 프로퍼티의 변화에 따라 바뀔수 있으며, `Object.setPrototypeOf`의 사용함에 따라서도 바뀔 수 있음에 주의하세요. 또한 non-standard의 `__proto__` 슈도-프로퍼티도 사용할 수 있도록 만들어 줍니다.

### `instanceof` 와 multiple context (예. 프레임 또는 창)

다른 스코프는 다른 실행 환경을 가집니다. 이것은 다른 스코프는 다른 고정된 요소들(다른 전역 오브젝트, 다른 생성자들 등)을 가지고 있음을 의미합니다. 이 사실은 예상치 못한 결과를 가져올 수도 있습니다. 예를 들면, \[] `instanceof window.frames[0].Array`는 `false`를 리턴할 것입니다. 왜냐하면, `Array.prototype !== window.frames[0].Array` 이며, arrays 는 상위로부터 상속받기 때문입니다. 이것은 처음에는 말이 되지 않을 수도 있습니다. 하지만, 스크립트에서 여러 프레임이나 창을 다루며, 객체를 함수를 통하여 하나의 컨텍스트에서 다른 컨텍스트로 오브젝트를 넘기게 된다면, 이건 충분히 일어날 수 있는 일이며, 아주 큰 이슈가 될 것입니다. 예를 들어, 주어진 오브젝트가 실제로 `Array.isArray(myObj)`를 사용한 Array인지 안전하게 확인 할 수 있습니다.

> **Note:** XPCOM `instanceof` 을 사용하는 코드에서는 특별한 효과를 가집니다. : `obj instanceof xpcomInterface` (예. `Components.interfaces.nsIFile`)가 `obj.QueryInterface(xpcomInterface)`를 호출하고, 만약 QueryInterface 가 성공하면 `true` 를 리턴합니다. 이 호출의 부가 효과로는 `obj` 에서 성공적인 `instanceof` 테스트 후에 `xpcomInterface`'s의 프로퍼티를 사용할 수 있습니다. 스탠다드 JavaScript 전역속성들과는 달리, 테스트 `obj instanceof xpcomInterface`는 `obj`가 다른 스코프에 있더라도 작동합니다.

## 예제

### `String`과 `Date`는 타입 `Object`이며, 예외적인 경우임을 입증하기

아래의 코드는 `instanceof` 를 `String` 과 `Date` 오브젝트도 타입 `Object`임을 확인하기 위해 사용합니다.(이 오브젝트들은 `Object` 로부터 파생되었습니다.)

그러나, 여기서 오브젝트 리터럴 노테이션으로 생성된 오브젝트는 예외적입니다. : 비록 프로토 타입이 정의되지 않았지만, `instanceof Object` 는 `true`를 리턴합니다.

```js
var simpleStr = "This is a simple string";
var myString = new String();
var newStr = new String("String created with constructor");
var myDate = new Date();
var myObj = {};

simpleStr instanceof String; // returns false, prototype chain을 확인하고, undefined를 찾는다.
myString instanceof String; // returns true
newStr instanceof String; // returns true
myString instanceof Object; // returns true

myObj instanceof Object; // returns true, undefined prototype 임에도 불구하고 true.
({}) instanceof Object; // returns true, 위의 경우와 동일.

myString instanceof Date; // returns false

myDate instanceof Date; // returns true
myDate instanceof Object; // returns true
myDate instanceof String; // returns false
```

### `mycar`는 타입 `Car`와 타입 `Object`임을 입증하기

다음의 코드는 `Car` 오브젝트 타입과 그 오브젝트 타입의 인스턴스 `mycar` 를 생성합니다. `instanceof` 연산자는 `mycar` 오브젝트는 타입 `Car` 와 타입 `Object` 라는 것은 보여줍니다.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998);
var a = mycar instanceof Car; // returns true
var b = mycar instanceof Object; // returns true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Symbol.hasInstance")}}
