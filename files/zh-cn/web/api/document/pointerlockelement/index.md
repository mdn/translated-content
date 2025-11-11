---
title: Document：pointerLockElement 属性
slug: Web/API/Document/pointerLockElement
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

{{domxref("Document")}} 接口的 **`pointerLockElement`** 只读属性提供了指针锁定时鼠标事件的目标元素。如果指针处于锁定等待中、指针没有被锁定或目标元素在另外一个文档中，返回 `null`。

## 值

{{domxref("Element")}} 或 `null`。

## 示例

### 检查指针锁定状态

此示例包含一个 {{htmlelement("div")}} 元素，该元素又包含一个 {{htmlelement("button")}}。单击按钮会请求 `<div>` 的指针锁定。

此示例还监听 {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} 事件：触发此事件时，如果文档中的元素具有指针锁定，则事件处理程序会禁用“锁定”按钮，否则启用该按钮。

这样做的效果是，如果你单击“锁定”按钮，指针将被锁定，按钮将被禁用：如果你随后退出指针锁定（例如，按 <kbd>Escape</kbd> 键），按钮将再次启用。

#### HTML

```html
<div id="container">
  <button id="lock">锁定</button>
</div>
```

#### CSS

```css
div {
  height: 100px;
  width: 200px;
  border: 2px solid blue;
}
```

#### JavaScript

```js
const lock = document.querySelector("#lock");
const container = document.querySelector("#container");

lock.addEventListener("click", () => {
  container.requestPointerLock();
});

document.addEventListener("pointerlockchange", () => {
  const locked = document.pointerLockElement;
  lock.disabled = Boolean(locked);
});
```

#### 结果

{{EmbedLiveSample("检查指针锁定状态")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/zh-CN/docs/Web/API/Pointer_Lock_API)
