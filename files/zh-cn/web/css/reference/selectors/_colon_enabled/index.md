---
title: :enabled
slug: Web/CSS/Reference/Selectors/:enabled
---

**`:enabled`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)表示任何已启用的元素。如果元素可以被激活（例如被选择、单击、输入文本等），或者能够获得焦点，那么它就是启用的。该元素还有一个被禁用的状态，在此状态下它无法被激活或接受焦点。

{{InteractiveExample("CSS Demo: :enabled", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:enabled {
  background-color: gold;
}
```

```html interactive-example
<form>
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" />

  <label for="emp">Employed:</label>
  <select id="emp" name="emp" disabled>
    <option>No</option>
    <option>Yes</option>
  </select>

  <label for="empDate">Employment Date:</label>
  <input id="empDate" name="empDate" type="date" disabled />

  <label for="resume">Resume:</label>
  <input id="resume" name="resume" type="file" />
</form>
```

## 语法

```plain
:enabled
```

## 示例

以下示例将在启用状态下把类型为文本输入框和按钮的 {{htmlElement("input")}} 颜色设置为绿色，禁用时设置为灰色。这有助于用户理解哪些元素可以进行交互操作。

### HTML

```html
<form action="url_of_form">
  <label for="FirstField">第一个字段（已启用）:</label>
  <input type="text" id="FirstField" value="Lorem" /><br />

  <label for="SecondField">第一个字段（已禁用）:</label>
  <input type="text" id="SecondField" value="Ipsum" disabled="disabled" /><br />

  <input type="button" value="Submit" />
</form>
```

### CSS

```css
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
```

### 结果

{{EmbedLiveSample("示例",550,95)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref(":disabled") }}
