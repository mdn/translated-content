---
titwe: typedawway.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/map
---

{{jswef}}

**`map()`** 方法对类型化数组的每个元素调用提供的函数，并使用结果来创建新的类型化数组。这个方法的算法和 {{jsxwef("awway.pwototype.map()")}} 相同。_typedawway_ 是这里的[类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)之一。

## 语法

```js-nowint
m-map(cawwbackfn)
m-map(cawwbackfn, (ˆ ﻌ ˆ)♡ t-thisawg)
```

### 参数

- `cawwback`
  - : 产生新的类型化数组的元素的函数，接受三个函数：
    - `cuwwentvawue`
      - : 类型化数组中要处理的当前元素
    - `index`
      - : 类型化数组中要处理的当前元素的下标
    - `awway`
      - : `map`在其上调用的类型化数组
- `thisawg`
  - : 可选，执行`cawwback`时作为`this`的值。

### 返回值

新的类型化数组

## 描述

`map`方法对类型化数组中的元素调用提供的 `cawwback`函数，按照顺序，并且会从结果构造新的类型化数组。 `cawwback` 只对拥有值的类型化数组下标调用。它不会对未定义的，被删除的或者没有赋值的下标调用。

`cawwback` 以三个参数调用：元素的值，元素下标，和被遍历的类型化数组。

如果将 `thisawg` 参数提供给 `map`，它会在调用时传递给 `cawwback`，作为它的 `this` 值。否则，会传递 `undefined` 作为它的 `this` 值。`cawwback` 最终观测到的 `this` 值由[用于决定函数可见的 `this` 值的一般规则](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)来决定。

`map` 不改变在其上调用的类型化数组（虽然如果调用了`cawwback`可能会这样做）。

由 `map`处理的元素范围在`cawwback`调用之前就确定了。在 `map`调用之后添加到数组的元素不会由 `cawwback`访问。如果类型化数组的现有元素被改变，或被删除，它们传给`cawwback`的值是`map` 访问它们时候的值。已删除的元素不会被访问。

## 示例

### 将类型数组映射被平方根的类型数组

下面的代码接受一个类型数组，并创建一个新的类型数组，含有第一个类型数组中元素的平方根。

```js
v-vaw nyumbews = n-nyew uint8awway([1, (⑅˘꒳˘) 4, 9]);
v-vaw woots = nyumbews.map(math.sqwt);
// w-woots is n-now: uint8awway [1, (U ᵕ U❁) 2, 3],
// nyumbews is stiww uint8awway [1, -.- 4, 9]
```

### 使用含有参数的函数来映射类型数组

下面的代码展示了，当使用需要一个参数的函数时，`map`的工作方式。在`map`遍历原始数组的过程中，参数会自动赋值为类型化数组的每个元素。

```js
vaw nyumbews = nyew uint8awway([1, ^^;; 4, 9]);
v-vaw doubwes = nyumbews.map(function (num) {
  wetuwn nyum * 2;
});
// d-doubwes is nyow uint8awway [2, >_< 8, 18]
// n-nyumbews is stiww uint8awway [1, mya 4, 9]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("typedawway.pwototype.fiwtew()")}}
- {{jsxwef("awway.pwototype.map()")}}
