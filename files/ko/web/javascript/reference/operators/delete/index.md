---
title: delete 연산자
slug: Web/JavaScript/Reference/Operators/delete
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

**`delete`**는 객체의 속성을 제거합니다. 속성의 값이 객체이고 더 이상 그 객체에 대한 참조가 없다면, 해당 객체는 결국 자동으로 메모리에서 해제됩니다.

{{InteractiveExample("JavaScript Demo: Expressions - delete operator")}}

```js interactive-example
const Employee = {
  firstname: "Maria",
  lastname: "Sanchez",
};

console.log(Employee.firstname);
// Expected output: "Maria"

delete Employee.firstname;

console.log(Employee.firstname);
// Expected output: undefined
```

## 구문

```js-nolint
delete object.property
delete object[property]
```

> [!NOTE]
> 구문은 `delete` 연산자 다음에 더 넓은 범위의 표현식을 허용하지만, 위의 형태들만 의미 있는 동작을 이끌어냅니다.

### 매개변수

- `object`
  - : 객체의 이름 혹은 객체를 평가하는 표현식.
- `property`
  - : 삭제할 속성.

### 반환 값

속성이 [자체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) [구성 불가능한](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable_attribute) 속성인 경우를 제외하고 모든 경우에 `true`를 반환하며, 이 경우에는 비 엄격 모드에서 `false`가 반환됩니다.

### 예외

- {{jsxref("TypeError")}}
  - : 속성이 자체 구성 불가능하면 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서 발생합니다.
- {{jsxref("ReferenceError")}}
  - : 만약 `object`가 [super](/ko/docs/Web/JavaScript/Reference/Operators/super)면 발생합니다.

## 설명

`delete` 연산자는 [`typeof`](/ko/docs/Web/JavaScript/Reference/Operators/typeof)와 같은 다른 단항 연산자와 동일한 [우선순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence)를 갖습니다. 따라서 더 높은 우선순위의 연산자에 의해 형성된 어떤 표현식도 허용합니다. 그러나 다음 예제에서는 엄격 모드에서 초기 구문 오류를 일으킵니다.

```js-nolint example-bad
delete identifier;
delete object.#privateProperty;
```

[클래스](/ko/docs/Web/JavaScript/Reference/Classes)는 자동으로 엄격 모드로 작동하며, [private 속성](/ko/docs/Web/JavaScript/Reference/Classes/Private_properties)은 클래스 본문 내에서만 참조될 수 있기 때문에 private 속성은 절대 삭제될 수 없습니다. `delete identifier`는 식별자가 전역 객체의 구성 가능한 속성을 참조한다면 [작동할 수 있지만](#deleting_global_properties), 이 형식을 피하고 [`gloablThis`](/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis)를 접두사로 사용해야 합니다.

다른 표현식들도 허용되지만, 이 예시는 의미 있는 동작을 유발하지 않습니다.

```js example-bad
delete console.log(1);
// 로그 1, true 반환, 아무것도 삭제되지 않습니다.
```

`delete` 연산자는 객체에서 주어진 속성을 삭제합니다. 성공적으로 삭제하면 `true`를 반환하고, 실패하면 `false`를 반환합니다. 일반적인 믿음(아마도 [C++의 delete](https://docs.microsoft.com/cpp/cpp/delete-operator-cpp?view=msvc-170))와 같은 다른 프로그래밍 언어들 때문에)과 달리, `delete` 연산자는 메모리를 직접 해제하는 것과 전혀 관련이 없습니다. 메모리 관리는 참조를 끊는 방식으로 간접적으로 이루어집니다. 자세한 내용은 [메모리 관리](/ko/docs/Web/JavaScript/Memory_management) 페이지를 참조하세요.

아래 시나리오를 고려하는 것이 중요합니다.

- 만약 지우려고 시도한 속성이 존재하지 않는 경우 `delete`는 아무런 효과가 없고 `true`를 반환합니다.
- `delete`는 자신의 속성들에게만 영향을 줍니다. 만약 동일한 이름의 속성이 객체의 프로토타입 체인에 존재한다면, 삭제 후에 객체는 프로토타입 체인의 속성을 사용하게 됩니다.
- 구성 불가능한 속성들은 삭제할 수 없습니다. 여기에는 {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}}와 같은 내장 객체의 속성들과 {{jsxref("Object.defineProperty()")}} 메서드를 사용하여 구성 불가능하게 생성된 속성들이 포함됩니다.
- 함수 매개변수를 포함한 변수를 삭제하면 작동하지 않습니다. 엄격 모드에서 `delete variable`는 {{jsxref("SyntaxError")}}를 발생시키며, 비 엄격 모드에서는 아무런 일도 일어나지 않습니다.
  - {{jsxref("Statements/var", "var")}}로 선언된 변수는 전역 범위나 함수 범위에서 삭제할 수 없습니다. 왜냐하면 [전역 객체](/ko/docs/Glossary/Global_object)에 연결될 수는 있지만 구성 가능하지 않기 때문입니다.
  - {{jsxref("Statements/let", "let")}}또는 {{jsxref("Statements/const", "const")}}로 선언된 변수는 정의된 범위 안에서는 삭제할 수 없습니다. 이 변수들은 객체에 연결되지 않기 때문입니다.

## 예제

### delete 사용

> [!NOTE]
> 아래 예시는 비 엄격 모드에서만 가능한 기능을 사용합니다. 예를 들어, 암묵적으로 전역 변수를 생성하거나 식별자를 삭제하는 기능은 엄격 모드에서 금지되어 있습니다.

```js
// 전역 범위에 empCount를 생성합니다.
// var를 사용하기 때문에 구성 불가능으로 표시됩니다.
var empCount = 43;

// 전역 범위에 EmployeeDetails 속성들을 생성합니다.
// var 없이 정의되었으므로 구성 가능으로 표시됩니다.
EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// delete는 객체의 속성을 삭제하는 데 사용할 수 있습니다.
delete EmployeeDetails.name; //true를 반환합니다.

// 속성이 존재하지 않아도 delete는 true를 반환합니다.
delete EmployeeDetails.salary; //true를 반환합니다.

// EmployeeDetails는 전역 범위의 속성입니다.
delete EmployeeDetails; //true를 반환합니다.

// 반대로 empCount는 var를 사용했기 때문에 구성 가능이 아닙니다.
delete empCount; // false를 반환합니다.

// 또한 delete는 내장된 정적 속성에 영향을 주지 않습니다.
// 구성 불가능입니다.
delete Math.PI; // false를 반환합니다.

function f() {
  var z = 44;

  // delete는 지역변수 이름에 영향을 주지 않습니다.
  delete z; // false를 반환합니다.
}
```

### delete와 프로토타입 체인

다음 예제에서 객체의 자신의 속성을 삭제하는데, 동일한 이름의 속성이 프로토타입 체인에 존재합니다.

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

const foo = new Foo();

// foo.bar는 자신의 속성과 관련이 있습니다.
console.log(foo.bar); // 10

// foo 객체 안에 자신의 속성을 삭제합니다.
delete foo.bar; // true를 반환합니다.

// foo.bar는 여전히 프로토타입 체인에서 사용 가능합니다.
console.log(foo.bar); // 42

// prototype에서 속성을 삭제합니다.
delete Foo.prototype.bar; // true를 반환합니다.

// "bar" 속성이 삭제되었기 때문에 'Foo'로 부터 상속될 수 없습니다.
console.log(foo.bar); // undefined
```

### 배열 요소 삭제

배열 요소를 삭제해도 `length`는 영향을 받지 않습니다. 심지어 배열의 마지막 요소를 삭제하더라도 마찬가지입니다.

`delete` 연산자가 배열 요소를 삭제하면, 그 요소는 더 이상 배열에 존재하지 않습니다. 다음 예제에서 `trees[3]`은 `delete`로 삭제되었습니다.

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(3 in trees); // false
```

이렇게 하면 빈 슬롯이 있는 [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)이 생성됩니다. 배열요소가 존재하지만 값이 undefined이기를 원한다면 `delete` 연산자 대신에 `undefined`를 사용해야 합니다. 다음 예제에서 `trees[3]`에 `undefined`를 할당하지만 여전히 배열 요소로 존재합니다.

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
console.log(3 in trees); // true
```

대신에 배열의 내용을 변경하여 배열 요소를 삭제하길 원한다면 {{jsxref("Array/splice", "splice()")}}를 사용하면 됩니다. 다음 예제에서 `trees[3]`은 {{jsxref("Array/splice", "splice()")}}을 사용해서 완전히 배열에서 삭제됩니다.

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

### 구성 불가능 속성 삭제

속성이 구성 불가능일 때, `delete`는 아무런 효과가 없으며 `false`를 반환합니다. 엄격 모드에서는 `TypeError`를 발생합니다.

```js
const Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // returns false
```

{{jsxref("Statements/var", "var")}}는 `delete` 연산자로 삭제할 수 없는 구성 불가능 속성을 생성합니다.

```js
// "nameOther"을 var 키워드를 사용하여 추가되었기 때문에, 구성 불가능으로 표시됩니다.
var nameOther = "XYZ";

// 전역 속성에 접근하기 위해
Object.getOwnPropertyDescriptor(globalThis, "nameOther");
// {
//   value: "XYZ",
//   writable: true,
//   enumerable: true,
//   configurable: false
// }

delete globalThis.nameOther; // false를 반환합니다.
```

엄격 모드에서 예외를 발생시킬 것입니다.

### 전역 속성 삭제

전역 속성이 구성 가능하다면(예를 들어, 직접 속성 할당을 통해), 삭제를 할 수 있고 이후에 해당 속성을 전역 변수로 참조하면 {{jsxref("ReferenceError")}}가 발생합니다.

```js
globalThis.globalVar = 1;
console.log(globalVar); // 1
// 비 엄격 모드에서 `delete globalVar`를 사용할 수도 있습니다.
delete globalThis.globalVar;
console.log(globalVar); // ReferenceError: globalVar is not defined
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [In depth analysis on delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
