---
title: <input type="color">
slug: Web/HTML/Element/input/color
---

{{HTMLSidebar}}

**`color`** 类型的 {{HTMLElement("input")}} 元素为用户提供了指定颜色的用户界面，或使用可视化颜色选择器，或以 `#rrggbb` 十六进制格式输入颜色值。

虽然 CSS 颜色有很多格式（如颜色名称、功能表记和含有透明通道的十六进制），但是这里只支持简单颜色（无透明通道）。

此元素的外观会因浏览器不同而不同，它可能是一个简单的文本输入，自动验证以确保颜色信息以正确的格式输入，或一个平台标准的颜色选择器，或某种自定义的颜色选择器窗口。

{{EmbedInteractiveExample("pages/tabbed/input-color.html", "tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
    <td><strong><a href="#value">值</a></strong></td>
    <td>
        长度为 7 的指定 {{cssxref("&lt;color&gt;")}} 值的小写十六进制字符串
    </td>
  </tr>
    <tr>
      <td><strong>事件</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} 和
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>支持的公共属性</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a> 和
        <a href="/zh-CN/docs/Web/HTML/Element/input#list"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>list</code> 和 <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM 接口</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>方法</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
 </tbody>
</table>

## 值

`color` 类型的 {{HTMLElement("input")}} 元素的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 总是包含一个 7 个字符的字符串，它以 16 进制格式指定 RGB 颜色。虽然你可以用大写字母或小写字母输入颜色，但它将以小写字母形式存储。该值从不以任何其他形式出现，也从不为空。

> [!NOTE]
> 将该值设置为任何不是有效的、完全不透明的、RGB 颜色的*十六进制表示*，都将导致该值被设置为 `#000000`。特别是，你不能使用 CSS 的标准化颜色名称或任何 CSS 函数语法来设置该值（记住，HTML 和 CSS 是独立的语言和规范）。此外，不支持带有透明通道的颜色；用 9 个字符的十六进制表示（例如 `#009900aa`）指定颜色，也会导致颜色被设置为 `#000000`。

## 使用 color 输入

由于有限的支持属性，`color` 类型的输入内容比较简单。

### 提供默认颜色

你可以更新上面的简单例子，设置一个默认值，这样颜色井就会预先填上默认的颜色，颜色选择器（如果有的话）也会默认为这个颜色。

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("提供默认颜色", 700, 30)}}

如果你没有手动指定的话，其默认值为 `#000000`，即黑色。输入必须为 7 个字符的十六进制表示，意味着需要以“#”符号开始，后跟代表红、绿、蓝的十六进制字符各 2 个（形如 `#rrggbb`）。如果你想输入的颜色是其他格式（比如 CSS 颜色名称或 CSS 颜色函数如 `rgb()` 或 `rgba()` 记法），在设定 `value` 值时必须将其转换为这种格式。

### 监听颜色变化

正如其他类型的 {{HTMLElement("input")}} 元素，有两个和值的改变相关的事件，{{domxref("Element/input_event", "input")}} 和 {{domxref("HTMLElement/change_event", "change")}}。每次颜色变更都会触发 `<input>` 元素上的 `input` 事件。用户关闭选色器之后会触发 `change` 事件。对于这两个事件，都可以通过 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性获取新值。

以下代码为监听颜色值变化的示例：

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### 选取值

当浏览器不支持颜色选择器接口时，它对颜色输入的实现将是一个自动验证内容以确保数值的格式正确的文本框。在这种情况下，你可以使用 {{domxref("HTMLInputElement.select", "select()")}} 方法来选择当前编辑栏中的文本。

如果浏览器提供了选色器，`select()` 方法将会什么也不做。因此，需要留心这两种情况下方法行为的差异。

```js
colorWell.select();
```

## 验证

如果当前的{{Glossary("user agent","用户代理")}}下，用户输入无法转换为 7 个字符的十六进制 RGB 形式，会被判定为非法输入。在这种情况下，{{cssxref(":invalid")}} 伪类会作用于该元素上。

## 示例

让我们创建一个例子，通过跟踪 {{domxref("HTMLElement/change_event", "change")}} 和 {{domxref("Element/input_event", "input")}} 事件，对颜色输入做一些处理，将新颜色应用到文档中的每个 {{HTMLElement("p")}} 元素。

### HTML

这个 HTML 是相当简单的——有若干包含描述材料的段落和一个 ID 为 `colorWell` 的 `color` {{HTMLElement("input")}}，我们将用它来改变段落文本的颜色。

```html
<p>
  An example demonstrating the use of the
  <code>&lt;input type="color"&gt;</code> control.
</p>

<label for="colorWell">Color:</label>
<input type="color" value="#ff0000" id="colorWell" />

<p>
  Watch the paragraph colors change when you adjust the color picker. As you
  make changes in the color picker, the first paragraph's color changes, as a
  preview (this uses the <code>input</code> event). When you close the color
  picker, the <code>change</code> event fires, and we detect that to change
  every paragraph to the selected color.
</p>
```

### JavaScript

首先是一些设置，这里我们建立了一些变量，设置了一个包含我们在第一次加载时要设置的颜色井的变量，然后设置了 {{domxref("Window/load_event", "load")}} 处理器，在页面完全加载后做主要的启动工作。

```js
let colorWell;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
```

#### 初始化

一旦页面完全加载，就会调用我们的 `load` 事件处理器 `startup()`：

```js
function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}
```

在一个叫做 `colorWell` 的变量中获得对颜色 `<input>` 元素的引用，然后将颜色输入的值设置为 `defaultColor` 中的值。然后颜色输入的 {{domxref("Element/input_event", "input")}} 事件被设置为调用我们的 `updateFirst()` 函数，而 {{domxref("HTMLElement/change_event", "change")}} 事件被设置为调用 `updateAll()`。这些都在下面看到。

最后，如果控件被实现为文本字段，我们调用 {{domxref("HTMLInputElement.select", "select()")}} 来选择颜色输入的文本内容（如果提供的是颜色选择器接口，这就没有效果）。

#### 对颜色变化作出反应

我们提供了两个处理颜色变化的函数。`updateFirst()` 函数是为了响应 `input` 事件而调用的。它改变文档中第一个段落元素的颜色，以匹配颜色输入的新值。由于每次对数值进行调整时都会触发 `input` 事件（例如，如果增加了颜色的亮度），在使用颜色选择器时，这些事件会重复发生。

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

当退出颜色选择器时，表明值不会再改变（除非用户重新打开颜色选择器），会向该元素发送 `change` 事件。我们使用 `updateAll()` 函数来处理该事件，使用 [`Event.target.value`](/zh-CN/docs/Web/HTML/Element/input#value) 来获得最终选择的颜色：

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

这将设置每个 {{HTMLElement("p")}} 区块的颜色，使其 {{cssxref("color")}} 属性与颜色输入的当前值相匹配，颜色输入是用 {{domxref("Event.target", "event.target")}} 引用的。

### 结果

最终的运行结果如下所示：

{{EmbedLiveSample("示例", 700, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 属性兼容性列表](/zh-CN/docs/Learn_web_development/Extensions/Forms)
