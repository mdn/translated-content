---
title: document.mozFullScreenElement
slug: Web/API/Document/fullscreenElement
---

{{ ApiRef() }}

### 概述

返回当前文档中正在以全屏模式显示的{{ domxref("Element") }}节点，如果没有使用全屏模式，则返回`null`.

### 语法

```plain
var element = document.mozFullScreenElement;
```

### 示例

```plain
function isVideoInFullsreen() {
  if (document.mozFullScreenElement && document.mozFullScreenElement.nodeName == 'VIDEO') {
    console.log('您的视频正在以全屏模式显示');
  }
}
```

### 辅助

查看[使用"全屏模式"](/zh-CN/docs/DOM/Using_full-screen_mode)页面了解详情。

### 浏览器兼容性

{{Compat}}
