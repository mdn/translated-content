---
title: Selection：modify() 方法
short-title: modify()
slug: Web/API/Selection/modify
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}}

**`Selection.modify()`** 方法会使用一些简单的文本命令，对当前的选区或光标位置进行修改。

## 语法

```js-nolint
modify(alter, direction, granularity)
```

### 参数

- `alter`
  - : 要应用的更改类型。指定 `"move"` 表示移动当前的光标位置，或指定 `"extend"` 表示扩展当前的选区。
- `direction`
  - : 用于调整当前选区的方向。你可以指定 `"forward"` 或 `"backward"`，根据选区所在位置的语言方向来进行相应的调整；如果想要按指定的物理方向调整，则可以指定 `"left"` 或 `"right"`。
- `granularity`
  - : 用于调整当前选区或光标位置的距离。可以按 `"character"`、`"word"`、`"sentence"`、`"line"`、`"paragraph"`、`"lineboundary"`、`"sentenceboundary"`、`"paragraphboundary"` 或 `"documentboundary"` 来进行移动。

> [!NOTE]
> Firefox **不支持** `"sentence"`、`"paragraph"`、`"sentenceboundary"`、`"paragraphboundary"` 或 `"documentboundary"`。而 WebKit 和 Blink 则支持这些选项。

> [!NOTE]
> 从 Firefox 5 开始，`"word"` 这一粒度不再包含其后的空格，而不再受平台默认行为的影响。这样做使行为更加一致，也让它与 WebKit 过去的实现方式保持一致，不过遗憾的是，WebKit 最近已经更改了他们的实现行为。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

这个示例演示了用于修改选区的各种 `granularity` 选项。请先在示例中任意位置点击（也可以先选中一些文本），然后点击按钮来扩展选区。

### HTML

```html
<p>在这个示例中任意位置点击。然后点击下面的按钮来扩展选区，看看会发生什么！</p>
<p>
  微风穿过树梢，阳光在地面投下斑驳的影子。远处的街道上传来零星的脚步声，时间仿佛在这一刻慢了下来。人们在各自的生活中前行，有人匆忙，有人驻足，但世界依旧按照自己的节奏缓缓流动。
</p>

<label for="granularity">粒度：</label>
<select id="granularity">
  <option value="character">字符</option>
  <option value="word">单词</option>
  <option value="sentence">句子</option>
  <option value="line">行</option>
  <option value="paragraph">段落</option>
  <option value="lineboundary">行边界</option>
  <option value="sentenceboundary">句子边界</option>
  <option value="paragraphboundary">段落边界</option>
  <option value="documentboundary">文档边界</option>
</select>

<br /><br />

<button>扩展选区</button>
```

### JavaScript

```js
let select = document.querySelector("select");
let button = document.querySelector("button");

button.addEventListener("click", modify);

function modify() {
  let selection = window.getSelection();
  selection.modify("extend", "forward", select.value);
}
```

### 结果

{{EmbedLiveSample("示例", 700, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{DOMxRef("Selection")}} 接口。
