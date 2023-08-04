---
title: ":placeholder-shown"
slug: Web/CSS/:placeholder-shown
---

{{CSSRef}}

**`:placeholder-shown`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示当前显示[占位符文本](/zh-CN/docs/Web/HTML/Element/input#placeholder)的任何 {{htmlElement("input")}} 或 {{htmlElement("textarea")}} 元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-placeholder-shown.html", "tabbed-shorter")}}

## 语法

```css
:placeholder-shown {
  /* ... */
}
```

## 示例

### 基础示例

该示例中，输入框在显示占位符时将应用特殊字体和边框样式。

#### HTML

```html
<input placeholder="在这里输入一些东西！" />
```

#### CSS

```css
input {
  border: 1px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border-color: teal;
  color: purple;
  font-style: italic;
}
```

#### 结果

{{EmbedLiveSample('基础示例', 200, 60)}}

### 文本溢出

当表单字段太小时，占位文本可能会以不良方式被裁剪。你可以使用 {{cssxref("text-overflow")}} 属性来更改溢出文本的显示方式。

#### HTML

```html
<input id="input1" placeholder="名字、排行和序号" /> <br /><br />
<input id="input2" placeholder="名字、排行和序号" />
```

#### CSS

```css
#input2:placeholder-shown {
  text-overflow: ellipsis;
}
```

#### 结果

{{EmbedLiveSample("文本溢出", 200, 60)}}

### 自定义输入框

以下示例使用自定义样式突出显示了学生 ID 字段。

#### HTML

```html
<form id="test">
  <p>
    <label for="name">输入学生姓名：</label>
    <input id="name" placeholder="学生姓名" />
  </p>
  <p>
    <label for="branch">输入学生分会：</label>
    <input id="branch" placeholder="学生分会" />
  </p>
  <p>
    <label for="sid">输入学生 ID：</label>
    <input
      type="number"
      pattern="[0-9]{8}"
      title="8 digit ID"
      id="sid"
      class="studentid"
      placeholder="8 digit id" />
  </p>
  <input type="submit" />
</form>
```

#### CSS

```css
input {
  background-color: #e8e8e8;
  color: black;
}

input.studentid:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

#### 结果

{{EmbedLiveSample("自定义输入框", 200, 180)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("::placeholder")}} 伪元素为占位符*自身*设置样式。
- 相关的 HTML 元素：{{HTMLElement("input")}}、{{HTMLElement("textarea")}}
- [HTML 表单](/zh-CN/docs/Learn/Forms)
