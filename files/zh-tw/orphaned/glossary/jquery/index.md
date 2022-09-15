---
title: jQuery
slug: orphaned/Glossary/jQuery
original_slug: Glossary/jQuery
---
jQuery 是專精於簡化 {{Glossary("DOM")}}、{{Glossary("AJAX")}}、與 {{Glossary("Event")}} 操作的 {{Glossary("JavaScript")}} {{Glossary("函式庫")}}。

jQuery 用 `$(selector).action()` 格式，指派元素到指定的事件。詳細來說， `$(selector)` 會呼叫 jQuery 選取 `selector` 元素，並指派它到稱作 `.action()` 事件的 {{Glossary("API")}}。

```js
$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});
```

上面這段 jQuery 程式碼，會執行與這段原生 JavaScript 程式碼相同的事情：

```js
window.onload = function() {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
};
```

或這段：

```js
window.addEventListener("load", () => {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
});
```

## 深入理解

### 基本知識

- 維基百科的 [jQuery](https://zh.wikipedia.org/wiki/jQuery)
- [jQuery 官方網站](https://jquery.com/)

### 技術資訊

- [API 參考文件](https://api.jquery.com/)
