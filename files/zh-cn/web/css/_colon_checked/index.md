---
title: ":checked"
slug: Web/CSS/:checked
---

{{CSSRef}}

**`:checked`** CSS [伪类](/zh-CN/docs/CSS/Pseudo-classes)选择器表示任何处于选中状态的**radio**(`<input type="radio">`), **checkbox** (`<input type="checkbox">`) 或 ("select") 元素中的**option** HTML 元素 ("option")。

```css
/* 匹配任意被勾选/选中的 radio(单选按钮),checkbox(复选框),或者 option(select 中的一项) */
:checked {
  margin-left: 25px;
  border: 1px solid blue;
}
```

用户通过勾选/选中元素或取消勾选/取消选中，来改变该元素的 :checked 状态。

> **备注：** 因为浏览器经常将 `<option>` 视为[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)，因此不同的浏览器通过`:checked`伪类渲染出来的效果也不尽相同。

## 语法

```css
:checked {
  /* CSS declarations */
}
```

## 示例

### 基础示例

#### HTML

```html
<div>
  <input type="radio" name="my-input" id="yes" />
  <label for="yes">Yes</label>

  <input type="radio" name="my-input" id="no" />
  <label for="no">No</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in" />
  <label for="opt-in">Check me!</label>
</div>

<select name="my-select" id="fruit">
  <option value="opt1">Apples</option>
  <option value="opt2">Grapes</option>
  <option value="opt3">Pears</option>
</select>
```

#### CSS

```css
div,
select {
  margin: 8px;
}

/* Labels for checked inputs */
input:checked + label {
  color: red;
}

/* Radio element, when checked */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Checkbox element, when checked */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Option elements, when selected */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

#### 结果

{{EmbedLiveSample("基础示例")}}

### 借用隐藏的 checkbox 来切换元素的样式（显示/隐藏）

这个例子利用了`:checked`伪类，让用户基于复选框的状态切换内容，而无需使用 JavaScript。

#### HTML

```html
<input type="checkbox" id="expand-toggle" />

<table>
  <thead>
    <tr>
      <th>Column #1</th>
      <th>Column #2</th>
      <th>Column #3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
    <tr>
      <td>[cell text]</td>
      <td>[cell text]</td>
      <td>[cell text]</td>
    </tr>
    <tr>
      <td>[cell text]</td>
      <td>[cell text]</td>
      <td>[cell text]</td>
    </tr>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
  </tbody>
</table>

<label for="expand-toggle" id="expand-btn">Toggle hidden rows</label>
```

#### CSS

```css
/* Hide the toggle checkbox */
#expand-toggle {
  display: none;
}

/* Hide expandable content by default */
.expandable {
  visibility: collapse;
  background: #ddd;
}

/* Style the button */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ff7;
  border: 1px solid;
  border-radius: 3px;
}

/* Show hidden content when the checkbox is checked */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* Style the button when the checkbox is checked */
#expand-toggle:checked ~ #expand-btn {
  background-color: #ccc;
}
```

#### 结果

{{EmbedLiveSample("借用隐藏的 checkbox 来切换元素的样式（显示/隐藏）", "auto", 220)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
