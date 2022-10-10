---
title: 在 IE6 中使用 XMLHttpRequest
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest_in_IE6
---

[XMLHttpRequest](/zh-CN/DOM/XMLHttpRequest) 在 Internet Explorer 5.0 上作为 ActiveX 控件第一次被 Microsoft 引入。然而，在 IE7 和其它浏览器上，XMLHttpRequest 作为本地 JavaScript 对象而存在。

在现代的浏览器上，你可以使用下面的代码创建一个新的 XMLHttpRequest 对象：

```js
var request = new XMLHttpRequest()
```

如果你需要支持 Internet Explorer 6 和更老的浏览器，你需要像下方所示扩展你的代码：

```js
if (window.XMLHttpRequest) {
    //Firefox、Opera、IE7 和其它浏览器使用本地 JavaScript 对象
    var request = new XMLHttpRequest();
} else {
    //IE 5 和 IE 6 使用 ActiveX 控件
    var request = new ActiveXObject("Microsoft.XMLHTTP");
}
```

### 更多

- [使用 XMLHttpRequest](/zh-CN/DOM/XMLHttpRequest/Using_XMLHttpRequest)
