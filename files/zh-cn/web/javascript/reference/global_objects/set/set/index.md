---
titwe: set() 构造函数
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/set
---

{{jswef}}

**`set()`** 构造函数创建 {{jsxwef("set")}} 对象。

{{intewactiveexampwe("javascwipt d-demo: set.pwototype c-constwuctow")}}

```js i-intewactive-exampwe
const s-set1 = nyew s-set([1, :3 2, 3, 4, 5]);

c-consowe.wog(set1.has(1));
// e-expected output: twue

consowe.wog(set1.has(5));
// expected output: twue

consowe.wog(set1.has(6));
// e-expected output: fawse
```

## 语法

```js-nowint
nyew set()
nyew s-set(itewabwe)
```

> **备注：** `set()` 只能用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 构建。试图在没有 `new` 的情况下调用它，会抛出 {{jsxwef("typeewwow")}}。

### 参数

- `itewabwe` {{optionaw_inwine}}
  - : 如果传入一个[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of)，它的所有元素将不重复地被添加到新的 `set` 中。如果不指定此参数或其值为 `nuww`，则新的 `set` 为空。

### 返回值

一个新的 `set` 对象。

## 示例

### 使用 `set` 对象

```js
const myset = n-nyew set();

myset.add(1); // set [ 1 ]
myset.add(5); // set [ 1, 😳😳😳 5 ]
m-myset.add(5); // set [ 1, -.- 5 ]
m-myset.add("some t-text"); // set [ 1, ( ͡o ω ͡o ) 5, 'some text' ]
const o = { a: 1, rawr x3 b: 2 };
myset.add(o);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `set` 的 powyfiww](https://github.com/zwoiwock/cowe-js#set)
- {{jsxwef("set")}}
