---
title: HTMLElement.hidden
slug: Web/API/HTMLElement/hidden
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLElement", "HTML 元素")}}的 **`hidden`** 属性是一个 {{jsxref("Boolean")}} 类型的值，如果想要隐藏元素，就将值设置为 `true`，否则就将值设置为`false`。这完全不同于使用 CSS 属性 {{cssxref("display")}} 来控制一个元素的可见性。

`hidden` 属性应用于所有展现模式，并且不应用于隐藏用户可直接访问的内容。

适用的情况，包括：

- 目前还不相关但将来可能会被用到的内容
- 之前还需要但现在不再被需要用到的内容
- 以类似于模板的方式被页面的其他部分所重复使用的内容
- 创建一个屏幕上不可见的画布来作为绘制的缓冲区

不适用的情况，包括

- 隐藏选项卡的对话框中的面板
- 隐藏一个演示文稿中的内容，同时又希望这个内容在其他演示文稿中是可见的

> **备注：** Elements that are not `hidden` must not link to elements which are.

## 语法

```
isHidden = HTMLElement.hidden;


HTMLElement.hidden = true | false;
```

### 值

{{jsxref("Boolean")}} 类型的值，如果想要隐藏元素，则设置为 `true`，否则设置为 `false`。

## 示例

在这个例子中，当用户点击了 welcome 面板中的按钮后，welcome 面板就会被隐藏掉，并在原位置显示出 follow-up 面板，follow-up 面板包含了致谢信息。

### JavaScript

```js
document.getElementById("okButton").addEventListener(
  "click",
  function () {
    document.getElementById("welcome").hidden = true;
    document.getElementById("awesome").hidden = false;
  },
  false,
);
```

这段代码用来为 welcome 面板中的按钮绑定一个事件监听器，这个事件监听器会隐藏 welcome 面板并在其原位置显示出 follow-up 面板。

### HTML

welcome 面板和 follow-up 面板的 HTML 代码。

#### The welcome panel

```html
<div id="welcome" class="panel">
  <h1>Welcome to Foobar.com!</h1>
  <p>By clicking "OK" you agree to be awesome every day!</p>
  <button class="button" id="okButton">OK</button>
</div>
```

这段 HTML 代码用于创建一个面板（是一个 {{HTMLElement("div")}} 的块），这个面板会对进入到该站点的用户表示欢迎，并提示他们只要点击了按钮就代表他们同意面板的内容。

#### The follow-up panel

一旦用户点击了 welcome 面板中的按钮，JavaScript 代码就会通过修改 `hidden` 属性来切换 welcome 面板和 follow-up 面板。

```html
<div id="awesome" class="panel" hidden>
  <h1>Thanks!</h1>
  <p>
    Thank you <strong>so</strong> much for agreeing to be awesome today! Now get
    out there and do awesome things awesomely to make the world more awesome!
  </p>
</div>
```

### CSS

上述内容使用了下述的 CSS 样式。

```css
.panel {
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.button {
  font:
    22px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}
```

### 结果

{{ EmbedLiveSample('示例', 560, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`hidden`](/zh-CN/docs/Web/HTML/Global_attributes#hidden) 属性
- {{cssxref("display")}}
