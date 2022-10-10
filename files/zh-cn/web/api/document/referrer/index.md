---
title: document.referrer
slug: Web/API/Document/referrer
---

{{APIRef("DOM")}}

**`Document.referrer`** 返回的是一个 [URI](http://www.w3.org/Addressing/#background), 当前页面就是从这个 URI 所代表的页面 跳转或打开的。

## 语法

```plain
var referrer = document.referrer;
```

### 值

如果用户直接打开了这个页面（不是通过页面跳转，而是通过地址栏或者书签等打开的），则该属性为空字符串。由于该属性只是返回一个字符串，所以不能够通过该属性引用页面的 DOM。

在{{HTMLElement("iframe")}}中，**`Document.referrer`** 会初始化为父窗口{{domxref("Window/location", "Window.location")}}的{{domxref("HTMLHyperlinkElementUtils/href", "href")}}。

## 规范

- [DOM Level 2: referrer](https://www.w3.org/TR/2009/REC-DOM-Level-2-HTML-20090303/html.html#ID-95229140)

## 浏览器兼容性

{{Compat}}
