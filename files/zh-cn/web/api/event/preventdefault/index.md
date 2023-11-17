---
title: event.preventDefault
slug: Web/API/Event/preventDefault
---

{{APIRef("DOM")}}

{{domxref("Event")}} 接口的 **`preventDefault()`** 方法，告诉{{Glossary("user agent", "用户代理")}}：如果此事件没有被显式处理，它默认的动作也不应该照常执行。此事件还是继续传播，除非碰到事件监听器调用 {{domxref("Event.stopPropagation", "stopPropagation()")}} 或 {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}}，才停止传播。

### 语法

```plain
event.preventDefault();
```

### 参数

无

### 返回值

`undefined`

## 示例

### 阻止默认的点击事件执行

选中复选框是点击复选框的默认行为。下面这个例子说明了怎样阻止默认行为的发生：

#### JavaScript

```js
document.querySelector("#id-checkbox").addEventListener(
  "click",
  function (event) {
    document.getElementById("output-box").innerHTML +=
      "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
  },
  false,
);
```

#### HTML

```html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### 结果

你可以看到如下的行为：

{{EmbedLiveSample("阻止默认的点击事件执行")}}

### 在编辑域中阻止按键

下面的这个例子说明了如何使用 `preventDefault()` 在文本编辑域中阻止有效的文本输入。如今，你通常可以使用[原生的 HTML 表单验证](/zh-CN/docs/Learn/HTML/Forms/Data_form_validation)来代替。

#### HTML

表单：

```html
<div class="container">
  <p>Please enter your name using lowercase letters only.</p>

  <form>
    <input type="text" id="my-textbox" />
  </form>
</div>
```

#### CSS

当用户按下一个有效按键的时候，我们就给这个 warning box 加上一些样式：

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
var myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keypress", checkName, false);
```

`checkName()` 方法可以监听按键并且决定是否允许按键的默认行为发生。

```js
function checkName(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      displayWarning(
        "Please use lowercase letters only." +
          "\n" +
          "charCode: " +
          charCode +
          "\n",
      );
    }
  }
}
```

`displayWarning()` 方法显示了一个问题的通知。这不是一种优雅的方法，但是确实可以达到我们的目的。

```js
var warningTimeout;
var warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = window.setTimeout(function () {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}
```

#### 结果

这里就是代码的执行结果：

{{ EmbedLiveSample('在编辑域中阻止按键', 600, 200) }}

## 备注

在事件流的任何阶段调用 `preventDefault()` 都会取消事件，这意味着任何通常被该实现触发并作为结果的默认行为都不会发生。

你可以使用 {{domxref("Event.cancelable")}} 来检查该事件是否支持取消。为一个不支持 cancelable 的事件调用 `preventDefault()` 将没有效果。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
