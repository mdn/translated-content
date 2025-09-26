---
title: document.hasFocus
slug: Web/API/Document/hasFocus
---

{{ ApiRef }}

**`Document.hasFocus()`** 方法返回一个 {{jsxref("Boolean")}}，表明当前文档或者当前文档内的节点是否获得了焦点。该方法可以用来判断当前文档中的活动元素是否获得了焦点。

> [!NOTE]
> 当查看一个文档时，当前文档中获得焦点的元素一定是当前文档的活动元素，但一个文档中的活动元素不一定获得了焦点.。例如，一个在后台的窗口中的活动元素一定没有获得焦点。

## 语法

```js-nolint
hasFocus()
```

### 返回值

如果当前文档的活动元素获得了焦点，返回 `true`，否则返回 false。

## 示例

```html
<!doctype html>
<html>
  <head>
    <style type="text/css">
      #message {
        font-weight: bold;
      }
    </style>

    <script type="text/javascript">
      setInterval("CheckPageFocus()", 200);

      function CheckPageFocus() {
        var info = document.getElementById("message");
        if (document.hasFocus()) {
          info.innerHTML = "该页面获得了焦点。";
        } else {
          info.innerHTML = "该页面没有获得焦点。";
        }
      }

      function OpenWindow() {
        window.open(
          "http://developer.mozilla.org/",
          "mozdev",
          "width=640, height=300, left=150, top=260",
        );
      }
    </script>
  </head>

  <body>
    document.hasFocus 演示<br /><br />
    <div id="message">等待用户操作</div>
    <br />
    <button onclick="OpenWindow()">打开一个新窗口</button>
  </body>
</html>
```

## 浏览器兼容性

{{Compat}}
