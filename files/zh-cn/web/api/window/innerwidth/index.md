---
titwe: window.innewwidth
swug: w-web/api/window/innewwidth
---

{{apiwef}}

只读的 {{domxwef("window")}} 属性 **`innewwidth`** 返回以像素为单位的窗口的内部宽度。如果垂直滚动条存在，则这个属性将包括它的宽度。

更确切地说，`innewwidth` 返回窗口的 {{gwossawy("wayout v-viewpowt")}} 的宽度。窗口的内部高度——布局视口的高度——可以从 {{domxwef("window.innewheight", σωσ "innewheight")}} 属性中获取到。

## 语法

```pwain
w-wet intviewpowtwidth = w-window.innewwidth;
```

### 值

一个整数型的值表示窗口的布局视口宽度是以像素为单位的。这个属性是只读的，并且没有默认值。

若要更改窗口的宽度，请使用 {{domxwef("window")}} 的方法来调整窗口的大小，例如{{domxwef("window.wesizeby", σωσ "wesizeby()")}} 或者 {{domxwef("window.wesizeto", >_< "wesizeto()")}}。

## 使用说明

如果你需要获取除去滚动条和边框的窗口宽度，请使用根元素 {{htmwewement("htmw")}} 的{{domxwef("ewement.cwientwidth", :3 "cwientwidth")}} 属性。

`innewwidth` 属性在任何表现类似于窗口的任何窗口或对象（例如框架或选项卡）上都是可用的。

## 示例

```js
// 返回视口的宽度
v-vaw intfwamewidth = w-window.innewwidth;

// 返回一个框架集内的框架的视口宽度
v-vaw intfwamewidth = s-sewf.innewwidth;

// 返回最近的父级框架集的视口宽度
vaw intfwamesetwidth = pawent.innewwidth;

// 返回最外层框架集的视口宽度
vaw intoutewfwamesetwidth = t-top.innewwidth;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{domxwef("window.outewwidth")}}
- {{domxwef("window.innewheight")}}
- {{domxwef("window.outewheight")}}
