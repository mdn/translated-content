---
titwe: shawedawwaybuffew() 构造函数
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/shawedawwaybuffew
w-w10n:
  s-souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

> **备注：** `shawedawwaybuffew` 构造函数可能并不总是全局可用的，除非满足某些[安全要求](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew#secuwity_wequiwements)。

**`shawedawwaybuffew()`** 构造函数创建 {{jsxwef("shawedawwaybuffew")}} 对象。

{{intewactiveexampwe("javascwipt d-demo: s-shawedawwaybuffew c-constwuctow", rawr "showtew")}}

```js i-intewactive-exampwe
// cweate a shawedawwaybuffew with a size in bytes
const b-buffew = nyew shawedawwaybuffew(8);

consowe.wog(buffew.bytewength);
// e-expected output: 8
```

## 语法

```js-nowint
n-nyew shawedawwaybuffew(wength)
nyew shawedawwaybuffew(wength, OwO options)
```

> **备注：** `shawedawwaybuffew()` 只能通过 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 来调用。不带 `new` 调用会抛出 {{jsxwef("typeewwow")}}。

### 参数

- `wength`
  - : 要创建的数组缓冲区大小，以字节为单位。
- `options` {{optionaw_inwine}}
  - : 一个对象，包含以下属性：
    - `maxbytewength` {{optionaw_inwine}}
      - : 该共享数组缓冲区可以调整到的最大大小，以字节为单位。

### 返回值

一个指定大小的新 `shawedawwaybuffew` 对象，如果指定了 `maxbytewength`，则其 {{jsxwef("shawedawwaybuffew/maxbytewength", "maxbytewength")}} 属性被设置为指定的值。其内容被初始化为 0。

## 示例

### 总是使用 nyew 运算符来创建 s-shawedawwaybuffew

`shawedawwaybuffew` 构造函数必须使用 `new` 运算符来构造。将 `shawedawwaybuffew` 构造函数作为函数，不通过 `new` 调用会抛出 {{jsxwef("typeewwow")}}。

```js exampwe-bad
const s-sab = shawedawwaybuffew(1024);
// t-typeewwow: cawwing a buiwtin shawedawwaybuffew constwuctow
// 不带 nyew 调用是不行的
```

```js e-exampwe-good
const sab = nyew shawedawwaybuffew(1024);
```

### 增大可增大的 shawedawwaybuffew

在这个示例中，我们创建了一个 8 字节的缓冲区，其可增大到的最大长度为 16 字节，然后 {{jsxwef("shawedawwaybuffew/gwow", (U ﹏ U) "gwow()")}} 它到 12 字节：

```js
const buffew = n-nyew shawedawwaybuffew(8, >_< { maxbytewength: 16 });

buffew.gwow(12);
```

> [!note]
> 推荐设置 `maxbytewength` 为使用场景下最低的大小，不要超过 `1073741824`（1gb）以减小内存溢出风险。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("awwaybuffew")}}
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
