---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
---

{{JSRef}}

**`Object.create()`** 메서드는 지정된 프로토타입 객체 및 속성(property)을 갖는 새 객체를 만듭니다.

## 구문

```js
Object.create(proto[, propertiesObject])
```

### 매개변수

- `proto`
  - : 새로 만든 객체의 프로토타입이어야 할 객체.
- `propertiesObject`
  - : 선택사항. 지정되고 {{jsxref("undefined")}}가 아니면, 자신의 속성(즉, 자체에 정의되어 그 프로토타입 체인에서 열거가능하지 _않은_ 속성)이 열거가능한 객체는 해당 속성명으로 새로 만든 객체에 추가될 속성 설명자(descriptor)를 지정합니다. 이러한 속성은 {{jsxref("Object.defineProperties()")}}의 두 번째 인수에 해당합니다.

### 반환값

지정된 프로토타입 개체와 속성을 갖는 새로운 개체.

### 예외

`proto` 매개변수가 {{jsxref("null")}} 또는 객체가 아닌 경우 {{jsxref("TypeError")}} 예외가 발생(throw).

## 예

### `Object.create()`를 사용한 고전적인 상속방법

아래는 고전적인 상속방법으로 사용된 `Object.create()` 사용 예입니다. 이는 단일 상속 용으로, JavaScript가 지원하는 전부입니다.

```js
// Shape - 상위클래스
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 상위클래스 메서드
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - 하위클래스
function Rectangle() {
  Shape.call(this); // super 생성자 호출.
}

// 하위클래스는 상위클래스를 확장
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

여러 객체에서 상속하고 싶은 경우엔 mixin이 사용가능합니다.

```js
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype); // 상속
mixin(MyClass.prototype, OtherSuperClass.prototype); // mixin

MyClass.prototype.myMethod = function () {
  // 기능 수행
};
```

`mixin` 함수는 상위(super)클래스 프로토타입에서 하위(sub)클래스 프로토타입으로 함수를 복사하고, mixin 함수는 사용자에 의해 공급될 필요가 있습니다. mixin 같은 함수의 예는 [jQuery.extend()](https://api.jquery.com/jQuery.extend/)입니다.

### `Object.create()`와 함께 `propertiesObject` 인수 사용하기

```js
var o;

// 프로토타입이 null인 객체 생성
o = Object.create(null);

o = {};
// 위는 아래와 같습니다:
o = Object.create(Object.prototype);

// 샘플 속성 두개를 갖는 객체를 만드는 예.
// (두 번째 매개변수는 키를 *속성 설명자*에 맵핑함을 주의하세요.)
o = Object.create(Object.prototype, {
  // foo는 정규 '값 속성'
  foo: { writable: true, configurable: true, value: "hello" },
  // bar는 접근자(accessor, getter-및-setter) 속성
  bar: {
    configurable: false,
    get: function () {
      return 10;
    },
    set: function (value) {
      console.log("Setting `o.bar` to", value);
    },
    /* ES5 접근자로 코드는 이렇게 할 수 있습니다
    get function() { return 10; },
    set function(value) { console.log('setting `o.bar` to', value); } */
  },
});

function Constructor() {}
o = new Constructor();
// 위는 아래와 같습니다:
o = Object.create(Constructor.prototype);
// 물론, 생성자 함수에 실제 초기화 코드가 있다면
// Object.create()는 그것을 반영할 수 없습니다

// 빈 새 객체가 프로토타입인 새 객체를 만들고
// 값이 42인 단일 속성 'p' 추가.
o = Object.create({}, { p: { value: 42 } });

// 기본으로 writable, enumerable 또는 configurable 속성은 false:
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// ES3 속성을 지정하기 위해
o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
```

## 폴리필

이 폴리필에서는 새 개체에 대한 프로토타입이 선택되었지만 두번째 인수가 없이 개체를 생성하는 사례를 보여줍니다.

`[[Prototype]]`에 `null` 을 설정하는 것이 실제 ES5 `Object.create`에서는 지원되지만, ECMAScript 5 보다 낮은 버전에서는 상속에 제한이 있기 때문에 이 폴리필에서는 지원할 수 없음에 주의하세요.

```js
if (typeof Object.create != "function") {
  Object.create = (function (undefined) {
    var Temp = function () {};
    return function (prototype, propertiesObject) {
      if (prototype !== Object(prototype) && prototype !== null) {
        throw TypeError("Argument must be an object, or null");
      }
      Temp.prototype = prototype || {};
      if (propertiesObject !== undefined) {
        Object.defineProperties(Temp.prototype, propertiesObject);
      }
      var result = new Temp();
      Temp.prototype = null;
      // Object.create(null)인 경우 모방
      if (prototype === null) {
        result.__proto__ = null;
      }
      return result;
    };
  })();
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- John Resig의 [getPrototypeOf()](http://ejohn.org/blog/objectgetprototypeof/) 포스트
