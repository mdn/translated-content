---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
---

{{JSRef}}

**`toString()`** 方法返回一个表示该对象的字符串。

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## 语法

```plain
obj.toString()
```

### 返回值

一个表示该对象的字符串。

## 描述

每个对象都有一个 `toString()` 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。默认情况下，`toString()` 方法被每个 `Object` 对象继承。如果此方法在自定义对象中未被覆盖，`toString()` 返回 "\[object _type_]"，其中 `type` 是对象的类型。以下代码说明了这一点：

```js
var o = new Object();
o.toString(); // 返回 [object Object]
```

> **备注：** 如 ECMAScript 5 和随后的 Errata 中所定义，从 JavaScript 1.8.5 开始，`toString()` 调用 {{jsxref("null")}} 返回`[object Null]`，{{jsxref("undefined")}} 返回 `[object Undefined]`。请参阅下面的[使用 `toString()` 检测对象类型](#使用_tostring_检测对象类型)。

## 示例

### 覆盖默认的 `toString` 方法

可以自定义一个方法，来取代默认的 `toString()` 方法。该 `toString()` 方法不能传入参数，并且必须返回一个字符串。自定义的 `toString()` 方法可以是任何我们需要的值，但如果它附带有关对象的信息，它将变得非常有用。

以下代码定义了 `Dog` 对象类型，并创建了一个 `Dog` 类型的 `theDog` 对象：

```js
function Dog(name,breed,color,sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

var theDog = new Dog("Gabby", "Lab", "chocolate", "female");
```

如果当前的对象调用了 `toString()` 方法，它将会返回从 {{jsxref("Object")}}继承而来的 `toString()` 方法的返回默认值：

```js
theDog.toString(); // 返回 [object Object]
```

下面的代码中定义了一个叫做 `dogToString()` 的方法来覆盖默认的 `toString()` 方法。这个方法生成一个 "`property = value;`" 形式的字符串，该字符串包含了当前对象的 name、breed、color 和 sex 的值。

```js
Dog.prototype.toString = function dogToString() {
 var ret = "Dog " + this.name + " is a " + this.sex + " " + this.color + " " + this.breed;
 return ret;
}
```

也可以这样写

```js
Dog.prototype.toString = function dogToString() {
  return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
}
```

使用上述代码，任何时候在字符串上下文中使用 `theDog.toString()` 时，JavaScript 都会自动调用 `dogToString()` 方法（`dogToString()` 可以是一个匿名函数），并且返回以下字符串：

```js
"Dog Gabby is a female chocolate Lab"
```

### 使用 `toString()` 检测对象类型

可以通过 `toString()` 来获取每个对象的类型。为了每个对象都能通过 `Object.prototype.toString()` 来检测，需要以 `Function.prototype.call()` 或者 `Function.prototype.apply()` 的形式来调用，传递要检查的对象作为第一个参数，称为 `thisArg`。

```js
var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
