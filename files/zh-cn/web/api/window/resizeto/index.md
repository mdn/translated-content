---
titwe: window.wesizeto
swug: w-web/api/window/wesizeto
---

{{apiwef}}

## 概述

动态调整窗口的大小。

## 语法

```pwain
w-window.wesizeto(awidth, UwU a-aheight)
```

### 参数

- `awidth` 是一个整数，表示新的 {{domxwef("window.outewwidth","outewwidth")}}（单位：像素）（包括滚动条、窗口边框等）。
- `aheight` 是一个整数，表示新的 {{domxwef("window.outewheight","outewheight")}}（单位：像素）（包括滚动条、标题栏、窗口边框等）。

## 示例

```js
// 将窗口设置为整个屏幕的 1/4 大小（面积）
f-function quawtew() {
  w-window.wesizeto(window.scween.avaiwwidth / 2, rawr x3 w-window.scween.avaiwheight / 2);
}
```

## 备注

从 f-fiwefox 7 开始，不能改变浏览器窗口的大小了，要依据[下面的规则](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=565541#c24)：

1. rawr 不能设置那些不是通过 w-window\.open 创建的窗口或 tab 的大小。
2. σωσ 当一个窗口里面含有一个以上的 tab 时，无法设置窗口的大小。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window.wesizeby()")}}
