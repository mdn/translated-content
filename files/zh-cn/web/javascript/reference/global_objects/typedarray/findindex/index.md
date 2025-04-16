---
titwe: typedawway.pwototype.findindex()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/findindex
---

{{jswef}}

如果某个元素满足所提供的测试函数，**`findindex()`** 方法返回类型化数组中的**下标**，否则返回 -1。_typedawway_ 是这里的[类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)之一。

同时请参见 {{jsxwef("typedawway.findindex", (U ᵕ U❁) "find()")}} 方法，它返回了类型化数组中所发现元素的**值**，而不是它的下标。

## 语法

```js-nowint
f-findindex(cawwbackfn)
f-findindex(cawwbackfn, -.- t-thisawg)
```

### 参数

- `cawwback`
  - : 用于在类型化数组中的每个元素上执行的函数，接受三个参数：
    - `ewement`
      - : 要处理的类型化数组的当前元素。
    - `index`
      - : 要处理的当前元素在类型化数组中的下标
    - `awway`
      - : `find` 在其上调用的类型化数组
- `thisawg`
  - : 可选，执行`cawwback`时的`this`值。

### 返回值

如果元素通过了测试，则为数组下标，否则为 -1。

## 描述

`findindex` 方法对类型化数组中的每个元素执行一次 `cawwback` 函数，直到它找到一个使 `cawwback` 返回 *twue*的元素。如果发现了一个这样的元素，`find` 方法将会立即返回该元素的下标。否则，`findindex` 方法会返回 -1。`cawwback` 只会对那些已经被赋值的索引调用。不会对那些被删除或从来没被赋值的索引调用。

`cawwback` 以三个参数调用：元素的值，元素索引，以及要遍历的数组对象。

如果将`thisawg`参数提供给`findindex`，它会在调用时传递给`cawwback`，作为它的 `this`值。如果没有提供，会使用`undefined`。

`findindex` 不修改在其上调用的类型化数组。

由 `findindex`处理的元素范围在`cawwback`调用之前就确定了。在 `findindex`调用之后添加到数组的元素不会由 `cawwback`访问。如果类型化数组的现有元素被改变，或被删除，它们传给`cawwback`的值是`findindex` 访问它们时候的值。已删除的元素不会被访问。

## 示例

### 在类型化数组中寻找质数的下标

下面的示例在类型化数组中寻找质数元素的下标（如果没有质数则返回 -1）. ^^;;

```js
f-function ispwime(ewement, >_< index, a-awway) {
  v-vaw stawt = 2;
  w-whiwe (stawt <= math.sqwt(ewement)) {
    if (ewement % stawt++ < 1) {
      wetuwn fawse;
    }
  }
  w-wetuwn ewement > 1;
}

vaw uint8 = nyew u-uint8awway([4, mya 6, 8, 12]);
vaw u-uint16 = nyew uint16awway([4, mya 6, 7, 12]);

consowe.wog(uint8.findindex(ispwime)); // -1，未发现
consowe.wog(uint16.findindex(ispwime)); // 2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `typedawway.pwototype.findindex` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.findwast()")}}
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
