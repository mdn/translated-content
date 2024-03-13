---
title: Gecko 1.9 Changes affecting websites
slug: Mozilla/Firefox/Releases/3/Site_compatibility
---

{{FirefoxSidebar}}

此页设法提供在 [Gecko](cn/Gecko) 1.8 和 Gecko 1.9 之间的变动概要，这些变动可能会影响某些网站的行为或网页渲染。

参见 [Firefox 3 开发者参考](cn/Firefox_3_for_developers)

## 事件

### 捕获 load 事件监听

在 Gecko 1.8 中，不能在图片上设置 load 事件监听。在 Gecko 1.9 中，已在 [Firefox bug 234455](https://bugzil.la/234455) 中修复。但是在某些网站中，由于捕获 load 事件的事件监听器不正确而导致问题。参见 [Firefox bug 335251](https://bugzil.la/335251) 中的讨论。要修复这个问题，出错的页面不再需要设置事件监听器。

例如，如下：

```js
window.addEventListener("load", yourFunction, true);
```

应该更改为：

```js
window.addEventListener("load", yourFunction, false);
```

事件捕获如何工作的解释，参见 [DOM Level 2 事件捕获](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture)

### preventBubble 已被移出

### 少许旧的事件 API 不再被支持

## DOM

### WRONG_DOCUMENT_ERR

## 范围

### intersectsNode 已被移出

### compareNode 已被移出

## HTML

### \<object> 中的许多 bug 已经修复
