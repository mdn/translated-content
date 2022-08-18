---
title: 严格不相等 (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
---
{{jsSidebar("Operators")}}

严格不等式操作符 (!==) 检查它的两个对象是否不相等，返回一个布尔结果。与不等式运算符不同，严格不等式运算符总是认为不同类型的对象是不同的。

{{EmbedInteractiveExample("pages/js/expressions-strict-equality.html")}}

## 语法

```plain
x !== y
```

## 描述

严格不等式运算符检查其对象是否不相等。它是严格相等运算符的否定，因此下面两行总是会给出相同的结果：

```js
x !== y

!(x === y)
```

有关比较算法的详细信息，请参阅严格相等运算符的页面。

与严格相等运算符一样，严格不等运算符始终认为不同类型的对象是不同的：

```js
3 !== "3"; // true
```

## 示例

### 比较相同类型的对象

```js
console.log("hello" !== "hello");   // false
console.log("hello" !== "hola");    // true

console.log(3 !== 3);               // false
console.log(3 !== 4);               // true

console.log(true !== true);         // false
console.log(true !== false);        // true

console.log(null !== null);         // false
```

### 比较不同类型的对象

```js
console.log("3" !== 3);           // true

console.log(true !== 1);          // true

console.log(null !== undefined);  // true
```

### 比较 Object 对象

```js
const object1 = {
  name: "hello"
}

const object2 = {
  name: "hello"
}

console.log(object1 !== object2);  // true
console.log(object1 !== object1);  // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [Inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
