---
title: Window.history
slug: Web/API/Window/history
---

{{ ApiRef("Window") }}

**`Window.history`** 是一个只读属性，用来获取{{domxref("History")}} 对象的引用，{{domxref("History")}} 对象提供了操作浏览器*会话历史*（浏览器地址栏中访问的页面，以及当前页面中通过框架加载的页面）的接口。

`History` 对象有如下方法：参见 [Manipulating the browser history](/zh-CN/docs/Web/API/History_API) 中的示例和详情。尤其指出的是文章里解释了在使用 `pushState()` 和 `replaceState()` 方法前，你需要了解的安全问题。

## 语法

```plain
var historyObj = window.history;
```

## 示例

```js
history.back(); // 等同于点击浏览器的回退按钮
history.go(-1); //等同于 history.back();
```

## 附注

在顶层页面中，浏览器的回退和前进按钮旁的下拉菜单显示了可以通过`History`对象访问到的页面会话历史（session history）列表。

出于安全考虑，History 对象不允许未授权代码访问会话历史（session History）中其他页面的 URLs，但可以导航到其他会话历史（session History）指向的页面。

未授权代码无法清除会话历史（session History），也不能禁用回退/前进功能。最快捷的可用方式是使用[location.replace()](/zh-CN/DOM/window.location#replace)方法，提供指定的 URL 来替换当前的会话历史（session history）。

## 规范

- [HTML5 History interface](http://whatwg.org/html#the-history-interface)
