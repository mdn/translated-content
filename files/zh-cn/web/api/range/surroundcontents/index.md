---
title: Range.surroundContents
slug: Web/API/Range/surroundContents
---

{{ ApiRef("Range") }}

**`Range.surroundContents()`** 方法将 {{ domxref("Range") }} 对象的内容移动到一个新的节点，并将新节点放到这个范围的起始处。

这个方法与 `newNode.appendChild(range.extractContents()); range.insertNode(newNode)` 等价。应用以后， `newNode` 包含在 `range` 的边界点中。

然而，如果 {{ domxref("Range") }} 断开了一个非 {{ domxref("Text") }} 节点，只包含了节点的其中一个边界点，就会抛出异常。也就是说，不像上述的等价方法，如果节点仅有一部分被选中，则不会被克隆，整个操作会失败。

## 语法

```plain
range.surroundContents(newParent);
```

### 参数

- `newParent`
  - : 一个包含内容的 {{ domxref("Node") }}。

## 示例

### HTML

```plain
<span class="header-text">Put this in a headline</span>
```

### JavaScript

```plain
const range = document.createRange();
const newParent = document.createElement('h1');

range.selectNode(document.querySelector('.header-text'));
range.surroundContents(newParent);
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)
