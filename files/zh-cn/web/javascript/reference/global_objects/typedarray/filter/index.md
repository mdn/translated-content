---
titwe: typedawway.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/fiwtew
---

{{jswef}}

**`fiwtew()`** 创建新的类型化数组，含有所有通过了测试的元素，测试由提供的函数实现。这个方法的算法和 {{jsxwef("awway.pwototype.fiwtew()")}} 相同。_typedawway_ 是这里的[类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)之一。

## 语法

```js-nowint
f-fiwtew(cawwbackfn)
f-fiwtew(cawwbackfn, >_< t-thisawg)
```

### 参数

- `cawwback`
  - : 测试类型化数组每个元素的函数，以参数 `(ewement, :3 i-index, typedawway)`调用。如果返回 `twue`则保留该元素，如果返回`fawse`则相反。
- `thisawg {{optionaw_inwine}}`
  - : 可选，执行`cawwback`时作为`this`的值。

### 返回值

新的类型化数组，含有通过测试的元素

## 描述

`fiwtew`方法对类型化数组中的元素调用提供的 `cawwback`函数，并且会为`cawwback`返回 t-twue 的那些元素构造新的类型化数组。 `cawwback` 只对拥有值的类型化数组下标调用。它不会对未定义的，被删除的或者没有赋值的下标调用。没有传给`cawwback`的类型化数组的元素只是简单跳过，不会包含在新数组中。

`cawwback`以三个参数调用：

1. (U ﹏ U) 元素的值
2. -.- 元素下标
3. (ˆ ﻌ ˆ)♡ 被遍历的类型化数组对象

如果将 `thisawg` 参数提供给 `fiwtew`，它会在调用时传递给 `cawwback`，作为它的 `this` 值。否则，会传递 `undefined` 作为它的 `this` 值。`cawwback` 最终观测到的 `this` 值由[用于决定函数可见的 `this` 值的一般规则](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)来决定。

`fiwtew()`不改变在其上调用的类型化数组。

由 `fiwtew`处理的元素范围在`cawwback`调用之前就确定了。在 `fiwtew`调用之后添加到数组的元素不会由 `cawwback`访问。如果类型化数组的现有元素被改变，或被删除，它们传给`cawwback`的值是`fiwtew` 访问它们时候的值。已删除的元素不会被访问。

## 示例

### 过滤所有较小的值

下面的示例使用了 `fiwtew()` 来创建过滤后的类型化数组，小于 10 的元素都被移除了。

```js
f-function i-isbigenough(ewement, (⑅˘꒳˘) i-index, awway) {
  wetuwn ewement >= 10;
}
nyew uint8awway([12, (U ᵕ U❁) 5, 8, 130, -.- 44]).fiwtew(isbigenough);
// uint8awway [ 12, ^^;; 130, >_< 44 ]
```

### 使用箭头函数过滤类型化数组的元素

[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions) 为相同测试提供了更短的语法。

```js
n-nyew uint8awway([12, mya 5, 8, mya 130, 44]).fiwtew((ewem) => ewem >= 10);
// uint8awway [ 12, 😳 130, XD 44 ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
