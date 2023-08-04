---
title: HTMLSelectElement.selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
---

{{APIRef("HTML DOM")}}

**`HTMLSelectElement.selectedIndex`** 是一个长整型数，它反映了被选中的第一个 {{HTMLElement("option")}} 元素的索引值。值为 -1 时表明没有元素被选中。

## 语法

```
var index = selectElem.selectedIndex;
selectElem.selectedIndex = index;
```

## 示例

### HTML

```html
<p id="p">selectedIndex: 0</p>

<select id="select">
  <option selected>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
  <option>Option D</option>
  <option>Option E</option>
</select>
```

### JavaScript

```js
var selectElem = document.getElementById("select");
var pElem = document.getElementById("p");

// 当有新的<option>元素被选中时
selectElem.addEventListener("change", function () {
  var index = selectElem.selectedIndex;
  // 把 index 数据添加到 p 元素中
  pElem.innerHTML = "selectedIndex: " + index;
});
```

{{EmbedLiveSample("示例", "200px", "130px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
