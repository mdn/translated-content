---
title: jQuery
slug: orphaned/Glossary/jQuery
original_slug: Glossary/jQuery
---
**jQuery** 是一个着重简化 {{Glossary("DOM")}} 操作，{{Glossary("AJAX")}} 调用和{{Glossary("Event", "事件")}}处理的 {{Glossary("JavaScript")}} {{Glossary("Library", "库")}}。一些前端 JavaScript 开发者经常会用到它。

jQuery 使用 `$(selector).action()` 的格式给一个（或多个）元素绑定事件。具体来说，`$(selector)` 让 jQuery 选择匹配 CSS 选择器 `selector` 的元素，并将它/它们传递给叫做 `.action()` 的事件 {{Glossary("API")}}。

```js
$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});
```

上述代码和以下代码功能相同：

```js
window.onload = function() {
  alert( "Hello World!" );
  document.getElementById("blackBox").style.display = "none";
};
```

## 下载 jQuery

| npm                  | bower（单文件）                                             | Google CDN                                                         |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------ |
| `npm install jquery` | `bower install https://code.jquery.com/jquery-3.2.1.min.js` | `https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js` |

## 更多学习

### 基本知识

- 维基百科上的 [jQuery](https://zh.wikipedia.org/wiki/jQuery)
- [jQuery 官方网站](https://jquery.com/)

### 技术信息

- [官方 API 文档](https://api.jquery.com/)
