---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
---

{{JSRef}}

{{jsxref("Object")}} 객체의 메서드인 **`toString()`** 은 해당 object를 표현하는 문자열을 반환합니다. 이 메서드는 사용자가 [타입 강제 변환](/ko/docs/Web/JavaScript/Data_structures#type_coercion)을 통해 파생된 객체에서 재정의할 수 있습니다.

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## 구문

```js
toString();
```

### 매개변수

기본적으로 `toString()`은 매개변수가 없습니다. 그러나 이 메서드를 재정의한 `Object`를 상속받은 객체의 경우 매개변수를 취할 수 있습니다. 예를들어, [`Number.prototype.toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 와 [`BigInt.prototype.toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) 메서드의 경우 선택적으로 기수(radix)를 매개변수로 취합니다.

### 반환 값

객체를 표현하는 문자열을 반환합니다.

## 설명

모든 객체에는 객체가 텍스트 값으로 표시되거나 객체가 문자열이 예상되는 방식으로 참조 될 때 자동으로 호출되는 `toString()` 메서드가 있습니다. 기본적으로 `toString()` 메서드는 Object에서 비롯된 모든 객체에 상속됩니다. 이 메서드가 사용자 지정 개체에서 재정의되지 않으면 `toString()`은 "`[object type]`"을 반환합니다. 여기서 `type`은 object type입니다. 다음 코드는 이것을 설명합니다

```js
var o = new Object();
o.toString(); // returns [object Object]
```

> **참고:** JavaScript 1.8.5부터 {{jsxref("null")}}의 `toString()`을 호출하는 경우 `[object Null]`을 반환하며, {{jsxref("undefined")}}는 `[object Undefined]`를 반환합니다. 이는 ECMAScript 제 5판과 후속 정오표에 정의되어 있습니다. [toString으로 객체 클래스 검사](#tostring으로_객체_클래스_검사)를 살펴보세요.

## 예제

### 기본 `toString` 메소드 재정의

기본 `toString()` 메서드 대신에 호출될 함수를 정의할 수 있습니다. `toString()` 메서드는 인자를 취하지 않고 문자열을 반환합니다. 직접 생성한 `toString()` 메서드는 원하는 어떤 값이든 될 수 있지만 해당 객체에 대한 정보를 전달하고 있을 때 가장 유용할 것입니다.

다음 코드는 `Dog` 객체 타입을 정의하고 `Dog` 타입을 따르는 `theDog`를 생성합니다:

```js
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog("Gabby", "Lab", "chocolate", "female");
```

커스텀 객체의 `toString()` 메서드를 호출하는 경우 {{jsxref("Object")}}로부터 상속받은 기본 값을 반환하게 됩니다:

```js
theDog.toString(); // returns [object Object]
```

다음 코드는 기본 `toString()` 메서드를 재정의하는 `dogToString()`을 생성하고 할당합니다. 이 함수는 객체의 name, breed, color, sex를 포함하는 문자열을 "`property = value;`"의 형태로 만들어냅니다.

```js
Dog.prototype.toString = function dogToString() {
  var ret =
    "Dog " +
    this.name +
    " is a " +
    this.sex +
    " " +
    this.color +
    " " +
    this.breed;
  return ret;
};
```

앞선 코드를 사용하면 문자열 컨텍스트에서 `theDog`가 사용될 때마다 JavaScript는 자동으로 `dogToString()` 함수를 호출하여 다음 문자열을 반환합니다:

```js
"Dog Gabby is a female chocolate Lab";
```

### `toString()`으로 객체 클래스 검사

`toString()`은 모든 객체에 사용되어 해당 객체의 클래스를 가져올 수 있습니다. Object.prototype.toString()을 모든 객체에 사용하기 위해서는 {{jsxref("Function.prototype.call()")}} 나 {{jsxref("Function.prototype.apply()")}}를 사용해서 검사하고자 하는 객체를 `thisArg`로 불리는 첫번째 파라미터로 넘겨야 합니다.

```js
var toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
toString.call(Math); // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
