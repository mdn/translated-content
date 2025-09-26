---
title: HTMLSelectElement.remove()
slug: Web/API/HTMLSelectElement/remove
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.remove()`** 方法从一个 select 元素中删除指定序数的 option 元素。没有传参时为删除当前元素本身：[ChildNode.remove()](/zh-CN/docs/Web/API/Element/remove)。

## 语法

```js-nolint
remove(index)
```

### 参数

- `index` 是从 option {{ domxref("HTMLOptionElement") }} 集合中要移除元素的序数。如果序数对应的元素不存在，调用这个方法就没有任何效果。

## 例子

```js
var sel = document.getElementById("existingList");
sel.remove(1);

/*
  上面的代码会将下面的 select 元素结构：

  <select id="existingList" name="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
    <option value="3">Option: Value 3</option>
  </select>

  变成这样：

  <select id="existingList" name="existingList">
    <option value="1">Option: Value 1</option>
    <option value="3">Option: Value 3</option>
  </select>
*/
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{ domxref("ChildNode.remove") }}，当没有参数时 {{ domxref("HTMLSelectElement") }} 调用的是这个方法
- {{domxref("HTMLSelectElement") }} 实现了这个方法。
