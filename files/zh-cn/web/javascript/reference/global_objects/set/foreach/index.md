---
title: Set.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
---
{{JSRef}}

`forEach` 方法会根据集合中元素的插入顺序，依次执行提供的回调函数。

## 语法

```plain
mySet.forEach(callback[, thisArg])
```

### 参数

- `callback`

  - : 为集合中每个元素执行的回调函数，该函数接收三个参数：

    - **`currentValue`,** **`currentKey{{optional_inline}}`**
      - : **currentValue** 是正在被操作的元素。并且由于集合没有索引，所以 **currentKey** 也表示这个正在被操作的元素。
    - **`set{{optional_inline}}`**
      - : 调用当前 `forEach` 方法的集合对象

- `thisArg`**`{{optional_inline}}`**
  - : 回调函数执行过程中的 `this` 值。

### 返回值

{{jsxref("undefined")}}.

## 描述

`forEach` 方法会依次为集合中的元素执行回调函数，就算元素的值是 `undefined`。

**回调函数**有三个参数：

- 元素的值
- 元素的索引
- 正在遍历的集合对象

但是由于集合对象中没有索引 (keys)，所以前两个参数都是{{domxref("Set")}}中元素的值 (**values**)，之所以这样设计回调函数是为了和{{jsxref("Map.foreach", "Map")}} 以及{{jsxref("Array.forEach","Array")}}的 `forEach` 函数用法保持一致。

如果提供了一个 `thisArg` 参数给 `forEach` 函数，则参数将会作为回调函数中的 `this`值。否则 `this` 值为 `undefined`。回调函数中 `this` 的绑定是根据[函数被调用时通用的 `this` 绑定规则来决定的](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)。

`forEach` 函数为集合对象中每个元素都执行一次回调；它不会返回任何值。

## 例子

### 输出集合对象的内容

以下代码依次打印集合对象的元素：

```js
function logSetElements(value1, value2, set) {
    console.log("s[" + value1 + "] = " + value2);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
