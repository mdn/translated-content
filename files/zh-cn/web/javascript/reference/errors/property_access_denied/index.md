---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
---

{{jsSidebar("Errors")}}

## 消息

```plain
Error: Permission denied to access property "x"
```

## 错误类型

{{jsxref("Error","错误")}}.

## 什么地方出错了？

尝试访问无权访问的对象。这很可能出现在使用{{HTMLElement("iframe")}}元素时加载了一个不同域名下的页面，这在访问子页面时会违背[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)。

## 示例

```html
<!doctype html>
<html>
  <head>
    <iframe
      id="myframe"
      src="http://www1.w3c-test.org/common/blank.html"></iframe>
    <script>
      console.log(document.getElementById("myframe").contentWindow.document);
      // Error: Permission denied to access property "document"
    </script>
  </head>
  <body></body>
</html>
```

可以参考

- {{HTMLElement("iframe")}}
- [同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)
