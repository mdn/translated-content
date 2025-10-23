---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: 6a3063ab22fdcaedc8d69b80261f09d870ea9709
---

{{JSRef}}

{{jsxref("Object")}} 객체의 메서드인 **`toString()`** 은 해당 object를 표현하는 문자열을 반환합니다. 이 메서드는 사용자가 [타입 강제 변환](/ko/docs/Web/JavaScript/Guide/Data_structures#타입_강제_변환)을 통해 파생된 객체에서 재정의할 수 있습니다.

{{InteractiveExample("JavaScript Demo: Object.prototype.toString()")}}

```js interactive-example
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog("Gabby");

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());
// Expected output: "Gabby"
```

## 구문

```js
toString();
```

### 매개변수

기본적으로 `toString()`은 매개변수가 없습니다. 그러나 이 메서드를 재정의한 `Object`를 상속받은 객체의 경우 매개변수를 취할 수 있습니다. 예를들어, [`Number.prototype.toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 와 [`BigInt.prototype.toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) 메서드의 경우 선택적으로 기수(radix)를 매개변수로 취합니다.

### 반환 값

객체를 표현하는 문자열을 반환합니다.

## 설명

자바스크립트는 [객체를 원시 값으로 변환](/ko/docs/Web/JavaScript/Guide/Data_structures#타입_강제_변환)하기 위해 `toString` 메서드를 호출합니다. 당신은 `toString` 메서드를 직접 부를 일이 거의 없습니다. 자바스크립트는 원시 값이 있어야 할 곳에서 객체를 마주치면 자동으로 해당 메서드를 호출합니다.

이 메서드는 [문자열 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#문자열_변환)에 의해 우선적으로 호출되지만, [숫자 변환](/ko/docs/Web/JavaScript/Guide/Data_structures#숫자_강제_변환)과 [원시 타입 변환](/ko/docs/Web/JavaScript/Guide/Data_structures#원시_타입_강제_변환)은 `valueOf()`를 우선적으로 호출합니다. 그러나 기본 [`valueOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) 메서드는 객체를 반환하므로, 그 객체가 `valueOf()`를 재정의하지 않았다면 보통 `toString()` 메서드가 마지막에 호출됩니다. 예를들어, `+[1]`은 `1`을 반환하는데, 그 이유는 `+[1]`의 [`toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) 메서드가 `"1"` 을 반환하고 이 값이 숫자로 변환되기 때문입니다.

`Object.prototype`를 상속받는 모든 객체([`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)를 제외한)들은 `toString()` 메서드를 상속받습니다. 커스텀 객체를 만들 때 `toString()`를 재정의할 수 있고, 재정의된 메서드를 호출하여 커스텀 객체를 문자열 값으로 변환할 수 있습니다. 또 다른방법으로는 [`@@toPrimitive`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 메서드를 추가하여 타입 변환 과정을 넘어서는 조정을 할 수 있고, 이는 타입 변환 과정에서 항상 `valueOf` 또는 `toString` 보다 우선시됩니다.

재정의된 객체에서 기본 `Object.prototype.toString()`를 사용하기 위해서(혹은 `null` 이나 `undefined`에서 호출하기 위해서), {{jsxref("Function.prototype.call()")}} 혹은 {{jsxref("Function.prototype.apply()")}}에 살펴볼 객체를 첫번째 매개변수(이를 `thisArg`라고 함)로 넣어 호출합니다.

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()`은 `"[object Type]"`을 반환하는데, 여기서 `Type`은 객체의 타입입니다. 만약 객체가 문자열 값인 [`Symbol.toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 특성을 가지고 있다면 그 값이 `Type`이 됩니다. [`Map`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map) 과 [`Symbol`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)을 포함한 많은 내장 객체들이 `Symbol.toStringTag`를 가지고 있습니다. ES6 이전에 생성된 몇몇 객체들은 `Symbol.toStringTag`가 없지만 특별한 태그를 가지고 있습니다. 이는 아래와 같습니다(아래에 제공된 타입 이름과 동일한 태그를 가지고 있습니다).

- [`Array`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/ko/docs/Web/JavaScript/Reference/Functions) ([`typeof`](/ko/docs/Web/JavaScript/Reference/Operators/typeof)가 `"function"`으로 반환되는 모든 것)
- [`Error`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

[`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체는 `"[object Arguments]"`를 반환합니다. `Symbol.toStringTag`가 재정의되지 않은 사용자 정의된 클래스들을 포함한 다른 객체들은 `"[object Object]"`를 반환할 것입니다.

`Object.prototype.toString()`이 [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null) 과 {{jsxref("undefined")}}에서 호출되면 각각 `[object Null]` 과 `[object Undefined]`를 반환합니다.

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
