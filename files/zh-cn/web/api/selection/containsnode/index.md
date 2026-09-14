---
title: Selection：containsNode() 方法
short-title: containsNode()
slug: Web/API/Selection/containsNode
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{ ApiRef("DOM") }}

**`Selection.containsNode()`** 方法用于指示指定节点是否属于当前选区。

## 语法

```js-nolint
containsNode(node)
containsNode(node)
containsNode(node, partialContainment)
```

### 参数

- `node`
  - : 要检查是否在选区中的节点。
- `partialContainment` {{optional_inline}}
  - : 当为 `true` 时，只要节点的部分内容在选区中，`containsNode()` 就会返回 `true`；当为 `false` 时，只有当整个节点都在选区中时，`containsNode()` 才会返回 `true`。如果未指定，则默认值为 `false`。

### 返回值

如果指定节点属于选区，则返回 `true`；否则返回 `false`。

## 示例

### 检查是否有选区

此代码片段检查 body 元素内部是否有任何内容被选中。

```js
console.log(window.getSelection().containsNode(document.body, true));
```

### 寻找隐藏的单词

在此示例中，当你选中那个秘密单词时，会显示一条消息。代码使用 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 来监听 {{domxref("Document/selectionchange_event", "selectionchange")}} 事件。

#### HTML

```html
<p>你能找到那个秘密单词吗？</p>
<p>嗯，它会不会在 <span id="secret">SECRET</span> 这里？</p>
<p id="win" hidden>你找到了！</p>
```

#### CSS

```css
#secret {
  color: transparent;
}
```

#### JavaScript

```js
const secret = document.getElementById("secret");
const win = document.getElementById("win");

// 监听选区变化
document.addEventListener("selectionchange", () => {
  const selection = window.getSelection();
  const found = selection.containsNode(secret);

  win.toggleAttribute("hidden", !found);
});
```

#### 结果

{{EmbedLiveSample("寻找隐藏的单词")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("Selection")}} 接口。
