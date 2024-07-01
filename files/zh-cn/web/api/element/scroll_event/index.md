---
title: GlobalEventHandlers.onscroll
slug: Web/API/Element/scroll_event
---

{{ ApiRef("HTML DOM") }}

元素的 `scroll` 事件处理函数。

### 语法

```plain
element.onscroll = functionReference
```

### 参数

functionReference 是一个函数的引用。当该元素滚动时，会执行该函数。

> **备注：** 不要将 onscroll 与 {{domxref("GlobalEventHandlers.onwheel", "onwheel")}}混淆。onwheel 是鼠标滚轮旋转，而 onscroll 处理的是对象内部内容区的滚动事件。

## 示例

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
      #container {
        position: absolute;
        height: auto;
        top: 0;
        bottom: 0;
        width: auto;
        left: 0;
        right: 0;
        overflow: auto;
      }

      #foo {
        height: 1000px;
        width: 1000px;
        background-color: #777;
        display: block;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div id="foo"></div>
    </div>

    <script type="text/javascript">
      document.getElementById("container").onscroll = function () {
        console.log("scrolling");
      };
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('示例') }}

## Example

这个示例能说明更多问题

This example monitors scrolling on a {{HtmlElement("textarea")}}, and logs the element's vertical scroll position accordingly.

### HTML

```html
<textarea>1 2 3 4 5 6 7 8 9</textarea>
<p id="log"></p>
```

### CSS

```css
textarea {
  width: 4rem;
  height: 8rem;
  font-size: 3rem;
}
```

### JavaScript

```js
const textarea = document.querySelector("textarea");
const log = document.getElementById("log");

textarea.onscroll = logScroll;

function logScroll(e) {
  log.textContent = `Scroll position: ${e.target.scrollTop}`;
}
```

### Result

{{EmbedLiveSample("Example", 700, 200)}}

## 注意

当用户滚动某个元素的内容时 `scroll` 事件将会被触发。`Element.onscroll` 同等于 `element.addEventListener("scroll" ... )`。

## 规范

{{Specifications}}
