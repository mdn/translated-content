---
title: <input type="button">
slug: Web/HTML/Element/input/button
---

{{HTMLSidebar}}

**`button`** 类型的 {{htmlelement("input")}} 元素被渲染为简单的按钮，可以根据需要对其进行编程，可以为其分配一个事件处理函数（通常为 {{domxref("Element/click_event", "click")}} 事件），以控制网页上的任何地方的自定义功能。

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> **备注：** `button` 类型的 `<input>` 元素仍然是合法的 HTML 代码，但是新的 {{HTMLElement("button")}} 元素是创建按钮的更好的方式。鉴于 {{HTMLElement("button")}} 的标签文字可以插入至开闭标签之间，你可以在标签中包含 HTML 代码，甚至是图像。

## 值

### 含有值的按钮

`<input type="button">` 的 [`value`](/zh-CN/docs/Web/HTML/Element/Input#值) 属性包含用作按钮标签的字符串。

```html
<input type="button" value="点我" />
```

{{EmbedLiveSample("含有值的按钮", 650, 30)}}

### 不含有值的按钮

如果没有指定 `value`，会得到一个空的按钮：

```html
<input type="button" />
```

{{EmbedLiveSample("不含有值的按钮", 650, 30)}}

## 使用按钮

`<input type="button">` 元素没有默认行为（与之类似的 `<input type="submit">` 和 [`<input type="reset">`](/zh-CN/docs/Web/HTML/Element/Input/reset) 分别用于提交和重置表单）。要让按钮做任何事情，你必须编写 JavaScript 代码。

### 简单的按钮

我们从创建一个具有 {{domxref("Element/click_event", "click")}} 事件处理器的按钮开始，它启动了我们的机器（同时，也切换了按钮的 `value` 和下列段落的文字）：

```html
<form>
  <input type="button" value="开动机器" />
</form>
<p>机器已经停下了。</p>
```

```js
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "开动机器") {
    button.value = "停止机器";
    paragraph.textContent = "机器启动了！";
  } else {
    button.value = "开动机器";
    paragraph.textContent = "机器已经停下了。";
  }
}
```

脚本获得了对 DOM 中代表 `<input>` 的 {{domxref("HTMLInputElement")}} 对象的引用，并将此引用保存在变量 `button` 中。然后，{{domxref("EventTarget.addEventListener", "addEventListener()")}} 被用来建立一个函数，当按钮上发生 {{domxref("Element/click_event", "click")}} 事件时，该函数将被运行。

{{EmbedLiveSample("简单的按钮", 650, 100)}}

### 为按钮添加键盘快捷方式

键盘快捷键可以让用户使用键盘上的某个键或组合键来触发一个按钮。要为一个按钮添加键盘快捷键——就像对任何 {{HTMLElement("input")}} 都有意义的那样——你可以使用 [`accesskey`](/zh-CN/docs/Web/HTML/Global_attributes/accesskey) 全局属性。

在这个例子中，<kbd>s</kbd> 被指定成为访问键，你需要按住浏览器或操作系统所指定的组合键加上 <kbd>s</kbd> 键来触发按钮，参见 [accesskey](/zh-CN/docs/Web/HTML/Global_attributes/accesskey) 以获取一些有用的列表。

```html
<form>
  <input type="button" value="开动机器" accesskey="s" />
</form>
<p>机器已经停下了。</p>
```

```js hidden
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "开动机器") {
    button.value = "停止机器";
    paragraph.textContent = "机器启动了！";
  } else {
    button.value = "开动机器";
    paragraph.textContent = "机器已经停下了。";
  }
}
```

> **备注：** 当然，上述例子的问题是，用户将不知道访问键是什么！在一个真实的网站中，你必须以一种不影响网站设计的方式来提供这些信息（例如，提供一个容易访问的链接，指向关于网站访问键是什么的信息）。

### 禁用和启用按钮

要禁用按钮，在其上指定 [`disabled`](/zh-CN/docs/Web/HTML/Attributes/disabled) 全局属性，就像这样：

```html
<input type="button" value="禁用我" disabled />
```

#### 设置禁用属性

你可以在运行时通过设置 `disabled` 为 `true` 或 `false` 来启用和禁用按钮。在这个例子中，我们的按钮一开始是启用的，但如果你按下它，就会用 `button.disabled = true` 将其禁用。然后，一个 {{domxref("setTimeout()")}} 函数被用来在两秒后将按钮重置为启用状态。

```html
<input type="button" value="已启用" />
```

```js
const button = document.querySelector("input");

button.addEventListener("click", disableButton);

function disableButton() {
  button.disabled = true;
  button.value = "已禁用";
  setTimeout(() => {
    button.disabled = false;
    button.value = "已启用";
  }, 2000);
}
```

{{EmbedLiveSample("设置禁用属性", 650, 60)}}

#### 继承禁用状态

如果没有指定 `disabled` 属性，按钮将从其父元素继承其 `disabled` 状态。这使得一次启用和禁用一组元素成为可能，方法是将它们包围在一个容器中，如 {{HTMLElement("fieldset")}} 元素，然后在容器中设置 `disabled`。

下面的例子显示了这个动作。这与前面的例子非常相似，只是当第一个按钮被按下时，`disabled` 属性被设置在 `<fieldset>` 上——这导致所有三个按钮被禁用，直到两秒的超时时间过去。

```html
<fieldset>
  <legend>按钮组</legend>
  <input type="button" value="按钮 1" />
  <input type="button" value="按钮 2" />
  <input type="button" value="按钮 3" />
</fieldset>
```

```js
const button = document.querySelector("input");
const fieldset = document.querySelector("fieldset");

button.addEventListener("click", disableButton);

function disableButton() {
  fieldset.disabled = true;
  setTimeout(() => {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("继承禁用状态", 650, 100)}}

> **备注：** Firefox 不像其他浏览器那样，它会在不同页面之间保持 {{HTMLElement("button")}} 的[动态禁用的状态](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。请使用 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/button#autocomplete) 属性来控制这个特性。

## 验证

按钮不参与到约束验证中；它们没有用于约束的真值。

## 示例

下面的例子显示了一个非常简单的绘画应用，它是用 {{htmlelement("canvas")}} 元素和一些简单的 CSS 和 JavaScript 创建的（为了简洁，我们将隐藏 CSS）。上面的两个控件允许你选择画笔的颜色和大小。按钮，当点击时，调用一个函数来清除画布。

```html
<div class="toolbar">
  <input type="color" aria-label="选择画笔颜色" />
  <input
    type="range"
    min="2"
    max="50"
    value="30"
    aria-label="选择画笔大小" /><span class="output">30</span>
  <input type="button" value="清除画布" />
</div>

<canvas class="myCanvas">
  <p>Add suitable fallback here.</p>
</canvas>
```

```css hidden
body {
  background: #ccc;
  margin: 0;
  overflow: hidden;
}

.toolbar {
  background: #ccc;
  width: 150px;
  height: 75px;
  padding: 5px;
}

input[type="color"],
input[type="button"] {
  width: 90%;
  margin: 0 auto;
  display: block;
}

input[type="range"] {
  width: 70%;
}

span {
  position: relative;
  bottom: 5px;
}
```

```js
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight - 85);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

const colorPicker = document.querySelector('input[type="color"]');
const sizePicker = document.querySelector('input[type="range"]');
const output = document.querySelector(".output");
const clearBtn = document.querySelector('input[type="button"]');

// covert degrees to radians
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// update sizepicker output value

sizePicker.oninput = () => {
  output.textContent = sizePicker.value;
};

// store mouse pointer coordinates, and whether the button is pressed
let curX;
let curY;
let pressed = false;

// update mouse pointer coordinates
document.onmousemove = (e) => {
  curX = e.pageX;
  curY = e.pageY;
};

canvas.onmousedown = () => {
  pressed = true;
};

canvas.onmouseup = () => {
  pressed = false;
};

clearBtn.onclick = () => {
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, width, height);
};

function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

{{EmbedLiveSample("示例", '100%', 600)}}

## 技术总结

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#值">值</a></strong></td>
      <td>用作按钮标签的字符串</td>
    </tr>
    <tr>
      <td><strong>事件</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>支持的通用属性</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Element/input#类型"><code>type</code></a> 和
        <a href="/zh-CN/docs/Web/HTML/Element/input#值"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM 接口</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>方法</strong></td>
      <td>无</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("input")}} 和实现它的 {{domxref("HTMLInputElement")}} 接口。
- 更现代的 {{HTMLElement("button")}} 元素。
- [表单控件 CSS 兼容性表格](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
