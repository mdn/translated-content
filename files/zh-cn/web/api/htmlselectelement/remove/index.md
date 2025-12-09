---
title: HTMLSelectElement：remove() 方法
short-title: remove()
slug: Web/API/HTMLSelectElement/remove
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.remove()`** 方法会从 select 元素的 options 集合中移除指定索引处的元素。

## 语法

```js-nolint
remove(index)
```

### 参数

- `index`
  - : 一个从零开始的整数，表示要从集合中移除的 {{ domxref("HTMLOptionElement") }} 的索引。如果未找到该索引，则此方法不会产生任何效果。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```html
<select id="existingList" name="existingList">
  <option value="1">选项：值 1</option>
  <option value="2">选项：值 2</option>
  <option value="3">选项：值 3</option>
</select>
```

```js
let sel = document.getElementById("existingList");
sel.remove(1);
```

现在的 HTML 是：

```html
<select id="existingList" name="existingList">
  <option value="1">选项：值 1</option>
  <option value="3">选项：值 3</option>
</select>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("Element.remove") }}，当在 {{ domxref("HTMLSelectElement") }} 上调用无参数的 remove 时，会调用的对应方法。
- 实现该接口的 {{domxref("HTMLSelectElement") }}。
