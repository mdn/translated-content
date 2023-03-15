---
title: Window.defaultStatus
slug: Web/API/Window/defaultStatus
---

{{ APIRef() }}{{deprecated_header}}

获取或设置给定窗口的状态栏文本。

## Syntax

```plain
var sMsg = window.defaultStatus;
window.defaultStatus = sMsg;
```

### Parameters

- `sMsg` 是一个保存了状态栏默认显示文本的字符串。

## Example

```plain
<html>
 <body onload="window.defaultStatus='hello!';"/>
  <button onclick="window.confirm('你确定要退出？');">confirm</button>
 </body>
</html>
```

## Notes

页面 HTML 加载完成后要设置状态栏内容可以使用 [window.status](/zh-CN/Gecko_DOM_Reference/window/status).

## Specification

HTML5
