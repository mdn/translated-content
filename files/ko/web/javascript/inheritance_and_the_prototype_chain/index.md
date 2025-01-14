---
title: 상속과 프로토타입
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: 7a58753bcf70d274dfe3a0385e4c3861d0df3dd4
---

{{jsSidebar("Advanced")}}

JavaScript는 동적 타입이고 정적 타입이 없기 때문에, (Java 또는 C++와 같은) 클래스 기반 언어에 경험이 있는 개발자에게는 약간 혼란스럽습니다.

상속과 관련하여, JavaScript에는 객체라는 하나의 구조만 있습니다. 각 객체에는 **프로토타입**이라는 다른 객체에 대한 링크를 보유하는 비공개 속성이 있습니다. 그 프로토타입 객체도 자신만의 프로토타입을 가지고 있으며, 프로토타입으로 `null`을 가진 객체에 도달할 때까지 이 연결은 계속됩니다. 정의에 따르면 `null`에는 프로토타입이 없으며, 이 **프로토타입 체인**에서 최종 링크 역할을 합니다. 프로토타입 체인의 모든 구성요소들을 변경하거나 런타임 시 프로토타입을 교체할 수도 있으므로 JavaScript에는 [정적 디스패칭(static dispatching)](https://en.wikipedia.org/wiki/Static_dispatch)과 같은 개념이 없습니다.

이러한 혼란은 종종 JavaScript의 약점 중 하나로 생각되어지지만, 프로토타입 상속 모델 자체는 사실 고전적인 모델보다 더 강력합니다. 예를 들어, [classes](/ko/docs/Web/JavaScript/Reference/Classes)가 구현되는 방식인 프로토타입 모델 위에 고전적인 모델을 구축하는 것은 매우 간단합니다.

클래스는 현재 널리 채택되어 JavaScript의 새로운 패러다임이 되었지만, 클래스는 새로운 상속 패턴을 가져오지 않습니다. 클래스는 대부분의 프로토타입 메커니즘을 추상화하지만, 내부에서 프로토타입이 작동하는 방식을 이해하는 것은 여전히 유용합니다.

## 프로토타입 체인을 이용한 상속

### 속성 상속

JavaScript 객체는 속성을 저장하는 동적인 "가방"과 (**자기만의 속성**이라고 부릅니다) 프로토타입 객체에 대한 링크를 가집니다. 객체의 어떤 속성에 접근하려할 때, 그 객체 자체 속성 뿐만 아니라 객체의 프로토타입, 그 프로토타입의 프로토타입 등 프로토타입 체인의 종단에 이를 때까지 그 속성을 탐색합니다.

> [!NOTE]
> ECMAScript 표준은 `someObject.[[Prototype]]`을 객체 `someObject`의 프로토타입을 지시하도록 명시하였습니다. `[[Prototype]]` 내부 슬롯은 각각 {{jsxref("Object.getPrototypeOf()")}}과 {{jsxref("Object.setPrototypeOf()")}} 함수로 접근하고 수정할 수 있습니다. 이것은 JavaScript의 표준은 아니나 많은 브라우저에 구현되어 사실상의 표준이 된 속성 [`__proto__`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)과 동일합니다. 간결함을 유지하고 혼동을 방지하기 위해 표기법에서 `obj.__proto__`를 사용하지 않고, `obj.[[Prototype]]`을 사용합니다. 이것은 `Object.getPrototypeOf(obj)`에 해당합니다.
>
> 생성자로 사용될 때 주어진 함수에 의해 생성된 객체의 모든 `인스턴스`에 `[[Prototype]]`이 할당되도록 지정하는 함수의 `func.prototype` 속성과 혼동해서는 안 됩니다. [나중 섹션](#constructors)에서 생성자 함수의 `prototype` 속성에 대해 논의할 것입니다.

객체의 `[[Prototype]]`을 지정하는 방법에는 여러 가지가 있으며, [나중 섹션](#different_ways_of_creating_and_mutating_prototype_chains)에 나열되어 있습니다. 지금은, 설명을 위해 [`__proto__` 문법](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter)을 사용합니다. `{ __proto__: ... }` 구문이 표준이며, 더 이상 사용되지 않는 `obj.__proto__` 접근자와 다르다는 점을 참고해주십시오.
`{ a: 1, b: 2, __proto__: c }`와 같은 객체 리터럴에서, 값 `c`(`null` 또는 다른 객체여야 합니다)는 해당 객체의 `[[Prototype]]`이 됩니다. 반면, `a` 및 `b`와 같은 다른 키는 해당 객체의 *자체 속성*이 됩니다. `[[Prototype]]`은 객체의 "내부 속성"일 뿐이므로, 이 구문은 매우 자연스럽게 읽히는 부분입니다.

다음은 속성에 접근하려고 할 때 발생하는 상황입니다.

```js
const o = {
  a: 1,
  b: 2,
  // __proto__는 [[Prototype]]을 설정합니다.
  // 여기에 다른 객체 리터럴로 지정되어 있습니다.
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]]은 속성 'b'와 'c'를 가지고 있습니다.
// o.[[Prototype]].[[Prototype]] 은 Object.prototype 입니다(무엇을 의미하는지 나중에 설명하겠습니다).
// 마지막으로, o.[[Prototype]].[[Prototype]].[[Prototype]]은 null입니다.
// null은 프로토타입의 종단을 말하며 정의에 의해서 추가 [[Prototype]]은 없습니다.
// 그러면 전체 프로토타입 체인은 다음과 같습니다.
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// o에 'a' 자체 소유 속성이 있습니까? 네, 그 값은 1입니다.

console.log(o.b); // 2
// o에 'b'라는 자체 소유 속성이 있습니까? 네, 그 값은 2입니다.
// 프로토타입 역시 'b'라는 속성을 가지지만 이 값은 쓰이지 않습니다. 이것을 "속성의 가려짐(property shadowing)" 이라고 부릅니다.

console.log(o.c); // 4
// o는 'c'라는 속성을 소유하나요? 아니요, 프로토타입을 확인해보자.
// o.[[Prototype]]은 'c'라는 속성을 소유하나요? 네, 값은 4이다.

console.log(o.d); // undefined
// o에 'd' 자체 속성이 있습니까? 아니요, 프로토타입을 확인하세요.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]]에 'd' 자체 소유 속성이 있습니까? 아니요, 프로토타입을 확인하세요.
// o.[[Prototype]].[[Prototype]]은 Object.prototype이고,
// 기본적으로 'd' 속성이 없습니다. 프로토타입을 확인하세요.
// o.[[Prototype]].[[Prototype]].[[Prototype]]은 null, 검색을 중지합니다,
// 속성을 찾을 수 없어서, undefined를 반환합니다.
```

객체의 속성에 값을 지정하면 "자기만의 속성"이 생성됩니다. 단, [getter or setter](/ko/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)가 적용되는 속성이 상속되는 경우 예외적인 규칙이 적용됩니다.

마찬가지로, 더 긴 프로토타입 체인을 만들 수 있으며, 모든 체인에서 속성을 찾을 수 있습니다.

```js
const o = {
  a: 1,
  b: 2,
  // __proto__는 [[Prototype]]을 설정합니다.
  // 여기에 다른 객체 리터럴로 지정되어 있습니다.
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

### 메서드 상속

JavaScript에는 클래스 기반 언어에서 정의하는 형식의 "[메서드](/ko/docs/Glossary/Method)"가 없습니다. JavaScript에서는 모든 함수를 속성의 형태로 객체에 추가할 수 있습니다.
상속된 함수는 위에 표시된 "속성의 가려짐"을 포함하여 다른 모든 속성처럼 작동합니다(단, 위에서 언급한 "속성의 가려짐" 대신 "메소드 오버라이딩, method overriding" 라는 용어를 사용한다).

상속된 함수가 실행 될 때, [`this`](/ko/docs/Web/JavaScript/Reference/Operators/this) 값은 함수가 자체 속성인 프로토타입 객체가 아니라 상속 객체를 가리킵니다.

```js
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// 이 경우 parent.method를 호출할 때, 'this'는 부모를 가리킵니다.

// 자식은 부모로부터 상속받는 객체입니다.
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// child.method가 호출되면, 'this'는 자식을 가리킵니다.
// 자식이 부모의 메서드를 상속받을 때,
// 자식에서 'value' 속성을 찾습니다. 그러나 자식은 'value'라는 자체 속성이 없기 때문에,
// 해당 속성은 [[Prototype]]에서 찾을 수 있으며, 이는 parent.value입니다.

child.value = 4; // 자식의 속성 'value'에 값 4를 할당합니다.
// 이 코드는 부모의 'value' 속성을 숨깁니다.
// 자식 객체는 이제 다음과 같습니다.
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Since child now has the 'value' property, 'this.value' means
// 자식은 이제 'value' 속성을 가지므로 'this.value'는 child.value를 의미합니다.
```

## 생성자

모든 인스턴스가 동일한 몇가지 동일한 속성을 공유하는 경우, 프로토타입의 강점이 드러납니다. 이는 특히 메서드를 공유할 경우 더욱 두드러집니다. 예로, `getValue` 함수를 통해 접근할 수 있는 값을 포함하는 '상자' 객체를 여럿 만드는 경우를 생각해봅시다. 단순한 구현은 다음과 같습니다.

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

각 인스턴스에는 중복되고 불필요한 작업을 수행하는 고유한 함수 속성이 있기 때문에, 기대에 미치지 못하는 코드가 됩니다. 대신에, `getValue`를 모든 상자의 `[[Prototype]]`으로 이동할 수 있습니다.

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

이렇게 하면, 모든 상자의 `getValue` 메서드가 동일한 함수를 참조하므로, 메모리의 사용량이 줄어듭니다. 그러나 모든 객체 생성에 대해 `__proto__`를 수동으로 바인딩하는 것은 여전히 매우 불편합니다. 이것은 생성된 모든 객체에 대해 `[[Prototype]]`을 자동으로 설정하는 constructor 함수를 사용하는 경우입니다. 생성자는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로 호출되는 함수입니다.

```js
// 생성자 함수
function Box(value) {
  this.value = value;
}

// Box() 생성자에서 생성된 모든 속성
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
```

`new Box(1)`이 `Box` 생성자 함수에서 생성된 "인스턴스"라고 말할 수 있는데, `Box.prototype`은 이전에 생성한 `boxPrototype` 객체와 크게 다르지 않습니다. `Box.prototype`은 그냥 일반 객체입니다. 생성자 함수에서 생성된 모든 인스턴스는 자동으로 생성자의 [`prototype`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function) 속성을 `[[Prototype]]`으로 갖게 됩니다. 즉, `Object.getPrototypeOf(new Box()) === Box.prototype`입니다. 기본적으로 `Constructor.prototype`에는 생성자 함수 자체를 참조하는 [`constructor`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 속성이 하나 있습니다. 즉, `Box.prototype.constructor === Box`이기 때문에, 모든 인스턴스에서 원래 생성자에 접근할 수 있게 됩니다.

> [!NOTE]
> 생성자 함수에서 반환된 값이 원시 값이 아니라면, 해당 값은 `new` 표현식의 결과가 됩니다. 이 경우, `[[Prototype]]`이 올바르게 바인딩되지 않을 수 있지만, 실제로는 많이 발생하지 않습니다.

위 생성자 함수는 [classes](/ko/docs/Web/JavaScript/Reference/Classes)에서 다음과 같이 다시 작성할 수 있습니다.

```js
class Box {
  constructor(value) {
    this.value = value;
  }

  // 메서드는 Box.prototype에 생성됩니다.
  getValue() {
    return this.value;
  }
}
```

클래스는 생성자 함수보다 문법적인 설탕입니다. 즉, 여전히 `Box.prototype`을 조작하여 모든 인스턴스의 동작을 변경할 수 있습니다. 그러나 클래스는 기본 프로토타입 메커니즘에 대한 추상화로 설계되었기 때문에, 이 자습서에서는 더 가벼운 생성자 함수 구문을 사용하여 프로토타입이 작동하는 방식을 보겠습니다.

`Box.prototype`은 모든 인스턴스의 `[[Prototype]]`과 동일한 객체를 참조하기 때문에, `Box.prototype`을 변경하여 모든 인스턴스의 동작을 변경할 수 있습니다.

```js
function Box(value) {
  this.value = value;
}
Box.prototype.getValue = function () {
  return this.value;
};
const box = new Box(1);

// 인스턴스가 이미 생성된 후, `Box.prototype`을 변경합니다.
Box.prototype.getValue = function () {
  return this.value + 1;
};
box.getValue(); // 2
```

결과적으로, 재할당 (`Constructor.prototype` (`Constructor.prototype = ...`))은 두 가지 이유로 나쁜 생각입니다.

- 재할당 전에 생성된 인스턴스의 `[[Prototype]]`은 이제 재할당 후 생성된 인스턴스의 `[[Prototype]]`과 다른 객체를 참조합니다. 하나의 `[[Prototype]]`을 변경해도 더 이상 다른 객체가 변경되지 않습니다.
- `constructor` 속성을 수동으로 재설정하지 않는 한, `instance.contructor`에서 더 이상 생성자 함수를 추적할 수 없어 동작 방식을 예상하기 어려워집니다. 일부 기본 제공 연산은 `constructor` 속성도 읽으며 설정되지 않은 경우, 예상대로 작동하지 않을 수 있습니다.

`Constructor.prototype`은 인스턴스를 구성할 때만 유용합니다. 이는 `Function.prototype` 생성자 함수의 자체 소유의 프로토타입인 `Constructor.[[Prototype]]`과 아무 관련이 없습니다. 즉, `Object.getPrototypeOf(Constructor) === Function.prototype`입니다.

### 리터럴의 암시적 생성자

JavaScript의 일부 리터럴 구문은 암시적으로 `[[Prototype]]`을 설정하는 인스턴스를 생성합니다. 예를 들어,

```js
// 객체 리터럴 (`__proto__` 키 없음)은 자동으로 `[[Prototype]]`으로 `Object.prototype`을 갖습니다.
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // true

// 배열 리터럴은 자동으로 `Array.prototype`을 `[[Prototype]]`으로 갖습니다.
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // true

// RegExp 리터럴은 자동으로 `RegExp.prototype`을 `[[Prototype]]`으로 갖습니다.
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // true
```

생성자 형태를 통해, "문법 설탕을 제거"할 수 있습니다.

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

예를 들어, [`map()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)과 같은 "배열 메서드"는 단순히 `Array.prototype`에 정의된 메서드입니다. 모든 배열 인스턴스에서 자동으로 사용할 수 있습니다.

> [!WARNING]
> 널리 알려진 한 가지 잘못된 기능이 있습니다. 바로 `Object.prototype` 또는 다른 내장 프로토타입 중 하나를 확장하는 것입니다. 이 잘못된 기능의 예는 `Array.prototype.myMethod = function () {...}`를 정의한 다음 모든 배열 인스턴스에서 `myMethod`를 사용하는 것입니다.
>
> 이러한 잘못된 기능을 원숭이 패칭(monkey patching)이라고 합니다. 원숭이 패칭을 하게 되면, 상위 호환성에 문제가 발생합니다. 언어가 나중에 이 메서드를 추가하지만 다른 서명을 사용하면, 코드가 깨질 수 있기 대문입니다. 이로 인해, [SmooshGate](https://developer.chrome.com/blog/smooshgate/)와 같은 사고가 발생했으며, JavaScript는 "웹을 중단하지 않으려" 시도하므로 언어가 발전하는 데 있어 큰 장애물이 될 수 있습니다.
>
> 내장 제공 프로토타입을 확장해도 좋은 `유일한` 경우는 최신 JavaScript 엔진의 기능을 이전 버전에서도 사용할 수 있게 해줄 때입니다(backport). 예로,`Array.prototype.forEach`가 있습니다.

흥미롭게도, 일부 내장 생성자의 `prototype` 속성은 역사적인 이유로 해당 인스턴스 자체입니다. 예를 들어, `Number.prototype`은 숫자 0이고, `Array.prototype`은 빈 배열이고, `RegExp.prototype`은 `/(?:)/`입니다.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype은 자체로 프로그램에 아무 작업도 수행하지 말라고 지시하는 (no-operation, no-op) 함수입니다.
```

그러나, 이것은 사용자 정의 생성자나 `Map`과 같은 최신 생성자의 경우에는 해당되지 않습니다.

```js
Map.prototype.get(1);
// Uncaught TypeError: 호환되지 않는 Map.prototype에서 호출된 get 메서드
```

### 더 긴 상속 체인 구축

`Constructor.prototype` 속성은 `Constructor.prototype`의 자체 `[[Prototype]]`을 포함하여, 생성자 인스턴스의 `[[Prototype]]`이 됩니다. 기본적으로 `Constructor.prototype`은 일반 객체입니다. 즉, `Object.getPrototypeOf(Constructor.prototype) === Object.prototype` 입니다. 유일한 예외는 `Object.prototype` 자체이며, `[[Prototype]]`은 `null`입니다. 즉, `Object.getPrototypeOf(Object.prototype) === null`입니다. 따라서, 일반적인 생성자는 다음 프로토타입 체인을 빌드합니다.

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

더 긴 프로토타입 체인을 구축하려면, [`Object.setPrototypeOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) 함수를 통해 `Constructor.prototype`의 `[[Prototype]]`을 설정할 수 있습니다.

```js
function Base() {}
function Derived() {}
// `Derived.prototype`의 `[[Prototype]]`을 `Base.prototype`으로 설정합니다.
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

클래스 문법 용어로, 이는 [`extends`](/ko/docs/Web/JavaScript/Reference/Classes/extends) 구문을 사용하는 것과 동일합니다.

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

상속 체인을 구축하기 위해, {{jsxref("Object.create()")}}를 사용하는 일부 레거시 코드를 볼 수도 있습니다. 그러나 이것은 `prototype` 속성을 재할당하고 [`constructor`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 속성을 제거하기 때문에, 오류가 더 많이 발생할 수 있습니다. 생성자가 아직 인스턴스를 생성하지 않은 경우에는 성능에서 얻는 이점 또한 체감하기 어렵습니다.

```js example-bad
function Base() {}
function Derived() {}
//  `[[Prototype]]`으로 `Base.prototype`을 사용하여 `Derived.prototype을 새로운 객체에 다시 할당합니다.
// 이렇게 하지 마세요, 대신 `Object.setPrototypeOf`를 사용하여 변경하세요.

Derived.prototype = Object.create(Base.prototype);
```

### 프로토타입 심층 분석

뒤에서 어떠한 일이 일어나는지 좀 더 자세히 살펴보겠습니다.

위에서 언급한 것처럼, JavaScript에서 함수는 속성을 가질 수 있습니다. 모든 함수에는 `prototype`이라는 특수한 속성이 있습니다. 아래의 예제 코드는 독립적이라는 것에 유의하세요(아래의 코드 이외에는 웹페이지에 다른 JavaScript가 없다고 가정해도 문제 없습니다).

최적의 실습을 위해, 콘솔을 열고 "console" 탭으로 이동하여 아래의 JavaScript 코드를 복사하여 붙여넣고, 엔터/Return 키를 눌러서 실행하는 것이 좋습니다(콘솔은 대부분 웹 브라우저의 개발자 도구에 포함되어 있습니다. 자세한 내용은 [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/) 및 [Edge DevTools](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/)을 참고하세요).

```js
function doSomething() {}
console.log(doSomething.prototype);
// 함수 선언 방법은 중요하지 않습니다. JavaScript의 함수는 항상 기본 프로토타입 속성을 갖습니다.
// 한 가지 예외가 있습니다. 화살표 함수에는 기본 프로토타입 속성이 없습니다.
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);
```

위 내용을 토대로, 콘솔을 보면 `doSomething()` 은 기본 `prototype` 속성을 가지고 있습니다. 코드를 실행한 뒤에 콘솔에서는 다음과 유사한 형태의 객체가 표시되어야 합니다.

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

> [!NOTE]
> Chrome 콘솔은 `[[Prototype]]`을 사용하여, 명세의 용어에 따라 객체의 프로토타입을 나타냅니다. Firefox는 `<prototype>`을 사용하는데, 일관성을 위해 `[[Prototype]]`을 사용합니다.

아래와 같이, `doSomething()`의 프로토타입에 속성을 추가할 수 있습니다.

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

이제 `new` 연산자를 사용해서 프로토타입 기반의 `doSomething()` 인스턴스를 생성할 수 있습니다. new 연산자를 사용하려면 `new` 접두어를 제외하고 일반적으로 함수를 호출하세요. `new` 연산자로 함수를 호출하면 해당 함수의 인스턴스 객체를 반환받습니다. 그러면 속성들을 이 객체에 추가할 수 있습니다.

다음의 코드를 실행해봅시다.

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // 프로토타입에 속성 추가
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // 객체에 속성 추가
console.log(doSomeInstancing);
```

실행한 후에는 결과는 아래와 비슷할 겁니다.

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

위에서 볼 수 있듯이, `doSomeInstancing`의 `[[Prototype]]`은 `doSomething.prototype`입니다. 그러나 이것은 어떤 역할을 하나요? `doSomeInstancing`의 속성에 접근하면 런타임은 먼저 `doSomeInstancing`에 해당 속성이 있는지 확인합니다.

`doSomeInstancing`에 속성이 없으면, 런타임은 `doSomeInstancing.[[Prototype]]` (`doSomething.prototype`)에서 속성을 찾습니다. `doSomeInstancing.[[Prototype]]`에 찾고 있는 속성이 있으면 `doSomeInstancing.[[Prototype]]`의 해당 속성이 사용됩니다.

그렇지 않고, `doSomeInstancing.[[Prototype]]`에 속성이 없으면, `doSomeInstancing.[[Prototype]].[[Prototype]]`에서 속성을 확인합니다. 기본적으로, 함수의 `prototype` 속성 중 `[[Prototype]]`은 `Object.prototype`입니다. 따라서, `doSomeInstancing.[[Prototype]].[[Prototype]]` (`doSomething.prototype.[[Prototype]]`(`Object.prototype`)) 은 검색 중인 속성을 찾습니다.

속성이 `doSomeInstancing.[[Prototype]].[[Prototype]]`에 없으면, `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]`을 통해 찾습니다. 그러나, `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]`이 존재하지 않는 문제가 있는데, 그 이유는 `Object.prototype.[[Prototype]]`이 `null`이기 때문입니다. 그런 다음, `[[Prototype]]`의 전체 프로토타입 체인을 살펴본 후, 런타임은 속성이 존재하지 않는다고 주장하고 속성의 값이 `undefined`이라고 결정합니다.

콘솔에 코드를 추가로 입력해 봅시다.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:     ", doSomeInstancing.prop);
console.log("doSomeInstancing.foo:      ", doSomeInstancing.foo);
console.log("doSomething.prop:          ", doSomething.prop);
console.log("doSomething.foo:           ", doSomething.foo);
console.log("doSomething.prototype.prop:", doSomething.prototype.prop);
console.log("doSomething.prototype.foo: ", doSomething.prototype.foo);
```

코드의 결과는 아래와 같습니다.

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## 프로토타입 체인을 만들고 변경하는 다양한 방법

객체를 생성하고 프로토타입 체인을 변경하는 다양한 방법을 만나보았습니다. 각 접근 방식의 장단점을 비교하여, 다양한 방식을 체계적으로 요약합니다.

### 문법 생성자로 객체 생성

```js
const o = { a: 1 };
// 새롭게 만들어진 각체 o는 Object.prototype을 [[Prototype]]으로 가지고 있습니다.
// Object.prototype의 프로토타입은 null 입니다.
// o ---> Object.prototype ---> null

const b = ["yo", "whadup", "?"];
// Array.prototype을 상속받은 배열도 마찬가지 입니다.
// (이번에는 indexOf, forEach 등의 메소드를 가집니다)
// 프로토타입 체인은 다음과 같습니다.
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
// 함수는 Function.prototype 을 상속받습니다.
// (이 프로토타입은 call, bind 같은 메소드를 가집니다).
// f ---> Function.prototype ---> Object.prototype ---> null

const p = { b: 2, __proto__: o };

// 새로 생성된 객체의 [[Prototype]]이 __proto__  리터럴 속성을 통해 다른 객체를 가리키도록 할 수 있습니다.
// (Object.prototype.__proto__ 접근자와 혼동하지 마세요).
// p ---> o ---> Object.prototype ---> null
```

<table class="standard-table">
  <caption>
    <a href="/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer">객체 초기자</a>에서 <code>__proto__</code> 키 사용의 장점과 단점
  </caption>
  <tbody>
    <tr>
      <th scope="row">장점</th>
      <td>
        모든 최신 엔진에서 지원됩니다. 객체가 아닌 것을 <code>__proto__</code>키로 지정하면 예외를 발생시키지 않고 조용히 실패합니다. {{jsxref("Object/proto", "Object.prototype.__proto__")}} 설정자와 반대로, 객체 리터럴 초기자의 <code>__proto__</code>가 표준화되고 최적화되었으며 {{jsxref("Object.create")}}보다 성능이 더 뛰어날 수 있습니다. 객체 생성 시 추가 자체 속성을 선언하는 것이 {{jsxref("Object.create")}}보다 편리합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">단점</th>
      <td>
        IE10 이하에서는 지원하지 않습니다. 차이점을 모르는 사람들이 {{jsxref("Object/proto", "Object.prototype.__proto__")}}와 혼동하기 쉽습니다.
      </td>
    </tr>
  </tbody>
</table>

### 생성자 함수를 이용

JavaScript에서 생성자는 단지 [new 연산자](/en-US/JavaScript/Reference/Operators/new)를 사용해 함수를 호출하면 된다.

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g는 자체 속성으로 'vertices' 와 'edges'를 가지는 객체이다.
// g.[[Prototype]]은 new Graph()가 실행될 때 Graph.prototype의 값이 됩니다.
```

<table class="standard-table">
  <caption>
    생성자 함수 사용의 장점과 단점
  </caption>
  <tbody>
    <tr>
      <th scope="row">장점</th>
      <td>
        모든 엔진에서 지원합니다(IE 5.5까지도 지원). 또한, 매우 빠르고, 표준에 따르고, JIT 최적화가 가능합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">단점</th>
      <td>
        <ul>
          <li>이 방법을 사용하기 위해서는, 해당 함수를 초기화해야 합니다. 이 초기화 중에 생성자는 각각의 객체마다 생성해야 하는 고유한 정보를 저장할 수 있습니다. 이 고유한 정보는 한 번만 생성되고, 잠재적으로 문제를 발생시킬 수 있습니다.</li>
          <li>생성자의 초기화는 원치 않는 메서드를 객체에 넣을 수 있습니다.</li>
        </ul>
        <p>둘 다 실제로는 일반적으로 문제가 되지 않습니다.</p>
      </td>
    </tr>
  </tbody>
</table>

### Object.create 이용

{{jsxref("Object.create()")}}을 호출하면 새로운 객체가 생성됩니다. 이 객체의 `[[Prototype]]`은 함수의 첫 번째 인수입니다.

```js
const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null (d는 프로토타입으로 직접 null을 갖는 객체입니다)
console.log(d.hasOwnProperty);
// undefined, d는 Object.prototype에서 상속받지 않기 때문입니다.
```

<table class="standard-table">
  <caption>
    {{jsxref("Object.create")}}의 장점과 단점
  </caption>
  <tbody>
    <tr>
      <th scope="row">장점</th>
      <td>
        모든 최신 엔진을 지원합니다. 생성 시 객체의 <code>[[Prototype]]</code>을 직접 설정할 수 있으므로, 런타임에서 객체를 더욱 최적화할 수 있습니다. 또한 <code>Object.create(null)</code>를 사용하여 프로토타입 없이 객체를 생성할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">단점</th>
      <td>
        IE8 이하에서는 지원하지 않습니다. 그러나 Microsoft는 IE8 이하를 실행하는 시스템에 대한 확장 지원을 중단했기 때문에 대부분의 응용 프로그램에서는 문제가 되지 않습니다. 또한, 두 번째 인수를 사용하는 경우 느린 객체 초기화로 인해 성능이 저하될 수 있습니다. 각 객체 설명자 속성에는 자체적으로 구분된 설명자 객체가 있기 때문입니다. 객체 형태를 가지는 수십만 개의 객체 설명자를 처리할 때, 지연 시간이 심각한 문제가 될 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

### class를 이용하는 방법

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
    클래스의 장점과 단점
  </caption>
  <tbody>
    <tr>
      <th scope="row">장점</th>
      <td>
        모든 최신 엔진에서 지원됩니다. 매우 높은 가독성과 유지 보수성. <a href="/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields">비공개 속성</a>은 프로토타입 상속에서 자잘한 대체가 없는 기능입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">단점</th>
      <td>
        특히 비공개 속성이 있는 클래스는 기존 클래스보다 덜 최적화되어 있습니다(엔진 구현자가 이를 개선하기 위해 노력하고 있습니다). 이전 환경에서는 지원되지 않으며 일반적으로 실제 서비스의 운영 환경에서 클래스를 사용하려면 트랜스파일러(transpilers)가 필요합니다.
      </td>
    </tr>

  </tbody>
</table>

### Object.setPrototypeOf()를 이용하는 방법

위의 모든 메서드는 객체 생성 시 프로토타입 체인을 설정하지만, [`Object.setPrototypeOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)는 이미 생성된 객체의 내부 `[[Prototype]]` 속성을 변경할 수 있습니다.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

<table class="standard-table">
  <caption>
   {{jsxref("Object.setPrototypeOf")}}의 장점과 단점
  </caption>
  <tbody>
    <tr>
      <th scope="row">장점</th>
      <td>
        모든 최신 엔진에서 지원됩니다. 객체의 프로토타입을 동적으로 조작할 수 있으며 <code>Object.create(null)</code>로 만든 프로토타입이 없는 객체에 프로토타입을 적용할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">단점</th>
      <td>
        성능이 좋지 않습니다. 객체 생성 시 프로토타입을 설정할 수 있는 경우 피해야 합니다. 많은 엔진들이 프로토타입을 최적화하고 미리 인스턴스를 호출할 때 메모리에서 메서드의 위치를 추측하려고 합니다. 그러나 프로토타입을 동적으로 설정하면 이러한 모든 최적화가 중단됩니다. 명세에 따라 작동하도록, 일부 엔진이 최적화 해제를 위해 코드를 다시 컴파일하게 할 수 있습니다. IE8 이하에서는 지원하지 않습니다.
      </td>
    </tr>
  </tbody>
</table>

### \_\_proto\_\_ 접근자를 사용하는 방법

모든 객체는 [`Object.prototype.__proto__`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) 설정자를 상속하며, 이는 기존 객체의 `[[Prototype]]`을 설정하는 데 사용할 수 있습니다(`__proto__` 키가 객체에서 재정의되지 않은 경우).

> **경고:** `Object.prototype.__proto__` 접근자는 **비표준**이며 더 이상 사용되지 않습니다. 대신 거의 항상 `Object.setPrototypeOf`를 사용해야 합니다.

```js
const obj = {};
// 이것을 사용하지 마세요. 오직 예시일 뿐입니다.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

<table class="standard-table">
  <caption>
    {{jsxref("Object/proto","__proto__")}} 속성 설정의 장점과 단점
  </caption>
  <tbody>
    <tr>
      <th scope="row">장점</th>
      <td>
        모든 최신 엔진에서 지원됩니다. {{jsxref("Object/proto","__proto__")}}를 객체가 아닌 것으로 설정하면 조용히 실패합니다. 예외를 던지지 않습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">단점</th>
      <td>
        성능이 떨어지고 더 이상 사용되지 않습니다. 많은 엔진이 프로토타입을 최적화하고 미리 인스턴스를 호출할 때 메모리에서 메서드의 위치를 추측하려고 합니다. 그러나 프로토타입을 동적으로 설정하면 이러한 모든 최적화가 중단되고 일부 엔진이 명세에 따라 작동하도록 코드의 최적화 해제를 위해 다시 컴파일하도록 강제할 수 있습니다. IE10 이하에서는 지원하지 않습니다. {{jsxref("Object/proto","__proto__")}} 설정자는 표준 선택 사항이므로, 모든 플랫폼에서 작동하지 않을 수 있습니다. 대신 거의 항상 {{jsxref("Object.setPrototypeOf")}}를 사용해야 합니다.
      </td>
    </tr>
  </tbody>
</table>

## 성능

프로토타입 체인에서 상위에 있는 속성에 대한 조회 시간은 성능에 부정적인 영향을 미칠 수 있으며, 이는 성능 중심의 코드에선 심각한 문제입니다. 또한, 존재하지도 않는 속성에 접근하려는 시도는 항상 모든 프로토타입 체인인 전체를 탐색하게 됩니다.

또한, 객체의 속성을 반복할 때, 프로토타입 체인에 있는 **모든"** 열거 가능한 속성이 열거됩니다. 객체가 프로토타입 체인이 아닌 *itself*에 정의된 속성을 가지고 있는지 확인하려면, [`hasOwnProperty`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 또는 [`Object.hasOwn`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) 메서드를 사용해야 합니다. `[[Prototype]]`으로 `null`이 있는 객체를 제외한 모든 객체는 프로토타입 체인에서 더 아래로 재정의되지 않는 한 `Object.prototype`에서 [`hasOwnProperty`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)를 상속합니다. 구체적인 예를 제공하기 위해 위의 그래프 예제 코드를 사용하여 설명하겠습니다.

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

참고: 속성이 [`undefined`](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)인지 확인하는 것만으로는 충분하지 않습니다. 속성이 존재하나 단순히 값이 `undefined`인 경우도 있습니다.

## 결론

JavaScript는 모두 동적이고 런타임이며 정적 타입이 전혀 없기 때문에, Java 또는 C++에서 온 개발자에게는 다소 혼란스러울 수 있습니다. 모든 것은 객체(인스턴스)이거나 함수(생성자)이며 함수 자체도 `Function` 생성자의 인스턴스입니다. 문법 구성인 "클래스"도 런타임에는 생성자 함수일 뿐입니다.

JavaScript의 모든 생성자 함수에는 `new` 연산자와 함께 작동하는 `prototype`이라는 특수 속성이 있습니다.
프로토타입 객체에 대한 참조는 새 인스턴스의 내부 `[[Prototype]]` 속성에 복사됩니다. 예를 들어, `const a1 = new A()`를 수행하면, JavaScript(메모리에 객체를 생성한 후 `this`를 정의한 `A()`를 실행하기 전에)는 `a1.[[Prototype]] = A.prototype`을 설정합니다. 그런 다음 인스턴스의 속성에 접근하면, JavaScript는 먼저 해당 객체에 직접 존재하는지 여부를 확인하고, 그렇지 않은 경우 `[[Prototype]]`에서 찾습니다. `[[Prototype]]`은 원하는 값을 찾을 때까지 재귀적으로 탐색합니다. 즉, `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` 순서로 탐색하며, 값을 찾거나 `Object.getPrototypeOf`는 `null`일 때 탐색을 종료합니다. 이는 `prototype`에 정의된 모든 속성이 모든 인스턴스에서 효과적으로 공유되며, 나중에 `prototype`의 일부를 변경하고 변경 사항이 모든 기존 인스턴스에 나타나도록 할 수 있다는 것을 의미합니다.

위의 예에서 `const a1 = new A(); const a2 = new A();`인 경우 `a1.doSomething`은 실제로 `Object.getPrototypeOf(a1).doSomething`을 참조하고, 이는 정의한 `A.prototype.doSomething`과 동일합니다. 즉, `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`입니다.

프로토타입 상속 모델을 사용하는 복잡한 코드를 작성하기 전에 프로토타입 상속 모델을 이해하는 것이 필수적입니다. 또한, 코드에서 프로토타입 체인의 길이를 파악하여 필요한 경우 성능 문제를 방지하기 위해 분할하세요. 또한, 내장 프로토타입은 최신 JavaScript 기능과의 호환성을 위한 경우가 아니면 **절대** 확장해서는 안 됩니다.
