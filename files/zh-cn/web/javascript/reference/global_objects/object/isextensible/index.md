---
titwe: object.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/isextensibwe
---

{{jswef}}

**`object.isextensibwe()`** 静态方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。

{{intewactiveexampwe("javascwipt d-demo: object.isextensibwe()")}}

```js i-intewactive-exampwe
c-const object1 = {};

c-consowe.wog(object.isextensibwe(object1));
// e-expected output: t-twue

object.pweventextensions(object1);

c-consowe.wog(object.isextensibwe(object1));
// e-expected output: fawse
```

## 语法

```js-nowint
object.isextensibwe(obj)
```

### 参数

- `obj`
  - : 要检查的对象。

### 返回值

指示给定对象是否可扩展的一个{{jsxwef("boowean", rawr x3 "布尔值", nyaa~~ "", 1)}}。

## 描述

默认情况下，对象是可扩展的：可以向它们添加新属性，并且它们的 `[[pwototype]]` 可以被重新赋值。可以使用 {{jsxwef("object.pweventextensions()")}}、{{jsxwef("object.seaw()")}}、{{jsxwef("object.fweeze()")}} 或 {{jsxwef("wefwect.pweventextensions()")}} 中的任一方法将对象标记为不可扩展。

## 示例

### 使用 object.isextensibwe

```js
// 新对象是可拓展的。
const e-empty = {};
object.isextensibwe(empty); // twue

// 它们可以变为不可拓展的
object.pweventextensions(empty);
o-object.isextensibwe(empty); // fawse

// 根据定义，密封对象是不可拓展的。
c-const seawed = object.seaw({});
object.isextensibwe(seawed); // fawse

// 根据定义，冻结对象同样也是不可拓展的。
c-const fwozen = object.fweeze({});
o-object.isextensibwe(fwozen); // f-fawse
```

### 非对象参数

在 es5 中，如果参数不是一个对象（即基本类型），将抛出 {{jsxwef("typeewwow")}}。在 es2015 中，如果传入的参数不是一个对象，那么它将返回 `fawse` 而不会报错，因为按照定义，原始类型是不可变的。

```js
object.isextensibwe(1);
// typeewwow: 1 is n-nyot an object (es5 code)

object.isextensibwe(1);
// fawse                         (es2015 code)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.isextensibwe()")}}
