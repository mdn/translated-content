---
title: 不等于 (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
---
{{jsSidebar("Operators")}}

不等于运算符 (`!=`) 检查其两个操作数是否不相等，并返回布尔结果。 与严格的不等式运算符不同，它尝试转换和比较不同类型的操作数。

{{EmbedInteractiveExample("pages/js/expressions-inequality.html")}}

## 语法

```plain
x != y
```

## 描述

不等式运算符检查其操作数是否不相等。这是[等于](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)运算符的取反，因此以下两行将始终给出相同的结果：

```js
x != y

!(x == y)
```

有关比较算法的详细信息，请参见[等于](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)运算符的页面。

与等于运算符一样，不等于运算符将尝试转换和比较不同类型的操作数：

```js
3 != "3"; // false
```

为避免这种情况，并要求将不同类型视为不同，请使用[严格的不等于](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_inequality)运算符：

```js
3 !== "3"; // true
```

## 例子

### 没有类型转换的比较

```js
1 != 2;              // true
"hello" != "hola";   // true

1 != 1;              // false
"hello" != "hello";  // false
```

### 与类型转换比较

```js
"1" !=  1;            // false
1 != "1";             // false
0 != false;           // false
0 != null;            // true
0 != undefined;       // true
0 != !!null;          // false, look at Logical NOT operator
0 != !!undefined;     // false, look at Logical NOT operator
null != undefined;    // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3;         // false
number1 != number2;   // true
```

### 对象比较

```js
const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 != object2 // true
object2 != object2 // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Equality operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)
- [Strict equality operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strict inequality operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
