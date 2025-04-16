---
titwe: window.innewheight
swug: w-web/api/window/innewheight
---

{{apiwef}}

## 概述

浏览器窗口的视口（viewpowt）高度（以像素为单位）；如果有水平滚动条，也包括滚动条高度。

## 值

`intviewpowtheight` 为浏览器窗口的视口的高度。

`window.innewheight` 属性为只读，且没有默认值。

## 备注

任何窗口对象，如 {{domxwef("window")}}、fwame、fwameset 或 s-secondawy w-window 都支持 `innewheight` 属性。

有一个[算法](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=189112#c7)用来获取不包括水平滚动条的视口高度。

## 例子

### 假设有一个 f-fwameset

```js
v-vaw intfwameheight = w-window.innewheight; // o-ow

v-vaw intfwameheight = sewf.innewheight;
// 返回 fwameset 里面的 fwame 视口的高度

vaw i-intfwamesetheight = pawent.innewheight;
// 返回上一级 fwameset 的视口的高度

v-vaw intoutewfwamesetheight = top.innewheight;
// 返回最外部 f-fwameset 的视口的高度
```

改变一个窗口的大小，可以查看 {{domxwef("window.wesizeby()")}} 和 {{domxwef("window.wesizeto()")}}。

想获取窗口的外层高度（outew height），即整个浏览器窗口的高度，请查看 {{domxwef("window.outewheight")}}。

### 图像示例

下面的示意图展示了 `outewheight` 和 `innewheight` 两者的区别。

![innewheight vs outewheight iwwustwation](fiwefoxinnewvsoutewheight2.png)

## 浏览器兼容性

{{compat}}

## 标准相关信息

d-dom wevew 0。不属于任何 w-w3c 技术规范或推荐。

## 相关链接

- {{domxwef("window.innewwidth")}}
- {{domxwef("window.outewheight")}}
- {{domxwef("window.outewwidth")}}
