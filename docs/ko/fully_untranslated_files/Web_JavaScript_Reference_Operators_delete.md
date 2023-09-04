---
title: delete 연산자
slug: Web/JavaScript/Reference/Operators/delete
---

{{jsSidebar("Operators")}}

**`delete`** **연산자**는 객체의 속성을 제거합니다. 제거한 객체의 참조를 어디에서도 사용하지 않는다면 나중에 자원을 회수합니다.

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## 구문

```js
delete expression;
```

`expression`은 속성 참조여야 합니다. 예컨대,

```js
delete object.property;
delete object["property"];
```

### 매개변수

- `object`
  - : 객체의 이름, 또는 평가했을 때 객체를 반환하는 표현식.
- `property`
  - : 제거하려는 속성.

### 반환 값

`true`. 단, 비엄격 모드에서 속성이 {{jsxref("Object.prototype.hasOwnProperty", "자신의 속성", "", 0)}}이며 [설정 불가능](/ko/docs/Web/JavaScript/Reference/Errors/Cant_delete)한 경우 `false`.

### 예외

엄격 모드에서, 속성이 자신의 속성이며 설정 불가능한 경우 {{jsxref("TypeError")}}.

## 설명

일반적으로 생각하고 있는것과는 다르게 `delete` 는 메모리 해제에 관하여 직접적으로 어떠한 작업도 하지 않습니다. 메모리 관리는 breaking references를 통하여 간접적으로 일어납니다. 자세한 걸 알고 싶다면 [memory management](/ko/docs/Web/JavaScript/Memory_Management) 를 보세요.

**`delete`**연산자는 오브젝트로 부터 해당 프로퍼티를 삭제합니다. 삭제를 하면 true를 반환, 아니면 false를 반환합니다. 그렇지만 아래 경우를 고려해야만 합니다.

- 만약 존재하지 않는 속성을 삭제하려고 하면 delete는 어떠한 작업도 없이 true를 반환합니다.
- 오브젝트의 프로토타입 체인에 같은 이름의 속성이 있다면, 삭제 후에, 오브젝트의 프로토타입체인을 통해 프로퍼티를 사용 할 수 있습니다. (즉, `delete`는 오직 자신의 프로퍼티만 삭제 합니다.
- {{jsxref("Statements/var","var")}}로 선언된 어떠한 프로퍼티라도 글로벌 스코프나 펑션 스코프로부터 삭제될 수 없습니다.

  - 결국, `delete`는 글로벌 스코프의 어떤 함수도 삭제 할 수 없습니다. (함수 정의식이건 함수 표현식이건 삭제 불가)
  - 오브젝트의 속성으로 있는 함수인 경우(글로벌 스코프를 제외하고)는 `delete`로 삭제할 수 있습니다.

- {{jsxref("Statements/let","let")}}과 {{jsxref("Statements/const","const")}}로 선언한 속성은 어느 스코프에 정의되어 있건 삭제 할 수 없습니다.
- Non-configurable 속성은 삭제 할 수 없습니다. 이것은 {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}}와 같은 built-in objects의 속성들이나 {{jsxref("Object.defineProperty()")}} 같은 메소드로 만든 non-configurable속성들을 포함합니다.

간단한 예제입니다.

```js
var Employee = {
  age: 28,
  name: "abc",
  designation: "developer",
};

console.log(delete Employee.name); // returns true
console.log(delete Employee.age); // returns true

// 존재하지 않는 속성을 삭제하려하면
// true를 리턴합니다.
console.log(delete Employee.salary); // returns true
```

### 설정 불가능한 속성

non-configurable 속성은 `delete`로 삭제할 수 없으며, `false`를 반환할 것입니다(\*strict mode에서는 `SyntaxError`를 발생시킴).

```js
var Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // returns false
```

{{jsxref("Statements/var","var")}}, {{jsxref("Statements/let","let")}}, {{jsxref("Statements/const","const")}}로 선언된 변수는 non-configurable 속성으로 구분되며, `delete`로 삭제될 수 없습니다.

```js
var nameOther = "XYZ";

// 우리는 이를 사용해 글로벌 속성에 접근 할 수 있습니다:
Object.getOwnPropertyDescriptor(window, "nameOther");

// output: Object { value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  configurable: false }

// "nameOther"은 var로 선언되었기 때문에
// 이는 "non-configurable" 속성으로 구분됩니다.

delete nameOther; // return false
```

strict mode, this would have raised an exception.

### 엄격 vs. 비엄격 모드

엄격 모드에서 `delete`로 변수나 함수를 삭제하려고 하면 {{jsxref("SyntaxError")}}가 발생합니다.

`var`로 정의된 변수는 non-configurable로 구분됩니다. 다음 예제에서, `salary`는 non-configurable이며 삭제될 수 없습니다. non-strict mode에서 non-configurable에 `delete`를 쓰면 `false`를 반환합니다.

```js
function Employee() {
  delete salary;
  var salary;
}

Employee();
```

그러나 strict mode에서는 `false`를 반환하는 대신, `SyntaxError`를 발생시킵니다.

```js
"use strict";

function Employee() {
  delete salary; // SyntaxError
  var salary;
}

// 이와 마찬가지로, delete로 함수를 삭제하는 것도
// SyntaxError를 발생시킵니다.

function DemoFunction() {
  //some code
}

delete DemoFunction; // SyntaxError
```

## 예제

```js
// 전역스코프에 adminName라는 프로퍼티를 만듭니다.
adminName = "xyz";

// 전역스코프에 empCount라는 프로퍼티를 만듭니다.
// var를 사용해서 선언했으므로, 이는 non-configurable로 구분됩니다.
// let 이나 const를 사용하더라도 마찬가지로 non-configurable 입니다.
var empCount = 43;

EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// adminName은 전역변수입니다.
// 이는 var를 사용하여 선언되지 않았기에 configurable하며 delete로 삭제될 수 있습니다.
delete adminName; // returns true

// 이와 반대로, empCount는 var를 사용하였기에 non-configurable이며
// 그러므로 delete로 삭제할 수 없습니다.
delete empCount; // returns false

// delete는 객체의 프로퍼티를 지울 때 사용됩니다.
delete EmployeeDetails.name; // returns true

// 해당 프로퍼티가 존재하지 않는 상황에서도 "true"를 리턴합니다.
delete EmployeeDetails.salary; // returns true

// 내장되어있는 정적 프로퍼티에는 delete가 영향을 미치지 않습니다.
delete Math.PI; // returns false

// EmployeeDetails 은 전역스코프의 프로퍼티 입니다.
// "var"를 사용하지 않고 선언되었기 때문에 이는 configurable입니다.
delete EmployeeDetails; // returns true

function f() {
  var z = 44;

  // 지역변수에는 delete가 영향을 미치지 않습니다.
  delete z; // returns false
}
```

### `delete`와 프로토타입 체인

In the following example, we delete an own property of an object while a property with the same name is available on the prototype chain:

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// Returns true, since the own property
// has been deleted on the foo object
delete foo.bar;

// foo.bar is still available, since it
// is available in the prototype chain.
console.log(foo.bar);

// We delete the property on the prototype
delete Foo.prototype.bar;

// logs "undefined" since the property
// is no longer inherited
console.log(foo.bar);
```

### 객체 요소 제거하기

When you delete an array element, the array length is not affected. This holds even if you delete the last element of the array.

When the `delete` operator removes an array element, that element is no longer in the array. In the following example, `trees[3]` is removed with `delete`.

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
if (3 in trees) {
  // this does not get executed
}
```

If you want an array element to exist but have an undefined value, use the `undefined` value instead of the `delete` operator. In the following example, `trees[3]` is assigned the value undefined, but the array element still exists:

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
if (3 in trees) {
  // this gets executed
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 크로스 브라우저 참고사항

Although ECMAScript makes iteration order of objects implementation-dependent, it may appear that all major browsers support an iteration order based on the earliest added property coming first (at least for properties not on the prototype). However, in the case of Internet Explorer, when one uses `delete` on a property, some confusing behavior results, preventing other browsers from using simple objects like object literals as ordered associative arrays. In Explorer, while the property _value_ is indeed set to undefined, if one later adds back a property with the same name, the property will be iterated in its _old_ position--not at the end of the iteration sequence as one might expect after having deleted the property and then added it back.

If you want to use an ordered associative array in a cross-browser environment, use a {{jsxref("Map")}} object if available, or simulate this structure with two separate arrays (one for the keys and the other for the values), or build an array of single-property objects, etc.

## 같이 보기

- [In depth analysis on delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
