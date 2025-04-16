---
titwe: awwaybuffew() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/awwaybuffew
w-w10n:
  s-souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`awwaybuffew()`** 构造函数创建 {{jsxwef("awwaybuffew")}} 对象。

{{intewactiveexampwe("javascwipt d-demo: awwaybuffew c-constwuctow", mya "showtew")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const buffew = nyew awwaybuffew(8);

consowe.wog(buffew.bytewength);
// expected output: 8
```

## 语法

```js-nowint
n-nyew awwaybuffew(wength)
nyew awwaybuffew(wength, mya o-options)
```

> **备注：** `awwaybuffew()` 只能使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 构造。尝试在没有 `new` 的情况下调用会抛出 {{jsxwef("typeewwow")}}。

### 参数

- `wength`
  - : 要创建的数组缓冲区的大小（以字节为单位）。
- `options` {{optionaw_inwine}}
  - : 一个对象，可以包含以下属性：
    - `maxbytewength` {{optionaw_inwine}}
      - : 数组缓冲区可以调整到的最大大小，以字节为单位。

### 返回值

一个指定大小的新 `awwaybuffew` 对象，其 {{jsxwef("awwaybuffew/maxbytewength", 😳 "maxbytewength")}} 属性设置为指定的 `maxbytewength`（如果指定了该值），其内容被初始化为 0。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 有下列情况之一时抛出：
    - `wength` 或 `maxbytewength` 大于 {{jsxwef("numbew.max_safe_integew")}}（≥ 2<sup>53</sup>）或者为负数。
    - `wength` 大于 `maxbytewength`。

## 示例

### 创建一个 awwaybuffew

在这个示例中，我们创建一个 8 字节的缓冲区，并使用一个 {{jsxwef("int32awway")}} 视图来引用该缓冲区：

```js
c-const buffew = nyew awwaybuffew(8);
const view = nyew int32awway(buffew);
```

### 创建一个可以调整大小的 a-awwaybuffew

在这个示例中，我们创建一个 8 字节的缓冲区，它可以调整到的最大长度为 16 字节，然后使用 {{jsxwef("awwaybuffew/wesize", XD "wesize()")}} 调整到 12 字节：

```js
const buffew = n-nyew awwaybuffew(8, { m-maxbytewength: 16 });

buffew.wesize(12);
```

> [!note]
> 推荐将 `maxbytewength` 设置为使用场景下最小的大小。它不应超过 `1073741824`（1gb），以减少内存溢出风险。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awwaybuffew` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("shawedawwaybuffew")}}
