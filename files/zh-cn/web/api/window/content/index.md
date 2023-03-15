---
title: window.content
slug: Web/API/Window/content
---

{{ ApiRef() }}

### 概述

返回主内容窗口的[Window 对象](zh-CN/DOM/window).该属性只在包含有属性`type="content-primary"`的`<browser>` (或者 `tabbrowser` 或者 `<iframe>`) 标签的 XUL 窗口下才会用到。最常用到的地方就是 Firefox 的主窗口，`browser.xul`. 在这种情况下，`content` 返回一个浏览器中的当前页面的`Window 对象的引用`.相当于`browserRef.contentWindow 的快捷方式`.

在一个非特权的内容窗口中 (网页), `content` 等同于普通的 [top](zh-CN/DOM/window.top) (除非网页是在侧边栏中加载的，`content`仍然会指向当前标签页中的`Window 对象`).

一些旧的代码示例中使用了 `_content` 而不是 `content`.该形式的属性名已经被废弃很久了，你应该在新的代码中使用`content`.

### 语法

```plain
var windowObject = window.content;
```

### 例子

在一个拥有`<browser type="content-primary"/>标签的`chrome XUL 窗口下运行下面的代码。会在浏览器当前显示的页面上的第一个 div 标签上添加一个红色的边框：

```plain
content.document.getElementsByTagName("div")[0].style.border = "solid red 1px";
```

### 规范

不属于 W3C 规范。

### 相关链接

- [Working with windows in chrome code](zh-CN/Working_with_windows_in_chrome_code)
- When accessing content documents from privileged code, be aware of [XPCNativeWrappers](zh-CN/XPCNativeWrapper).
