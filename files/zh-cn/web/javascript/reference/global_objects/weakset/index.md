---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
---
{{JSRef}}

**`WeakSet`** 对象允许你将*弱保持对象*存储在一个集合中。

## 语法

```plain
 new WeakSet([iterable]);
```

### 参数

- iterable
  - : 如果传入一个[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)作为参数，则该对象的所有迭代值都会被自动添加进生成的 `WeakSet` 对象中。null 被认为是 undefined。

## 示例

### 使用 `WeakSet`对象

```js
var ws = new WeakSet();
var foo = {};
var bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo);    // true
ws.has(bar);   // true

ws.delete(foo); // 从 set 中删除 foo 对象
ws.has(foo);    // false, foo 对象已经被删除了
ws.has(bar);    // true, bar 依然存在
```

注意， `foo !== bar`。 尽管它们是相似的对象，但是它们不是**_同一个对象。_**因此，它们都可以被加入到 set 中。

## 描述

`WeakSet` 对象是一些对象值的集合，并且其中的每个对象值都只能出现一次。在`WeakSet`的集合中是唯一的

它和 {{jsxref("Set")}} 对象的区别有两点：

- 与`Set`相比，`WeakSet` 只能是**对象的集合**，而不能是任何类型的任意值。
- `WeakSet`持弱引用：集合中对象的引用为弱引用。 如果没有其他的对`WeakSet`中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着 WeakSet 中没有存储当前对象的列表。 正因为这样，`WeakSet` 是不可枚举的。

### 检测循环引用

递归调用自身的函数需要一种通过跟踪哪些对象已被处理，来应对循环数据结构的方法。

为此，WeakSet 非常适合处理这种情况：

```js
// 对 传入的 subject 对象 内部存储的所有内容执行回调
function execRecursively(fn, subject, _refs = null){
  if(!_refs)
    _refs = new WeakSet();

  // 避免无限递归
  if(_refs.has(subject))
    return;

  fn(subject);
  if("object" === typeof subject){
    _refs.add(subject);
    for(let key in subject)
      execRecursively(fn, subject[key], _refs);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar"
  }
};

foo.bar.baz = foo; // 循环引用！
execRecursively(obj => console.log(obj), foo);
```

在此，在第一次运行时创建`WeakSet`，并将其与每个后续函数调用一起传递（使用内部参数\_refs）。 对象的数量或它们的遍历顺序无关紧要，因此，WeakSet 比{{jsxref("Set")}}更适合（和执行）跟踪对象引用，尤其是在涉及大量对象时。

## 属性

- `WeakSet.length`
  - : `length` 属性的值为 0.
- {{jsxref("WeakSet.prototype")}}
  - : 表示`WeakSet`构造函数的原型。 允许向所有`WeakSet`对象添加属性。

## `WeakSet` 实例

所有 `WeakSet` 实例都继承自 {{jsxref("WeakSet.prototype")}}.

### 属性

{{page('zh-CN/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype','Properties')}}

### 方法

{{page('zh-CN/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype','Methods')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
