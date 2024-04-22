---
title: unload
slug: Web/API/Window/unload_event
---

{{APIRef}}

当文档或一个子资源正在被卸载时，触发 **`unload`** 事件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">可冒泡（Bubbles）</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">可取消（Cancelable）</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">接口（Interface）</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">事件处理程序属性（Event handler property）</th>
      <td>
        {{domxref("WindowEventHandlers/onunload", "onunload")}}
      </td>
    </tr>
  </tbody>
</table>

它在下面两个事件后被触发：

1. [beforeunload](/zh-CN/docs/Mozilla_event_reference/beforeunload) (可取消默认行为的事件)
2. [pagehide](/zh-CN/docs/Mozilla_event_reference/pagehide)

文档处于以下状态：

- 所有资源仍存在 (图片，iframe 等.)
- 对于终端用户所有资源均不可见
- 界面交互无效 (`window.open`, `alert`, `confirm` 等.)
- 错误不会停止卸载文档的过程

请注意`unload`事件也遵循文档树：父 iframe 会在子 iframe 卸载前卸载 (参考下面的例子).

## 示例

```html
<!doctype html>
<html>
  <head>
    <title>Parent Frame</title>
    <script>
      window.addEventListener("beforeunload", function (event) {
        console.log("I am the 1st one.");
      });
      window.addEventListener("unload", function (event) {
        console.log("I am the 3rd one.");
      });
    </script>
  </head>
  <body>
    <iframe src="child-frame.html"></iframe>
  </body>
</html>
```

下面是 `child-frame.html 的内容`:

```html
<!doctype html>
<html>
  <head>
    <title>Child Frame</title>
    <script>
      window.addEventListener("beforeunload", function (event) {
        console.log("I am the 2nd one.");
      });
      window.addEventListener("unload", function (event) {
        console.log("I am the 4th and last one…");
      });
    </script>
  </head>
  <body>
    ☻
  </body>
</html>
```

当父 iframe 被卸载，事件将按 `console.log()` 消息描述的顺序触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}、{{domxref("Document/readystatechange_event", "readystatechange")}}、{{domxref("Window/load_event", "load")}}
- [Unloading Documents — unload a document](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
