---
title: Event：preventDefault() 方法
slug: Web/API/Event/preventDefault
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

{{domxref("Event")}} 接口的 **`preventDefault()`** 方法，告诉{{Glossary("user agent", "用户代理")}}：此事件被显式处理，它默认的动作（例如页面滚动、链接跳转或粘贴文本）不应该照常执行。

此事件仍会继续传播，除非碰到事件监听器调用 {{domxref("Event.stopPropagation", "stopPropagation()")}} 或 {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}} 才停止传播。

如后文所述，对于不可取消的事件（例如通过 {{domxref("EventTarget.dispatchEvent", "EventTarget.dispatchEvent()")}} 分派的、没有指定 `cancelable: true` 的事件），调用 **`preventDefault()`** 是没有任何效果的。

如果被动监听器调用 `preventDefault()`，则不会发生任何事情，并且可能会生成控制台警告。

### 语法

```js-nolint
preventDefault()
```

## 示例

### 阻止默认的点击事件执行

选中复选框是点击复选框的默认行为。下面这个例子说明了怎样阻止默认行为的发生：

#### JavaScript

```js
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  const warn = "preventDefault() 将导致你无法选中此项\n";
  document.getElementById("output-box").innerText += warn;
  event.preventDefault();
}
```

#### HTML

```html
<p>请点击复选框控件。</p>

<form>
  <label for="id-checkbox">复选框：</label
  ><input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### 结果

{{EmbedLiveSample("阻止默认的点击事件执行")}}

### 在编辑字段中阻止按键

下面的这个例子说明了如何使用 `preventDefault()` 在文本编辑字段中阻止有效的文本输入。如今，你通常可以使用[原生的 HTML 表单验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)来代替。

#### HTML

此 HTML 表单用于捕获用户输入。由于我们只对按键输入感兴趣，因此我们禁用 `autocomplete` 来防止浏览器使用缓存的值填充输入字段。

```html
<div class="container">
  <p>请仅用小写字母输入你的名字。</p>

  <form>
    <input type="text" id="my-textbox" autocomplete="off" />
  </form>
</div>
```

#### CSS

当用户按下一个无效按键的时候，我们就给这个警告框加上一些样式：

```css
.warning {
  border: 2px solid #f39389;
  border-radius: 2px;
  padding: 10px;
  position: absolute;
  background-color: #fbd8d4;
  color: #3b3c40;
}
```

#### JavaScript

这里是相关的 JavaScript 代码。首先，监听 [`keypress`](/zh-CN/docs/Web/API/Element/keypress_event) 事件：

```js
const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keydown", checkName, false);
```

`checkName()` 方法可以监听按键并且决定是否允许按键的默认行为发生。

```js
function checkName(evt) {
  const key = evt.key;
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  if (!lowerCaseAlphabet.includes(key)) {
    evt.preventDefault();
    displayWarning(`请仅用小写字母。\n你按下了：${key}\n`);
  }
}
```

`displayWarning()` 方法显示了一个问题的通知。这不是一种优雅的方法，但是确实可以达到我们的目的。

```js
let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerText = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    // 在 myTextbox 后插入 warningBox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}
```

#### 结果

{{ EmbedLiveSample('在编辑字段中阻止按键', 600, 200) }}

## 备注

在事件流的任何阶段调用 `preventDefault()` 都会取消事件，这意味着任何通常被该实现触发并作为结果的默认行为都不会发生。

你可以使用 {{domxref("Event.cancelable")}} 来检查该事件是否支持取消。为一个不可取消的事件调用 `preventDefault()` 将没有效果。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
