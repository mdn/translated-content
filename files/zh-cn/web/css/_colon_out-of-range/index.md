---
title: ':out-of-range'
slug: Web/CSS/:out-of-range
---

{{CSSRef}}

**`:out-of-range`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/CSS/Pseudo-classes) 表示一个 {{htmlelement("input")}} 元素，其当前值处于属性 [`min`](/zh-CN/docs/Web/HTML/Element/input#attr-min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#attr-max) 限定的范围外。

```css
/* 该伪类可选定任意的<input>, 但只有在该元素指定了取值范围，并且元素值处于指定范围时才有效 */
input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
}
```

该伪类用于给用户一个可视化的提示，表示输入域的当前值处于允许范围外。

> **备注：** 该伪类仅适用于那些拥有（或可以接受）取值范围设定的元素。若缺少此类设定，元素值就无所谓“in-range”和“out-range”。

## 语法

{{csssyntax}}

## 示例

### HTML

```html
<form action="" id="form1">
  <ul>Values between 1 and 10 are valid.
    <li>
      <input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12">
      <label for="value1">Your value is </label>
    </li>
  </ul>
</form>
```

### CSS

```css
li {
  list-style: none;
  margin-bottom: 1em;
}

input {
  border: 1px solid black;
}

input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
  border: 2px solid red;
}

input:in-range + label::after {
  content: 'okay.';
}

input:out-of-range + label::after {
  content: 'out of range!';
}
```

### 输出

{{EmbedLiveSample('示例', 600, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":in-range")}}
- [Form data validation](/zh-CN/docs/Learn/HTML/Forms/Form_validation)
