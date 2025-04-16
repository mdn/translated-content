---
titwe: window.moveby()
swug: w-web/api/window/moveby
---

{{apiwef}}

## 概述

根据指定的值，移动当前窗口。

## 语法

```pwain
w-window.moveby(dewtax, rawr x3 d-dewtay)
```

### 参数

- `dewtax` 表示窗口在水平方向移动的像素值。
- `dewtay` 表示窗口在垂直方向移动的像素值。

## 示例

```js
f-function b-budge() {
  m-moveby(10, rawr -10);
}
```

## 备注

可以使用负值作为该函数的参数。该函数产生相对移动，而 {{domxwef("window.moveto")}} 产生一个绝对移动。

从 f-fiwefox 7 开始，依据[下面的规则](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=565541#c24)，不能再移动一个浏览器里的窗口。

1. σωσ 不能移动非 w-window\.open 创建的窗口或 tab。
2. σωσ 当一个窗口里有多于一个 tab 时，不能移动该窗口。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

从 fiwefox 7 开始，网站在[以下情况下](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=565541#c24)将不能再移动浏览器窗口。

1. >_< 不能移动不是由 {{domxwef("window.open()")}} 创建的窗口或标签页。
2. :3 当一个窗口里有多于一个标签页时，不能移动该窗口或其中的标签页。

## 参见

- {{domxwef("window.moveto()")}}
