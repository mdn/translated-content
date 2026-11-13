---
title: DataTransfer：dropEffect 属性
short-title: dropEffect
slug: Web/API/DataTransfer/dropEffect
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.dropEffect`** 属性控制在拖放操作中给用户的反馈（通常是视觉上的）。它会影响在拖动过程中光标的手势。例如，当用户在一个放置目标元素上悬停时，浏览器的光标可能会预示了将会发生什么操作。

当 {{domxref("DataTransfer")}} 被创建时，`dropEffect` 被设置为一个字符串。读取该值会返回它的当前值。设置该值时，若新值是下面列出的值中的一个，这个属性的值就会被设置为这个新的值，其他的值都会被忽略。

对于 [`dragenter`](/zh-CN/docs/Web/API/HTMLElement/dragenter_event) 和 [`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event) 事件，`dropEffect` 会根据用户的请求的行为进行初始化。具体如何初始化和浏览器平台有关，但是通常来讲，用户可以通过按住修改键（如 alt 键）来修改预期行为。当我们期望得到一个指定的行为时而不是用户的请求行为时，可以通过 [`dragenter`](/zh-CN/docs/Web/API/HTMLElement/dragenter_event) 和 [`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event) 事件的事件处理器处理修改 `dropEffect` 的值。

对于 [`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event) 和 [`dragend`](/zh-CN/docs/Web/API/HTMLElement/dragend_event) 事件，`dropEffect` 会被设置为想要得到的值，即最后一次 [`dragenter`](/zh-CN/docs/Web/API/HTMLElement/dragenter_event) 或 [`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event) 事件后 `dropEffect` 的值。例如，在一个 [`dragend`](/zh-CN/docs/Web/API/HTMLElement/dragend_event) 事件中，如果期望得到的 dropEffect 是“move”，那么被拖动的数据会从源中移除。

## 语法

```js
dataTransfer.dropEffect;
```

### 值

一个代表拖动操作效果的字符串。可能的值有：

- `copy`
  - : 在新位置生成源项的副本
- `move`
  - : 将项目移动到新位置
- `link`
  - : 在新位置建立源项目的链接
- `none`
  - : 项目未能被放置。

将任何其他值赋给 `dropEffect` 都没有效果，此时只会保留旧值。

## 示例

下述示例演示了 `dropEffect` 和 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 属性的用法。

### HTML

```html
<div>
  <p id="source" draggable="true">
    选中这一元素，拖动它到可放置区域，然后释放选择以移动该元素。
  </p>
</div>
<div id="target">可放置区域</div>
```

### CSS

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
```

### JavaScript

```js
const source = document.getElementById("source");
const target = document.getElementById("target");

source.addEventListener("dragstart", (ev) => {
  console.log(
    `dragStart：dropEffect = ${ev.dataTransfer.dropEffect}；effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );

  // 将该元素的 id 添加到拖动负载中，以便放置事件的处理器能分清要将哪个元素添加到树中
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
});

target.addEventListener("drop", (ev) => {
  console.log(
    `drop：dropEffect = ${ev.dataTransfer.dropEffect}；effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );
  ev.preventDefault();

  // 获取目标的 id 并将被移动的元素添加到目标的 DOM 中
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
});

target.addEventListener("dragover", (ev) => {
  console.log(
    `dragOver：dropEffect = ${ev.dataTransfer.dropEffect}；effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );
  ev.preventDefault();
  // 设置 dropEffect 为 move
  ev.dataTransfer.dropEffect = "move";
});
```

{{EmbedLiveSample('示例', 300, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖动操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖动数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
