---
title: HTMLFormControlsCollection：namedItem() 方法
slug: Web/API/HTMLFormControlsCollection/namedItem
l10n:
  sourceCommit: db32c2f103885a65715e2cce48bda44be03f44f7
---

{{APIRef("HTML DOM")}}

**`HTMLFormControlsCollection.namedItem()`** 方法返回集合中的 {{domxref("RadioNodeList")}} 或 {{domxref("Element")}}，其 `name` 或 `id` 匹配指定名称，如果没有节点匹配，则返回 `null`。

请注意，此版本的 `namedItem()` 隐藏从 {{domxref("HTMLCollection")}} 继承的项。与该方法类似，在 Javascript 中，使用数组括号语法和{{jsxref("String", "字符串", "", 1)}}，例如 `collection["value"]` 等价于 `collection.namedItem("value")`。

## 语法

```js-nolint
namedItem(name)
[name]
```

### 参数

- `name`
  - : 一个字符串，用于匹配 `HTMLFormControlsCollection` 对象中控件的 `name` 或 `id` 属性。

### 返回值

- {{domxref("RadioNodeList")}}、{{domxref("Element")}} 或者 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 示例

### 使用 namedItem()

#### HTML

```html
<form>
  <label for="notes">备忘录：</label>
  <input id="notes" name="my-form-control" type="text" />

  <label for="start">开始日期：</label>
  <input id="start" name="my-form-control" type="date" />
</form>

<div id="output"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

#### JavaScript

```js
const form = document.querySelector("form");
const items = form.elements.namedItem("my-form-control");

const output = document.querySelector("#output");
const itemIDs = Array.from(items)
  .map((item) => `"${item.id}"`)
  .join(", ");
output.textContent = `我的项目：${itemIDs}`;
```

#### 结果

{{EmbedLiveSample("使用 namedItem()")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所代替的 {{domxref("HTMLCollection.namedItem")}}
