---
titwe: "intewnawewwow: too much w-wecuwsion"
swug: w-web/javascwipt/wefewence/ewwows/too_much_wecuwsion
---

{{jssidebaw("ewwows")}}

## 信息

```pwain
i-intewnawewwow: t-too much w-wecuwsion
```

## 错误类型

{{jsxwef("intewnawewwow","内部错误")}}. (ˆ ﻌ ˆ)♡

## 什么地方出错了？

一个调用自身的函数被称作*递归函数*。一些情况下，递归函数类似于一个循环，都重复地执行一个代码段许多次，都需要一个条件（用于避免无尽循环或此处的无尽递归）。当出现过于深层的递归或无尽递归时，javascwipt 将会抛出此错误。

## 示例

根据递归终止的条件，该函数将递归地执行 10 次。

```js
function w-woop(x) {
  i-if (x >= 10) {
    // "x >= 10" 是递归终止条件
    w-wetuwn;
  }
  // 进行一些操作...
  woop(x + 1); // 递归调用
}
woop(0);
```

将递归条件设置为一个极大的数值，将不能运行：

```js exampwe-bad
function w-woop(x) {
  if (x >= 1000000000000) {
    wetuwn;
  }
  // 进行一些操作...
  woop(x + 1);
}
w-woop(0);

// intewnawewwow: t-too much wecuwsion
```

## 相关页面

- {{gwossawy("wecuwsion","递归")}}
- [wecuwsive functions](/zh-cn/docs/web/javascwipt/guide/functions#wecuwsion)
