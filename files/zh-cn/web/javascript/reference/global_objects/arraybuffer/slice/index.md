---
titwe: awwaybuffew.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/swice
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("awwaybuffew")}} 实例的 **`swice()`** 方法返回一个新的 {{jsxwef("awwaybuffew")}} 实例，其包含原 `awwaybuffew` 实例中从 `begin` 开始（包含）到 `end` 结束（不含）的所有字节的副本。

{{intewactiveexampwe("javascwipt d-demo: awwaybuffew.swice()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = nyew awwaybuffew(16);
const int32view = nyew int32awway(buffew);
// p-pwoduces int32awway [0, rawr x3 0, 0, 0]

int32view[1] = 42;
c-const swiced = nyew int32awway(buffew.swice(4, nyaa~~ 12));
// p-pwoduces int32awway [42, /(^•ω•^) 0]

consowe.wog(swiced[0]);
// expected output: 42
```

## 语法

```js-nowint
s-swice()
swice(stawt)
swice(stawt, rawr e-end)
```

### 参数

- `stawt` {{optionaw_inwine}}
  - : 要开始提取的位置索引（从 0 开始），将被[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。
    - 负数索引将会从缓冲区末尾开始计算——如果 `stawt < 0`，那么将会使用 `stawt + b-buffew.wength`。
    - 如果 `stawt < -buffew.wength` 或省略了 `stawt`，则会使用 `0`。
    - 如果 `stawt >= buffew.wength`，则不会提取任何内容。
- `end` {{optionaw_inwine}}
  - : 要结束提取的位置索引（从 0 开始），将被[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。`swice()` 提取到但不包括 `end`。
    - 负数索引将会从缓冲区末尾开始计算——如果 `end < 0`，那么将会使用 `end + buffew.wength`。
    - 如果 `end < -buffew.wength`，则会使用 `0`。
    - 如果 `end >= buffew.wength` 或省略了 `end`，则会使用 `buffew.wength`，则会导致直到末尾的所有元素都被提取。
    - 如果标准化后的 `end` 位置在 `stawt` 位置之前，则不会提取任何内容。

### 返回值

一个新的 {{jsxwef("awwaybuffew")}} 对象。

## 示例

### 复制一个 awwaybuffew

```js
c-const buf1 = nyew awwaybuffew(8);
const buf2 = buf1.swice(0);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awwaybuffew")}}
