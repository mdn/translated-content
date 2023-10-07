---
title: 属性访问器
slug: Web/JavaScript/Reference/Operators/Property_accessors
---

{{jsSidebar("Operators")}}

属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点号和方括号。

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html")}}

## 语法

```plain
object.property
object['property']
```

## 描述

我们可以将对象看做是一个*关联数组（*或者：_映射_、_字典_、_哈希表_、_查询表_）。这个数组中的键就是这个对象中属性的名称。通常，当我们提及一个对象的属性时，会对属性与方法之间做个对比。然而，属性与方法之间的区别并不大。一个方法就是一个可以被调用的属性而已，例如一个指向函数 [Function](/zh-CN/docs/Glossary/Function) 实例的引用可以作为对象属性的值。

访问对象属性有两种方式：点号表示法和方括号表示法。

### 点号表示法

```js
get = object.property;
object.property = set;
```

以上代码中，`property`必须是一个有效的 JavaScript 标识符，例如，一串字母数字字符，也包括下划线及美元符号，但不能以数字作为开头。比如，`object.$1`是合法的，而 `object.1`是无效不合法的。

```js
document.createElement("pre");
```

在上述代码块中，`document`中存在一个名为"createElement"的方法并且被调用了。

如果对数字字面量使用方法，并且数字文字没有指数且没有小数点，请在方法调用之前的点之前留出空格，以防止点被解释为小数点。

```js
(77).toExponential();
// 或
(77).toExponential();
// 或
(77).toExponential();
// 或
(77).toExponential();
// 或
(77.0).toExponential();
// 因为 77. === 77.0，没有歧义（no ambiguity）
```

### 方括号表示法

```js
get = object[property_name];
object[property_name] = set;
```

`property_name` 是一个字符串。该字符串不一定是一个合法的标识符；它可以是任意值，例如，"1foo"，"!bar!"，甚至是 " "（一个空格）。

```js
document["createElement"]("pre");
```

这里的代码的功能跟上一个例子的作用是相同的。

括号之前允许有空格。

```js
document["createElement"]("pre");
```

### 属性名称

属性名称必须是字符串或符号 Symbol。这意味着非字符串对象不能用来作为一个对象属性的键。任何非字符串对象，包括 Number，都会通过 [toString](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 方法，被转换成一个字符串。

```js
var object = {};
object["1"] = "value";
console.log(object[1]);
```

上述代码的输出为"value"，因为 1 被类型转换为'1'。

```js
var foo = { unique_prop: 1 },
  bar = { unique_prop: 2 },
  object = {};
object[foo] = "value";
console.log(object[bar]);
```

上述的代码的输出也是 "value"，由于对象 foo 和 bar 都会被转成相同的字符串。在[SpiderMonkey](/zh-CN/docs/Mozilla/Projects/SpiderMonkey) JavaScript 引擎中，这个字符串是 "\[object Object]"。

### 方法绑定

一个方法没有绑定到对象上，那就意味着这个方法是不起作用的。特别要注意的是，在一个方法中`this`对象并不是固定的，例如，`this`不需要指向包含当前方法的对象。`this`可通过函数调用被传递过去的值所替换。详见[方法绑定](/zh-CN/docs/Web/JavaScript/Reference/Operators/this#Method_binding)。

### 注意`eval`

在那些可通过方括号表示法替换的场景下，JavaScript 新手在使用[eval](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 经常会犯错。例如，下面的语法经常在很多代码中找到。

```js
x = eval("document.forms.form_name.elements." + strFormControl + ".value");
```

[`eval`](https://www.nczonline.net/blog/2013/06/25/eval-isnt-evil-just-misunderstood/) 的性能较差，且有安全风险。在任何时候都应该避免使用。而且，此时 `strFormControl` 必须是一个合法的标识符，这在一些表单控件的 name、ID 值之中并不是必要的。所以，使用括号来代替会更好一些：

```js
x = document.forms["form_name"].elements[strFormControl].value;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object")}}
- {{jsxref("Object/defineProperty")}}
