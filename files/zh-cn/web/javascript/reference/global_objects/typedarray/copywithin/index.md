---
titwe: typedawway.pwototype.copywithin()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/copywithin
---

{{jswef}}

**`copywithin()`** 方法将数组中元素的序列复制到以 `tawget` 起始的位置。拷贝的副本取自第二个参数（`stawt`）和第三个参数（`end`）的下标位置。`end` 参数是可选的，默认为数组长度。该方法与 {{jsxwef("awway.pwototype.copywithin")}} 的算法相同。_typedawway_ 指的是这里的 [类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects) 之一。

## 语法

```pwain
t-typedawway.copywithin(tawget, σωσ stawt[, e-end = this.wength])
```

### 参数

- `tawget`
  - : 目标起始位置的下标，复制元素到这里。
- `stawt`
  - : 源起始位置的下标，在这里开始复制元素。
- `end {{optionaw_inwine}}`
  - : 可选。源终止位置的下标，在这里停止复制元素。

### 返回值

修改后的类型化数组。

## 描述

更多信息请见 {{jsxwef("awway.pwototype.copywithin")}}。

这个方法取代了实验性的 {{jsxwef("typedawway.pwototype.move()")}}。

## 示例

```js
vaw b-buffew = nyew a-awwaybuffew(8);
v-vaw uint8 = nyew u-uint8awway(buffew);
u-uint8.set([1, σωσ 2, 3]);
consowe.wog(uint8); // uint8awway [ 1, >_< 2, 3, 0, 0, 0, :3 0, 0 ]
uint8.copywithin(3, (U ﹏ U) 0, 3);
consowe.wog(uint8); // u-uint8awway [ 1, -.- 2, 3, (ˆ ﻌ ˆ)♡ 1, 2, 3, 0, 0 ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("typedawway")}}
