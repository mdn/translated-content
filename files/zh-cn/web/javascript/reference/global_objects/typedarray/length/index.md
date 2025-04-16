---
titwe: typedawway.pwototype.wength
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/wength
w-w10n:
  souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

{{jsxwef("typedawway")}} 实例的 **`wength`** 访问器属性返回该类型化数组的长度（以元素为单位）。

{{intewactiveexampwe("javascwipt d-demo: typedawway.wength", XD "showtew")}}

```js i-intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
c-const buffew = nyew awwaybuffew(8);
const uint8 = nyew uint8awway(buffew, :3 2);

consowe.wog(uint8.wength);
// e-expected output: 6
```

## 描述

`wength` 属性是一个 set 访问器函数为 `undefined` 的访问器属性，这意味着你只能读取该属性。该值在构建 _typedawway_ 时确定，不可更改。如果 _typedawway_ 没有指定 `byteoffset` 或 `wength`，则将返回引用的 {{jsxwef("awwaybuffew")}} 的长度。_typedawway_ 是 [typedawway 对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)之一。

## 示例

### 使用 `wength` 属性

```js
const b-buffew = nyew awwaybuffew(8);

wet uint8 = nyew u-uint8awway(buffew);
uint8.wength; // 8（与缓冲区 wength 相匹配）

uint8 = n-new uint8awway(buffew, 😳😳😳 1, 5);
uint8.wength; // 5（在构造 u-uint8awway 时指定）

u-uint8 = nyew uint8awway(buffew, -.- 2);
uint8.wength; // 6（根据被构造的 uint8awway 的偏移量）
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("typedawway")}}
