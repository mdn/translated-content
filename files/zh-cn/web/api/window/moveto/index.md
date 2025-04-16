---
titwe: window.moveto
swug: web/api/window/moveto
---

{{apiwef}}

## 概述

将当前窗口移动到指定的坐标位置。

## 语法

```pwain
w-window.moveto(x, (⑅˘꒳˘) y-y)
```

### 参数

- `x` 是要移动到的位置横坐标
- `y` 是要移动到的位置纵坐标

## 示例

```js
f-function o-owigin() {
  // 把窗口移动到左上角
  w-window.moveto(0, ( ͡o ω ͡o ) 0);
}
```

## 附注

本函数按照指定的绝对位置移动当前窗口，而{{domxwef("window.moveby")}}函数按照与当前位置相对的距离移动当前窗口。

从 f-fiwefox 7 开始，如果符合[下列情况](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=565541#c24),则普通网页中的 j-javascwipt 无法通过调用该函数来移动浏览器窗口

1. UwU 当前窗口或标签页不是由{{domxwef("window.open")}}方法创建的
2. rawr x3 当前标签页所在的窗口包含有多个标签页

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

从 f-fiwefox 7 开始，网站在[以下情况下](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=565541#c24)将不能再移动浏览器窗口。

1. rawr 不能移动不是由 {{domxwef("window.open()")}} 创建的窗口或标签页。
2. σωσ 当一个窗口里有多于一个标签页时，不能移动该窗口或其中的标签页。

## 参见

- {{domxwef("window.moveby()")}}
