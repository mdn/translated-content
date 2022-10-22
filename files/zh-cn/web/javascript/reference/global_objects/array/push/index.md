---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
---

{{JSRef}}

**`push()`** 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## 语法

```js
push(element0)
push(element0, element1)
push(element0, element1, /* … ,*/ elementN)
```

### 参数

- `elementN`
  - : 被添加到数组末尾的元素。

### 返回值

当调用该方法时，新的 {{jsxref("Array.length", "length")}} 属性值将被返回。

## 描述

push 方法将值追加到数组中。

`push` 方法具有通用性。该方法和 {{jsxref("Function.call", "call()")}} 或 {{jsxref("Function.apply", "apply()")}} 一起使用时，可应用在类似数组的对象上。`push` 方法根据 `length` 属性来决定从哪里开始插入给定的值。如果 `length` 不能被转成一个数值，则插入的元素索引为 0，包括 `length` 不存在时。当 `length` 不存在时，将会创建它。

唯一的原生类数组（array-like）对象是 {{jsxref("Global_Objects/String", "Strings")}}，尽管如此，它们并不适用该方法，因为字符串是不可改变的。

## 示例

### 添加元素到数组

下面的代码创建了 `sports` 数组，包含两个元素，然后又把两个元素添加给它。`total` 变量为数组的新长度值。

```js
var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");

console.log(sports);
// ["soccer", "baseball", "football", "swimming"]

console.log(total);
// 4
```

### 合并两个数组

该示例使用 {{jsxref("Function.apply", "apply()")}} 添加第二个数组的所有元素。

注意当第二个数组 (如示例中的 moreVegs) 太大时不要使用这个方法来合并数组，因为事实上一个函数能够接受的参数个数是有限制的。具体可以参考 {{jsxref("Function.apply", "apply()")}} 。

```js
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// 将第二个数组融合进第一个数组
// 相当于 vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables);
// ['parsnip', 'potato', 'celery', 'beetroot']
```

### 像数组一样使用对象

如上所述，push 是特意设计为通用的，我们可以使用它来获得便利。正如下面的例子所示，Array.prototype.push 可以在一个对象上工作。注意，我们没有创建一个数组来存储对象的集合。相反，我们将该集合存储在对象本身上，并使用在 Array.prototype.push 上使用的 `call` 来调用该方法，使其认为我们正在处理数组，而它只是像平常一样运作，这要感谢 JavaScript 允许我们建立任意的执行上下文。

```js
var obj = {
    length: 0,

    addElem: function addElem (elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
```

注意，尽管 obj 不是数组，但是 push 方法成功地使 obj 的 length 属性增长了，就像我们处理一个实际的数组一样。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.push` in `core-js` with fixes of this method](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
