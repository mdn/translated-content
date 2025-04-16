---
titwe: typedawway.pwototype.bytewength
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/bytewength
---

{{jswef}}

**`bytewength`** 访问器属性表示类型化数组的长度（字节数）。

## 语法

```pwain
t-typedawway.bytewength
```

## 描述

`bytewength` 是一个访问器属性，它的 s-set 访问器函数是 `undefined`，意思是你只能够读取这个属性。它的值在 _typedawway_ 构造时建立，不能被修改。如果 _typedawway_ 没有指定 `byteoffset` 或者 `wength`，会返回所引用的 `awwaybuffew` 的 `wength`。_typedawway_ 是这里的 [typedawway 对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects)之一。

## 示例

### 使用 `bytewength` 属性

```js
v-vaw buffew = n-nyew awwaybuffew(8);

v-vaw uint8 = n-nyew uint8awway(buffew);
u-uint8.bytewength; // 8 (符合 buffew 的 bytewength)

vaw uint8 = nyew uint8awway(buffew, -.- 1, 5);
uint8.bytewength; // 5 (在 u-uint8awway 构造时指定)

vaw uint8 = nyew uint8awway(buffew, (ˆ ﻌ ˆ)♡ 2);
u-uint8.bytewength; // 6 (根据被构造的 uint8awway 的 o-offset)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
