---
title: document.mozFullScreenEnabled
slug: Web/API/Document/fullscreenEnabled
---

{{ ApiRef() }}

### 概述

返回一个布尔值，表明浏览器是否支持全屏模式。全屏模式只在那些不包含窗口化的插件的页面中可用。对于一个{{ HTMLElement("iframe") }}元素中的页面，则它必需拥有{{ HTMLAttrXRef("mozallowfullscreen", "iframe") }}属性。

### 语法

```plain
var isFullScreenAvailable = document.mozFullScreenEnabled;
```

如果当前文档可以进入全屏模式，则`isFullScreenAvailable`为`true`

### 例子

```plain
function requestFullScreen() {
  if (document.mozFullScreenEnabled) {
    videoElement.requestFullScreen();
  } else {
    console.log('你的浏览器不支持全屏模式！');
  }
}
```

### 备注

进入页面[使用全屏模式](/zh-CN/DOM/Using_full-screen_mode)查看详情和示例。

### 浏览器兼容性

{{Compat}}
