---
title: DataTransfer：effectAllowed 属性
short-title: effectAllowed
slug: Web/API/DataTransfer/effectAllowed
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.effectAllowed`** 属性指定拖动操作所允许的效果。_copy_ 操作用于指示被拖动的数据将从当前位置复制到放置位置。_move_ 操作用于指定被拖动的数据将被移动。_link_ 操作用于指示将在源位置和放置位置之间创建某种形式的关系或连接。

你应在 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件中为拖动源设置预期拖动效果。在 {{domxref("HTMLElement/dragenter_event", "dragenter")}} 和 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件处理器中，该属性将被设置为在
{{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件期间分配的任何值，因此，你可以使用 `effectAllowed` 来确定什么效果被允许使用。

向 `effectAllowed` 赋除 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 外其他事件的值的操作无效。

### 值

表示允许的拖动操作字符串，取值可以是：

- `none`
  - : 不允许放置项目。
- `copy`
  - : 可能会在新位置生成源项目的复制项。
- `copyLink`
  - : 允许 _copy_ 或者 _link_ 操作。
- `copyMove`
  - : 允许 _copy_ 或者 _move_ 操作。
- `link`
  - : 可能在新位置建立与源项目的链接。
- `linkMove`
  - : 允许 _link_ 或者 _move_ 操作。
- `move`
  - : 项目可能被移动到新位置。
- `all`
  - : 允许所有的操作。
- `uninitialized`
  - : 效果未设置时的默认值，等同于 _all_。

向 `effectAllowed` 赋其他值的操作无效，其取值不会被修改。

## 示例

### 设置 effectAllowed

在本示例中，我们在 `dragstart` 处理器中将 `effectAllowed` 设置为 `"move"`。

#### HTML

```html
<div>
  <p id="source" draggable="true">
    选中该元素并将其拖动到可放置区域，随后释放选择以移动该元素。
  </p>
</div>
<div id="target">可放置区域</div>
<pre id="output"></pre>
<button id="reset">重置</button>
```

#### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}

#source {
  color: blue;
  border: 1px solid black;
}

#target {
  border: 1px solid black;
}

#output {
  height: 100px;
  overflow: scroll;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  log(`dragstart: effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  // 将该元素的 id 添加到拖动负载中，以便放置事件的处理器能分清要将哪个元素添加到树中
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
  log(`drop：effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  ev.preventDefault();
  // 获取目标的 id 并将被移动的元素添加到目标的 DOM 中
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragoverHandler(ev) {
  log(`dragover：effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  ev.preventDefault();
}

const source = document.querySelector("#source");
const target = document.querySelector("#target");

source.addEventListener("dragstart", dragstartHandler);
target.addEventListener("dragover", dragoverHandler);
target.addEventListener("drop", dropHandler);

function log(message) {
  const output = document.querySelector("#output");
  output.textContent = `${output.textContent}\n${message}`;
  output.scrollTop = output.scrollHeight;
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### 结果

{{EmbedLiveSample("设置 effectAllowed", 0, 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖动操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖动数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
