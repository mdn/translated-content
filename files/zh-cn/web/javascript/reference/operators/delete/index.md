---
title: delete 运算符
slug: Web/JavaScript/Reference/Operators/delete
---

{{jsSidebar("Operators")}}

**`delete`** 运算符用于删除对象的一个属性；如果该属性的值是一个对象，并且没有更多对该对象的引用，该属性所持有的对象最终会自动释放。

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## 语法

```js-nolint
delete object.property
delete object[property]
```

> **备注：** 该语法允许在 `delete` 运算符之后使用多种类型的表达式，但只有上述形式才能产生有意义的行为。

### 参数

- `object`
  - : 对象的名称，或计算结果为对象的表达式。
- `property`
  - : 要删除的属性。

### 返回值

对于大多数情况都是 `true`；如果属性是一个[自身](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)[不可配置](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#可配置属性)的属性，在这种情况下，非严格模式返回 `false`。

### 异常

- {{jsxref("TypeError")}}
  - : 如果属性是自身不可配置的属性且处于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中，则会抛出该异常。
- {{jsxref("ReferenceError")}}
  - : 当 `object` 是 [`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 时抛出。

## 描述

`delete` 运算符与其他像 [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 这样的一元运算符具有相同的[优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)。因此，它接受任何由更高优先级的运算符形成的表达式。然而，在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，以下形式会导致早期语法错误：

```js example-bad
delete identifier;
delete object.#privateProperty;
```

因为[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)自动处于严格模式，而[私有属性](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_class_fields)只能在类体内合法引用，这意味着私有属性永远不能被删除。虽然 `delete identifier` 在 `identifier` 指的是全局对象的可配置属性时[可能有效](#删除全局属性)，但是你应该避免这种形式，而是用 [`globalThis`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 作为前缀。

虽然其他表达式是可以接受的，但是它们并不导致有意义的行为：

```js example-bad
delete console.log(1);
// 输出 1，返回 true，但是没有删除任何东西
```

`delete` 运算符从一个对象中删除一个给定的属性。在成功删除时，它将返回 `true`，否则将返回 `false`。不像一般人认为的那样（也许是由于其他编程语言，如 [C++ 中的 delete](https://docs.microsoft.com/cpp/cpp/delete-operator-cpp?view=msvc-170)），`delete` 操作符与直接释放内存**没有**关系。内存管理是通过破坏引用间接完成的。更多细节请参见[内存管理](/zh-CN/docs/Web/JavaScript/Memory_management)页面。

但是，以下情况需要重点考虑：

- 如果你试图删除的属性不存在，那么 `delete` 将不会起任何作用，但仍会返回 `true`。
- `delete` 只影响自身属性。如果对象的原型链上有一个与待删除属性同名的属性，那么删除属性之后，对象会使用原型链上的那个属性。
- 不可配置的属性不能被移除。这意味着像 {{jsxref("Math")}}、{{jsxref("Array")}}、{{jsxref("Object")}} 这些内置对象的属性以及使用 {{jsxref("Object.defineProperty()")}} 方法设置为不可配置的属性不能被删除。
- 删除包括函数参数内的变量永远不会奏效。`delete variable` 会在严格模式下抛出 {{jsxref("SyntaxError")}} 错误，非严格模式下不会有任何效果。
  - 任何使用 {{jsxref("Statements/var","var")}} 声明的属性不能从全局作用域或函数的作用域中删除，因为即使它们可能附加到[全局对象](/zh-CN/docs/Glossary/Global_object)上，它们也是不可配置的。
  - 任何使用 {{jsxref("Statements/let","let")}} 或 {{jsxref("Statements/const","const")}} 声明的属性不能够从它被声明的作用域中删除，因为它们没有附加到任何对象上。

## 示例

### 使用 delete

> **备注：** 以下示例使用了仅非严格模式下的功能，如隐式创建全局变量和删除标识符，这在严格模式下是禁止的。

```js
// 在全局作用域创建 empCount 属性
// 因为我们使用了 var，它会标记为不可配置
var empCount = 43;

// 在全局作用域创建 adminName 属性
// 因为没有使用 var，它会标记为可配置
adminName = "xyz";

EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// delete 可用于删除对象的属性
delete EmployeeDetails.name; // 返回 true

// 甚至属性不存在，它也会返回 "true"
delete EmployeeDetails.salary; // 返回 true

// EmployeeDetails 是全局作用域的一个属性。
delete EmployeeDetails; // 返回 true

// 相反，empCount 是不可配置的，
// 因为创建它时使用了 var。
delete empCount; // 返回 false

// adminName 是全局作用域的一个属性。
// 因为它不是用 var 创建的，所以可以删除。
// 因此，它是可配置的。
delete adminName; // 返回 true

// delete 对内建静态属性不起作用
// 这些属性是不可配置的
delete Math.PI; // 返回 false

function f() {
  var z = 44;

  // delete 对局部变量名不起作用
  delete z; // 返回 false
}
```

### delete 和原型链

在下面的示例中，我们删除一个对象的自有属性，而原型链上具有相同名称的属性可用：

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// foo.bar 指代了自身属性
console.log(foo.bar); // 10

// 删除 foo 对象的自身属性
delete foo.bar; // 返回 true

// foo.bar 仍然在原型链上可用。
console.log(foo.bar); //42

// 从原型上删除属性
delete Foo.prototype.bar; // 返回 true

// 由于已删除“bar”属性，因此不能再从 Foo 继承它。
console.log(foo.bar); //undefined
```

### 删除数组元素

当你删除一个数组元素时，数组的长度（`length`）不受影响。即便你删除了数组的最后一个元素也是如此。

当用 `delete` 运算符删除一个数组元素时，被删除的元素已经不再属于该数组。下面的例子中用 `delete` 删除了 `trees[3]`。

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(3 in trees); // false
```

以上操作创建了一个[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)，如果你想让一个数组元素继续存在，但是其值是 `undefined`，那么可以将 `undefined` 赋值给这个元素而不是使用 `delete`。下面的例子中，`trees[3]` 被赋值为 `undefined`，但该数组元素仍然存在。

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
console.log(3 in trees); // true
```

如果你想通过改变数组的内容来移除一个数组元素，请使用 {{jsxref("Array/splice()", "splice()")}} 方法。在下面的例子中，通过使用 {{jsxref("Array/splice()", "splice()")}}，将 `trees[3]` 从数组中移除。

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

### 删除不可配置属性

当一个属性被标记为不可配置时，`delete` 不会有任何效果，并将返回 `false`。在严格模式下，会抛出 `TypeError`。

```js
const Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // 返回 false
```

{{jsxref("Statements/var","var")}} 会创建不可配置的属性，它不能用 `delete` 运算符删除。

```js
// 由于“nameOther”是使用 var 关键字声明的，
// 它被标记为不可配置的
var nameOther = "XYZ";

// 我们可以通过以下代码访问这个全局属性：
Object.getOwnPropertyDescriptor(globalThis, "nameOther");
// {
//   value: "XYZ",
//   writable: true,
//   enumerable: true,
//   configurable: false
// }

delete globalThis.nameOther; // 返回 false
```

在严格模式下，会抛出异常。

### 删除全局属性

如果一个全局属性是可配置的（例如，通过直接的属性赋值），它可以被删除，随后将它们作为全局变量的引用将产生 {{jsxref("ReferenceError")}}。

```js
globalThis.globalVar = 1;
console.log(globalVar); // 1
// 在非严格模式下，也可以使用 `delete globalVar`
delete globalThis.globalVar;
console.log(globalVar); // ReferenceError: globalVar is not defined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [深入分析 delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
