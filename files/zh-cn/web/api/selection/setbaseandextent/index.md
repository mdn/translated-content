---
title: Selection.setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

**`setBaseAndExtent()`** 方法是 {{domxref("Selection")}} 接口用来选中并设置在两个特定的 DOM 节点中文本选中的范围，并且选中的任何内容都位于两个节点之间。

## 语法

```
sel.setBaseAndExtent(anchorNode,anchorOffset,focusNode,focusOffset)
```

### 参数

- _`anchorNode`_
  - : 锚节点 - 选中内容的开始节点
- _`anchorOffset`_
  - : 选中范围内起点位置在锚节点下第几个子节点的位置。例如，如果是值为 0 的话，整个节点都是被选中的。如果值为 1 的话，那么至少整个节点至少有一个子节点被选中。以此类推。
- _`focusNode`_
  - : 焦点节点 - 选中内容的结尾节点
- `focusOffset`
  - : 选中范围内结束位置在焦点节点下第几个子节点的位置。例如，如果是值为 0 的话，整个节点都是被选中的。如果值为 1 的话，那么至少整个节点至少有一个子节点被选中。以此类推。

> **备注：** 如果源代码中`焦点节点`出现在`锚节点`之前的话，这两个将在参数中互换位置，也就是锚节点变为了焦点节点、焦点节点变为了锚节点。另外，这些参数的用法会颠倒 — 插入符是放置在文本的开头而不是结尾，这对于任何可能遵循这规则的键盘命令都是很重要的。例如，<kbd>Shift</kbd> + <kbd>➡︎</kbd> 会使选中状态范围的从开始缩小，而不是在结尾增加。

### 返回值

Void.

### 说明

如果`锚偏移值`超过了`锚节点`内部的子节点个数，或则如果`焦点偏移值`超过了`焦点节点`内部的子节点个数，这个{{domxref("IndexSizeError")}} 选中会被丢弃。

## 示例

一个例子，我们有两个包含多个 span 的段落，每一个 span 包含一个单词。然后第一个段落作为`锚节`点并且第二个作为`焦点节点`.我们还有一个额外的段落插入在两个节点之间。

然后，这里有两个允许你去设置锚节点和焦点节点的表单输入框 — 它们都有一个默认值为 0.

这里还有一个按钮用来点击调用运行包含`setBaseAndExtent()`方法的函数，最后输出选中内容到 HTML 的最底部。

```html
<h1>setBaseAndExtent example</h1>
<div>
  <p class="one">
    <span>Fish</span><span>Dog</span><span>Cat</span><span>Bird</span>
  </p>
  <p>MIDDLE</p>
  <p class="two">
    <span>Car</span><span>Bike</span><span>Boat</span><span>Plane</span>
  </p>
</div>

<div>
  <p>
    <label for="aOffset">Anchor offset</label>
    <input id="aOffset" name="aOffset" type="number" value="0" />
  </p>
  <p>
    <label for="fOffset">Focus offset</label>
    <input id="fOffset" name="fOffset" type="number" value="0" />
  </p>
  <p><button>Capture selection</button></p>
</div>

<p><strong>Output</strong>: <span class="output"></span></p>
```

JavaScript 像这样：

```js
var one = document.querySelector(".one");
var two = document.querySelector(".two");

var aOffset = document.getElementById("aOffset");
var fOffset = document.getElementById("fOffset");

var button = document.querySelector("button");

var output = document.querySelector(".output");

var selection;

button.onclick = function () {
  try {
    selection = document.getSelection();
    selection.setBaseAndExtent(one, aOffset.value, two, fOffset.value);
    var text = selection.toString();
    output.textContent = text;
  } catch (e) {
    output.textContent = e.message;
  }
};
```

在下面在线运行实例，设置不同的偏移值去观察它怎么去影响选中内容的。

{{ EmbedLiveSample('示例', '100%', 370) }}

> **备注：** 实例在这里 [example on GitHub](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html) ([see it live also](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html).)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Selection")}}
