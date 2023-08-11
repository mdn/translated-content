---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
---

{{JSRef}}

The **`toString()`** 은 문자열을 반환하는 object의 대표적인 방법이다

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## 구문

```js
obj.toString();
```

## Description

모든 객체에는 객체가 텍스트 값으로 표시되거나 객체가 문자열이 예상되는 방식으로 참조 될 때 자동으로 호출되는 `toString()` 메서드가 있습니다. 기본적으로 `toString()` 메서드는 Object에서 비롯된 모든 객체에 상속됩니다. 이 메서드가 사용자 지정 개체에서 재정의되지 않으면 `toString()`은 "`[object type]`"을 반환합니다. 여기서 `type`은 object type입니다. 다음 코드는 이것을 설명합니다

```js
var o = new Object();
o.toString(); // returns [object Object]
```

> **참고:** 자바스크립트 1.8.5부터 {{jsxref("null")}}의 `toString()`을 호출하는 경우 `[object Null]`을 반환하며, {{jsxref("undefined")}}는 `[object Undefined]`를 반환합니다. 이는 ECMAScript 제 5판과 후속 정오표에 정의되어 있습니다. See [toString으로 객체 클래스 검사](#tostring으로_객체_클래스_검사).

## 매개변수

숫자 및 BigInts의 경우 `toString()`은 선택적으로 기수(radix)를 매개변수로 취합니다. 기수의 값은 최소 2부터 36까지입니다.

`기수`를 이용함으로써 10진수를 (1, 2, 3, 4, 5...) 다른 진수로 변환할 수 있습니다. 아래는 10진수를 2진수로 변환하는 예제입니다.

```js
let baseTenInt = 10;
console.log(baseTenInt.toString(2));
// "1010"이 출력됩니다
```

big integers도 이와 같습니다

```js
let bigNum = BigInt(20);
console.log(bigNum.toString(2));
// "10100"이 출력됩니다
```

몇 가지 일반적인 기수들은 아래와 같습니다

- 2 : [2진법](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84%EB%B2%95)
- 8 : [8진법](https://ko.wikipedia.org/wiki/%ED%8C%94%EC%A7%84%EB%B2%95)
- 10 : [10진법](https://ko.wikipedia.org/wiki/%EC%8B%AD%EC%A7%84%EB%B2%95)
- 16 : [16진법](https://ko.wikipedia.org/wiki/%EC%8B%AD%EC%9C%A1%EC%A7%84%EB%B2%95)

## Examples

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

앞선 코드를 사용하면 문자열 컨텍스트에서 `theDog`가 사용될 때마다 자바스크립트는 자동으로 `dogToString()` 함수를 호출하여 다음 문자열을 반환합니다:

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

## See also

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
