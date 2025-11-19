---
title: :out-of-range
slug: Web/CSS/Reference/Selectors/:out-of-range
---

**`:out-of-range`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)表示一个 {{htmlelement("input")}} 元素，其当前值处于属性 [`min`](/zh-CN/docs/Web/HTML/Reference/Elements/input#attr-min) 和 [`max`](/zh-CN/docs/Web/HTML/Reference/Elements/input#attr-max) 限定的范围外。

{{InteractiveExample("CSS Demo: :out-of-range", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:out-of-range {
  background-color: orangered;
}
```

```html interactive-example
<form>
  <label for="amount">How many tickets? (You can buy 2-6 tickets)</label>
  <input id="amount" name="amount" type="number" min="2" max="6" value="4" />

  <label for="dep">Departure Date: (Whole year 2022 is acceptable)</label>
  <input
    id="dep"
    name="dep"
    type="date"
    min="2022-01-01"
    max="2022-12-31"
    value="2025-05-05" />

  <label for="ret">Return Date: (Whole year 2022 is acceptable)</label>
  <input id="ret" name="ret" type="date" min="2022-01-01" max="2022-12-31" />
</form>
```

这个伪类很有用，可以给用户提供一个视觉提示，让他们知道字段的当前值是否超出了允许的范围。

> [!NOTE]
> 该伪类仅适用于具有（并可以接受）范围限制的元素。如果没有这样的限制，元素值就无所谓“in-range”和“out-of-range”。

## 语法

```css
:out-of-range {
  /* ... */
}
```

## 示例

### HTML

```html
<form action="" id="form1">
  <p>Values between 1 and 10 are valid.</p>
  <ul>
    <li>
      <input
        id="value1"
        name="value1"
        type="number"
        placeholder="1 to 10"
        min="1"
        max="10"
        value="12" />
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
  content: "okay.";
}

input:out-of-range + label::after {
  content: "out of range!";
}
```

### 结果

{{EmbedLiveSample('示例', 600, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":in-range")}}
- [表单数据校验](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)
